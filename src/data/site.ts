/** Site-wide data: identity, now status, contact and socials. */
export const site = {
  name: "Daniel Nziranziza",
  role: "Software Engineer",
  location: {
    city: "Kigali",
    country: "RW",
    timeZone: "Africa/Kigali",
  },
  /** The home page "Now" line. */
  now: "Open to new roles · Building HomeTV for Apple TV",
  email: "nziranzizadaniel@gmail.com",
  socials: [
    { label: "GitHub", url: "https://github.com/Nziranziza" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/nziranziza" },
    { label: "X", url: "https://x.com/nziranziza_" },
    { label: "Instagram", url: "https://instagram.com/nziranziza.dev" },
  ],
  source: "https://github.com/Nziranziza/nziranziza",
} as const;
