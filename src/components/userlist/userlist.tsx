import { User } from "../../actions/users";

interface UserListProps {
  users: User[],
  onItemClick: (id:string) => void 
}

export function UserList(props: UserListProps) {
  return (
    <div role="list" aria-labelledby="user-heading">
      {props.users.map(user => {
        return <div role="listitem" key={user.id} onClick={() => props.onItemClick(user.id)}>
          {user.name}
        </div>
      })}
    </div>
  )
}
