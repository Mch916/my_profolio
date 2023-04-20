import React, { useLayoutEffect, useState } from 'react';

const useWindowScroll = () => {
  const [pos, setPos] = useState([0, true]);
  useLayoutEffect(() => {
    function updatePos() {
      
      const p = document.documentElement.scrollTop;
      setPos([p, p < 20]);
    }
    window.addEventListener('scroll', updatePos);
    updatePos();
    return () => window.removeEventListener('scroll', updatePos);
  }, []);
  return pos;
}

export default useWindowScroll;