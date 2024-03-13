import React from "react";
import styles from "./ModalMenu.module.scss";
import { Button } from "../Button";

export const ModalMenu = ({
  src,
  alt,
  title,
  jobtitle,
  links,
  education,
  experience,
  achievements,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.backdrop}></div>
      <div className={styles.modal}>
        <div className={styles.profile}>
          <img
            className={styles.img}
            src="src/assets/images/coach-photo-for-slider2.png"
            alt={alt}
          />
          <div className={styles.content}>
            <div className={styles.info}>
              <div className={styles.name}>
                <b>Мария Орлова</b>
                {title}
              </div>
              <div className={styles.jobtitle}>
                преподаватель по робототехнике{jobtitle}
              </div>
              <div className={styles.links}>
                <a className={styles.link} href="">
                  <img
                    className={styles.icon}
                    src="src/assets/icons/facebook-icon.svg"
                    alt=""
                  />
                </a>
                <a className={styles.link} href="">
                  <img
                    className={styles.icon}
                    src="src/assets/icons/insta-icon.svg"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <Button additionalClassname={styles.closeButton} variant="link">
              Закрыть
            </Button>
            <button className={styles.closeButtonIcon}>
              <svg
                width="14"
                height="15"
                viewBox="0 0 14 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="1.49245"
                  y1="2"
                  x2="12.6"
                  y2="13.1075"
                  stroke="black"
                  stroke-width="2.11065"
                  stroke-linecap="round"
                />
                <line
                  x1="1.40039"
                  y1="13.1076"
                  x2="12.5079"
                  y2="2.0001"
                  stroke="black"
                  stroke-width="2.11065"
                  stroke-linecap="round"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className={styles.tabs}>
          <div className={styles.tabWrapper}>
            <div className={styles.tab}>
              <Button variant="link">Образование</Button>
            </div>
          </div>
          <div className={styles.tabWrapper}>
            <div className={styles.tab}>
              <Button variant="link">Опыт работы</Button>
            </div>
          </div>
          <div className={styles.tabWrapper}>
            <div className={styles.tab}>
              <Button variant="link">Награды</Button>
            </div>
          </div>
        </div>
        <div className={styles.tabContent}>
          <div className={styles.tabText}>
            <div className={styles.description}>
              Сентябрь 1995 — Июнь 2000 <br />
              Санкт-Петербургский политехнический университет Петра Великого{" "}
              <br />
              Факультет: Компьютерных наук и технологий
              <br />
              Специальность: Математика и компьютерные науки <br />
              Форма обучения: Очная
            </div>
            <h3 className={styles.tabTitle}>
              <b>Курсы и тренинги</b>
            </h3>
            <div className={styles.description}>
              Ноябрь 2020 — Февраль 2021 <br />
              Программа дополнительного образования «3D Моделирование»
              <br />
              Место проведения: Институт дополнительного образования «Политех»
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
