'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import React, { useState } from 'react';
import styles from './index.module.scss';

const schema = z.object({
  fullName: z
    .string()
    .nonempty('Пожалуйста, введите ваше ФИО')
    .max(44, 'Максимум 44 символа'),
  phoneNumber: z.string().nonempty('Введите номер'),
  description: z
    .string()
    .nonempty(
      'Напишите продукцию, которую вы ищете, включая основные характеристики и количество.'
    ),
});

type FormData = z.infer<typeof schema>;

const countries = [
  { code: '+996', flag: '🇰🇬' },
  { code: '+1', flag: '🇺🇸' },
  { code: '+44', flag: '🇬🇧' },
  { code: '+7', flag: '🇷🇺' },
];

const SendRequest = () => {
  const [data, setData] = useState<FormData>({
    fullName: '',
    phoneNumber: '',
    description: '',
  });

  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: 'onSubmit',
    shouldFocusError: false,
    shouldUseNativeValidation: false,
  });

  const onSubmit = (data: FormData) => {
    console.log('Valid form data:', data);
  };

  const changeHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFocus = (fieldName: keyof FormData) => {
    clearErrors(fieldName);
  };

  return (
    <form className={styles.content} onSubmit={handleSubmit(onSubmit)}>
      <input
        className={`${styles.fullName} ${errors.fullName ? styles.inputError : ''}`}
        type="text"
        key="fullName"
        {...register('fullName')}
        value={errors['fullName']?.message || data['fullName']}
        placeholder="Введите ФИО"
        onChange={changeHandler}
        onFocus={() => handleFocus('fullName')}
        autoFocus={false}
      />
      <div className={styles.phoneNumberWrap}>
        <div className={styles.code}>
          <select className={styles.phoneNumberCode}>
            {countries.map((country, idx) => (
              <option key={idx} value={country.code}>
                {country.flag} {country.code}
              </option>
            ))}
          </select>
        </div>
        <input
          className={`${styles.phoneNumber} ${errors.phoneNumber ? styles.inputError : ''}`}
          type="number"
          {...register('phoneNumber')}
          value={errors['phoneNumber']?.message || data['phoneNumber']}
          placeholder="707 707 707"
          onChange={changeHandler}
          onFocus={() => handleFocus('phoneNumber')}
          autoFocus={false}
        />
      </div>

      <textarea
        className={`${styles.description} ${errors.description ? styles.inputError : ''}`}
        {...register('description')}
        value={errors['description']?.message || data['description']}
        placeholder="Напишите продукцию, которую вы ищете, включая основные характеристики и количество."
        onChange={changeHandler}
        onFocus={() => handleFocus('description')}
        autoFocus={false}
      ></textarea>
      <button
        className={styles.btn}
        type="submit"
      >
        Отправить заявку
      </button>
    </form>
  );
};

export default SendRequest;
