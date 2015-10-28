title: 一个简洁的循环背景
date: 2015-10-23 18:36:32
tags:
- background
- Data URIs
- web
categories: Front-end
---

> 15-10-26 第 6 次更新

---

不多说，直接上 [DEMO](http://keyfoxth.github.io/demo/circular-background-demo.html)。

实现的方法很简单，整个 HTML 文件就 2 个 div，`.bg` 承载背景，`.content` 承载文字内容。

但在详细说明之前，先介绍点好玩的。

### vw、vh、nmin、vmax

以上都是 CSS3 中新加入的长度值单位，在 W3C Editor's Draft 中，它们是这样被定义的：

> ***vw unit***
> - Equal to 1% of the width of the initial containing block.

> ***vh unit***
> -  Equal to 1% of the height of the initial containing block.

> ***vmin unit***
> -  Equal to 1% of the height of the initial containing block.

> ***vmax unit***
> -  Equal to 1% of the height of the initial containing block.

> Note that the initial containing block’s size is affected by the presence of scrollbars on the viewport.

即

> 1vw = 1% viewport width（视窗宽度）
> 1vh = 1% viewport height（视窗高度）
> 1vmin = 1vw or 1vh（取决于那个更小）
> 1vmax = 1vw or 1vh（取决于那个更大）

<!-- more -->

注意：

1. 这里的 `viewport width` 指的是 `window.innerWidth`，不是 `window.outerWidth` 或 `screen.width`，`viewport height` 同理。
2. IE9 下仅支持使用 `vm` 代替 `vmin`。

因此，可以这样使用：

```CSS
{
  font-size: 40px;  /*IE6-8*/
  font-size: 5vm;   /*IE9*/
  font-size: 5vmin; /*高级浏览器*/
}
```

想要了解更多的相关知识，可以阅读文章末尾的相关链接。

---

### 背景设置

```HTML
<div class="bg"></div>
```

```CSS
.bg {
  width: 200vh;                 /* 为什么是 200？因为这里使用的图片大小为 2160*1080 */
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  background-image: ... ;       /* 省略 background-image 属性 */
  background-size: auto 100%;
}
```

`position: fixed; top: 0; bottom: 0; left: 0;`

1. 通过绝对定位确定高度。
2. 隐藏滚动条。

`width: 200vh; background-size: auto 100%;`

1. 固定背景图片的宽高比。
2. 实现图片高度自适应。
3. 保证背景在滚动时速度一定。

为什么不用 `width: 100%`，之后会说明。

### 无缝循环

为了保证无缝循环，必须给 `<div class="bg"></div>` 设置一个 `::after` 伪对象：

```CSS
.bg::after {
  width: 200vh;
  position: fixed;
  top: 0;
  bottom: 0;
  background-image: ... ;       /* 省略 background-image 属性 */
  background-size: auto 100%;
  content: "";                  /* 伪对象必须定义 content 属性 */
  left: 100%;                   /* 使位置紧跟 <div class="bg"></div> */
}
```

至于怎么让页面滚动起来，直接给 `<div class="bg"></div>` 写个 `animation` 就行了：

```CSS
.bg {
  -webkit-animation: slide 30s linear 0s infinite;
  -moz-animation:    slide 30s linear 0s infinite;
  -o-animation:      slide 30s linear 0s infinite;
  animation:         slide 30s linear 0s infinite;
}

@-webkit-keyframes slide {
  0%    { transform: translateX(0); }
  100%	{ transform: translateX(-100%); }
}

@-moz-keyframes slide {
  0%    { transform: translateX(0); }
  100%	{ transform: translateX(-100%); }
}

@-o-keyframes slide {
  0%    { transform: translateX(0); }
  100%	{ transform: translateX(-100%); }
}

@keyframes slide {
  0%    { transform: translateX(0); }
  100%	{ transform: translateX(-100%); }
}
```

### 内容居中

`<div class="content"></div>`

居中的方法很多很多，这只是其中一种比较新颖的：

```CSS
.content {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 150px;
  margin: auto;
}
```

里面的文字也要水平居中：

```CSS
.content {
  text-align: center;
}
```

### 额外效果

给文字来点阴影：

```CSS
.content {
  -webkit-text-shadow: 3px 3px 6px #CCC;
  -moz-text-shadow:    3px 3px 6px #CCC;
  -o-text-shadow:      3px 3px 6px #CCC;
  text-shadow:         3px 3px 6px #CCC;
}
```

不能选中文本内容：

```CSS
.content {
  -webkit-user-select: none;
  -moz-user-select:    none;
  -o-user-select:      none;
  user-select:         none;
}
```

### 总结与不足

为什么一直省略 `background-image` 属性？没错，这里使用了上篇文章介绍的 **Data URIs**，将图片进行 base64 编码后一共 8660 Bytes，通过把它写在 CSS 中实现复用，整个 HTML（未经压缩）则 11330 Bytes（11.0 KB）。

当然，这里也还有不足之处。

因为这里使用的图片大小是 2160\*1080，当视窗宽高比大于 2:1（18:9）时，在背景滚动到 `.bg::after` 的最右边后，将有一段 `window.innerWidth - window.innerHeight * 2` 的白边。

解决办法有两个：

1. 使用宽高比更大的图片 : )
2. 将 `.bg`、`.bg::after` 的 `width` 设置为 `200 * n（n 为大于1的整数）vh`，让 `background` 平铺过去。注意，不能是其它数或直接使用 `width: 100%;`，因为这样会撕裂 `background`，破坏循环。

---

### 相关链接

1. [CSS Values and Units Module Level 3](https://drafts.csswg.org/css-values-3/#viewport-relative-lengths)
2. [Viewport Sized Typography | CSS-Tricks](https://css-tricks.com/viewport-sized-typography/)
