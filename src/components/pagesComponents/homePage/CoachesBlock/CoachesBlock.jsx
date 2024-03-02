import React from "react";
import styles from "./CoachesBlock.module.scss";

import coachesData from "../../../../api/coaches.json";
import { coachesImages } from "../../../../assets/images";
import { Button } from "../../../UIComponents/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const CoachesBlock = () => {
  return (
    <section className={styles.coaches}>
      <div className="container">
        <h2>Профессиональные тренеры</h2>
        <Swiper
          className={styles.slider}
          modules={[Navigation, Scrollbar]}
          spaceBetween={40}
          slidesPerView={3}
          navigation
          freeMode
          scrollbar={{ draggable: true }}
        >
          {coachesData.map((coach) => {
            return (
              <SwiperSlide key={coach.id}>
                <div className={styles.item}>
                  <img
                    className={styles.photo}
                    src={coachesImages[coach.imageName]}
                    alt={coach.title}
                  />
                  <div className={styles.title}>{coach.title}</div>
                  <div className={styles.jobtitle}>{coach.jobtitle}</div>
                  <Button variant="link" additionalClassname={styles.button}>
                    Подробнее
                  </Button>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};
