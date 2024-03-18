import React, { useEffect } from "react";
import { Button } from "../Button";
import { createPortal } from "react-dom";
import { lockScroll, unlockScroll } from "../../../utils/scrollLocker";

import styles from "./Modal.module.scss";
import modalContentStyles from "../../pagesComponents/homePage/CoachesBlock/components/components/CoachModalContent.module.scss";

export const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (!isOpen) {
      unlockScroll();
      return;
    }

    lockScroll();
  }, [isOpen]);

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
          <div
            className={`${styles.modalContent} ${modalContentStyles.modalContent}`}
          >
            <button
              className={styles.modalBaseCloseBtn}
              onClick={handleCloseModal}
            >
              <span className={styles.text}>Закрыть</span>
              <img
                className={styles.icon}
                src="src/assets/icons/modal-close-button-icon.svg"
              />
            </button>
            {children}
          </div>
        </div>,
        document.getElementById("root")
      )}
    </>
  );
};
