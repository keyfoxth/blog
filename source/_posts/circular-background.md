title: 一个简洁的循环背景
date: 2015-10-23 18:36:32
tags:
categories: Web
---

> 15-10-24 第 2 次更新

---

不多说，直接上 [DEMO](circular-background-demo.html)。

实现的方法其实很简单，但在此之前，先介绍一些新的 CSS 长度值单位：

> **vw**、**vh**、**nmin**、**vmax**

这些都是 CSS3 的新单位，在 W3C Editor's Draft 中是这样定义的：

> ***vw unit***
> > Equal to 1% of the width of the initial containing block.

> ***vh unit***
> >  Equal to 1% of the height of the initial containing block.

> ***vmin unit***
> >  Equal to 1% of the height of the initial containing block.

> ***vmax unit***
> >  Equal to 1% of the height of the initial containing block.

> Note that the initial containing block’s size is affected by the presence of scrollbars on the viewport.

即

> 1vw = 1% viewport width（视窗宽度）
> 1vh = 1% viewport height（视窗高度）
> 1vmin = 1vw or 1vh（取决于那个跟小）
> 1vmax = 1vw or 1vh（取决于那个跟大）

<!-- more -->

注意：这里的 `viewport width` 指的是 `window.innerWidth`，不是 `window.outerWidth` 或 `screen.width`，`viewport height` 同理。同时，**IE9 下仅支持使用 `vm` 代替 `vmin`**。因此，可以这样用：

```CSS
{
  font-size: 40px;  /*IE6-8*/
  font-size: 5vm;   /*IE9*/
  font-size: 5vmin; /*高级浏览器*/
}
```
------

### 背景位置与大小

写一个 `<div class="bg"></div>`

```CSS
.bg {
  width: 200vh;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  background-size: auto 100%;
  /* 省略了 background-image 属性 */
}
```

`position: fixed; top: 0; bottom: 0; left: 0;`

1. 通过绝对定位确定高度
2. 让页面不显示滚动条

`width: 200vh; background-size: auto 100%;`（这里使用的图片大小为 2160*1080）

1. 固定背景图片的宽高比
2. 实现图片高度自适应
3. 背景在滚动时速度一定

为什么不用 `width: 100%`，之后会说明。

### 无缝循环

为了保证无缝循环，必须给 `<div class="bg"></div>` 设置一个 `::after` 伪对象

```CSS
.bg::after {
  width: 200vh;
  position: fixed;
  top: 0;
  bottom: 0;
  background-size: auto 100%;
  content: ""; /* 伪对象必须定义 content 属性 */
  left: 100%;  /* 位置紧跟 <div class="bg"></div> */
  /* 省略了 background-image 属性 */
}
```

至于怎么让页面滚动起来，直接给 `<div class="bg"></div>` 写个 `animation` 就行了

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

居中的方法很多很多，这只是其中一种比较新颖的

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

里面的文字也要水平居中

```CSS
.content {
  text-align: center;
}
```

### 其它效果

给文字来点阴影

```CSS
.content {
  -webkit-text-shadow: 3px 3px 6px #CCC;
  -moz-text-shadow:    3px 3px 6px #CCC;
  -o-text-shadow:      3px 3px 6px #CCC;
  text-shadow:         3px 3px 6px #CCC;
}
```

不能选中文本内容

```CSS
.content {
  -webkit-user-select: none;
  -moz-user-select:    none;
  -o-user-select:      none;
  user-select:         none;
}
```
