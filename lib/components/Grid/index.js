import React from 'react';
import PropTypes from 'prop-types';

import { StyledGridWrapper, StyledGridItem } from './styles';

function Grid(props) {
	// separate out props required for children
	const childPropKeys = ['childStyle', 'margin', 'wrap', 'wrapCount'];
	// define any necessary key transformations before adding to children
	const childPropKeyTransforms = { childStyle: 'style' };
	// create child prop object
	const childProps = {};
	for (const key of Object.keys(props)) {
		// check if key is a child prop, and also check if it should be transformed
		if (childPropKeys.includes(key)) childProps[childPropKeyTransforms[key] || key] = props[key];
	}
	return (
		<StyledGridWrapper {...props}>
			{props.children.map((child) => (
				<StyledGridItem {...childProps}>{child}</StyledGridItem>
			))}
		</StyledGridWrapper>
	);
}
export { Grid };

Grid.propTypes = {
	align: PropTypes.string, // justify-content and align-items respectively
	margin: PropTypes.number, // margin for children
	type: PropTypes.string, // row or column
	wrap: PropTypes.bool, // whether or not to wrap children
	wrapCount: PropTypes.number // the number of children to show inline before wrapping
};

Grid.defaultProps = {
	align: 'flex-start flex-start',
	margin: 10,
	type: 'row',
	wrap: false,
	wrapCount: 3
};
