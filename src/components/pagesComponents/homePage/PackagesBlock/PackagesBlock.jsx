import { Button } from "../../../UIComponents/Button";
import styles from "./PackagesBlock.module.scss";

export const PackagesBlock = () => {
  return (
    <section className={styles.packages}>
      <div className="container">
        <h2 className={styles.title}>Выберите нужный пакет</h2>
        <div className={styles.wrapper}>
          <div className={styles.item}>
            <div className={styles.itemTitle}>
              <b>PRO</b>
            </div>
            <div className={styles.price}>
              <b>20.000 ₽</b>
            </div>
            <div className={styles.description}>
              УМК по робототехнике и программированию
            </div>
            <Button
              variant={styles.button__white}
              additionalClassname={styles.button}
            >
              Оставить заявку
            </Button>
          </div>
          <div className={styles.item}>
            <div className={styles.itemTitle}>
              <b>ROBO</b>
            </div>
            <div className={styles.price}>
              <b>15.000 ₽</b>
            </div>
            <div className={styles.description}>УМК по робототехнике</div>
            <Button
              variant={styles.button__white}
              additionalClassname={styles.button}
            >
              Оставить заявку
            </Button>
          </div>
          <div className={styles.item}>
            <div className={styles.itemTitle}>
              <b>PROG</b>
            </div>
            <div className={styles.price}>
              <b>10.000 ₽</b>
            </div>
            <div className={styles.description}>УМК по программированию</div>
            <Button
              variant={styles.button__white}
              additionalClassname={styles.button}
            >
              Оставить заявку
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
