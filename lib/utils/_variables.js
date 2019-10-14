/////////
// Colors
/////////

export const colors = {
  blue: '#373aaf',
  blue10: '#f6faff',
  blue15: '#CBCFDD',
  blue25: '#DBE1EF',
  blue50: '#BAC4E0',
  blue75: '#738EDA',
  lightpurple: '#7574EF',

  offwhite: '#FCFEFF',

  bgGray: '#F3F3F7',
  lightestGray: '#fcfcfc',
  lightestGrayBorder: '#f4f4f4',
  gray: '#BDBDBD',
  gray10: '#F8F7F8',
  gray25: '#F0F2F5',
  gray50: '#e9e9e9',
  gray75: '#D8D8D8',
  darkgray: '#8A888A',
  grayText: '#abb1c2',
  coolBgGray: '#f9fbfe',

  green: '#1BDFBA',
  bluegray: '#A1A8B9',
  black: '#000000',
  highlightblue: '#E3EFFD',
  yellow: '#F6B343',
  red: '#D94747',
  gold: '#d5a83e'
};

export const sofia = {
  sofiaSemiBold: {
    fontFamily: 'Sofia Pro',
    fontWeight: 600,
    fontStyle: 'normal'
  },
  sofiaMedium: {
    fontFamily: 'Sofia Pro',
    fontWeight: 500,
    fontStyle: 'normal'
  },
  sofiaRegular: {
    fontFamily: 'Sofia Pro',
    fontWeight: 'normal',
    fontStyle: 'normal'
  },
  sofiaLight: {
    fontFamily: 'Sofia Pro',
    fontWeight: 200,
    fontStyle: 'normal'
  },
  sofiaItalic: {
    fontFamily: 'Sofia Pro',
    fontWeight: 'normal',
    fontStyle: 'italic'
  }
};

export const boxShadow = {
  boxShadow: '0 0 28px 0 rgba(0, 0, 0, 0.1)'
};

export const margin = {
  margin: '30px auto'
};

export const borderRadius = {
  borderRadius: '4px'
};

export const inputBorder = {
  borderRadius: borderRadius.borderRadius,
  backgroundColor: colors.offwhite,
  borderColor: colors.bluegray,
  bordeRadius: '3px',
  borderStyle: 'solid',
  borderWidth: '1px',
  outline: '0px !important'
};

export const circular = {
  circularBook: {
    fontFamily: 'CircularStd-Book'
  },
  circularBold: {
    fontFamily: 'CircularStd-Bold'
  },
  circularMedium: {
    fontFamily: 'CircularStd-Medium'
  },
  circularBlack: {
    fontFamily: 'CircularStd-Black'
  },
  circularBookItalic: {
    fontFamily: 'CircularStd-BookItalic'
  }
};

export const border = {
  lightblue: {
    borderRadius: '2px',
    border: `1px solid ${colors.blue25}`
  },
  lightgray: {
    borderRadius: '3px',
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
      '-moz-linear-gradient(left,  rgba(255,255,255,1) 0%, rgba(238,238,238,0) 100%)',
    background:
      '-webkit-linear-gradient(left,  rgba(255,255,255,1) 0%,rgba(238,238,238,0) 100%)',
    background:
      'linear-gradient(to right,  rgba(255,255,255,1) 0%,rgba(238,238,238,0) 100%)'
  },
  rightToLeft: {
    background:
      '-moz-linear-gradient(left,  rgba(238,238,238,0) 0%, rgba(255,255,255,1) 100%)',
    background:
      '-webkit-linear-gradient(left,  rgba(238,238,238,0) 0%,rgba(255,255,255,1) 100%)',
    background:
      'linear-gradient(to right,  rgba(238,238,238,0) 0%,rgba(255,255,255,1) 100%)'
  },
  bottomToTop: {
    background:
      '-moz-linear-gradient(top,  rgba(238,238,238,0) 0%, rgba(255,255,255,1) 100%)',
    background:
      '-webkit-linear-gradient(top,  rgba(238,238,238,0) 0%,rgba(255,255,255,1) 100%)',
    background:
      'linear-gradient(to bottom,  rgba(238,238,238,0) 0%,rgba(255,255,255,1) 100%)'
  },
  topToBottom: {
    background:
      ' -moz-linear-gradient(top,  rgba(255,255,255,1) 0%, rgba(238,238,238,0) 100%)',
    background:
      '-webkit-linear-gradient(top,  rgba(255,255,255,1) 0%,rgba(238,238,238,0) 100%)',
    background:
      'linear-gradient(to bottom,  rgba(255,255,255,1) 0%,rgba(238,238,238,0) 100%)'
  }
};

export const marginRight = {
  marginRight: '10px'
};
export const marginLeft = {
  marginLeft: '10px'
};
