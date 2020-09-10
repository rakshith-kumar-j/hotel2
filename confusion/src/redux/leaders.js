import * as ActionTypes from './ActionTypes';

export const Leaders = (state={
    errmess:null,
    isLoading:true,
    leaders:[]
},action) => {
    switch(action.type) {
        case ActionTypes.ADD_LEADERS:
            return {...state,errmess:null,isLoading:false,leaders:action.payload}
        case ActionTypes.LEADERS_LOADING:
            return {...state,errmess:null,isLoading:true,leaders:[]}
        case ActionTypes.LEADERS_FAILED:
            return {...state,errmess:action.payload,isLoading:false,leaders:[]}
        default:
            return state;
    }
}