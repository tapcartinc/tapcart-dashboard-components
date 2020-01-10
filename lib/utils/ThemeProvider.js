import React from "react";
import { base } from "../utils/_theme";
import { ThemeProvider as Root } from "styled-components";
import PropTypes, { node } from "prop-types";

// import GlobalStyle from './_global';
// <GlobalStyle {...props.global} />

/**
 * Use `ThemeProvider` to wrap sections of content with specific styling in the marketing site. This component provides a theme to all React components underneath itself via the context API.
 *
 * In order to access styles from the ThemeProvider the children must be wrapped in a `Section` component immediately inside of the ThemeProvider component.
 */

const ThemeProvider = props => {
  const theme = {
    ...base,
    ...props.theme
  };

  return (
    <Root theme={theme}>
      <>{props.children}</>
    </Root>
  );
};

export { ThemeProvider };

ThemeProvider.propTypes = {
  theme: PropTypes.oneOf(["base", "invert(base)", "neutral", "offWhite"]),
  children: node.isRequired
};

ThemeProvider.defaultProps = {
  theme: base
};
