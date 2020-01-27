import React, { useState } from "react";
import { action } from "@storybook/addon-actions";
import { Button } from "../../lib/elements/Button";
import { Modal } from "../../lib/components/Modal";
import { Body } from "../../lib/elements/Typography";
import { Icon } from "../../lib/elements/Icon";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { colors } from "../../lib";

export default {
  component: Modal,
  title: "Components/Modal",
  decorators: [withKnobs]
};

export const alertModal = () => {
  const [open, toggleModal] = useState(false);
  return (
    <>
      <Button onClick={() => toggleModal(!open)}>open</Button>
      <Modal
        type="alert"
        icon="alert"
        isOpen={open}
        title="Deactivate"
        icon="alert"
        closeModal={() => toggleModal(!open)}
        buttons={[
          {
            button: "Cancel",
            onClick: () => {
              toggleModal(!open);
            },
            type: "secondary"
          },
          {
            button: "Deactivate",
            onClick: () => {
              toggleModal(!open);
            },
            type: "delete"
          }
        ]}
      >
        <Body color={colors.black}>
          Are you sure you want to deactivate your app?
        </Body>
        <Body color={colors.grayText}>
          This will remove your app from the App Store & Google Play Store. It
          will also disable usage for your current customers.
        </Body>
      </Modal>
    </>
  );
};

export const modalWithGraphic = () => {
  const [graphicModal, toggleGraphicModal] = useState(false);
  const [catPic, changeCatPicture] = React.useState(
    "https://media.mnn.com/assets/images/2016/01/manny-selfie-cat-01.jpg.320x0_q80_crop-smart.jpg"
  );
  return (
    <>
      <Button type="save" onClick={() => toggleGraphicModal(!graphicModal)}>
        open graphic modal
      </Button>
      <Modal
        isOpen={graphicModal}
        closeModal={() => toggleGraphicModal(false)}
        type="modal-with-graphic"
        icon="design"
        title="Change the Cat Selfie"
        buttons={[
          {
            button: "Cat 1",
            onClick: () => {
              changeCatPicture(
                "https://media.mnn.com/assets/images/2016/01/manny-selfie-cat-01.jpg.320x0_q80_crop-smart.jpg"
              );
            },
            type: "primary"
          },
          {
            button: "Cat 2",
            onClick: () => {
              changeCatPicture(
                "https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_1248,w_2220/f_auto,q_auto,w_1100/v1555352727/shape/mentalfloss/46eyrdfh.png"
              );
            },
            type: "secondary"
          },
          {
            button: "Cat 3",
            onClick: () => {
              changeCatPicture(
                "https://freeyork.org/wp-content/uploads/2016/09/manny-selfie-cat-fy-2.jpg"
              );
            },
            type: "delete"
          }
        ]}
        graphic={catPic}
      >
        <Body color={colors.black}>Want to change the cat selfie?</Body>
        <Body color={colors.grayText}>
          Click on a button below to select the selfie of your preference.
        </Body>
      </Modal>
    </>
  );
};

export const fullModal = () => {
  const [fullModal, toggleFullModal] = useState(false);

  return (
    <>
      <Button type="primary" onClick={() => toggleFullModal(!fullModal)}>
        open generic modal
      </Button>
      <Modal
        isOpen={fullModal}
        closeModal={() => toggleFullModal(false)}
        type="generic"
        icon="design"
        title="Change the Cat Selfie"
      >
        <Body color={colors.black}>Want to change the cat selfie?</Body>
        <Body color={colors.grayText}>
          Click on a button below to select the selfie of your preference.
        </Body>
      </Modal>
    </>
  );
};

