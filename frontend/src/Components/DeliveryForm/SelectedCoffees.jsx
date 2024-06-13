// * Base
import { cartContext } from '../../cartContext';
import { useContext } from 'react';
import { t } from 'i18next';

// * Components
import Button from '../Button/Button';
import Icon from '../Icon/Icon';

const SelectedCoffees = () => {
  const { cartItems, updateCartItemQuantity, removeCoffeeFromCart } =
    useContext(cartContext);

  if (cartItems.length === 0)
    return (
      <div className='flex justify-center items-center h-[45px]'>
        {t('cart.empty')}
      </div>
    );

  return (
    <div>
      {cartItems.map((coffee) => (
        <div>
          <div key={coffee.name} className='flex gap-5'>
            <img
              className='w-[64px] h-[64px]'
              src={coffee.image.src}
              alt={coffee.image.alt}
            />
            <div className='flex justify-between w-full'>
              <div>
                <div className='mb-[10px]'>{t(coffee.name)}</div>
                <div className='flex gap-[10px] items-center'>
                  <div className='bg-[var(--c-base-button)] justify-center items-center rounded-[6px] flex p-2 w-[70px] h-[30px] gap-[5px]'>
                    <Button
                      onClick={() => {
                        updateCartItemQuantity(
                          coffee.name,
                          coffee.quantity > 1
                            ? coffee.quantity - 1
                            : coffee.quantity
                        );
                      }}
                    >
                      <Icon
                        className='w-[15px] fill-[var(--c-purple)]'
                        icon='minus'
                      />
                    </Button>
                    <span>{coffee.quantity}</span>
                    <Button
                      onClick={() => {
                        updateCartItemQuantity(
                          coffee.name,
                          coffee.quantity + 1
                        );
                      }}
                    >
                      <Icon
                        className='w-[15px] fill-[var(--c-purple)]'
                        icon='plus'
                      />
                    </Button>
                  </div>
                  <div className='items-center justify-center flex gap-[1px] bg-[var(--c-base-button)] h-[30px] w-[90px] rounded-[6px]'>
                    <Icon
                      className='w-[16px] fill-[var(--c-purple)]'
                      icon='trash'
                    />
                    <Button onClick={() => removeCoffeeFromCart(coffee.name)}>
                      <div className='text-[var(--c-base-text)] text-[12px]'>
                        {t('cart.remove')}
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
              <div className='font-[700] text-[16px] text-[var(--c-base-text)]'>
                {(coffee.quantity * 99) / 10 + ' R$'}
              </div>
            </div>
          </div>
          <div className='w-100% h-[1px] bg-[var(--c-base-button)] my-6'></div>
        </div>
      ))}
      {/* Divider */}
    </div>
  );
};

export default SelectedCoffees;
