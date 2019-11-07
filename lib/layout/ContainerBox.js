import React from 'react';
import styled from 'styled-components';
import { boxShadow } from '../utils/_variables';
import { getColors } from '../utils/_functions';
import media from '../utils/_media';

const ContainerStyle = styled.section`
  border-radius: 3px;
  box-shadow: ${boxShadow.boxShadow};
  background: ${props => (props.bg ? getColors(props.bg) : 'white')};
  width: ${props => (props.columns ? `${100 / props.columns - 1.5}%` : '100%')};

  ${media.md`
    width: ${props => (props.tablet ? `${100 / props.tablet - 1.5}%` : '100%')};
  `};

  ${media.smxs`
    width: ${props => (props.mobile ? `${100 / props.mobile}%` : '100%')};
  `};
  ${props => (props.style ? props.style : null)}
`;

const ContainerBox = props => {
  return <ContainerStyle {...props}>{props.children}</ContainerStyle>;
};

export { ContainerBox };