export const dashModal = () => {
  const [dashModal, toggleDashModal] = useState(false);

  return (
    <>
      <Button type="primary" onClick={() => toggleDashModal(!dashModal)}>
        open dash modal
      </Button>
      <Modal
        isOpen={dashModal}
        closeModal={() => toggleDashModal(false)}
        type="dash"
        title="Countdown Timer Block"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        onClick={() => console.log("hi")}
        buttonText="SAVE BLOCK"
      >
        <Body color={colors.black}>Want to change the cat selfie?</Body>
        <Body color={colors.grayText}>
          Click on a button below to select the selfie of your preference.
        </Body>
        <Body color={colors.black}>Want to change the cat selfie?</Body>
        <Body color={colors.grayText}>
          Click on a button below to select the selfie of your preference.
        </Body>
        <Body color={colors.black}>Want to change the cat selfie?</Body>
        <Body color={colors.grayText}>
          Click on a button below to select the selfie of your preference.
        </Body>
        <Body color={colors.black}>Want to change the cat selfie?</Body>
        <Body color={colors.grayText}>
          Click on a button below to select the selfie of your preference.
        </Body>
        <Body color={colors.black}>Want to change the cat selfie?</Body>
        <Body color={colors.grayText}>
          Click on a button below to select the selfie of your preference.
        </Body>
        <Body color={colors.black}>Want to change the cat selfie?</Body>
        <Body color={colors.grayText}>
          Click on a button below to select the selfie of your preference.
        </Body>
        <Body color={colors.black}>Want to change the cat selfie?</Body>
        <Body color={colors.grayText}>
          Click on a button below to select the selfie of your preference.
        </Body>
      </Modal>
    </>
  );
};

// export const sliderModal = props => {
//   const [sliderModal, toggleSliderModal] = useState(false);
//   const slides = [
//     {
//       graphic:
//         "https://storage.googleapis.com/tapcart-150607.appspot.com/9f2daed5959e344241f53e5ace4b597f_bannerjpg.jpeg",
//       header: "Lorem ipsum dolor sit amet",
//       subtext:
//         "Sed ut perspiciatis unde omnis iste natus error sit totam rem aperiam accusantium doloremque laudantium dicta sunt explicabo."
//     },
//     {
//       graphic:
//         "https://storage.googleapis.com/tapcart-150607.appspot.com/52335604b9ecbbb220d0843ef81a5c2a_bannerjpg.jpeg",
//       header: "Lorem ipsum dolor sit amet",
//       subtext:
//         "Sed ut perspiciatis unde omnis iste natus error sit totam rem aperiam accusantium doloremque laudantium dicta sunt explicabo."
//     },

//     {
//       graphic:
//         "https://storage.googleapis.com/tapcart-150607.appspot.com/309354c5adbc4559ee01e407fbb20223_bannerjpg.jpeg",
//       header: "Lorem ipsum dolor sit amet",
//       subtext:
//         "Sed ut perspiciatis unde omnis iste natus error sit totam rem aperiam accusantium doloremque laudantium dicta sunt explicabo."
//     }
//   ];
//   return (
//     <>
//       <Button type="secondary" onClick={() => toggleSliderModal(!sliderModal)}>
//         open slider modal
//       </Button>
//       <Modal
//         isOpen={sliderModal}
//         closeModal={() => toggleSliderModal(false)}
//         type="slider-modal"
//         slides={slides}
//         icon="design"

//         // buttons={[
//         //   {
//         //     button: "Cat 1",
//         //     onClick: () => {
//         //       changeCatPicture(
//         //         "https://media.mnn.com/assets/images/2016/01/manny-selfie-cat-01.jpg.320x0_q80_crop-smart.jpg"
//         //       );
//         //     },
//         //     type: "primary"
//         //   },
//         //   {
//         //     button: "Cat 2",
//         //     onClick: () => {
//         //       changeCatPicture(
//         //         "https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_1248,w_2220/f_auto,q_auto,w_1100/v1555352727/shape/mentalfloss/46eyrdfh.png"
//         //       );
//         //     },
//         //     type: "secondary"
//         //   },
//         //   {
//         //     button: "Cat 3",
//         //     onClick: () => {
//         //       changeCatPicture(
//         //         "https://freeyork.org/wp-content/uploads/2016/09/manny-selfie-cat-fy-2.jpg"
//         //       );
//         //     },
//         //     type: "delete"
//         //   }
//         // ]}
//       >
//         {/* <Body color={colors.black}>Want to change the cat selfie?</Body>
//         <Body color={colors.grayText}>
//           Click on a button below to select the selfie of your preference.
//         </Body> */}
//       </Modal>
//     </>
//   );
// };
