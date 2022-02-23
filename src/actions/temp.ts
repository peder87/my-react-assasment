export interface TempUser {
  name: string
  id: string
  friends: string[]
}

export enum TempActionType {
  INIT_REDUCER = 'INIT_REDUCER',
  INIT_USER = 'INIT_USER',
  REMOVE_FRIEND = 'REMOVE_FRIEND',
  ADD_FRIEND = 'ADD_FRIEND',
  UPDATE_NAME = 'UPDATE_NAME',
}

interface InitUser {
  type: TempActionType.INIT_USER
  id: string
  name: string
  friends: string[]
}

export const initUser = (userToInit: TempUser): InitUser => {
  return {
    type: TempActionType.INIT_USER,
    ...userToInit,
  }
}

interface RemoveFriend {
  type: TempActionType.REMOVE_FRIEND
  id: string
  idToRemove: string
}

export const removeFriend = (id: string, idToRemove: string): RemoveFriend => {
  return {
    type: TempActionType.REMOVE_FRIEND,
    id,
    idToRemove,
  }
}

interface AddFriend {
  type: TempActionType.ADD_FRIEND
  id: string
  idToAdd: string
}

export const addFriend = (id: string, idToAdd: string): AddFriend => {
  return {
    type: TempActionType.ADD_FRIEND,
    id,
    idToAdd,
  }
}

interface UpdateName {
  type: TempActionType.UPDATE_NAME
  id: string
  name: string
}

export const updateName = (id: string, name: string): UpdateName => {
  return {
    type: TempActionType.UPDATE_NAME,
    id,
    name,
  }
}

interface InitReducer {
  type: TempActionType.INIT_REDUCER
}

export const initReducer = (): InitReducer => ({
  type: TempActionType.INIT_REDUCER,
})

export type TempActions =
  | InitUser
  | RemoveFriend
  | AddFriend
  | InitReducer
  | UpdateName
