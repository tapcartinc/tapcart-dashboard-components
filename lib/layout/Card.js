import React from "react";
import styled from "styled-components";
import { boxShadow } from "../utils/_variables";
import PropTypes, { node } from "prop-types";

const CardWrapper = styled.div`
  box-shadow: ${boxShadow.medium};
  position: relative;
  height: 300px;
  width: 100%;
  margin: 15px 0;
  ${props =>
    props.columns &&
    `
  width: ${100 / props.columns - 1.9}%
  `};

  ${props => props.customWidth && `width: ${customWidth}`};
  ${props => props.customHeight && `width: ${customHeight}`};
`;

const CardStyle = styled.div`
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  height: 100%;
  width: 100%;
  transition: 0.2s ease all;
  cursor: pointer;
  ${props => props.bgColor && `background: ${props.bgColor}`};
  ${props => (props.style ? props.style : null)};
`;

const CardImage = styled.img`
  width: 100%;
  object-fit: cover;
  object-position: top;
  height: 78%;
  border-radius: 3px 3px 0px 0px;
`;
const CardContent = styled.div`
  width: 100%;
  height: 22%;
  padding: 14px;
  border-radius: 0px 0px 3px 3px;
`;

const Card = props => {
  const { onClick, ...rest } = props;
  return (
    <CardWrapper {...rest} onClick={onClick}>
      <CardStyle {...rest}>
        <CardImage src={props.image}></CardImage>
        <CardContent>{props.children}</CardContent>
      </CardStyle>
    </CardWrapper>
  );
};

export { Card };

Card.propTypes = {
  /**
  The path to the image that fills the top / focus of the card
  */
  image: PropTypes.string,
  /**
  Function being called when the card is clicked on
  */
  onClick: PropTypes.func,
  /**
  Adding background color to the card; default renders transparently
  */
  bgColor: PropTypes.string,

  /**
  The content in the bottom portion of the card
  */
  children: PropTypes.node
};

Card.defaultProps = {};

//   /**
// The conditional to de
// */
// currentCard: PropTypes.bool,

// border: ${props =>
//   props.currentCard ? `2px solid ${colors.blue}` : "2px solid transparent"};
