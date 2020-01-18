import React, { Component } from "react";
import AccordionSection from "./AccordionSection";
import PropTypes, { node } from "prop-types";

class Accordion extends Component {
  constructor(props) {
    super(props);
    const openSections = {};
    this.state = { openSections };
  }

  onClick = label => {
    const {
      state: { openSections }
    } = this;

    const isOpen = !!openSections[label];

    this.setState({
      openSections: {
        [label]: !isOpen
      }
    });
  };

  render() {
    const {
      onClick,
      props: {
        children,
        toggleIcons,
        boxShadow,
        circleIcons,
        className,
        style,
        steps
      },
      state: { openSections }
    } = this;

    return (
      <div>
        {children.map((child, index) => (
          <AccordionSection
            key={child.props.label}
            isOpen={!!openSections[child.props.label]}
            label={child.props.label}
            index={index}
            circleIcons={circleIcons}
            onClick={onClick}
            toggleIcons={toggleIcons}
            boxShadow={boxShadow}
            className={className}
            style={style}
            steps={steps}
          >
            {child.props.children}
          </AccordionSection>
        ))}
      </div>
    );
  }
}

export default Accordion;

const accordionIconOptions = "plus/minus";

Accordion.propTypes = {
  boxShadow: PropTypes.bool,
  toggleIcons: PropTypes.oneOfType(accordionIconOptions),
  children: node.isRequired
};

Accordion.defaultProps = {
  boxShadow: false
};
