import { combineReducers } from 'redux';
import { AuthReducer } from './auth.reducer';
import { Posts} from './post.reducer'

export default combineReducers({
    auth: AuthReducer,
    Posts
});