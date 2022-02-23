import { FriendWrapper, AddBtn, RemoveBtn } from "./friendItem.style"

interface FriendsItemProps {
  id: string
  name: string
  actionCallback: () => void
  alreadyFriends: boolean
}

export enum FRIEND_ACTION  {
  'REMOVE' = 'REMOVE',
  'ADD' = 'ADD'
}


export const FriendItem = (p:FriendsItemProps) => {
  return <FriendWrapper add={!p.alreadyFriends} data-testid="friendItem" role="button" onClick={p.actionCallback}>
    <span data-testid="friendName">{p.name}</span>
    {p.alreadyFriends ? <RemoveBtn /> : <AddBtn />}
  </FriendWrapper>
}