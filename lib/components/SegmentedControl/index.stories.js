import React, { useState } from "react";
import { SegmentedControl } from "./index";
import { storiesOf } from "@storybook/react";
import { Icon } from "../../elements/Icon";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

storiesOf("Examples|Components/SegmentedControl", module)
  .add("Basic", () => {
    const [state, setState] = useState("cat");

    const changeSection = (selectedTab) => {
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
  })
  .add("primary", () => {
    const [state, setState] = useState("push");

    const changeSection = (selectedTab) => {
      if (state === selectedTab) {
        return;
      }
      setState(selectedTab);
    };
    return (
      <SegmentedControl
        type="primary"
        items={{ push: "push", pop: "pop", plainText: "plain Text" }}
        action={changeSection}
        current={state}
        icons={{ push: "push", pop: "popup", plainText: "text-icon" }}
      />
    );
  })
  .add("secondary", () => {
    const [state, setState] = useState("enabled");

    const changeSection = (selectedTab) => {
      if (state === selectedTab) {
        return;
      }
      setState(selectedTab);
    };
    return (
      <SegmentedControl
        type="secondary"
        items={{
          enabled: "Enabled",
          optional: "Optional",
          required: "Required",
        }}
        action={changeSection}
        current={state}
      />
    );
  })
  .add("field segmented control", () => {
    const [state, setState] = useState("collection");

    const changeSection = (selectedTab) => {
      if (state === selectedTab) {
        return;
      }
      setState(selectedTab);
    };
    return (
      <SegmentedControl
        type="field"
        items={{
          collection: "collection",
          webpage: "webpage",
          static: "static",
          product: "product",
        }}
        action={changeSection}
        current={state}
      />
    );
  });
