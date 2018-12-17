import axios from 'axios'

export const FETCH_COLORS_BEGIN = 'FETCH_COLORS_BEGIN'
export const FETCH_COLORS_SUCCESS = 'FETCH_COLORS_SUCCESS'

export const fetchColorsBegin = () => ({
    type: FETCH_COLORS_BEGIN
})

export const fetchColorsSuccess = (colors) => ({
    type: FETCH_COLORS_SUCCESS,
    payload: {colors}
})

//fetch colors

export const fetchColors = (id) => {
    return dispatch => {
        dispatch(fetchColorsBegin())
        return axios.get(`http://localhost:3000/paintings/${id}/colors`)
            .then(response => {
                let colors = response.data
                dispatch(fetchColorsSuccess(colors))
                return colors 
            })
    }
}