import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { combineReducers } from 'redux'
import { tempReducers, TempState } from './temp'
import { userReducers, UsersState } from './users'

export interface RootState {
  users: UsersState
  temp: TempState
}

export const reducers = combineReducers<RootState>({
  users: userReducers,
  temp: tempReducers,
})

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
