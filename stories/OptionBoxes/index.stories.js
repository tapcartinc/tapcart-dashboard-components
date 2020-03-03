import React, { useState } from "react";
import { OptionBoxes } from "../../lib/components/OptionBoxes";
import { Icon } from "../../lib/elements/Icon";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { colors } from "../../lib";

export default {
  component: OptionBoxes,
  title: "Components/OptionBoxes",
  decorators: [withKnobs]
};

export const optionBoxes = () => {
  const [state, setState] = React.useState({
    selectedOptions: [],
    singleOption: null
  });

  const clickOption = option => {
    if (!state.selectedOptions.length) {
      return setState(prevState => ({
        ...prevState,
        selectedOptions: [...state.selectedOptions, option]
      }));
    } else {
      let updatedState = [...state.selectedOptions];
      if (
        state.selectedOptions.filter(e => e.value === option.value).length > 0
      ) {
        const index = state.selectedOptions.findIndex(
          currOption => currOption.value === option.value
        );
        updatedState.splice(index, 1);
        return setState(prevState => ({
          ...prevState,
          selectedOptions: updatedState
        }));
      } else {
        return setState(prevState => ({
          ...prevState,
          selectedOptions: [...updatedState, option]
        }));
      }
    }
  };

  const setOption = option => {
    if (!state.singleOption) {
      return setState(prevState => ({
        ...prevState,
        singleOption: option
      }));
    } else if (option.value === state.singleOption.value) {
      return;
    } else {
      setState(prevState => ({
        ...prevState,
        singleOption: option
      }));
    }
  };

  return (
    <>
      <OptionBoxes
        size="120px"
        clickOption={clickOption}
        selectedOptions={state.selectedOptions}
        options={[
          { label: "product", icon: "product", value: "product" },
          { label: "collection", icon: "collection", value: "collection" }
        ]}
      />
      <OptionBoxes
        size="120px"
        clickOption={setOption}
        selectedOption={state.singleOption}
        options={[
          { label: "product", icon: "product", value: "product" },
          { label: "collection", icon: "collection", value: "collection" }
        ]}
      />
    </>
  );
};
