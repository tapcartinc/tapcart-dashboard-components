import React, { Component } from "react";
import styled from "styled-components";
import ReactModal from "react-modal";

import { Button } from "../elements/Button";
import { Icon } from "../elements/Icon";
import { colors, boxShadow } from "../utils/_variables";
import Carousel from "nuka-carousel";
import PropTypes, { node } from "prop-types";
import { colorPicker } from "../utils/_dashVariables";
import { Header, Description } from "../elements/Typography";

function ReactModalAdapter({ className, ...props }) {
  const contentClassName = `${className}__content`;
  const overlayClassName = `${className}__overlay`;
  let bodyOpenClassName = "ReactModal__Body--open";

  if (props.type === "generic") {
    bodyOpenClassName = "ReactModal__Body--open-full";
  }

  return (
    <ReactModal
      portalClassName={className}
      className={contentClassName}
      overlayClassName={overlayClassName}
      onRequestClose={props.closeModal}
      bodyOpenClassName={bodyOpenClassName}
      {...props}
    />
  );
}

class Modal extends Component {
  constructor(props) {
    super(props);
    ReactModal.setAppElement(this.props.rootElement || "#root");
  }

  render() {
    return (
      <StyledModal {...this.props}>
        <ModalType {...this.props}>{this.props.children}</ModalType>
      </StyledModal>
    );
  }
}

export { Modal };

function ModalType(props) {
  switch (props.type) {
    case "slider-modal":
      return <SliderModal {...props}>{props.children}</SliderModal>;
    case "custom":
      return <MinimalModalStyle {...props}>{props.children}</MinimalModalStyle>;
    case "generic":
      return <GenericModalStyle {...props}>{props.children}</GenericModalStyle>;
    case "dash":
      return (
        <DashModal {...props}>
          <div
            onClick={props.closeModal}
            style={{
              position: "absolute",
              right: 16,
              top: 13,
              cursor: "pointer"
            }}
          >
            <Icon fill={colors.grayText} type="small-close" />
          </div>
          <StyledDashContent>
            <div style={{ marginBottom: 25, marginTop: 40 }}>
              <Header>{props.title}</Header>
              <Description>{props.description}</Description>
            </div>
            <StyledDashModalContent>{props.children}</StyledDashModalContent>
            <Button isDisabled={props.saveDisabled} onClick={props.save}>
              {props.buttonText}
            </Button>
          </StyledDashContent>
        </DashModal>
      );
    case "full":
      return <FullscreenModal {...props}>{props.children}</FullscreenModal>;
    case "modal-with-graphic":
      return (
        <ModalWithGraphic {...props}>
          <div style={{ padding: 25 }}>
            <ModalHeader>
              <ModalHeaderLeft>
                <Icon circleIcon type={props.icon} />
                <Header style={{ marginLeft: 10 }}>{props.title}</Header>
              </ModalHeaderLeft>
            </ModalHeader>

            <div style={{ marginLeft: 5 }}>{props.children}</div>
            <br />
            <br />
            <ButtonsStyle>
              {props.buttons &&
                props.buttons.map((button, idx) => {
                  return (
                    <div
                      key={`${button.type}-${button.button}-${props.title}`}
                      style={idx !== 0 ? { marginLeft: 15 } : null}
                    >
                      <Button
                        key={button.button}
                        type={button.type}
                        onClick={button.onClick}
                        isLoading={button.isLoading}
                      >
                        {button.button}
                      </Button>
                    </div>
                  );
                })}
            </ButtonsStyle>
          </div>
          <ModalGraphic>
            <img
              src={props.graphic}
              style={{ width: "250px", height: "100%", objectFit: "cover" }}
            />
            <CloseIcon
              type="small-close"
              onClick={props.closeModal}
              style={{ margin: 20 }}
            />
          </ModalGraphic>
        </ModalWithGraphic>
      );
    case "alert":
      return (
        <MinimalModalStyle {...props}>
          <ModalHeader>
            <ModalHeaderLeft>
              <Icon circleIcon type={props.icon} />
              <Header style={{ marginLeft: 15 }}>{props.title}</Header>
            </ModalHeaderLeft>

            <CloseIcon
              fill={colors.grayText}
              type="small-close"
              onClick={props.closeModal}
            />
          </ModalHeader>

          <div style={{ marginLeft: 5 }}>{props.children}</div>

          <ButtonsStyle>
            {props.buttons &&
              props.buttons.map((button, idx) => {
                return (
                  <div
                    key={`${button.type}-${button.button}-${props.title}`}
                    style={idx !== 0 ? { marginLeft: 15 } : null}
                  >
                    <Button
                      key={button.type}
                      type={button.type}
                      onClick={button.onClick}
                    >
                      {button.button}
                    </Button>
                  </div>
                );
              })}
          </ButtonsStyle>
        </MinimalModalStyle>
      );
    default:
      return <div />;
  }
}

