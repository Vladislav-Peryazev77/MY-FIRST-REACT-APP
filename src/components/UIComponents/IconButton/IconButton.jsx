import styles from "./IconButton.module.scss";

export const IconButton = ({
  onClick,
  visibilyty,
  additionalClassname,
  src,
}) => {
  const buttonClassname = `${styles.button} ${visibilyty} ${
    additionalClassname ? additionalClassname : ""
  }`;

  return (
    <button onClick={onClick} className={buttonClassname}>
      <img src={src} className={styles.icon} />
    </button>
  );
};
