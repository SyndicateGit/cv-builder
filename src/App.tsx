import * as React from 'react';
import './styles/App.css';
import { v4 as uuid } from 'uuid';
import BasicInfo from './components/BasicInfo';
import TemplateLoader from './components/TemplateLoader';
import defaultData from './default-data';
import Resume from './components/Resume';
import Education from './components/Education';
import EducationList from './components/EducationList';

type education = {
  degree: string,
  school: string,
  city: string,
  province: string,
  startDate: string,
  endDate: string,
  id: number
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
   id: 0,
  });

  // Manages Educations list of submitted education form
  // Use this list to update resume section upon submission 
  const[educationList, setEducationList] = React.useState([]);

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

  function addEducationList(){
    setEducationList((educationList) => ([
      ...educationList,
      {...education, id: education.id + 1}
    ]));
    // Update id key for each education in education list to be unique.
    setEducation((education) => ({ ...education, id: education.id + 1}));
    console.log(education.id)
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

  function editEducationListItem(id: number){
    // Load current item to be edited onto education
    const item:education = educationList.find((education:education ) => education.id === id)

    setEducation(item);

    // Deletes item from educationList
    // User would either add it back to save or clear to delete
    educationList.filter((education:education) => education.id !== id);
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
          />
          <EducationList 
          educationList={educationList}
          />
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
