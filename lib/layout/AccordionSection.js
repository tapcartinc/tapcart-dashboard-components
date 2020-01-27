import React, { Component } from "react";
import { Icon } from "../elements/Icon";
import styled from "styled-components";
import { colors, sofia } from "../utils/_variables";
import { transition } from "../utils/_animations";
import media from "../utils/_media";
//import './Accordion.css';

class AccordionSection extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onClick = () => {
    this.props.onClick(this.props.label);
  };

  render() {
    const {
      onClick,
      props: {
        isOpen,
        label,
        boxShadow,
        toggleIcons,
        steps,
        index,
        circleIcons,
        className,
        style
      }
    } = this;

    function stepComplete(index) {
      if (steps) {
        for (let key in steps[index]) {
          if (!steps[index][key]) {
            return false;
          }
        }
        return true;
      }
    }
    return (
      <AccordionStyledItem boxShadow={boxShadow} style={style}>
        <AccordionLabel onClick={onClick} isOpen={isOpen} className={className}>
          <StyledAccordionLabel
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center"
            }}
          >
            {steps && (
              <div
                style={{
                  marginRight: 10,
                  background: stepComplete(index) ? colors.green : colors.blue,
                  borderRadius: "50%",
                  transitionProperty: "all",
                  transitionDuration: ".2s",
                  height: 32,
                  width: 32,
                  fontSize: 20,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "row",
                  color: "white",
                  paddingRight: "1px",
                  paddingBottom: "1px"
                }}
              >
                {steps && stepComplete(index) ? (
                  <Icon type="checkmark" fill="white" />
                ) : (
                  index + 1
                )}
              </div>
            )}

            {circleIcons && circleIcons.length && (
              <div>{circleIcons[index]}</div>
            )}
            {label}
          </StyledAccordionLabel>
          <div style={{ float: "right" }}>
            {!isOpen && (
              <span>
                <Icon
                  type={
                    this.props.toggleIcons === "plus/minus"
                      ? "small-add"
                      : "arrow-down"
                  }
                ></Icon>
              </span>
            )}
            {isOpen && (
              <span>
                <Icon
                  type={toggleIcons === "plus/minus" ? "subtract" : "arrow-up"}
                ></Icon>
              </span>
            )}
          </div>
        </AccordionLabel>
        <AccordionWrapper isOpen={isOpen}>
          <AccordionChildren className={className} isOpen={isOpen}>
            {this.props.children}
          </AccordionChildren>
        </AccordionWrapper>
      </AccordionStyledItem>
    );
  }
}
export default AccordionSection;

const AccordionWrapper = styled.div`
  ${props =>
    props.isOpen
      ? `
  max-height: 100rem;
  transition-timing-function: cubic-bezier(0.895, 0.03, 0.685, 0.22);
  transition-duration: 0.5s;
  transition-property: max-height;
  `
      : `
  max-height: 0;
  overflow: hidden;
  text-transform: cubic-bezier(0.95, 0.05, 0.795, 0.035);
  transition-duration: 0.5s;
  transition-property: max-height;
  z-index: 1;
  position: relative;`}
`;

const AccordionStyledItem = styled.div`
  padding: 0px 50px;
  border-radius: 3px;
  background: white;
  box-shadow: ${props =>
    props.boxShadow ? "0px 2px 40px 0px rgba(0,0,0,0.05)" : null};
  margin-bottom: 20px;

  ${media.xs`
  padding: 0px 20px;

  `}
  ${props => (props.style ? props.style : null)};
`;

const AccordionLabel = styled.div`
  cursor: pointer;
  transition: 0.5s;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  font-family: SofiaPro, -apple-system, BlinkMacSystemFont, Helvetica, Arial,
    sans-serif;
  font-stretch: normal;
  font-style: normal;
  font-weight: 400;
  height: 75px;
  font-size: ${props => !props.className && "26px"};

  color: ${props =>
    !props.className && (props.isOpen ? colors.blue : colors.black)};

  ${media.xs`
    line-height: 24px;
      font-size: 16px;

    `}
`;

const AccordionChildren = styled.div`
  padding-bottom: 25px;
  ${props =>
    props.isOpen
      ? `
      opacity: 1;
      transform: translateY(0);
      transition-delay: 0.2s;
      transition-timing-function: ease-in-out;
      transition-duration: 0.2s;
      transition-property: opacity, transform;

 `
      : `opacity: 0;
      transform: translateY(-1rem);
    transition-timing-function: ease-in-out;
    transition-duration: 0.2s;
    transition-property: opacity, transform;

 `}
`;

const StyledAccordionLabel = styled.div`
  ${media.xs`
      margin-right: 10px;
    `};
`;
