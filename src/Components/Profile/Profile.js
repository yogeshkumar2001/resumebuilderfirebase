import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { increaseStep, setUserFormData, updateTemplateData } from '../../Redux/action'
import { getSelectedResumesById, getUserResumesById } from '../API/ApiPaths'
import { getCallAPI } from "../API/helper"
import UserImg from "../assests/images/default user.png"
import detailForms from '../formConfig/FormConfig'
import "./profile.css"
import { useNavigate } from 'react-router-dom'
import NoResumeImg from "../assests/images/profile-no-resume.jpg"
import { notify } from '../Notify/notify'


function Profile(props) {
    const [userResumes, setUserResumes] = React.useState([]);
    const [formSelectionId, setFormSelectionId] = useState(0);
    const [formData, setFormData] = useState(props.userDetails);
    let navigate = useNavigate()
    let containerCss = {
        width: " 150px",
        // height: "100%",
        margin: "15px",
        padding: "4px",
        boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
    }
    useEffect(() => { callApi() }, [])
    async function callApi() {
        let tempPath = getUserResumesById.replace("replace_id", props.userData.id)
        let response = await getCallAPI({ path: tempPath });
        setUserResumes(response.data.data)
    }
    async function handleTemplateSelection(e) {
        let tempPath = getSelectedResumesById.replace("replace_id", e.target.id)
        let response = await getCallAPI({ path: tempPath });
        props.updateTemplateData({ ...props.TemplateData, resumeId: e.target.id, id: e.target.attributes.skinid.value })
        window.open("/view-resume", "_blank")
    }
    let containerHtml = userResumes.map((val) => {
        return <div className="template-profile" style={{ ...containerCss }} id={val._id} skinId={val.skinId} onClick={(e) => { handleTemplateSelection(e) }}>
            <img src={val.skinPath} alt="" className="template-profile-image" />
            {/* <button className='choose-template ' style={{left:"13%"}}>Select Template</button> */}
        </div>
    })
    let formToDisplay = detailForms[formSelectionId];

    function handleInputChange(e) {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
    function formSelection(val) {
        setFormSelectionId(val)
    }
    function saveFormData(e) {
        e.preventDefault();
        props.setUserFormData(formData)
        notify("Data saved succesfully", "success")
    }
    if (!props.userData.auth) {
        window.location = "/login";
        return;
    }
    let isMobile = window.matchMedia("(max-width:500px)").matches;

    return (
        <div className="container mt-1">
            <div className="row" style={{ height: "100vh" }}>
                <div className=" w-100 d-flex  blue-background" style={{ height: isMobile ? "20%" : "35%" }}>
                    <div className="h-100 d-flex justify-content-end align-items-end" style={{width:"15%"}}>
                        <img src={props.userData.profileImage ? props.userData.profileImage : UserImg} alt="" className='header-img' />
                    </div>
                    <div className="w-75 d-flex justify-content-start align-items-end">

                        <h1 className="text-white fs-1 ml-2" style={{marginBottom:"2.5rem"}}>{props.userData.name}</h1>
                    </div>
                </div>
                <div className="profile-bg-img">
                    <div className={`${isMobile ? 'mt-3' : 'd-flex mt-3 flex-row'}`}>
                        <div className={`${isMobile ? 'mt-5 card' : 'w-25 mt-5  card  m-5'}`}>
                            <div class="tab-container">
                                <input class="tab tab--1" id="tab1" name="tab" type="radio" onClick={(e) => { formSelection(0) }} />
                                <label for="tab1" class="tab_label">Contact  </label>

                                <input class="tab tab--2" id="tab2" name="tab" type="radio" onClick={(e) => { formSelection(1) }} />
                                <label for="tab2" class="tab_label">Education  </label>

                                <input class="tab tab--3" id="tab3" name="tab" type="radio" onClick={(e) => { formSelection(2) }} />
                                <label for="tab3" class="tab_label">Work Experience  </label><input class="tab tab--4" id="tab4" name="tab" type="radio" onClick={(e) => { formSelection(3) }} />
                                <label for="tab4" class="tab_label">Skills </label>
                                <input class="tab tab--5" id="tab5" name="tab" type="radio" onClick={(e) => { formSelection(4) }} />
                                <label for="tab5" class="tab_label">Achievement  </label>

                                <div class="indicator"></div>
                                <div class="scroller"></div>
                            </div>
                        </div>
                        <div className={`${isMobile ? 'w-100 card ' : 'w-75 card m-5'}`}>
                            <form className="form-card" onSubmit={(e) => { saveFormData(e) }}>

                                <div className="row justify-content-between text-left">
                                    {Object.entries(formToDisplay).map(([key, value]) => (

                                        <div className="form-group col-sm-6 flex-column d-flex" key={key}>
                                            <label className="input_label">{value.label}<span className="text-danger"> *</span></label>
                                            <input
                                                className='input_field'
                                                type={value.type}
                                                id={key}
                                                name={key}
                                                defaultValue={formData && formData[key] != null ? formData[key] : ""}
                                                placeholder={value.placeholder}
                                                onBlur={handleInputChange}
                                                required
                                            />
                                        </div>
                                    ))}
                                </div>
                                <div className="row justify-content-end">
                                    <div className="w-100">
                                        <button type="submit" className="btn btn-primary w-100 bg-primary" >Save</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className={`${isMobile ? 'card' : 'card  mt-0 ml-5 mb-0 mr-5'}`}>
                        <nav>
                            <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                <button class="nav-link active text-primary" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true" style={{ border: "0px", borderBottom: "2px solid" }}>Resumes</button>

                            </div>
                        </nav>
                        <div class="tab-content" id="nav-tabContent">
                            <div className={`${isMobile ? 'd-flex flex-wrap overflow-auto justify-content-center' : 'd-flex flex-wrap overflow-auto'}`} style={{ maxHeight: "45vh" }}>
                                {containerHtml.length == 0 ? <img src={NoResumeImg} style={{ height: "120px" }} className='ml-auto mr-auto' /> : containerHtml}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        increaseStep, setUserFormData, updateTemplateData
    }, dispatch);
}

function mapStateToProps(state) {
    return { TemplateData: state.choosedTemplate, step: state.detailsStep, userDetails: state.userFormDetails, userData: state.userLoggedIn };
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);