import styles from "./Button.module.scss";
export const Button = ({ additionalClassname, children, variant }) => {
  const createButtonVariant = () => {
    switch (true) {
      case variant === "link":
        return `${styles.button} ${styles.link}`;
      case variant === "white":
        return `${styles.button} ${styles.white}`;
      default:
        return styles.button;
    }
  };

  const buttonClassname = `${createButtonVariant()} ${
    additionalClassname ? additionalClassname : ""
  }`;

  return <button className={buttonClassname}>{children}</button>;
};
