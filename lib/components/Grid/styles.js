import styled from 'styled-components';

const StyledGridWrapper = styled.ul`
	align-items: ${(props) => (props.align ? props.align.split(' ')[1] : 'flex-start')};
	display: flex;
	flex-direction: ${(props) => props.type};
	flex-wrap: ${(props) => (props.wrap ? 'wrap' : 'nowrap')};
	justify-content: ${(props) => (props.align ? props.align.split(' ')[0] : 'flex-start')};
	list-style: none;
	margin: 0;
	padding: 0;
	width: 100%;
`;

const StyledGridItem = styled.li`
	flex: ${(props) => (props.wrap ? '0 0 auto' : 1)};
	margin: ${(props) => (props.wrap ? props.margin || 0 : props.margin || 0)}px;
	width: ${(props) =>
		props.wrap && props.wrapCount ? calculateChildWidth(props.wrapCount, props.margin || 0) : 'auto'};
`;

export { StyledGridItem, StyledGridWrapper };

function calculateChildWidth(n, m) {
	const num = (100 / n).toFixed(2);
	return `calc(${num}% - ${m * 2}px)`;
}
