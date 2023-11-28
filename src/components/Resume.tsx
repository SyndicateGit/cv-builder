import * as React from 'react';
import '../styles/Resume.css';

type props = {
  basicInfo:{
    fullName: string,
    email: string,
    phoneNumber: string,
    linkedInLink: string,
    githubLink: string
  }
}

export default function Resume(props:props){ //TODO: Define props type

  return (
    <>
      <div className='resume'>
        <div className='basic-info-output'>
          <h1>{props.basicInfo.fullName}</h1>
          <div className='contact-info'>
            <span className='contact'>{props.basicInfo.phoneNumber}</span>
            <span className='contact'>{props.basicInfo.email}</span>
            <span className='contact'>{props.basicInfo.linkedInLink}</span>
            <span className='contact'>{props.basicInfo.githubLink}</span>
          </div>
        </div>
      </div>
    </>
  )
}