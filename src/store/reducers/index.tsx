import { combineReducers } from 'redux'
import * as course from './course'

export default combineReducers({
    ...course
})