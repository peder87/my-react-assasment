import { useState } from 'react'
import Form from '../../components/form'
import { BackIcon, RetryIcon, UserWrapper } from './addUser.style'
import Button from '../../components/button'
import { User } from '../../actions/users'
import { FriendItem, FRIEND_ACTION } from '../friendItem/friendItem'
import { ListWrapper, WrapperCenter } from '../../style/common'
import { getRandomIcon, NotifyType } from '../../utils/emoji'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { RouteEnum } from '../../routes/routes'

interface AddUserProps {
  showBackHome: boolean
  showRetry: boolean
  currentUser: User
  users: User[]
  onSubmit: (newUser:User) => void
  addNotify: (obj:{id:string,action:FRIEND_ACTION}) => void
}

export const AddUser = (p:AddUserProps) => {
  const navigate = useNavigate()
  const [friends, setFriends] = useState<string[]>(p.currentUser.friends)
  
  const handleSubmit = (name:string) => {
    const updatedUser = {...p.currentUser, name, friends}
    p.onSubmit(updatedUser)
  }
  const userNameList = p.users.map((u:User) => u.name)
  const formErrorNotify = (name:string) => {
    toast(`${name} esiste già`, {icon: getRandomIcon(NotifyType.ERROR)})
  }

  const handleAddRemoveFriends = (obj:{id:string,action:FRIEND_ACTION}) => {
    const { action, id } = obj 
    switch (action) {
      case FRIEND_ACTION.ADD:
        setFriends([...friends,id])
        break;
      case FRIEND_ACTION.REMOVE:
        setFriends(friends.filter(userId => userId !== id))
        break
    }
    p.addNotify(obj)
  }

  const goHome = () => {
    navigate(RouteEnum.HOME)
  }

  return (
    <UserWrapper>
      <p>{p.currentUser.id}</p>
      <Form userList={userNameList} onSubmit={handleSubmit} pushNotify={formErrorNotify} currentUsername={p.currentUser.name}/>
      {p.showRetry && <WrapperCenter><div><Button text="riprova" click={() => console.log('hello')}><RetryIcon /></Button></div></WrapperCenter>}
      {p.users.length === 0 && <WrapperCenter><div>No friends :(</div></WrapperCenter>}
      {p.users.length > 0 && 
        <ListWrapper>
          {p.users.map(user => <FriendItem key={user.id} {...user} actionCallback={handleAddRemoveFriends} alreadyFriends={friends.includes(user.id)}/>)}
        </ListWrapper>
      }

      <WrapperCenter>
        {p.showBackHome && <div><Button text="torna alla lista" click={goHome}><BackIcon /></Button></div>}
      </WrapperCenter>
    </UserWrapper>
  )
}