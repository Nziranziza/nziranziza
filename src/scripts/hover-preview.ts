/**
 * Floating cover preview for a list of `[data-preview]` links (#9).
 * One shared <img> per list follows the cursor (+24px, lerp 0.15) and swaps
 * `src` per row. Fine pointers only, and off for reduced motion, which is
 * re-checked while running in case the setting changes after load.
 */
const OFFSET = 24;
const LERP = 0.15;
const WIDTH = 320; // w-80
const HEIGHT = 200; // h-50

export function initHoverPreview(list: HTMLElement): void {
  if (!matchMedia("(hover: hover) and (pointer: fine)").matches) return;
  const reduced = matchMedia("(prefers-reduced-motion: reduce)");
  if (reduced.matches) return;

  const rows = list.querySelectorAll<HTMLElement>("[data-preview]");
  rows.forEach((row) => {
    new Image().src = row.dataset.preview ?? "";
  });

  const img = document.createElement("img");
  img.alt = "";
  img.setAttribute("aria-hidden", "true");
  img.className =
    "pointer-events-none fixed top-0 left-0 z-10 h-50 w-80 scale-96 object-cover opacity-0 shadow-preview transition-[opacity,scale] duration-(--dur-base) ease-out";
  document.body.append(img);

  let x = 0;
  let y = 0;
  let targetX = 0;
  let targetY = 0;
  let frame = 0;
  let visible = false;

  const place = () => {
    img.style.translate = `${x}px ${y}px`;
  };

  // Flip to the other side of the cursor where the image would leave the viewport.
  const aim = ({ clientX, clientY }: PointerEvent) => {
    targetX = clientX + OFFSET + WIDTH > innerWidth ? clientX - OFFSET - WIDTH : clientX + OFFSET;
    targetY =
      clientY + OFFSET + HEIGHT > innerHeight ? clientY - OFFSET - HEIGHT : clientY + OFFSET;
  };

  const hide = () => {
    visible = false;
    cancelAnimationFrame(frame);
    frame = 0;
    img.classList.add("opacity-0", "scale-96");
  };

  const move = () => {
    frame = 0;
    if (reduced.matches) return hide();
    x += (targetX - x) * LERP;
    y += (targetY - y) * LERP;
    place();
    // Settled: idle until the next pointermove.
    if (Math.abs(targetX - x) + Math.abs(targetY - y) > 0.5) frame = requestAnimationFrame(move);
  };

  list.addEventListener("pointermove", (event) => {
    aim(event);
    if (visible && !frame) frame = requestAnimationFrame(move);
  });

  list.addEventListener("pointerover", (event) => {
    if (reduced.matches || event.pointerType !== "mouse" || !(event.target instanceof Element))
      return;
    const src = event.target.closest<HTMLElement>("[data-preview]")?.dataset.preview;
    if (!src) return;
    if (img.getAttribute("src") !== src) img.src = src;
    if (visible) return;
    // Start at the cursor instead of gliding in from the last position.
    aim(event);
    x = targetX;
    y = targetY;
    place();
    visible = true;
    img.classList.remove("opacity-0", "scale-96");
  });

  list.addEventListener("pointerleave", hide);
  document.addEventListener("astro:before-swap", hide, { once: true });
}
