import { IconButton } from "../../UIComponents/IconButton";
import styles from "./Header.module.scss";
import linkStyles from "../../UIComponents/IconButton/IconButton.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <div className="logo">ROBO.SCHOOL</div>
        <nav className={`${styles.menu} ${styles.hidden}`}>
          <a className={styles.menuItem} href="#stats">
            О школе
          </a>
          <a className={styles.menuItem} href="#coaches">
            Тренеры
          </a>
          <a className={styles.menuItem} href="#packages">
            Стоимость
          </a>
        </nav>
        <a href="tel:88000001122" className={`${styles.contacts} contacts`}>
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
            visibility={styles.navbarButton}
            src="src/assets/icons/navbar-icon.svg"
            alt="navbar icon"
          />
        </div>
      </div>
    </header>
  );
};
