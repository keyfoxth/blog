title: DIV 垂直水平居中的几种方法
date: 2015-12-10 10:03:37
tags:
- CSS
- web
categories: 前端
---

> 15-12-10 第 2 次更新

---

直接上 [DEMO](//keyfoxth.github.io/demo/div-center.html)（请使用 Chrome 打开）。

每个方法都使用如下格式的结构：

```HTMl
<div class="method">
  <!-- 父 DIV -->
  <div class="father">
    <!-- 子 DIV -->
    <div class="son"></div>
  </div>
  <!-- 代码 -->
  <div class="code-box"></div>
</div>
```

### Method 1

```CSS
/* 子 DIV */
.son {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

这是我最常用以及最喜欢的方法，也有这样的变种：

```CSS
/* 水平居中 */
.horizontal-center {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

/* 垂直居中 */
.vertical-center {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
```

<!-- more -->

### Method 2

```CSS
/* 子 DIV */
.son {
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
```

使用这种方法时，考虑到浏览器兼容性，需要设置 `display: table;` 或者 `display: inline-block;`。

### Method 3

```CSS
/* 父 DIV */
.father {
  display: flex;
}

/* 子 DIV */
.son {
  margin: auto;
}
```

这种方法使用 flexbox 布局，使用它不需要设置父 DIV 与子 DIV 的宽高值。

### 写在最后

以上三种方法都需要注意浏览器兼容性。
