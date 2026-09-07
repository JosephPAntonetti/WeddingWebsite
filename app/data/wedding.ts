import mainContent from "../../assets/maincontent.jpg";

/**
 * Single source of truth for everything the site says. Copy, dates and photos
 * live here so the components stay presentational and the couple can edit the
 * wedding without touching JSX.
 */

export const couple = {
  first: "Lauren",
  second: "Joe",
  monogram: "L & J",
} as const;

/** Ceremony start, in the venue's own timezone. */
export const weddingDate = new Date("2027-06-19T17:00:00-04:00");

export const dateLabel = {
  short: "June 19, 2027",
  year: "Two thousand twenty-seven",
} as const;

export const venue = {
  name: "The University Club of New York",
  street: "1 West 54th Street",
  city: "New York, New York",
} as const;

/** Google Calendar "add to calendar" link, built from the date above. */
export const calendarUrl = (() => {
  const url = new URL("https://calendar.google.com/calendar/render");
  url.search = new URLSearchParams({
    action: "TEMPLATE",
    text: `${couple.first} & ${couple.second}'s Wedding`,
    dates: "20270619/20270620",
    location: `${venue.name}, ${venue.street}, ${venue.city}`,
  }).toString();
  return url.toString();
})();

export const faqs = [
  {
    question: "May I bring a guest?",
    answer:
      "Your invitation names everyone we have room for. If it reads 'and guest', we would love to meet them. If you are unsure, write to us and we will check the list.",
  },
  {
    question: "Are children invited?",
    answer:
      "With the exception of those in the wedding party, this is an adults-only evening. We hope it gives you a rare night off.",
  },
  {
    question: "Is there parking?",
    answer:
      "There is no lot at the club, but several garages sit within a block on 54th and 55th. A car service at the end of the night is the easier choice.",
  },
  {
    question: "What time should I arrive?",
    answer:
      "Doors open at half past four. The ceremony begins promptly at five, and the doors close when it does.",
  },
  {
    question: "Will the ceremony be indoors?",
    answer:
      "Yes. The ceremony, dinner and dancing are all indoors. Cocktails spill out onto the terrace, weather permitting.",
  },
  {
    question: "What about dietary restrictions?",
    answer:
      "Tell us when you reply and the kitchen will take care of it. Vegetarian, vegan and gluten-free plates are all available.",
  },
  {
    question: "How do I reply?",
    answer:
      "Replies are not open just yet. They will appear on this site in good time — until then, a note to either of us does the job.",
  },
] as const;

/**
 * Photographs, named for where they appear. Only one frame has been developed
 * so far, so each entry points at it with a different crop; swap in real files
 * as they arrive.
 */
export const photos = {
  hero: { src: mainContent, position: "50% 35%" },
  questions: {
    src: mainContent,
    alt: `${couple.first} and ${couple.second}`,
    position: "50% 65%",
  },
} as const;

export const navLinks = [
  { label: "The Invitation", to: "/" },
  { label: "Questions", to: "/faq" },
] as const;
