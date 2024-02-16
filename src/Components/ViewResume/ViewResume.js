import React, { useEffect, useRef } from 'react';
import Skin1 from '../Skins/Skin1';
// import "./final.css";
import { connect } from 'react-redux';
import generatePDF, { usePDF } from 'react-to-pdf';
import { toPng } from 'html-to-image';
import { deleteCallAPI, getCallAPI, postCallAPI } from "../API/helper"
import { deleteResumesById, getSelectedResumesById, saveResumePath } from '../API/ApiPaths';
import { notify } from '../Notify/notify';
import Loading from '../Loading/Loading';
import { getResumeTemplate } from '../Helper/helper';
import mobilePdfImage from "../assests/images/mobile_pdf_download.png"
function ViewResume(props) {
    const[userData,setUserData] = React.useState(null);
   React.useEffect(()=>{
        callAPI()
   },[])
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
    
    const { toPDF, targetRef } = usePDF({ filename: 'resume.pdf', options: options });
   
    async function callAPI(){
        let response  = await getCallAPI({path:getSelectedResumesById.replace("replace_id" , props?.templateInfo?.resumeId)});
        setUserData(JSON.parse(response.data.data.userDetails))
    }
    async function deleteResumeHandler() {
        let deletedObj = await  deleteCallAPI({path:deleteResumesById.replace("replace_id",props?.templateInfo?.resumeId)})
        window.close()
    }
    if (!props.userData.auth) {
        window.location = "/login";
        return;
    }
    let userDataObj = {
        userDetails:userData,templateInfo:{id:props?.templateInfo?.resumeId}
    }
    let skinContainer =<Loading></Loading>
    skinContainer = userData && getResumeTemplate(props.templateInfo.id,userDataObj,targetRef)
    const onButtonClick = () => {
        let ele = document.getElementById(props?.templateInfo?.resumeId);
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
    function pdfHandler(){
        document.getElementById("resume-container").classList.toggle("d-none");
        toPDF()
        document.getElementById("resume-container").classList.toggle("d-none");
    }
    let isMobile = window.matchMedia("(max-width:500px)").matches
    let CustomWidth = isMobile ? '100vw' : '50vw'
    return (
        <div className="resume-page">
            <div className="resume-buttons">
                <button className="btn-success btn border-0" onClick={() => { pdfHandler() }}>
                    Download
                </button>
                <button className="btn-success btn border-0" onClick={() => { onButtonClick() }}>
                    Download Image
                </button>
                <button className="btn btn-danger border-0" onClick={deleteResumeHandler}>
                    Delete
                </button>
            </div>
            {isMobile ? <div className="card mb-1" style={{ width: CustomWidth }}>
                <div className="fs-4">For preview download your resume. 🚀</div>
                <div className="d-flex justify-content-between" style={{ backgroundColor: "#eaefff" }}>
                   <img src={mobilePdfImage }alt="" />
                </div>
            </div> : ''}
            <div className={`resume-template card-final mt-2 ${isMobile ? 'd-none' : ''}`} id="resume-container">
                {skinContainer}
            </div>
        </div>
    );
}

function mapStateToProps(state) {
    return { userDetails: state.userFormDetails, templateInfo: state.choosedTemplate, userData: state.userLoggedIn };
}

export default connect(mapStateToProps, null)(ViewResume);