import { Grid, Stack } from "@mantine/core";
import { gallery } from "../../data/wedding";
import { PhotoFrame, Reveal, Section, SectionHeading } from "../ui";

/** A contact sheet of frames, laid out as an uneven mosaic. */
export function Gallery() {
  // Column spans and crops repeat every six tiles to keep the grid uneven.
  const spans = [4, 4, 4, 4, 8, 12];
  const ratios = [1, 1, 1, 3 / 4, 16 / 9, 21 / 9];

  return (
    <Section id="gallery" size="lg">
      <Stack gap={56}>
        <Reveal>
          <SectionHeading eyebrow="Moments" script="A few frames" ornament />
        </Reveal>
        <Grid gap={{ base: 12, sm: 20 }}>
          {gallery.map((photo, index) => (
            <Grid.Col
              key={`${photo.alt}-${index}`}
              span={{ base: index % 3 === 2 ? 12 : 6, sm: spans[index % spans.length] }}
            >
              <Reveal delay={(index % 3) * 90}>
                <PhotoFrame
                  src={photo.src}
                  alt={photo.alt}
                  position={photo.position}
                  ratio={ratios[index % ratios.length]}
                />
              </Reveal>
            </Grid.Col>
          ))}
        </Grid>
      </Stack>
    </Section>
  );
}
