import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Form } from '../components/form/form'
import { FriendItem, FRIEND_ACTION } from '../components/friendItem/friendItem'
import { useAppSelector } from '../reducers'
import { UsersState } from '../reducers/users'


export const getCurrentUser = (users:UsersState, id: string | undefined): { id?: string, name: string, friends: string[]} => {
  const newUser = {name: '', friends: []}
  if(!id) return newUser
  return users[id] || newUser
}

export function NewUser() {
  const { userId } = useParams<"userId">()
  const { users, currentUser } = useAppSelector(({users}) => {
    return {
      users: Object.values(users),
      currentUser: getCurrentUser(users,userId)
    }
  })
  const [friends, setFriends] = useState<string[]>(currentUser.friends)

  const usersList = users.map(users => users.name)
  const handleSubmit = () => {}
  const pushNotify = () => {}

  const friendCallback = ({action, id}: {id:string, action: FRIEND_ACTION }) => {
    switch (action) {
      case FRIEND_ACTION.ADD:
        setFriends([...friends,id])
        break;
      case FRIEND_ACTION.REMOVE:
        setFriends(friends.filter(userId => userId !== id))
        break;
    }
  }

  return (
    <div>
      <Form userList={usersList} onSubmit={handleSubmit} pushNotify={pushNotify} currentUsername={currentUser.name} />
      <div>
        {users.length === 0 && <p>no friends</p>}
        {users.length > 0 && <div>
          { users.map(user => <FriendItem {...user} actionCallback={friendCallback} alreadyFriends={friends.includes(user.id)} /> )}
        </div>}
      </div>
    </div>
  )
}