import styles from "./Button.module.scss";
export const Button = ({ additionalClassname, children }) => {
  const buttonClassname = `${styles.button} ${
    additionalClassname ? additionalClassname : ""
  }`;

  return <button className={buttonClassname}>{children}</button>;
};
