import React, { useState } from "react";
import { action } from "@storybook/addon-actions";
import { Button } from "../../lib/elements/Button";
import { SegmentedControl } from "../../lib/components/SegmentedControl";
import { Body } from "../../lib/elements/Typography";
import PropTypes, { node } from "prop-types";

import { Icon } from "../../lib/elements/Icon";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { colors } from "../../lib";

export default {
  component: SegmentedControl,
  title: "Components/SegmentedControl",
  decorators: [withKnobs]
};

export const segmentedControl = () => {
  const [state, setState] = React.useState("cat");

  const changeSection = selectedTab => {
    if (state === selectedTab) {
      return;
    }
    setState(selectedTab);
  };

  return (
    <SegmentedControl
      type="primary"
      items={{ cat: "cat", dog: "dog", mouse: "mouse" }}
      action={changeSection}
      current={state}
      icons={{ cat: "blocks", dog: "theme", mouse: "menu-icon" }}
    />
  );
};

SegmentedControl.propTypes = {
  type: PropTypes.string,
  items: PropTypes.object,
  action: PropTypes.func,
  current: PropTypes.string
};

SegmentedControl.defaultProps = {
  type: "primary"
};
