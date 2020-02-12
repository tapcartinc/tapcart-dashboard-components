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
        className,
        style,
        steps,
        type,
        header,
        numerical,
        stateValues
      },
      state: { openSections }
    } = this;

    return (
      <div style={{ marginTop: 60 }}>
        {children.map((child, index) => (
          <AccordionSection
            numerical={numerical}
            key={child.props.label}
            isOpen={!!openSections[child.props.label]}
            label={child.props.label}
            stepComplete={child.props.stepComplete}
            index={index}
            onClick={onClick}
            toggleIcons={toggleIcons}
            boxShadow={boxShadow}
            className={className}
            style={style}
            steps={steps}
            type={type}
            header={header}
            stateValues={stateValues}
          >
            {child.props.children}
          </AccordionSection>
        ))}
      </div>
    );
  }
}

export default Accordion;

Accordion.propTypes = {
  boxShadow: PropTypes.bool,
  /**
   * option: "plus/minus"
   */
  toggleIcons: PropTypes.string,
  children: node.isRequired
};

Accordion.defaultProps = {
  boxShadow: false
};
