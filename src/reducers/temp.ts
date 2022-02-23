import { TempActions, TempActionType, TempUser } from '../actions/temp'

export interface TempState {
  [id: string]: TempUser
}

export const tempReducers = (
  state: TempState = {},
  action: TempActions
): TempState => {
  switch (action.type) {
    case TempActionType.INIT_USER:
      return {
        ...state,
        [action.id]: {
          id: action.id,
          name: action.name,
          friends: action.friends,
        },
      }
    case TempActionType.ADD_FRIEND:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          friends: [...state[action.id].friends, action.idToAdd],
        },
      }
    case TempActionType.REMOVE_FRIEND:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          friends: state[action.id].friends.filter(
            (item) => item !== action.idToRemove
          ),
        },
      }
    case TempActionType.INIT_REDUCER:
      return {}
    default:
      return state
  }
}
