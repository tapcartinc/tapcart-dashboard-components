import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { colors } from "../utils/_variables";

const Dropdown = ({ options, title, ...props }) => {
  const hoverNode = useRef();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.addEventListener("mouseover", handleHover);

    return () => {
      document.removeEventListener("mouseover", handleHover);
    };
  }, []);

  const handleHover = e => {
    if (hoverNode.current && hoverNode.current.contains(e.target)) {
      return;
    }
  };

  return (
    <div
      {...props}
      onMouseEnter={() => setOpen(true)}
      ref={hoverNode}
      onMouseLeave={() => setOpen(false)}
    >
      {props.children}
      {open && options && (
        <ul open={open} {...props}>
          {options.map(option => {
            return (
              <li onClick={option.onClick} key={option.title}>
                <DDCircle />
                {option.title}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export { Dropdown };

const HoverDDItem = styled.li`
  &:hover {
    cursor: pointer;
  }

  display: flex;
  flex-direction: row;
  align-items: center;
`;

const DDCircle = styled.div`
  background: transparent;
  box-shadow: inset 0px 0px 0px 1px ${colors.blue};
  height: 10px;
  width: 10px;
  border-radius: 50px;
  margin-right: 15px;
  ${HoverDDItem}:hover & {
    background: ${colors.blue};
    box-shadow: none;
  }
`;
