'use client';
import Image from 'next/image';
import { fontSecondary } from 'fonts';
import { AboutDescriptionContactDetails } from 'components';
import { motion } from 'framer-motion';

export const AboutDescription = () => {
  return (
    <>
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.25, type: 'spring' }}
        className='text-7xl text-dark font-bold text-left'
      >
        My Tale
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.25, duration: 1.25, type: 'spring' }}
        className='relative w-full px-10 flex gap-10 py-7 bg-dark min-h-[18rem] shadow-[0.8rem_0.8rem_var(--accent-1)] '
      >
        <div className='colorful absolute right-10 top-5 w-10 h-10 flex' />
        <Image
          className='w-[18rem] min-h-full object-cover'
          src='/images/luffy.png'
          width={1400}
          height={700}
          alt='luffy'
        />
        <div className='w-full min-h-full gap-2 flex flex-col items-start justify-start'>
          <h1 className='text-4xl text-light'>
            <span className='text-accent-1'>Gigi</span> Lapachishvili
          </h1>
          <p
            className={`${fontSecondary.className} text-light text-xl font-medium`}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            voluptatibus rerum totam tempora et voluptate voluptas similique
            natus debitis culpa modi voluptates sit iusto molestiae enim animi,
            quas rem repellat?
          </p>
          <AboutDescriptionContactDetails />
        </div>
      </motion.div>
    </>
  );
};

export default AboutDescription;
