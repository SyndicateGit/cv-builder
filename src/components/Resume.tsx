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
  if(list.length === 0){
    return <></>
  }
  return(
    <>
    <div className='education-output output'>
          <h3 className='h3'>Education</h3>
          <hr/>
          <div className='education-list'>
          {
        list.map((education) => {
            return (
              <>
              
              <div className="resume-item">
                <div className='resume-item-left'>
                  <div className='resume-item-left'>
                  <p className='bold p'>{education.school}</p>
                  </div>
                  <div className='resume-item-bottom-left'>
                  <i className='i'>{education.degree}</i>
                  </div>
                  
                </div>
                <div className='resume-item-right'>
                  <div className='resume-item-top-right'>
                    <p className='p'>{education.city + " " + education.province}</p>
                  </div>
                  <div className='resume-item-bottom-right'>            
                  <i className='i'>{convertDate(education.startDate) + " - " +convertDate(education.endDate)}
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
  if(list.length === 0){
    return <></>
  }
  return(
    <>
      <div className='experience-output output'>
        <h3 className='h3'>Experience</h3>
        <hr/>
        {
        list.map((experience) => {
          let description = experience.description;
          let descriptionList = description.split('.');
          // Removes empty string element from end of list.
          if(descriptionList[descriptionList.length - 1] === ''){
            descriptionList.pop();
          }
          const descriptionListItems = descriptionList.map((sentnce:string)=>{return <li><span className='span'>{sentnce}</span></li>});
            return (
              <>
              <div className='experience-list'>
              <div className="resume-item">
                <div className='resume-item-left'>
                  <div className='resume-item-top-left'>
                  <p className='bold p'>{experience.jobTitle}</p>
                  </div>
                  <div className='resume-item-bottom-left'>
                  <i className='i'>{experience.company}</i>
                  </div>
                  
                </div>
                <div className='resume-item-right'>
                  <div className='resume-item-top-right'>
                    <p className='p'>{experience.city + " " + experience.province}</p>
                  </div>
                  <div className='resume-item-bottom-right'>            
                  <i className='i'>{convertDate(experience.startDate) + " - " +convertDate(experience.endDate)}
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
  //Conditionally have | dividers based on which info are filled
  const divide3 = props.basicInfo.githubLink === '' || (props.basicInfo.linkedInLink === '' && props.basicInfo.phoneNumber === '' && props.basicInfo.email === '') ? '': ' | ';
  const divide1 = props.basicInfo.email === '' || props.basicInfo.phoneNumber === '' ? '':' | ';
  const divide2 = props.basicInfo.linkedInLink === '' || (props.basicInfo.email === '' && props.basicInfo.phoneNumber === '') ? '':' | ';

  const resumeStyles = {
    width: '685px',
    height: '931px'
  }
  return (
    <>
      <div id='resume' style={resumeStyles}>
        <div className='resume'>
          <div className='basic-info-output output'>
            <h1 className='h1'>{props.basicInfo.fullName}</h1>
            <div className='contact-info'>
              <p className='contact p'>{props.basicInfo.phoneNumber + " " + divide1 + props.basicInfo.email + " " + divide2 + props.basicInfo.linkedInLink + " " + divide3 + props.basicInfo.githubLink}</p>
            </div>
          </div>
          
            <EducationList list={list}
            />
            
          <ExperienceList list={expList}/>
        </div>
        
        
      </div>
    </>
  )
}