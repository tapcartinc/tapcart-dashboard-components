import { colors } from "./_variables";

const base = {
  fg: colors.blue,
  bg: "white",
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

const neutral = {
  fg: colors.black,
  bg: "#F3F3F7",
  header: colors.black,
  subtext: colors.black,
  body: colors.blue
};

export { base, invert, neutral };
