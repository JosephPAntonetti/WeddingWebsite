import { Accordion, Box, Text } from "@mantine/core";
import { fonts } from "../theme";
import { faqs } from "../data/wedding";
import { useToneColors } from "./ui/tone";

/** A thin plus that rotates into a minus when its question is open. */
function Marker() {
  return (
    <Box
      w={12}
      h={12}
      pos="relative"
      aria-hidden
      style={{ transition: "transform 300ms ease" }}
    >
      <Box pos="absolute" top={5} left={0} w={12} h={1} bg="currentColor" />
      <Box
        className="faq-marker-stem"
        pos="absolute"
        top={0}
        left={5}
        w={1}
        h={12}
        bg="currentColor"
      />
    </Box>
  );
}

/** The full question list, ruled and set in the display serif. */
export function FaqList() {
  const colors = useToneColors();

  return (
    <Accordion
      chevron={<Marker />}
      chevronPosition="left"
      multiple
      styles={{
        item: {
          borderBottom: `1px solid ${colors.rule}`,
          backgroundColor: "transparent",
        },
        control: { paddingInline: 0, paddingBlock: 22 },
        chevron: { marginInlineEnd: 20, color: colors.muted, width: 12 },
        content: { paddingInline: 0, paddingBottom: 22, paddingLeft: 32 },
      }}
    >
      {faqs.map((faq) => (
        <Accordion.Item key={faq.question} value={faq.question}>
          <Accordion.Control>
            <Text
              ff={fonts.display}
              fz={{ base: 19, sm: 22 }}
              fw={300}
              lts="0.02em"
              c={colors.text}
            >
              {faq.question}
            </Text>
          </Accordion.Control>
          <Accordion.Panel>
            <Text fz={15} lh={1.85} c={colors.muted} maw={620}>
              {faq.answer}
            </Text>
          </Accordion.Panel>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}
