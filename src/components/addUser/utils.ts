import { User } from '../../actions/users'
import { UsersState } from '../../reducers/users'
import { v4 as uuidv4 } from 'uuid'

export const getCurrentUser = (
  users: UsersState,
  id: string | undefined,
  parentId?: string | undefined
): User => {
  const parentExists = parentId ? Object.keys(users).includes(parentId) : false
  const friends = parentExists ? ([parentId] as string[]) : []
  const newUser = { id: uuidv4(), name: '', friends }
  if (!id) return newUser
  return users[id] || newUser
}
