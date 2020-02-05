// import React, { useState } from "react";
// import PropTypes from "prop-types";
// import styled from "styled-components";
// import { colors } from "../utils/_variables";
// import { Body } from "../elements/Typography";
// import { circularStd, sofiaPro, colorPicker } from "../utils/_dashVariables";

// const Input = ({ innerRef, ...props }) => {
//   const { errors, label, value, name, placeholder, maxLength } = props;

//   const [bounce, setBounce] = useState(false);

//   const bounceFunc = () => {
//     if (value.length === maxLength) {
//       return setBounce(true);
//     }
//   };

//   const unbounceFunc = () => {
//     return setBounce(false);
//   };

//   const bounceStyle = {};
//   if (bounce) {
//     bounceStyle["top"] = "-3px";
//   }

//   return (
//     <StyledInputWrapper {...props}>
//       {label && (
//         <StyledLabel errors={errors && errors.length >= 0}>
//           {errors && errors.length >= 0 ? errors[0] : label}
//         </StyledLabel>
//       )}
//       <input
//         className="input-style"
//         ref={innerRef}
//         value={value}
//         name={name}
//         // onKeyPress={bounceFunc}
//         // onKeyUp={unbounceFunc}
//         onChange={props.onChange}
//         placeholder={placeholder}
//         errors={errors ? errors.length >= 0 : undefined}
//         {...props}
//       />
//       {maxLength && (
//         <StyledCharCount
//           charCountHit={props.value.length === props.maxLength}
//           bounce={bounce}
//         >
//           <span style={{ marginTop: bounce ? "-3px !important" : "0px" }}>
//             {props.value ? props.value.length : 0}
//           </span>
//           /{props.maxLength}
//         </StyledCharCount>
//       )}
//     </StyledInputWrapper>
//   );
// };

// export { Input };

// Input.propTypes = {
//   value: PropTypes.string.isRequired,
//   name: PropTypes.string,
//   placeholder: PropTypes.string,
//   onChange: PropTypes.func,
//   label: PropTypes.string
// };

// Input.defaultProps = {
//   name: ""
// };

// const StyledInputWrapper = styled.div`
//   position: relative;
//   width: 100%;

//   .input-style {
//     border-radius: 3px;
//     ${props =>
//       props.errors
//         ? `border: 1px solid ${colors.red} !important`
//         : `border: 1px solid ${colorPicker.grayBlue} !important`};

//     background-color: ${colorPicker.offwhite} !important;
//     padding: 10px 20px;
//     letter-spacing: 0.25px;
//     color: #000000 !important;
//     width: 100%;
//     font-family: SofiaPro, -apple-system, BlinkMacSystemFont, Helvetica, Arial,
//       sans-serif !important;
//     font-weight: 400;

//     &::placeholder {
//       font-family: SofiaPro, -apple-system, BlinkMacSystemFont, Helvetica, Arial,
//         sans-serif !important;
//       font-weight: 400;
//       color: ${colors.blue25} !important;
//     }

//     &:focus {
//       outline: none;
//     }

//     font-size: 14px !important;
//     font-weight: 400;
//     transition: border 200ms ease;

//     ${props => (props.style ? props.style : null)};
//   }
// `;

// const StyledCharCount = styled.div`
//   position: absolute;
//   text-align: right;
//   right: 16px;
//   bottom: 14px;
//   color: ${colors.grayText};
//   ${sofiaPro.regular}
//   ${props => props.charCountHit && `color: ${colors.red};`}
//   font-size: 13px;
//   transition: top 0.1s ease 0s;
//   span {
//     transition: top 0.1s ease 0s;
//     position: absolute;
//     right: 23px;
//     ${props => (props.bounce ? `top: -3px` : `top: 0px`)};
//   }
// `;

// const StyledLabel = styled(Body)`
//   margin-bottom: 7px;
//   font-weight: 400;
//   font-style: normal;
//   font-display: swap;
//   font-size: 14px;
//   line-height: 1.5;
//   letter-spacing: normal;
//   tex-transform: capitalize;

//   color: ${props => (props.errors ? colors.red : `#000000`)};
// `;

import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { colors } from "../utils/_variables";
import { Body } from "../elements/Typography";
import { circularStd, sofiaPro, colorPicker } from "../utils/_dashVariables";

const Input = ({ innerRef, ...props }) => {
  const { errors, label, value, name, placeholder, maxLength } = props;

  const [bounce, setBounce] = useState(false);

  const bounceFunc = () => {
    if (value.length === maxLength) {
      return setBounce(true);
    }
  };

  const unbounceFunc = () => {
    return setBounce(false);
  };

  const bounceStyle = {};
  if (bounce) {
    bounceStyle["top"] = "-3px";
  }

  return (
    <StyledInputWrapper>
      {label && (
        <StyledLabel errors={errors && errors.length >= 0}>
          {errors && errors.length >= 0 ? errors[0] : label}
        </StyledLabel>
      )}
      <input
        className="input-style"
        ref={innerRef}
        value={value}
        name={name}
        onKeyPress={bounceFunc}
        onKeyUp={unbounceFunc}
        onChange={props.onChange}
        placeholder={placeholder}
        errors={errors ? errors.length >= 0 : undefined}
        {...props}
      />
      {maxLength && (
        <StyledCharCount
          charCountHit={props.value.length === props.maxLength}
          bounce={bounce}
        >
          <span style={{ marginTop: bounce ? "-3px !important" : "0px" }}>
            {props.value ? props.value.length : 0}
          </span>
          /{props.maxLength}
        </StyledCharCount>
      )}
    </StyledInputWrapper>
  );
};

export { Input };

Input.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string
};

Input.defaultProps = {
  name: ""
};

const StyledInputWrapper = styled.div`
  position: relative;
  width: 100%;
  .input-style {
    border-radius: 3px;
    ${props =>
      props.errors
        ? `border: 1px solid ${colors.red}`
        : `border: 1px solid ${colorPicker.grayBlue}`};
    background: ${colors.offwhite};
    padding: 10px 20px;
    letter-spacing: 0.25px;
    color: #000000;
    width: 100%;
    font-family: SofiaPro, -apple-system, BlinkMacSystemFont, Helvetica, Arial,
      sans-serif;
    font-weight: 400;
    &::placeholder {
      font-family: SofiaPro, -apple-system, BlinkMacSystemFont, Helvetica, Arial,
        sans-serif;
      font-weight: 400;
      color: ${colors.blue25};
    }
    &:focus {
      outline: none;
    }
    font-size: 14px;
    font-weight: 400;
    transition: border 200ms ease;
    ${props => (props.style ? props.style : null)};
  }
`;

const StyledCharCount = styled.div`
  position: absolute;
  text-align: right;
  right: 16px;
  bottom: 16px;
  color: ${colors.grayText};
  ${props => props.charCountHit && `color: ${colors.red};`}
  font-size: 14px;
  transition: top 0.1s ease 0s;
  span {
    transition: top 0.1s ease 0s;
    position: absolute;
    right: 20px;
    ${props => (props.bounce ? `top: -3px` : `top: 0px`)};
  }
`;

const StyledLabel = styled(Body)`
  margin-bottom: 7px;
  font-weight: 400;
  font-style: normal;
  font-display: swap;
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: normal;
  color: ${props => (props.errors ? colors.red : `#000000`)};
`;
