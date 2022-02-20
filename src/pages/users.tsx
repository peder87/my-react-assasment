import { useAppSelector } from '../reducers'


export function Users() {
  const users = useAppSelector(({users}) => Object.values(users))
  return (
    <div>
      Users page
      {users.length === 0 && <div>no users :(</div>} 
    </div>
  )
}