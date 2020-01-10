import styled from "styled-components";
import PropTypes, { node } from "prop-types";
import media from "../../utils/_media";

const Hero = styled.section`
  width: 100%;
  display: flex;
  flex-direction: ${props => (props.layout ? props.layout.direction : "row")};
  justify-content: ${props => {
    return props.layout ? props.layout.justify : "flex-start";
  }};
  justify-items: ${props => {
    return props.layout ? props.layout.justify : "flex-start";
  }};
  text-align: ${props => (props.layout ? props.layout.textAlign : "left")};
  min-height: 800px;
  align-items: center;
  background: ${props =>
    props.bgColor ? props.bgColor : props.theme ? props.theme.bg : "white"};
  margin: 0px;
  position: relative;
`;

export { Hero };

// layout / centered, leftAlign
// overflowHidden / bool
// minHeight / number
// autoHeight
// tombstone / bool
// padding / number
// gradient bg? ( reference MobileCheckout component ) / bool
// above fold / bool

Hero.propTypes = {
  layout: PropTypes.string,
  overflowHidden: PropTypes.bool,
  minHeight: PropTypes.number,
  contentHeight: PropTypes.bool,
  tombstone: PropTypes.bool,
  aboveFold: PropTypes.bool,
  children: node.isRequired
};

Hero.defaultProps = {
  layout: "leftAlign",
  overflowHidden: false,
  minHeight: "800px",
  contentHeight: false,
  tombstone: false,
  aboveFold: false
};
