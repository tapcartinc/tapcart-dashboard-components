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
  const [toggleState, setToggleState] = React.useState({
    basic: false,
    dayNight: false,
    appleAndroid: false
  });

  console.log("toggleState.appleAndroid", toggleState.appleAndroid);
  return (
    <>
      <BoxedToggle
        type="basic"
        id="toggle"
        toggleState={toggleState.basic}
        onChange={() =>
          setToggleState(prevState => ({
            ...prevState,
            basic: !toggleState.basic
          }))
        }
      />
      <BoxedToggle
        type="day/night"
        id="toggle"
        toggleState={toggleState.dayNight}
        onChange={() =>
          setToggleState(prevState => ({
            ...prevState,
            dayNight: !toggleState.dayNight
          }))
        }
      />
      <BoxedToggle
        type="apple/android"
        id="toggle"
        toggleState={toggleState.appleAndroid}
        onChange={() =>
          setToggleState(prevState => ({
            ...prevState,
            appleAndroid: !toggleState.appleAndroid
          }))
        }
      />
    </>
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
