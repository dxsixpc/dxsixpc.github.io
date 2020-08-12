(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{602:function(v,p,_){"use strict";_.r(p);var e=_(4),i=Object(e.a)({},(function(){var v=this,p=v.$createElement,_=v._self._c||p;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("blockquote",[_("p",[v._v("CSS 中单位颇多，%、px、rem、em，以及相对较新的 vw、vh。那么在对不同设备屏幕进行页面适配的过程中，如何选择这些单位以达成缩放、间距控制、字体管理等功能呢？")])]),v._v(" "),_("p",[v._v("每个单位都有各自的用途，都是在特定需求背景下被创造出，我们需要根据相应的需求来选择页面布局中所要使用的主要 CSS 单位。")]),v._v(" "),_("p",[v._v("页面适配的方式多种多样：")]),v._v(" "),_("ul",[_("li",[v._v("使用 px，结合媒体查询进行阶梯式适配，在 PC 端上被广泛使用；")]),v._v(" "),_("li",[v._v("使用 %，按照百分比布局，使用在类似图片占位的需求中；")]),v._v(" "),_("li",[v._v("使用 rem，根据 HTML 根元素的 "),_("code",[v._v("font-size")]),v._v(" 大小进行屏幕适配，在移动端上使用广泛；")]),v._v(" "),_("li",[v._v("使用 vw、vh，直接根据视图宽高进行适配。")])]),v._v(" "),_("p",[v._v("在这些大致的适配方案下，还有一些小细节可以微调，比如在使用 px 的时候，对容器进行 "),_("code",[v._v("transform: scale(.8)")]),v._v(" 这样的处理，会适当缩小；在使用 rem 的时候，需要固定屏幕左右间距为 10px。")]),v._v(" "),_("p",[v._v("一些实践中的技巧：")]),v._v(" "),_("ol",[_("li",[v._v("设计稿要求固定尺寸的元素上使用 px，如圆角、边框这些固定不变的；")]),v._v(" "),_("li",[v._v("在字体字号、间距使用 rem；")]),v._v(" "),_("li",[v._v("慎重使用 em。")])]),v._v(" "),_("p",[v._v("为什么没有提到 %、vw 和 vh 呢？因为这几个都是按比例适配，无论在 PC 端还是移动端都被广泛使用。% 是参考父容器，vw 和 vh 是参考视图，1 vw = 1% 的视图宽度，它们的使用场景都相对固定。")]),v._v(" "),_("h2",{attrs:{id:"零、前置知识"}},[v._v("零、前置知识")]),v._v(" "),_("h3",{attrs:{id:"_0-1-px-是什么？"}},[v._v("0.1-px 是什么？")]),v._v(" "),_("p",[v._v("px 是 viewport 中的像素单位，说到 viewport 像素就要说一下物理像素、逻辑像素、渲染像素：")]),v._v(" "),_("ul",[_("li",[v._v("**物理像素（physical pixel）：**反应屏幕硬件素质，一组 led 灯就代表一个物理像素。")]),v._v(" "),_("li",[v._v("**渲染像素（render pixel）：**就是系统对物理像素的再分配，比如我们在 1080p 的屏幕上可以运行 720p 的红警，运用的就是显示器的像素缩放，日常使用我们很少进行渲染像素的调整，故不再提起，默认等于物理像素。")]),v._v(" "),_("li",[v._v("**逻辑像素/点（device point / device pixel / point）：**这是一个抽象的概念，为了调和尺寸不一所导致的差异，将所有设备根据尺寸透视缩放到相等水平的观看距离之后，所得到的尺寸。对应到 ios 上就是 px，安卓上就是 dp。")]),v._v(" "),_("li",[v._v("**ppi（pixel per inch）：**每英寸像素，指的是屏幕每英寸的物理像素，ppi 越高屏幕越清晰，比如我们日常所使用的高分屏和视网膜屏，就指的是它的 ppi 指数很高。也就是假设一个 ppi160，2寸 x 3寸的屏幕，物理像素应该是 320x480。同理 ppi320，同样尺寸的屏幕，物理像素是 640x960。由于它们尺寸一致，假设它们观看距离一致，那么消除掉 ppi 的影响，他们的逻辑像素是一致的。")]),v._v(" "),_("li",[v._v("**dpr（device point ratio）：**渲染像素 / 逻辑像素，如果 ppi 以 160 为基准，dpr = ppi / 160。")])]),v._v(" "),_("p",[v._v("这时候我们再来看 viewport 中的像素 px，它本质上是 DIP（Device Independent Pixel），设备无关像素，与上述所有提到的像素概念都没有关系的一个单位，其实就是浏览器对逻辑像素进行再处理的结果，简单理解就是调整逻辑像素缩放来达到适应设备的一个中间层。")]),v._v(" "),_("p",[v._v("PC 上 viewport 并不生效，所以 PC 中的 px 就是逻辑像素，但是逻辑像素与软件实现有关，你会发现在一些浏览器上出现 viewport 没有适配系统的缩放等级，造成渲染内容过小。比如谷歌正确解释了window.devicePixelRatio 的处理，而搜狗没有，同理，360极速也没有，这就造成同样的内容，在高分屏上，搜狗需要放大才能正确显示内容。")]),v._v(" "),_("h3",{attrs:{id:"_0-2-面向逻辑像素开发的基本开发流程"}},[v._v("0.2-面向逻辑像素开发的基本开发流程")]),v._v(" "),_("ol",[_("li",[v._v("在 "),_("code",[v._v("head")]),v._v(" 中设置 "),_("code",[v._v("viewport")]),v._v(" 为 "),_("code",[v._v("widt=device-width")]),v._v(" 的使得 "),_("code",[v._v("viewport")]),v._v(" 等于逻辑像素的尺寸")]),v._v(" "),_("li",[v._v("css 中使用 px")]),v._v(" "),_("li",[v._v("flex 布局配合 vw 进行自适应")]),v._v(" "),_("li",[v._v("跨设备类型时，使用媒体查询")]),v._v(" "),_("li",[v._v("设备类型，操作逻辑差异大，考虑分离开发")])]),v._v(" "),_("p",[v._v("关于px的疑问")]),v._v(" "),_("p",[v._v("那有朋友就问，不同设备的"),_("strong",[v._v("物理像素")]),v._v("是不一样的呀，我怎么实现不同"),_("strong",[v._v("物理像素")]),v._v("的布局，如果设计师给你一张图，怎么将它转为我想要的在css里边的px")]),v._v(" "),_("p",[v._v("首先，你要读懂设计师给你设计图的意图，一般国内的设计师，给出手机版的设计图，一般是750px，注意这里的px，并不是我们的px（逻辑像素），其实是**物理像素，**因为设计师是根据iphone6或者同等设备来进行设计的，那么要知道iphone6的逻辑像素其实是 375，dpr是2，那么拿到手的设计稿，转换为逻辑像素，就得除以2，我们叫这种设计图，叫两倍图")]),v._v(" "),_("p",[v._v("同理，如果是375 + 375 + 375大小，那么我们就得除以3，叫三倍图")]),v._v(" "),_("p",[v._v("如果设计团队有使用墨刀或者蓝湖，你可以在两者里边设置你的查看尺寸，得到我们需要的逻辑像素如果设计师不用蓝湖等工具，给你的并不是375的倍数怎么办，我先说办法，原因你们自己琢磨，我不细致分析最简单的方法，设计师给你的图的物理宽度w，除以一个数x，如果得的出来的商在360 - 414之间，那么你换算的公式为【你在设计图测量出来的物理像素数除以x】，那么dpi就是x，也就是x倍图")]),v._v(" "),_("p",[v._v("那么朋友又会问，不同设备逻辑像素也不一样呀对，不一样，但问题为什么我们要将它们弄成一样？其实，不一样，才是合理的。我暂且不说原因，原因后面的文章解释")]),v._v(" "),_("p",[v._v("那么不一样的情况，怎么布局？那就靠你们技术手段，flex，流式布局，vw等")]),v._v(" "),_("p",[v._v("说说历史")]),v._v(" "),_("p",[v._v("为什么有rem来实现适应的方案，因为当年viewport在低版本安卓设备上还有兼容问题，而vw，vh还没能跑遍所有浏览器，所以flexible方案用rem来模拟vmin来实现在不同设备等比缩放的“一竹竿”方案")]),v._v(" "),_("p",[v._v("为什么说等比缩放是一竹竿，你想想在ipad这么大的设备跟和iphone5这么小的设备用同一套设计图，你就知道问题所在")]),v._v(" "),_("p",[v._v("逻辑像素是用来调和不同设备，不同dpr，不同屏幕，不同分辨率，不同观看距离之间的如何解决显示问题的方案")]),v._v(" "),_("p",[v._v("要清楚，是调和，不是解决，解决仍需要人去解决，因为不同设备，在同样观赏距离看到的内容多少肯定是不一样的")]),v._v(" "),_("p",[v._v("打个比喻，ipad和iphone观看距离是几乎一致的，但看的内容，肯定是ipad多，所以ipad是1xxx宽度逻辑像素，而iphone是3xx逻辑像素，足足是三倍，让你拿一台ipad看iphone一样多的内容，你以为ipad是老年人老花眼用的？")]),v._v(" "),_("p",[v._v("说白了，等比缩放并不是响应方案，是一竹竿偷懒的方案，而且不只是前端在偷懒，而是交互，产品，设计一起在偷懒的方案不同的设备尺寸，注定产品的交互甚至产品整个形态都不一样。简单例子，一个select，为什么在pc browser里边是下拉框，在手机里边一个弹窗菜单。")]),v._v(" "),_("p",[v._v("所以作为一个成熟的前端，如果想做好交互，应该尽可能阻止这种偷懒的行为。如果再有设计师或者产品只带着一套ui让你实现所谓pc手机自适应，你应该说清楚这一点，跟他们say no，当然如果情况不允许say no，你只能选择沟通或者充当设计交互产品的角色，对产品进行调整来实现这一点")]),v._v(" "),_("p",[v._v("vx，vxxx方案是根据屏幕尺寸等比缩放，就是等比的适应方案。rem是它备胎，当然也不用说，还有小程序的rpx也是。")]),v._v(" "),_("p",[v._v("这就是我为什么经常苦口婆心劝小程序开发者别用rpx恶心的是，小程序之前的官方文档甚至声称px是物理像素。我个人臆断，rpx在开发出来的时候，甚至小程序的团队根本还没摸清楚px的意义（起码编辑文档的人不清楚）。当然，现在小程序的文档是对的，这已经是无从考究的事情了由于文档的错误和过度宣扬rpx，导致现在的入门开发者，甚至以为只能用rpx作为单位甚者，一些所谓跨平台框架以及各种小程序的竞品都推出类似rpx的机制甚至宣扬不要使用px，岂不是劣币驱逐良币而flexible也成了第一罪人，flexible给出了一竹竿的方案让国内前端放弃思考。一些所谓大牛没有考虑到rem诞生的场景，大肆宣扬rem，让入门前端认为rem就是移动端唯一布局方案。而如今，flexible已经不再维护，其作者对移动端的布局也给出了基于逻辑像素的方案以及基于vw兼容的方案。而大部分人选择忽略这一事实或者活在那个时代")]),v._v(" "),_("p",[v._v("应该怎么实现")]),v._v(" "),_("p",[v._v("那么你可能会问，那什么方案才是合理的？当然我说了这么多，你还是觉得等比是合理的，我没话说。我以为，合理的适应方案，是px+各种布局手段为主，vx，vxxx+媒体查询为辅的方案，因为上面也说了，px是跟逻辑像素挂钩的，而逻辑像素反映的是同样观看距离设备的屏幕尺寸。既然手机和平板是同样观看距离的设备，那么，可以简单理解为，逻辑像素就等同于物理尺寸（厘米分米那种单位）一个合理的视觉产品，难道是人去调整观看距离而固定物理尺寸的？而不是固定观看范围而调整调整屏幕尺寸的？举个极端例子，电影院怎么不放一台手机去播电影，让观众都凑到屏幕前面看？那么用逻辑像素来进行布局，会是什么样的效果。逻辑像素布局，元素的物理尺寸是几乎一致的，但是在不同屏幕下看到的总体比例是不同的。这回导致一些结果，就是"),_("strong",[v._v("大屏手机看的更多")]),v._v("至于rem方案，除了盖楼的兄弟说的问题，还有会导致富文本显示错误，你想想，你把viewport改了迁就rem来实现vw，那么你页面的viewport像素就会不正常甚至异常，富文本里边如果使用了px，那么px就会变小，富文本的内容会变得小的无法看，除非你家的富文本编辑器是自己实现的或者使用iframe，不然没法解决放眼看vw已经可以在移动端浏览器大规模使用了，这也是flexible方案不维护的主要原因，所以rem这个备胎应该早就下舞台了但是可恶的是网上还有大规模鼓吹rem甚至还有说9102还在用px的言论，简直心寒")]),v._v(" "),_("p",[v._v("再说自适应和响应式")]),v._v(" "),_("p",[v._v("普遍认为响应式就是以媒体查询做为解决方案的手段，而其他都是自适应自适应和响应式可以同时存在个人认为，自适应应该只存在于一个同一类设备中，而不存在pc/手机适应，原因刚才也说了"),_("strong",[v._v("声明一下，本人并不是鼓吹读者使用响应式而不用自适应，那些拿响应式开发效率不高来吐槽的朋友消停一下，看清楚我表达的意思")]),v._v("自适应，是应该实现的，比如a手机和b手机之间就应该采用自适应。因为他们的逻辑像素跟屏幕尺寸差别不大，交互方式差别也不大。自适应是成本比较低的方案但是，即使我们需要自适应，但不代表我们需要vw，甚至是rem，那是两码事，实现自适应的方案还有很多，远古时代的流式布局，还有现代的flex，都可以给前端作为参考。")]),v._v(" "),_("p",[v._v("vx，vxxxvx，vxxx布局很麻烦，但我相信rem其实也很麻烦。px2rem？为什么要使用px来转rem？那如果我真想用px这个单位的时候怎么办？容我深思，emmmm....所以我实现了一个 rdp-loader 的方案，为啥叫rdp（relative device point），因为我也想不到还有什么单位没用上了在这里不知羞耻的放出源码，写的有些随意（因为我懒！！），你们写的应该比我好，大神轻拍"),_("img",{attrs:{src:"https://pic3.zhimg.com/v2-b3b4a32c1df57c4fc90ca60e60ceeed2_b.jpg",alt:"img"}})]),v._v(" "),_("p",[v._v("这个webpack loader可以嵌入小程序或者web mobile进行开发，使用逻辑像素的写法就可以转换成vmin或者rpx其中参数两个，useRpx，在小程序使用，size，就是设计稿的基准"),_("strong",[v._v("逻辑像素")]),v._v("当我想用等比缩放的布局的时候，我就用rdp，如果我想使用基于逻辑像素布局的时候就用px，全程无缝切换.elem {\n/* 使用等比缩放 "),_("em",[v._v("/\nwidth: 100rdp;\n/")]),v._v(" 使用逻辑像素 */\nwidth: 100px;\n}同理，在rn的实现"),_("img",{attrs:{src:"https://tva1.sinaimg.cn/large/007S8ZIlgy1gfn7cpa2e4j30oj023weg.jpg",alt:"img"}})]),v._v(" "),_("p",[_("strong",[v._v("虽然我是提供了vx，vxxx的方案，但注意一点，什么时候使用vx，vxxx的布局方案")]),v._v("我建议是，"),_("strong",[v._v("几乎不用")]),v._v("，实际上，暂时为止，我也想不到什么场景是"),_("strong",[v._v("必须")]),v._v("使用等比缩放的情况在更多的时候，我们应该使用flex或者定位配合百分比等方案来处理当然vx，vxxx是可以无缝转换rem的项目的，作为面向viewport和px不习惯或者不喜欢的朋友，可以作为一个过渡方案就像flexible github废弃后大篇幅提供了vx，vxxx的兼容处理方案一样，很多人也会误读，以为vx，vxxx是银弹希望vx，vxxx不要成为下一个rem，希望大家为viewport和px正名")]),v._v(" "),_("h3",{attrs:{id:"如何在vue项目中使用vw实现移动端适配"}},[v._v("如何在Vue项目中使用vw实现移动端适配")]),v._v(" "),_("p",[v._v("https://juejin.im/entry/5aa09c3351882555602077ca")]),v._v(" "),_("h2",{attrs:{id:"_3、慎用-em"}},[v._v("3、慎用 em")]),v._v(" "),_("p",[v._v("em 是根据使用它的元素的字体大小，转换相应的长度，如果目标对象的文本尺寸未被设置，它会一级级向上继承字体大小，一直到根元素的字体。")]),v._v(" "),_("p",[v._v("为什么慎用 em？很简单，"),_("strong",[v._v("em 会叠加计算")]),v._v("。这个特性使得 em 这个单位变得难以管理和控制，它太容易出错了，尤其是在 "),_("code",[v._v("font-size")]),v._v(" 属性上，应该做到"),_("strong",[v._v("禁止使用 em")]),v._v("。")]),v._v(" "),_("p",[v._v("em 唯一的用处是在规模可控制的小组件中，比如我们要创造一个圆角、边距根据内容字体大小而改变的 "),_("code",[v._v("button")]),v._v(" 组件，这时候我们就可以在用 px 固定完字体大小后使用 em 控制边距和圆角属性，因为 em 在 margin、padding 这些单位中的表现很好。")]),v._v(" "),_("h2",{attrs:{id:"_2、rem-还是-px"}},[v._v("2、rem 还是 px")]),v._v(" "),_("p",[v._v("px 是最直观最受欢迎的单位，px 代表")])])}),[],!1,null,null,null);p.default=i.exports}}]);