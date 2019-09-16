import React from "react";
import styled from "styled-components";
import { Icon } from "../elements/Icon";
import { boxShadow, colors } from "../utils/_variables";
import { hover, transition } from "../utils/_animations";

const CardStyle = styled.section`
  border-radius: 3px;
  ${boxShadow}
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${props => (props.columns ? `${100 / props.columns}%` : "33.333%")};
  height: ${props => (props.height ? props.height : "300px")};
  ${transition}
  &:hover {
    ${hover};
    cursor: pointer;
  }
  position: relative;
  max-width: 400px;
  margin: 20px;

  &::before {
    content: "";
    display: block;
    border: ${props =>
      props.selectedCard
        ? `2px solid ${colors.blue}`
        : "2px solid transparent"};
    height: 100%;
    width: 100%;
    position: absolute;
    border-radius: 3px;
  }

  ${props => (props.style ? props.style : null)};
`;

const CardImage = styled.img`
  width: 100%;
  object-fit: cover;
  height: 75%;
  border-radius: 3px 3px 0px 0px;
`;
const CardContent = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0px 0px 3px 3px;
`;

const SelectedIcon = styled.div`
  position: absolute;
  top: 0;
  transform: translateY(-10px);
  text-align: center;
  margin: 0 auto;
`;

const Card = props => {
  return (
    <CardStyle {...props} onClick={props.onClick}>
      {props.selectedCard && (
        <SelectedIcon>
          <Icon
            fill="white"
            circleIcon
            type="checkmark"
            backgroundColor="green"
            style={{ height: "20px", width: "20px" }}
          />
        </SelectedIcon>
      )}
      <CardImage src={props.image}></CardImage>
      <CardContent>{props.children}</CardContent>
    </CardStyle>
  );
};

export { Card };
