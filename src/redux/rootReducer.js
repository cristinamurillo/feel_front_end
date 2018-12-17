import {combineReducers} from "redux"
import paintings from './paintingReducer'
import animations from './animationReducer'

export default combineReducers({
    paintings,
    animations
})