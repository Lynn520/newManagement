import Index from '../page/Index';
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
  
  
  {
    path: '/overview',
    exact: true,
    name: '信息总览',
    key: '/overview',
    component: UserManagementContainer,
    routes: [
      { path: '/overview/add1', exact: true, name: '风险预警', key: '/overview/add1', component: UserManagementContainer },
      { path: '/overview/add2', exact: true, name: '企业分布', key: '/overview/add2', component: UserManagementContainer },
      { path: '/overview/add3', exact: true, name: '重大危险源分布', key: '/overview/add3', component: UserManagementContainer },
      { path: '/overview/add4', exact: true, name: '监测设备分布', key: '/overview/add4', component: UserManagementContainer },
      { path: '/overview/add5', exact: true, name: '危化品分布', key: '/overview/add5', component: UserManagementContainer },
      { path: '/overview/add6', exact: true, name: '气象信息', key: '/overview/add6', component: UserManagementContainer },
      { path: '/overview/add7', exact: true, name: '分析报告', key: '/overview/add7', component: UserManagementContainer },
    ]
  },
  {
    path: '/onduty', exact: true, name: '值班值守', key: '/schedule', component: ScheduleContainer,
    routes: [
      { path: '/onduty/add1', exact: true, name: '排班值守', key: '/onduty/add1', component: UserManagementContainer },
      { path: '/onduty/add2', exact: true, name: '警情管理', key: '/onduty/add2', component: UserManagementContainer },
      { path: '/onduty/add3', exact: true, name: '值班人员管理', key: '/onduty/add3', component: UserManagementContainer },
      { path: '/onduty/add4', exact: true, name: '定期报告', key: '/onduty/add4', component: UserManagementContainer },
    ]
  },
  {
    path: '/monitor', exact: true, name: '动态监测', key: '/monitor', component: ReportContainer,
    routes: [
      { path: '/monitor/add1', exact: true, name: '数据质量', key: '/monitor/add1', component: UserManagementContainer },
      { path: '/monitor/add2', exact: true, name: '设备信息', key: '/monitor/add2', component: UserManagementContainer },
      { path: '/monitor/add3', exact: true, name: '报警信息', key: '/monitor/add3', component: UserManagementContainer },
      { path: '/monitor/add4', exact: true, name: '预警信息', key: '/monitor/add4', component: UserManagementContainer },
      { path: '/monitor/add5', exact: true, name: '视频信息', key: '/monitor/add5', component: UserManagementContainer },
      { path: '/monitor/add6', exact: true, name: '气象信息', key: '/monitor/add6', component: UserManagementContainer },
      { path: '/monitor/add7', exact: true, name: '地质灾害', key: '/monitor/add7', component: UserManagementContainer },
      { path: '/monitor/add8', exact: true, name: '安全承诺', key: '/monitor/add8', component: UserManagementContainer },
    ]
  },
  {
    path: '/riskassessment ', exact: true, name: '风险研判', key: '/riskassessment', component: ChartContainer,
    routes: [
      { path: '/riskassessment/add1', exact: true, name: '警情分析', key: '/riskassessment/add1', component: UserManagementContainer },
      { path: '/riskassessment/add2', exact: true, name: '警情统计', key: '/riskassessment/add2', component: UserManagementContainer },
    ]
  },
  {
    path: '/riskwarning ', exact: true, name: '风险预警', key: '/riskwarning', component: ChartContainer,
    routes: [
      { path: '/riskwarning/add1', exact: true, name: '警情分析', key: '/riskwarning/add1', component: UserManagementContainer },
      { path: '/riskwarning/add2', exact: true, name: '警情统计', key: '/riskwarning/add2', component: UserManagementContainer },
      { path: '/riskwarning/add3', exact: true, name: '警情管理', key: '/riskwarning/add3', component: UserManagementContainer },
    ]
  },
  {
    path: '/consultation', exact: true, name: '会商分析', key: '/riskwarning', component: ChartContainer,
    routes: [
      { path: '/consultation/add1', exact: true, name: '警情分析', key: '/consultation/add1', component: UserManagementContainer },
      { path: '/consultation/add2', exact: true, name: '警情统计', key: '/consultation/add2', component: UserManagementContainer },
      { path: '/consultation/add3', exact: true, name: '警情管理', key: '/consultation/add3', component: UserManagementContainer },
    ]
  },
  {
    path: '/operation', exact: true, name: '运行管理', key: '/operation', component: ChartContainer,
    routes: [
      { path: '/operation/add1', exact: true, name: '运行状态', key: '/operation/add1', component: UserManagementContainer },
      { path: '/operation/add2', exact: true, name: '问题排查', key: '/operation/add2', component: UserManagementContainer },
      { path: '/operation/add3', exact: true, name: '质量管控', key: '/operation/add3', component: UserManagementContainer },
      { path: '/operation/add4', exact: true, name: '绩效考评', key: '/operation/add4', component: UserManagementContainer },
    ]
  },
  {
    path: '/knowledge', exact: true, name: '知识库', key: '/knowledge', component: ChartContainer,
    routes: [
      { path: '/knowledge/add1', exact: true, name: '法律法规类', key: '/knowledge/add1', component: UserManagementContainer },
      { path: '/knowledge/add2', exact: true, name: '名录库', key: '/knowledge/add2', component: UserManagementContainer },
      { path: '/knowledge/add3', exact: true, name: '政策库', key: '/knowledge/add3', component: UserManagementContainer },
    ]
  },
  {
    path: '/user', exact: true, name: '系统管理', key: '/knowledge', component: ChartContainer,
    routes: [
      { path: '/user/user', exact: true, name: '用户管理', key: '/knowledge/add1', component: UserManagementContainer },
      { path: '/user/role', exact: true, name: '角色管理', key: '/knowledge/add2', component: UserManagementContainer },
      { path: '/user/auth', exact: true, name: '权限管理', key: '/knowledge/add3', component: UserManagementContainer },
    ]
  },
];

export default routes
