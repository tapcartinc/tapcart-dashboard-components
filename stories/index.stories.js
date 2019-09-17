import React from "react";

import { storiesOf } from "@storybook/react";

import { Button } from "../lib/elements/Button";
import { Dropdown } from "../lib/components/Dropdown";

storiesOf("Buttons", module).add("primary button", () => (
  <Button type="primary">test</Button>
));

storiesOf("Dropdown", module).add("dropdown test", () => {
  const options = [
    {
      title: "New York"
    },
    {
      title: "Dublin"
    },
    {
      title: "California"
    },
    {
      title: "Istanbul"
    }
  ];
  return (
    <Dropdown title="menu item" options={options}>
      Menu Item
    </Dropdown>
  );
});
