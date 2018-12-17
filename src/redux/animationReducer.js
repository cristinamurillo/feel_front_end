import {
    FETCH_COLORS_BEGIN,
    FETCH_COLORS_SUCCESS
} from './animationActions'

const initialState = {
    colors: [],
    loading: false
}

const fetchedColors = (state=initialState, action) => {
    switch(action.type){
        case FETCH_COLORS_BEGIN:
            return {...state, loading: true}
        case FETCH_COLORS_SUCCESS: 
            return {...state, loading: false, colors: action.payload.colors}
        default:
            return state
    }
}

export default fetchedColors 