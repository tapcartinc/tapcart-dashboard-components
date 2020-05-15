import styled from "styled-components";
import { sofiaPro, boxShadow } from "../../utils/_dashVariables";
import { swatches } from "../../utils/_swatches";

const DDWrapper = styled.div`
  position: relative;
  z-index: 100;

  ${(props) =>
    props.position === "right" &&
    `
  position: absolute;
  right: 10px`};
  ${(props) =>
    props.position === "left" &&
    `
  position: absolute;
  left: 10px`};
  z-index: 100;

  ${(props) => (props.style ? props.style : null)};
`;

const ClickableDropdown = styled.ul`
  margin: 0px;
  border-radius: 3px;
  list-style: none;
  box-shadow: ${boxShadow.medium};
  position: absolute;
  padding: 0px;
  z-index: 1;
  background: white;
  width: 218px;
  ${(props) => props.position === "right" && `right: 0;`}
  ${(props) => props.position === "left" && `left: 0;`}
  ${(props) => (props.style ? props.style : null)};
  ${sofiaPro.regular}
`;
const ClickableDropdownItem = styled.li`
  font-size: 15px;
  background: white;
  border-bottom: 1px solid ${swatches.textEmpty};
  ${(props) => props.lastItem && `border-bottom: none;`}
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: nowrap;
  padding: 10px 17px;

  &:hover {
    cursor: pointer;
    background: ${swatches.lightBlue};
  }
  ${sofiaPro.medium}
  ${(props) => (props.style ? props.style : null)};
`;
const DropdownHeader = styled.div`
  width: 37px;
  height: 100%;
  z-index: 100;
  &:hover {
    cursor: pointer;
  }

  ${(props) => (props.style ? props.style : null)};
`;

export { DDWrapper, ClickableDropdown, ClickableDropdownItem, DropdownHeader };
