// * Hook
import useTitle from '../../hooks/use-title.hook';

// * Components
import Banner from '../Banner/Banner';
import List from '../List/List';

const Main = () => {
  useTitle({ title: 'Main' });

  return (
    <>
      <Banner />
      <List />
    </>
  );
};

export default Main;
