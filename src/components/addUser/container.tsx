import { useState } from 'react'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { addFriend, initUser, removeFriend } from '../../actions/temp'
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
  userId: string
  parentId: string | undefined
  openDialog:(userId:string) => void
}

export const AddContainer = (p: AddContainerPropos) => {
  const dispatch = useDispatch()
  const [maybeFriend, setMaybeFriend] = useState('')
  const [showRetry, setShowRetry] = useState(false)
  const { users, currentUser, userDictionary } = useAppSelector(({users, temp}) => {
    return {
      userDictionary: users,
      users: Object.values(users),
      currentUser: temp[p.userId],
    }
  })
  
  const handleAddRemoveFriends = (obj:{id:string,action:FRIEND_ACTION}) => {
    const { action, id } = obj 
    switch (action) {
      case FRIEND_ACTION.ADD:
        dispatch(addFriend(currentUser.id,id))
        break;
      case FRIEND_ACTION.REMOVE:
        dispatch(removeFriend(currentUser.id,id))
        break
    }
    addNotify(obj)
  }

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
    const newUser = getCurrentUser(userDictionary, undefined, p.userId)
    setMaybeFriend(newUser.id)
    p.openDialog(newUser.id)
    dispatch(initUser(newUser))
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
        manageFriends={handleAddRemoveFriends}
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