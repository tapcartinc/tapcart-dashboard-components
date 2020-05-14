import styled from "styled-components";

const StyledLoaderWrapper = styled.div`
  text-indent: -9999em;
  ${(props) =>
    props.size
      ? `height: ${props.size}px; width: ${props.size}px;`
      : `height: 25px; width: 25px`};
  border-radius: 50%;
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
    ${(props) => {
      let diameter = 18;
      if (props.size) {
        diameter = Math.trunc(props.size / 1.3);
      }
      return `height: ${diameter}px; width: ${diameter}px;`;
    }}
    border-radius: 100px;
    content: "";
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: ${(props) => props.loaderColors.bg};
    ${(props) => props.parentBgColor && `background: ${props.parentBgColor}`};
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

export { StyledLoaderWrapper };
