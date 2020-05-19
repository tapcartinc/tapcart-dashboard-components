import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { H1, H2, P1, P2, P3 } from "./index";

const Typefaces = (props) => {
  return (
    <div>
      <H1>H1</H1>
      <H2>H2</H2>
      <P1>P1</P1>
      <P2>P2</P2>
      <P3>P3</P3>
      <pre>
        propTypes =
        <p>
          {`fontSize: PropTypes.number,\ncolor: PropTypes.string,\nlineHeight: PropTypes.number,\nalign: PropTypes.string,\nclassName: PropTypes.string`}
        </p>
      </pre>
    </div>
  );
};

export default Typefaces;
