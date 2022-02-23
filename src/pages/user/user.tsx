import { useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate, useParams } from 'react-router-dom'
import { BackIcon, RetryIcon, UserWrapper } from './user.style'
import { Form } from '../../components/form/form'
import { FriendItem, FRIEND_ACTION } from '../../components/friendItem/friendItem'
import { useAppSelector } from '../../reducers'
import { UsersState } from '../../reducers/users'
import { getRandomIcon, NotifyType } from '../../utils/emoji'
import { coinFlip, retryPromise } from '../../utils/fakeHttp'
import { RouteEnum } from '../../routes/routes'
import { ListWrapper, WrapperCenter } from '../../style/common'
import { Button } from '../../components/button/button'


export const getCurrentUser = (users:UsersState, id: string | undefined): { id?: string, name: string, friends: string[]} => {
  const newUser = {name: '', friends: []}
  if(!id) return newUser
  return users[id] || newUser
}

export const NewUser = () => {
  const navigate = useNavigate()
  const { userId } = useParams<"userId">()
  const { users, currentUser, usserDictionary } = useAppSelector(({users}) => {
    return {
      usserDictionary: users,
      users: Object.values(users),
      currentUser: getCurrentUser(users,userId)
    }
  })
  const [showRetry, setShowRetry ] = useState(false)
  const [friends, setFriends] = useState<string[]>(currentUser.friends)


  const usersList = users.map(users => users.name)
  const handleSubmit = (name: string) => {
    toast.loading('...',{id:'loading'})
    const data = { name, friends}
    const fx = () => {console.log('alegher', data)}
    const cf = coinFlip(fx)
    retryPromise(cf,2)
      .then(() => {
        toast.remove('loading')
        toast.success(`${name} aggiunto con sucesso`)
      })
      .catch(() => {
      setShowRetry(true)
      toast.remove('loading')
      toast.error('qualcosa è andato storto', {icon: getRandomIcon(NotifyType.ERROR),duration: 3000})
    })
    
  }
  const pushNotify = (name:string) => {
    toast.error(`"${name}" è già presente`, {icon: getRandomIcon(NotifyType.ERROR)})
  }

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
    <UserWrapper>
        <Form userList={usersList} onSubmit={handleSubmit} pushNotify={pushNotify} currentUsername={currentUser.name} />
        {showRetry && <WrapperCenter>
          <div><Button text="prova ancora" click={() => {console.log('prova ancora')}}><RetryIcon /></Button></div>
        </WrapperCenter>}
          {
            users.length === 0 && (<WrapperCenter><p>no friends</p></WrapperCenter>)
          }
          {users.length > 0 && <ListWrapper>
            { users.map(user => <FriendItem key={user.id} {...user} actionCallback={friendCallback} alreadyFriends={friends.includes(user.id)} /> )}
          </ListWrapper>}
          
        <WrapperCenter>
          <div>
            <Button text="torna alla lista degli amici" click={() => navigate(RouteEnum.HOME)}><BackIcon /></Button>
          </div>

        </WrapperCenter>

    </UserWrapper>
  )
}
