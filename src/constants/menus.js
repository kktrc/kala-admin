export const menus = [
    { key: '/app/dashboard/index', title: '总览', icon: 'mobile', },
    {
        key: '/app/ui/buttons', title: '预约', icon: 'scan',
    },
    {
        key: '/app/animation', title: '订单', icon: 'rocket',
        sub: [
            { key: '/app/animation/basicAnimations', title: '基础动画', icon: '', },
            { key: '/app/animation/exampleAnimations', title: '动画案例', icon: '', },
        ],
    },
    {
        key: '/app/table', title: '营销', icon: 'copy',
        sub: [
            { key: '/app/table/basicTable', title: '每日特惠', icon: '', },
            { key: '/app/table/advancedTable', title: '活动信息', icon: '', },
            { key: '/app/table/asynchronousTable', title: '优惠信息', icon: '', },
            { key: '/app/table/asynchronousTable', title: '活动排序', icon: '', },
        ],
    },
    {
        key: '/app/form', title: '数据', icon: 'edit',
        sub: [
            { key: '/app/form/basicForm', title: '营业额汇总', icon: '', },
            { key: '/app/form/basicForm', title: '员工绩效与提成', icon: '', },
            { key: '/app/form/basicForm', title: '员工考勤', icon: '', },
            { key: '/app/form/basicForm', title: '客服交班', icon: '', },
            { key: '/app/form/basicForm', title: '操作日志', icon: '', },
        ],
    },
    {
        key: '/app/chart', title: '商家', icon: 'area-chart',
        sub: [
            { key: '/app/chart/echarts', title: '商家信息', icon: '', },
            { key: '/app/brand', title: '品牌管理', icon: '', },
            { key: '/app/shop', title: '门店管理', icon: '', },
        ],
    },
    {
        key: '/sub4', title: '设置', icon: 'switcher',
        sub: [
            { key: '/login', title: '登录', icon: '', },
            { key: '/404', title: '404', icon: '', },
        ],
    },
    {
        key: '/app/auth', title: '权限管理', icon: 'safety',
        sub: [
            { key: '/app/auth/basic', title: '基础演示', icon: '', },
            { key: '/app/auth/routerEnter', title: '路由拦截', icon: '', },
        ],
    }
];