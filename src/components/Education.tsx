import * as React from 'react';
import InputGroup from './InputGroup';
import '../styles/Education.css';
import Icon from '@mdi/react';
import { mdiArrowDownDropCircleOutline } from '@mdi/js';
import { mdiArrowUpDropCircleOutline } from '@mdi/js';


// type props = {
//   onChange:(e:any) => void; //TODO: Fix event type
//   fullName: string;
//   email: string;
//   phoneNumber: string;
//   linkedInLink: string;
//   githubLink: string;
// }

export default function Education(props:any){

  const displayEducationState = {
    display: 'hide',
    icon: mdiArrowDownDropCircleOutline
  }

  const [displayDropDown, setDisplayDropDown] = React.useState(displayEducationState);

  function handleDisplayDropDown(){
    setDisplayDropDown({
      display: displayDropDown.display === 'hide'? 'show':'hide',
      icon: displayDropDown.icon === mdiArrowDownDropCircleOutline ? mdiArrowUpDropCircleOutline: mdiArrowDownDropCircleOutline,
    });
  }

  return (
    <>
      <form action="" className='education-info'>
        <div className='drop-down'>
          <h2>Education</h2>
          <button className="drop-down-button" 
          type="button"
          onClick={handleDisplayDropDown}>
            <Icon path={displayDropDown.icon}
            size={1}
            />
          </button>
          <div className={displayDropDown.display}>
            <InputGroup onChange={function (e: any): void {
              throw new Error('Function not implemented.');
            } } type={''} id={''} labelText={''} placeholder={''} value={''} dataKey={''}/>
          </div>
        </div>

        
      </form>
    </>
  )
}