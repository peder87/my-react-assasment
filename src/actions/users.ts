import { v4 as uuidv4 } from 'uuid'
import { UsersState } from '../reducers/users'

export interface User {
    id: string
    name: string
    friends: string[]
}

export enum UsersActionType {
    ADD_USER = 'ADD_USER',
    UPDATE_USER = 'UPDATE_USER',
    UPDATE_FRIENDS = 'UPDATE_FRIENDS',
}

interface AddUser {
    type: UsersActionType.ADD_USER
    name: string
    id: string
    friends: []
}

export function addUser(name: string): AddUser {
    return {
        name,
        id: uuidv4(),
        type: UsersActionType.ADD_USER,
        friends: [],
    }
}

interface UpdateUser {
    type: UsersActionType.UPDATE_USER
    id: string
    name: string
    friends: string[]
}

export function updateUser(userData: User): UpdateUser {
    return {
        ...userData,
        type: UsersActionType.UPDATE_USER,
    }
}

interface UpdateFriends {
    type: UsersActionType.UPDATE_FRIENDS
    newRelations: UsersState
}

export function updateFriends(newRelations: UsersState): UpdateFriends {
    return {
        newRelations,
        type: UsersActionType.UPDATE_FRIENDS,
    }
}

export type UsersActions = AddUser | UpdateUser | UpdateFriends
