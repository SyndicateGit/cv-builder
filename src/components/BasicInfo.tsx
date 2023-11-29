import * as React from 'react';
import InputGroup from './InputGroup';
import '../styles/BasicInfo.css';

type props = {
  onChange:(e:any) => void; //TODO: Fix event type
  fullName: string;
  email: string;
  phoneNumber: string;
  linkedInLink: string;
  githubLink: string;
}

export default function BasicInfo(props:props){

  return (
    <>
      <form action="" className='basic-info'>
        <h2>General Information</h2>
        <div className='input-field'>
        <InputGroup 
          onChange={props.onChange}
          type='text'
          id='full-name'
          labelText='Full name'
          placeholder='First and last name'
          value={props.fullName}
          dataKey='fullName'
        />
        <InputGroup
          onChange={props.onChange}
          type='email'
          id={'email'} 
          labelText='Email'
          placeholder='email@address.com'
          value={props.email}
          dataKey='email'        
        />
        <InputGroup
          onChange={props.onChange}
          type='tel'
          id={'phone-number'} 
          labelText='Phone Number'
          placeholder='(123) 456-7890'
          value={props.phoneNumber}
          dataKey='phoneNumber'        
        />
        <InputGroup
          onChange={props.onChange}
          type='url'
          id={'linkedin-link'} 
          labelText='LinkedIn'
          placeholder='linkedin.com/in/UserName'
          value={props.linkedInLink}
          dataKey='linkedInLink'        
        />
        <InputGroup
          onChange={props.onChange}
          type='url'
          id={'github-link'} 
          labelText='Github'
          placeholder='github.com/UserName'
          value={props.githubLink}
          dataKey='githubLink'        
        />
        </div>
        
      </form>
    </>
  )
}