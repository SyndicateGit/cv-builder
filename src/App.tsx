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
import ExperienceList from './components/ExperienceList';
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
  id: string
}

type experience = {
  jobTitle: string;
  company: string;
  city: string;
  province: string;
  startDate: string;
  endDate: string;
  description: string;
  id: string;
}

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
   id: uuid(),
  });

  // Manages Educations list of submitted education form
  // Use this list to update resume section upon submission 
  const[educationList, setEducationList] = React.useState([defaultData.EducationInfo1, defaultData.EducationInfo2]);

  const[experience, setExperience] = React.useState({
    jobTitle: "",
    company: "",
    city: "",
    province: "",
    startDate: "",
    endDate: "",
    description: "",
    id: uuid(),
  })

  const[experienceList, setExperienceList] = React.useState([defaultData.ExperienceInfo1]);

  function clearExperienceList(){
    setExperienceList([]);
  }

  function addExperienceList(){
    setExperienceList((experienceList) => ([
      {...experience},
      ...experienceList
    ]));
    // Update id key for each education in education list to be unique.
    setExperience((experience) => ({ ...experience, id: uuid()}));
    console.log(experienceList);
  }

  function clearExperience(){
    setExperience((experience) => ({
      jobTitle: "",
      company: "",
      city: "",
      province: "",
      startDate: "",
      endDate: "",
      description: "",
      id: experience.id,
    }))
  }

  function loadDefaultBasicInfo(){
    setBasicInfo(defaultData.BasicInfo);
  }

  function loadDefaultEducationList(){
    setEducationList([defaultData.EducationInfo1, defaultData.EducationInfo2]);
  }

  function loadDefaultExperienceList(){
    setExperienceList([defaultData.ExperienceInfo1]);
  }

  function loadDefaultInfo(){
    loadDefaultBasicInfo();
    loadDefaultEducationList();
    loadDefaultExperienceList();
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
    clearExperienceList();
  }
  
 
  function addEducationList(){
    setEducationList((educationList) => ([
      {...education},
      ...educationList
    ]));
    // Update id key for next education
    setEducation((education) => ({ ...education, id: uuid()}));
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

  function handleExperienceInfoChange(e:any){ // TODO: Fix event type
    const { key } = e.target.dataset;
    setExperience({ ...experience, [key]: e.target.value });
  }

  function editEducationListItem(e: any){
    const button = e.target;
    const id = button.id

    console.log(id);
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

  function findEducation(id: string){
    return educationList.find((education) => education.id === id);
  }


  const displayEducationState = {
    display: 'hide',
    icon: mdiArrowDownDropCircleOutline
  }

  const displayExperienceState = {
    display: 'hide',
    icon: mdiArrowDownDropCircleOutline
  }

  function findExperience(id: string){
    return experienceList.find((experience) => experience.id === id);
  }
  
function editExperienceListItem(e: any){
    const button = e.target;
    const id = button.id

    console.log(id);
   // Opens Education Form if hidden
   if(experienceDisplayDropDown.display === 'hide'){
    handleExperienceDisplayDropDown();
    }
    // Load current item to be edited onto education
    const item = findExperience(id);

    // Set Education form info to item being edited
    setExperience(item);

    // Deletes item from educationList
    // User would either add it back to save or clear to delete
    setExperienceList((experienceList) => ([
      ...experienceList.filter((experience:experience) => experience.id !== id),
    ]));
  }

  const[experienceDisplayDropDown, setExperienceDisplayDropDown] = React.useState(displayExperienceState);

  const [educationDisplayDropDown, setEducationDisplayDropDown] = React.useState(displayEducationState);

  function handleExperienceDisplayDropDown(){
    setExperienceDisplayDropDown({
      display: experienceDisplayDropDown.display === 'hide'? 'show':'hide',
      icon: experienceDisplayDropDown.icon === mdiArrowDownDropCircleOutline ? mdiArrowUpDropCircleOutline: mdiArrowDownDropCircleOutline,
    });
  }

  function handleEducationDisplayDropDown(){
    setEducationDisplayDropDown({
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
          <Experience 
            handleDisplayDropdown={handleExperienceDisplayDropDown}
            displayDropDown={experienceDisplayDropDown}
            onChange={handleExperienceInfoChange}
            jobTitle={experience.jobTitle}
            company={experience.company}
            city={experience.city}
            province={experience.province}
            startDate={experience.startDate}
            endDate={experience.endDate}
            description={experience.description}
            clear={clearExperience}
            addExperienceList={addExperienceList} 
            setExperience={setExperience}
            currentExperience = {experience}            
            />
            <ExperienceList experienceList={experienceList} editExperienceListItem={editExperienceListItem }/>
        </div>
      </div>

      <div className='cv-outputs'>
        <Resume 
        basicInfo = {basicInfo}
        educationList = {educationList}
        experienceList={experienceList}
        />
      </div>
    </div>
  );
}

export default App;
