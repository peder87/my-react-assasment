import { User, UsersActions, UsersActionType } from '../actions/users'

export interface UsersState {
    [id: string]: User
}

export function userReducers(
    state: UsersState = {},
    action: UsersActions
): UsersState {
    switch (action.type) {
        case UsersActionType.ADD_USER:
            return {
                ...state,
                [action.id]: {
                    name: action.name,
                    id: action.name,
                    friends: [],
                },
            }
        case UsersActionType.UPDATE_USER:
            return {
                ...state,
                [action.id]: {
                    id: action.id,
                    name: action.name,
                    friends: action.friends,
                },
            }
        case UsersActionType.UPDATE_FRIENDS:
            return {
                ...state,
                ...action.newRelations,
            }
        default:
            return state
    }
}
