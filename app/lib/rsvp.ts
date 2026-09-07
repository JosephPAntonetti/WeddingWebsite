/**
 * Validation for the reply card. Kept apart from the route so the rules can be
 * read (and tested) without booting the router.
 *
 * Nothing is persisted yet — `action` in `routes/home.tsx` is where a mailer or
 * a spreadsheet write belongs once the couple picks one.
 */

export const ATTENDANCE = [
  "Joyfully accepts",
  "Regretfully declines",
] as const;

export type Attendance = (typeof ATTENDANCE)[number];

export interface RsvpReply {
  name: string;
  email: string;
  attendance: Attendance;
  guests: string;
  notes: string;
}

export interface RsvpResult {
  ok: boolean;
  /** Field name to message, for the fields that failed. */
  errors?: Record<string, string>;
  reply?: RsvpReply;
}

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function value(form: FormData, key: string): string {
  const raw = form.get(key);
  return typeof raw === "string" ? raw.trim() : "";
}

export function parseRsvp(form: FormData): RsvpResult {
  const reply: RsvpReply = {
    name: value(form, "name"),
    email: value(form, "email"),
    attendance: (value(form, "attendance") || ATTENDANCE[0]) as Attendance,
    guests: value(form, "guests"),
    notes: value(form, "notes"),
  };

  const errors: Record<string, string> = {};

  if (!reply.name) {
    errors.name = "Please tell us who is replying.";
  }
  if (!reply.email) {
    errors.email = "We need an address to confirm your reply.";
  } else if (!EMAIL.test(reply.email)) {
    errors.email = "That address does not look quite right.";
  }
  if (!ATTENDANCE.includes(reply.attendance)) {
    errors.attendance = "Please choose one.";
  }

  if (Object.keys(errors).length > 0) {
    return { ok: false, errors };
  }

  return { ok: true, reply };
}
