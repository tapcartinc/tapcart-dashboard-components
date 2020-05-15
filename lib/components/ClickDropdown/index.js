import React, { useEffect, useState, useRef } from "react";
import { Icon } from "../../elements/Icon";
import { swatches } from "../../utils/_swatches";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";

import {
  DDWrapper,
  ClickableDropdown,
  ClickableDropdownItem,
  DropdownHeader,
} from "./styles";

const ClickDropdown = ({ position, style, children }) => {
  const node = useRef();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  const handleClick = (e) => {
    if (node.current && node.current.contains(e.target)) {
      return;
    }
    setOpen(false);
  };

  const handleOpen = (e) => {
    e.stopPropagation();
    return setOpen(!open);
  };

  const handleItemClick = (e, onClick) => {
    e.stopPropagation();

    return onClick();
  };

  return (
    <DDWrapper ref={node} position={position} style={style}>
      <div style={{ position: "relative" }}>
        <DropdownHeader onClick={(e) => handleOpen(e)}>
          <Icon
            type="dot-dot-dot"
            style={{
              transform: "rotate(90deg)",
              zIndex: 100,
              marginLeft: 14,
            }}
            fill={swatches.gray}
          />
        </DropdownHeader>
        {open && (
          <div style={{ position: "relative" }}>
            <ClickableDropdown position={position}>
              {children &&
                children.length > 0 &&
                children.map((option, index) => {
                  return (
                    <ClickableDropdownItem
                      onClick={(e) => handleItemClick(e, option.props.onClick)}
                      key={uuidv4()}
                      lastItem={index === children.length - 1}
                    >
                      {option.props.children}
                    </ClickableDropdownItem>
                  );
                })}
            </ClickableDropdown>
          </div>
        )}
      </div>
    </DDWrapper>
  );
};

export { ClickDropdown };

ClickDropdown.propTypes = {
  /**
   * options are right and left
   */
  position: PropTypes.string,

  children: PropTypes.node,
};
