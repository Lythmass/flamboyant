'use client';
import { ProjectsData } from 'data';
import { Project } from 'components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-creative';
import { Pagination, EffectCreative } from 'swiper/modules';

export const DisplayProjects = () => {
  const displayProjects = ProjectsData.map((project) => {
    return (
      <SwiperSlide key={project.id}>
        <Project
          title={project.title}
          description={project.description}
          image={project.image}
          link={project.link}
          technologies={project.technologies}
          startDate={project.startDate}
          endDate={project.endDate}
        />
      </SwiperSlide>
    );
  });
  return (
    <motion.div
      initial={{ opacity: 1, y: 150 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1, duration: 1.25, type: 'spring' }}
      className='w-full'
    >
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        effect={'creative'}
        loop
        modules={[Pagination, EffectCreative]}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ['-100%', 0, -1],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}
        className='w-full'
        spaceBetween={400}
        slidesPerView={1}
      >
        {displayProjects}
      </Swiper>
    </motion.div>
  );
};

export default DisplayProjects;
