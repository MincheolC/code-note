import React, { useState } from 'react'

interface CInputFormProps {
  onSubmit: (e: React.FormEvent) => void;
}

const CInputForm: React.FC<CInputFormProps> = ({ onSubmit }) => {
  const [text, setText] = useState<string>('');
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value);

  return (
    <form onSubmit={onSubmit}>
      <input value={text} onChange={onChange} />
      <button type='submit'>저장</button>
    </form>
  )
}

export default CInputForm