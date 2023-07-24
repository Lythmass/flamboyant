'use client';
import { Client } from 'components';
import { ClientsData } from 'data';
import { SwiperSlide, Swiper } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { motion } from 'framer-motion';

export const DisplayClients = () => {
  const displayClients = ClientsData.map((client) => {
    return (
      <SwiperSlide key={client.id}>
        <Client
          comment={client.comment}
          name={client.name}
          image={client.image}
          company={client.company}
        />
      </SwiperSlide>
    );
  });
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.25, duration: 1.25, type: 'spring' }}
    >
      <Swiper
        grabCursor={true}
        loop
        className='w-full m-auto'
        spaceBetween={400}
        slidesPerView={1}
        navigation={true}
        modules={[Navigation]}
      >
        {displayClients}
      </Swiper>
    </motion.div>
  );
};

export default DisplayClients;
