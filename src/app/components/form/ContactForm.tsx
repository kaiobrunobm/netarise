'use client'
import React, { useState } from 'react';
import LargeButton from '../buttons/LargeButton';
import axios from 'axios';


const ContactForm: React.FC = () => {


  
  const [formStatus, setFormStatus] = useState('default')

  
  const [nameState, setNameState] = useState('');
  const [surnameState, setSurnameState] = useState('');
  const [emailState, setEmailState] = useState('');
  const [phoneState, setPhoneState] = useState('');
  const [messageState, setMessageState] = useState('');
  const [checkboxState, setCheckboxState] = useState(false);

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

  const handleChangeCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckboxState(e.target.checked);
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('sending');
    await new Promise(resolve => setTimeout(resolve, 1500));
    try {
      axios.post("https://formsubmit.co/netarisetech@gmail.com", {
          name: nameState,
          surname: surnameState,
          email: emailState,
          phone: phoneState,
          message: messageState,
          newsLetter: checkboxState,
      },
      { headers: {'Accept': 'application/json'}})
      .catch(error => console.log(error));

      setFormStatus('sent')
      setNameState('');
      setSurnameState('');
      setEmailState('');
      setPhoneState('');
      setMessageState('');
      setCheckboxState(false);
    } catch (error) {
      console.log(error);
      setFormStatus('error')
    } finally {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setFormStatus('default')
    }
  }
  return (
    <form className='w-full px-8 md:flex md:justify-center md:items-center' onSubmit={handleSubmit} method='POST'>
      <div className='w-full flex flex-col gap-5 md:w-2/3'>
        <div className='flex flex-col gap-4 md:flex-row'>
          <input className='bg-gray-50 border border-gray-300 text-[#212740] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-6 py-4 text-xl' type='text' value={nameState} onChange={handleChangeName} placeholder='Nome' id='name' name='name' required />
          <input className='bg-gray-50 border border-gray-300 text-[#212740] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-6 py-4 text-xl' type='text' value={surnameState} onChange={handleChangeSurname} placeholder='Sobrenome' id='surname' name='surname' />
        </div>
        <input className='bg-gray-50 border border-gray-300 text-[#212740] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-6 py-4 text-xl' type='email' value={emailState} onChange={handleChangeEmail} placeholder='Email' id='email' name='email' required />
        <input className='bg-gray-50 border border-gray-300 text-[#212740] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-6 py-4 text-xl md:w-1/2' type='tel' value={phoneState} onChange={handleChangePhone} placeholder='Telefone' id='phone' name='phone' />
        <textarea rows={4} className="bg-gray-50 border border-gray-300 text-[#212740] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-44 px-6 py-4 text-xl" value={messageState} onChange={handleChangeMessage} placeholder='Mensagem' id='message' name='message' required />
        <div className='flex flex-row gap-3 justify-start items-center'>
          <input type='checkbox' id='checkbox' className='w-6 h-6'  onChange={handleChangeCheckbox} checked={checkboxState} />
          <label htmlFor='checkbox'>Aceito receber novidades, ofertas e conteúdos promocionais por e-mail.</label>
        </div>
        <LargeButton text='Enviar' type='submit' formStatus={formStatus} />
      </div>
    </form>
  )
}

export default ContactForm
