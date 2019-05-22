import { SelectedUser, MessageInterface } from './interfaces/interfaces';

export interface AppState {
   tutorial: SelectedUser;
   messages: MessageInterface[];
}