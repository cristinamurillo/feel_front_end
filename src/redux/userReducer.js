import {
    POST_JOIN_SUCCESS,
    POST_JOIN_FAILURE,
    FETCH_CURRENT_USER_SUCCESS
} from './userActions'

const initialState = {
    joinSuccess: "",
    joinError: null,
    currentUser: null
}

const userActions = (state = initialState, action) => {
    switch(action.type){
        case POST_JOIN_SUCCESS:
            return {...state, joinSuccess: action.payload.message, error: null}
        case POST_JOIN_FAILURE:
            return {...state, error: action.payload.error, joinSuccess: ""}
        case FETCH_CURRENT_USER_SUCCESS:
            return {...state, currentUser: action.payload.user}
        default:
            return state
    }
}

export default userActions