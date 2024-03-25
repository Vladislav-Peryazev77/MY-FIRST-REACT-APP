import { useForm } from 'react-hook-form';

import { Button } from '../../../UIComponents/Button';
import { Input } from '../../../UIComponents/Input';
import styles from './RegistrationBlock.module.scss';

export const RegistrationBlock = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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
          <form
            className={styles.form}
            onSubmit={handleSubmit((data) => {
              console.log(data);
            })}
          >
            <Input
              placeholder="Имя"
              type="text"
              additionalClassname={styles.input}
              register={{
                ...register('name', {
                  pattern: {
                    value: /^[А-Я][а-я]{1,19}$/,
                    message:
                      'Введите имя кирилицей, длина более одного и менее 19и символов',
                  },
                  required: 'Обязательное поле',
                }),
              }}
            />
            <p>{errors.name?.message}</p>
            <Input
              placeholder="Телефон"
              type="tel"
              additionalClassname={styles.input}
              register={{
                ...register('number', {
                  pattern: {
                    value: /^(7|8)9\d{9}$/,
                    message:
                      'Введите номер телефона в формате 88005553535 или 79537885679',
                  },
                  required: 'Обязательное поле',
                }),
              }}
            />
            <p>{errors.number?.message}</p>
            <Input
              placeholder="E-mail"
              type="email"
              additionalClassname={styles.input}
              register={{
                ...register('email', {
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: 'Введите почту в формате ivan@mail.ru',
                  },
                  required: 'Обязательное поле',
                }),
              }}
            />
            <p>{errors.email?.message}</p>
            <Button
              variant="dark"
              type="submit"
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
