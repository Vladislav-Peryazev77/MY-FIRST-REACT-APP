import styles from "../CoachesBlock.module.scss";
import { coachesImages } from "../../../../../assets/images";
import { Button } from "../../../../UIComponents/Button";

export const CoachItem = ({ coach }) => {
  return (
    <div className={styles.item}>
      <img
        className={styles.photo}
        src={coachesImages[coach.imageName]}
        alt={coach.title}
      />
      <div className={styles.itemTitle}>{coach.title}</div>
      <div className={styles.jobtitle}>{coach.jobtitle}</div>
      <Button variant="link" additionalClassname={styles.button}>
        Подробнее
      </Button>
    </div>
  );
};
