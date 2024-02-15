import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <div className="logo">ROBO.SCHOOL</div>
        <nav className={styles.menu}>
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
        <a href="tel:88000001122" className="contacts">
          +7 800 000 11 22
        </a>
      </div>
    </header>
  );
};
