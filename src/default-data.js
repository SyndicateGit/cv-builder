import { v4 as uuid } from 'uuid';

const defaultData = {
  BasicInfo:{
    fullName: "Raymond Zeng",
    email: "username@outlook.com",
    phoneNumber: "(123) 456-789",
    linkedInLink: "linkedin.com/in/shilei-zeng",
    githubLink: "github.com/SyndicateGit"
  },
  EducationInfo1:{
    degree: "BCS Computer Science",
    school: "University of Windsor",
    city: "Windsor",
    province: "Ontario",
    startDate: "2023-05-01",
    endDate: "2025-04-30",
    id: "0",
  },
  EducationInfo2:{
    degree: "B.Sc. Molecular Genetics and Microbiology",
    school: "University of Toronto",
    city: "Toronto",
    province: "Ontario",
    startDate: "2016-09-01",
    endDate: "2020-04-30",
    id: "1",
  },
  //TODO: Fill Default Experiences
  ExperienceInfo1:{
    jobTitle: "Software Developer",
    company: "Company X",
    city: "Toronto",
    province: "Ontario",
    startDate: "2023-11-01",
    endDate: "2023-12-25",
    description: "Developed CV Builder webapp. Includes general info, education, and experience section.",
    id: "1",
  }
  
}

export default defaultData;