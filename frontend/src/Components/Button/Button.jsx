// * Base
import cn from 'classnames';

// * Styles
import styles from './Button.module.css';

const Button = ({
  text = '',
  className = [],
  type = 'button',
  onClick,
  children,
}) => {
  return (
    <button className={cn(styles[className])} onClick={onClick} type={type}>
      {children}
      <span>{text}</span>
    </button>
  );
};

export default Button;

// ! add whitespace-nowrap
