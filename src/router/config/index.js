/*
* @Author: Tinphic
* @Date:   2018-08-27 17:08:17
* @Last Modified by:   Tinphic
* @Last Modified time: 2018-08-27 17:22:00
*/
let home = () => import ('@/pages/home/index');
const config = {
	routes: [
		{
			path: '/',
			name: "home",
			meta: {
	            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
	        },
			component: home
		},
	]
}


export default config