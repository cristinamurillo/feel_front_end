import axios from 'axios';


export const POST_JOIN_SUCCESS = 'POST_JOIN_SUCCESS'
export const POST_JOIN_FAILURE = 'POST_JOIN_FAILURE'

export const postJoinSuccess = message => ({
    type: POST_JOIN_SUCCESS,
    payload: {message}
})

export const postJoinFailure = error => ({
    type: POST_JOIN_FAILURE,
    payload: {error}
})


export const postJoin = (user_id, painting_id) => {
    return dispatch => {
        return axios.post("http://localhost:3000/user_paintings", {user_id: user_id, painting_id: painting_id})
            .then(response => {
                console.log(response)
                let message = response.data.message
                dispatch(postJoinSuccess(message))
                return message 
            })
            .catch(error => {
                console.log(error.response)
                dispatch(postJoinFailure(error))
            })
    }
}

