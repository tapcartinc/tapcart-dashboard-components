import React from "react";
import Select, { components } from "react-select";
import { Icon } from "../elements/Icon";
import { sofia, inputBorder, colors } from "../utils/_variables";
import { hoverWithBorder } from "../utils/_animations";
import { placeholder, input } from "../elements/Typography";

function SelectDropdown(props) {
  const DropdownIndicator = props => {
    return (
      components.DropdownIndicator && (
        <components.DropdownIndicator {...props}>
          <Icon
            type="arrow-down"
            fill="darkgray"
            style={
              props.selectProps.menuIsOpen
                ? { transform: "rotate(180deg)", transition: ".2s ease-in-out" }
                : { transform: "rotate(0deg)", transition: ".2s ease-in-out" }
            }
          />
        </components.DropdownIndicator>
      )
    );
  };

  const { sofiaRegular } = sofia;

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      sofiaRegular,
      "&:hover": {
        background: colors.lightgray,
        transition: ".2s all",
        cursor: "pointer"
      },
      color: colors.black,
      backgroundColor: state.isSelected ? colors.lightgray : colors.offwhite
    }),
    menu: (provided, state) => ({
      ...provided,
      ...input,
      boxShadow: "0px transparent !important"
    }),
    menuList: (provided, state) => {
      const transition = "opacity 300ms";

      return {
        ...provided,
        ...inputBorder,
        transition,
        padding: 0,
        boxShadow: "0px transparent !important"
      };
    },

    placeholder: (provided, state) => ({
      ...provided,
      ...placeholder
    }),
    valueContainer: (provided, state) => ({
      ...provided,
      ...placeholder
    }),

    control: (provided, state) => ({
      ...provided,
      borderRadius: "3px",
      backgroundColor: colors.offwhite,
      borderColor: state.selectProps.menuIsOpen ? colors.blue : colors.bluegray,
      borderStyle: "solid",
      borderWidth: "1px",
      outline: "0px !important",
      boxShadow: "none",

      "&:hover": {
        border: `1px solid ${colors.blue}`,
        cursor: "pointer",
        hoverWithBorder,
        transition: ".2s ease"
      }
    }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        backgroundColor: isDisabled
          ? null
          : isSelected
          ? colors.blue
          : isFocused
          ? colors.gray10
          : null,
        color: isDisabled ? colors.gray25 : isSelected ? "white" : colors.black,
        cursor: isDisabled ? "not-allowed" : "default",

        ":active": {
          ...styles[":active"],
          backgroundColor:
            !isDisabled && (isSelected ? colors.blue : colors.gray50)
        }
      };
    },

    indicatorSeparator: (provided, state) => ({
      ...provided,
      display: "none"
    })
  };

  return (
    <Select
      {...props}
      components={{ DropdownIndicator }}
      styles={customStyles}
      isSearchable={false}
    />
  );
}
export { SelectDropdown };
