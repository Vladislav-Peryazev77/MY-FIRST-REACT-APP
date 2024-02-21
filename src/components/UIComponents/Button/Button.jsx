import styles from "./Button.module.scss";
export const Button = ({ additionalClassname, children, variant }) => {
  const buttonClassname = `${styles.button} ${
    additionalClassname ? additionalClassname : ""
  } ${variant ? variant : ""}`;

  return <button className={buttonClassname}>{children}</button>;
};
