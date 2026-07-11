/**
 * "Lauren & Joe" wordmark rendered as an SVG so the staggered, angled lockup
 * stays consistent regardless of layout. The three words cascade down and to
 * the right, and the whole lockup is tilted 30 degrees.
 *
 * Each name is stretched horizontally with `scale(STRETCH, 1)` so the letters
 * are wider than tall without changing their height.
 *
 * The "&" sits on a vertical spine that lines up with the "u" of Lauren above
 * and the "o" of Joe below. Those letters are located by their offset within
 * each (un-stretched) word — `U_OFFSET` / `O_OFFSET` — so the alignment
 * survives changes to `STRETCH`. Nudge `U_OFFSET` if the "&" drifts off the
 * "u"; nudge `O_OFFSET` if the "o" sits left/right of the "&".
 *
 * The viewBox is derived from the artwork's bounding box (rotation included)
 * and centered on it, so the lockup stays centered in whatever contains it.
 */
const STRETCH = 1.3;
const ANGLE = 30; // degrees, tilts up to the right

const laurenX = 40;
const laurenY = 70;
const joeY = 185;
const ampY = 128;

const U_OFFSET = 68; // center of the "u" within an un-stretched "Lauren"
const O_OFFSET = 55; // center of the "o" within an un-stretched "Joe"
const LAUREN_WIDTH = 180; // natural width of "Lauren"
const JOE_WIDTH = 110; // natural width of "Joe"

// Vertical spine: the "u" of Lauren after stretching, and Joe placed so its
// "o" lands on the same spine.
const anchorX = laurenX + STRETCH * U_OFFSET;
const joeX = anchorX - STRETCH * O_OFFSET;

// Approximate bounding box of the un-rotated artwork. Lauren is both the
// left-most and (once stretched) right-most word.
const minX = laurenX;
const maxX = laurenX + STRETCH * LAUREN_WIDTH;
const minY = laurenY - 54; // cap height above the baseline
const maxY = joeY + 30; // descender below the baseline
const cx = (minX + maxX) / 2;
const cy = (minY + maxY) / 2;

// Grow the box to contain the rotated artwork, then pad for script flourishes.
const rad = (ANGLE * Math.PI) / 180;
const w = maxX - minX;
const h = maxY - minY;
const rotatedW = w * Math.cos(rad) + h * Math.sin(rad);
const rotatedH = w * Math.sin(rad) + h * Math.cos(rad);
const PAD = 40;
const vbW = rotatedW + 2 * PAD;
const vbH = rotatedH + 2 * PAD;
const vbMinX = cx - vbW / 2;
const vbMinY = cy - vbH / 2;

export function Logo() {
  return (
    <svg
      role="img"
      aria-label="Lauren & Joe"
      viewBox={`${vbMinX} ${vbMinY} ${vbW} ${vbH}`}
      width={vbW}
      height={vbH}
      style={{ maxWidth: "100%", height: "auto", overflow: "visible" }}
      fill="currentColor"
    >
      <g
        transform={`rotate(-${ANGLE} ${cx} ${cy})`}
        fontFamily='"Monsieur La Doulaise", cursive'
      >
        <text
          transform={`translate(${laurenX} ${laurenY}) scale(${STRETCH} 1)`}
          fontSize="54"
        >
          Lauren
        </text>
        <text x={anchorX} y={ampY} fontSize="18" textAnchor="middle">
          {"&"}
        </text>
        <text
          transform={`translate(${joeX} ${joeY}) scale(${STRETCH} 1)`}
          fontSize="54"
        >
          Joe
        </text>
      </g>
    </svg>
  );
}
