let initialState = {
    choosedTemplate: {
        id: null, path: null,resumeId:null
    },
    detailsStep: { value: 0 },
    userFormDetails: null,
    userLoggedIn: {
        auth:false,
        id:null,
        name:null,
        email:null,
        profileImage:null
    }
}
const appReducer = function reduxReducer(state = initialState, action) {
    switch (action.type) {
        case "CHOOSED_TEMPLATE":
            return { ...state, choosedTemplate: action.payload }
        case "INCREASE_STEP":
            return { ...state, detailsStep: action.payload }
        case "DECREASE_STEP":
            return { ...state, detailsStep: action.payload }
        case "USER_DETAILS":
            return { ...state, userFormDetails: action.payload }
        case "SET_USER_AUTH": return { ...state, userLoggedIn: action.payload }
        case "RESET_REDUX": return { ...state, userLoggedIn: action.payload }
        default:
            return state;
    }
}
module.exports = appReducer;