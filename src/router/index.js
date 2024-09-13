	import {
		createRouter,
		createWebHashHistory
	} from 'vue-router'
	import xianluxinxi from '@/views/xianluxinxi/list'
	import gongjiaohuancheng from '@/views/gongjiaohuancheng/list'
	import zhandianxinxi from '@/views/zhandianxinxi/list'
	import yonghu from '@/views/yonghu/list'
	import storeup from '@/views/storeup/list'
	import config from '@/views/config/list'
	import users from '@/views/users/list'

export const routes = [{
		path: '/login',
		name: 'login',
		component: () => import('../views/login.vue')
	},{
		path: '/',
		name: '首页',
		component: () => import('../views/index'),
		children: [{
			path: '/',
			name: '首页',
			component: () => import('../views/HomeView.vue'),
			meta: {
				affix: true
			}
		}, {
			path: '/updatepassword',
			name: '修改密码',
			component: () => import('../views/updatepassword.vue')
		}
		
		,{
			path: '/xianluxinxi',
			name: '线路信息',
			component: xianluxinxi
		}
		,{
			path: '/gongjiaohuancheng',
			name: '公交换乘',
			component: gongjiaohuancheng
		}
		,{
			path: '/zhandianxinxi',
			name: '站点信息',
			component: zhandianxinxi
		}
		,{
			path: '/yonghu',
			name: '用户',
			component: yonghu
		}
		,{
			path: '/storeup',
			name: '我的收藏',
			component: storeup
		}
		,{
			path: '/config',
			name: '轮播图',
			component: config
		}
		,{
			path: '/users',
			name: '管理员',
			component: users
		}
		]
	},
]

const router = createRouter({
	history: createWebHashHistory(process.env.BASE_URL),
	routes
})

export default router
