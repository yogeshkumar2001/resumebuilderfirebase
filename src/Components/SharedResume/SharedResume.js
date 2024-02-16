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
    const [userData, setUserData] = React.useState(null);
    React.useEffect(() => {
        let queryParams = new URLSearchParams(window.location.search);
        let id = queryParams.get('resumeId');
        // setUserData(id);
        // console.log(userData,id)
        callAPI(id)
    }, [])
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

    async function callAPI(id) {
        let response = await getCallAPI({ path: getSelectedResumesById.replace("replace_id", id != null ? id : '') });
        setUserData(response.data.data)
    }

    // if (!props.userData.auth) {
    //     window.location = "/login";
    //     return;
    // }
    let userDataObj = {}
    if (userData) {
        userDataObj = {
            userDetails: JSON.parse(userData?.userDetails), templateInfo: { id: userData?.["_id"] }
        }
    }
    let skinContainer = <Loading></Loading>
    skinContainer = userData && getResumeTemplate(userData.skinId, userDataObj, targetRef)
    const onButtonClick = () => {
        let ele = document.getElementById(userData?.["_id"]);
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
    function pdfHandler() {
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
                    Download PDF
                </button>
                <button className="btn-success btn border-0" onClick={() => { onButtonClick() }}>
                    Download Image
                </button>
                {/* <button className="btn btn-danger" onClick={deleteResumeHandler}>
                    Delete
                </button> */}
            </div>
            {isMobile ? <div className="card mb-1" style={{ width: CustomWidth }}>
                <div className="fs-4">For preview download your resume. 🚀</div>
                <div className="d-flex justify-content-between" style={{ backgroundColor: "#eaefff" }}>
                    <img src={mobilePdfImage} alt="" />
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