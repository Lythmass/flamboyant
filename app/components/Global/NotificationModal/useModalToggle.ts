import { useEffect } from 'react';
import { useAnimate } from 'framer-motion';

export const useModalToggle = (
  setNotificationModal: (value: string) => void,
) => {
  const [scope, animate] = useAnimate();
  useEffect(() => {
    const timer = setTimeout(() => {
      const hideModal = async () => {
        await animate(scope.current, { opacity: 0, y: 50 });
        setNotificationModal('');
      };
      hideModal();
    }, 5000);
    return () => clearTimeout(timer);
  }, [scope, animate, setNotificationModal]);
  return scope;
};
