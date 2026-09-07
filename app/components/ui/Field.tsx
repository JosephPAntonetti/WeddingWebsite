import { NativeSelect, TextInput, Textarea } from "@mantine/core";
import { useToneColors } from "./tone";

type FieldType = "text" | "email" | "tel" | "textarea" | "select";

interface FieldProps {
  name: string;
  label: string;
  type?: FieldType;
  required?: boolean;
  rows?: number;
  /** Options for `type="select"`. */
  data?: readonly string[];
}

/**
 * One form control, styled as a ruled line on a reply card. The underline and
 * text colours come from the surrounding tone, so the same field works on the
 * ivory page and inside a dark panel.
 */
export function Field({
  name,
  label,
  type = "text",
  required = false,
  rows = 3,
  data,
}: FieldProps) {
  const colors = useToneColors();

  const shared = {
    name,
    label,
    required,
    className: "field",
    variant: "unstyled" as const,
    style: {
      "--field-rule": colors.rule,
      "--field-fg": colors.text,
      "--field-placeholder": colors.faint,
    } as React.CSSProperties,
    styles: {
      label: {
        textTransform: "uppercase" as const,
        letterSpacing: "0.3em",
        fontSize: 10,
        color: colors.muted,
        marginBottom: 10,
      },
      input: { color: colors.text, fontSize: 16, paddingBottom: 8 },
      required: { color: colors.muted },
    },
  };

  if (type === "textarea") {
    return <Textarea {...shared} rows={rows} />;
  }

  if (type === "select") {
    return <NativeSelect {...shared} data={data ? [...data] : []} />;
  }

  return <TextInput {...shared} type={type} />;
}
