import { getCurrentUser } from './utils'

describe('testing getCurrent User', () => {
  const users = {
    mnc: { id: 'mnc', name: 'monicelli', friends: ['prz', 'ncc'] },
    msc: { id: 'msc', name: 'mascetti', friends: ['prz'] },
    prz: { id: 'prz', name: 'perozzi', friends: ['msc', 'mnc', 'ncc'] },
    ncc: { id: 'ncc', name: 'necchi', friends: ['prz', 'mnc'] },
    mln: { id: 'mln', name: 'melandri', friends: ['ssl'] },
    ssl: { id: 'ssl', name: 'sassaroli', friends: ['mln'] },
  }
  it('should getCurrentUser return a new user', () => {
    const { name, id, friends } = getCurrentUser(users, 'grn')
    expect(name).toEqual('')
    expect(friends).toEqual([])
    expect(typeof id === 'string').toBeTruthy()
  })

  it('should getCurrentUser return a new user if Id is undefined', () => {
    const { name, id, friends } = getCurrentUser(users, undefined)
    expect(name).toEqual('')
    expect(friends).toEqual([])
    expect(typeof id === 'string').toBeTruthy()
  })

  it('should getCurrentUser retrieve the user', () => {
    const result = getCurrentUser(users, 'mln', 'ssl')
    expect(result).toEqual({ id: 'mln', name: 'melandri', friends: ['ssl'] })
  })

  it('should getCurrentUser with prefilled known firend', () => {
    const { friends } = getCurrentUser(users, 'arc', 'grn')
    expect(friends.length).toBe(0)
  })
})
