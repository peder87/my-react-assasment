import { useState } from 'react'
import toast from 'react-hot-toast'
import { User } from '../../actions/users'
import { useAppSelector } from '../../reducers'
import { getRandomIcon, NotifyType } from '../../utils/emoji'
import { coinFlip, retryPromise } from '../../utils/fakeHttp'
import { FRIEND_ACTION } from '../friendItem/friendItem'
import { AddUser } from './addUser'
import { getCurrentUser } from './utils'


interface AddContainerPropos {
  showBackHome: boolean
  userId: string | undefined
  parentId: string | undefined
}

export const AddContainer = (p: AddContainerPropos) => {
  const { users, currentUser, userDictionary } = useAppSelector(({users}) => {
    return {
      userDictionary: users,
      users: Object.values(users),
      currentUser: getCurrentUser(users,p.userId)
    }
  })
  const [showRetry, setShowRetry] = useState(false)

  const addNotify = (obj:{id:string,action:FRIEND_ACTION}) => {
    const {id, action } = obj
    const name = userDictionary[id].name as string
    const message = action === FRIEND_ACTION.ADD ? `${name} è stato aggiunto` : `bye bye ${name}`
    const icon = getRandomIcon(NotifyType.SUCCESS)
    toast(message, {icon})
  }

  const onSubmit = (user: User) => {
    const newUser = {...user, friends: [...user.friends, ...(p.parentId ? [p.parentId]: [])]} 
    toast.loading('...',{id:'loading'})
    const fx = () => {console.log('alegher', newUser)}
    const cf = coinFlip(fx)
    retryPromise(cf,2)
      .then(() => {
        toast.remove('loading')
        toast.success(`${newUser.name} aggiunto con sucesso`)
      })
      .catch(() => {
      setShowRetry(true)
      toast.remove('loading')
      toast.error('qualcosa è andato storto', {icon: getRandomIcon(NotifyType.ERROR),duration: 3000})
    })
  }

  return (
      <AddUser
        showBackHome={p.showBackHome}
        showRetry={showRetry}
        currentUser={currentUser}
        users={users}
        onSubmit={onSubmit}
        addNotify={addNotify}
      />
  )
}