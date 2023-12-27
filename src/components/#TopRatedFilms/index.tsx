'use client'
import { useWindowSize } from '@/hooks/useWindowSize';
import { useState, useEffect } from 'react';
import SliderCard from '../Cards/SliderCard';
import * as Styled from './index.styled'
import { useFilmsTopRated } from '@/lib/hooks/useFilmsTopRated';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";


const TopRatedFilms = () => {

    const pageSize = 50
    const { filmList, isLoading } = useFilmsTopRated(String(pageSize));

    const filmsList = filmList?.data.movies?.map((film) => {
        return (
        
            <SwiperSlide key={film.id}>
                <SliderCard  {...film}></SliderCard>
            </SwiperSlide>
        )
    });

    const isBrowser = () => typeof window !== "undefined"
    const dim = isBrowser() ? [window.innerWidth, window.innerWidth] : [1920, 1080]
    const [size, setSize] = useState(dim);

    const handleResize = () => {
        setSize([window.innerWidth, window.innerHeight]);
    };
    useEffect(() => {
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, [size]);

    let SlidesCount = 5;
    if (size[0] > 900) {
        SlidesCount = 5;
      } 
    else {
        SlidesCount = 2;
      }
    if (size[0] < 300) {
        SlidesCount = 1;
      }


    if (isLoading) {
        return;
    }

    

    return (
        <Styled.Container>
            <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={70}
      slidesPerView={SlidesCount}
      freeMode={true}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
        {filmsList}
    </Swiper>
        </Styled.Container>
    )
}

export default TopRatedFilms