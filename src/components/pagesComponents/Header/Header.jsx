import React, { useState } from "react";
import { IconButton } from "../../UIComponents/IconButton";
import styles from "./Header.module.scss";
import linkStyles from "../../UIComponents/IconButton/IconButton.module.scss";
import { lockScroll, unlockScroll } from "../../../utils/navbar-scroll";

export const Header = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);
  const handleMenuVisibilityChange = () => {
    setIsShowMenu(!isShowMenu);
    lockScroll();
  };
  const mobileMenuClassName = `${styles.menu} ${isShowMenu ? "" : styles.show}`;
  const menuClose = () => {
    setIsShowMenu(false);
    unlockScroll();
  };

  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <div className="logo">ROBO.SCHOOL</div>
        <nav className={mobileMenuClassName}>
          <a onClick={menuClose} className={styles.menuItem} href="#stats">
            О школе
          </a>
          <a onClick={menuClose} className={styles.menuItem} href="#coaches">
            Тренеры
          </a>
          <a onClick={menuClose} className={styles.menuItem} href="#packages">
            Стоимость
          </a>
          <IconButton
            additionalClassname={styles.closeButton}
            onClick={handleMenuVisibilityChange}
            src="src/assets/icons/navbar-cross-icon.svg"
            alt="navbar close icon"
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
            alt="navbar icon"
          />
        </div>
      </div>
    </header>
  );
};
