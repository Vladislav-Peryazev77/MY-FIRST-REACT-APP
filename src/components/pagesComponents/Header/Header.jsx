import React, { useState, useEffect } from "react";
import { IconButton } from "../../UIComponents/IconButton";
import { lockScroll, unlockScroll } from "../../../utils/scrollLocker";
import styles from "./Header.module.scss";
import linkStyles from "../../UIComponents/IconButton/IconButton.module.scss";

export const Header = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);

  useEffect(() => {
    if (!isShowMenu) {
      unlockScroll();
      return;
    }

    lockScroll();
  }, [isShowMenu]);

  const handleMenuVisibilityChange = () => {
    setIsShowMenu(!isShowMenu);
  };
  const mobileMenuClassName = `${styles.menu} ${isShowMenu ? styles.show : ""}`;
  const handleMenuClose = () => {
    setIsShowMenu(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <div className="logo">ROBO.SCHOOL</div>
        <nav className={mobileMenuClassName}>
          <a
            onClick={handleMenuClose}
            className={styles.menuItem}
            href="#stats"
          >
            О школе
          </a>
          <a
            onClick={handleMenuClose}
            className={styles.menuItem}
            href="#coaches"
          >
            Тренеры
          </a>
          <a
            onClick={handleMenuClose}
            className={styles.menuItem}
            href="#packages"
          >
            Стоимость
          </a>
          <IconButton
            additionalClassname={styles.closeButton}
            onClick={handleMenuVisibilityChange}
            src="src/assets/icons/navbar-cross-icon.svg"
          />
        </nav>
        <a href="tel:88000001122" className={`contacts ${styles.contacts}`}>
          +7 800 000 11 22
        </a>
        <div className={styles.buttons}>
          <a className={linkStyles.button} href="tel:88000001122">
            <img
              className={linkStyles.icon}
              src="src/assets/icons/contacts-icon.svg"
              alt="contacts icon"
            />
          </a>
          <IconButton
            onClick={handleMenuVisibilityChange}
            src="src/assets/icons/navbar-icon.svg"
          />
        </div>
      </div>
    </header>
  );
};
