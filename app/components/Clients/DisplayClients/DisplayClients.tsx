'use client';
import { Client } from 'components';
import { ClientsData } from 'data';
import { SwiperSlide, Swiper } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

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
  );
};

export default DisplayClients;
