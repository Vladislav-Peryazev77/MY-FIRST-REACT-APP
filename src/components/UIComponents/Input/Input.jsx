import styles from './Input.module.scss';

export const Input = ({
  type,
  placeholder,
  additionalClassname,
  id,
  register,
}) => {
  const inputClassname = `${styles.input} ${
    additionalClassname ? additionalClassname : ''
  }`;

  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      className={inputClassname}
      {...register}
    ></input>
  );
};
