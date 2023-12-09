import * as React from 'react';
import InputGroup from './InputGroup';
import '../styles/Education.css';
import Icon from '@mdi/react';
import { mdiArrowDownDropCircleOutline } from '@mdi/js';
import { mdiArrowUpDropCircleOutline } from '@mdi/js';
import { mdiContentSaveCheckOutline } from '@mdi/js';


type props = {
  onChange:(e:any) => void; //TODO: Fix event type
  degree: string;
  school: string;
  city: string;
  province: string;
  startDate: string;
  endDate: string;
  clear: () => void;
  addEducationList: () => void;
  handleDisplayDropdown: () => void;
  displayDropDown: {
    display: string,
    icon: string
  }; 
}

export default function Education(props:props){

  function addEducationList(){
    props.addEducationList();
    props.handleDisplayDropdown();
    props.clear();
  }

  let disabledButton = '';

  // Used to update both educations state and disabledButton upon form change
  // We only need one of the onChange functions to call this since change in props.education also rerenders the component that calls for updateStateandButton
  function updateStateAndButton(e: any){
    props.onChange(e)
    setDisabledButton();
  }

  function setDisabledButton(){
    if(props.city === '' || props.degree === '' || props.endDate === '' || props.province === '' || props.school === '' || props.startDate === ''){
      disabledButton = ' disabled';
    }
  }
  
  setDisabledButton();

  return (
    <>
      <form action="" className='education-info'>
        <div className='drop-down'>
          <h2>Education</h2>
          <button className="drop-down-button" 
          type="button"
          onClick={props.handleDisplayDropdown}>
            <Icon path={props.displayDropDown.icon}
            size={1}
            />
          </button>
          <div className={props.displayDropDown.display + " input-field"}>
            <InputGroup onChange={props.onChange} 
            type={'text'} 
            id={'degree'} 
            labelText={'Degree'} 
            placeholder={'Degree / Field of Study'} 
            value={props.degree} 
            dataKey={'degree'}/>
            <InputGroup onChange={props.onChange} 
            type={'text'} 
            id={'school'} 
            labelText={'School'} 
            placeholder={'School'} 
            value={props.school} 
            dataKey={'school'}/>
            <InputGroup onChange={props.onChange} 
            type={'text'} 
            id={'City'} 
            labelText={'City'} 
            placeholder={'City'} 
            value={props.city} 
            dataKey={'city'}/>
            <InputGroup onChange={updateStateAndButton} 
            type={'text'} 
            id={'province'} 
            labelText={'Province'} 
            placeholder={'Province'} 
            value={props.province} 
            dataKey={'province'}/>
            <InputGroup onChange={props.onChange} 
            type={'date'} 
            id={'start-date'} 
            labelText={'Start Date'} 
            placeholder={''} 
            value={props.startDate} 
            dataKey={'startDate'}/>
            <InputGroup onChange={props.onChange} 
            type={'date'} 
            id={'end-date'} 
            labelText={'End Date'} 
            placeholder={'End Date'} 
            value={props.endDate} 
            dataKey={'endDate'}/>
            <button onClick={addEducationList} type='button' className={'submit-button' + disabledButton}>
              <Icon path={mdiContentSaveCheckOutline} size={1} />
              <span className='Add'>Add</span>
            </button>
            <button onClick={props.clear} type='button' className= "clear-button">
              <Icon path={mdiContentSaveCheckOutline} size={1} />
              <span className='clear'>Clear</span>
            </button>
          </div>
        </div>
      </form>
    </>
  )
}