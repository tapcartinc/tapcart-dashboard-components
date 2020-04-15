import React, { useState } from "react";
import Toggle from "../../lib/components/Toggle";
import PropTypes, { node } from "prop-types";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { Input } from "../../lib/components/Input";
import { Fields } from "../../lib/components/Fields";
import { Field } from "../../lib/components/Field";
import { Button } from "../../lib/elements/Button";
import { ImageUploader, SegmentedControl } from "../../lib";

export default {
  component: Fields,
  title: "Components/Fields",
  decorators: [withKnobs]
};

export const fields = props => {
  const [state, setState] = React.useState({
    test: "",
    toggleState: false,
    image: null,
    currentSelection: "disabled"
  });

  const setInput = e => {
    e.persist();
    setState(prevState => ({
      ...prevState,
      test: e.target.value
    }));
  };

  const handleImageUpload = files => {
    const selectedImage =
      "https://66.media.tumblr.com/tumblr_macbbpcagJ1rwpp3eo1_400.png";

    setState(prevState => ({
      ...prevState,
      image: selectedImage
    }));
  };

  const changeSection = selectedTab => {
    if (state.currentSelection === selectedTab) {
      return;
    }

    setState(prevState => ({
      ...prevState,
      currentSelection: selectedTab
    }));
  };

  return (
    <div style={{ padding: 20 }}>
      <Fields sectionHeader="Popups Customization">
        <Field
          hasToggle
          setToggleState={() =>
            setState(prevState => ({
              ...prevState,
              toggleState: !state.toggleState
            }))
          }
          toggleState={state.toggleState}
          // fieldFlow="horizontal"
          label="Display sold out products"
          description="This will hide or show sold out products in your mobile app"
          {...props}
        >
          {/* <Toggle
            type="basic"
            id="toggle"
            toggleState={state.toggleState}
            onChange={() =>
              setState(prevState => ({
                ...prevState,
                toggleState: !state.toggleState
              }))
            }
          /> */}
        </Field>
        <Field
          fieldFlow="horizontal"
          label="Display sold out products"
          description="This will hide or show sold out products in your mobile app"
          {...props}
        >
          <Toggle
            type="basic"
            id="toggle"
            toggleState={state.toggleState}
            onChange={() =>
              setState(prevState => ({
                ...prevState,
                toggleState: !state.toggleState
              }))
            }
          />
        </Field>
        <Field
          lastField
          fieldFlow="horizontal"
          label="Display sold out products"
          description="This will hide or show sold out products in your mobile app"
          {...props}
        >
          <Toggle
            type="basic"
            id="toggle"
            toggleState={state.toggleState}
            onChange={() =>
              setState(prevState => ({
                ...prevState,
                toggleState: !state.toggleState
              }))
            }
          />
        </Field>
      </Fields>
      <Fields>
        <Field
          {...props}
          fieldFlow="horizontal"
          label="User accounts"
          description={
            <div>
              Allow your customers to create an account.
              <br /> Note: make sure this matches the setting on
              <br /> your Shopify dashboard.
            </div>
          }
        >
          <SegmentedControl
            type="secondary"
            items={{
              disabled: "disabled",
              optional: "optional",
              required: "mouse"
            }}
            width="270px"
            action={changeSection}
            current={state.currentSelection}
            // icons={{ cat: "blocks", dog: "theme", mouse: "menu-icon" }}
          />
        </Field>
        <Field
          lastField
          {...props}
          fieldFlow="horizontal"
          label="Checkout account creation"
          description={
            <div>
              Require customers to create an account in
              <br /> order to checkout.
            </div>
          }
        >
          <SegmentedControl
            type="secondary"
            items={{
              disabled: "disabled",
              optional: "optional",
              required: "mouse"
            }}
            width="330px"
            action={changeSection}
            current={state.currentSelection}
            // icons={{ cat: "blocks", dog: "theme", mouse: "menu-icon" }}
          />
        </Field>
      </Fields>

      <Fields>
        <Field
          {...props}
          fieldFlow="vertical"
          label="Display sold out products"
          description="This will hide or show sold out products in your mobile app"
        >
          <ImageUploader
            label="Image"
            value={state.image}
            handleImageUpload={handleImageUpload}
          />
          <Input
            onChange={setInput}
            value={state.test || ""}
            label="Popup Custom Text"
            placeholder="Enter Popup Text"
          />
        </Field>
      </Fields>

      <Fields sectionHeader="Product Detail Page">
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
      </Fields>

      <Fields sectionHeader="Mobile web banners">
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
      </Fields>
    </div>
  );
};
