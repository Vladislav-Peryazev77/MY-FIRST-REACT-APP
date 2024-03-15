import styles from "./IconButton.module.scss";

export const IconButton = ({ onClick, additionalClassname, src }) => {
  const buttonClassname = `${styles.button} ${
    additionalClassname ? additionalClassname : ""
  }`;

  return (
    <button onClick={onClick} className={buttonClassname}>
      <img src={src} className={styles.icon} />
    </button>
  );
};
