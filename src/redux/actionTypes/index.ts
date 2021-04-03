import { Comment } from '../reducers/index';

export enum ActionType {
    GET_POST_COMMENTS_PENDING = 'GET_POST_COMMENTS_PENDING',
    GET_POST_COMMENTS_SUCCESS = 'GET_POST_COMMENTS_SUCCESS',
    GET_POST_COMMENTS_FAIL = 'GET_POST_COMMENTS_FAIL'
}

interface actionPending {
    type: ActionType.GET_POST_COMMENTS_PENDING;
}

interface actionSuccess {
    type: ActionType.GET_POST_COMMENTS_SUCCESS;
    payload: Comment[];
}

interface actionFail {
    type: ActionType.GET_POST_COMMENTS_FAIL;
    payload: string;
}

export type Action = actionPending | actionSuccess | actionFail;