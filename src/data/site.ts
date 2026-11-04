/** Site-wide data: identity, now status, contact, socials and education. */
export const site = {
  name: "Daniel Nziranziza",
  role: "Software Engineer",
  url: "https://nziranziza.dev",
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
  /** The /about education list, newest first. Years only. */
  education: [
    {
      degree: "BSc Computer Science",
      school: "University of Kigali",
      start: 2021,
      end: 2024,
    },
    {
      degree: "Computer & Software Engineering",
      school: "University of Rwanda",
      start: 2017,
      end: 2018,
    },
    {
      degree: "Mathematics, Physics & Computer Science",
      school: "Byimana School of Sciences",
      start: 2011,
      end: 2016,
    },
  ],
} as const;
