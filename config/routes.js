[
    {
        name: 'Home',
        path: '/xadmin/index',
        icon: 'dashboard',
        component: './TyAdminBuiltIn/DashBoard'
    },
    {
        path: '/',
        redirect: '/xadmin/index',
    },
    {
        path: '/xadmin/',
        redirect: '/xadmin/index',
    },
    {
        name: '认证和授权',
        icon: 'BarsOutlined',
        path: '/xadmin/auth',
        routes:
            [
                {
                    name: '权限',
                    path: '/xadmin/auth/permission',
                    component: './AutoGenPage/PermissionList',
                },
                {
                    name: '组',
                    path: '/xadmin/auth/group',
                    component: './AutoGenPage/GroupList',
                }
            ]
    },
    {
        name: '课程管理',
        icon: 'VideoCamera',
        path: '/xadmin/lessson',
        routes: [
            {
                name: '课程方向',
                icon: 'smile',
                path: '/xadmin/lessson/label_type',
                component: './AutoGenPage/LabelTypeList',
            },
            {
                name: '课程分类',
                icon: 'smile',
                path: '/xadmin/lessson/label',
                component: './AutoGenPage/LabelList',
            },
            {
                name: '课程类型',
                icon: 'smile',
                path: '/xadmin/lessson/lesson_type',
                component: './AutoGenPage/LessonTypeList',
            },
            {
                name: '课程本课',
                icon: 'smile',
                path: '/xadmin/lessson/lesson',
                component: './AutoGenPage/LessonList',
            },
            {
                name: '课程章节',
                icon: 'smile',
                path: '/xadmin/lessson/chapter',
                component: './AutoGenPage/ChapterList',
            }, {
                name: '章节小节',
                icon: 'smile',
                path: '/xadmin/lessson/term',
                component: './AutoGenPage/TermList',
            },
            {
                name: '课程简介',
                icon: 'smile',
                path: '/xadmin/lessson/catalog',
                component: './AutoGenPage/CatalogList',
            },
            {
                name: '课程评论',
                icon: 'smile',
                path: '/xadmin/lessson/comment',
                component: './AutoGenPage/CommentList',
            },
            {
                name: '课程提问',
                icon: 'smile',
                path: '/xadmin/lessson/qa',
                component: './AutoGenPage/QaList',
            },
            {
                name: '问题状态',
                icon: 'smile',
                path: '/xadmin/lessson/qa_type',
                component: './AutoGenPage/QaTypeList',
            },
            {
                name: '课程难度',
                icon: 'smile',
                path: '/xadmin/lessson/lesson_hard_type',
                component: './AutoGenPage/LessonHardTypeList',
            },

            {
                name: '课程角标',
                icon: 'smile',
                path: '/xadmin/lessson/lesson_script',
                component: './AutoGenPage/LessonScriptList',
            },
        ],
    },
    {
        name: '专栏管理',
        icon: 'book',
        path: '/xadmin/read',
        routes: [
            {
                name: '专栏分类',
                icon: 'smile',
                path: '/xadmin/read/read_type',
                component: './AutoGenPage/ReadTypeList',
            }, {
                name: '专栏章节',
                icon: 'smile',
                path: '/xadmin/read/read_chapter',
                component: './AutoGenPage/ReadChapterList',
            }, {
                name: '章节子节',
                icon: 'smile',
                path: '/xadmin/read/read_chapter_item',
                component: './AutoGenPage/ReadChapterItemList',
            },
        ],
    },
    {
        name: '猿问管理',
        icon: 'QuestionCircle',
        path: '/xadmin/qa',
        routes: [

            {
                name: '问题列表',
                icon: 'smile',
                path: '/xadmin/qa/question',
                component: './AutoGenPage/QuestionList',
            },
            {
                name: '关注标签',
                icon: 'smile',
                path: '/xadmin/qa/label_follow',
                component: './AutoGenPage/LabelFollowList',
            },
            {
                name: '回答列表',
                icon: 'smile',
                path: '/xadmin/qa/answer',
                component: './AutoGenPage/AnswerList',
            },
        ],
    },
    {
        name: '手记管理',
        icon: 'PaperClip',
        path: '/xadmin/article',
        routes: [
            {
                name: '文章列表',
                icon: 'smile',
                path: '/xadmin/article/article',
                component: './AutoGenPage/ArticleList',
            },
            {
                name: '文章类型',
                icon: 'smile',
                path: '/xadmin/article/article_type',
                component: './AutoGenPage/ArticleTypeList',
            },
        ],
    },
    {
        name: '优惠管理',
        icon: 'MoneyCollect',
        path: '/xadmin/coupon',
        routes: [
            {
                name: '优惠券码',
                icon: 'smile',
                path: '/xadmin/coupon/coupon',
                component: './AutoGenPage/CouponList',
            },
            {
                name: '优惠状态',
                icon: 'smile',
                path: '/xadmin/coupon/coupon_status',
                component: './AutoGenPage/CouponStatusList',
            },
            {
                name: '优惠范围',
                icon: 'smile',
                path: '/xadmin/coupon/coupon_range',
                component: './AutoGenPage/CouponRangeList',
            },
        ],
    },
    {
        name: '订单管理',
        icon: 'OrderedList',
        path: '/xadmin/order',
        routes: [
            {
                name: '购物车车',
                icon: 'smile',
                path: '/xadmin/order/cart',
                component: './AutoGenPage/CartList',
            },
            {
                name: '订单列表',
                icon: 'smile',
                path: '/xadmin/order/order',
                component: './AutoGenPage/OrderList',
            }, {
                name: '订单子项',
                icon: 'smile',
                path: '/xadmin/order/order_item',
                component: './AutoGenPage/OrderItemList',
            },
            {
                name: '订单状态',
                icon: 'smile',
                path: '/xadmin/order/order_status',
                component: './AutoGenPage/OrderStatusList',
            },
        ],
    },
    {
        name: '充值管理',
        icon: 'PayCircle',
        path: '/xadmin/pay',
        routes: [
            {
                name: '充值记录',
                icon: 'smile',
                path: '/xadmin/pay/recharge',
                component: './AutoGenPage/RechargeList',
            },
            {
                name: '充值类型',
                icon: 'smile',
                path: '/xadmin/pay/recharge_action',
                component: './AutoGenPage/RechargeActionList',
            }, {
                name: '充值方式',
                icon: 'smile',
                path: '/xadmin/pay/recharge_pay',
                component: './AutoGenPage/RechargePayList',
            },
        ],
    },
    {
        name: '用户管理',
        icon: 'UsergroupAdd',
        path: '/xadmin/user',
        routes: [
            {
                name: '课程讲师',
                icon: 'smile',
                path: '/xadmin/user/teacher',
                component: './AutoGenPage/TeacherList',
            },
            {
                name: '学生类型',
                icon: 'smile',
                path: '/xadmin/user/student_type',
                component: './AutoGenPage/StudentTypeList',
            }, {
                name: '学生列表',
                icon: 'smile',
                path: '/xadmin/user/student',
                component: './AutoGenPage/StudentList',
            },
        ],
    },
    {
        name: '积分商城',
        icon: 'Shop',
        path: '/xadmin/integral/',
        routes: [
            {
                name: '商品类别',
                icon: 'smile',
                path: '/xadmin/integral/integral_type',
                component: './AutoGenPage/IntegralTypeList',
            }, {
                name: '积分商品',
                icon: 'smile',
                path: '/xadmin/integral/integral',
                component: './AutoGenPage/IntegralList',
            },
        ],
    },
    {
        name: '用户中心',
        icon: 'user',
        path: '/xadmin/user_info',
        routes: [
            {
                name: '学习课程',
                icon: 'smile',
                path: '/xadmin/user_info/user_lesson',
                component: './AutoGenPage/UserLessonList',
            },
            {
                name: '用户通知',
                icon: 'smile',
                path: '/xadmin/user_info/user_notice',
                component: './AutoGenPage/UserNoticeList',
            },
            {
                name: '搜索历史',
                icon: 'smile',
                path: '/xadmin/user_info/history',
                component: './AutoGenPage/HistoryList',
            },
            {
                name: '用户咨询',
                icon: 'smile',
                path: '/xadmin/user_info/consult',
                component: './AutoGenPage/ConsultList',
            }, {
                name: '购买账单',
                icon: 'smile',
                path: '/xadmin/user_info/bill',
                component: './AutoGenPage/BillList',
            }, {
                name: '地址信息',
                icon: 'smile',
                path: '/xadmin/user_info/address',
                component: './AutoGenPage/AddressList',
            }, {
                name: '登录类型',
                icon: 'smile',
                path: '/xadmin/user_info/log_type',
                component: './AutoGenPage/LogTypeList',

            }, {
                name: '登录日志',
                icon: 'smile',
                path: '/xadmin/user_info/log',
                component: './AutoGenPage/LogList',
            },

        ],
    },
    {
        name: '首页管理',
        icon: 'setting',
        path: '/xadmin/home',
        routes: [
            {
                name: '首页大图',
                icon: 'smile',
                path: '/xadmin/home/slider',
                component: './AutoGenPage/SliderList',
            }, {
                name: '首页菜单',
                icon: 'smile',
                path: '/xadmin/home/navigation',
                component: './AutoGenPage/NavigationList',
            }, {
                name: '公共配置',
                icon: 'smile',
                path: '/xadmin/home/common_path_config',
                component: './AutoGenPage/CommonPathConfigList',
            },
            {
                name: '首页导航',
                icon: 'smile',
                path: '/xadmin/home/nav',
                component: './AutoGenPage/NavList',
            },
            {
                name: '底部配置',
                icon: 'smile',
                path: '/xadmin/home/footer',
                component: './AutoGenPage/FooterList',
            }],

    },
    {
        name: '系统管理',
        icon: 'setting',
        path: '/xadmin/sys',
        routes: [
            {
                name: '系统日志',
                icon: 'smile',
                path: '/xadmin/sys/sys_log',
                component: './AutoGenPage/SysLogList',
            },
            {
                name: '热搜榜单',
                icon: 'smile',
                path: '/xadmin/sys/hot',
                component: './AutoGenPage/HotList',
            },
            {
                name: '系统通知',
                icon: 'smile',
                path: '/xadmin/sys/notice',
                component: './AutoGenPage/NoticeList',
            },
            {
                name: '系统用户',
                icon: 'smile',
                path: '/xadmin/sys/user',
                component: './AutoGenPage/UserList',
            },
        ],
    },
    {
        name: 'TyadminBuiltin',
        icon: 'VideoCamera',
        path: '/xadmin/sys',
        routes:
            [
                {
                    name: 'TyAdminLog',
                    icon: 'smile',
                    path: '/xadmin/sys/ty_admin_sys_log',
                    component: './TyAdminBuiltIn/TyAdminSysLogList'
                },
                {
                    name: 'TyAdminVerify',
                    icon: 'smile',
                    path: '/xadmin/sys/ty_admin_email_verify_record',
                    component: './TyAdminBuiltIn/TyAdminEmailVerifyRecordList'
                }
            ]
    },
    {
        name: 'passwordModify',
        path: '/xadmin/account/change_password',
        hideInMenu: true,
        icon: 'dashboard',
        component: './TyAdminBuiltIn/ChangePassword',
    },
    {
        component: './404',
    },
]
