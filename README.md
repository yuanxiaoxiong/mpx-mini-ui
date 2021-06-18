<p align="center"><img src="https://img-blog.csdnimg.cn/20210617150525810.png" alt="1000" width="25%"/></p>

<p align="center"><strong>一个基于MPX框架的迷你组件库</strong></p>

<p align="center"><a href="https://mpxjs.cn/guide/basic/start.html">MPX官网文档</a></p>

<p align="center">
<img src="https://img.shields.io/badge/frame-mpx-brightgreen.svg"/>
<img src="https://img.shields.io/badge/language-类vue-orange.svg"/>
<img src="https://img.shields.io/badge/license-Apache-blue"/>
<a href="https://jq.qq.com/?_wv=1027&k=4qPzZAnu"><img src="https://img.shields.io/badge/QQ群-539030068-blue"/></a>
</p>


<p align="center"><img src="https://img-blog.csdnimg.cn/20210618163100253.png" align="center" width="250" /></p>

## 组件库

- router 路由
- Image 图片
- List 列表



## 使用

在项目根目录的 components中选择需要引入的组件复制至你的项目中，并在使用的页面中声明：

```json
<script name="json">
	module.exports = {
  		usingComponents: {
    		router: '../components/mini-router/router'
  		}
	}
</script>
```

在 template中添加引入的组件名称：

```js
 <view class="list">
      <router routerData="{{routerList}}"></router>
 </view>
```



## License

```
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```