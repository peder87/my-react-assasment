import { Dispatch } from 'redux'
import { RootState } from '../reducers'
import { UsersState } from '../reducers/users'
import { updateFriends, updateUser, User } from './users'

export function checkArraySameContent(a1: string[], a2: string[]): boolean {
  return a1.sort().join(',') === a2.sort().join(',')
}

export function diffFriends(a1: string[], a2: string[]): string[] {
  return [a1, a2].reduce((a, b) => {
    return a.filter((c) => !b.includes(c))
  })
}

export function updateUserAndFriends(
  currentUser: User,
  userState: UsersState
): UsersState {
  const oldUserFriends = userState[currentUser.id].friends
  const newRelations = diffFriends(currentUser.friends, oldUserFriends)
  const brokenRelations = diffFriends(oldUserFriends, currentUser.friends)
  const brokenUpdate = brokenRelations.reduce((acc, friendId) => {
    return {
      ...acc,
      [friendId]: {
        ...acc[friendId],
        friends: acc[friendId].friends.filter(
          (friend) => friend !== currentUser.id
        ),
      },
    }
  }, userState)
  const newRel = newRelations.reduce((acc, friendId) => {
    return {
      ...acc,
      [friendId]: {
        ...acc[friendId],
        friends: [...acc[friendId].friends, currentUser.id],
      },
    }
  }, brokenUpdate)
  return { ...newRel, [currentUser.id]: currentUser }
}

export function updateUserThunk(user: User) {
  return async function (dispatch: Dispatch, getState: () => RootState) {
    debugger
    const { users } = getState()
    const olFriends = Object.keys(users).includes(user.id)
      ? users[user.id].friends
      : []
    if (!checkArraySameContent(olFriends, user.friends)) {
      const action = updateFriends(updateUserAndFriends(user, users))
      dispatch(action)
      return
    }
    dispatch(updateUser(user))
  }
}
