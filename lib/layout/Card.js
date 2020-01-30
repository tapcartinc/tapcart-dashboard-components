import React from "react";
import styled from "styled-components";
import { Icon } from "../elements/Icon";
import { boxShadow, colors } from "../utils/_variables";
import { hover, transition } from "../utils/_animations";
import PropTypes, { node } from "prop-types";
import { colorPicker } from "../utils/_dashVariables";

const CardWrapper = styled.div`
  box-shadow: ${boxShadow.medium};
  position: relative;
  margin: 20px;
  height: 300px;
  width: 350px;
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

  &:hover {
    box-shadow: 0 0 0 2px ${colorPicker.green100};
    cursor: pointer;
  }
  position: relative;

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
  padding: 14px;
  border-radius: 0px 0px 3px 3px;
`;

const SelectedIcon = styled.div`
  position: absolute;
  top: 0;
  transform: translateY(-10px);
  text-align: center;
  margin: 0 auto;
`;

// const Card = props => {
//   return (
//     <CardStyle {...props} onClick={props.onClick}>
//       {props.currentCard && (
//         <SelectedIcon>
//           <Icon
//             fill="white"
//             circleIcon
//             type="checkmark"
//             backgroundColor="green"
//             style={{ height: "20px", width: "20px" }}
//           />
//         </SelectedIcon>
//       )}
//       <CardImage src={props.image}></CardImage>
//       <CardContent>{props.children}</CardContent>
//     </CardStyle>
//   );
// };

const Card = props => {
  return (
    <CardWrapper {...props} onClick={props.onClick}>
      <CardStyle {...props}>
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
