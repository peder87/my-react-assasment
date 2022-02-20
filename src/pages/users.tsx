import { useNavigate } from 'react-router-dom'
import { RouteEnum } from '../App'
import { Button } from '../components/button/button'
import { useAppSelector } from '../reducers'


export function Users() {
  const users = useAppSelector(({users}) => Object.values(users))
  const navigate = useNavigate()


  return (
    <div>
      Users page
      <Button
        click={() => navigate(RouteEnum.NEW_USERS)} text="create new user"/>
      {users.length === 0 && <div>no users :(</div>}
    </div>
  )
}