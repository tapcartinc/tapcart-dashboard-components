import React, { useState } from "react";
import { Toggle } from "../Toggle";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import { Textarea } from "../Textarea";
import { Input } from "../Input";
import { FieldsV2 } from "./index";
import { FieldV2 } from "../FieldV2";
import { FieldHeader } from "../FieldHeader";
import { FieldLabel } from "../FieldLabel";
import { FieldDescription } from "../FieldDescription";
import { FieldBody } from "../FieldColumn";
import { Button } from "../../elements/Button";
import { ImageUploaderV2 } from "../ImageUploaderV2";
import { SegmentedControl } from "../SegmentedControl";

storiesOf("Examples|Components/FieldsV2", module).add("Basic", (props) => {
  const [state, setState] = React.useState({
    test: "",
    toggleState: false,
    image: null,
    currentSelection: "disabled",
  });

  const setInput = (e) => {
    e.persist();
    setState((prevState) => ({
      ...prevState,
      test: e.target.value,
    }));
  };

  const handleImageUpload = (files) => {
    const selectedImage =
      "https://66.media.tumblr.com/tumblr_macbbpcagJ1rwpp3eo1_400.png";

    setState((prevState) => ({
      ...prevState,
      image: selectedImage,
    }));
  };

  const changeSection = (selectedTab) => {
    if (state.currentSelection === selectedTab) {
      return;
    }

    setState((prevState) => ({
      ...prevState,
      currentSelection: selectedTab,
    }));
  };

  return (
    <>
      <FieldsV2 sectionHeader="Section Header">
        <FieldV2>
          <FieldHeader stretch={false}>
            <FieldLabel>Label here</FieldLabel>
            <FieldDescription>Description here</FieldDescription>
          </FieldHeader>

          <Toggle
            className="flex-end"
            type="basic"
            id="toggle"
            toggleState={state.toggleState}
            onChange={() =>
              setState((prevState) => ({
                ...prevState,
                toggleState: !state.toggleState,
              }))
            }
          />

          <Input
            onChange={setInput}
            value={state.test || ""}
            placeholder="Enter Popup Text"
          />
        </FieldV2>
        <FieldV2>
          <FieldHeader stretch={false}>
            <FieldLabel>Label here</FieldLabel>
            <FieldDescription>Description here</FieldDescription>
          </FieldHeader>

          <SegmentedControl
            type="secondary"
            items={{
              disabled: "disabled",
              optional: "optional",
              required: "mouse",
            }}
            action={changeSection}
            current={state.currentSelection}
          />
        </FieldV2>

        <FieldV2
          {...props}
          fieldFlow="vertical"
          label="Display sold out products"
          description="This will hide or show sold out products in your mobile app"
        >
          <FieldHeader stretch={true}>
            <FieldLabel>Label here</FieldLabel>
            <FieldDescription>Description here</FieldDescription>
          </FieldHeader>
          <ImageUploaderV2
            label="Image"
            value={state.image || ""}
            handleImageUpload={handleImageUpload}
          />
          <Textarea
            onChange={setInput}
            value={state.test || ""}
            label="Popup Custom Text"
            placeholder="Enter Popup Text"
          />
        </FieldV2>
      </FieldsV2>

      {/* <FieldsV2>
        <FieldV2
          {...props}
          fieldFlow="vertical"
          label="Display sold out products"
          description="This will hide or show sold out products in your mobile app"
        >
          <ImageUploaderV2
            label="Image"
            value={state.image || ""}
            handleImageUpload={handleImageUpload}
          />
          <Input
            onChange={setInput}
            value={state.test || ""}
            label="Popup Custom Text"
            placeholder="Enter Popup Text"
          />
        </FieldV2>
      </FieldsV2> */}

      {/* <FieldsV2 sectionHeader="Product Detail Page">
        <FieldV2
          hasToggle
          lastField
          toggleState={state.toggleState}
          setToggleState={() =>
            setState(prevState => ({
              ...prevState,
              toggleState: !state.toggleState
            }))
          }
          {...props}
          fieldFlow="horizontal"
          label="Display sold out products"
          description="This will hide or show sold out products in your mobile app"
        >
          <Input
            onChange={setInput}
            value={state.test || ""}
            label="Popup Custom Text"
            placeholder="Enter Popup Text"
          />
        </FieldV2>
      </FieldsV2> */}

      {/* <FieldsV2 sectionHeader="Mobile web banners">
        <FieldV2
          lastField
          toggleState={state.toggleState}
          setToggleState={() =>
            setState(prevState => ({
              ...prevState,
              toggleState: !state.toggleState
            }))
          }
          fieldFlow="vertical"
          label="Mobile web banner"
          description="Set the marketing copy for your Mobile Web Banner"
          {...props}
        >
          <Input
            onChange={setInput}
            value={state.test || ""}
            label="Popup Custom Text"
            placeholder="Enter Popup Text"
          />
          <Input
            onChange={setInput}
            value={state.test || ""}
            label="Popup Custom Text"
            placeholder="Enter Popup Text"
          />

          <Button>Generate</Button>
        </FieldV2>
      </FieldsV2> */}
    </>
  );
});
