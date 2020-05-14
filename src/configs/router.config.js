
//引入组件
import UserManagementContainer from '../page/containers/UserManagementContainer';
import ScheduleContainer from '../page/containers/ScheduleContainer';
import ReportContainer from '../page/containers/ReportContainer';
import ChartContainer from '../page/containers/ChartContainer';


// TODO: 根据接口返回的menu匹配routes
const routes = [
  {
    path: "/",
    exact: true,
  },
  { path: '/userManagement/',
    exact: true,
    name: '/userManagement',
    key: '/userManagement',
    component: UserManagementContainer,
    routes: [
      { path: '/userManagement/add', exact: true, name: '/userManagement', key: '/userManagement', component: UserManagementContainer },
    ] 
  },
  { path: '/schedule', exact: true, name: '/schedule', key: '/schedule', component: ScheduleContainer },
  { path: '/report', exact: true, name: '/report', key: '/report', component: ReportContainer, grid:true },
  { path: '/chart', exact: true, name: '/chart', key: '/chart', component: ChartContainer, grid:true},
];

export default routes
