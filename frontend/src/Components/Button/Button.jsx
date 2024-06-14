// * Base
import { useTranslation } from 'react-i18next';

const Button = ({
  className = 'whitespace-nowrap',
  type = 'button',
  text = '',
  children,
  onClick,
}) => {
  const { t } = useTranslation();
  return (
    <button className={className} onClick={onClick} type={type}>
      {children}
      <span>{t(text)}</span>
    </button>
  );
};

export default Button;

// ! add whitespace-nowrap
