import styles from './Button.module.scss';
export const Button = ({
  additionalClassname,
  children,
  variant,
  onClick,
  type,
}) => {
  const createButtonVariant = () => {
    switch (true) {
      case variant === 'link':
        return `${styles.button} ${styles.link}`;
      case variant === 'dark':
        return `${styles.button} ${styles.dark}`;
      default:
        return styles.button;
    }
  };

  const buttonClassname = `${createButtonVariant()} ${
    additionalClassname ? additionalClassname : ''
  }`;

  return (
    <button type={type} className={buttonClassname} onClick={onClick}>
      {children}
    </button>
  );
};
