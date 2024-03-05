import React from "react";
import styles from "./CoachesBlock.module.scss";

import coachesData from "../../../../api/coaches.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
import { CoachItem } from "./components";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const CoachesBlock = () => {
  return (
    <section id="coaches" className={styles.coaches}>
      <div className="container">
        <h2 className={styles.title}>Профессиональные тренеры</h2>
        <Swiper
          className={styles.slider}
          modules={[Navigation, Scrollbar]}
          spaceBetween={40}
          slidesPerView={3}
          navigation
          freeMode
          scrollbar={{ draggable: true }}
        >
          {coachesData.map((coach) => (
            <SwiperSlide key={coach.id}>
              <CoachItem coach={coach} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
