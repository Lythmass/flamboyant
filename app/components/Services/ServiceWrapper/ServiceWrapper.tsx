'use client';
import { motion } from 'framer-motion';
import { ServiceWrapperType } from './ServiceWrapperType';

export const ServiceWrapper: React.FC<ServiceWrapperType> = (props) => {
  return (
    <motion.div
      style={{ backgroundColor: props.backgroundColor }}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.25, delay: 0.1, type: 'spring' }}
      className={`w-full min-h-[27rem] p-3 lg:p-10 flex flex-col gap-1 ${props.isOddAndLast}`}
    >
      {props.children}
    </motion.div>
  );
};

export default ServiceWrapper;
