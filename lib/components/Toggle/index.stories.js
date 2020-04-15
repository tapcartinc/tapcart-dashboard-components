import React, { useState } from "react";
import Toggle from ".";
import { storiesOf } from "@storybook/react";
import { Icon } from "../../elements/Icon";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { colorPicker } from "../../utils/_dashVariables";

storiesOf("Examples|Components/Toggle", module)
  .addParameters({ component: Toggle })
  .add("Basic", () => {
    const [toggle, setToggle] = React.useState(false);

    return (
      <Toggle
        type="basic"
        id="toggle"
        toggleState={toggle}
        onChange={() => setToggle(!toggle)}
      />
    );
  });

storiesOf("Examples|Components/Toggle", module)
  .addParameters({ component: Toggle })
  .add("TimeOfDay", () => {
    const [timeOfDayToggle, setTimeOfDayToggle] = React.useState(false);
    return (
      <Toggle
        type="timeOfDay"
        id="timeOfDayToggle"
        toggleState={timeOfDayToggle}
        onChange={() => setTimeOfDayToggle(!timeOfDayToggle)}
      />
    );
  });

storiesOf("Examples|Components/Toggle", module)
  .addParameters({ component: Toggle })
  .add("Platforms", () => {
    const [platformToggle, setPlatformToggle] = React.useState(false);
    return (
      <Toggle
        type="platforms"
        id="platformToggle"
        toggleState={platformToggle}
        onChange={() => setPlatformToggle(!platformToggle)}
      />
    );
  });
