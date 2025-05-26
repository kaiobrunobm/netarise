'use client'
import Input from './Input';
import React, { useState } from 'react';
import Textfield from './Textfield';
import LargeButton from '../buttons/LargeButton';
import { useForm, ValidationError } from '@formspree/react';


const ContactForm: React.FC = () => {


  const [state, handleSubmit] = useForm('xldbyadq');
  const [formStatus, setFormStatus] = useState('')

  const [nameState, setNameState] = useState('');
  const [surnameState, setSurnameState] = useState('');
  const [emailState, setEmailState] = useState('');
  const [phoneState, setPhoneState] = useState('');
  const [messageState, setMessageState] = useState('');

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameState(e.target.value);
  }

  const handleChangeSurname = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSurnameState(e.target.value);
  }

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailState(e.target.value);
  }

  const handleChangePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneState(e.target.value);
  }

  const handleChangeMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessageState(e.target.value);
  }

  if (state.succeeded) {
    return (
      <p>Done!</p>
    )
  }

  return (
    <form className='w-full px-8 md:flex md:justify-center md:items-center' onSubmit={handleSubmit}>
      <div className='w-full flex flex-col gap-5 md:w-2/3'>
        <div className='flex flex-col gap-4 md:flex-row'>
          <input className='bg-gray-50 border border-gray-300 text-[#212740] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-6 py-4 text-xl' type='text' value={nameState} onChange={handleChangeName} placeholder='Nome' id='name' name='name' />
          <input className='bg-gray-50 border border-gray-300 text-[#212740] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-6 py-4 text-xl' type='text' value={surnameState} onChange={handleChangeSurname} placeholder='Sobrenome' id='surname' name='surname' />
        </div>
        <input className='bg-gray-50 border border-gray-300 text-[#212740] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-6 py-4 text-xl' type='email' value={emailState} onChange={handleChangeEmail} placeholder='Email' id='email' name='email' />
        <input className='bg-gray-50 border border-gray-300 text-[#212740] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-6 py-4 text-xl md:w-1/2' type='tel' value={phoneState} onChange={handleChangePhone} placeholder='Telefone' id='phone' name='phone' />
        <textarea rows={4} className="bg-gray-50 border border-gray-300 text-[#212740] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-44 px-6 py-4 text-xl" value={messageState} onChange={handleChangeMessage} placeholder='Mensagem' id='message' name='message' />
        <div className='flex flex-row gap-3 justify-start items-center'>
          <input type='checkbox' id='checkbox' className='w-6 h-6' />
          <label htmlFor='checkbox'>Aceito receber novidades, ofertas e conteúdos promocionais por e-mail.</label>
        </div>
        <LargeButton text='Enviar' type='submit' disabled={state.submitting}/>
      </div>
    </form>
  )
}

export default ContactForm