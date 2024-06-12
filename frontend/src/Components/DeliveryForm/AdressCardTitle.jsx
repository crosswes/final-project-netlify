// * Base
import { useTranslation } from 'react-i18next';

// * Component
import Icon from '../Icon/Icon';

const AdressCardTitle = () => {
  const { t } = useTranslation();

  return (
    <div className='flex gap-1 mb-[30px] pt-10 '>
      <div>
        <Icon icon='iconDelivery' />
      </div>
      <div className='gap-1'>
        <div className='text-[18px]'>{t('form.delivery.adress')}</div>
        <div className='text-[16px] text-[var(--c-base-text)]'>
          {t('form.delivery.adress.information')}
        </div>
      </div>
    </div>
  );
};

export default AdressCardTitle;
