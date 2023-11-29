import * as React from 'react';
import './styles/App.css';
import { v4 as uuid } from 'uuid';
import BasicInfo from './components/BasicInfo';
import TemplateLoader from './components/TemplateLoader';
import defaultData from './default-data';
import Resume from './components/Resume';
import Education from './components/Education';





function App() {
  const [basicInfo, setBasicInfo] = React.useState(defaultData.BasicInfo)

  const[education, setEducation] = React.useState([]);

  function loadDefaultBasicInfo(){
    setBasicInfo(defaultData.BasicInfo);
  }

  function clearBasicInfo(){
    setBasicInfo({
      fullName: "",
      email: "",
      phoneNumber: "",
      linkedInLink: "",
      githubLink: ""
    })
  }

  function loadDefaultEducationInfo(){

  }

  function clearEducationInfo(){

  }

  function handleBasicInfoChange(e:any){ // TODO: Fix event type
    /*Fetches data-key attribute of the input field being modified in BasicInfo component. Data-key corresponds to the key in basicInfo state object for field being changed*/ 
    const { key } = e.target.dataset;
    setBasicInfo({ ...basicInfo, [key]: e.target.value });
  }
  
  function handleEducationInfoChange(e:any){ // TODO: Fix event type

  }
  return (
    <div className="App">
      <div className='cv-inputs'>
        <TemplateLoader 
        onLoadDefault={loadDefaultBasicInfo} 
        onClear={clearBasicInfo}
        />
        <BasicInfo 
          onChange={handleBasicInfoChange} 
          fullName={basicInfo.fullName} 
          email={basicInfo.email} 
          phoneNumber={basicInfo.phoneNumber} 
          linkedInLink={basicInfo.linkedInLink} 
          githubLink={basicInfo.githubLink} 
        />
        <Education/>
      </div>

      <div className='cv-outputs'>
        <Resume 
        basicInfo = {basicInfo}
        />
      </div>
    </div>
  );
}

export default App;
