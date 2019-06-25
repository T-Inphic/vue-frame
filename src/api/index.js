/*
* @Author: Tinphic
* @Date:   2018-08-27 15:39:22
* @Last Modified by:   Tinphic
* @Last Modified time: 2018-08-28 17:34:04
*/
import axios from 'axios'
import config from './config'
import { Message as $Message } from 'at-ui'
//取消重复请求
let pending = [], //声明一个数组用于存储每个ajax请求的取消函数和ajax标识
    cancelToken = axios.CancelToken,
    method = 'get'
let removePending = (cof) => {
    for(let p in pending){
        if(pending[p].u === cof.url + '&' + cof.method) { //当当前请求在数组中存在时执行函数体
            pending[p].f(); //执行取消操作
            pending.splice(p, 1); //把这条记录从数组中移除
        }
    }
}
//添加请求拦截器
axios.interceptors.request.use(cof => {
    removePending(cof); //在一个ajax发送前执行一下取消操作
    cof.cancelToken = new cancelToken((c)=>{
        // 这里的ajax标识我是用请求地址&请求方式拼接的字符串，当然你可以选择其他的一些方式
        pending.push({ u: cof.url + '&' + cof.method, f: c });  
    });
     return cof;
    }, error => {
     return Promise.reject(error);
});

//添加响应拦截器
axios.interceptors.response.use(res=>{
	  removePending(res.config);  //在一个ajax响应后再执行一下取消操作，把已经完成的请求从pending中移除
	  return res;
  }, error =>{
  	  return { data: { } }; //返回一个空对象，主要是防止控制台报错
});

const http = (req,data) => {
	return new Promise((resolve, reject) => {
	    axios({
		    method: req.method,
		    url: req.url,
		    data: data,
		    baseURL: config.baseURL,
		    withCredentials: false, //是否带cookie
		    headers: {
                'Content-Type': method === 'POST' || method === 'PUT' ? 'application/x-www-form-urlencoded' : 'application/json',
            	'token': '70e19e493c67139ef36349192bf9b74c'
            }
		}).then(function (res) {
			if(res.status == 200){
				$Message.success('请求成功')
				resolve(res)
			}else{

			}
		})
		.catch(function (err) {
		    reject(err)
		});
	})
}

const get = (req,data) => {
	return http({
		method: 'get',
		url: req
	},data)
}

const post = (req,data) => {
	return http({
		method: 'post',
		url: req
	},data)
}
export {
	http,
	get,
	post,
	config
}