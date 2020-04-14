import React, { useState } from "react";
import { AccordionLabel } from "../AccordionLabel";
import { AccordionPanelBody } from "../AccordionPanelBody";
import AccordionV3Panel from "../AccordionV3Panel";
import AccordionV3 from "./index";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { Input } from "../Input";
import { Button } from "../../elements/Button";
import { OptionBoxes } from "../OptionBoxes";
import { Sofia } from "../../elements/Typography";
import { Icon } from "../../elements/Icon";
import { colorPicker } from "../../utils/_dashVariables";

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
      three: null
    }
  });
  const [errors, setErrors] = useState({});
  console.log("errors", errors);
  // useEffect(() => {
  //   if (errors && errors)
  // }, [state.values.one, state.values.two, state.values.three]);

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

    if (state.values.three && option.value === state.values.three.value) {
      return setState(prevState => ({
        ...prevState,
        values: {
          ...prevState.values,
          three: null
        }
      }));
    }

    setState(prevState => ({
      ...prevState,
      values: {
        ...prevState.values,
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
      <AccordionV3
        onePanelOpen
        steps
        includeBorder
        spacing={20}
        panelHeight={65}
        includeArrows
      >
        <AccordionV3Panel
          complete={state.values.one}
          errors={errors && errors["one"]}
        >
          <AccordionLabel>
            {errors && errors["one"] && !state.values.one ? (
              <Sofia fontSize="16px" color={colorPicker.red}>
                {errors["one"][0]}
              </Sofia>
            ) : (
              <Sofia fontSize="16px" color={colorPicker.black}>
                one
              </Sofia>
            )}
          </AccordionLabel>
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
          <AccordionLabel>two</AccordionLabel>
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
          <AccordionLabel>three</AccordionLabel>
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
