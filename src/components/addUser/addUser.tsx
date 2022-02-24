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
import { useDispatch } from 'react-redux'
import {  initReducer, updateName } from '../../actions/temp'
interface AddUserProps {
  showBackHome: boolean
  showRetry: boolean
  currentUser: User
  users: User[]
  onSubmit: (status: INSERT_STATUS) => void
  manageFriends: (obj:{id:string,action:FRIEND_ACTION}) => void
}

export enum INSERT_STATUS {
  NEW = 'NEW',
  EDIT = 'EDIT',
  DUP = 'DUP'
}

export const AddUser = (p:AddUserProps) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { friends } = p.currentUser
  
  const userNameList = p.users.map((u:User) => u.name)
  const formErrorNotify = (name:string) => {
    toast(`${name} esiste già`, {icon: getRandomIcon(NotifyType.ERROR)})
  }

  const goHome = () => {
    navigate(RouteEnum.HOME)
    dispatch(initReducer())
  }

  const alreadyExist = (): INSERT_STATUS  => {
    const found = p.users.find(u => u.name === p.currentUser.name)
    if(found) {
      return found.id !== p.currentUser.id ? INSERT_STATUS.DUP : INSERT_STATUS.EDIT
    }
    return INSERT_STATUS.NEW
  }
  
  const submit = () => {
    const exist = alreadyExist()
    switch (exist) {
      case INSERT_STATUS.NEW:
      case INSERT_STATUS.EDIT:
        p.onSubmit(exist) 
        break;
      default:
        formErrorNotify(p.currentUser.name)
        break;
    }
  }

  const handleFriendClick = (id:string,alreadyFriends: boolean) => {
    p.manageFriends({id, action: alreadyFriends ? FRIEND_ACTION.REMOVE : FRIEND_ACTION.ADD})
  }

  const updateNameValue = (name:string) => {
    dispatch(updateName(p.currentUser.id,name))
  }

  return (
    <UserWrapper>
      <Form userList={userNameList} onSubmit={submit} pushNotify={formErrorNotify} currentUsername={p.currentUser.name} updateName={updateNameValue} disabled={p.showRetry}/>
      {p.showRetry && <WrapperCenter><div><Button text="riprova" click={submit}><RetryIcon /></Button></div></WrapperCenter>}
      {p.users.length === 0 && <WrapperCenter><div>No friends :(</div></WrapperCenter>}
      {p.users.length > 0 && 
        <ListWrapper>
          {p.users
          .filter(user => user.id !== p.currentUser.id)
          .map(user => {
              const alreadyFriends = friends.includes(user.id)
              
              return <FriendItem key={user.id} {...user} actionCallback={() => handleFriendClick(user.id,alreadyFriends)} alreadyFriends={alreadyFriends}/>
            })}
        </ListWrapper>
      }

      <WrapperCenter>
        {p.showBackHome && <div><Button text="torna alla lista" click={goHome}><BackIcon /></Button></div>}
      </WrapperCenter>
    </UserWrapper>
  )
}