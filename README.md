# portfolio

> A Vue.js project

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

##  Some I would likt to try ;)
#### インラインスタイルのバインディング
オブジェクト構文
v-bind:style 向けのオブジェクト構文は非常に簡単です。
JavaScript オブジェクトということを除けば、ほとんど CSS のように見えます。
CSS のプロパティ名には、キャメルケース (camelCase) またはケバブケース (kebab-case: クォートとともに使うことになります) の
どちらでも使用することができます:

``` html
<div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
data: {
  activeColor: 'red',
  fontSize: 30
}
```

テンプレートをクリーンにするために、直接 style オブジェクトに束縛するのは、よいアイディアです:

``` html
<div v-bind:style="styleObject"></div>
data: {
  styleObject: {
    color: 'red',
    fontSize: '13px'
  }
}
```

ここでもまた、オブジェクト構文はしばしばオブジェクトを返す算出プロパティと併せて使用されます。

[Via](https://jp.vuejs.org/v2/guide/class-and-style.html)


### アイデア
- 三方向
- 言語の画像
- font awesome
- 言語レベルの表示、グラフみたいな
