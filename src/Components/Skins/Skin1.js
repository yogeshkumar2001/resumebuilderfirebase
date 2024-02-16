import React from 'react'
import "./skin1.css"
function skin1(props) {
    let obj = props.userDetails;
    let skillsArr = props.userDetails?.skills?.split(",");
    let softSkillsArr = props.userDetails?.softSkills?.split(",");
    let achievementArray = props.userDetails?.achievement?.split(",");
    return (
        <div className="skin-container bg-white  p-0" id={props.id} ref={props.targetRef}>
            <div className="header main-header">
                <div className="d-flex ml-5" style={{ fontSize: "65px" }}>
                    <span className=''>{obj.fName}</span>
                    <span className='ml-3'>{obj.lName}</span>
                </div>
                <h4 className=' ml-5'>{obj.profession}</h4>
            </div>
            <div className="row m-0" style={{ height: "80%" }}>
                <div className="col " style={{ backgroundColor: "#25354A" }}>
                    <div className="box">
                        <h5 className="main-heading">Professional experience</h5>
                        <div className="text-white">
                            {skillsArr?.map((v) => {
                                return <p>{v}</p>
                            })}
                        </div>
                    </div>
                    <div className="box">
                        <h5 className="main-heading">Soft Skills</h5>
                        <div className="text-white">
                            <div className="text-white">
                                <div className="text-white">
                                    {softSkillsArr?.map((v) => {
                                        return <p>{v}</p>
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <h5 className="main-heading">Contact info</h5>
                        <div className="text-white">
                            <span><p>Email: {obj.email}</p></span>
                            <span><p>Phone No : {obj.phNumber}</p></span>
                        </div>
                    </div>
                    {/* <div className="box">
                        <h5 className="main-heading">references</h5>
                        <div className="text-white">
                            <p>skin1</p>
                            <p>skin1</p>
                        </div>

                    </div> */}
                </div>
                <div className="col">
                    <div className="box  ">
                        <h5 className="main-heading">Summary</h5>
                        <span><p>{obj.summary}</p></span>
                        <div className="d-flex justify-content-between">
                        </div>
                    </div>
                    <div className='line'></div>
                    <div className="box  ">
                        <h6 className="main-heading">Experience</h6>
                        <span><h4>{obj.jobTitle}</h4></span>
                        <span><p>{obj.position}</p></span>
                        <span><p>{obj.aboutCompany}</p></span>
                        <div className="d-flex justify-content-between">
                            <p>{obj.workStarted}</p>
                            <p>{obj.workEndDate}</p>
                        </div>

                    </div>
                    <div className='line'></div>
                    <div className="box  ">
                        <h5 className="main-heading">Education</h5>
                        <h4>{obj.collegeName}
                        </h4>
                        {/* <p>{obj.fieldOfStudy}</p> */}
                        <div className="d-flex justify-content-between">
                            <p>{obj.fieldOfStudy}</p>
                            <p>{obj.collegeLocation}</p>
                        </div>
                        <div className="d-flex justify-content-between">
                            <p>{obj.graduationStarted}</p>
                            <p>{obj.graduationDate}</p>
                        </div>
                        <h4>{obj.schoolName}
                        </h4>
                        {/* <p>{obj.cgpaSchool}</p> */}
                        <div className="d-flex justify-content-between">
                            <p>{obj.cgpaSchool} CGPA</p>
                            <p>{obj.schoolLocation}</p>
                        </div>
                    </div>
                    <div className='line'></div>
                    <div className="box  ">
                        <h5 className="main-heading">Awards</h5>
                        {achievementArray.map((v) => {
                            return <p>{v}</p>
                        })}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default skin1