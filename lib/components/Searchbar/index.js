import React from "react";
import { Icon } from "../../elements/Icon";
import { SearchContainer, StyledForm } from "./styles";
import PropTypes, { node } from "prop-types";

function Searchbar({ innerRef, center, name, placeholder, ...props }) {
  const checkEnter = (e) => {
    if (e.which === 13) {
      e.preventDefault();
    }
  };
  return (
    <StyledForm
      onSubmit={props.onChange}
      center={center}
      onKeyPress={checkEnter}
      {...props}
    >
      <SearchContainer {...props}>
        <Icon
          type="search"
          style={{ position: "absolute", left: 0, top: 14 }}
        />
        <input
          {...props}
          onFocus={props.onFocus}
          ref={innerRef}
          name={name}
          onChange={props.onChange}
          placeholder={placeholder}
        />
      </SearchContainer>
    </StyledForm>
  );
}

export { Searchbar };

Searchbar.propTypes = {
  width: PropTypes.string,
  center: PropTypes.bool,
  innerRef: PropTypes.oneOfType([
    /**
     *  Either a function
     */
    PropTypes.func,
    /**
     * Or the instance of a DOM native element (see the note about SSR)
     */
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
  name: PropTypes.string,
  placeholder: PropTypes.string,
  /**
   * Allows for custom font sizing
   */
  fontSize: PropTypes.number,
};

Searchbar.defaultProps = {
  width: "420px",
  center: false,
};
