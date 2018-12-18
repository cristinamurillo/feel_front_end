import {
    FETCH_COLORS_BEGIN,
    FETCH_COLORS_SUCCESS,
    FETCH_COLORS_FAILURE
} from './animationActions'

const initialState = {
    colors: [],
    loading: false,
    error: null
}

const fetchedColors = (state=initialState, action) => {
    switch(action.type){
        case FETCH_COLORS_BEGIN:
            return {...state, loading: true, error: null}
        case FETCH_COLORS_SUCCESS: 
            return {...state, loading: false, colors: action.payload.colors}
        case FETCH_COLORS_FAILURE:
            return {...state, loading: false, error: true, colors: []}
        default:
            return state
    }
}

export default fetchedColors 