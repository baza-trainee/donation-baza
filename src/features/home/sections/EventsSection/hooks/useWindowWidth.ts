import { useEffect, useState } from 'react';
import debounce from 'lodash.debounce';

export const useWindowWidth = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    setWidth(window.innerWidth);

    const handleResize = debounce(() => {
      setWidth(window.innerWidth);
    }, 200);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      handleResize.cancel();
    };
  }, []);

  return width;
};
