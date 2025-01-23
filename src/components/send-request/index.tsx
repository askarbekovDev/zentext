'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import React, { useState } from 'react';
import styles from './index.module.scss';

const schema = z.object({
  fullName: z
    .string()
    .nonempty('ФИО не может быть пустым')
    .max(44, 'Максимум 44 символа'),
  phoneNumber: z.string().nonempty('Номер не может быть пустым'),
  description: z
    .string()
    .nonempty(
      'Напишите продукцию, которую вы ищете, включая основные характеристики и количество.'
    ),
});
type FormData = z.infer<typeof schema>;

const countries = [
  { code: '+996', name: 'Kyrgyzstan', flag: '🇰🇬' },
  { code: '+1', name: 'United States', flag: '🇺🇸' },
  { code: '+44', name: 'United Kingdom', flag: '🇬🇧' },
  { code: '+7', name: 'Russia', flag: '🇷🇺' },
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

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFocus = (fieldName: keyof FormData) => {
    clearErrors(fieldName);
  };

  return (
    <form className={styles.content}>
      <input
        className={styles.fullName}
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
        <input
          className={styles.countryCode}
          type="tel"
          key="phoneNumber"
          {...register('phoneNumber')}
          value={errors['phoneNumber']?.message || data['phoneNumber']}
          placeholder="Введите ФИО"
          onChange={changeHandler}
          onFocus={() => handleFocus('fullName')}
          autoFocus={false}
        />
      </div>
    </form>
  );
};

export default SendRequest;
