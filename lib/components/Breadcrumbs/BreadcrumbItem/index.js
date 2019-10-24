import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../../elements/Icon';
import { colors, sofia } from '../../../utils/_variables';
import PropTypes from 'prop-types';

const BreadcrumbsItem = ({ crumb, icon, onClick, active, index }) => {
  return (
    <>
      {index !== 0 ? (
        <Icon
          type="arrow-right"
          iconLeft
          iconRight
          fill={active ? colors.blue : colors.grayText}
        />
      ) : null}
      <BreadcrumbsItemStyle onClick={onClick} active={active}>
        {icon ? (
          <Icon
            type={icon}
            style={{ height: 20 }}
            iconLeft
            fill={colors.grayText}
          />
        ) : null}
        <span>{crumb}</span>
      </BreadcrumbsItemStyle>
    </>
  );
};

const BreadcrumbsItemStyle = styled.li`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-right: 10px;
  padding-top: 20px;
  padding-bottom: 20px;
  ${props => (props.active ? sofia.sofiaMedium : sofia.sofiaLight)};
  text-transform: uppercase;
  ${props => props.active && `transform: translateY(-2px)`};
  line-height: 1.6;
  letter-spacing: 1px;
  font-size: 15px;
  margin-right: 0px;
  margin-left: 10px;
  line-height: 34px;
  color: ${props => (props.active ? colors.blue : colors.grayText)};
  span {
    margin-left: -5px;
  }
  ${props =>
    !props.active &&
    `  &:hover {
  color: ${colors.gray75};
  transition: all 0.2s ease;
  cursor: pointer;
}`}

  ${props => (props.style ? props.style : null)};
`;

export { BreadcrumbsItem };
