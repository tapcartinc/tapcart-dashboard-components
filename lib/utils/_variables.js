/////////
// Colors
/////////

export const colors = {
  blue: "#373aaf",
  blue10: "#f6faff",
  blue15: "#CBCFDD",
  blue25: "#DBE1EF",
  blue50: "#BAC4E0",
  blue75: "#738EDA",
  lightpurple: "#7574EF",
  darkBlue: "#02018C",

  offwhite: "#FCFEFF",

  bgGray: "#F3F3F7",
  lightestGray: "#fcfcfc",
  lightestGrayBorder: "#f4f4f4",
  gray: "#BDBDBD",
  gray10: "#F8F7F8",
  gray25: "#F0F2F5",
  gray50: "#e9e9e9",
  gray75: "#D8D8D8",
  darkgray: "#8A888A",
  grayText: "#a1a8b9",
  coolBgGray: "#f9fbfe",

  green: "#1BDFBA",
  bluegray: "#a1a8b9",
  black: "#000000",
  highlightblue: "#E3EFFD",
  yellow: "#F6B343",
  red: "#D94747",
  gold: "#d5a83e"
};

export const sofia = {
  sofiaSemiBold: {
    fontFamily:
      "SofiaPro, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif",
    fontWeight: 600,
    fontStyle: "normal"
  },
  sofiaMedium: {
    fontFamily:
      "SofiaPro, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif",
    fontWeight: 500,
    fontStyle: "normal"
  },
  sofiaRegular: {
    fontFamily:
      "SofiaPro, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif",
    fontWeight: 300,
    fontStyle: "normal"
  },
  sofiaLight: {
    fontFamily:
      "SofiaPro, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif",
    fontWeight: 200,
    fontStyle: "normal"
  },
  sofiaItalic: {
    fontFamily:
      "SofiaPro, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif",
    fontWeight: "normal",
    fontStyle: "italic"
  }
};

export const boxShadow = {
  small: `0 2px 5px 0 rgba(0, 0, 0, 0.05),
  0 2px 10px 0 rgba(0, 0, 0, 0.025),
  0 2px 20px 0 rgba(0, 0, 0, 0.025)`,
  medium: `0 2px 10px 0 rgba(0, 0, 0, 0.05),
  0 2px 20px 0 rgba(0, 0, 0, 0.025),
  0 2px 30px 0 rgba(0, 0, 0, 0.025)`,
  large: `0 2px 30px 0 rgba(0, 0, 0, 0.05),
  0 2px 50px 0 rgba(0, 0, 0, 0.025),
  0 2px 70px 0 rgba(0, 0, 0, 0.025)`
};

export const margin = {
  margin: "30px auto"
};

export const borderRadius = {
  borderRadius: "4px"
};

export const inputBorder = {
  borderRadius: borderRadius.borderRadius,
  backgroundColor: colors.offwhite,
  borderColor: colors.bluegray,
  bordeRadius: "3px",
  borderStyle: "solid",
  borderWidth: "1px",
  outline: "0px !important"
};

export const circular = {
  circularBook: {
    fontFamily:
      "CircularStd-Book, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif"
  },
  circularBold: {
    fontFamily:
      "CircularStd-Bold, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif"
  },
  circularMedium: {
    fontFamily:
      "CircularStd-Medium, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif"
  },
  circularBlack: {
    fontFamily:
      "CircularStd-Black, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif"
  },
  circularBookItalic: {
    fontFamily:
      "CircularStd-BookItalic, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif"
  }
};

export const border = {
  lightblue: {
    borderRadius: "2px",
    border: `1px solid ${colors.blue25}`
  },
  lightgray: {
    borderRadius: "3px",
    border: `1px solid ${colors.gray25}`
  },
  divider: {
    borderBottom: `1px solid ${colors.gray25}`
  },
  dotted: {
    border: `1px dashed ${colors.blue25}`
  }
};

export const gradientOverlay = {
  leftToRight: {
    background:
      "-moz-linear-gradient(left,  rgba(255,255,255,1) 0%, rgba(238,238,238,0) 100%)",
    background:
      "-webkit-linear-gradient(left,  rgba(255,255,255,1) 0%,rgba(238,238,238,0) 100%)",
    background:
      "linear-gradient(to right,  rgba(255,255,255,1) 0%,rgba(238,238,238,0) 100%)"
  },
  rightToLeft: {
    background:
      "-moz-linear-gradient(left,  rgba(238,238,238,0) 0%, rgba(255,255,255,1) 100%)",
    background:
      "-webkit-linear-gradient(left,  rgba(238,238,238,0) 0%,rgba(255,255,255,1) 100%)",
    background:
      "linear-gradient(to right,  rgba(238,238,238,0) 0%,rgba(255,255,255,1) 100%)"
  },
  bottomToTop: {
    background:
      "-moz-linear-gradient(top,  rgba(238,238,238,0) 0%, rgba(255,255,255,1) 100%)",
    background:
      "-webkit-linear-gradient(top,  rgba(238,238,238,0) 0%,rgba(255,255,255,1) 100%)",
    background:
      "linear-gradient(to bottom,  rgba(238,238,238,0) 0%,rgba(255,255,255,1) 100%)"
  },
  topToBottom: {
    background:
      " -moz-linear-gradient(top,  rgba(255,255,255,1) 0%, rgba(238,238,238,0) 100%)",
    background:
      "-webkit-linear-gradient(top,  rgba(255,255,255,1) 0%,rgba(238,238,238,0) 100%)",
    background:
      "linear-gradient(to bottom,  rgba(255,255,255,1) 0%,rgba(238,238,238,0) 100%)"
  }
};

export const marginRight = {
  marginRight: "10px"
};
export const marginLeft = {
  marginLeft: "10px"
};
