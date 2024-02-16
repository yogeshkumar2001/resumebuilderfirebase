import React, { useState } from 'react';
import "./contact.css";
import detailForms from '../formConfig/FormConfig';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { increaseStep, setUserFormData } from '../../Redux/action';
import { redirect, useNavigate } from 'react-router-dom';
function Details(props) {
    if (!props.userData.auth) {
        window.location = "/login";
    }
    const [formStep, setformStep] = useState(props.step.value);
    const [formData, setFormData] = useState(props.userDetails);
    let formToDisplay = detailForms[formStep];
    let navigate = useNavigate();
    // props.increaseStep({ value:0});
    function nextFormHandler(e) {
        e.preventDefault();
        if (e.target[0].id == "achievement") {
            console.log(e.target[0].id)
            props.setUserFormData(formData)
            // props.increaseStep({ value: 0 });
            // setformStep(0);
            navigate("/final");
        }
        else if (formStep < detailForms.length) {
            props.increaseStep({ value: formStep + 1 });
            setformStep(formStep + 1);
            props.setUserFormData(formData)

        }
    }
    let arr = [
        "Craft your professional summary. Let your personality shine in 100+ words",
        "Time to showcase your learning milestones!",
        "Let's dive into your career timeline! Provide details about your previous roles.",
        "What are your superpowers? List your skills and strengths here.",
        "Time to shine bright! Highlight your achievements."
    ]
    function backFormHandler(e) {
        e.preventDefault();
        if (formStep > 0) {
            props.increaseStep({ value: formStep - 1 });
            setformStep(formStep - 1);
        }
    }

    function handleInputChange(e) {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
    if (!props.userData.auth) {
        window.location = "/login";
        return;
    }

    let isMobile = window.matchMedia("(max-width:500px)").matches;
    return (

        <div className="container">

            <div className="d-flex">
                <span onClick={(e) => { backFormHandler(e) }}><i className="fa-solid fa-arrow-left"></i></span>

            </div>
            <div className={`${isMobile ? '' : 'row'}`}>
                <div className="col">
                    <div className={`alert alert-primary p-1justify-content-start d-flex align-items-center ${isMobile ? ' ' : 'mr-5 ml-5'}`} role="alert">
                        <i class="fs-4 fa-solid fa-lightbulb mr-2" style={{ "color": "#FFD43B" }}></i>
                        <span className={"text-start"}>{arr[formStep]}</span>
                        
                    </div>
                    <form className={`${isMobile ? 'form-card' : 'form-card m-5 mt-2'}`} onSubmit={(e) => { nextFormHandler(e) }}>

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
                                <button type="submit" className="btn btn-primary w-100 bg-primary" >Next</button>
                            </div>
                        </div>

                    </form>
                </div>
                <div className="col">

                    <div className="skin-image d-flex justify-content-center">

                        <div className="skin-img-container">
                            <img src={props?.TemplateData.path} alt="" />
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        increaseStep, setUserFormData
    }, dispatch);
}

function mapStateToProps(state) {
    return { TemplateData: state.choosedTemplate, step: state.detailsStep, userDetails: state.userFormDetails, userData: state.userLoggedIn };
}

export default connect(mapStateToProps, mapDispatchToProps)(Details);