import React, { useCallback, useRef, useState } from 'react';
import Skin1 from '../Skins/Skin1';
import Skin2 from '../Skins/Skin2';
// import Skin3 from '../Skins/Skin4';
import Skin4 from '../Skins/Skin4';
// import Skin5 from '../Skins/Skin5';
// import Skin6 from '../Skins/Skin6';
// import Skin7 from '../Skins/Skin7';
// import Skin8 from '../Skins/Skin8';
import "./final.css";
import { connect } from 'react-redux';
import generatePDF, { usePDF } from 'react-to-pdf';
import { toPng } from 'html-to-image';
import { postCallAPI } from "../API/helper"
import { getSelectedResumesById, saveResumePath } from '../API/ApiPaths';
import { notify } from '../Notify/notify';
import Loading from "../Loading/Loading"
import { getResumeTemplate } from '../Helper/helper';
import { useEffect } from 'react';
import mobilePdfImage from "../assests/images/mobile_pdf_download.png"
function Final(props) {

    const [resumeUrl, setResumeUrl] = useState(null)
    const options = {
        // default is `save`
        method: 'open',
        // default is Resolution.MEDIUM = 3, which should be enough, higher values
        // increases the image quality but also the size of the PDF, so be careful
        // using values higher than 10 when having multiple pages generated, it
        // might cause the page to crash or hang.
        // resolution: Resolution.HIGH,
        page: {
            // margin is in MM, default is Margin.NONE = 0
            margin: 0,
            format: 'letter',
            // default is 'portrait'
        },



    };
    const pdfRef = useRef();
    const { toPDF, targetRef } = usePDF({ filename: 'resume.pdf', options: options });


    async function apiCall(obj) {
        let response = await postCallAPI({ path: saveResumePath, Data: obj })
        return response
    }
    async function saveResumeHandler() {

        let postData = {
            skinId: props.templateInfo.id,
            skinPath: props.templateInfo.path,
            userDetails: JSON.stringify(props.userDetails),
            userId: props.userData.id
        }
        let resObj = await apiCall({ path: saveResumePath, Data: postData });
        let message = resObj.status == 201 ? "Resume Saved Successfully" : "Failed to save resume, Please try again in sometimes."
        let type = resObj.status == 201 ? "success" : "error"
        if (resObj.status == 201) {
            setResumeUrl(window.origin + "/shared_resume?resumeId=" + resObj.data["_id"]);
        }
        notify(message, type)

    }

    const onButtonClick = () => {
        let ele = document.getElementById(props.templateInfo.id);
        if (ele === null) {
            notify("something went wrong , please try again later", "error")
            return;
        }

        toPng(ele, { cacheBust: true, })
            .then((dataUrl) => {
                const link = document.createElement('a')
                link.download = 'resume.png'
                link.href = dataUrl
                link.click()
            })
            .catch((err) => {
                console.log(err)
            })
    }


    let SkinContainer = <Loading />
    SkinContainer = getResumeTemplate(props.templateInfo.id, props, targetRef);
    // if (!props.userData.auth) {
    //     window.location = "/login";
    //     return;
    // }

    let isMobile = window.matchMedia("(max-width:500px)").matches
    const handleCopyLink = () => {
        const resumeLink = resumeUrl; // Replace with your dynamic link
    
        // Create a temporary input element
        const tempInput = document.createElement('input');
        tempInput.value = resumeLink;
        document.body.appendChild(tempInput);
    
        // Select the text in the input
        tempInput.select();
        tempInput.setSelectionRange(0, 99999); // For mobile devices
    
        // Copy the selected text
        document.execCommand('copy');
    
        // Remove the temporary input element
        document.body.removeChild(tempInput);
    
        // Notify the user
        notify('Link copied to clipboard', "success");
    };
    let CustomWidth = isMobile ? '100vw' : '50vw'
    function pdfHandlerImage(type) {
        document.getElementById("resume-container").classList.toggle("d-none");
        if(type=="pdf"){
            toPDF()
        }else{
            onButtonClick()
        }
        document.getElementById("resume-container").classList.toggle("d-none");
    }
    return (
        <div className="resume-page">
            <div className="resume-buttons">

               {isMobile? <button className="btn-success btn border-0" onClick={() => { pdfHandlerImage("pdf") }}>
                    Download PDF
                </button>: <button className="btn-success btn border-0" onClick={() => { toPDF() }}>
                    Download PDF
                </button>}
                {!isMobile && <button className="btn-success btn border-0" onClick={() => { onButtonClick("image") }}>
                    Download Image
                </button>}
                <button className="btn btn-primary border-0" onClick={saveResumeHandler}>
                    Save
                </button>
            </div>
            {resumeUrl && <div className="card mb-1" style={{ background: "transparent", width: CustomWidth }}>
                <div className="fs-4">Share your resume </div>
                <div className="d-flex justify-content-between" style={{ backgroundColor: "#eaefff" }}>
                    <div className="text-start align-items-center d-flex text-primary pl-2" style={{ width: "100%", fontSize: "14px", cursor: "pointer" }} onClick={(e) => { handleCopyLink() }}>{resumeUrl}</div>
                    <button className='btn btn-sm btn-primary m-1' onClick={(e) => { handleCopyLink() }}>Copy</button>
                </div>
            </div>}
            {isMobile ? <div className="card mb-1" style={{ width: CustomWidth }}>
                <div className="fs-4">For preview download your resume. 🚀</div>
                <div className="d-flex justify-content-between" style={{ backgroundColor: "#eaefff" }}>
                   <img src={mobilePdfImage }alt="" />
                </div>
            </div> : ''}
            <div className={`resume-template card-final mt-2 ${isMobile ? 'd-none' : ''}`} id="resume-container">
                {SkinContainer}
            </div>
        </div>
    );
}

function mapStateToProps(state) {
    return { userDetails: state.userFormDetails, templateInfo: state.choosedTemplate, userData: state.userLoggedIn };
}

export default connect(mapStateToProps, null)(Final);