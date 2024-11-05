import { useRouter } from "next/navigation";
import { useEffect } from "react";

const useRouteChange = (onRouteChangeStart) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      if (onRouteChangeStart) {
        onRouteChangeStart(url);
      }
    };

    const originalPush = router.push;
    const originalReplace = router.replace;

    // Override the push method to include the event handler
    router.push = (href, ...args) => {
      handleRouteChange(href);
      return originalPush(href, ...args);
    };

    // Override the replace method to include the event handler
    router.replace = (href, ...args) => {
      handleRouteChange(href);
      return originalReplace(href, ...args);
    };

    return () => {
      router.push = originalPush;
      router.replace = originalReplace;
    };
  }, [router, onRouteChangeStart]);
};

export default useRouteChange;
