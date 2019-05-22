import { Action } from '@ngrx/store'
import {SelectedUser, MessageInterface} from '../interfaces/interfaces'
export const SELECT_USER       = '[USER] Select'
export const RESET_USER    = '[USER] Reset'
export const ADD_MESSAGE    = '[MESSAGE] Add'
export const REMOVE_MESSAGE    = '[MESSAGE] Removet'

export class selectUser implements Action {
    readonly type = SELECT_USER;

    constructor(public payload: SelectedUser) {}
}

export class resettUser implements Action {
    readonly type = RESET_USER

    //constructor() {}
}
export class addMessage implements Action {
    readonly type = ADD_MESSAGE

    constructor(public payload: MessageInterface) {}
}
export class removeMessage implements Action {
    readonly type = REMOVE_MESSAGE

    constructor(public payload: number) {}
}

export type Actions = selectUser | resettUser | addMessage | removeMessage