import { colors } from './_variables';

const getColors = type => {
  switch (type) {
    case 'primary':
      return {
        color: '#FFFFFF',
        background: colors.blue
      };
    case 'primary--reversed':
      return {
        background: 'transparent',
        color: colors.blue,
        boxShadow: `inset 0px 0px 0px 1px ${colors.blue}`
      };
    case 'secondary':
      return {
        color: colors.black,
        background: 'transparent',
        boxShadow: `inset 0px 0px 0px 1px ${colors.gray25}`
      };
    case 'delete':
      return {
        color: '#FFFFFF',
        background: colors.red
      };
    case 'delete--reversed':
      return {
        background: 'transparent',
        color: colors.red,
        boxShadow: `inset 0px 0px 0px 1px ${colors.red}`
      };
    case 'save':
      return {
        color: '#FFFFFF',
        background: colors.green
      };
    case 'save--reversed':
      return {
        background: 'transparent',
        color: colors.green,
        boxShadow: `inset 0px 0px 0px 1px ${colors.green}`
      };
    case 'inverted':
      return {
        color: colors.blue,
        background: '#FFFFFF'
      };
    case 'inverted--reversed':
      return {
        background: 'transparent',
        color: '#FFFFFF',
        boxShadow: `inset 0px 0px 0px 1px #FFFFFF`
      };
    case 'transparent--blue':
      return {
        color: colors.blue,
        background: 'transparent'
      };
    case 'transparent--green':
      return {
        color: colors.green,
        background: 'transparent'
      };
    case 'transparent--red':
      return {
        color: colors.red,
        background: 'transparent'
      };
    case 'transparent--white':
      return {
        color: 'white',
        background: 'transparent'
      };
    case 'secondary--green':
      return {
        color: 'white',
        background: 'transparent',
        boxShadow: `inset 0px 0px 0px 1px ${colors.green}`
      };

    case 'blue':
      return colors.blue;
    case '#373aaf':
      return colors.blue;
    case 'green':
      return colors.green;
    case 'lightgray':
      return colors.lightgray;
    case 'gray':
      return colors.gray;
    case 'darkgray':
      return colors.darkgray;
    case 'black':
      return colors.black;
    case 'red':
      return colors.red;
    case 'lightblue':
      return colors.lightblue;
    case 'white':
      return colors.white;
    case 'grayText':
      return colors.grayText;
    default:
      break;
  }
};

const getBorder = type => {
  switch (type) {
    case 'primary':
      return '0px';
    case 'secondary':
      return `inset 0px 0px 0px 2px ${colors.gray25}`;
    case 'border':
      return `inset 0px 0px 0px 1px ${colors.blue}`;
    default:
      break;
  }
};

export { getColors, getBorder };
