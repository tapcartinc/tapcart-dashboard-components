import React from "react";
import { StyledLoaderWrapper } from "./styles";
import PropTypes from "prop-types";

const Loader = (props) => {
  return (
    <StyledLoaderWrapper
      loaderColors={props.loaderColors}
      parentBgColor={props.parentBgColor}
      size={props.size}
    />
  );
};

export { Loader };

Loader.propTypes = {
  loaderColors: PropTypes.shape({
    /**
     * spinner color
     */
    fg: PropTypes.string,
    /**
     * area color
     */
    bg: PropTypes.string,
  }),
  /**
   * Allows a color to be passed into the loader component in case the loader is overtop a another color
   * particularly useful for buttons
   */
  parentBgColor: PropTypes.string,
  /**
   * shapes the height and the width of the loader in pixel height
   */
  size: PropTypes.number,
};

Loader.defaultProps = {
  size: 25,
};
