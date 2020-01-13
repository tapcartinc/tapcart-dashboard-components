import styled from "styled-components";
import React from "react";
import { leftAlign, centered } from "../../utils/_layout";
import PropTypes, { node } from "prop-types";
import media from "../../utils/_media";

const SectionWrapper = styled.section`
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
  min-height: ${props => (props.minHeight ? `${props.minHeight}px` : "800px")};
  align-items: center;
  background: ${props =>
    props.bgColor ? props.bgColor : props.theme ? props.theme.bg : "white"};
  margin: 0px;
  position: relative;

  ${props => props.contentHeight && `min-height: 1px`};
  ${props => props.overflowHidden && `overflow: hidden`};
  ${props =>
    props.tombstone &&
    `padding-left: 20px;
    padding-right: 20px;
    h1 {margin-top: -150px;}
  `}

  ${props =>
    props.aboveFold &&
    `min-height: 500px;
    height: 70vh;
    margin-bottom: 30px;`}

  ${media.md`
    min-height: 800px;
  ${props => props.contentHeight && `min-height: 1px`};
  ${props => props.minHeightMd && `min-height: ${props.minHeightMd}px;`}
  ${props => props.aboveFold && `min-height: 500px;`}

  ${props =>
    props.tombstone &&
    `padding-left: 20px;
    padding-right: 20px;
    h1 {margin-top: -250px;}
  `}
  `}

  ${media.sm`
    ${props =>
      props.aboveFold &&
      `min-height: 550px;
    height: 550px;`}
    ${props => props.tombstone && `h1 {margin-top: -325px}`};
    ${props => props.contentHeight && `min-height: 1px`};
  `}

  ${media.xs`
  ${props => props.tombstone && `h1 {margin-top: -350px}`};
  `}
`;

/**
 * Use `Section` to contain sections of content in the marketing site.
 *
 * `Section` is a crucial component in the generic and consistent layout of the marketing pages. For the themeing and alignment of each element to work the `Section` component must wrap the content.
 */

export const Section = props => {
  return <SectionWrapper {...props} />;
};

Section.propTypes = {
  /**
   Aligns the content (specifically text) on the page.
  */
  // layout: PropTypes.shape({
  //   textAlign: PropTypes.string,
  //   direction: PropTypes.string,
  //   justify: PropTypes.string
  // }),
  layout: PropTypes.object,
  /**
   Useful for images / content that bleeds over of the section or off of the layout
  */
  overflowHidden: PropTypes.bool,
  /**
  Allows a custom height to be set to the particular segment of content
  */
  minHeight: PropTypes.number,
  /**
  Sets the minimum height to 1px allow the content to control the overall height of the section
  */
  contentHeight: PropTypes.bool,
  /**
   Creates overlay effect of content below the current section
  */
  tombstone: PropTypes.bool,
  aboveFold: PropTypes.bool,
  children: node.isRequired
};

Section.defaultProps = {
  layout: leftAlign,
  overflowHidden: false,
  minHeight: 800,
  contentHeight: false,
  tombstone: false,
  aboveFold: false
};
