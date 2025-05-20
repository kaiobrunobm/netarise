import React from 'react'

interface TextfieldProps {
  label: string,
  value: string,
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void,
  error?: string,
  placeholder: string,
  id: string,
  className?: string,
}

const Textfield: React.FC<TextfieldProps> = ({ label, value, onChange, error, placeholder, id, className }) => {
  return (
    <div className={`${className} w-full`}>
      <textarea rows={4} value={value} onChange={onChange} id={id} className="bg-gray-50 border border-gray-300 text-[#212740] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-44 px-6 py-4 text-xl" placeholder={placeholder} required />
    </div>
  )
}

export default Textfield;