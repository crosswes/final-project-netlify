// * Base
import { useTranslation } from 'react-i18next';

// * Component
import Icon from '../Icon/Icon';

const PaymentCardTitle = () => {
  const { t } = useTranslation();

  return (
    <div className='flex gap-1 mb-[30px] pt-10 '>
      <div className='text-[var(--c-purple)]'>
        <Icon icon='dollar' />
      </div>
      <div className='gap-1'>
        <div className='text-[18px]'>{t('form.delivery.payment')}</div>
        <div className='text-[16px] text-[var(--c-base-text)]'>
          {t('form.delivery.payment.information')}
        </div>
      </div>
    </div>
  );
};

export default PaymentCardTitle;
