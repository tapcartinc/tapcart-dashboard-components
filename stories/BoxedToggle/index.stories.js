import React, { useState } from "react";
import { BoxedToggle } from "../../lib/components/BoxedToggle";

import PropTypes, { node } from "prop-types";

import { Icon } from "../../lib/elements/Icon";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { colors } from "../../lib";

export default {
  component: BoxedToggle,
  title: "Components/BoxedToggle",
  decorators: [withKnobs]
};

export const segmentedControl = () => {
  const [toggleState, setToggleState] = React.useState(false);

  return (
    <BoxedToggle
      type="basic"
      id="toggle"
      toggleState={toggleState}
      onChange={() => setToggleState(!toggleState)}
      // name={props.name}
    />
  );
};

BoxedToggle.propTypes = {
  type: PropTypes.string,
  items: PropTypes.object,
  action: PropTypes.func,
  current: PropTypes.string
};

BoxedToggle.defaultProps = {
  type: "primary"
};
