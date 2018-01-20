import { combineReducers } from 'redux'

import availability from './availabilityReducer'
import user from './userReducer'

export default combineReducers({
    availability,
    user
})
