import Loading from "../Loading/Loading"
import Skin1 from '../Skins/Skin1';
import Skin2 from '../Skins/Skin2';
// import Skin3 from '../Skins/Skin4';
import Skin4 from '../Skins/Skin4';
// import Skin5 from '../Skins/Skin5';
// import Skin6 from '../Skins/Skin6';
// import Skin7 from '../Skins/Skin7';
// import Skin8 from '../Skins/Skin8';

export function getResumeTemplate( id,props, pdfRef) {
    console.log(id,props, pdfRef)
    switch (id) {
        case "skin1": return <Skin1 id= {props.templateInfo.id} userDetails={props.userDetails} targetRef={pdfRef} />
        case "skin2": return <Skin2 id= {props.templateInfo.id}userDetails={props.userDetails} targetRef={pdfRef} />
        case "skin4": return <Skin4  id= {props.templateInfo.id} userDetails={props.userDetails} targetRef={pdfRef} />
        default: return <Skin1 id= {props.templateInfo.id} userDetails={props.userDetails} targetRef={pdfRef} />

    }
}
