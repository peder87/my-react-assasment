import { useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate, useParams, useRoutes } from 'react-router-dom'
import { List, UserWrapper } from './user.style'
import { Form } from '../../components/form/form'
import { FriendItem, FRIEND_ACTION } from '../../components/friendItem/friendItem'
import { useAppSelector } from '../../reducers'
import { UsersState } from '../../reducers/users'
import { getRandomIcon, NotifyType } from '../../utils/emoji'
import { coinFlip, retryPromise } from '../../utils/fakeHttp'
import { RouteEnum } from '../../routes/routes'


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
    const data = { name, friends}
    const fx = () => {console.log('alegher', data)}
    const cf = coinFlip(fx)
    const tp = retryPromise(cf,2)
      .then(() => {
        navigate(RouteEnum.HOME)
      })
      .catch(() => {
      setShowRetry(true)
    })
    toast.promise(tp,{
      success: `${name} aggiunto con sucesso`,
      error: 'qualcosa è andato storto',
      loading: 'attendere prego'
    },{
      success: {icon: getRandomIcon(NotifyType.SUCCESS)},
      error: {icon: getRandomIcon(NotifyType.ERROR),duration: 3000},
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
      <div>
        <Form userList={usersList} onSubmit={handleSubmit} pushNotify={pushNotify} currentUsername={currentUser.name} />
        {showRetry && <button>retry</button>}
        <div>
          {
            users.length === 0 && <p>no friends</p>
          }
          {users.length > 0 && <List>
            { users.map(user => <FriendItem key={user.id} {...user} actionCallback={friendCallback} alreadyFriends={friends.includes(user.id)} /> )}
          </List>}
        </div>
      </div>
    </UserWrapper>
  )
}
