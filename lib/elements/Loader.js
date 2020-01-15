import React from "react";
import styled from "styled-components";
import { colors } from "../utils/_variables";

const Loader = props => {
  return <LoaderWrapper {...props} />;
};

export { Loader };

const LoaderWrapper = styled.span`
  text-indent: -9999em;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${props => (props.loaderBg ? props.loaderBg : colors.grayText)};
  position: absolute;
  -webkit-animation: load3 1s infinite linear;
  animation: load3 1s infinite linear;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);

  &:before {
    width: 50%;
    height: 50%;
    background: ${props => (props.color ? props.color : colors.blue)};
    border-radius: 100% 0 0 0;
    position: absolute;
    top: 0;
    left: 0;
    content: "";
  }

  &:after {
    width: 78%;
    height: 78%;
    border-radius: 50%;
    content: "";
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: ${props => (props.innerColor ? props.innerColor : "white")};
  }

  @-webkit-keyframes load3 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes load3 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;
