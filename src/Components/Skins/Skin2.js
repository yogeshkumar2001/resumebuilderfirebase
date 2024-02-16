import React from "react";
import "./skin2.css";

function Skin2(props) {
    let obj = props.userDetails;
    let skillsArr = props.userDetails?.skills?.split(",");
    let softSkillsArr = props.userDetails?.softSkills?.split(",");
    let achievementArray = props.userDetails?.achievement?.split(",");

    return (
        <div
            className="container bg-white skin-container p-0"
            id={props.id}
            ref={props.targetRef}
        >
            <div
                className="h-40 position-absolute bg-white  top-5"
                style={{
                    zIndex: "9",
                    top: "2.5rem",
                    width: "90%",
                    border: "2px solid #BFDBC8",
                }}
            >
                <div
                    className="col w-100  h-50 d-flex justify-content-startn align-items-center fs-1 fs-bold"
                    style={{ borderBottom: "2px solid #BFDBC8" }}
                >
                    <h1>
                        <span>{obj.fName}</span> <span>{obj.lName}</span>
                    </h1>
                </div>
                <div
                    className="col w-100  h-50 d-flex justify-content-start align-items-start"
                    style={{}}
                >
                    <h1>{obj.profession}</h1>
                </div>
                <div
                    className="position-absolute h-40 top-0  w-50"
                    style={{
                        padding: "10px ",
                        zIndex: 999,
                        left: "50%",
                        fontSize: "11px",
                    }}
                >
                    <div className="h-100 w-100" style={{ backgroundColor: "#BFDBC8" }}>
                        {obj.summary}
                    </div>
                </div>
            </div>
            <div className="row m-0 h-100">
                <div className="col-4" style={{ backgroundColor: "#BFDBC8" }}>
                    <div
                        className="left-container"
                        style={{ backgroundColor: "#BFDBC8" }}
                    ></div>
                    <div className="left-container ">
                        <div className="h-10 bg-white text-center ">Skills</div>
                        <ul className="text-start ml-4" style={{ listStyleType: "disc" }}>
                            {skillsArr?.map((v, index) => (
                                <li key={index}>{v}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="left-container ">
                        <div className="h-10 bg-white text-center">Soft Skills</div>
                        <ul className="text-start ml-4" style={{ listStyleType: "disc" }}>
                            {softSkillsArr?.map((v, index) => (
                                <li key={index}>{v}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="left-container ">
                        <div className="h-10 bg-white text-center ">Contact</div>
                        <ul className="text-start ml-4" style={{ listStyleType: "disc" }}>
                            <li>Email - {obj.email}</li>
                            <li>Phone number - {obj.phNumber}</li>
                            <li>City - {obj.city}</li>
                            <li>Pincode - {obj.pinCode}</li>
                        </ul>
                    </div>
                    <div className="left-container ">
                        {/* Additional sections can be added here */}
                    </div>
                </div>
                <div className="col bg-white" style={{}}>
                    <div className="container text-center left-container ">

                    </div>
                    <div className="container text-center left-container ">
                        <div className="h-10" style={{ backgroundColor: "#BFDBC8" }}>
                            School Education
                        </div>
                        <div className="text-start ml-3">
                            <ul>
                                <li className="font-bold">
                                    {obj.schoolName}
                                </li>
                                <li>
                                    {obj.schoolLocation}
                                </li>
                                <li>
                                    CGPA - {obj.cgpaSchool}
                                </li>
                                <li className="font-bold">
                                    {obj.collegeName}
                                </li>
                                <li>
                                    {obj.collegeLocation}
                                </li>
                                <li>
                                    College CGPA - {obj.collegeLocation}
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="container text-center left-container ">
                        <div className="h-10" style={{ backgroundColor: "#BFDBC8" }}>
                            Work
                        </div>
                        <div className="text-start ml-3">
                            <ul>
                                <li className="font-bold">
                                    {obj.jobTitle}
                                </li>
                                <li>
                                    {obj.position}
                                </li>
                                <li>
                                    {obj.companyName}
                                </li>
                                <li>
                                    {obj.city}
                                </li>
                                <li>
                                    {obj.state}
                                </li>
                                <li>
                                    {obj.aboutCompany}
                                </li>
                                <div className="d-flex justify-content-between">
                                    <span>
                                        Work Started - {obj.workStarted}
                                    </span>
                                    <span>
                                        Work End Date - {obj.workEndDate}
                                    </span>
                                </div>
                                {/* Add more fields as needed */}
                            </ul>
                        </div>
                    </div><div className="container text-center left-container ">
                        <div className="h-10" style={{ backgroundColor: "#BFDBC8" }}>
                            Achievements
                        </div>
                        <div className="text-start ml-3">
                            <ul className="text-start ml-4" style={{ listStyleType: "disc" }}>
                                {achievementArray?.map((v, index) => (
                                    <li key={index}>{v}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skin2;