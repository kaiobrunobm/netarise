import React from 'react'

interface InputProps {
  label: string,
  type: string,
  value: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  error?: string,
  placeholder: string,
  id: string,
  className?: string,
}

const Input: React.FC<InputProps> = ({ label, type, value, onChange, error, placeholder, id, className }) => {
  return (
    <div className={`${className} w-full`}>
      <input type={type} value={value} onChange={onChange} id={id} className="bg-gray-50 border border-gray-300 text-[#212740] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-6 py-4 text-xl" placeholder={placeholder} required />
    </div>
  )
}

export default Input;