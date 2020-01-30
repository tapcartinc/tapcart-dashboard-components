import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";

class CodeBlock extends PureComponent {
  static propTypes = {
    value: PropTypes.string.isRequired,
    language: PropTypes.string
  };

  static defaultProps = {
    language: null
  };

  render() {
    const { language, value } = this.props;

    return (
      <SyntaxHighlighter
        language="javascript"
        style={docco}
        customStyle={{
          fontFamily: "'Inconsolata', monospace",
          width: 500,
          marginTop: 10,
          marginBottom: 10,
          lineHeight: "24px"
        }}
      >
        {value}
      </SyntaxHighlighter>
    );
  }
}

export default CodeBlock;
