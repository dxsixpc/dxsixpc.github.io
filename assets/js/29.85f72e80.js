(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{580:function(n,t,e){"use strict";e.r(t);var _=e(4),r=Object(_.a)({},(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h2",{attrs:{id:"全局对象-window"}},[n._v("全局对象 window")]),n._v(" "),e("p",[n._v("ECMAScript 规定全局对象叫做 global，但是浏览器把 window 作为全局对象（浏览器先存在的）")]),n._v(" "),e("p",[n._v("window 就是一个哈希表，有很多属性。")]),n._v(" "),e("p",[n._v("window 的属性就是全局变量。")]),n._v(" "),e("p",[n._v("这些全局变量分为两种：")]),n._v(" "),e("ol",[e("li",[n._v("一种是 ECMAScript 规定的\n"),e("ul",[e("li",[n._v("global.parseInt")]),n._v(" "),e("li",[n._v("global.parseFloat")]),n._v(" "),e("li",[n._v("global.Number")]),n._v(" "),e("li",[n._v("global.String")]),n._v(" "),e("li",[n._v("global.Boolean")]),n._v(" "),e("li",[n._v("global.Object")])])]),n._v(" "),e("li",[n._v("一种是浏览器自己加的属性\n"),e("ul",[e("li",[n._v("window.alert")]),n._v(" "),e("li",[n._v("window.prompt")]),n._v(" "),e("li",[n._v("window.comfirm")]),n._v(" "),e("li",[n._v("window.console.log")]),n._v(" "),e("li",[n._v("window.console.dir")]),n._v(" "),e("li",[n._v("window.document")]),n._v(" "),e("li",[n._v("window.document.createElement")]),n._v(" "),e("li",[n._v("window.document.getElementById")])])])]),n._v(" "),e("p",[n._v("所有 API 都可以在 MDN 里找到详细的资料。")]),n._v(" "),e("p",[n._v("今天我们学习第一种全局变量。")]),n._v(" "),e("h2",{attrs:{id:"全局函数"}},[n._v("全局函数")]),n._v(" "),e("ol",[e("li",[n._v("Number\nvar n = new Number(1) 创建一个 Number 对象\n1 与 new Number(1) 的区别是什么？看内存图")]),n._v(" "),e("li",[n._v("String\nvar s = new String('hello') 创建一个 String 对象\n'hello' 与 new String('hello') 的区别是什么？看内存图")]),n._v(" "),e("li",[n._v("Boolean\nvar b = new Boolean(true) 创建一个 Boolean 对象\ntrue 与 new Boolean(true) 的区别是什么？看内存图")]),n._v(" "),e("li",[n._v("Object\nvar o1 = {}\nvar o2 = new Object()\no1 和 o2 没区别")])]),n._v(" "),e("h2",{attrs:{id:"公用的属性藏在哪"}},[n._v("公用的属性藏在哪")]),n._v(" "),e("p",[n._v("所有对象都有 toString 和 valueOf 属性，那么我们是否有必要给每个对象一个 toString 和 valueOf 呢？")]),n._v(" "),e("p",[n._v("明显不需要。")]),n._v(" "),e("p",[n._v("JS 的做法是把 toString 和 valueOf 放在一个对象里（暂且叫做公用属性组成的对象）")]),n._v(" "),e("p",[n._v("然后让每一个对象的 "),e("code",[n._v("__proto__")]),n._v(" 存储这个「公用属性组成的对象」的地址。")]),n._v(" "),e("h2",{attrs:{id:"重要公式"}},[n._v("重要公式")]),n._v(" "),e("p",[n._v("注意大小写，number 和 Number 是不同的")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("var 对象 = new 函数()\n对象.__proto__ === 对象的构造函数.prototype\n\n// 推论\nvar number = new Number()\nnumber.__proto__ = Number.prototype\n\n\nvar object = new Object()\nobject.__proto__ = Object.prototype\n\n\nvar function = new Function()\nfunction.__proto__ = Function.prototype\n\n// 另外，所有函数都是由 Function 构造出来的，所以\nNumber.__proto__ = Function.prototype // 因为 Number 是函数，是 Function 的实例\nObject.__proto__ = Function.prototype // 因为 Object 是函数，是 Function 的实例\nFunction.__proto__ == Function.prototye // 因为 Function 是函数，是 Function 的实例！\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br"),e("span",{staticClass:"line-number"},[n._v("13")]),e("br"),e("span",{staticClass:"line-number"},[n._v("14")]),e("br"),e("span",{staticClass:"line-number"},[n._v("15")]),e("br"),e("span",{staticClass:"line-number"},[n._v("16")]),e("br"),e("span",{staticClass:"line-number"},[n._v("17")]),e("br"),e("span",{staticClass:"line-number"},[n._v("18")]),e("br"),e("span",{staticClass:"line-number"},[n._v("19")]),e("br")])])])}),[],!1,null,null,null);t.default=r.exports}}]);