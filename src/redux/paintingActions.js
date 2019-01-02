import axios from "axios";

//action types
export const FETCH_PAINTINGS_BEGIN = 'FETCH_PAINTINGS_BEGIN'
export const FETCH_PAINTINGS_SUCCESS = 'FETCH_PAINTINGS_SUCCESS'
export const FETCH_PAINTINGS_FAILURE = 'FETCH_PAINTINGS_FAILURE'

export const fetchPaintingsBegin = () => ({
    type: FETCH_PAINTINGS_BEGIN
})

export const fetchPaintingsSuccess = PAINTINGS => ({
    type: FETCH_PAINTINGS_SUCCESS,
    payload: {PAINTINGS}
})

export const fetchPaintingsFailure = error => ({
    type: FETCH_PAINTINGS_FAILURE,
    payload: {error}
})

//fetch paintings
export const fetchPaintings = () => {
    return dispatch => {
        dispatch(fetchPaintingsBegin())
        return axios.get("http://localhost:3000/paintings/")
            .then(response => {
                
                let paintings = response.data.data
                dispatch(fetchPaintingsSuccess(paintings))
                return paintings 
            })
            .catch(error => {
                
                dispatch(fetchPaintingsFailure(error))
            })
    }
}