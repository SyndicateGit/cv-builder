import * as React from 'react';
import '../styles/InputGroup.css';

type props = {
  onChange:(e:any) => void; //TODO: Fix event type
  type: string;
  id: string;
  labelText: string;
  placeholder: string;
  value: string;
  dataKey: string; // Coresponds to basicInfo object key for state changes in App.tsx.
}

export default function InputGroup({onChange, type, id, labelText, placeholder, value, dataKey}:props){

  return (
    <>
      <div className="input-group">
        <label htmlFor={id}>
          <span className="label-text">{labelText}</span>
        </label>
        <input 
          type={type}
          id={id}
          placeholder={placeholder}
          onChange={onChange}
          value={value} 
          data-key={dataKey}
          required
        />
      </div>
    </>
  )
}