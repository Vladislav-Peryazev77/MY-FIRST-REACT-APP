import React, { useState } from "react";
import { Button } from "../../../../../UIComponents/Button";

import styles from "./CoachModalContent.module.scss";
import { coachesImages } from "../../../../../../assets/images";
import { CoachTabContent } from "./components";
import { Dropdown } from "../../../../../UIComponents/Dropdown";

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
  const [activeTab, setActiveTab] = useState("education");

  const createButtonClassName = (value) => {
    return `${styles.tabButton} ${activeTab === value ? styles.activeTab : ""}`;
  };

  const changeActiveTab = (tab) => {
    setActiveTab(tab);
  };

  const values = [
    { title: "Образование", value: "education" },
    { title: "Опыт работы", value: "experience" },
    { title: "Награды", value: "achievements" },
  ];

  return (
    <div className={styles.modalContent}>
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
        {values.map((tab) => {
          return (
            <div key={tab.value} className={styles.tabWrapper}>
              <div className={styles.tab}>
                <Button
                  additionalClassname={createButtonClassName(tab.value)}
                  variant="link"
                  onClick={() => setActiveTab(tab.value)}
                >
                  {tab.title}
                </Button>
              </div>
            </div>
          );
        })}
      </div>
      <Dropdown
        values={values}
        value={activeTab}
        additionalClassname={styles.dropdown}
        onSelect={changeActiveTab}
      />
      <div className={styles.tabContent}>
        <div className={styles.tabText}>
          <div className={styles.description}>
            {activeTab === "education" && <CoachTabContent arr={education} />}
            {activeTab === "experience" && <CoachTabContent arr={experience} />}
            {activeTab === "achievements" && (
              <CoachTabContent arr={achievements} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
