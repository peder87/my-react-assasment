import { fireEvent, render, screen } from '@testing-library/react'
import { FriendItem, FRIEND_ACTION } from './friendItem'

describe('friendItem', () => {
  const props = {
    id: 'mln',
    name: 'melandri',
    actionCallback: jest.fn(),
    alreadyFriends: true,
  }

  const setup = (ui) => {
    render(ui)
    return {
      wrapper: screen.getByTestId('friendItem'),
      name: screen.getByTestId('friendName'),
      btn: screen.getByRole('button'),
    }
  }

  it('should render properly', () => {
    const { wrapper, name } = setup(<FriendItem {...props} />)
    expect(wrapper).toBeInTheDocument()
    expect(name).toHaveTextContent(props.name)
  })

  it('should click shoud trigger action REMOVE', () => {
    const { btn } = setup(<FriendItem {...props} />)
    fireEvent.click(btn)
    expect(props.actionCallback).toBeCalledWith({
      id: props.id,
      action: FRIEND_ACTION.REMOVE,
    })
  })

  it('should click shoud trigger action ADD', () => {
    const { btn } = setup(<FriendItem {...props} alreadyFriends={false} />)
    fireEvent.click(btn)
    expect(props.actionCallback).toBeCalledWith({
      id: props.id,
      action: FRIEND_ACTION.ADD,
    })
  })
})
