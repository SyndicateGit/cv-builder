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
                <div className='education-item'>
                  <div className='education-item-left'>
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
                  </div>
                  
                  <button 
                  type='button'
                  onClick={editEducationListItem}
                  id={'' + education.id}
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