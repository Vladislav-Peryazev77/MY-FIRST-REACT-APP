import { Button } from "../../../UIComponents/Button";
import styles from "./PromoBlock.module.scss";

export const PromoBlock = () => {
  return (
    <section className={styles.promo}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.text}>
            <h1 className={styles.title}>ROBO SCHOOL</h1>
            <div className={styles.subtitle}>
              Курсы повышения квалификации по робототехнике для педагогов
              начальной школы
            </div>
          </div>
          <Button additionalClassname={styles.button}>
            Записаться на курс
          </Button>
          <img
            className={styles.img}
            src="src/assets/images/promo-girl.png"
            alt="promo girl"
          />
        </div>
      </div>
    </section>
  );
};
