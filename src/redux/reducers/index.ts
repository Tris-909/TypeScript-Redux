import { Action, ActionType } from '../actionTypes/index';

export interface Comment {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string
}

interface State {
    comments: Comment[];
    loading: boolean;
    error: string | null;
}

const initialState = {
    comments: [],
    loading: false, 
    error: null 
}

const commentReducer = (state: State = initialState, action: Action):State => {
    switch(action.type) {
        case ActionType.GET_POST_COMMENTS_PENDING:
            return {
                loading: true,
                comments: [],
                error: null  
            } 
        case ActionType.GET_POST_COMMENTS_SUCCESS:
            return {
                loading: false,
                comments: action.payload,
                error: null 
            }
        case ActionType.GET_POST_COMMENTS_FAIL:
            return {
                loading: false,
                error: action.payload,
                comments: []
            }
        default: 
            return state;
    }
}

export default commentReducer;