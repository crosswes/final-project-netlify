// * Base
import { useTranslation } from 'react-i18next';
import { DATA } from './List.data';

// * Styles
import styles from './List.module.css';

// * Components
import Card from '../Card/Card';
import Page from '../Page/Page';

const List = () => {
  const { t } = useTranslation();

  return (
    <section>
      <Page title={t('main.title')} titleClassName={styles.title}>
        <div className={styles.wrapper}>
          {Object.keys(DATA).map((key, index) => (
            <Card key={index} {...DATA[key]} />
          ))}
        </div>
      </Page>
    </section>
  );
};

export default List;
