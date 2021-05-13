import React, { useState } from 'react'

interface CInputFormProps {
  onSubmit: (input: string) => void;
}

const CInputForm: React.FC<CInputFormProps> = (props) => {
  const [text, setText] = useState<string>('');
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value);
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    props.onSubmit(text);
    setText('');
  }

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor='todo'>할 일</label>
      <input name='todo' value={text} onChange={onChange} aria-label="todo"/>
      <button type='submit'>저장</button>
    </form>
  )
}

export default React.memo(CInputForm)