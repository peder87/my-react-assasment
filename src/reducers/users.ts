import { User, UsersActions, UsersActionType } from '../actions/users'

export interface UsersState {
  [id: string]: User
}

const initState = {
  mnc: { id: 'mnc', name: 'monicelli', friends: ['prz', 'ncc'] },
  msc: { id: 'msc', name: 'mascetti', friends: ['prz'] },
  prz: { id: 'prz', name: 'perozzi', friends: ['msc', 'mnc', 'ncc'] },
  ncc: { id: 'ncc', name: 'necchi', friends: ['prz', 'mnc'] },
  mln: { id: 'mln', name: 'melandri', friends: ['ssl'] },
  ssl: { id: 'ssl', name: 'sassaroli', friends: ['mln'] },
}

export function userReducers(
  state: UsersState = initState,
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
