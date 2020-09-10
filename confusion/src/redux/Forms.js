import * as ActionTypes from './ActionTypes';

export const InitialFeedback = {
    firstname:'',
    lastname:'',
    telnum:'',
    email:'',
    agree:false,
    contactType:'',
    message:''
}

export const Feedbacks = (state={
    errMess:null,
    feedback:[]
},action) => {
    switch(action.type) {
        case ActionTypes.ADD_FEEDBACKS:
            return {...state,errMess:null,feedback:action.payload}
        case ActionTypes.FEEDBACK_FAILED:
            return {...state,errMess:action.payload,feedback:[]}
        case ActionTypes.ADD_FEEDBACK:
            var feedback = action.payload;
            return {...state,feedback:state.feedback.concat(feedback)};
        default:
            return state;
    }
}
