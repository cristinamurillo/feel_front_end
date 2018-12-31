import axios from 'axios';


export const POST_JOIN_SUCCESS = 'POST_JOIN_SUCCESS'
export const POST_JOIN_FAILURE = 'POST_JOIN_FAILURE'
export const FETCH_CURRENT_USER_SUCCESS = 'FETCH_CURRENT_USER_SUCCESS'

export const postJoinSuccess = message => ({
    type: POST_JOIN_SUCCESS,
    payload: {message}
})

export const postJoinFailure = error => ({
    type: POST_JOIN_FAILURE,
    payload: {error}
})

export const fetchCurrentUserSuccess = user => ({
    type: FETCH_CURRENT_USER_SUCCESS,
    payload: {user}
})


export const postJoin = (user_id, painting_id) => {
    return dispatch => {
        return axios.post("http://localhost:3000/user_paintings", {user_id: user_id, painting_id: painting_id})
            .then(response => {
                let message = response.data.message
                dispatch(postJoinSuccess(message))
                return message 
            })
            .catch(error => {
                dispatch(postJoinFailure(error))
            })
    }
}

export const fetchCurrentUser = (token) => {
    return dispatch => {
        return axios.get('http://localhost:3000/api/v1/profile', {
            headers: {'Authorization': `Bearer: ${token}`}
        }).then(response => {
            dispatch(fetchCurrentUserSuccess(response.data.user))
            console.log('HI')
            console.log(response)
            return response.data.user 
        })
    }
}


