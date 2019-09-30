import { User } from './../user';
import { Action } from '@ngrx/store';

export enum UserActionTypes {
  MaskUserName = '[users] Mask User Name',
  SetCurrentUser = '[Users] Set Current User'
}

export class MaskUserName implements Action {
  readonly type = UserActionTypes.MaskUserName;
  constructor(public payload: boolean) {}
}

export class SetCurrentUser implements Action {
  readonly type = UserActionTypes.SetCurrentUser;
  constructor(public payload: User) {}
}

export type UserActions = MaskUserName | SetCurrentUser;
