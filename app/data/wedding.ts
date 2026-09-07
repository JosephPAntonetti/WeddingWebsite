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
  long: "Saturday, the nineteenth of June",
  year: "Two thousand twenty-seven",
} as const;

export const venue = {
  name: "The University Club of New York",
  street: "1 West 54th Street",
  city: "New York, New York",
  mapUrl:
    "https://maps.google.com/?q=The+University+Club+of+New+York,+1+West+54th+Street,+New+York",
} as const;

export const rsvp = {
  deadline: "March 1, 2027",
  note: "Kindly reply by",
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

export const invitation = {
  eyebrow: "You're Invited",
  script: "Together with their families",
  body: [
    `${couple.first} and ${couple.second} invite you to share in the joy of their marriage,`,
    "an evening of old friends, long tables and later dancing than anyone plans on.",
  ],
} as const;

export const story = {
  eyebrow: "Our Story",
  script: "How we met",
  chapters: [
    {
      title: "How We Met",
      body: "A borrowed umbrella outside a bookshop on a grey Tuesday, and a conversation that outlasted the rain. Neither of us had anywhere to be, which turned out to be the point.",
    },
    {
      title: "How He Asked",
      body: "Six years later, on the same corner, with the same weather and a ring that had been hidden in a coat pocket for the better part of a week. She said yes before he finished asking.",
    },
  ],
} as const;

export const schedule = [
  { time: "4:30 PM", title: "Guests Arrive", detail: "Cocktails on the terrace" },
  { time: "5:00 PM", title: "The Ceremony", detail: "The Library" },
  { time: "6:00 PM", title: "Cocktail Hour", detail: "The Gallery" },
  { time: "7:30 PM", title: "Dinner & Toasts", detail: "The Grand Ballroom" },
  { time: "9:00 PM", title: "Dancing", detail: "Until the band gives out" },
  { time: "12:00 AM", title: "Last Call", detail: "A late send-off" },
] as const;

export const details = [
  {
    title: "Where To Stay",
    body: "A block of rooms is held under our names at two hotels a short walk from the club. Mention the wedding when you book.",
    actions: [
      { label: "The Warwick", href: "https://www.google.com/search?q=Warwick+New+York+hotel" },
      { label: "The Blakely", href: "https://www.google.com/search?q=Blakely+New+York+hotel" },
    ],
  },
  {
    title: "Getting Around",
    body: "The club sits between Fifth and Sixth on 54th. The E and M stop two blocks south, and cabs are easy at every hour of the night.",
    actions: [{ label: "Open In Maps", href: venue.mapUrl }],
  },
  {
    title: "Gifts",
    body: "Your presence is the whole of it. For those who insist, we have registered in two places and are saving toward a honeymoon.",
    actions: [
      { label: "Registry One", href: "https://www.zola.com" },
      { label: "Registry Two", href: "https://www.crateandbarrel.com/gift-registry" },
    ],
  },
] as const;

export const dressCode = {
  eyebrow: "Dress Code",
  script: "Black Tie Optional",
  body: "Tuxedos and dinner jackets for the gentlemen, long or midi gowns for the ladies. The terrace is stone and the evening is June, so choose your heels accordingly.",
} as const;

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
    answer: `Use the form on this site, or write to us the old-fashioned way. Either is welcome, so long as it reaches us by ${rsvp.deadline}.`,
  },
] as const;

/**
 * Photographs. Only one frame has been developed so far, so the gallery reads
 * it as a contact sheet — the same negative, printed at different crops. Drop
 * additional imports in here and the grid picks them up.
 */
export const gallery = [
  { src: mainContent, alt: `${couple.first} and ${couple.second}`, position: "50% 30%" },
  { src: mainContent, alt: "A quiet moment", position: "30% 45%" },
  { src: mainContent, alt: "The two of them", position: "70% 40%" },
  { src: mainContent, alt: "Hands", position: "50% 65%" },
  { src: mainContent, alt: "Looking back", position: "20% 25%" },
  { src: mainContent, alt: "The last dance", position: "80% 60%" },
] as const;

export const heroImage = mainContent;

export const navLinks = [
  { label: "The Invitation", to: "/#invitation" },
  { label: "The Day", to: "/#schedule" },
  { label: "The Details", to: "/#details" },
  { label: "Reply", to: "/#rsvp" },
  { label: "Questions", to: "/faq" },
] as const;
