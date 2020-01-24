import React from "react";
import styled from "styled-components";
import { colors } from "../../utils/_variables";
import { colorPicker } from "../../utils/_dashVariables";
import { Icon } from "../../elements/Icon";
import { DashIcon } from "../../elements/DashIcon";

function BoxedToggle(props) {
  const SunIcon = props => {
    return (
      <svg
        width="20px"
        height="20px"
        viewBox="0 0 20 20"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        style={props.style}
        {...props}
      >
        <g
          id="Style-Guide"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <g
            transform="translate(-190.000000, -2015.000000)"
            id="Toggle-Apple"
            stroke="#FFFFFF"
            strokeWidth="1.6"
          >
            <g transform="translate(184.000000, 2009.000000)">
              <g id="sun" transform="translate(7.000000, 7.000000)">
                <path d="M0,8.8 L0.8,8.8" id="Path"></path>
                <path d="M2.56,2.56 L3.12,3.12" id="Path"></path>
                <path d="M8.8,0 L8.8,0.8" id="Path"></path>
                <path d="M15.04,2.56 L14.48,3.12" id="Path"></path>
                <path d="M17.6,8.8 L16.8,8.8" id="Path"></path>
                <path d="M15.04,15.04 L14.48,14.48" id="Path"></path>
                <path d="M8.8,17.6 L8.8,16.8" id="Path"></path>
                <path d="M2.56,15.04 L3.12,14.48" id="Path"></path>
                <circle id="Oval" cx="8.8" cy="8.8" r="4.8"></circle>
              </g>
            </g>
          </g>
        </g>
      </svg>
    );
  };

  const MoonIcon = props => {
    return (
      <svg
        width="20px"
        height="20px"
        viewBox="0 0 20 20"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        style={props.style}
        {...props}
      >
        <g
          id="Style-Guide"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <g
            transform="translate(-223.000000, -2072.000000)"
            id="Toggle-Android"
            stroke="#FFFFFF"
            strokeWidth="1.6"
          >
            <g transform="translate(184.000000, 2066.000000)">
              <g id="moon-stars" transform="translate(40.000000, 7.000000)">
                <path
                  d="M13.6,12 C9.2,12 5.6,8.4 5.6,4 C5.6,3.28 5.68,2.56 5.92,1.92 C2.48,2.8 0,5.92 0,9.6 C0,14 3.6,17.6 8,17.6 C11.68,17.6 14.8,15.12 15.68,11.68 C15.04,11.92 14.32,12 13.6,12 Z"
                  id="Path"
                ></path>
                <path d="M11.2,0 L11.2,3.2" id="Path"></path>
                <path d="M9.6,1.6 L12.8,1.6" id="Path"></path>
                <path d="M16,4.8 L16,8" id="Path"></path>
                <path d="M14.4,6.4 L17.6,6.4" id="Path"></path>
              </g>
            </g>
          </g>
        </g>
      </svg>
    );
  };

  switch (props.type) {
    case "basic":
      return (
        <BoxedToggleWrapper
          style={{ margin: 5 }}
          border={colorPicker.grayBlue}
          backgroundOn={colorPicker.green100}
          backgroundOff={colorPicker.offWhite}
          {...props}
        >
          <BoxedToggleInput
            type="checkbox"
            id={props.name}
            checked={props.toggleState}
            onClick={() => props.onChange(!props.toggleState)}
            onChange={props.onChange}
            border={colorPicker.grayBlue}
            backgroundOn={colorPicker.green100}
            backgroundOff={colorPicker.offWhite}
            style={{ position: "absolute" }}
            {...props}
          />

          <BoxedToggleLabel
            border={colorPicker.grayBlue}
            backgroundOn={colorPicker.green100}
            backgroundOff={colorPicker.offWhite}
            htmlFor={props.name}
            {...props}
          >
            <Icon
              type="checkmark-small"
              onClick={() => props.onChange(!props.toggleState)}
              fill={props.toggleState ? "transparent" : "white"}
              style={{
                position: "absolute",
                zIndex: 1,
                left: 10,
                marginTop: 11
              }}
            />
            <Icon
              type="small-close"
              onClick={() => props.onChange(!props.toggleState)}
              fill={props.toggleState ? "transparent" : colors.grayText}
              style={{
                position: "absolute",
                zIndex: 1,
                right: 10,
                marginTop: 11
              }}
            />
          </BoxedToggleLabel>
        </BoxedToggleWrapper>
      );
    case "day/night":
      return (
        <BoxedToggleWrapper
          style={{ margin: 5 }}
          border={colorPicker.blue}
          backgroundOn={colorPicker.yellow}
          backgroundOff={colorPicker.blue}
          {...props}
        >
          <BoxedToggleInput
            type="checkbox"
            id={props.name}
            checked={props.toggleState}
            onClick={() => props.onChange(!props.toggleState)}
            onChange={props.onChange}
            border={colorPicker.blue}
            backgroundOn={colorPicker.yellow}
            backgroundOff={colorPicker.blue}
            style={{ position: "absolute" }}
            {...props}
          />

          <BoxedToggleLabel
            border={colorPicker.blue}
            backgroundOn={colorPicker.yellow}
            backgroundOff={colorPicker.blue}
            htmlFor={props.name}
            {...props}
          >
            <SunIcon
              type="checkmark-small"
              onClick={() => props.onChange(!props.toggleState)}
              fill={props.toggleState ? "transparent" : "white"}
              style={{
                position: "absolute",
                zIndex: 1,
                left: 7,
                marginTop: 6
              }}
            />
            <MoonIcon
              onClick={() => props.onChange(!props.toggleState)}
              fill={props.toggleState ? "transparent" : colors.grayText}
              style={{
                position: "absolute",
                zIndex: 1,
                right: 6,
                marginTop: 6
              }}
            />
          </BoxedToggleLabel>
        </BoxedToggleWrapper>
      );
    case "apple/android":
      return (
        <BoxedToggleWrapper
          style={{ margin: 5 }}
          border={colorPicker.androidGreen}
          backgroundOn={colorPicker.black}
          backgroundOff={colorPicker.androidGreen}
          {...props}
        >
          <BoxedToggleInput
            type="checkbox"
            id={props.name}
            checked={props.toggleState}
            onClick={() => props.onChange(!props.toggleState)}
            onChange={props.onChange}
            border={colorPicker.androidGreen}
            backgroundOn={colorPicker.black}
            backgroundOff={colorPicker.androidGreen}
            style={{ position: "absolute" }}
            {...props}
          />

          <BoxedToggleLabel
            border={colorPicker.androidGreen}
            backgroundOn={colorPicker.black}
            backgroundOff={colorPicker.androidGreen}
            htmlFor={props.name}
            {...props}
          >
            <DashIcon
              type="apple"
              onClick={() => props.onChange(!props.toggleState)}
              fill={props.toggleState ? "white" : "white"}
              style={{
                position: "absolute",
                zIndex: 1,
                left: 6,
                marginTop: 6,
                marginLeft: 2,
                width: 18,
                height: 18
              }}
            />
            <DashIcon
              type="android"
              onClick={() => props.onChange(!props.toggleState)}
              fill={!props.toggleState ? "white" : "white"}
              style={{
                position: "absolute",
                zIndex: 1,
                right: 5,
                marginTop: 6,
                width: 20,
                height: 20
              }}
            />
          </BoxedToggleLabel>
        </BoxedToggleWrapper>
      );
    default:
      return <div />;
  }
}
export { BoxedToggle };

const BoxedToggleWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;

const BoxedToggleLabel = styled.label`
  position: relative;
  width: 64px;
  height: 32px;
  cursor: pointer;
  height: 32px;

  box-shadow: 0 0 0 1px
    ${props => (props.toggleState ? props.backgroundOn : props.border)};
  border-radius: 3px;
  background: ${props =>
    props.toggleState ? props.backgroundOn : props.backgroundOff};
  transition: 0.2s;
  &:hover {
    cursor: pointer;
  }

  &::after {
    content: "";
    display: block;
    width: 33px;
    height: 34px;
    border-radius: 3px;
    border: 1px solid
      ${props => (props.toggleState ? props.backgroundOn : props.border)};
    background: white;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.11);
    -webkit-transition: 0.2s;
    transition: 0.2s;
    position: absolute;
    &:hover {
      cursor: pointer;
    }

    ${props =>
      !props.toggleState
        ? `left: -1px; top: -1px;`
        : `right: -1px; top: -1px;`};
  }
`;

const BoxedToggleInput = styled.input`
  opacity: 0;
  z-index: 1;
  width: 64px;
  height: 32px;
  transition: 0.2s;
  &:hover {
    cursor: pointer;
  }

  &:checked {
    transition: 0.2s;
    &::after {
      content: "";
      display: block;
      width: 32px;
      height: 32px;
      margin-left: 34px;
      left: 0px;
      transition: 0.2s;
    }
  }
`;
