import * as React from 'react';
import '../styles/EducationList.css';
import Icon from '@mdi/react';
import { mdiPlaylistEdit } from '@mdi/js';

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

const RenderEducationList: React.FC<{list:education[]}> = ({list}) => {
  // TODO: Figure out why <EducationList> wants list function method implementation. Find a workaround.
  if(!list){
    return <div></div>
  }
  return(
    <>
      {
        list.map((education) => {
            return (
              <>
              <div className='education-list'>
                <div className='education-details'>
                <p className='degree'>
                  {education.degree}
                </p>
                <p className='school'>
                  {education.school}
                </p>
                <p className='city-province'>{education.city}, {education.province}</p>
                <p className='dates'>
                  {education.startDate} - {education.endDate}
                </p>
                </div>

                <button type='button'>
                  <Icon 
                  path={mdiPlaylistEdit}
                  size={1}/>
                  <span>Edit</span>
                </button>
              </div>
              
              </>
            )
           
        })
      }
    </>
  );
}


//TODO: Implement EducationList Component
export default function EducationList(props:props){

  return (
    <>
      <div className='education-list'>
        <RenderEducationList 
        list={props.educationList}        
        />
      </div>
    </>
  )
}