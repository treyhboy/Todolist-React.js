import { combineReducers } from 'redux';
import todoReducer from './TodoReducer';
//import authors from './AutherReducer';
//import ajaxCallsInprogress from './ajaxStatusReducer'
const rootreducer = combineReducers({
  todoReducer
});
export default rootreducer;
