import React, { useState } from "react";
import { AccordionLabel } from "../AccordionLabel";
import { AccordionPanelBody } from "../AccordionPanelBody";
import AccordionV3Panel from "../AccordionV3Panel";
import AccordionV3 from "./index";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { Input } from "../Input";
import { Button } from "../../elements/Button";
import { OptionBoxes } from "../OptionBoxes";
import { Sofia, Circular } from "../../elements/Typography";
import { colorPicker } from "../../utils/_dashVariables";
import { Icon } from "../../elements/Icon";
import styled from "styled-components";
import "./story-styles.scss";

storiesOf("Examples|Components/AccordionV3", module).add("Push", () => {
  const [state, setState] = useState({
    values: {
      one: "",
      two: "",
      three: null
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
          id={1}
          complete={state.values.one ? true : false}
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
          id={2}
          complete={state.values.two ? true : false}
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
          id={3}
          complete={state.values.three ? true : false}
          errors={errors && errors["three"]}
        >
          <AccordionLabel>
            {errors && errors["three"] && !state.values.three ? (
              <Sofia fontSize="16px" color={colorPicker.red}>
                {errors["three"][0]}
              </Sofia>
            ) : (
              <Sofia fontSize="16px" color={colorPicker.black}>
                three
              </Sofia>
            )}
          </AccordionLabel>
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
});

const StyledMenuExampleLabel = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
`;

storiesOf("Examples|Components/AccordionV3", module).add("Menu", () => {
  const extraPanelStyles = {
    borderBottom: `1px solid ${colorPicker.gray25}`,
    borderRadius: "0px",
    height: "100%",
    width: "100%"
  };

  return (
    <>
      <AccordionV3 spacing={0} panelHeight={50} includeArrows>
        <AccordionV3Panel
          style={{
            borderTop: `1px solid ${colorPicker.gray25}`,
            ...extraPanelStyles
          }}
          id={1}
        >
          <AccordionLabel>
            <StyledMenuExampleLabel>
              <Icon
                style={{ height: "10px" }}
                type="double-dot-dot-dot"
                fill={colorPicker.blue}
                iconLeft
              />
              <Circular
                letterSpacing="1px"
                fontSize="14px"
                color={colorPicker.black}
              >
                FEATURED
              </Circular>
            </StyledMenuExampleLabel>
          </AccordionLabel>
          <AccordionPanelBody>FEATURED BODY</AccordionPanelBody>
        </AccordionV3Panel>

        <AccordionV3Panel style={extraPanelStyles} id={2}>
          <AccordionLabel>
            <StyledMenuExampleLabel>
              <Icon
                style={{ height: "10px" }}
                type="double-dot-dot-dot"
                fill={colorPicker.blue}
                iconLeft
              />
              <Circular
                letterSpacing="1px"
                fontSize="14px"
                color={colorPicker.black}
              >
                COLLECTIONS
              </Circular>
            </StyledMenuExampleLabel>
          </AccordionLabel>
          <AccordionPanelBody>COLLECTIONS BODY</AccordionPanelBody>
        </AccordionV3Panel>

        <AccordionV3Panel style={extraPanelStyles} id={3}>
          <AccordionLabel>
            <StyledMenuExampleLabel>
              <Icon
                style={{ height: "10px" }}
                type="double-dot-dot-dot"
                fill={colorPicker.blue}
                iconLeft
              />
              <Circular
                letterSpacing="1px"
                fontSize="14px"
                color={colorPicker.black}
              >
                ORDERS
              </Circular>
            </StyledMenuExampleLabel>
          </AccordionLabel>
          <AccordionPanelBody>ORDERS BODY</AccordionPanelBody>
        </AccordionV3Panel>
      </AccordionV3>
    </>
  );
});

storiesOf("Examples|Components/AccordionV3", module).add(
  "with class props",
  () => {
    return (
      <>
        <AccordionV3
          spacing={0}
          panelHeight={50}
          includeArrows
          className="accordion-with-classname"
        >
          <AccordionV3Panel
            id={1}
            className="accordion-with-classname__panel-one"
          >
            <AccordionLabel labelClassName="accordion-with-classname__label">
              <StyledMenuExampleLabel>
                <Icon
                  style={{ height: "10px" }}
                  type="double-dot-dot-dot"
                  fill="#FFFFFF"
                  iconLeft
                />
                <Circular letterSpacing="1px" fontSize="14px" color="#FFFFFF">
                  FEATURED
                </Circular>
              </StyledMenuExampleLabel>
            </AccordionLabel>
            <AccordionPanelBody bodyClassName="accordion-with-classname__body">
              FEATURED BODY
            </AccordionPanelBody>
          </AccordionV3Panel>

          <AccordionV3Panel id={2}>
            <AccordionLabel>
              <StyledMenuExampleLabel>
                <Icon
                  style={{ height: "10px" }}
                  type="double-dot-dot-dot"
                  fill={colorPicker.blue}
                  iconLeft
                />
                <Circular
                  letterSpacing="1px"
                  fontSize="14px"
                  color={colorPicker.black}
                >
                  COLLECTIONS
                </Circular>
              </StyledMenuExampleLabel>
            </AccordionLabel>
            <AccordionPanelBody>COLLECTIONS BODY</AccordionPanelBody>
          </AccordionV3Panel>

          <AccordionV3Panel id={3}>
            <AccordionLabel>
              <StyledMenuExampleLabel>
                <Icon
                  style={{ height: "10px" }}
                  type="double-dot-dot-dot"
                  fill={colorPicker.blue}
                  iconLeft
                />
                <Circular
                  letterSpacing="1px"
                  fontSize="14px"
                  color={colorPicker.black}
                >
                  ORDERS
                </Circular>
              </StyledMenuExampleLabel>
            </AccordionLabel>
            <AccordionPanelBody>ORDERS BODY</AccordionPanelBody>
          </AccordionV3Panel>
        </AccordionV3>
      </>
    );
  }
);
