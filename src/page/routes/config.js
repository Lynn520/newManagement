//引入组件
import UserManagementContainer from '../containers/UserManagementContainer'
import ScheduleContainer from '../containers/ScheduleContainer'

// TODO: 根据接口返回的menu匹配routes

const routes = [
    {
        path: '/',
        exact: true,
        name: '/userManagement',
        key: '/',
        routes: [
            { path: '/userManagement', exact: true, name: '/userManagement', key: '/userManagement', component: UserManagementContainer },
            { path: '/schedule', exact: true, name: '/schedule', key: '/schedule', component: ScheduleContainer },
        ],
    },
]

export default routes
