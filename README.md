# 跨域

## 简介
- 跨域：cross-domain
- 定义：A cross-domain solution (CDS) is a means of information assurance that provides the ability to manually or automatically access or transfer information between two or more differing security domains
- 人话：JavaScript出于安全方面的考虑，不允许跨域调用其他页面的对象。

- 为什么要跨域？
    大型网站会有多个域名来加载js,css等其他资源文件，但是浏览器的同源策略阻止了这种方式。

## 同源策略（Same Origin Policy）

- 为什么会有同源策略？

    安全
    
- 没有同源策略的时候，不安全吗？

    不安全。举例，黑客网站可以访问支付宝的cookies。（CS结构中，以cookies来识别用户的）

- 谁有同源策略？

    浏览器

- 意义？

    保护cookies

- 哪个浏览器最先使用？

    1995年，Netscape Navigator 2

- 同源策略限制了什么？
 
    - 1995年 ： A网页不能打开B网页的cookies，除非这两个网页同源。
 
    - 现在： 
    
            -（1） Cookie、LocalStorage 和 IndexDB 无法读取。
            -（2） DOM 无法获得。
            -（3） AJAX 请求不能发送。

- 有什么副作用？
        对iframe和Ajax影响较大。

- 举例说明SOP的重要性？

## 跨域的方法


## 相关概念
- Cross-origin resource sharing (CORS)
- Cross-site scripting (XSS)
- Cross-site request forgery (CSRF)

## 参考
[wiki](https://en.wikipedia.org/wiki/Same-origin_policy)

[浏览器同源政策及其规避方法](http://www.ruanyifeng.com/blog/2016/04/same-origin-policy.html)

[JavaScript跨域（1）：什么是跨域，如何跨域](http://www.cnblogs.com/hustskyking/archive/2013/03/31/CDS-introduce.html)
