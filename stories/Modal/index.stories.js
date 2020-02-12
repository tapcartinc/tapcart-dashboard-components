import React, { useState } from "react";
import { Button } from "../../lib/elements/Button";
import { Modal } from "../../lib/components/Modal";
import { Body } from "../../lib/elements/Typography";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { colors } from "../../lib";
import { useWindowSize } from "../../lib/hooks/useWindowSize";

export default {
  component: Modal,
  title: "Components/Modal",
  decorators: [withKnobs]
};

export const alertModal = () => {
  const [open, toggleModal] = useState(false);

  return (
    <div id="app-root">
      <Button onClick={() => toggleModal(!open)}>open</Button>
      <Modal
        type="alert"
        isOpen={open}
        confetti
        title="Deactivate"
        success={open}
        size={useWindowSize()}
        icon="alert"
        closeModal={() => toggleModal(!open)}
        buttons={[
          {
            button: "Cancel",
            onClick: () => {
              toggleModal(!open);
            },
            kind: "secondary"
          },
          {
            button: "Deactivate",
            onClick: () => {
              toggleModal(!open);
            },
            kind: "delete"
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
    </div>
  );
};

// export const modalWithGraphic = () => {
//   const [graphicModal, toggleGraphicModal] = useState(false);
//   const [catPic, changeCatPicture] = React.useState(
//     "https://media.mnn.com/assets/images/2016/01/manny-selfie-cat-01.jpg.320x0_q80_crop-smart.jpg"
//   );
//   return (
//     <>
//       <Button kind="save" onClick={() => toggleGraphicModal(!graphicModal)}>
//         open graphic modal
//       </Button>
//       <Modal
//         isOpen={graphicModal}
//         closeModal={() => toggleGraphicModal(false)}
//         type="modal-with-graphic"
//         icon="design"
//         title="Change the Cat Selfie"
//         buttons={[
//           {
//             button: "Cat 1",
//             onClick: () => {
//               changeCatPicture(
//                 "https://media.mnn.com/assets/images/2016/01/manny-selfie-cat-01.jpg.320x0_q80_crop-smart.jpg"
//               );
//             },
//             kind: "primary"
//           },
//           {
//             button: "Cat 2",
//             onClick: () => {
//               changeCatPicture(
//                 "https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_1248,w_2220/f_auto,q_auto,w_1100/v1555352727/shape/mentalfloss/46eyrdfh.png"
//               );
//             },
//             kind: "secondary"
//           },
//           {
//             button: "Cat 3",
//             onClick: () => {
//               changeCatPicture(
//                 "https://freeyork.org/wp-content/uploads/2016/09/manny-selfie-cat-fy-2.jpg"
//               );
//             },
//             kind: "delete"
//           }
//         ]}
//         graphic={catPic}
//       >
//         <Body color={colors.black}>Want to change the cat selfie?</Body>
//         <Body color={colors.grayText}>
//           Click on a button below to select the selfie of your preference.
//         </Body>
//       </Modal>
//     </>
//   );
// };

// export const fullModal = () => {
//   const [fullModal, toggleFullModal] = useState(false);

//   return (
//     <>
//       <Button kind="primary" onClick={() => toggleFullModal(!fullModal)}>
//         open generic modal
//       </Button>
//       <Modal
//         isOpen={fullModal}
//         closeModal={() => toggleFullModal(false)}
//         type="generic"
//         icon="design"
//         title="Change the Cat Selfie"
//       >
//         <Body color={colors.black}>Want to change the cat selfie?</Body>
//         <Body color={colors.grayText}>
//           Click on a button below to select the selfie of your preference.
//         </Body>
//       </Modal>
//     </>
//   );
// };

// export const dashModal = () => {
//   const [dashModal, toggleDashModal] = useState(false);

//   return (
//     <>
//       <Button kind="primary" onClick={() => toggleDashModal(!dashModal)}>
//         open dash modal
//       </Button>
//       <Modal
//         isOpen={dashModal}
//         closeModal={() => toggleDashModal(false)}
//         type="dash"
//         title="Countdown Timer Block"
//         description="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
//         onClick={() => console.log("hi")}
//         buttonText="SAVE BLOCK"
//       >
//         <Body color={colors.black}>Want to change the cat selfie?</Body>
//         <Body color={colors.grayText}>
//           Click on a button below to select the selfie of your preference.
//         </Body>
//         <Body color={colors.black}>Want to change the cat selfie?</Body>
//         <Body color={colors.grayText}>
//           Click on a button below to select the selfie of your preference.
//         </Body>
//         <Body color={colors.black}>Want to change the cat selfie?</Body>
//         <Body color={colors.grayText}>
//           Click on a button below to select the selfie of your preference.
//         </Body>
//         <Body color={colors.black}>Want to change the cat selfie?</Body>
//         <Body color={colors.grayText}>
//           Click on a button below to select the selfie of your preference.
//         </Body>
//         <Body color={colors.black}>Want to change the cat selfie?</Body>
//         <Body color={colors.grayText}>
//           Click on a button below to select the selfie of your preference.
//         </Body>
//         <Body color={colors.black}>Want to change the cat selfie?</Body>
//         <Body color={colors.grayText}>
//           Click on a button below to select the selfie of your preference.
//         </Body>
//         <Body color={colors.black}>Want to change the cat selfie?</Body>
//         <Body color={colors.grayText}>
//           Click on a button below to select the selfie of your preference.
//         </Body>
//       </Modal>
//     </>
//   );
// };
