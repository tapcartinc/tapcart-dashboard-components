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

export const modal = () => {
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
    // <StyledButtonRow>
    //   <Button
    //     type="primary"
    //     isLoading={boolean("Loading", false)}
    //     onClick={action("clicked")}
    //   >
    //     Primary
    //   </Button>
    //   <Button type="secondary" onClick={action("clicked")}>
    //     Secondary
    //   </Button>
    //   <Button type="delete" onClick={action("clicked")}>
    //     Delete
    //   </Button>
    //   <Button type="save" onClick={action("clicked")}>
    //     Save
    //   </Button>
    //   <Button
    //     type="inverted"
    //     isLoading={boolean("Loading Button", true)}
    //     onClick={action("clicked")}
    //   >
    //     Loading Button
    //   </Button>
    //   <Button
    //     type="primary--reversed"
    //     isDisabled={boolean("Disabled Button", true)}
    //     onClick={action("clicked")}
    //   >
    //     Disabled
    //   </Button>
    //   <Button type="transparent--white" onClick={action("clicked")}>
    //     {text("Change Button Text", "Change Button Text")}
    //   </Button>
    //   <Button type="inverted--reversed" onClick={action("clicked")}>
    //     Icon Button <Icon type="design" fill="white" iconRight />
    //   </Button>
    // </StyledButtonRow>
  );
};
