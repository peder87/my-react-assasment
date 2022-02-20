import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { combineReducers } from 'redux'
import { userReducers, UsersState } from './users'

export interface RootState {
    users: UsersState
}

export const reducers = combineReducers<RootState>({
    users: userReducers,
})

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
