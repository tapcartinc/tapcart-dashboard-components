import React, { useState } from "react";
import { ClickDropdown } from "./index";
import { ClickDropdownOption } from "./ClickDropdownOption";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

storiesOf("Examples|Components/ClickDropdown", module).add("Basic", () => {
  return (
    <ClickDropdown>
      <ClickDropdownOption onClick={() => console.log("hi")}>
        kjdfkjdf
      </ClickDropdownOption>
      <ClickDropdownOption onClick={() => console.log("hey")}>
        ababab
      </ClickDropdownOption>
    </ClickDropdown>
  );
});
