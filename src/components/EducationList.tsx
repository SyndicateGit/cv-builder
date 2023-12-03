import * as React from 'react';
import '../styles/EducationList.css';

type education = {
  degree: string,
  school: string,
  city: string,
  province: string,
  startDate: string,
  endDate: string,
  id: string
}

type props = {
  educationList: education[]
}

//TODO: Implement EducationList Component
export default function EducationList(props:props){

  return (
    <>
      <div className='education-list'>

      </div>
    </>
  )
}