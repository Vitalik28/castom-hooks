import { useEffect, useRef } from 'react';

export default function useScroll(
  parentRef: React.MutableRefObject<HTMLDivElement>,
  childRef: React.MutableRefObject<HTMLDivElement>,
  callback: () => void
) {
  console.log(parentRef, childRef, callback);

  const observer = useRef<IntersectionObserver | null>();

  useEffect(() => {
    const options = {
      root: parentRef.current,
      rootMargin: '0px',
      threshold: 0,
    };

    observer.current = new IntersectionObserver(([target]) => {
      console.log(target);

      if (target.isIntersecting) {
        callback();
      }
    }, options);
    console.log(observer.current);

    observer.current.observe(childRef.current);

    return function () {
      observer.current?.unobserve(childRef.current);
    };
  }, [callback]);
}
