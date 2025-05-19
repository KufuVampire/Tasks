import { Checkbox, Icon, RadioButton } from "@/components";
import { cn } from "@/utils";
import { useRef, useState } from "react";

import styles from "./styles.module.css";

export const Dropdown = ({ iconName, text, filters }) => {
  const [isOpen, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const { type, items } = filters;

  return (
    <li
      ref={dropdownRef}
      className={cn([styles.item], {
        [styles.active]: isOpen,
      })}
    >
      <button className={styles.btn} onClick={() => setOpen((prev) => !prev)}>
        <div className={styles.wrapper}>
          <Icon name={iconName} />
          <p className={styles.text}>{text}</p>
        </div>
        <Icon name="arrow-right" className={styles.icon} />
      </button>
      <ul
        className={cn([styles.dropdown__list], {
          [styles.active__list]: isOpen,
        })}
      >
        {items.map((el, i) => (
          <li key={i} className={styles.dropdown__item}>
            {type === "checkbox" ||
            (i === items.length - 1 && type === "mix") ? (
              <Checkbox text={el} />
            ) : (
              <RadioButton text={el} name={text} />
            )}
          </li>
        ))}
      </ul>
    </li>
  );
};
