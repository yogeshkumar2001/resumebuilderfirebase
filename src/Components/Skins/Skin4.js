import React from "react";
import "./skin2.css";

function Skin4(props) {
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
                className="h-40 w-100  top-5 d-flex flex-column justify-content-center align-items-center"
                style={{
                    zIndex: "9",
                    top: "2.5rem",
                    border: "2px solid #C4B08F",
                    backgroundColor: "#C4B08F"
                }}
            >
                <div className="fs-1 text-white"><span>{obj.fName} {obj.fName}</span></div>
                <span className="text-white">{
                    obj.profession}</span>
            </div>
            <div className="row m-0" style={{ height: "85%" }}>
                <div className="col-4" style={{ backgroundColor: "#F5F5F5" }}>
                    {/* <div
                        className="left-container"
                        style={{ backgroundColor: "#C4B08F" }}
                    ></div> */}
                    <div className="left-container mt-4">
                        <div className="h-10 bg-white text-center ">Professional Summary</div>
                       <p className="text-start">{obj.summary.substring(0,180)}.</p>
                    </div>
                    <div className="left-container mt-4">
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

                </div>
                <div className="col bg-white" style={{}}>

                    <div className="container  mt-4 text-center left-container ">
                        <div className="h-10 text-white" style={{ backgroundColor: "#C4B08F" }}>
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
                        <div className="h-10 text-white" style={{ backgroundColor: "#C4B08F" }}>
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
                    </div><div className="container mt-4 text-center left-container ">
                        <div className="h-10 text-white" style={{ backgroundColor: "#C4B08F" }}>
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

export default Skin4;