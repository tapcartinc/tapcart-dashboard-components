import React from "react";
import PropTypes, { node } from "prop-types";
import { swatches } from "../../utils/_swatches";
import { Loader } from "../../elements/Loader";
import { StyledButtonWrapper } from "./styles";

const Button = ({ label, ...props }) => {
  const getLoaderColors = () => {
    function getFillColor(color) {
      switch (color) {
        case "blue":
          return swatches.blue;
        case "green":
          return swatches.green;
        case "red":
          return swatches.red;
        case "white":
          return swatches.lightGray;
        case "gray":
          return swatches.gray;
        default:
          break;
      }
    }

    let fillColor = "";

    if (props.color) {
      fillColor = getFillColor(props.color);
    }

    if (props.color === "white") {
      if (props.plainText) {
        return { fg: "white", bg: swatches.blue };
      } else if (!props.invert) {
        return { fg: swatches.blue, bg: "white" };
      } else {
        return { fg: "white", bg: swatches.blue };
      }
    } else if (props.plainText && props.color) {
      return { fg: fillColor, bg: "white" };
    } else if (!props.invert && props.color) {
      return { fg: "white", bg: fillColor };
    } else if (props.invert && props.color) {
      return { fg: fillColor, bg: "white" };
    } else {
      return { fg: "white", bg: swatches.gray };
    }
  };

  return (
    <StyledButtonWrapper {...props}>
      {props.isLoading && !props.isDisabled ? (
        <>
          <Loader loaderColors={getLoaderColors()} />
          <div style={{ color: "transparent" }}>{props.children}</div>
        </>
      ) : (
        props.children
      )}
    </StyledButtonWrapper>
  );
};

export { Button };

Button.propTypes = {
  /**
   * Color value for button; applicable to both the button background, text, or border
   * if the text and border are to be a color, set the color accordingly and add the prop "invert" to your button component
   */
  color: PropTypes.string,
  /**
   * Applies a styled loader to the button when set to true; uses color prop from above for styling
   */
  isLoading: PropTypes.bool,
  /**
   * When set to true, applies universal "disabled" style to button and removes hover/cursor effects
   */
  isDisabled: PropTypes.bool,
  /**
   * onClick handler passed to the button
   */
  onClick: PropTypes.func,
  /**
   * Applies 8px of padding to top and bottom of button which is the generic style for dashboard
   * Buttons used in the marketing site will generally be wrapped in a ThemeProvider giving them top and bottom padding of 12px
   * Adding the 'thin' prop will adjust their padding to match that of the dashboard
   */
  thin: PropTypes.bool,
  /**
   * Without this prop, the color prop will give the button the background of the corresponding color and the button text is white
   * With 'invert' prop, the color is applied to the text and the border of the button and the background is transparent
   */
  invert: PropTypes.bool,
  /**
   * Color prop is applied to text with no background color and no border is applied; also applies reduced left and right padding for alignment purposes
   */
  plainText: PropTypes.bool,
  children: PropTypes.node,
};

Button.defaultProps = {
  color: "blue",
  isLoading: false,
  isDisabled: false,
  thin: false,
  invert: false,
  plainText: false,
};
