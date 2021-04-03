import { combineReducers } from 'redux';
import commentReducer from './index';

const reducers = combineReducers({
    comments: commentReducer
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;