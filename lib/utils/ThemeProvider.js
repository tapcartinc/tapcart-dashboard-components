import React from "react";
import { base } from "../utils/_theme";
import { ThemeProvider as Root } from "styled-components";
import PropTypes, { node } from "prop-types";

// import GlobalStyle from './_global';
// <GlobalStyle {...props.global} />

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
  theme: PropTypes.string,
  children: node.isRequired
};

ThemeProvider.defaultProps = {
  theme: "base"
};
