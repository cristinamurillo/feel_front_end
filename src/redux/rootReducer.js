import {combineReducers} from "redux"
import paintings from './paintingReducer'
import animations from './animationReducer'
import users from './userReducer'

export default combineReducers({
    paintings,
    animations,
    users
})