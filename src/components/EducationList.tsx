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

const RenderEducationList: React.FC<{list:education[]}> = ({list}) => {
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