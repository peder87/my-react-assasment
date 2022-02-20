import {
    checkArraySameContent,
    diffFriends,
    updateUserAndFriends,
} from './thunk'

describe('testing checkArraySameContent function', () => {
    it('should confrim that these arrays are composed by the same value', () => {
        const a = ['A', 'B', 'C']
        const b = ['A', 'C', 'B']
        expect(checkArraySameContent(a, b)).toBeTruthy()
    })
    it('should not confrim that these arrays are composed by the same value', () => {
        const a = ['A', 'B', 'C']
        const b = ['A', 'C', 'Z']
        expect(checkArraySameContent(a, b)).toBeFalsy()
    })
})

describe('testing diffFriends function', () => {
    it('should return array made up by the difference between the first and second array args', () => {
        const a = ['A', 'B']
        const b = ['A', 'C', 'Z']
        expect(diffFriends(a, b)).toEqual(['B'])
        expect(diffFriends(b, a)).toEqual(['C', 'Z'])
        expect(diffFriends(a, a)).toEqual([])
    })
})

describe('testing updateUserAndFriends', () => {
    it('should monicelli add 3 new friends and remove one and necchi still a friends', () => {
        const user = {
            id: 'mnc',
            name: 'monicelli',
            friends: ['msc', 'ssl', 'mln', 'ncc'],
        }
        const users = {
            mnc: { id: 'mnc', name: 'monicelli', friends: ['prz', 'ncc'] },
            msc: { id: 'msc', name: 'mascetti', friends: ['prz'] },
            prz: { id: 'prz', name: 'perozzi', friends: ['msc', 'mnc', 'ncc'] },
            ncc: { id: 'ncc', name: 'necchi', friends: ['prz', 'mnc'] },
            mln: { id: 'mln', name: 'melandri', friends: ['ssl'] },
            ssl: { id: 'ssl', name: 'sassaroli', friends: ['mln'] },
        }
        const expected = {
            [user.id]: user,
            msc: {
                id: 'msc',
                name: 'mascetti',
                friends: ['prz', 'mnc'],
            },
            prz: {
                id: 'prz',
                name: 'perozzi',
                friends: ['msc', 'ncc'],
            },
            ncc: { id: 'ncc', name: 'necchi', friends: ['prz', 'mnc'] },
            mln: { id: 'mln', name: 'melandri', friends: ['ssl', 'mnc'] },
            ssl: { id: 'ssl', name: 'sassaroli', friends: ['mln', 'mnc'] },
        }
        const updated = updateUserAndFriends(user, users)
        expect(updated).toMatchObject(expected)
    })
})
