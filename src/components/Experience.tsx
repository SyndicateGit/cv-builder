import * as React from 'react';
import InputGroup from './InputGroup';
import '../styles/Experience.css';
import Icon from '@mdi/react';
import { mdiContentSaveCheckOutline } from '@mdi/js';



export default function Experience(props:any){
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
            onChange={function (e: any): void {
              throw new Error('Function not implemented.');
            } } 
            type={'text'} 
            id={'jobTitle'} 
            labelText={'Job Title'} 
            placeholder={'Enter Job Title'} 
            value={''} 
            dataKey={'jobTitle'}
            />
            <InputGroup 
            onChange={function (e: any): void {
              throw new Error('Function not implemented.');
            } } 
            type={'text'} 
            id={'company'} 
            labelText={'Company'} 
            placeholder={'Enter Company'} 
            value={''} 
            dataKey={'company'}
            />
            <InputGroup 
            onChange={function (e: any): void {
              throw new Error('Function not implemented.');
            } } 
            type={'text'} 
            id={'city'} 
            labelText={'City'} 
            placeholder={'Enter city'} 
            value={''} 
            dataKey={'city'}
            />
            <InputGroup 
            onChange={function (e: any): void {
              throw new Error('Function not implemented.');
            } } 
            type={'text'} 
            id={'province'} 
            labelText={'Province'} 
            placeholder={'Enter Province'} 
            value={''} 
            dataKey={'province'}
            />
            <InputGroup 
            onChange={function (e: any): void {
              throw new Error('Function not implemented.');
            } } 
            type={'date'} 
            id={'startDate'} 
            labelText={'Start Date'} 
            placeholder={'Start Date'} 
            value={''} 
            dataKey={'startDate'}
            />
            <InputGroup 
            onChange={function (e: any): void {
              throw new Error('Function not implemented.');
            } } 
            type={'date'} 
            id={'endDate'} 
            labelText={'End Date'} 
            placeholder={'End Date'} 
            value={''} 
            dataKey={'endDate'}
            />
            <div className='input-group'>
              <label htmlFor="description">
                <span className='label-text'>Description</span>
              </label>
              <textarea name="description" id="description" placeholder='Main Tasks'></textarea>
            </div>
            <button  type='button'>
              <Icon path={mdiContentSaveCheckOutline} size={1} />
              <span className='Add'>Add</span>
            </button>
            <button  type='button' className= "clear-button">
              <Icon path={mdiContentSaveCheckOutline} size={1} />
              <span className='clear'>Clear</span>
            </button>
          </div>
        </div>
      </form>
    </>
  )
}