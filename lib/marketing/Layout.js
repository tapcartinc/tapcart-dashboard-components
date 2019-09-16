import styled from "styled-components";

const Hero = styled.section`
  width: 100%;
  display: flex;
  flex-direction: ${props => (props.layout ? props.layout.direction : "row")};
  justify-content: ${props =>
    props.layout ? props.layout.justify : "flex-start"};
  text-align: ${props => (props.layout ? props.layout.text : "left")};
  min-height: 900px;
  align-items: center;
  background: ${props => (props.bgColor ? props.bgColor : props.theme.bg)};
`;

export { Hero };
