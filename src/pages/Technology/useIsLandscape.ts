import { useState, useEffect } from "react";

const useIsLandscape = () => {
  const [isLandscape, setIsLandscape] = useState(window.innerWidth <= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsLandscape(window.innerWidth <= 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return { isLandscape };
};

export default useIsLandscape;
