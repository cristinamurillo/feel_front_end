import {
    FETCH_PAINTINGS_BEGIN,
    FETCH_PAINTINGS_SUCCESS,
    FETCH_PAINTINGS_FAILURE
} from './paintingActions'

const initialState = {
    paintings: [],
    loading: false,
    error: null
}

const fetchedPaintings = (state = initialState, action) => {
    switch(action.type){
        case FETCH_PAINTINGS_BEGIN:
            return {...state, loading: true, error: null}
        case FETCH_PAINTINGS_SUCCESS:
            return {...state, loading: false, paintings: action.payload.PAINTINGS}
        case FETCH_PAINTINGS_FAILURE:
            return {...state, loading: false, error: action.payload.error, paintings: []}
        default:
            return state 
    }
}

export default fetchedPaintings