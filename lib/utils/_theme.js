import { colors } from "./_variables";

const base = {
  fg: colors.blue,
  bg: "#FFFFFF",
  header: colors.black,
  subtext: colors.black,
  body: colors.blue
};

const invert = ({ fg, bg }) => ({
  fg: bg,
  bg: fg,
  header: "#FFFFFF",
  subtext: "#FFFFFF",
  body: "#FFFFFF"
});

const offWhite = ({ fg, header, subtext, body }) => ({
  fg,
  header,
  subtext,
  body,
  bg: colors.offwhite
});

const neutral = {
  fg: colors.black,
  bg: "#F3F3F7",
  header: colors.black,
  subtext: colors.black,
  body: colors.blue
};

const topNav = {
  background: "transparent",
  fg: colors.white
};

const scrollingNav = {
  background: "white",
  fg: colors.blue
};

export { base, invert, neutral, topNav, scrollingNav, offWhite };
