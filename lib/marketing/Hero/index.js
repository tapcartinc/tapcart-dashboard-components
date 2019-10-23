import styled from 'styled-components';

const Hero = styled.section`
  width: 100%;
  display: flex;
  flex-direction: ${props => (props.layout ? props.layout.direction : 'row')};
  justify-content: ${props => {
    return props.layout ? props.layout.justify : 'flex-start';
  }};
  justify-items: ${props => {
    return props.layout ? props.layout.justify : 'flex-start';
  }};
  text-align: ${props => (props.layout ? props.layout.textAlign : 'left')};
  min-height: 800px;
  align-items: center;
  background: ${props =>
    props.bgColor ? props.bgColor : props.theme ? props.theme.bg : 'white'};
  margin: 0px;
  position: relative;
`;

export { Hero };
