import './Projects.css'

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

function Projects() {
    return (
        <div id="projects">
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                loop={true}
                navigation
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Projects;