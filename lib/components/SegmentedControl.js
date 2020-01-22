import React, { Component } from "react";
import styled from "styled-components";

import { sofia, colors } from "../utils/_variables";
import { onClickTransition } from "../utils/_animations";

import { Icon } from "../elements/Icon";
import { ContainerBox } from "../layout/ContainerBox";
import { sofiaPro } from "../utils/_dashVariables";

class SegmentedControl extends Component {
  clickHandler = e => {
    const currentActive = e.currentTarget.value;
    this.props.action(currentActive, e);
  };

  render() {
    const { sofiaRegular } = sofia;
    const SegmentedControlType = props => {
      switch (props.type) {
        case "primary":
          return (
            <ContainerBox>
              <SegmentedControlStyle>
                {Object.keys(props.items).map((key, idx) => {
                  return (
                    <Tab
                      key={key}
                      current={props.current}
                      htmlFor={`${key}`}
                      style={{
                        display: "flex"
                      }}
                    >
                      {props.icons && (
                        <div>
                          <Icon
                            iconLeft
                            type={props.icons[idx]}
                            fill={props.current === key ? "white" : "blue"}
                          />
                        </div>
                      )}
                      {props.items[key]}

                      <input
                        type="radio"
                        value={key}
                        id={`${key}`}
                        name={props.name}
                        style={{
                          visibility: "hidden",
                          width: "100%",
                          height: "100%",
                          border: " 1px solid #000",
                          // margin: "0",
                          position: "absolute"
                        }}
                        onClick={props.clickHandler}
                      />
                    </Tab>
                  );
                })}
              </SegmentedControlStyle>
            </ContainerBox>
          );

        case "secondary":
          return (
            <SecondaryControlStyle>
              <SegmentedControlTabs
                style={{
                  display: "flex",
                  width: "100%",
                  boxShadow: `inset 0 0 0 1px ${colors.bluegray}`,
                  borderRadius: "3px",
                  sofiaRegular
                }}
              >
                {Object.keys(props.items).map(key => {
                  return (
                    <SecondaryTab
                      key={key}
                      htmlFor={`${key}`}
                      current={props.current}
                    >
                      {props.hasIcons && (
                        <div>
                          <Icon
                            type={props.icons[key]}
                            fill={props.current === key ? "blue" : "lightblue"}
                            style={{ marginRight: 10 }}
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
                        style={{
                          visibility: "hidden",
                          width: "100%",
                          height: "100%",
                          border: " 1px solid #000",
                          margin: "0",
                          position: "absolute"
                        }}
                      />
                    </SecondaryTab>
                  );
                })}
              </SegmentedControlTabs>
            </SecondaryControlStyle>
          );

        case "field":
          return (
            <FieldSegmentedControl style={props.style}>
              <FieldSegmentedControlTabs>
                {Object.keys(props.items).map(key => {
                  return (
                    <FieldTab
                      key={key}
                      htmlFor={`${key}`}
                      current={props.current}
                    >
                      {props.items[key]}

                      <input
                        type="radio"
                        value={key}
                        id={`${key}`}
                        name={props.name}
                        onClick={props.clickHandler}
                        style={{
                          visibility: "hidden",
                          width: "100%",
                          height: "100%",
                          border: " 1px solid #000",
                          margin: "0",
                          position: "absolute"
                        }}
                      />
                    </FieldTab>
                  );
                })}
              </FieldSegmentedControlTabs>
            </FieldSegmentedControl>
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

const FieldSegmentedControl = styled.div`
  height: 38px;
  border-radius: 3px;
  background: ${props => (props.bgColor ? props.bgColor : "transparent")};
  width: 100%;
  overflow: hidden;
  text-align: center;
  margin: auto;
  border: 1px solid ${colors.blue};
  ${sofiaPro.regular};
  text-transform: uppercase;
  font-weight: 300;
`;

const FieldSegmentedControlTabs = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-items: space-between;
`;
const FieldTab = styled.label`
  flex: 1;
  height: 38px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  font-weight: 400;
  font-style: normal;
  font-size: 14px;
  letter-spacing: 1px;
  ${sofiaPro.regular};

  ${props =>
    props.current === props.htmlFor
      ? `
    background: ${colors.blue};
    color: #fff;
    border-radius: 2px;
  `
      : `color: ${colors.blue};`}
`;

const SegmentedControlTabs = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-items: space-between;
`;

const SegmentedControlStyle = styled.div`
  margin: auto;
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-items: space-between;
  width: 100%;
  ${props => (props.style ? props.style : null)}
`;
const SecondaryControlStyle = styled.div`
  margin: 0px;
  max-width: 450px;
  overflow: hidden;
  display: flex;
  flex-direction: row;

  ${props => (props.style ? props.style : null)}
`;

const Tab = styled.label`
  color: #000;
  font-size: 15px;
  ${sofiaPro.regular};
  flex: 1;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  font-weight: 500;
  font-style: normal;
  padding: 15px 0px;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  ${props => {
    return (
      props.current === props.htmlFor &&
      `background: #3235ab;
    color: #fff;
    border-radius: 3px;
    box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.3);`
    );
  }};

  &:hover {
    cursor: pointer;
  }
`;

const SecondaryTab = styled.label`
  flex: 1;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  ${sofiaPro.regular};
  font-weight: normal;
  font-style: normal;
  padding: 10px;
  letter-spacing: 0.5px;
  color: #a2a4dd;
  font-size: 14px;
  width: 100%;
  transition: ease-out 0.2s;
  border: 1px solid transparent;
  ${props =>
    props.current === props.htmlFor &&
    `background: #fff;
    color: #3235ab;
    border-radius: 3px;
    box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.2);
    opacity: 1;
    border: 1px solid #3235ab;
    `}
  &:hover {
    cursor: pointer;
  }
`;

export { SegmentedControl };
