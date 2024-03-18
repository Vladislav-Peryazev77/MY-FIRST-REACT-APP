import React, { сhildren } from "react";
import { Button } from "../Button";
import { createPortal } from "react-dom";

import styles from "./Modal.module.scss";

export const Modal = ({ isOpen, onClose, children }) => {
  const handleCloseModal = () => {
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <>
      {createPortal(
        <div className={styles.modalWrapper}>
          <div
            className={styles.modalBackdrop}
            onClick={handleCloseModal}
          ></div>
          <div className={styles.modalContent}>
            <Button
              variant="link"
              additionalClassname={styles.modalClose}
              onClick={handleCloseModal}
            >
              Закрыть
            </Button>
            <button className={styles.modalCloseIcon}>
              <img src="src/assets/icons/modal-close-button-icon.svg" />
            </button>
            {children}
          </div>
        </div>,
        document.getElementById("root")
      )}
    </>
  );
};
