import { css } from "styled-components";
const sizes = {
  lg: 1200,
  mdlg: 1090,
  md: 900,
  sm: 700,
  xsm: 400
};
export default Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});
