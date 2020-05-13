import styled from "styled-components";
import React from "react";

const StyledLoaderWrapper = styled.div`
  text-indent: -9999em;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: red;
  background: ${(props) => props.loaderColors.bg};
  position: absolute;
  -webkit-animation: load3 0.85s infinite linear;
  animation: load3 0.85s infinite linear;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);

  &:before {
    width: 50%;
    height: 50%;
    background: #ffffff;
    border-radius: 100% 0px 0px 0px;
    background: ${(props) => props.loaderColors.fg};
    position: absolute;
    top: 0;
    left: 0;
    content: "";
  }

  &:after {
    width: 18px;
    height: 18px;
    border-radius: 100px;
    content: "";
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: ${(props) => props.loaderColors.bg};
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

const Loader = (props) => {
  return <StyledLoaderWrapper loaderColors={props.loaderColors} />;
};

export { Loader };

// TODO: add proptypes
// bg color for when on colored bgs

// {fg: and bg: }
