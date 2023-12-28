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
  experienceList: experience[]
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
    <div className='education-output output'>
          <h3>Education</h3>
          <hr/>
          <div className='education-list'>
          {
        list.map((education) => {
            return (
              <>
              
              <div className="resume-item">
                <div className='resume-item-left'>
                  <div className='resume-item-left'>
                  <p className='bold'>{education.school}</p>
                  </div>
                  <div className='resume-item-bottom-left'>
                  <i>{education.degree}</i>
                  </div>
                  
                </div>
                <div className='resume-item-right'>
                  <div className='resume-item-top-right'>
                    <p>{education.city + " " + education.province}</p>
                  </div>
                  <div className='resume-item-bottom-right'>            
                  <i>{convertDate(education.startDate) + " - " +convertDate(education.endDate)}
                  </i>
                  </div>
                </div>
              </div>
            
            </>
            )
        })
      }
          
          </div>
        </div>
      
    </>
  );
}

const ExperienceList: React.FC<{list:experience[]}> = ({list}) => {
  if(!list){
    return <div></div>
  }
  return(
    <>
      <div className='experience-output output'>
        <h3>Experience</h3>
        <hr/>
        {
        list.map((experience) => {
          let description = experience.description;
          let descriptionList = description.split('.');
          // Removes empty string element from end of list.
          if(descriptionList[descriptionList.length - 1] === ''){
            descriptionList.pop();
          }
          const descriptionListItems = descriptionList.map((sentnce:string)=>{return <li>{sentnce}</li>});
            return (
              <>
              <div className='experience-list'>
              <div className="resume-item">
                <div className='resume-item-left'>
                  <div className='resume-item-top-left'>
                  <p className='bold'>{experience.jobTitle}</p>
                  </div>
                  <div className='resume-item-bottom-left'>
                  <i>{experience.company}</i>
                  </div>
                  
                </div>
                <div className='resume-item-right'>
                  <div className='resume-item-top-right'>
                    <p>{experience.city + " " + experience.province}</p>
                  </div>
                  <div className='resume-item-bottom-right'>            
                  <i>{convertDate(experience.startDate) + " - " +convertDate(experience.endDate)}
                  </i>
                  </div>
                </div>
              </div>
              <div className='bullet-points'>
                {descriptionListItems}
              </div>
              </div>
            
              
              </>
            )
        })
      }
      </div>
      
    </>
  );
}

export default function Resume(props:props){ //TODO: Define props type
  const list = props.educationList;
  const expList = props.experienceList;
  return (
    <>
      <div className='resume'>
        <div className='basic-info-output output'>
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
        
          <EducationList list={list}
          />
          
        <ExperienceList list={expList}/>
        
      </div>
    </>
  )
}