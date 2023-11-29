import * as React from 'react';
import InputGroup from './InputGroup';
import '../styles/Education.css';
import Icon from '@mdi/react';
import { mdiArrowDownDropCircleOutline } from '@mdi/js';


// type props = {
//   onChange:(e:any) => void; //TODO: Fix event type
//   fullName: string;
//   email: string;
//   phoneNumber: string;
//   linkedInLink: string;
//   githubLink: string;
// }

export default function Education(props:any){
  const [displayDropDown, setDisplayDropDown] = React.useState('hide');

  function handleDisplayDropDown(){
    setDisplayDropDown(displayDropDown === "hide"? "show":"hide");
  }
  return (
    <>
      <form action="" className='education-info'>
        <div className='drop-down'>
          <h2>Education</h2>
          <button className="drop-down-button" 
          type="button"
          onClick={handleDisplayDropDown}>
            <Icon path={mdiArrowDownDropCircleOutline}
            size={1}
            />
          </button>
          <div className={displayDropDown}>
            <InputGroup onChange={function (e: any): void {
              throw new Error('Function not implemented.');
            } } type={''} id={''} labelText={''} placeholder={''} value={''} dataKey={''}/>
          </div>
        </div>

        
      </form>
    </>
  )
}