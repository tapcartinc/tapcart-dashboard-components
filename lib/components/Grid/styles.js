import styled from "styled-components";

const StyledGridWrapper = styled.section`
  display: flex;
  width: 100%;
  flex-direction: ${props => props.type};
  flex-wrap: ${props => props.wrap ? 'wrap' : 'nowrap'};
  align-items: ${props => props.align ? props.align.split(' ')[1] : 'flex-start'};
  justify-content: ${props => props.align ? props.align.split(' ')[0] : 'flex-start'};
`;

const StyledGridItem = styled.section`
  flex: ${props => props.wrap ? '0 0 auto' : 1};
  width: ${props => (props.wrap && props.wrapCount) ? calculateChildWidth(props.wrapCount, props.margin) : 'auto'};
  margin: ${props => props.wrap ? (props.margin || 10) : (props.margin || 0)}px;
`;


export {
  StyledGridWrapper,
  StyledGridItem,
};

function calculateChildWidth(n, m) {
  const num = (100 / n).toFixed(2);
  return `calc(${num}% - ${m * 2}px)`
}