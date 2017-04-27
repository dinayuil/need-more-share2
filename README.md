update：已加上QQ空间，人人网，豆瓣的支持。

## 起因
本来 V2MM 一直使用 [MoreBasicShare](https://github.com/revir/more-basic-share/) 相安无事的，在将 [MoreBasicShare](https://github.com/revir/more-basic-share/) 移植到 V2MM 的[博客评论系统](https://nodebb.tech/blog-comments2-bu-jin-jin-shi-yi-ge-bo-ke-ping-lun-xi-tong/)的时候，发现 [MoreBasicShare](https://github.com/revir/more-basic-share/) 有几点缺陷难以移植：

* 代码结构不好，不方便扩展新的分享方式，其中用了大量的字符串拼接；
* 依赖 jQuery, 而我们的博客评论系统是不依赖 jQuery 的；

偶然发现一个老外写的纯 Javascript 的 [Need Share Button](https://github.com/DzmVasileusky/needShareButton), 效果非常好，于是就 Clone 了过来，扩展了一下，增加了很多国内的分享网站，做得更傻瓜易用了一些。

## Demo
可以见 V2MM 上的分享按钮，此插件还包含一个 [Demo](https://github.com/revir/need-more-share2/blob/master/demo/index.html) 页面，需把项目 clone 到本地展示。

![screenshot](https://github.com/revir/need-more-share2/raw/master/screenshot.png)

## 使用方式

有多种方式使用，最简单的方法，加载 js 和 css 后，创建一个 class 名为 `need-share-button` 的分享按钮就好了，其他什么都不用做。

第一步：在网页里加载 **needsharebutton.min.js** 和 **needsharebutton.min.css**。
```markup
<!-- needsharebutton Javascript file -->
<script src="js/needsharebutton.min.js"></script>
<!-- needsharebutton CSS file -->
<link href="css/needsharebutton.min.css" rel="stylesheet" />
```

第二步：创建一个`need-share-button`，插件会自动找到所有 `need-share-button`, 制作成分享按钮。

```markup
<button  class="btn btn-default need-share-button">Share</button>
```
这样你会看到网页上的 Share Button 已经可以使用了， 还可以通过 `data-share-` 传参。

第三步：如果需要使用别的名字，可以手动调用 `needShareButton` 函数，比如：

```javascript
new needShareButton(document.getElementById('my-share-button'));
# or
new needShareButton('#my-share-button');

```

## needShareButton 函数

`needShareButton` 函数有两个参数：
1. element, 可以是 Dom 节点，也可以是 CSS 选择器;
2. options, 选项；

## Options
Options 可以通过参数传进去，也可以放在 DOM 节点里（加上 `data-share-` 前缀）。

1. iconStyle： `default` or `box`；
2. boxForm： `horizontal` or `vertical`;
3. position: `bottomCenter`, `top / middle / bottom + Left / Center / Right`;
4. networks: 默认： `'Weibo,Wechat,Douban,QQZone,Twitter,Pinterest,Facebook,GooglePlus,Reddit,Linkedin,Tumblr,Evernote'`; 注意，默认没有 `RenRen`，如果需要分享到人人网，在 networks 参数里加上 `RenRen`;
5. url: 默认： `location.href`;
6. title: 默认：`document.title`;
7. image: 默认从 `meta[property="og:image"]` 或 `meta[name="twitter:image"]` 取值；
8. description: 默认从 `meta[property="og:description"]` 或 `meta[name="twitter:description"]` 取值；

## 感谢
感谢[DzmVasileusky](https://github.com/DzmVasileusky/needShareButton)，此项目基于他的作品改编。
