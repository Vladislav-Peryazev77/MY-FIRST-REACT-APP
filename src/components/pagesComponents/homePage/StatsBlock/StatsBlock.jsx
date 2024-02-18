import styles from "./StatsBlock.module.scss";

export const StatsBlock = () => {
  return (
    <section id="stats" className={styles.stats}>
      <div className="container">
        <div className={styles.text}>
          <b>Robo School</b> – учреждение для формирования кадрового
          педагогического резерва в сфере робототехник и программирования
        </div>
        <div className={styles.wrapper}>
          <div className={styles.item}>
            <div className={styles.number}>
              <b>10</b>
            </div>
            <div className={styles.desription}>
              УМК по различным <br />
              направлениям по робототехнике
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.number}>
              <b>20</b>
            </div>
            <div className={styles.desription}>
              Школ, в которых запущена <br />
              робототехника
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.number}>
              <b>100</b>
            </div>
            <div className={styles.desription}>
              Педагогов прошедших курсы <br />
              повышения квалификации
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.number}>
              <b>10&nbsp;000</b>
            </div>
            <div className={styles.desription}>
              Обученных детей на базе <br />
              собственных центров
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
