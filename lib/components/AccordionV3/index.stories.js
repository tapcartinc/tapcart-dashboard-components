import React, { useState } from "react";
import { AccordionLabel } from "../AccordionLabel";
import { AccordionPanelBody } from "../AccordionPanelBody";
import AccordionV3Panel from "../AccordionV3Panel";
import AccordionV3 from "./index";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { Input } from "../Input";
import { Button } from "../../elements/Button";
import { OptionBoxes } from "../OptionBoxes";

export default {
  component: AccordionV3,
  title: "Components/AccordionV3",
  decorators: [withKnobs]
};

export const accordionSecondVersion = () => {
  const [state, setState] = useState({
    values: {
      one: "",
      two: "",
      three: {}
    }
  });
  const [errors, setErrors] = useState({});
  const errorSchemaCheck = {
    one: ["error - one"],
    three: ["error - three"]
  };
  const setField = e => {
    e.persist();
    const currentField = e.target.name;
    setState(prevState => ({
      ...prevState,
      values: {
        ...prevState.values,
        [currentField]: e.target.value
      }
    }));
  };
  const setOptionField = option => {
    if (!option) {
      return setState(prevState => ({
        ...prevState,
        values: {
          ...prevState.values,
          three: null
        }
      }));
    }

    if (option.value === state.values.three.value) {
      return setState(prevState => ({
        ...prevState,
        values: {
          ...prevState.values,
          three: {}
        }
      }));
    }

    setState(prevState => ({
      ...prevState,
      values: {
        ...prevState,
        three: option
      }
    }));
  };

  const checkForErrors = () => {
    const returningErrorObj = {};
    Object.entries(errorSchemaCheck).map(errorField => {
      if (!state.values[errorField[0]]) {
        returningErrorObj[errorField[0]] = errorField[1];
      }
    });
    return setErrors(returningErrorObj);
  };
  return (
    <>
      <AccordionV3>
        <AccordionV3Panel
          complete={state.values.one}
          errors={errors && errors["one"]}
        >
          <AccordionLabel>1</AccordionLabel>
          <AccordionPanelBody>
            <Input
              name="one"
              value={state.values.one || ""}
              onChange={setField}
            />
          </AccordionPanelBody>
        </AccordionV3Panel>
        <AccordionV3Panel
          complete={state.values.two}
          errors={errors && errors["two"]}
        >
          <AccordionLabel>2</AccordionLabel>
          <AccordionPanelBody>
            <Input
              name="two"
              value={state.values.two || ""}
              onChange={setField}
            />
          </AccordionPanelBody>
        </AccordionV3Panel>
        <AccordionV3Panel
          complete={state.values.three}
          errors={errors && errors["three"]}
        >
          <AccordionLabel>3</AccordionLabel>
          <AccordionPanelBody>
            <OptionBoxes
              size="120px"
              clickOption={setOptionField}
              name="three"
              selectedOption={state.values.three}
              options={[
                { label: "cat", icon: "design", value: "cat" },
                { label: "dog", icon: "push", value: "dog" }
              ]}
            />
          </AccordionPanelBody>
        </AccordionV3Panel>
      </AccordionV3>
      <Button kind="primary" onClick={checkForErrors}>
        Submit
      </Button>
    </>
  );
};
