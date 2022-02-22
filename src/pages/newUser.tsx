import { useState } from 'react'
import toast from 'react-hot-toast'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { Form } from '../components/form/form'
import { FriendItem, FRIEND_ACTION } from '../components/friendItem/friendItem'
import { useAppSelector } from '../reducers'
import { UsersState } from '../reducers/users'
import { getRandomIcon, NotifyType } from '../utils/emoji'


export const getCurrentUser = (users:UsersState, id: string | undefined): { id?: string, name: string, friends: string[]} => {
  const newUser = {name: '', friends: []}
  if(!id) return newUser
  return users[id] || newUser
}

export const NewUser = () => {
  const { userId } = useParams<"userId">()
  const { users, currentUser, usserDictionary } = useAppSelector(({users}) => {
    return {
      usserDictionary: users,
      users: Object.values(users),
      currentUser: getCurrentUser(users,userId)
    }
  })
  const [friends, setFriends] = useState<string[]>(currentUser.friends)

  const usersList = users.map(users => users.name)
  const handleSubmit = () => { }
  const pushNotify = () => {}

  const friendCallback = ({action, id}: {id:string, action: FRIEND_ACTION }) => {
    switch (action) {
      case FRIEND_ACTION.ADD:
        setFriends([...friends,id])
        toast.success(`${usserDictionary[id].name} è stato aggiunto agli amici`, {icon: getRandomIcon(NotifyType.SUCCESS)})
        break;
        case FRIEND_ACTION.REMOVE:
          setFriends(friends.filter(userId => userId !== id))
          toast.success(`bye bye ${usserDictionary[id].name} `, {icon: getRandomIcon(NotifyType.SUCCESS)})
        break;
    }
  }

  return (
    <div>
      <Form userList={usersList} onSubmit={handleSubmit} pushNotify={pushNotify} currentUsername={currentUser.name} />
      <div>
        {
          users.length === 0 && <p>no friends</p>
        }
        {users.length > 0 && <List>
          { users.map(user => <FriendItem key={user.id} {...user} actionCallback={friendCallback} alreadyFriends={friends.includes(user.id)} /> )}
        </List>}
      </div>
    </div>
  )
}

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  
`