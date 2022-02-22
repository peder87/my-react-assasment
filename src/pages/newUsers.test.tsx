import { getCurrentUser } from "./newUser";

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
    const result = getCurrentUser(users,'grn')
    expect(result).toEqual({name: '', friends: []})
  });

  it('should getCurrentUser return a new user if Id is undefined', () => {
    const result = getCurrentUser(users, undefined)
    expect(result).toEqual({name: '', friends: []})
  });

  it('should getCurrentUser retrieve the user', () => {
    const result = getCurrentUser(users,'ssl')
    expect(result).toEqual({ id: 'ssl', name: 'sassaroli', friends: ['mln'] })
  });
  
});