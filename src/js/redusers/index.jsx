import { combineReducers } from 'redux'

import loginReduser from './login'

const rootReduser = combineReducers({loginReduser});

export default rootReduser;