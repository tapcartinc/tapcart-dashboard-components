import React, { Component } from "react";
import {
  StyledSecondaryTab,
  StyledTab,
  StyledFieldSegmentedControl,
  StyledFieldSegmentedControlTabs,
  StyledFieldTab,
  StyledSegmentedControlTabs,
  StyledSegmentedControlStyle,
  StyledSecondaryControlStyle,
} from "./styles";
import { Icon } from "../../elements/Icon";
import { ContainerBox } from "../../layout/ContainerBox";
import { colorPicker } from "../../utils/_dashVariables";
import PropTypes from "prop-types";

class SegmentedControl extends Component {
  clickHandler = (e) => {
    const currentActive = e.currentTarget.value;
    this.props.action(currentActive, e);
  };

  render() {
    const SegmentedControlType = (props) => {
      switch (props.type) {
        case "primary":
        case null:
          return (
            <ContainerBox>
              <StyledSegmentedControlStyle width={this.props.width}>
                {Object.keys(props.items).map((key, idx) => {
                  return (
                    <StyledTab
                      key={key}
                      current={props.current}
                      htmlFor={`${key}`}
                    >
                      {props.icons && (
                        <div>
                          <Icon
                            iconLeft
                            type={props.icons[key]}
                            fill={
                              props.current === key ? "white" : colorPicker.blue
                            }
                          />
                        </div>
                      )}
                      {props.items[key]}

                      <input
                        type="radio"
                        value={key}
                        id={`${key}`}
                        name={props.name}
                        onClick={props.clickHandler}
                      />
                    </StyledTab>
                  );
                })}
              </StyledSegmentedControlStyle>
            </ContainerBox>
          );

        case "secondary":
          return (
            <StyledSecondaryControlStyle>
              <StyledSegmentedControlTabs>
                {Object.keys(props.items).map((key) => {
                  return (
                    <StyledSecondaryTab
                      key={key}
                      htmlFor={`${key}`}
                      current={props.current}
                    >
                      {props.hasIcons && (
                        <div>
                          <Icon
                            type={props.icons[key]}
                            fill={
                              props.current === key
                                ? colorPicker.blue
                                : colorPicker.grayBlue
                            }
                            iconLeft
                          />
                        </div>
                      )}

                      {props.items[key]}

                      <input
                        type="radio"
                        value={key}
                        id={`${key}`}
                        name={props.name}
                        onClick={props.clickHandler}
                      />
                    </StyledSecondaryTab>
                  );
                })}
              </StyledSegmentedControlTabs>
            </StyledSecondaryControlStyle>
          );

        case "field":
          return (
            <StyledFieldSegmentedControl style={props.style}>
              <StyledFieldSegmentedControlTabs>
                {Object.keys(props.items).map((key, index) => {
                  return (
                    <StyledFieldTab
                      key={key}
                      htmlFor={`${key}`}
                      firstIndex={index === 0}
                      current={props.current}
                    >
                      {props.items[key]}

                      <input
                        type="radio"
                        value={key}
                        id={`${key}`}
                        name={props.name}
                        onClick={props.clickHandler}
                      />
                    </StyledFieldTab>
                  );
                })}
              </StyledFieldSegmentedControlTabs>
            </StyledFieldSegmentedControl>
          );
        default:
          return <div />;
      }
    };

    const hasIcons = this.props.hasOwnProperty("icons");

    return (
      <SegmentedControlType
        {...this.props}
        hasIcons={hasIcons}
        clickHandler={this.clickHandler}
      />
    );
  }
}

export { SegmentedControl };

SegmentedControl.propTypes = {
  /**
   * Required prop for applying the correct branded styling to the current segmented control
   * options: primary, secondary, field
   */
  type: PropTypes.string,
  /**
   * The control's list of clickable items
   * Format: items={{itemOne: "item one", itemTwo: "item two"}}
   */
  items: PropTypes.object,
  /**
   * Item selection handler
   */
  action: PropTypes.func,
  /**
   * Currently selected item
   * Typically set the first option to the default if merchant hasn't selected another item but this varies per the design specs
   */
  current: PropTypes.any,
  /**
   * Optional object of icons that align with the correlating items
   * Pass the "type" given to all of the icons in the component library
   * Should not add icons here that are outside of the component library
   * Format: icons={{itemOne: "itemOneIconType", itemTwo: "itemTwoIconType"}}
   */
  icons: PropTypes.object,
};
SegmentedControl.defaultProps = {
  type: "primary",
};
