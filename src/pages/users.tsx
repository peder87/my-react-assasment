import { useNavigate } from 'react-router-dom'
import { RouteEnum } from '../routes/routes'
import { Button } from '../components/button/button'
import { RootState, useAppSelector } from '../reducers'
import { AddPerson, ListWrapper, UserIcon, WrapperCenter } from '../style/common'
import { useDispatch } from 'react-redux'
import { getCurrentUser } from '../components/addUser/utils'
import { initUser } from '../actions/temp'

export function Users() {
  const dispatch = useDispatch()
  const { userList, userState } = useAppSelector(({users}:RootState) => {
    return { 
      userState: users,
      userList: Object.values(users)
    }
  })
  const navigate = useNavigate()

  const goTo = (id?:string) => {
    const data = getCurrentUser(userState,id)
    dispatch(initUser(data))
    navigate(id ? `${RouteEnum.USER}/${id}` : `${RouteEnum.USER}/${data.id}`)
  }

  return (
    <div>
      <WrapperCenter>
        <div>
          <Button
            click={() => goTo()} 
            text="create new user">
            <AddPerson/>
          </Button>
        </div>
      </WrapperCenter>
        { userList.length === 0 && <WrapperCenter><p>no users :(</p></WrapperCenter>}
      <div>

      { userList.length > 0 &&
        <ListWrapper>
          {userList.map((user) => <Button key={user.id} text={user.name} click={() => goTo(user.id)} ><UserIcon /></Button>)}
        </ListWrapper>
      }
      </div>
    </div>
  )
}
