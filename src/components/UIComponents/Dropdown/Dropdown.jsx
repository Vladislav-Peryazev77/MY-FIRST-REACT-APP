import React, { useRef, useState } from "react";
import useOnClickOutside from "../../../hooks/useOnClickOutside";

import styles from "./Dropdown.module.scss";

export const Dropdown = ({ values, onSelect, value, additionalClassname }) => {
  const dropdownClassName = `${styles.dropdown} ${
    additionalClassname ? additionalClassname : ""
  }`;

  const [isShowMenu, setIsShowMenu] = useState(false);

  const handleMenuClose = () => {
    setIsShowMenu(false);
  };

  const handleMenuVisibilityChange = () => {
    setIsShowMenu((prevState) => !prevState);
  };

  const handleActiveElement = (element) => {
    onSelect(element);
    handleMenuClose();
  };

  const dropdownArrowClassName = `${styles.arrow} ${
    isShowMenu ? styles.arrowRotate : ""
  }`;

  const createActiveTitle = () => {
    let foundValue = values.find((element) => element.value === value);

    return foundValue.title ? foundValue.title : "";
  };

  const createDropdownElementClassname = (item) => {
    return createActiveTitle() === item.title ? styles.activeDropdown : "";
  };

  const ref = useRef();
  useOnClickOutside(ref, () => handleMenuClose());

  return (
    <div className={dropdownClassName} ref={ref}>
      <div className={styles.selected} onClick={handleMenuVisibilityChange}>
        <div className={styles.title}>{createActiveTitle()}</div>
        <div className={styles.arrowWrapper}>
          <img
            id="arrow"
            className={dropdownArrowClassName}
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
                className={createDropdownElementClassname(item)}
              >
                <div
                  onClick={() => handleActiveElement(item.value)}
                  value={item.value}
                >
                  {item.title}
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
