
import { useState, useEffect, RefObject } from 'react';

interface UseInViewOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
  once?: boolean;
}

export function useInView(
  elementRef: RefObject<Element>,
  options: UseInViewOptions = {}
): boolean {
  const { root = null, rootMargin = '0px', threshold = 0.1, once = false } = options;
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const isElementInView = entry.isIntersecting;
        
        if (isElementInView) {
          setIsInView(true);
          
          // If once is true, disconnect the observer after the element comes into view
          if (once && elementRef.current) {
            observer.unobserve(elementRef.current);
          }
        } else if (!once) {
          setIsInView(false);
        }
      },
      { root, rootMargin, threshold }
    );

    const currentElement = elementRef.current;
    
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [elementRef, root, rootMargin, threshold, once]);

  return isInView;
}
