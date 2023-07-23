'use client';
import { NotificationModalType } from './NotificationModalType';
import { motion } from 'framer-motion';
import { useModalToggle } from './useModalToggle';

export const NotificationModal: React.FC<NotificationModalType> = (props) => {
  const scope = useModalToggle(props.setNotificationModal);
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      ref={scope}
      className='sm:w-[30rem] w-[90%] p-5 min-h-[7rem] shadow-[0.4rem_0.4rem_var(--accent-1)] flex items-center justify-start absolute z-[500] top-3 right-[5%] md:translate-x-0 md:top-10 md:right-10 bg-dark'
    >
      <h1 className='text-accent-2 font-bold text-lg lg:text-3xl'>
        {props.text}
      </h1>
    </motion.div>
  );
};

export default NotificationModal;
