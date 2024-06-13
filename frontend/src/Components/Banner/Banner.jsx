// * Base
import { useTranslation } from 'react-i18next';
import { DATA } from './Banner.data';

// * Component
import Icon from '../Icon/Icon';

// * Styles
import styles from './Banner.module.css';

// * Img
import '../../../public/Banner.png';

const Banner = () => {
  const { t } = useTranslation();
  return (
    <>
      <img src='/background.png' className='absolute z-[-10] w-full' />

      <div className='wrapper m-0 p-0 flex items-center justify-center relative w-full min-h-[calc(100vh-100px)]'>
        {/* Title & Description */}
        <div className={styles.content}>
          <div className={styles.container}>
            <div className={styles.title}>{t('banner.title')}</div>
            <div className={styles.description}>{t('banner.description')}</div>
          </div>
          {/* Features */}
          <div className={styles.featuresContainer}>
            {Object.keys(DATA).map((key) => {
              const { icon, text, background } = DATA[key];
              return (
                <div key={key} className={styles.feature}>
                  <div className={styles[background]}>
                    <Icon fill='#fafafa' className={styles.icon} icon={icon} />
                  </div>
                  <div>{t(text)}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right side image */}
        <div>
          <img
            className='min-w-[350px] select-none'
            src='/Banner.png'
            alt='Banner'
          />
        </div>
      </div>
    </>
  );
};

export default Banner;
