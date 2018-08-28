# vue-frame

> A Vue.js frame

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

##框架使用于PC端，框架未加入vuex
###ui框架使用的是 [AT UIKIT](https://at-ui.github.io/at-ui/#/zh) 


``` bash
# src/api/requestUrl/index.js
let url = {
	'home': {
		'url': '/home', //接口链接配置
		'method': 'get',//默认get请求
	}
}

# 使用方法
self.$http(self.$url.home,{abc:123}).then((res)=>{

})


# src/api/requestUrl/index.js
let config = {
	mock: true, //是否使用mock数据
	timeout: 1000, //mock数据延时返回,单位 ms,只有mock数据时有效
	baseURL: '/wuyuan', //公共请求字段
}

```

## mock数据使用mockjs
``` bash
# src/mock/config/index.js
const home = Random => {
    let articles = [];
    for (let i = 0; i < 10; i++) {
        let newArticleObject = {
            title: Random.csentence(5, 30), //  Random.csentence( min, max )
            thumbnail_pic_s: Random.dataImage('300x250', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
            author_name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
            date: Random.date() + ' ' + Random.time() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
        }
        articles.push(newArticleObject)
    }
 
    return {
        articles: articles
    }
}

# 定义方式如上，并在src/mock/index.js添加请求地址，如下

Mock.mock('/wuyuan/home', 'get', mockData.home(Random));

```                                                                                                       