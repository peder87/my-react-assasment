
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
  return <div data-testid="friendItem">
    <span data-testid="friendName">{p.name}</span>
    <button onClick={btnHandler}>{p.alreadyFriends ? 'rimuovi': 'aggiungi'}</button>
  </div>
}