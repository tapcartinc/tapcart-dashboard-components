import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { sofia, colors, boxShadow } from "../../utils/_variables";
import { colorPicker, sofiaPro } from "../../utils/_dashVariables";
import PropTypes, { node } from "prop-types";
import { Icon } from "../../elements/Icon";

const EditContainer = props => {
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
    <>
      <DropDownSection
        {...props}
        disabled={props.disabled}
        onMouseEnter={() => setOpen(true)}
        ref={hoverNode}
        onMouseLeave={() => setOpen(false)}
      >
        <DropdownHeader {...props} open={open} disabled={props.disabled}>
          {props.children}
        </DropdownHeader>

        <ClickableDropdown
          {...props}
          open={open}
          top={props.top}
          disabled={props.disabled}
        >
          <ul>
            {props.items.length &&
              props.items.map((item, idx) => {
                switch (item.type) {
                  case "button":
                    return (
                      <StyledListItem
                        lastIndex={idx === props.items.length - 1}
                        key={`${props.id}-${item.text}`}
                        onClick={item.typeOptions.handler}
                      >
                        <Icon
                          type={item.icon}
                          style={{ marginRight: 14 }}
                          iconRight
                        />
                        <span>{item.text}</span>
                      </StyledListItem>
                    );
                  case "slider":
                    return (
                      <StyledListItem
                        lastIndex={idx === props.items.length - 1}
                        key={`${item.typeOptions.type}-${props.id}`}
                      >
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            width: "100%",
                            alignItems: "center"
                          }}
                        >
                          <Icon
                            type={item.icon}
                            style={{ marginRight: 14 }}
                            iconRight
                          />
                          <span>
                            Show
                            <span className="range-value">
                              {item.typeOptions.value} Products
                            </span>
                          </span>
                        </div>
                        <input
                          style={{ width: "100%" }}
                          type={item.typeOptions.type}
                          name={item.typeOptions.name}
                          step={item.typeOptions.step}
                          min={item.typeOptions.min}
                          max={item.typeOptions.max}
                          value={item.typeOptions.value}
                          onChange={item.typeOptions.handler}
                        />
                      </StyledListItem>
                    );
                  case "segmented":
                    return (
                      <StyledListItem
                        lastIndex={idx === props.items.length - 1}
                        key={`${props.id}-${item.text}`}
                      >
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            width: "100%",
                            alignItems: "center"
                          }}
                        >
                          <Icon type={item.icon} iconLeft iconRight />
                          <span>{item.text}</span>
                        </div>
                        <div style={{ width: "80%" }}>
                          <SegmentedControl
                            items={item.typeOptions.items}
                            action={item.typeOptions.handler}
                            current={item.typeOptions.current}
                            rounded={item.typeOptions.rounded}
                            name={item.typeOptions.name}
                          />
                        </div>
                      </StyledListItem>
                    );
                  case "file":
                    return (
                      <StyledListItem
                        lastIndex={idx === props.items.length - 1}
                        onClick={e => item.typeOptions.handler(e)}
                        key={`${props.id}-${item.text}`}
                      >
                        <Icon type={item.icon} iconLeft iconRight />
                        <span>{item.text}</span>

                        <input
                          type="file"
                          onChange={e =>
                            item.typeOptions.onChangeHandler(
                              props.parent.dragDropId,
                              e.target.files
                            )
                          }
                          onClick={e => (e.target.value = null)}
                        />
                      </StyledListItem>
                    );

                  case "removeFile":
                    if (props.parent.image) {
                      return (
                        <StyledListItem
                          key={`${props.id}-${item.text}`}
                          lastIndex={idx === props.items.length - 1}
                          onClick={e =>
                            item.typeOptions.handler(props.parent.dragDropId, e)
                          }
                        >
                          <Icon type={item.icon} iconLeft iconRight />
                          <span>{item.text}</span>
                        </StyledListItem>
                      );
                    }
                  default:
                    break;
                }
              })}
          </ul>
        </ClickableDropdown>
      </DropDownSection>
    </>
  );
};

export { EditContainer };

const DropDownSection = styled.div`
  ${props => props.disabled && `display: none;`};
  position: relative;
  display: inline-block;
  overflow: visible;
  width: auto;

  ${props => (props.style ? props.style : null)}
`;

const ClickableDropdown = styled.div`
  margin: 0px;
  list-style: none;
  width: 200px;
  ${sofia.sofiaMedium}
  padding: 0px;
  color: ${colors.blue};
  position: absolute;
  z-index: 1;
  visibility: hidden;
  top: ${props => (props.top ? props.top : "0")};
  right: 0;
  opacity: 0;
  transition: all 0.2s ease-in-out;
  ${props => props.open && `visibility: visible; opacity: 1; right: -200px;`}
  ${props => (props.style ? props.style : null)};

  ${props => props.disabled && `display: none`};

  ul {
    background: white;
    width: 195px;
    margin-left: 5px;
    border-radius: 3px;
    overflow: hidden;
    box-shadow: ${boxShadow.medium};
  }
`;

const StyledListItem = styled.li`
  padding: 12px 5px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${colorPicker.lightGray};
  font-size: 14px;
  color: ${colorPicker.black};
  ${sofiaPro.medium}
  &:hover {
    cursor: pointer;
  }

  ${props => props.lastIndex && `border-bottom: 0px`};
`;

const DropdownHeader = styled.div`
  position: relative;
  z-index: 5;

  &:hover {
    cursor: pointer;
    ${props => props.disabled && `cursor: default`};
  }

  ${props => (props.style ? props.style : null)};
`;

EditContainer.propTypes = {
  items: PropTypes.array.isRequired
};
EditContainer.defaultProps = {};
