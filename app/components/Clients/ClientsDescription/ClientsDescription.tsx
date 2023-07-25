'use client';
import { fontSecondary } from 'fonts';
import { motion } from 'framer-motion';

export const ClientsDescription = () => {
  return (
    <motion.p
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.25, duration: 1.25, type: 'spring' }}
      className={`${fontSecondary.className} text-lg lg:text-xl xl:text-3xl xl:pt-10 xl:px-20 font-medium text-dark text-center`}
    >
      Here is a list of my satisfied clients for my services and high-quality
      work.
    </motion.p>
  );
};

export default ClientsDescription;
