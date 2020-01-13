import React, { Component } from "react";
import styled from "styled-components";
import ReactModal from "react-modal";
import { H3, H1, Paragraph } from "../elements/Typography";
import { Button } from "../elements/Button";
import { Icon } from "../elements/Icon";
import Carousel from "nuka-carousel";

function ReactModalAdapter({ className, ...props }) {
  const contentClassName = `${className}__content`;
  const overlayClassName = `${className}__overlay`;
  let bodyOpenClassName = "ReactModal__Body--open";

  if (props.type === "full") {
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
      return (
        <MinimalModalStyle
          key={`${props.type}-${props.icon}-${props.title}`}
          {...props}
        >
          {props.children}
        </MinimalModalStyle>
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
                <H3 style={{ marginLeft: 10 }}>{props.title}</H3>
              </ModalHeaderLeft>
            </ModalHeader>

            <div style={{ marginLeft: 5 }}>{props.children}</div>
            <br />
            <br />
            <ButtonsStyle>
              {props.buttons &&
                props.buttons.map((button, idx) => {
                  return (
                    <div style={idx !== 0 ? { marginLeft: 15 } : null}>
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
              <H3 style={{ marginLeft: 15 }}>{props.title}</H3>
            </ModalHeaderLeft>

            <CloseIcon type="small-close" onClick={props.closeModal} />
          </ModalHeader>

          <div style={{ marginLeft: 5 }}>{props.children}</div>

          <ButtonsStyle>
            {props.buttons &&
              props.buttons.map((button, idx) => {
                return (
                  <div style={idx !== 0 ? { marginLeft: 15 } : null}>
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
      <CloseIcon
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
        {props.slides.map((slide, idx) => {
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
        })}
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
    width: auto !important;
    max-width: 600px;
  }
`;

const ModalStyle = styled.div`
  ${props => (props.style ? props.style : null)}
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
  width: 450px;
  padding: 25px;
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
