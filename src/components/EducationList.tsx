import * as React from 'react';
import '../styles/EducationList.css';
import Icon from '@mdi/react';
import { mdiPlaylistEdit } from '@mdi/js';
import { editableInputTypes } from '@testing-library/user-event/dist/utils';

type education = {
  degree: string,
  school: string,
  city: string,
  province: string,
  startDate: string,
  endDate: string,
  id: number,
}

type props = {
  educationList: education[] ;
  editEducationListItem: (e:any) => any; //TODO Fix Type
}

//TODO: Fix Type
const RenderEducationList: React.FC<{list:education[], editEducationListItem: (e:any) => any}> = ({list, editEducationListItem}) => {
  if(!list){
    return <div></div>
  }
  return(
    <>
      {
        list.map((education) => {
            return (
              <>
              
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

                <button 
                type='button'
                onClick={editEducationListItem}
                id={'' + education.id}
                >
                  <Icon 
                  path={mdiPlaylistEdit}
                  size={1}/>
                  <span>Edit</span>
                </button>
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
        editEducationListItem={props.editEducationListItem}       
        />
      </div>
    </>
  )
}