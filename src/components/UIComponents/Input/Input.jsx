import styles from './Input.module.scss';

export const Input = ({
  type,
  placeholder,
  additionalClassname,
  id,
  pattern,
  onChange,
}) => {
  const inputClassname = `${styles.input} ${
    additionalClassname ? additionalClassname : ''
  }`;

  return (
    <input
      id={id}
      pattern={pattern}
      type={type}
      placeholder={placeholder}
      className={inputClassname}
      onChange={onChange}
    ></input>
  );
};
