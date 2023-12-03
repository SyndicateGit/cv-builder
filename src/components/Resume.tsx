import * as React from 'react';
import '../styles/Resume.css';

type basicInfo = {
  fullName: string,
  email: string,
  phoneNumber: string,
  linkedInLink: string,
  githubLink: string
}

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
  basicInfo: basicInfo
  educationList: education[] // TODO Fix Typing
}


const EducationList: React.FC<{list:education[]}> = ({list}) => {
  // TODO: Figure out why <EducationList> wants list function method implementation. Find a workaround.
  if(!list){
    return <div></div>
  }
  return(
    <>
      {
        list.map((education) => {
            return <div key={education.id}>{education.school}</div>
        })
      }
    </>
  );
}

export default function Resume(props:props){ //TODO: Define props type
  const list = props.educationList;

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
        <div className='education-output'>
          <h2>Education</h2>
          <div className='education-list'>
          <EducationList list={list}
          />
          </div>
        </div>
      </div>
    </>
  )
}