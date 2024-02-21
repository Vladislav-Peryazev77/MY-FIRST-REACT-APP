import React from "react";
import styles from "./CoachesBlock.module.scss";

import coachesData from "../../../../api/coaches.json";
import { coachesImages } from "../../../../assets/images";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const CoachesBlock = () => {
  return (
    <div className="container">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        loop
        freeMode
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
      >
        {coachesData.map((coach) => {
          return (
            <SwiperSlide>
              <div style={{ width: "360px", height: "660px" }}>
                <img src={coachesImages[coach.imageName]} alt="" />
                <div>{coach.title}</div>
                <div>{coach.jobtitle}</div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
