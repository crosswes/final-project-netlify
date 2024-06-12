// * Styles
import styles from './Input.module.css';

const Input = ({
  type = 'text',
  placeholder,
  className,
  noLabel,
  fullWidth,
  onChange,
  onBlur,
  value,
  title,
  error,
  name,
}) => {
  const showError = type !== 'radio' || (type !== 'select' && error);

  return (
    <>
      <label
        className={`${
          fullWidth ? 'w-full block' : noLabel ? 'hidden' : 'block'
        }`}
      >
        {title && <div className={styles.title}>{title}</div>}
        <input
          className={className}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          name={name}
          type={type}
        />
        {showError && <div className={styles.error}>{error}</div>}
      </label>
    </>
  );
};

export default Input;
