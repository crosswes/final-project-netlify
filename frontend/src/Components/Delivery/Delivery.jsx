// * Base
import { DATA } from './Delivery.DATA';

// * Component
import Icon from '../Icon/Icon';

const Delivery = () => {
  return (
    <div className='wrapper'>
      <div>
        <div className='mt-[80px] font-[var(--f-baloo)] font-[800] text-[32px] text-[var(--c-yellow-dark)]'>
          Uhu! Pedido confirmado
        </div>
        <div className='mb-[40px] text-[20px] text-[var(--c-base-subtitle)]'>
          Agora é só aguardar que logo o café chegará até você
        </div>
      </div>
      {/* Something wrong with the gradient breaks my icon */}
      <div className='flex'>
        <div className='gradient-border-wrapper'>
          <div className='gradient-border min-w-[550px] min-h-[250px] w-full h-full'>
            {/* {Object.keys(DATA).map((key) => {
            const item = DATA[key];
            return (
              <div key={key}>
                <div className='flex'>
                  <div
                    className={`bg-${item.background} w-[50px] h-[50px] rounded-full flex justify-center items-center`}
                  >
                    <Icon
                      className='w-[15px] fill-[var(--c-white)]'
                      icon={item.icon}
                    />
                  </div>
                  <div>{item.title || ''}</div>
                  {item.street && (
                    <div>{`Entrega em ${item.street}, ${item.house}, Apartamento ${item.apartament}, ${item.city}`}</div>
                  )}
                  {item.deliveryTime && <div>{item.deliveryTime}</div>}
                  {item.payment && <div>{item.payment}</div>}
                </div>
              </div>
            );
          })} */}
            <div className='flex flex-col gap-[30px]'>
              <div className='flex gap-2 items-ce nter'>
                <div className='bg-[var(--c-purple)] h-8 w-8 rounded-full flex justify-center items-center'>
                  <Icon
                    className='w-[15px] fill-[var(--c-white)]'
                    icon='locationFilled'
                  />
                </div>
                <div>
                  Entrega em Rua João Daniel Martinelli, 102 Farrapos - Porto
                  Alegre, RS
                </div>
              </div>

              <div className='flex gap-2 items-center'>
                <div className='bg-[var(--c-yellow)] h-8 w-8 rounded-full flex justify-center items-center'>
                  <Icon
                    className='w-[15px] fill-[var(--c-white)]'
                    icon='timer'
                  />
                </div>
                <div>
                  <div>Previsão de entrega</div>
                  <div>20 min - 30 min</div>
                </div>
              </div>

              <div className='flex gap-2 items-center'>
                <div className='bg-[var(--c-yellow-dark)] h-8 w-8 rounded-full flex justify-center items-center'>
                  <Icon
                    className='w-[15px] fill-[var(--c-white)]'
                    icon='dollar'
                  />
                </div>
                <div>
                  <div>Pagamento na entrega</div>
                  <div>Cartão de Crédito</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img src='/public/illustration.png' alt='Courier' />
      </div>
    </div>
  );
};

export default Delivery;
