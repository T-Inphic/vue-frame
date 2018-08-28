/*
* @Author: Tinphic
* @Date:   2018-08-28 10:28:14
* @Last Modified by:   Tinphic
* @Last Modified time: 2018-08-28 17:31:19
*/


// 引入mockjs
import Mock from 'mockjs';
import config from '../api/config'
import * as mockData from './config'

//获取 mock.Random 对象
Mock.setup({
 timeout: config.timeout || 800, // 设置延迟响应，模拟向后端请求数据
});
const Random = Mock.Random;




// // Mock.mock( url, post/get , 返回的数据)
// Mock.mock('/api/home', 'get', {abc: 123});
Mock.mock('/wuyuan/home', 'get', mockData.home(Random));