# 跨域演示

## 操作

### 1.进入此文件夹(cross-origin),执行

```bash
node app.js
```

### 2.在浏览器分别打开

网址1： [http://127.0.0.1:8089/](http://127.0.0.1:8089/)

网址2： [http://localhost:8089/](http://localhost:8089/)

### 3.按住`F12`查看区别

##现象

打开网址1，在console中出现：
```
XMLHttpRequest cannot load http://localhost:8089/api. No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://127.0.0.1:8089' is therefore not allowed access.
```
打开网址2，在console中出现：
```
You get api!
```

## 解释：

#### 同源策略（Same Origin Policy）

- 协议相同
- 域名相同
- 端口相同

在`index.html`中我的请求URL是`http://localhost:8089/api`；

此URL与网址1不同源，因为域名不同，一个是127.0.0.1，一个是localhost；

此URL与网址2同源，因为协议、域名、端口都相同。
