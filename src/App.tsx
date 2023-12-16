import * as React from 'react';
import './styles/App.css';
import { v4 as uuid } from 'uuid';
import BasicInfo from './components/BasicInfo';
import TemplateLoader from './components/TemplateLoader';
import defaultData from './default-data';
import Resume from './components/Resume';
import Education from './components/Education';
import EducationList from './components/EducationList';
import Experience from './components/Experience';
import Icon from '@mdi/react';
import { mdiArrowDownDropCircleOutline } from '@mdi/js';
import { mdiArrowUpDropCircleOutline } from '@mdi/js';

type education = {
  degree: string,
  school: string,
  city: string,
  province: string,
  startDate: string,
  endDate: string,
  id: number
}

type educationList = education[];

function App() {
  // Manages General Information Section.
  const [basicInfo, setBasicInfo] = React.useState(defaultData.BasicInfo)

  // Manages Education form
  const[education, setEducation] = React.useState({
   degree: '',
   school: '',
   city: '',
   province: '',
   startDate: '',
   endDate: '',
   id: 0,
  });

  // Manages Educations list of submitted education form
  // Use this list to update resume section upon submission 
  const[educationList, setEducationList] = React.useState([defaultData.EducationInfo1, defaultData.EducationInfo2]);

  function loadDefaultBasicInfo(){
    setBasicInfo(defaultData.BasicInfo);
  }

  function loadDefaultEducationList(){
    setEducationList([defaultData.EducationInfo1, defaultData.EducationInfo2]);
  }

  function loadDefaultInfo(){
    loadDefaultBasicInfo();
    loadDefaultEducationList();
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

  function clearEducationList(){
    setEducationList([]);
  }

  function clearDefaultInfo(){
    clearBasicInfo();
    clearEducationList();
  }

  function addEducationList(){
    setEducationList((educationList) => ([
      {...education, id: education.id + 1},
      ...educationList
    ]));
    // Update id key for each education in education list to be unique.
    setEducation((education) => ({ ...education, id: education.id + 1}));
  }

  function clearEducationInfo(){
    setEducation((education) => ({
      degree: '',
      school: '',
      city: '',
      province: '',
      startDate: '',
      endDate: '',
      id: education.id,
    }))
  }

  function handleBasicInfoChange(e:any){ // TODO: Fix event type
    /*Fetches data-key attribute of the input field being modified in component. Data-key corresponds to the key in basicInfo state object for field being changed*/ 

    const { key } = e.target.dataset;
    setBasicInfo({ ...basicInfo, [key]: e.target.value });
  }
  
  function handleEducationInfoChange(e:any){ // TODO: Fix event type
    const { key } = e.target.dataset;
    setEducation({ ...education, [key]: e.target.value });
  }

  function editEducationListItem(e: any){
    const button = e.target;
    const id = parseInt(button.id)

   // Opens Education Form if hidden
   if(educationDisplayDropDown.display === 'hide'){
    handleEducationDisplayDropDown();
    }
    // Load current item to be edited onto education
    const item = findEducation(id);

    // Set Education form info to item being edited
    setEducation(item);

    // Deletes item from educationList
    // User would either add it back to save or clear to delete
    setEducationList((educationList) => ([
      ...educationList.filter((education:education) => education.id !== id),
    ]));
  }

  function findEducation(id: number){
    return educationList.find((education) => education.id === id);
  }

  const displayEducationState = {
    display: 'hide',
    icon: mdiArrowDownDropCircleOutline
  }

  //TODO: Implement experience drop down button
  const displayExperienceState = {
    display: 'hide',
    icon: mdiArrowDownDropCircleOutline
  }

  const [educationDisplayDropDown, setDisplayDropDown] = React.useState(displayEducationState);


  function handleEducationDisplayDropDown(){
    setDisplayDropDown({
      display: educationDisplayDropDown.display === 'hide'? 'show':'hide',
      icon: educationDisplayDropDown.icon === mdiArrowDownDropCircleOutline ? mdiArrowUpDropCircleOutline: mdiArrowDownDropCircleOutline,
    });
  }



  return (
    <div className="App">
      <div className='cv-inputs'>
        <TemplateLoader 
        onLoadDefault={loadDefaultInfo} 
        onClear={clearDefaultInfo}
        />
        <BasicInfo 
          onChange={handleBasicInfoChange} 
          fullName={basicInfo.fullName} 
          email={basicInfo.email} 
          phoneNumber={basicInfo.phoneNumber} 
          linkedInLink={basicInfo.linkedInLink} 
          githubLink={basicInfo.githubLink} 
        />
        <div className='education-container'>
          <Education 
            onChange={handleEducationInfoChange} 
            degree={education.degree} 
            school={education.school} 
            city={education.city} 
            province={education.province} 
            startDate={education.startDate} 
            endDate={education.endDate}
            clear = {clearEducationInfo}
            addEducationList = {addEducationList}
            handleDisplayDropdown={handleEducationDisplayDropDown}
            displayDropDown={educationDisplayDropDown}
            
          />
          <EducationList 
            educationList={educationList}
            editEducationListItem={editEducationListItem}
          />
        </div>
        <div className='experience-container'>
          <Experience/>
        </div>
      </div>

      <div className='cv-outputs'>
        <Resume 
        basicInfo = {basicInfo}
        educationList = {educationList}
        />
      </div>
    </div>
  );
}

export default App;
