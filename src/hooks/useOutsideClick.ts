import { useEffect } from 'react';

const useOutsideClick = (ref: any, clickHandler: any) => {
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        clickHandler();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, clickHandler]);
};

export default useOutsideClick;
