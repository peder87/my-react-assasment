import { FriendWrapper, AddBtn, RemoveBtn } from "./friendItem.style"

interface FriendsItemProps {
  id: string
  name: string
  actionCallback: (param:{ id: string, action: FRIEND_ACTION}) => void
  alreadyFriends: boolean
}

export enum FRIEND_ACTION  {
  'REMOVE' = 'REMOVE',
  'ADD' = 'ADD'
}


export const FriendItem = (p:FriendsItemProps) => {
  const btnHandler = () => {
    const action = p.alreadyFriends ? FRIEND_ACTION.REMOVE: FRIEND_ACTION.ADD
    p.actionCallback({id: p.id, action})
  }
  return <FriendWrapper add={!p.alreadyFriends} data-testid="friendItem" role="button" onClick={btnHandler}>
    <span data-testid="friendName">{p.name}</span>
    {p.alreadyFriends ? <RemoveBtn /> : <AddBtn />}
  </FriendWrapper>
}