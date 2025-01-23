'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import GoogleIcon from '../../../../../public/icons/Google'
import { useRegistrationMutation } from '../../api'
import { REGISTRATION_FORM_INPUTS } from '../../constants'
import styles from './RegistrationForm.module.scss'

const schema = z.object({
 username: z.string().nonempty('ФИО не может быть пустым').max(44, 'Максимум 44 символов'),
 phoneNumber: z.string().nonempty('Номер не может быть пустым').regex(/^\+996\d{9}$/, 'Введите корректный номер телефона'),
 email: z.string().nonempty('Email не может быть пустым').max(30, 'Максимум 30 символов'),
 password: z.string().nonempty('Пароль не может быть пустым').min(6, 'Пароль должен содержать не менее 6 символов'),
})
type FormData = z.infer<typeof schema>
export const RegistrationForm = () => {
 const [data, setData] = useState<FormData>({
  username: '',
  phoneNumber: '',
  email: '',
  password: '',
 })
 const role = useSearchParams().get('role') || ''
 const [registration, {}] = useRegistrationMutation()
 const { register, handleSubmit, clearErrors, formState: {errors} } = useForm<FormData>({
  resolver: zodResolver(schema),
  mode: 'onSubmit',
  shouldFocusError: false,
  shouldUseNativeValidation: false,
 })
 const submitHandler = async (data: FormData) => {
  try {
   const res = await registration({ ...data, role }).unwrap()
   console.log(res, 'response')
  } catch (error) {
   console.log(error, 'error')
  }
 }
 const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
  const { name, value } = event.target;
  setData(prev => ({ ...prev, [name]: value }))
 }
 const handleFocus = (fieldName: keyof FormData) => {
  clearErrors(fieldName)
 }

 return (
  <form
   className={styles.registrationForm}
   onSubmit={handleSubmit(submitHandler)}
   noValidate
  >
   <div className={styles.wrapper}>
    <h3 className={styles.registrationForm__title}>
     Создать аккаунт
    </h3>
    {REGISTRATION_FORM_INPUTS.map(
     ({ name, type, placeholder }) => (
      <input
       key={name}
       className={`${styles.registrationForm__input} ${errors[name] && styles.registrationForm__inputError}`}
       type={type}
       {...register(name)}
       name={name}
       value={errors[name]?.message || data[name]}
       placeholder={placeholder}
       onChange={changeHandler}
       onFocus={() => handleFocus(name)}
       autoFocus={false}
      />
     )
    )}
    <button
     className={styles.registrationForm__submit}
     type='submit'
     onClick={() => {}}
    >
     Зарегистрироваться
    </button>
    <div className={styles.registrationForm__line}>или</div>
    <button
     type='button'
     className={styles.registrationForm__googleSubmit}
    >
     <div>
      <GoogleIcon />
     </div>
     <span>Продолжить с Google</span>
    </button>
    <p className={styles.registrationForm__authentication}>
     <span>Уже есть аккаунт?</span>
     <Link href='/authentication'>Войдите</Link>
    </p>
   </div>
  </form>
 )
}