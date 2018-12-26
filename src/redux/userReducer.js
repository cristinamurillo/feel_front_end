import {
    POST_JOIN_SUCCESS,
    POST_JOIN_FAILURE
} from './userActions'

const initialState = {
    joinSuccess: "",
    joinError: null
}

const postJoin = (state = initialState, action) => {
    switch(action.type){
        case POST_JOIN_SUCCESS:
            return {...state, joinSuccess: action.payload.message, error: null}
        case POST_JOIN_FAILURE:
            return {...state, error: action.payload.error, joinSuccess: ""}
        default:
            return state
    }
}

export default postJoin