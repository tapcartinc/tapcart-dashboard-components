import styled from "styled-components";
import media from "../../utils/_media";
import PropTypes, { node } from "prop-types";
import React from "react";

const StyledBlobWrapper = styled.img`
  position: absolute;
  z-index: 0;
  transition: 400ms ease-in;
  max-width: ${props => (props.maxWidth ? `${props.maxWidth}px` : "100%")};
  max-height: 80%;
  top: ${props => props.top && 0};
  bottom: ${props => props.bottom && 0};
  left: ${props => props.left && 0};
  right: ${props => props.right && 0};
  ${props => props.mobileOnly && `display: none`};

  ${media.sm`
  ${props => props.mobileOnly && `display: block`};
  ${props => props.desktopOnly && `display: none`};
  `}
`;

/**
 * Place all of the `StyledBlob`s of each section underneath the `Section` components for propper placement and consistentsy
 * This applies to both `StyledBlobs`s being rendered on desktop and mobile screens
 *
 * ```
 * const example = () => (
    <ThemeProvider>
      <Section>
        <StyledBlob top left desktopOnly maxWidth={250} />
         <Container>
            ...

          </Container>
      </Section>
    </ThemeProvider>
  )
 * ```
 */

const StyledBlob = props => {
  return <StyledBlobWrapper {...props} />;
};

export { StyledBlob };

StyledBlob.propTypes = {
  top: PropTypes.bool,
  bottom: PropTypes.bool,
  left: PropTypes.bool,
  right: PropTypes.bool,
  src: PropTypes.string.isRequired,
  maxWidth: PropTypes.number,
  alt: PropTypes.string.isRequired,
  desktopOnly: PropTypes.bool,
  mobileOnly: PropTypes.bool
};

StyledBlob.defaultProps = {
  top: false,
  bottom: false,
  left: false,
  right: false,
  maxWidth: null,
  desktopOnly: false,
  mobileOnly: false
};
