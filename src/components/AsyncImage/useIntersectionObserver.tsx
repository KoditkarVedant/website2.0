import { useEffect } from 'react';
export const useIntersectionObserver = ({
    target,
    onIntesect,
    threshold = 0.1,
    rootMargin = "0px"
}: any) => {
    useEffect(() => {
        const observer = new IntersectionObserver(onIntesect, {
            rootMargin,
            threshold
        });

        const current = target.current;
        observer.observe(current);

        return () => {
            observer.unobserve(current);
        };
    });
};
