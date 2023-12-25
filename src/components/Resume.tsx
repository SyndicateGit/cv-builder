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

type experience = {
  jobTitle: string;
  company: string;
  city: string;
  province: string;
  startDate: string;
  endDate: string;
  description: string;
  id: string;
}

type props = {
  basicInfo: basicInfo
  educationList: education[] // TODO Fix Typing
}

var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function convertDate(date:string){
  const temp_date = date.split("-");
  return months[Number(temp_date[1]) - 1] + " " + temp_date[0];
}

const EducationList: React.FC<{list:education[]}> = ({list}) => {
  if(!list){
    return <div></div>
  }
  return(
    <>
      {
        list.map((education) => {
            return (
              <>
              <div className="resume-education-item">
                <div className='education-left'>
                  <div className='education-top-left'>
                  <p className='bold'>{education.school}</p>
                  </div>
                  <div className='education-bottom-right'>
                  <i>{education.degree}</i>
                  </div>
                  
                </div>
                <div className='education-right'>
                  <div className='education-top-right'>
                    <p>{education.city + " " + education.province}</p>
                  </div>
                  <div className='education-bottom-right'>            
                  <i>{convertDate(education.startDate) + " - " +convertDate(education.endDate)}
                  </i>
                  </div>
                </div>
              </div>
            
            </>
            )
        })
      }
    </>
  );
}

//TODO: Finish Experience List rendering on Resume
//TODO: Convert sentences to bullet points function
const ExperienceList: React.FC<{list:experience[]}> = ({list}) => {
  if(!list){
    return <div></div>
  }
  return(
    <>
      {
        list.map((experience) => {
            return (
              <>

              </>
            )
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
            <p className='contact'>{props.basicInfo.phoneNumber}</p>
            <p>|</p>
            <p className='contact'>{props.basicInfo.email}</p>
            <p>|</p>
            <p className='contact'>{props.basicInfo.linkedInLink}</p>
            <p>|</p>
            <p className='contact'>{props.basicInfo.githubLink}</p>
          </div>
        </div>
        <div className='education-output'>
          <h3>Education</h3>
          <hr/>
          <div className='education-list'>
          <EducationList list={list}
          />
          </div>
        </div>
        <div className='experience-output'>

        </div>
      </div>
    </>
  )
}