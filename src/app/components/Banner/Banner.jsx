'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './Banner.css';
import { Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';

const Banner = () => {
  const images = [
    {
      img:'/images/banner.png',
    },
    // {
    //   img:'/images/banner1.jpg',
    // },
    // {
    //   img:'/images/banner2.jpg',
    // },
    // {
    //   img:'/images/banner3.jpg',
    // },
    // {
    //   img:'/images/banner4.jpg',
    // }
  ]


  return (
    <>
    <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={true}
      modules={[Pagination, Autoplay]}
      className="mySwiper"
    >
      {
        images.map((item, index)=> (
      <SwiperSlide key={index}>
      <Image
              src={item.img}
              className=" object-fill"
              alt={index}
              width={1400}
              height={1000}
            />
      </SwiperSlide>
        ))
      }

    </Swiper>
  </>
  )
}

export default Banner