import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.wrapper}>
          <div className="logo">ROBO.SCHOOL</div>
          <a href="88000001122" className="contacts">
            +7 800 000 11 22
          </a>
        </div>
        <div className={styles.copyright}>© ROBO.SCHOOL</div>
      </div>
    </div>
  );
};
