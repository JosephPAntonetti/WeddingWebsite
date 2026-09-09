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

/**
 * Photographs, named for where they appear. Colour originals are fine — they
 * are developed to black and white in CSS.
 */
export const photos = {
  hero: { src: mainContent, position: "50% 35%" },
} as const;

export const navLinks = [{ label: "Home", to: "/" }] as const;
