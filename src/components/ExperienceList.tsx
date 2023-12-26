import * as React from 'react';
import '../styles/EducationList.css';
import Icon from '@mdi/react';
import { mdiPlaylistEdit } from '@mdi/js';

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
  experienceList: experience[] ;
  editExperienceListItem: (e:any) => any; //TODO Fix Type
}

//TODO: Fix Type
const RenderExperienceList: React.FC<{list:experience[], editExperienceListItem: (e:any) => any}> = ({list, editExperienceListItem}) => {
  if(!list){
    return <div></div>
  }
  return(
    <>
      {
        list.map((experience) => {
            return (
              <>
                <div className='list-item'>
                  <div className='list-item-left'>
                    <div className='list-details'>
                    <p className='jobTitle'>
                      {experience.jobTitle}
                    </p>
                    <p className=''>
                      {experience.company}
                    </p>
                    <p className=''>
                      {experience.city},{experience.province}
                    </p>
                    <p className='dates'>{experience.startDate} - {experience.endDate}</p>
                    </div>
                  </div>
                  
                  <button 
                  type='button'
                  onClick={editExperienceListItem}
                  id={experience.id}
                  >
                    <Icon 
                    className='disable-pointer-event'
                    path={mdiPlaylistEdit}
                    size={1}/>
                    <span 
                    className='disable-pointer-event'>Edit</span>
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
export default function ExperienceList(props:props){

  return (
    <>
      <div className='education-list'>
        <RenderExperienceList 
        list={props.experienceList} 
        editExperienceListItem={props.editExperienceListItem}       
        />
      </div>
    </>
  )
}