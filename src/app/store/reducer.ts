import * as Actions from './actions'
import { SelectedUser, MessageInterface } from '../interfaces/interfaces';

const initialState = {
    SelectedUser: {
        login: '',
        id: null,
        repos_url: '',
        avatar_url: ''
    },
    messages: []
}

export function users(state: SelectedUser = initialState.SelectedUser, action: Actions.Actions) {

    switch (action.type) {
        case Actions.SELECT_USER:
            return action.payload;
        default:
            return state;
    }
}
export function messages(state: MessageInterface[] = initialState.messages, action: Actions.Actions) {
    switch (action.type) {
        case Actions.ADD_MESSAGE:
            action.payload.id = state.length;
            return [...state, action.payload];
        case Actions.REMOVE_MESSAGE:
            
            return state.filter(msg => {
                return msg.id !== action.payload
            });
        default:
            return state;
    }
}