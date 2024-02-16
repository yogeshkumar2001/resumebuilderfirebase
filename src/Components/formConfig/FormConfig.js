const contactForm = {
    "fName": { label: "First Name", type: "text" },
    "lName": { label: "Last Name", type: "text" },
    "phNumber": { label: "Phone Number", type: "tel" },
    "email": { label: "Email Address", type: "email" },
    "summary": { label: "Summary", type: "text" },
    "profession": { label: "Profession", type: "text" },
    "city": { label: "City", type: "text" },
    "pinCode": { label: "Pin Code", type: "text" }
};

const educationForm = {
    "schoolName": { label: "School Name", type: "text" },
    "schoolLocation": { label: "School Location", type: "text" },
    "collegeName": { label: "College Name", type: "text" },
    "collegeLocation": { label: "College Location", type: "text" },
    "degree": { label: "Degree", type: "text" },
    "fieldOfStudy": { label: "Field of Study", type: "text" },
    "cgpaSchool": { label: "CGPA in School", type: "number" },
    "cgpaCollege": { label: "CGPA in College", type: "number" },
    "graduationStarted": { label: "Graduation Started", type: "date" },
    "graduationDate": { label: "Graduation Date", type: "date" }
};

const workForm = {
    "jobTitle": { label: "Job Title", type: "text" },
    "position": { label: "Position", type: "text" },
    "jobCity": { label: "City", type: "text" },
    "jobState": { label: "State", type: "text" },
    "companyName": { label: "Company Name", type: "text" },
    "aboutCompany": { label: "About Company", type: "text" },
    "workStarted": { label: "Work Started", type: "date" },
    "workEndDate": { label: "Work End Date", type: "date" }
};

const skillsForm = {
    "skills": { label: "Skills", type: "text" },
    "softSkills": { label: "Soft Skills", type: "text" }
};

const achievementForm = {
    "achievement": { label: "Achievement", type: "text" }
};

const detailForms = [
    contactForm,
    educationForm,
    workForm,
    skillsForm,
    achievementForm
];

export default detailForms;