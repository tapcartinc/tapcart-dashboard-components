import styled from "styled-components";
import { sofiaPro, colorPicker } from "../../utils/_dashVariables";

const StyledFieldSegmentedControl = styled.div`
  height: 38px;
  border-radius: 3px;
  background: ${(props) => (props.bgColor ? props.bgColor : "transparent")};
  width: 100%;
  overflow: hidden;
  text-align: center;
  margin: auto;
  border: 1px solid ${colorPicker.blue};
  text-transform: uppercase;
  ${sofiaPro.regular}
`;

const StyledFieldSegmentedControlTabs = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-items: space-between;
`;

const StyledFieldTab = styled.label`
  flex: 1;
  height: 38px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  font-size: 14px;
  letter-spacing: 1px;
  ${(props) =>
    !props.firstIndex && `border-left: 1px solid ${colorPicker.blue}`};
  ${sofiaPro.regular}

  ${(props) =>
    props.current === props.htmlFor
      ? `
    background: ${colorPicker.blue};
    color: #ffffff;
  `
      : `color: ${colorPicker.blue}`};

  input {
    visibility: hidden;
    width: 100%;
    height: 100%;
    border: 1px solid ${colorPicker.black};
    margin: 0;
    position: absolute;
  }
`;

const StyledSegmentedControlTabs = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-items: space-between;
  box-shadow: inset 0 0 0 1px ${colorPicker.grayBlue};

  // display: "flex",
  // width: props.width ? props.width : "100%",
  // borderRadius: "3px",
  // minHeight: 42,
  ${sofiaPro.regular}
`;

const StyledSegmentedControlStyle = styled.div`
  margin: auto;
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-items: space-between;
  width: 100%;
  ${(props) => props.width && `width: ${props.width}`};
  ${(props) => (props.style ? props.style : null)}
`;
const StyledSecondaryControlStyle = styled.div`
  margin: 0px;
  max-width: 450px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  min-height: 42px;
  ${(props) => (props.style ? props.style : null)}
`;

const StyledTab = styled.label`
  color: ${colorPicker.black};
  font-size: 15px;
  flex: 1;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  padding: 15px 0px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  ${sofiaPro.regular}

  ${(props) => {
    return (
      props.current === props.htmlFor &&
      `background: ${colorPicker.blue};
    color: #ffffff;
    border-radius: 3px;
    box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.3);`
    );
  }};

  &:hover {
    cursor: pointer;
  }

  input {
    visibility: hidden;
    width: 100%;
    height: 100%;
    border: 1px solid ${colorPicker.black};
    margin: 0;
    position: absolute;
  }
`;

const StyledSecondaryTab = styled.label`
  flex: 1;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  padding: 10px;
  letter-spacing: 0.5px;
  color: ${colorPicker.grayBlue};
  font-size: 14px;
  width: 100%;
  transition: ease-out 0.2s;
  border: 1px solid transparent;
  ${(props) =>
    props.current === props.htmlFor &&
    `background: #ffffff;
    color: ${colorPicker.blue};
    border-radius: 3px;
    box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.2);
    opacity: 1;
    border: 1px solid ${colorPicker.blue};
    `}
  &:hover {
    cursor: pointer;
  }

  input {
    visibility: hidden;
    width: 100%;
    height: 100%;
    border: 1px solid ${colorPicker.black};
    margin: 0;
    position: absolute;
  }

  ${sofiaPro.regular}
`;

export {
  StyledSecondaryTab,
  StyledTab,
  StyledFieldSegmentedControl,
  StyledFieldSegmentedControlTabs,
  StyledFieldTab,
  StyledSegmentedControlTabs,
  StyledSegmentedControlStyle,
  StyledSecondaryControlStyle,
};
