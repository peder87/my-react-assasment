import { render, screen, within, fireEvent} from '@testing-library/react'
import { UserList } from './userlist'

const users = [
  {id:'msc', name:'mascetti', friends: []},
  {id:'prz', name:'perozzi', friends: []},
  {id:'ncc', name:'necchi', friends: []},
  {id:'mln', name:'melandri', friends: []},
  {id:'ssl', name:'sassaroli', friends: []},
]

const itemClick = jest.fn()

describe('testing UserList component', () => {
  it('should render properly', () => {
    render(<UserList  users={users} onItemClick={itemClick}/>)
    const list = screen.getByRole('list')
    expect(list).toBeInTheDocument()
    const item = within(list).getAllByRole('listitem')
    expect(item.length).toBe(users.length)
  })
  
  it('should dispatch an id when click on user', () => {
    render(<UserList onItemClick={itemClick} users={users} />)
    const list = screen.getByRole('list')
    const [mln] = within(list).getAllByRole('listitem')
    fireEvent.click(mln)
    expect(itemClick).toHaveBeenCalledWith(users[0].id)
  })
  
}) 