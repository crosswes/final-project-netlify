// * Base
import { memo } from 'react';

// * Hooks
import useTitle from '../../hooks/use-title.hook';

const Page = memo(({ title, children, titleClassName, className }) => {
  const pageTitle = useTitle({ title: title || '' });

  return (
    <div className={(className, 'wrapper')}>
      <h2 className={titleClassName}>{pageTitle}</h2>
      <div>{children}</div>
    </div>
  );
});

export default Page;
