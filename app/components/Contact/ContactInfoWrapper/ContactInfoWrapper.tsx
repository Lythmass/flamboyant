'use client';
import { motion } from 'framer-motion';

export const ContactInfoWrapper: React.FC<{ children: React.ReactNode }> = (
  props,
) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.25, delay: 0.25, type: 'spring' }}
      className='w-full text-dark bg-accent-1 shadow-[0.4rem_0.4rem_var(--accent-2)] p-4 flex flex-col gap-4 items-start justify-start'
    >
      {props.children}
    </motion.div>
  );
};

export default ContactInfoWrapper;
