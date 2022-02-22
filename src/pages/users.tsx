import { Link, useNavigate } from 'react-router-dom'
import { RouteEnum } from '../routes/routes'
import { Button } from '../components/button/button'
import { RootState, useAppSelector } from '../reducers'


export function Users() {
  const users = useAppSelector(({users}:RootState) => Object.values(users))
  const navigate = useNavigate()

  return (
    <div>
      Users page
      <Button
        click={() => navigate(RouteEnum.NEW_USERS)} text="create new user"/>
      { users.length === 0 && <div>no users :(</div>}
      <div>

      { users.length > 0 &&
      <ul>
        {users.map((user) => <li><Link  to={`${RouteEnum.USER}/${user.id}`} >{user.name} - {user.friends.length}</Link></li>)}
      </ul>
      }
      </div>
    </div>
  )
}