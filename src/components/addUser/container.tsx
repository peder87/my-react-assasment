import { useState } from 'react'
import toast from 'react-hot-toast'
import { v4 } from 'uuid'
import { User } from '../../actions/users'
import { useAppSelector } from '../../reducers'
import { WrapperCenter } from '../../style/common'
import { getRandomIcon, NotifyType } from '../../utils/emoji'
import { coinFlip, retryPromise } from '../../utils/fakeHttp'
import Button from '../button'
import { FRIEND_ACTION } from '../friendItem/friendItem'
import { AddUser } from './addUser'
import { getCurrentUser } from './utils'


interface AddContainerPropos {
  showBackHome: boolean
  userId: string | undefined
  parentId: string | undefined
  openDialog:(userId:string) => void
}

export const AddContainer = (p: AddContainerPropos) => {
  const [maybeFriend, setMaybeFriend] = useState('')
  const [showRetry, setShowRetry] = useState(false)
  const { users, currentUser, userDictionary } = useAppSelector(({users}) => {
    return {
      userDictionary: users,
      users: Object.values(users),
      currentUser: getCurrentUser(users,p.userId, p.parentId)
    }
  })

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

  const addNewFriend = () => {
    const newUserId = v4()
    setMaybeFriend(newUserId)
    p.openDialog(newUserId)
    console.log('new parent',currentUser.id)
  }

  return (
    <>
      <p>{p.parentId}</p>
      <AddUser
        showBackHome={p.showBackHome}
        showRetry={showRetry}
        currentUser={currentUser}
        users={users}
        onSubmit={onSubmit}
        addNotify={addNotify}
      />
      <WrapperCenter>
        <div>
          <Button text="new friend" click={addNewFriend}/>
        </div>
      </WrapperCenter>
      <p>temp friend: { maybeFriend }</p>
    </>
  )
}