import { Button } from "../../../UIComponents/Button";
import { Input } from "../../../UIComponents/Input";
import styles from "./RegistrationBlock.module.scss";

export const RegistrationBlock = () => {
  return (
    <section className={styles.registration}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.text}>
            <div className={styles.title}>
              <b>Запишитесь на курс со скидкой 10%</b>
            </div>
            <div className={styles.description}>
              Акция действительна до 10 марта 2022 года
            </div>
          </div>
          <form className={styles.form} action="">
            <Input
              placeholder="Имя"
              type="text"
              additionalClassname={styles.input}
            />
            <Input
              placeholder="Телефон"
              type="tel"
              additionalClassname={styles.input}
            />
            <Input
              placeholder="E-mail"
              type="email"
              additionalClassname={styles.input}
            />
            <Button
              variant={styles.button__dark}
              additionalClassname={styles.button}
            >
              Оформить заявку
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
