import React, { useState } from "react";
import { OptionBoxesV2 } from "./index";
import { OptionBox } from "./OptionBox";
import { Icon } from "../../elements/Icon";
import { Sofia } from "../../elements/Typography";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

storiesOf("Examples|Components/OptionBoxesV2", module)
  .add("Basic", () => {
    const [state, setState] = React.useState({
      selectedOptions: [],
    });

    const clickOption = (option) => {
      if (!state.selectedOptions.length) {
        return setState((prevState) => ({
          ...prevState,
          selectedOptions: [...state.selectedOptions, option],
        }));
      } else {
        let updatedState = [...state.selectedOptions];

        if (state.selectedOptions.includes(option)) {
          const index = state.selectedOptions.findIndex(
            (currOption) => currOption === option
          );
          updatedState.splice(index, 1);
          return setState((prevState) => ({
            ...prevState,
            selectedOptions: updatedState,
          }));
        } else {
          return setState((prevState) => ({
            ...prevState,
            selectedOptions: [...updatedState, option],
          }));
        }
      }
    };

    return (
      <OptionBoxesV2 selectedOptions={state.selectedOptions}>
        <OptionBox value="product" onClick={clickOption} id={1}>
          <Icon type="product" />
          <Sofia>Product</Sofia>
        </OptionBox>
        <OptionBox value="push" onClick={clickOption} id={2}>
          <Icon type="push" />
          <Sofia>Push</Sofia>
        </OptionBox>
      </OptionBoxesV2>
    );
  })
  .add("only one selected option", () => {
    const [state, setState] = React.useState({
      selectedOptions: [],
    });

    const clickOption = (option) => {
      if (state.selectedOptions.includes(option)) {
        return setState({ selectedOptions: [] });
      } else {
        const updatedState = [];
        updatedState.push(option);
        return setState({ selectedOptions: updatedState });
      }
    };

    return (
      <OptionBoxesV2 selectedOptions={state.selectedOptions}>
        <OptionBox value="product" onClick={clickOption} id={1}>
          <Icon type="product" />
          <Sofia>Product</Sofia>
        </OptionBox>
        <OptionBox value="push" onClick={clickOption} id={2}>
          <Icon type="push" />
          <Sofia>Push</Sofia>
        </OptionBox>
      </OptionBoxesV2>
    );
  });
