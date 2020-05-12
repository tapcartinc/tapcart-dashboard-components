import React from "react";
import { Toggle } from "../Toggle";
import { storiesOf } from "@storybook/react";
import { Textarea } from "../Textarea";
import { Input } from "../Input";
import { Fields } from "./index";
import { Field } from "./Field";
import { FieldHeader } from "./FieldHeader";
import { FieldLabel } from "./FieldLabel";
import { FieldDescription } from "./FieldDescription";
import { Button } from "../../elements/Button";
import { ImageUploader } from "../ImageUploader";
import { SegmentedControl } from "../SegmentedControl";

import { withKnobs, text, boolean } from "@storybook/addon-knobs";

storiesOf("Examples|Components/Fields", module).add("Basic", (props) => {
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
      <Fields sectionHeader="Section Header">
        <Field>
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
        </Field>
        <Field>
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
        </Field>

        <Field
          {...props}
          fieldFlow="vertical"
          label="Display sold out products"
          description="This will hide or show sold out products in your mobile app"
        >
          <FieldHeader stretch={true}>
            <FieldLabel>Label here</FieldLabel>
            <FieldDescription>Description here</FieldDescription>
          </FieldHeader>
          <ImageUploader
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
        </Field>
      </Fields>

      {/* <Fields>
        <Field
          {...props}
          fieldFlow="vertical"
          label="Display sold out products"
          description="This will hide or show sold out products in your mobile app"
        >
          <ImageUploader
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
        </Field>
      </Fields> */}

      {/* <Fields sectionHeader="Product Detail Page">
        <Field
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
        </Field>
      </Fields> */}

      {/* <Fields sectionHeader="Mobile web banners">
        <Field
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
        </Field>
      </Fields> */}
    </>
  );
});
