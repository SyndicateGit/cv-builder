import * as React from 'react';
import InputGroup from './InputGroup';
import '../styles/Experience.css';
import Icon from '@mdi/react';
import { mdiContentSaveCheckOutline } from '@mdi/js';

/**
 * Experience Description will be broken down into period seperated sentences which will become the bullet points in the Resume.
 */

type props = {
  onChange:(e:any) => void; //TODO: Fix event type
  jobTitle: string;
  company: string;
  city: string;
  province: string;
  startDate: string;
  endDate: string;
  description: string;
  setExperience: any; //TODO: Fix type
  currentExperience: any; //TODO: Fix type
  clear: () => void;
  addExperienceList: () => void;
  handleDisplayDropdown: () => void;
  displayDropDown: {
    display: string,
    icon: string
  }; 
}

export default function Experience(props:props){
  return (
    <>
      <form action="" className='experience-info'>
        <div className='drop-down'>
          <h2>Experience</h2>
          <button className="drop-down-button" 
          type="button"
          onClick={props.handleDisplayDropdown}>
            <Icon path={props.displayDropDown.icon}
            size={1}
            />
          </button>
          <div className={props.displayDropDown.display + " input-field"}>
            <InputGroup 
            onChange={props.onChange} 
            type={'text'} 
            id={'jobTitle'} 
            labelText={'Job Title'} 
            placeholder={'Enter Job Title'} 
            value={props.jobTitle} 
            dataKey={'jobTitle'}
            />
            <InputGroup 
            onChange={props.onChange} 
            type={'text'} 
            id={'company'} 
            labelText={'Company'} 
            placeholder={'Enter Company'} 
            value={props.company} 
            dataKey={'company'}
            />
            <InputGroup 
            onChange={props.onChange} 
            type={'text'} 
            id={'city'} 
            labelText={'City'} 
            placeholder={'Enter city'} 
            value={props.city} 
            dataKey={'city'}
            />
            <InputGroup 
            onChange={props.onChange} 
            type={'text'} 
            id={'province'} 
            labelText={'Province'} 
            placeholder={'Enter Province'} 
            value={props.province} 
            dataKey={'province'}
            />
            <InputGroup 
            onChange={props.onChange} 
            type={'date'} 
            id={'startDate'} 
            labelText={'Start Date'} 
            placeholder={'Start Date'} 
            value={props.startDate} 
            dataKey={'startDate'}
            />
            <InputGroup 
            onChange={props.onChange} 
            type={'date'} 
            id={'endDate'} 
            labelText={'End Date'} 
            placeholder={'End Date'} 
            value={props.endDate} 
            dataKey={'endDate'}
            />
            <div className='input-group'>
              <label htmlFor="description">
                <span className='label-text'>Description</span>
              </label>
              <textarea onChange={e => props.setExperience({ ...props.currentExperience, ["description"]: e.target.value })} name="description" id="description" placeholder='Main Tasks. Seperate by periods please.' value={props.description}></textarea>
            </div>
            <button  
              type='button'
              onChange={props.addExperienceList}>
              <Icon path={mdiContentSaveCheckOutline} size={1} />
              <span className='Add'>Add</span>
            </button>
            <button  type='button' className= "clear-button"
              onChange={props.clear}>
              <Icon path={mdiContentSaveCheckOutline} size={1} />
              <span className='clear'>Clear</span>
            </button>
          </div>
        </div>
      </form>
    </>
  )
}