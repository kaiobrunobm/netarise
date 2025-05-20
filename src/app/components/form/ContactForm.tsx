'use client'
import Input from './Input';
import React, { useState } from 'react';
import Textfield from './Textfield';
import LargeButton from '../buttons/LargeButton';


const ContactForm: React.FC = () => {

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


  return (
    <form className='w-full px-8 md:flex md:justify-center md:items-center' >
      <div className='w-full flex flex-col gap-5 md:w-2/3'>
        <div className='flex flex-col gap-4 md:flex-row'>
          <Input label='Nome' type='text' value={nameState} onChange={handleChangeName} error='' placeholder='Nome' id='name' />
          <Input label='Sobrenome' type='text' value={surnameState} onChange={handleChangeSurname} error='' placeholder='Sobrenome' id='surname' />
        </div>
        <Input label='Email' type='email' value={emailState} onChange={handleChangeEmail} error='' placeholder='Email' id='email' />
        <Input label='Telefone' type='tel' value={phoneState} onChange={handleChangePhone} error='' placeholder='Telefone' id='phone' className='md:w-1/2' />
        <Textfield label='Sua mensagem' value={messageState} onChange={handleChangeMessage} error='' placeholder='Mensagem' id='message' />
        <div className='flex flex-row gap-3 justify-start items-center'>
          <input type='checkbox' id='checkbox' className='w-6 h-6' />
          <label htmlFor='checkbox'>Aceito receber novidades, ofertas e conteúdos promocionais por e-mail.</label>
        </div>
        <LargeButton text='Enviar' />
      </div>
    </form>
  )
}

export default ContactForm