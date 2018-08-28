/*
* @Author: Tinphic
* @Date:   2018-08-28 17:43:00
* @Last Modified by:   Tinphic
* @Last Modified time: 2018-08-28 17:44:08
*/
import Vue from 'vue'

//邮箱验证
Vue.filter('emailCheck',value => {
	let rule = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
	let resut = rule.test(value);
	return resut
})


//时间格式化
Vue.filter('formatDate',(value,fmt) => {
	if(value == '--'){
		return value
	}
	let date = new Date(value)
	fmt = fmt||"yyyy-MM-dd hh:mm"
	if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    let o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
    };
    for (let k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
            let str = o[k] + '';
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : ('00' + str).substr(str.length));
        }
    }
	return fmt
})

// 千分位格式化
Vue.filter('thousandth',(num) => {
	if (!num) return num;
    var intPart = Number(num).toFixed(0); //获取整数部分
    var intPartFormat = intPart.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,'); //将整数部分逢三一断
    var floatPart = ""; //预定义小数部分
    var value2Array = num.toString().split(".");
    //=2表示数据有小数位
    if (value2Array.length == 2) {
        floatPart =  "." + floatPart;
    }
    return intPartFormat + floatPart;
})
