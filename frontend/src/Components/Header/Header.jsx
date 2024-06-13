// * Base
import { cartContext } from '../../cartContext';
import { Link } from 'react-router-dom';
import { useContext } from 'react';

// * Components
import Language from '../Language/Language';
import Icon from '../Icon/Icon';

const Header = () => {
  const { cartQuantity } = useContext(cartContext);

  return (
    <div className='bg-[var(--c-background)] justify-between flex items-center sticky z-50 h-25 top-0 px-[190px] right-0 left-0'>
      <Link to='/'>
        <Icon
          className='inline-block text-current fill-current stroke-0 text-lg w-[85px] '
          icon='logo'
        />
      </Link>
      <div className='items-center flex justify-between h-10 gap-[10px]'>
        <div className='flex p-[8px] items-center text-[14px] whitespace-nowrap rounded-[6px] h-10 bg-purple-light w-[150px]'>
          <Icon
            fill='#8047f8'
            className='text-[100px] w-7'
            icon='locationFilled'
          />
          <a
            className='text-purple-dark'
            href='https://maps.app.goo.gl/DVHX8tGhg4MfkB9j8'
          >
            Porto Alegre, RS
          </a>
        </div>
        <Link to='/form'>
          <div className='w-10 p-[8px] h-10 text-[#c47f17] relative rounded-[6px] bg-yellow-light'>
            {cartQuantity > 0 && (
              <div className='absolute w-5 h-5 left-[70%] bottom-[70%] bg-yellow-dark rounded-full flex items-center justify-center p'>
                <span className='text-white text-xs font-bold'>
                  {cartQuantity}
                </span>
              </div>
            )}
            <Icon icon='cart' />
          </div>
        </Link>
        <Language />
      </div>
    </div>
  );
};

export default Header;
