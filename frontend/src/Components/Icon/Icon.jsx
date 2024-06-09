// * Icons
import ICONS from './Icon.data';

const Icon = ({ className, icon, fill }) => {
  return (
    <svg
      fill={fill}
      className={`${
        className
          ? className
          : 'inline-block text-current fill-current stroke-0 text-lg w-6'
      }`}
      viewBox='0 0 36 36'
    >
      {ICONS[icon]}
    </svg>
  );
};

export default Icon;
