import { useCallback } from "react";

export const useSmoothScroll = () => {
  const smoothScroll = useCallback((targetId) => {
    const element = document.querySelector(targetId);
    if (element) {
      const offset = element.offsetTop - window.innerHeight * 0.11;
      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
    }
  }, []);

  return smoothScroll;
};

export default useSmoothScroll;
