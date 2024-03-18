import React, { useState } from "react";
import { Button } from "../../../../../UIComponents/Button";

import styles from "./CoachModalContent.module.scss";
import { coachesImages } from "../../../../../../assets/images";
import { CoachTabContent } from "./components";

export const CoachModalContent = ({
  coach: {
    title,
    jobtitle,
    imageName,
    education,
    experience,
    achievements,
    links,
  },
}) => {
  const [activeTab, setActiveTab] = useState("1");

  const createButtonClassName = (id) => {
    return `${styles.tabButton} ${activeTab === id ? styles.activeTab : ""}`;
  };

  const modalTabData = [
    {
      id: "1",
      title: "Образование",
    },
    {
      id: "2",
      title: "Опыт работы",
    },
    {
      id: "3",
      title: "Награды",
    },
  ];

  return (
    <>
      <div className={styles.profile}>
        <img
          className={styles.img}
          src={coachesImages[imageName]}
          alt={title}
        />
        <div className={styles.content}>
          <div className={styles.info}>
            <div className={styles.name}>
              <b>{title}</b>
            </div>
            <div className={styles.jobtitle}>{jobtitle}</div>
            <div className={styles.links}>
              {links.map((item) => {
                return (
                  <a key={item.href} className={styles.link} href={item.href}>
                    <img className={styles.icon} src={item.imagePath} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.tabs}>
        {modalTabData.map((tab) => {
          return (
            <div key={tab.id} className={styles.tabWrapper}>
              <div className={styles.tab}>
                <Button
                  additionalClassname={createButtonClassName(tab.id)}
                  variant="link"
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.title}
                </Button>
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.tabContent}>
        <div className={styles.tabText}>
          <div className={styles.description}>
            {activeTab === "1" && <CoachTabContent arr={education} />}
            {activeTab === "2" && <CoachTabContent arr={experience} />}
            {activeTab === "3" && <CoachTabContent arr={achievements} />}
          </div>
        </div>
      </div>
    </>
  );
};