const SliderModal = props => {
  return (
    <div
      style={{
        width: "650px",
        boxShadow: "0 0 28px 0 rgba(0, 0, 0, 0.14)",
        paddingBottom: 50,
        borderRadius: "4px",
        position: "relative"
      }}
    >
      <Icon
        type="small-close"
        className="modal-graphic-close-btn"
        onClick={props.closeModal}
        style={{ margin: 20 }}
      />
      <Carousel
        slidesToShow={1}
        wrapAround={true}
        afterSlide={props.afterSlide}
        autoplay
        style={{ height: "100%" }}
        renderCenterLeftControls={({ previousSlide }) => (
          <Button onClick={previousSlide} type="secondary">
            Back
          </Button>
        )}
        renderCenterRightControls={({ nextSlide }) => {
          return (
            <Button onClick={nextSlide} type="primary">
              Next
            </Button>
          );
        }}
      >
        {props.slides ? (
          props.slides.map(slide => {
            return (
              <div key={slide.header} className="slider-slide-inside">
                {slide.header} <img src={slide.graphic} />
              </div>
            );
          })
        ) : (
          <div>hi</div>
        )}
        {/* {props.slides ? (
          props.slides.map((slide, idx) => {
            return (
              <div key={slide.graphic} className="slider-slide-inside">
                <img src={slide.graphic} />
                <div>
                  <H1>{slide.header}</H1>
                  <Paragraph color="black" style={{ maxWidth: "500px" }}>
                    {slide.subtext}
                  </Paragraph>
                </div>
              </div>
            );
          })
        ) : (
          <div>hi</div>
        )} */}
      </Carousel>
    </div>
  );
};

const StyledModal = styled(ReactModalAdapter)`
  &__overlay {
    height: 100%;
    width: 100%;
    position: fixed;
    overflow-y: scroll;
    top: 0;
    left: 0;
    z-index: 999;
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  &__content {
    overflow-y: hidden;
    border-radius: 3px;
    background: #ffffff;
    z-index: 9999;
    box-shadow: ${boxShadow.large};

    ${props =>
      props.type !== "dash" && `max-width: 600px; width: auto !important`};
    ${props =>
      props.type === "dash" &&
      `position: relative;padding: .75em 1em; overflow: scroll; background: ${colorPicker.modalBg};`};
    &:focus {
      outline: 0;
    }
  }
`;

const ModalStyle = styled.div`
  ${props => (props.style ? props.style : null)}
`;

const StyledDashModalContent = styled.div`
  background: #ffffff;
  border: 1px solid ${colorPicker.lightGray};
  height: 50vh;
  min-height: 400px;
  margin-bottom: 30px;
  padding: 40px 50px;

  overflow: scroll;
`;

const StyledDashContent = styled.div`
  margin-left: 0px;
  text-align: left;
  padding-left: 30px;
  padding-right: 30px;

  button {
    margin: 0 auto;
    margin-bottom: 10px;
  }
`;

const DashModal = styled(ModalStyle)`
  width: 90vw;
  height: auto;
  top: 0;
  left: 0;
  // position: relative;
  padding: 0.75em 1em;
`;

const ModalWithGraphic = styled(ModalStyle)`
  width: 600px;
  display: flex;
  flex-direction: row;
  align-items: center;
  object-fit: cover;
  height: 100%;
  overflow: hidden;
  justify-content: space-between;
  ${props => (props.style ? props.style : null)}
`;

const MinimalModalStyle = styled(ModalStyle)`
  width: 500px;
  padding-top: 19px;
  padding-left: 19px;
  padding-bottom: 20px;
  padding-right: 20px;
  ${props => (props.style ? props.style : null)}
`;

const GenericModalStyle = styled(ModalStyle)`
  // position: fixed;
  // width: 100%;
  // height: 100%;
  // top: 0;
  // left: 0;

  ${props => (props.style ? props.style : null)}
`;
const FullscreenModal = styled(ModalStyle)`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  ${props => (props.style ? props.style : null)}
`;

const ButtonsStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin-top: 25px;
  ${props => (props.style ? props.style : null)}
`;

const ModalHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin-bottom: 30px;
`;

const ModalHeaderLeft = styled.div`
  display: flex;
  flex-direction: row;
  justify-items: flex-start;
  align-items: center;
`;

const ModalGraphic = styled.div`
  position: relative;
  object-fit: cover;
  height: 100%;
  width: 250px;
`;

const CloseIcon = styled(Icon)`
  height: 15px;
  width: 15px;
  top: 0;
  right: 0;
  position: absolute;
  z-index: 10;

  &:hover {
    cursor: pointer;
  }
`;

Modal.propTypes = {
  type: PropTypes.string,
  buttons: PropTypes.array,
  title: PropTypes.string,
  icon: PropTypes.string,
  closeModal: PropTypes.func,
  isOpen: PropTypes.bool,
  slides: PropTypes.array
};
Modal.defaultProps = {};
