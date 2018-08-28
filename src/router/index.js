import Vue from 'vue'
import Router from 'vue-router'
import config from '@/router/config'


Vue.use(Router)

let router = new Router(config)

// 路由拦截器
router.beforeEach((to, from, next) => {
	if(to.meta.requireAuth){
		next()
	}else{
		next()
	}
})


export default router
