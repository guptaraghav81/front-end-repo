import React from 'react'
import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
import { Autoplay,FreeMode,Navigation, Pagination}  from "swiper/modules"
import Course_Card from "./Course_Card"
const CourseSlider = ({Courses}) => {
  return (
    <div className=''>
      {
                    Courses?.length ? (
                      <Swiper
                          slidesPerView={1}
                          loop={true}
                          spaceBetween={200}
                          pagination={true}
                          modules={[Autoplay,Pagination,Navigation]}
                          className="mySwiper py-4 w-11/12"
                          autoplay={{
                          delay: 3000,
                          disableOnInteraction: false,
                          }}
                          navigation={true}
                          breakpoints={{
                              1024:{slidesPerView:3,}
                          }}
                      >
                          {
                              Courses?.map((course, index)=> (
                                  <SwiperSlide key={index}>
                                      <Course_Card course={course} Height={"h-[230px] "} />
                                  </SwiperSlide>
                              ))
                          }   
                      </Swiper>
                  ) : (
                      <p>No Course Found</p>
                  )
      }
    </div>
  )
}

export default CourseSlider