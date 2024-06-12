// * Base
import { useCallback, useEffect } from 'react';

// * Helpers
import BASE from '../helpers/base-title';

const useTitle = ({ title }) => {
  const handleVisibilityChange = useCallback(() => {
    document.title = document.hidden
      ? `${BASE.title} | Come back!`
      : `${BASE.title} | ${title}`;
  }, [title]);

  useEffect(() => {
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      handleVisibilityChange();
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [handleVisibilityChange]);

  return title;
};

export default useTitle;
