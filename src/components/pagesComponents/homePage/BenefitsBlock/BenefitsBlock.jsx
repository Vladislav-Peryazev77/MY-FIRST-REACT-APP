import styles from "./BenefitsBlock.module.scss";

export const BenefitsBlock = () => {
  return (
    <section className={styles.benefits}>
      <div className="container">
        <h2 className={styles.title}>Что вы получите после курса</h2>
        <div className={styles.wrapper}>
          <div className={styles.item}>
            <h3 className={styles.itemTitle}>Удостоверение</h3>
            <div className={styles.description}>
              Дающее право преподавать робототехнику для детей 6-12 лет в
              образовательных учреждениях
            </div>
          </div>
          <div className={styles.item}>
            <h3 className={styles.itemTitle}>Знания</h3>
            <div className={styles.description}>
              По основам разработки учебно-методических комплексов по
              робототехнике и программированию
            </div>
          </div>
          <div className={styles.item}>
            <h3 className={styles.itemTitle}>Практику</h3>
            <div className={styles.description}>
              Возможность пройти практику по преподаванию робототехники на базе
              R:ED LAB (в оффлайн или онлайн формате)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
