import React, { useState, useEffect, useRef } from "react";
import AccordionSection from "./AccordionSection";
import PropTypes, { node } from "prop-types";

const Accordion = props => {
  const [state, setState] = useState({
    openSections: {},
    errors: null
  });

  const currentErrors = useRef();

  useEffect(() => {
    currentErrors.current = props.errors ? props.errors : null;

    if (
      state.errors &&
      props.errors &&
      Object.keys(state.errors).length !== Object.keys(props.errors).length
    ) {
      return setState(prevState => ({
        ...prevState,
        errors: props.errors
      }));
    }

    if (!previousErrors && props.errors) {
      setState(prevState => ({
        ...prevState,
        errors: props.errors
      }));
    }

    if (previousErrors && !props.errors && state.errors) {
      setState(prevState => ({
        ...prevState,
        errors: null
      }));
    }
  }, [props.errors]);

  const previousErrors = currentErrors.current;

  const onClick = label => {
    const { openSections } = state;

    const isOpen = !!openSections[label];

    setState(prevState => ({
      ...prevState,
      openSections: {
        [label]: !isOpen
      }
    }));
  };

  const {
    children,
    toggleIcons,
    boxShadow,
    className,
    style,
    steps,
    type,
    header,
    numerical,
    stateValues,
    content
  } = props;
  const { openSections } = state;

  return (
    <div style={{ marginTop: 60 }}>
      {children.map((child, index) => {
        let newErrors = {};

        content &&
          state.errors &&
          content[index].requiredValues.map(requiredValue => {
            if (
              state.errors &&
              requiredValue &&
              state.errors.hasOwnProperty(Object.keys(requiredValue))
            ) {
              newErrors[Object.keys(requiredValue)] =
                state.errors[Object.keys(requiredValue)];
            }
          });

        return (
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
            requiredContent={content ? content[index].requiredValues : null}
            errors={newErrors}
            stateValues={stateValues}
          >
            {child.props.children}
          </AccordionSection>
        );
      })}
    </div>
  );
};

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
