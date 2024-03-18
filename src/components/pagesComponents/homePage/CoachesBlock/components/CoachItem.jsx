import React, { useState } from "react";
import { coachesImages } from "../../../../../assets/images";
import { Button } from "../../../../UIComponents/Button";
import { Modal } from "../../../../UIComponents/Modal";

import styles from "../CoachesBlock.module.scss";
import { CoachModalContent } from "./components/CoachModalContent";

export const CoachItem = ({ coach }) => {
  const [isShowModal, setItShowModal] = useState(false);

  const handleModalOpen = () => {
    setItShowModal(true);
  };

  const handleModalClose = () => {
    setItShowModal(false);
  };

  return (
    <div className={styles.item}>
      <img
        className={styles.photo}
        src={coachesImages[coach.imageName]}
        alt={coach.title}
      />
      <div className={styles.itemTitle}>{coach.title}</div>
      <div className={styles.jobtitle}>{coach.jobtitle}</div>
      <Button
        variant="link"
        additionalClassname={styles.button}
        onClick={handleModalOpen}
      >
        Подробнее
      </Button>
      <Modal isOpen={isShowModal} onClose={handleModalClose}>
        <CoachModalContent coach={coach} />
      </Modal>
    </div>
  );
};
