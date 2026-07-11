import { Accordion } from "@mantine/core";

interface FaqAccordianProps {
  question: string;
  answer: string;
}

export function FaqAccordian({ question, answer }: FaqAccordianProps) {
  return (
    <Accordion.Item value={question}>
      <Accordion.Control>{question}</Accordion.Control>
      <Accordion.Panel>{answer}</Accordion.Panel>
    </Accordion.Item>
  );
}
