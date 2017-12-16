import { createStore, applyMiddleware } from 'redux';
import rootreducer from '../Reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
//import thunk from 'redux-thunk';
export default function configureStore(initialState) {
  return createStore(rootreducer, initialState, applyMiddleware(reduxImmutableStateInvariant()));
}
