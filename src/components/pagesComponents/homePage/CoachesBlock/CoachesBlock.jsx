import React from "react";

import coachesData from "../../../../api/coaches.json";
import { swiperConfig } from "../../../../lib";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
import { CoachItem } from "./components";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import styles from "./CoachesBlock.module.scss";

export const CoachesBlock = () => {
  return (
    <section id="coaches" className={styles.coaches}>
      <div className="container">
        <h2 className={styles.title}>Профессиональные тренеры</h2>
        <Swiper
          className={styles.slider}
          modules={[Navigation, Scrollbar]}
          {...swiperConfig}
        >
          {coachesData.map((coach) => (
            <SwiperSlide key={coach.id} className={styles.slide}>
              <CoachItem coach={coach} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
