import { withLayout } from '../components/layout/layout'
import { UserDetail } from '../pages/detail'
import { NewUser } from '../pages/newUser'
import { Users } from '../pages/users'

export enum RouteEnum {
    'HOME' = '/',
    'NEW_USERS' = 'newUser',
    'USER' = 'user',
}

export const routes = [
    {
        path: RouteEnum.HOME,
        exact: true,
        Component: withLayout(Users),
    },
    {
        path: RouteEnum.NEW_USERS,
        exact: true,
        Component: withLayout(NewUser),
    },
    {
        path: `${RouteEnum.NEW_USERS}/:userId`,
        exact: true,
        Component: withLayout(UserDetail),
    },
]
