import { swatches } from "./_swatches";

const base = {
  fg: swatches.blue,
  bg: "#FFFFFF",
  header: swatches.black,
  subtext: swatches.black,
  body: swatches.black,
};

const invert = ({ fg, bg }) => ({
  fg: bg,
  bg: fg,
  header: "#FFFFFF",
  subtext: "#FFFFFF",
  body: "#FFFFFF",
});

const offWhite = ({ fg, header, subtext, body }) => ({
  fg,
  header,
  subtext,
  body,
  bg: swatches.offwhite,
});

const neutral = {
  fg: swatches.black,
  bg: "#F3F3F7",
  header: swatches.black,
  subtext: swatches.black,
  body: swatches.blue,
};

const gradient = (fgColor, bgColor) => ({
  fg: swatches.black,
  bg: `linear-gradient(184deg, ${fgColor}, ${bgColor})`,
  header: swatches.black,
  subtext: swatches.black,
  body: swatches.blue,
});

const topNav = {
  background: "transparent",
  fg: swatches.white,
};

const scrollingNav = {
  background: "#FFFFFF",
  fg: swatches.blue,
};

export { base, invert, neutral, topNav, scrollingNav, offWhite, gradient };
