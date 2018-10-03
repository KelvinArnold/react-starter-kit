import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
// Import all reducers here
import postsReducer from './reducer-posts';

const appReducer = combineReducers({
  posts: postsReducer,
  form: formReducer
})

export default appReducer;