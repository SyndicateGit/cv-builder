import * as React from 'react';
import InputGroup from './InputGroup';
import '../styles/TemplateLoader.css';

type props = {
  onLoadDefault:() => void;
  onClear: () => void;
}

export default function TemplateLoader({onLoadDefault, onClear}:props){

  return (
    <>
      <div className='template-loader'>
        <button className='load-default' onClick={onLoadDefault}>
          Load Example
        </button>
        <button className='clear-default' onClick={onClear}>
          Clear Template
        </button>
      </div>
    </>
  )
}