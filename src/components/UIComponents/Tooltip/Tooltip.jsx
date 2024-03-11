import styles from "./Tooltip.module.scss";

export const Tooltip = ({ iconPath, additionalClassname, children }) => {
  const tooltipClassname = `${styles.tooltip} ${
    additionalClassname ? additionalClassname : ""
  }`;
  return (
    <span className={tooltipClassname}>
      <span className={styles.icon}>
        <img
          className={styles.iconPosition}
          src={iconPath ? iconPath : "src/assets/icons/i-icon.svg"}
        />
      </span>
      <span className={styles.description}>{children}</span>
    </span>
  );
};
