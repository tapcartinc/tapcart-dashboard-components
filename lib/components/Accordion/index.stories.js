import React, { useState } from "react";
import { AccordionLabel } from "./AccordionLabel";
import { AccordionBody } from "./AccordionBody";
import { AccordionPanel } from "./AccordionPanel";
import { Accordion } from "./index";
import { storiesOf } from "@storybook/react";
import { Input } from "../Input/index";
import { Button } from "../../components/Button";
import { OptionBoxes } from "../OptionBoxes";
import { OptionBox } from "../OptionBoxes/OptionBox";
import { Sofia, Circular } from "../../elements/TypographyOld";
import { colorPicker } from "../../utils/_dashVariables";
import { Icon } from "../../elements/Icon";
import styled from "styled-components";
import "./story-styles.scss";

import { withKnobs, text, boolean } from "@storybook/addon-knobs";

storiesOf("Examples|Components/Accordion", module)
  .addParameters({ options: { panelPosition: "bottom" } })
  .add("Push", () => {
    const [state, setState] = useState({
      values: {
        one: "",
        two: "",
        three: null,
        selectedOptions: [],
      },
    });

    const [selectedOptions, setSelectionOptions] = React.useState([]);

    const [errors, setErrors] = useState({});

    const errorSchemaCheck = {
      one: ["error - one"],
      three: ["error - three"],
    };

    const setField = (e) => {
      e.persist();
      const currentField = e.target.name;
      setState((prevState) => ({
        ...prevState,
        values: {
          ...prevState.values,
          [currentField]: e.target.value,
        },
      }));
    };

    const checkForErrors = () => {
      const returningErrorObj = {};
      Object.entries(errorSchemaCheck).map((errorField) => {
        if (!state.values[errorField[0]]) {
          returningErrorObj[errorField[0]] = errorField[1];
        }
      });
      return setErrors(returningErrorObj);
    };

    const clickOption = (option) => {
      if (!selectedOptions.length) {
        const options = [];
        options.push(option);
        return setSelectionOptions(options);
      } else {
        let updatedState = [...selectedOptions];

        if (selectedOptions.includes(option)) {
          const index = selectedOptions.findIndex(
            (currOption) => currOption === option
          );
          updatedState.splice(index, 1);
          return setSelectionOptions(updatedState);
        } else {
          return setSelectionOptions([...updatedState, option]);
        }
      }
    };

    return (
      <>
        <Accordion
          onePanelOpen
          steps
          includeBorder
          spacing={20}
          panelHeight={65}
          includeArrows
        >
          <AccordionPanel
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
            <AccordionBody>
              <Input
                name="one"
                value={state.values.one || ""}
                onChange={setField}
              />
            </AccordionBody>
          </AccordionPanel>
          <AccordionPanel
            id={2}
            complete={state.values.two ? true : false}
            errors={errors && errors["two"]}
          >
            <AccordionLabel>
              <Sofia fontSize="16px" color={colorPicker.black}>
                two
              </Sofia>
            </AccordionLabel>
            <AccordionBody>
              <Input
                name="two"
                value={state.values.two || ""}
                onChange={setField}
              />
            </AccordionBody>
          </AccordionPanel>
          <AccordionPanel
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
            <AccordionBody>
              <OptionBoxes selectedOptions={selectedOptions}>
                <OptionBox value="product" onClick={clickOption} id={1}>
                  <Icon type="product" />
                  <Sofia>Product</Sofia>
                </OptionBox>
                <OptionBox value="push" onClick={clickOption} id={2}>
                  <Icon type="push" />
                  <Sofia>Push</Sofia>
                </OptionBox>
              </OptionBoxes>
            </AccordionBody>
          </AccordionPanel>
        </Accordion>
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

storiesOf("Examples|Components/Accordion", module).add("Menu", () => {
  const extraPanelStyles = {
    borderBottom: `1px solid ${colorPicker.gray25}`,
    borderRadius: "0px",
    height: "100%",
    width: "100%",
  };

  return (
    <>
      <Accordion spacing={0} panelHeight={50} includeArrows>
        <AccordionPanel
          style={{
            borderTop: `1px solid ${colorPicker.gray25}`,
            ...extraPanelStyles,
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
          <AccordionBody>FEATURED BODY</AccordionBody>
        </AccordionPanel>

        <AccordionPanel style={extraPanelStyles} id={2}>
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
          <AccordionBody>COLLECTIONS BODY</AccordionBody>
        </AccordionPanel>

        <AccordionPanel style={extraPanelStyles} id={3}>
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
          <AccordionBody>ORDERS BODY</AccordionBody>
        </AccordionPanel>
      </Accordion>
    </>
  );
});

storiesOf("Examples|Components/Accordion", module).add(
  "with class props",
  () => {
    return (
      <>
        <Accordion
          spacing={0}
          panelHeight={50}
          includeArrows
          className="accordion-with-classname"
        >
          <AccordionPanel
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
                <Circular
                  letterSpacing="1px"
                  fontSize="14px"
                  color={colorPicker.black}
                >
                  FEATURED
                </Circular>
              </StyledMenuExampleLabel>
            </AccordionLabel>
            <AccordionBody bodyClassName="accordion-with-classname__body">
              FEATURED BODY
            </AccordionBody>
          </AccordionPanel>

          <AccordionPanel id={2}>
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
            <AccordionBody>COLLECTIONS BODY</AccordionBody>
          </AccordionPanel>

          <AccordionPanel id={3}>
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
            <AccordionBody>ORDERS BODY</AccordionBody>
          </AccordionPanel>
        </Accordion>
      </>
    );
  }
);
