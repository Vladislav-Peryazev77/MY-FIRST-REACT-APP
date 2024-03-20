import React, { useRef, useState, useEffect } from "react";

import styles from "./Dropdown.module.scss";

export const Dropdown = ({ values, onSelect, value }) => {
  const [isShowMenu, setIsShowMenu] = useState(false);

  const createActiveTitle = () => {
    let foundValue = values.find((el) => el.value === value).title;

    return foundValue ? foundValue : "";
  };

  const handleMenuVisibilityChange = () => {
    setIsShowMenu(!isShowMenu);
  };

  const handleActiveTab = (tab) => {
    onSelect(tab);
    setIsShowMenu(!isShowMenu);
  };

  const menuRef = useRef();
  useEffect(() => {
    let handler = (event) => {
      if (!menuRef.current.contains(event.target)) {
        setIsShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <div className={styles.dropdown} ref={menuRef}>
      <div className={styles.select} onClick={handleMenuVisibilityChange}>
        <div className={styles.selected}>{createActiveTitle()}</div>
        <div className={styles.arrowWrapper}>
          <img
            className={styles.arrow}
            src="src/assets/icons/arrow-down-icon.svg"
          />
        </div>
      </div>
      {isShowMenu && (
        <ul className={styles.menu}>
          {values.map((item) => {
            return (
              <li
                key={item.value}
                onClick={() => handleActiveTab(item.value)}
                value={item.value}
                className={
                  createActiveTitle() === item.title
                    ? styles.activeDropdown
                    : ""
                }
              >
                {item.title}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
