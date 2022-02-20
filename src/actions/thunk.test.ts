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
    it('should return a UsersState object madeup all users that has change something in their relations', () => {
        const user = {
            id: 'mnc',
            name: 'monicelli',
            friends: ['msc'],
        }
        const users = {
            mnc: { id: 'mnc', name: 'monicelli', friends: ['prz'] },
            msc: { id: 'msc', name: 'mascetti', friends: ['prz'] },
            prz: { id: 'prz', name: 'perozzi', friends: ['msc', 'mnc'] },
        }
        const expected = {
            mnc: { id: 'mnc', name: 'monicelli', friends: ['msc'] },
            msc: {
                id: 'msc',
                name: 'mascetti',
                friends: ['prz', 'mnc'],
            },
            prz: {
                id: 'prz',
                name: 'perozzi',
                friends: ['msc'],
            },
        }
        const updated = updateUserAndFriends(user, users)
        expect(updated).toMatchObject(expected)
    })
})
