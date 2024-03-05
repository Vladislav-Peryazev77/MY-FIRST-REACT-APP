import styles from "./Tooltip.module.scss";

export const Tooltip = ({ src, additionalClassname, text }) => {
  const tooltipClassname = `${styles.tooltip} ${
    additionalClassname ? additionalClassname : ""
  }`;
  return (
    <span className={tooltipClassname}>
      <span className={styles.icon}>
        <img className={styles.iconPosition} src={src} />
      </span>
      <span className={styles.description}>{text}</span>
    </span>
  );
};
