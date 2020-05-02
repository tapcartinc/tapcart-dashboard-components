import { colorPicker } from "./_dashVariables";
import { colors } from "./_variables";

const getColors = (kind) => {
  switch (kind) {
    case "primary":
      return {
        color: "#FFFFFF",
        background: colorPicker.blue,
      };
    case "submit":
      return {
        color: "#FFFFFF",
        background: colorPicker.blue,
      };
    case "gray":
      return {
        color: "#FFFFFF",
        background: colorPicker.gray,
      };
    case "primary--reversed":
      return {
        background: "transparent",
        color: colorPicker.blue,
        boxShadow: `inset 0px 0px 0px 2px ${colorPicker.blue}`,
      };
    case "gray--reversed":
      return {
        background: "transparent",
        color: colorPicker.gray,
        boxShadow: `inset 0px 0px 0px 2px ${colorPicker.gray}`,
      };
    case "secondary":
      return {
        color: colorPicker.black,
        background: "transparent",
        boxShadow: `inset 0px 0px 0px 2px ${colorPicker.border1}`,
      };
    case "delete":
      return {
        color: "#FFFFFF",
        background: colorPicker.red,
      };
    case "delete--reversed":
      return {
        background: "transparent",
        color: colorPicker.red,
        boxShadow: `inset 0px 0px 0px 2px ${colorPicker.red}`,
      };
    case "save":
      return {
        color: "#FFFFFF",
        background: colorPicker.green100,
      };
    case "save--reversed":
      return {
        background: "transparent",
        color: colorPicker.green100,
        boxShadow: `inset 0px 0px 0px 2px ${colorPicker.green100}`,
      };
    case "inverted":
      return {
        color: colorPicker.blue,
        background: "#FFFFFF",
      };
    case "inverted--reversed":
      return {
        background: "transparent",
        color: "#FFFFFF",
        boxShadow: `inset 0px 0px 0px 2px #FFFFFF`,
      };
    case "transparent--blue":
      return {
        color: colorPicker.blue,
        background: "transparent",
      };
    case "transparent--green":
      return {
        color: colorPicker.green100,
        background: "transparent",
      };
    case "transparent--red":
      return {
        color: colorPicker.red,
        background: "transparent",
      };
    case "transparent--white":
      return {
        color: "white",
        background: "transparent",
      };
    case "transparent--gray":
      return {
        color: colorPicker.gray,
        background: "transparent",
      };
    case "secondary--green":
      return {
        color: "white",
        background: "transparent",
        boxShadow: `inset 0px 0px 0px 1px ${colorPicker.green100}`,
      };
    case "#D94747":
      return colors.red;
    case "red":
      return colors.red;
    case "blue":
      return colors.blue;
    case "blue10":
      return colors.blue10;
    case "blue15":
      return colors.blue15;
    case "blue25":
      return colors.blue25;
    case "blue50":
      return colors.blue50;
    case "blue75":
      return colors.blue75;
    case "darkBlue":
      return colors.darkBlue;
    case "lightpurple":
      return colors.lightpurple;
    case "offwhite":
      return colors.offwhite;
    case "bgGray":
      return colors.bgGray;
    case "lightestGray":
      return colors.lightestGray;
    case "gray10":
      return colors.gray10;
    case "gray25":
      return colors.gray25;
    case "gray50":
      return colors.gray50;
    case "gray75":
      return colors.gray75;
    case "darkgray":
      return colors.darkgray;
    case "grayText":
      return colors.grayText;
    case "#373aaf":
      return colors.blue;
    case "green":
      return colors.green;
    case "lightgray":
      return colors.lightgray;
    case "gray":
      return colors.gray;
    case "darkgray":
      return colors.darkgray;
    case "black":
      return colors.black;
    case "red":
      return colors.red;
    case "lightblue":
      return colors.lightblue;
    case "white":
      return "#ffffff";
    case "bluegray":
      return colors.bluegray;
    case "black":
      return colors.black;
    case "highlightblue":
      return colors.highlightblue;
    case "yellow":
      return colors.yellow;
    case "gold":
      return colors.gold;
    case colors.grayText:
      return colors.grayText;
    default:
      break;
  }
};

const getBorder = (kind) => {
  switch (kind) {
    case "primary":
      return "0px";
    case "submit":
      return "0px";
    case "secondary":
      return `inset 0px 0px 0px 2px ${colorPicker.gray}`;
    case "border":
      return `inset 0px 0px 0px 2px ${colors.blue}`;
    default:
      break;
  }
};

export { getColors, getBorder };
