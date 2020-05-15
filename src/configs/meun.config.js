
const menus = [
  {
    path: '/overview',
    exact: true,
    name: '信息总览',
    key: '/overview',
    children: [
      { path: '/overview/add1', exact: true, name: '风险预警', key: '/overview/add1' },
      { path: '/overview/add2', exact: true, name: '企业分布', key: '/overview/add2' },
      { path: '/overview/add3', exact: true, name: '重大危险源分布', key: '/overview/add3' },
      { path: '/overview/add4', exact: true, name: '监测设备分布', key: '/overview/add4' },
      { path: '/overview/add5', exact: true, name: '危化品分布', key: '/overview/add5' },
      { path: '/overview/add6', exact: true, name: '气象信息', key: '/overview/add6' },
      { path: '/overview/add7', exact: true, name: '分析报告', key: '/overview/add7' },
    ]
  },
  {
    path: '/onduty', exact: true, name: '值班值守', key: '/schedule',
    children: [
      { path: '/onduty/add1', exact: true, name: '排班值守', key: '/onduty/add1' },
      { path: '/onduty/add2', exact: true, name: '警情管理', key: '/onduty/add2' },
      { path: '/onduty/add3', exact: true, name: '值班人员管理', key: '/onduty/add3' },
      { path: '/onduty/add4', exact: true, name: '定期报告', key: '/onduty/add4' },
    ]
  },
  {
    path: '/monitor', exact: true, name: '动态监测', key: '/monitor', 
    children: [
      { path: '/monitor/add1', exact: true, name: '数据质量', key: '/monitor/add1' },
      { path: '/monitor/add2', exact: true, name: '设备信息', key: '/monitor/add2' },
      { path: '/monitor/add3', exact: true, name: '报警信息', key: '/monitor/add3' },
      { path: '/monitor/add4', exact: true, name: '预警信息', key: '/monitor/add4' },
      { path: '/monitor/add5', exact: true, name: '视频信息', key: '/monitor/add5' },
      { path: '/monitor/add6', exact: true, name: '气象信息', key: '/monitor/add6' },
      { path: '/monitor/add7', exact: true, name: '地质灾害', key: '/monitor/add7' },
      { path: '/monitor/add8', exact: true, name: '安全承诺', key: '/monitor/add8' },
    ]
  },
  {
    path: '/riskassessment ', exact: true, name: '风险研判', key: '/riskassessment',
    children: [
      { path: '/riskassessment/add1', exact: true, name: '警情分析', key: '/riskassessment/add1' },
      { path: '/riskassessment/add2', exact: true, name: '警情统计', key: '/riskassessment/add2' },
    ]
  },
  {
    path: '/riskwarning ', exact: true, name: '风险预警', key: '/riskwarning', 
    children: [
      { path: '/riskwarning/add1', exact: true, name: '警情分析', key: '/riskwarning/add1' },
      { path: '/riskwarning/add2', exact: true, name: '警情统计', key: '/riskwarning/add2' },
      { path: '/riskwarning/add3', exact: true, name: '警情管理', key: '/riskwarning/add3' },
    ]
  },
  {
    path: '/consultation', exact: true, name: '会商分析', key: '/riskwarning', 
    children: [
      { path: '/consultation/add1', exact: true, name: '警情分析', key: '/consultation/add1' },
      { path: '/consultation/add2', exact: true, name: '警情统计', key: '/consultation/add2' },
      { path: '/consultation/add3', exact: true, name: '警情管理', key: '/consultation/add3' },
    ]
  },
  {
    path: '/operation', exact: true, name: '运行管理', key: '/operation', 
    children: [
      { path: '/operation/add1', exact: true, name: '运行状态', key: '/operation/add1' },
      { path: '/operation/add2', exact: true, name: '问题排查', key: '/operation/add2' },
      { path: '/operation/add3', exact: true, name: '质量管控', key: '/operation/add3' },
      { path: '/operation/add4', exact: true, name: '绩效考评', key: '/operation/add4' },
    ]
  },
  {
    path: '/knowledge', exact: true, name: '知识库', key: '/knowledge', 
    children: [
      { path: '/knowledge/add1', exact: true, name: '法律法规类', key: '/knowledge/add1' },
      { path: '/knowledge/add2', exact: true, name: '名录库', key: '/knowledge/add2' },
      { path: '/knowledge/add3', exact: true, name: '政策库', key: '/knowledge/add3' },
    ]
  },
  {
    path: '/user', exact: true, name: '系统管理', key: '/knowledge', 
    children: [
      { path: '/user/user', exact: true, name: '用户管理', key: '/knowledge/add1' },
      { path: '/user/role', exact: true, name: '角色管理', key: '/knowledge/add2' },
      { path: '/user/auth', exact: true, name: '权限管理', key: '/knowledge/add3' },
    ]
  },
];
export default menus
