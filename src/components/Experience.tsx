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
          type="button">
          </button>
          <div>
            
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