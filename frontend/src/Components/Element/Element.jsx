// * Base
import { Suspense } from 'react';

// * Element
import Loading from '../Loading/Loading';

const Element = ({ component }) => {
  return <Suspense fallback={<Loading />}>{component}</Suspense>;
};

export default Element;
