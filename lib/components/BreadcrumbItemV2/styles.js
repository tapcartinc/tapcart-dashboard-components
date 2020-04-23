import styled from "styled-components";
import { colorPicker } from "../../utils/_dashVariables";

const StyledBreadcrumb = styled.li.attrs((props) => ({
  className: props.className,
}))`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-right: 10px;
  padding-top: 10px;
  padding-bottom: 7px;
  font-family: SofiaPro, -apple-system, BlinkMacSystemFont, Helvetica, Arial,
    sans-serif;
  font-weight: 400;
  text-transform: uppercase;
  line-height: 1.6;
  letter-spacing: 1px;
  font-size: 14px;
  margin-right: 0px;
  margin-left: 0px;
  line-height: 34px;
  color: ${(props) => (props.active ? colorPicker.blue : colorPicker.gray)};
  a {
    color: ${(props) => (props.active ? colorPicker.blue : colorPicker.gray)};
    text-decoration: none;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  span {
    margin-left: -5px;
    height: 100%;
  }
  transition: all 0.2s ease-in-out;
  ${(props) =>
    !props.active &&
    `  &:hover {
transform: translateY(-2px);
transition: all 0.2s ease-in-out;
cursor: pointer;
}`}
  ${(props) => (props.style ? props.style : null)};
`;

export { StyledBreadcrumb };
