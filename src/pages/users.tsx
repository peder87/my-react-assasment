import { useNavigate } from 'react-router-dom'
import { RouteEnum } from '../routes/routes'
import { Button } from '../components/button/button'
import { RootState, useAppSelector } from '../reducers'
import { AddPerson, ListWrapper, UserIcon, WrapperCenter } from '../style/common'

export function Users() {
  const users = useAppSelector(({users}:RootState) => Object.values(users))
  const navigate = useNavigate()

  const goTo = (id:string) => {
    navigate(`${RouteEnum.USER}/${id}`)
  }

  return (
    <div>
      <WrapperCenter>
        <div>
          <Button
            click={() => navigate(RouteEnum.NEW_USERS)} 
            text="create new user">
            <AddPerson/>
          </Button>
        </div>
      </WrapperCenter>
        { users.length === 0 && <WrapperCenter><p>no users :(</p></WrapperCenter>}
      <div>

      { users.length > 0 &&
      <ListWrapper>
        {users.map((user) => <Button key={user.id} text={user.name} click={() => goTo(user.id)} ><UserIcon /></Button>)}
      </ListWrapper>
      }
      </div>
    </div>
  )
}
