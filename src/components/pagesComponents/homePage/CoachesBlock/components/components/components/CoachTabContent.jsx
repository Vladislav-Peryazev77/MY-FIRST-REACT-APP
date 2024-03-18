import React from "react";

import styles from "./CoachTabContent.module.scss";

export const CoachTabContent = ({ arr }) => {
  return (
    <>
      {arr.map((item, index) => {
        const hasTitle = item.hasOwnProperty("title");
        const entries = Object.entries(item);

        return (
          <div key={index}>
            {hasTitle && (
              <h3 key={item.title} className={styles.title}>
                <b>{item.title}</b>
              </h3>
            )}
            <div className={styles.text}>
              {entries.map(([key, value]) => {
                return key !== "title" ? <div key={value}>{value}</div> : null;
              })}
            </div>
          </div>
        );
      })}
    </>
  );
};
