import styles from "./IconButton.module.scss";

export const IconButton = ({ visibility, additionalClassname, src, alt }) => {
  const buttonClassname = `${visibility} ${styles.button} ${
    additionalClassname ? additionalClassname : ""
  }`;

  return (
    <button className={buttonClassname}>
      <img src={src} alt={alt} className={styles.icon} />
    </button>
  );
};
