import { withLayout } from '../components/layout/layout'
import User from '../pages/user'
import { Users } from '../pages/users'

export enum RouteEnum {
    'HOME' = '/',
    'NEW_USERS' = 'user',
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
        Component: withLayout(User),
    },
    {
        path: `${RouteEnum.NEW_USERS}/:userId`,
        exact: true,
        Component: withLayout(User),
    },
]
