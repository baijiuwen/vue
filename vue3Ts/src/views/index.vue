<template>
    <div style="width: 1000px">
    <p><strong>字体属性&#xff1a;(font)</strong></p>
    <pre><code class="prism language-css">大小 <span class="token property">font-size</span><span class="token punctuation">:</span>x-large<span class="token punctuation">;</span><span class="token punctuation">(</span>特大<span class="token punctuation">)</span> xx-small<span class="token punctuation">;</span><span class="token punctuation">(</span>极小<span class="token punctuation">)</span> 一般中文用不到&#xff0c;只要用数值就可以&#xff0c;单位&#xff1a;PX、PD
    样式 <span class="token property">font-style</span><span class="token punctuation">:</span>oblique<span class="token punctuation">;</span><span class="token punctuation">(</span>偏斜体<span class="token punctuation">)</span> italic<span class="token punctuation">;</span><span class="token punctuation">(</span>斜体<span class="token punctuation">)</span> normal<span class="token punctuation">;</span><span class="token punctuation">(</span>正常<span class="token punctuation">)</span>
    行高 <span class="token property">line-height</span><span class="token punctuation">:</span>normal<span class="token punctuation">;</span><span class="token punctuation">(</span>正常<span class="token punctuation">)</span> 单位&#xff1a;PX、PD、EM
    粗细 <span class="token property">font-weight</span><span class="token punctuation">:</span>bold<span class="token punctuation">;</span><span class="token punctuation">(</span>粗体<span class="token punctuation">)</span> lighter<span class="token punctuation">;</span><span class="token punctuation">(</span>细体<span class="token punctuation">)</span> normal<span class="token punctuation">;</span><span class="token punctuation">(</span>正常<span class="token punctuation">)</span>
    <span class="token property">变体font-variant</span><span class="token punctuation">:</span> small-caps<span class="token punctuation">;</span><span class="token punctuation">(</span>小型大写字母<span class="token punctuation">)</span> normal<span class="token punctuation">;</span><span class="token punctuation">(</span>正常<span class="token punctuation">)</span>
    <span class="token property">大小写text-transform</span><span class="token punctuation">:</span> capitalize<span class="token punctuation">;</span><span class="token punctuation">(</span>首字母大写<span class="token punctuation">)</span> uppercase<span class="token punctuation">;</span><span class="token punctuation">(</span>大写<span class="token punctuation">)</span> lowercase<span class="token punctuation">;</span><span class="token punctuation">(</span>小写<span class="token punctuation">)</span> none<span class="token punctuation">;</span><span class="token punctuation">(</span>无<span class="token punctuation">)</span>
    <span class="token property">修饰text-decoration</span><span class="token punctuation">:</span> underline<span class="token punctuation">;</span><span class="token punctuation">(</span>下划线<span class="token punctuation">)</span> overline<span class="token punctuation">;</span><span class="token punctuation">(</span>上划线<span class="token punctuation">)</span> line-through<span class="token punctuation">;</span><span class="token punctuation">(</span>删除线<span class="token punctuation">)</span> blink<span class="token punctuation">;</span><span class="token punctuation">(</span>闪烁<span class="token punctuation">)</span>
    常用字体&#xff1a;<span class="token punctuation">(</span>font-family<span class="token punctuation">)</span>
    <span class="token string">&#34;Courier New&#34;</span><span class="token punctuation">,</span> Courier<span class="token punctuation">,</span> monospace<span class="token punctuation">,</span> <span class="token string">&#34;Times New Roman&#34;</span><span class="token punctuation">,</span>Times<span class="token punctuation">,</span> serif<span class="token punctuation">,</span> Arial<span class="token punctuation">,</span> Helvetica<span class="token punctuation">,</span> sans-serif<span class="token punctuation">,</span> Verdana
    </code></pre>
    <p><strong>背景属性&#xff1a; (background)</strong></p>
    <pre><code class="prism language-css"><span class="token property">色彩background-color</span><span class="token punctuation">:</span>#FFFFFF<span class="token punctuation">;</span>
    <span class="token property">图片background-image</span><span class="token punctuation">:</span><span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
    <span class="token property">重复background-repeat</span><span class="token punctuation">:</span>no-repeat<span class="token punctuation">;</span>
    <span class="token property">滚动background-attachment</span><span class="token punctuation">:</span>fixed<span class="token punctuation">;</span><span class="token punctuation">(</span>固定<span class="token punctuation">)</span> scroll<span class="token punctuation">;</span><span class="token punctuation">(</span>滚动<span class="token punctuation">)</span>
    <span class="token property">位置background-position</span><span class="token punctuation">:</span><span class="token function">left</span><span class="token punctuation">(</span>水平<span class="token punctuation">)</span> <span class="token function">top</span><span class="token punctuation">(</span>垂直<span class="token punctuation">)</span><span class="token punctuation">;</span>
    简写方法 <span class="token property">background</span><span class="token punctuation">:</span>#<span class="token function">000url</span><span class="token punctuation">(</span>..<span class="token punctuation">)</span> repeat fixed left top<span class="token punctuation">;</span>
    </code></pre>
    <p><strong>区块属性&#xff1a; (Block)</strong></p>
    <pre><code class="prism language-css"><span class="token property">字间距letter-spacing</span><span class="token punctuation">:</span>normal<span class="token punctuation">;</span> 数值
    <span class="token property">对刘text-align</span><span class="token punctuation">:</span>justify<span class="token punctuation">;</span><span class="token punctuation">(</span>两端对齐<span class="token punctuation">)</span> left<span class="token punctuation">;</span><span class="token punctuation">(</span>左对齐<span class="token punctuation">)</span> right<span class="token punctuation">;</span><span class="token punctuation">(</span>右对齐<span class="token punctuation">)</span> center<span class="token punctuation">;</span><span class="token punctuation">(</span>居中<span class="token punctuation">)</span>
    <span class="token property">缩进text-indent</span><span class="token punctuation">:</span> 数值px<span class="token punctuation">;</span>
    <span class="token property">垂直对齐vertical-align</span><span class="token punctuation">:</span>baseline<span class="token punctuation">;</span><span class="token punctuation">(</span>基线<span class="token punctuation">)</span> sub<span class="token punctuation">;</span><span class="token punctuation">(</span>下标<span class="token punctuation">)</span> super<span class="token punctuation">;</span><span class="token punctuation">(</span>下标<span class="token punctuation">)</span> top<span class="token punctuation">;</span> text-top<span class="token punctuation">;</span> middle<span class="token punctuation">;</span>bottom<span class="token punctuation">;</span> text-bottom<span class="token punctuation">;</span>
    <span class="token property">词间距word-spacing</span><span class="token punctuation">:</span>normal<span class="token punctuation">;</span> 数值
    <span class="token property">空格white-space</span><span class="token punctuation">:</span>pre<span class="token punctuation">;</span><span class="token punctuation">(</span>保留<span class="token punctuation">)</span> nowrap<span class="token punctuation">;</span><span class="token punctuation">(</span>不换行<span class="token punctuation">)</span>
    <span class="token property">显示display</span><span class="token punctuation">:</span>block<span class="token punctuation">;</span><span class="token punctuation">(</span>块<span class="token punctuation">)</span> inline<span class="token punctuation">;</span><span class="token punctuation">(</span>内嵌<span class="token punctuation">)</span> list-item<span class="token punctuation">;</span><span class="token punctuation">(</span>列表项<span class="token punctuation">)</span> run-in<span class="token punctuation">;</span><span class="token punctuation">(</span>追加部分<span class="token punctuation">)</span> compact<span class="token punctuation">;</span><span class="token punctuation">(</span>紧凑<span class="token punctuation">)</span> marker<span class="token punctuation">;</span><span class="token punctuation">(</span>标记<span class="token punctuation">)</span> table<span class="token punctuation">;</span> inline-table<span class="token punctuation">;</span>table-raw-group<span class="token punctuation">;</span> table-header-group<span class="token punctuation">;</span> table-footer-group<span class="token punctuation">;</span> table-raw<span class="token punctuation">;</span> table-column-group<span class="token punctuation">;</span>table-column<span class="token punctuation">;</span> table-cell<span class="token punctuation">;</span> table-caption<span class="token punctuation">;</span><span class="token punctuation">(</span>表格标题<span class="token punctuation">)</span>
    </code></pre>
    <p><strong>方框属性&#xff1a; (Box)</strong></p>
    <pre><code class="prism language-css"><span class="token property">width</span><span class="token punctuation">:</span><span class="token punctuation">;</span> <span class="token property">height</span><span class="token punctuation">:</span><span class="token punctuation">;</span> <span class="token property">float</span><span class="token punctuation">:</span><span class="token punctuation">;</span> <span class="token property">clear</span><span class="token punctuation">:</span>both<span class="token punctuation">;</span> <span class="token property">margin</span><span class="token punctuation">:</span><span class="token punctuation">;</span> <span class="token property">padding</span><span class="token punctuation">:</span><span class="token punctuation">;</span>   顺序&#xff1a;上右下左
    </code></pre>
    <p><strong>边框属性&#xff1a; (Border)</strong></p>
    <pre><code class="prism language-css"><span class="token property">border-style</span><span class="token punctuation">:</span> dotted<span class="token punctuation">;</span><span class="token punctuation">(</span>点线<span class="token punctuation">)</span> dashed<span class="token punctuation">;</span><span class="token punctuation">(</span>虚线<span class="token punctuation">)</span> solid<span class="token punctuation">;</span> double<span class="token punctuation">;</span><span class="token punctuation">(</span>双线<span class="token punctuation">)</span> groove<span class="token punctuation">;</span><span class="token punctuation">(</span>槽线<span class="token punctuation">)</span> ridge<span class="token punctuation">;</span><span class="token punctuation">(</span>脊状<span class="token punctuation">)</span> inset<span class="token punctuation">;</span><span class="token punctuation">(</span>凹陷<span class="token punctuation">)</span> outset<span class="token punctuation">;</span>
    <span class="token property">border-width</span><span class="token punctuation">:</span><span class="token punctuation">;</span> 边框宽度
    <span class="token property">border-color</span><span class="token punctuation">:</span>#<span class="token punctuation">;</span>
    简写方法border&#xff1a;width style color<span class="token punctuation">;</span>
    </code></pre>
    <p><strong>列表属性&#xff1a; (List-style)</strong></p>
    <pre><code class="prism language-css"><span class="token property">类型list-style-type</span><span class="token punctuation">:</span>  disc<span class="token punctuation">;</span><span class="token punctuation">(</span>圆点<span class="token punctuation">)</span> circle<span class="token punctuation">;</span><span class="token punctuation">(</span>圆圈<span class="token punctuation">)</span> square<span class="token punctuation">;</span><span class="token punctuation">(</span>方块<span class="token punctuation">)</span> decimal<span class="token punctuation">;</span><span class="token punctuation">(</span>数字<span class="token punctuation">)</span> lower-roman<span class="token punctuation">;</span><span class="token punctuation">(</span>小罗码数字<span class="token punctuation">)</span> upper-roman<span class="token punctuation">;</span>lower-alpha<span class="token punctuation">;</span> upper-alpha<span class="token punctuation">;</span>
    <span class="token property">位置list-style-position</span><span class="token punctuation">:</span>outside<span class="token punctuation">;</span><span class="token punctuation">(</span>外<span class="token punctuation">)</span> inside<span class="token punctuation">;</span>
    <span class="token property">图像list-style-image</span><span class="token punctuation">:</span><span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>..<span class="token punctuation">)</span></span><span class="token punctuation">;</span>
    </code></pre>
    <p><strong>定位属性&#xff1a; (Position)</strong></p>
    <pre><code class="prism language-css"><span class="token property">Position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span> relative<span class="token punctuation">;</span> static<span class="token punctuation">;</span>
    <span class="token property">visibility</span><span class="token punctuation">:</span> inherit<span class="token punctuation">;</span> visible<span class="token punctuation">;</span> hidden<span class="token punctuation">;</span>
    <span class="token property">overflow</span><span class="token punctuation">:</span> visible<span class="token punctuation">;</span> hidden<span class="token punctuation">;</span> scroll<span class="token punctuation">;</span> auto<span class="token punctuation">;</span>
    <span class="token property">clip</span><span class="token punctuation">:</span> <span class="token function">rect</span><span class="token punctuation">(</span>12px<span class="token punctuation">,</span>auto<span class="token punctuation">,</span>12px<span class="token punctuation">,</span>auto<span class="token punctuation">)</span> <span class="token punctuation">(</span>裁切<span class="token punctuation">)</span> 
    </code></pre>
    <hr />
    <p>css属性代码大全<br /> <strong>一 CSS文字属性&#xff1a;</strong></p>
    <pre><code class="prism language-css"><span class="token property">color</span> <span class="token punctuation">:</span> #999999<span class="token punctuation">;</span> /\*文字颜色\*/
    <span class="token property">font-family</span> <span class="token punctuation">:</span> 宋体<span class="token punctuation">,</span>sans-serif<span class="token punctuation">;</span>/\*文字字体\*/ 
    <span class="token property">font-size</span> <span class="token punctuation">:</span> 9pt<span class="token punctuation">;</span> /\*文字大小\*/ 
    <span class="token property">font-style</span><span class="token punctuation">:</span>itelic<span class="token punctuation">;</span> /\*文字斜体\*/ 
    <span class="token property">font-variant</span><span class="token punctuation">:</span>small-caps<span class="token punctuation">;</span> /\*小字体\*/ 
    <span class="token property">letter-spacing</span> <span class="token punctuation">:</span> 1pt<span class="token punctuation">;</span> /\*字间距离\*/ 
    <span class="token property">line-height</span> <span class="token punctuation">:</span> 200%<span class="token punctuation">;</span> /\*设置行高\*/ 
    <span class="token property">font-weight</span><span class="token punctuation">:</span>bold<span class="token punctuation">;</span> /\*文字粗体\*/ 
    <span class="token property">vertical-align</span><span class="token punctuation">:</span>sub<span class="token punctuation">;</span> /\*下标字\*/ 
    <span class="token property">vertical-align</span><span class="token punctuation">:</span>super<span class="token punctuation">;</span> /\*上标字\*/ 
    <span class="token property">text-decoration</span><span class="token punctuation">:</span>line-through<span class="token punctuation">;</span> /\*加删除线\*/ 
    <span class="token property">text-decoration</span><span class="token punctuation">:</span> overline<span class="token punctuation">;</span> /\*加顶线\*/ 
    <span class="token property">text-decoration</span><span class="token punctuation">:</span>underline<span class="token punctuation">;</span> /\*加下划线\*/ 
    <span class="token property">text-decoration</span><span class="token punctuation">:</span>none<span class="token punctuation">;</span> /\*删除链接下划线\*/ 
    <span class="token property">text-transform</span> <span class="token punctuation">:</span> capitalize<span class="token punctuation">;</span> /\*首字大写\*/ 
    <span class="token property">text-transform</span> <span class="token punctuation">:</span> uppercase<span class="token punctuation">;</span> /\*英文大写\*/ 
    <span class="token property">text-transform</span> <span class="token punctuation">:</span> lowercase<span class="token punctuation">;</span> /\*英文小写\*/ 
    <span class="token property">text-align</span><span class="token punctuation">:</span>right<span class="token punctuation">;</span> /\*文字右对齐\*/ 
    <span class="token property">text-align</span><span class="token punctuation">:</span>left<span class="token punctuation">;</span> /\*文字左对齐\*/ 
    <span class="token property">text-align</span><span class="token punctuation">:</span>center<span class="token punctuation">;</span> /\*文字居中对齐\*/ 
    <span class="token property">text-align</span><span class="token punctuation">:</span>justify<span class="token punctuation">;</span> /\*文字分散对齐\*/ 
    vertical-align属性
    <span class="token property">vertical-align</span><span class="token punctuation">:</span>top<span class="token punctuation">;</span> /\*垂直向上对齐\*/ 
    <span class="token property">vertical-align</span><span class="token punctuation">:</span>bottom<span class="token punctuation">;</span> /\*垂直向下对齐\*/ 
    <span class="token property">vertical-align</span><span class="token punctuation">:</span>middle<span class="token punctuation">;</span> /\*垂直居中对齐\*/ 
    <span class="token property">vertical-align</span><span class="token punctuation">:</span>text-top<span class="token punctuation">;</span> /\*文字垂直向上对齐\*/ 
    <span class="token property">vertical-align</span><span class="token punctuation">:</span>text-bottom<span class="token punctuation">;</span> /\*文字垂直向下对齐\*/ 
    </code></pre>
    <p><strong>二、CSS边框空白</strong></p>
    <pre><code class="prism language-css"><span class="token property">padding-top</span><span class="token punctuation">:</span>10px<span class="token punctuation">;</span> /\*上边框留空白\*/ 
    <span class="token property">padding-right</span><span class="token punctuation">:</span>10px<span class="token punctuation">;</span> /\*右边框留空白\*/ 
    <span class="token property">padding-bottom</span><span class="token punctuation">:</span>10px<span class="token punctuation">;</span> /\*下边框留空白\*/ 
    <span class="token property">padding-left</span><span class="token punctuation">:</span>10px<span class="token punctuation">;</span> /\*左边框留空白
    </code></pre>
    <p><strong>三、CSS符号属性&#xff1a;</strong></p>
    <pre><code class="prism language-css"><span class="token property">list-style-type</span><span class="token punctuation">:</span>none<span class="token punctuation">;</span> /\*不编号\*/ 
    <span class="token property">list-style-type</span><span class="token punctuation">:</span>decimal<span class="token punctuation">;</span> /\*阿拉伯数字\*/ 
    <span class="token property">list-style-type</span><span class="token punctuation">:</span>lower-roman<span class="token punctuation">;</span> /\*小写罗马数字\*/ 
    <span class="token property">list-style-type</span><span class="token punctuation">:</span>upper-roman<span class="token punctuation">;</span> /\*大写罗马数字\*/ 
    <span class="token property">list-style-type</span><span class="token punctuation">:</span>lower-alpha<span class="token punctuation">;</span> /\*小写英文字母\*/ 
    <span class="token property">list-style-type</span><span class="token punctuation">:</span>upper-alpha<span class="token punctuation">;</span> /\*大写英文字母\*/ 
    <span class="token property">list-style-type</span><span class="token punctuation">:</span>disc<span class="token punctuation">;</span> /\*实心圆形符号\*/ 
    <span class="token property">list-style-type</span><span class="token punctuation">:</span>circle<span class="token punctuation">;</span> /\*空心圆形符号\*/ 
    <span class="token property">list-style-type</span><span class="token punctuation">:</span>square<span class="token punctuation">;</span> /\*实心方形符号\*/ 
    <span class="token property">list-style-image</span><span class="token punctuation">:</span><span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>/dot.gif<span class="token punctuation">)</span></span><span class="token punctuation">;</span> /\*图片式符号\*/ 
    <span class="token property">list-style-position</span><span class="token punctuation">:</span> outside<span class="token punctuation">;</span> /\*凸排\*/ 
    <span class="token property">list-style-position</span><span class="token punctuation">:</span>inside<span class="token punctuation">;</span> /\*缩进\*/ 
    </code></pre>
    <p><strong>四、CSS背景样式&#xff1a;</strong></p>
    <pre><code class="prism language-css"><span class="token property">background-color</span><span class="token punctuation">:</span>#F5E2EC<span class="token punctuation">;</span> /\*背景颜色\*/ 
    <span class="token property">background</span><span class="token punctuation">:</span>transparent<span class="token punctuation">;</span> /\*透视背景\*/ 
    <span class="token property">background-image</span> <span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>/image/bg.gif<span class="token punctuation">)</span></span><span class="token punctuation">;</span> /\*背景图片\*/ 
    <span class="token property">background-attachment</span> <span class="token punctuation">:</span> fixed<span class="token punctuation">;</span> /\*浮水印固定背景\*/ 
    <span class="token property">background-repeat</span> <span class="token punctuation">:</span> repeat<span class="token punctuation">;</span> /\*重复排列-网页默认\*/ 
    <span class="token property">background-repeat</span> <span class="token punctuation">:</span> no-repeat<span class="token punctuation">;</span> /\*不重复排列\*/ 
    <span class="token property">background-repeat</span> <span class="token punctuation">:</span> repeat-x<span class="token punctuation">;</span> /\*在x轴重复排列\*/ 
    <span class="token property">background-repeat</span> <span class="token punctuation">:</span> repeat-y<span class="token punctuation">;</span> /\*在y轴重复排列\*/ 
    指定背景位置
    <span class="token property">background-position</span> <span class="token punctuation">:</span> 90% 90%<span class="token punctuation">;</span> /\*背景图片x与y轴的位置\*/ 
    <span class="token property">background-position</span> <span class="token punctuation">:</span> top<span class="token punctuation">;</span> /\*向上对齐\*/ 
    <span class="token property">background-position</span> <span class="token punctuation">:</span> buttom<span class="token punctuation">;</span> /\*向下对齐\*/ 
    <span class="token property">background-position</span> <span class="token punctuation">:</span> left<span class="token punctuation">;</span> /\*向左对齐\*/ 
    <span class="token property">background-position</span> <span class="token punctuation">:</span> right<span class="token punctuation">;</span> /\*向右对齐\*/ 
    <span class="token property">background-position</span> <span class="token punctuation">:</span> center<span class="token punctuation">;</span> /\*居中对齐\*/ 
    </code></pre>
    <p><strong>五、CSS连接属性&#xff1a;</strong></p>
    <pre><code class="prism language-css"><span class="token selector">a /\*所有超链接\*/ 
    a:link /\*超链接文字格式\*/ 
    a:visited /\*浏览过的链接文字格式\*/ 
    a:active /\*按下链接的格式\*/ 
    a:hover /\*鼠标转到链接\*/ 
    鼠标光标样式&#xff1a;
    链接手指 CURSOR: hand 
    十字体cursor:crosshair 
    箭头朝下cursor:s-resize 
    十字箭头 cursor:move 
    箭头朝右 cursor:move 
    加一问号 cursor:help 
    箭头朝左cursor:w-resize 
    箭头朝上cursor:n-resize 
    箭头朝右上cursor:ne-resize 
    箭头朝左上cursor:nw-resize 
    文字I型 cursor:text 
    箭头斜右下cursor:se-resize 
    箭头斜左下cursor:sw-resize 
    漏斗 cursor:wait 
    光标图案(IE6) p</span> <span class="token punctuation">{<!-- --></span><span class="token property">cursor</span><span class="token punctuation">:</span><span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&#34;光标文件名.cur&#34;</span><span class="token punctuation">)</span></span><span class="token punctuation">,</span>text<span class="token punctuation">;</span><span class="token punctuation">}</span> 
    </code></pre>
    <p><strong>六、CSS框线一览表&#xff1a;</strong></p>
    <pre><code class="prism language-css"><span class="token property">border-top</span> <span class="token punctuation">:</span> 1px solid #6699cc<span class="token punctuation">;</span> /\*上框线\*/ 
    <span class="token property">border-bottom</span> <span class="token punctuation">:</span> 1px solid #6699cc<span class="token punctuation">;</span> /\*下框线\*/ 
    <span class="token property">border-left</span> <span class="token punctuation">:</span> 1px solid #6699cc<span class="token punctuation">;</span> /\*左框线\*/ 
    <span class="token property">border-right</span> <span class="token punctuation">:</span> 1px solid #6699cc<span class="token punctuation">;</span> /\*右框线\*/ 
    以上是建议书写方式<span class="token punctuation">,</span><span class="token property">但也可以使用常规的方式如下</span><span class="token punctuation">:</span>
    <span class="token property">border-top-color</span> <span class="token punctuation">:</span> #369 /\*设置上框线top颜色\*/ 
    <span class="token property">border-top-width</span> <span class="token punctuation">:</span>1px /\*设置上框线top宽度\*/ 
    <span class="token property">border-top-style</span> <span class="token punctuation">:</span> solid/\*设置上框线top样式\*/ 
    其他框线样式
    solid /\*实线框\*/ 
    dotted /\*虚线框\*/ 
    double /\*双线框\*/ 
    groove /\*立体内凸框\*/ 
    ridge /\*立体浮雕框\*/ 
    inset /\*凹框\*/ 
    outset /\*凸框\*/ 
    </code></pre>
    <p><strong>七、CSS表单运用&#xff1a;</strong></p>
    <pre><code class="prism language-css">文字方块 
    按钮 
    复选框 
    选择钮 
    多行文字方块 
    下拉式菜单选项1选项2 
    </code></pre>
    <p><strong>八、CSS边界样式&#xff1a;</strong></p>
    <pre><code class="prism language-css"><span class="token property">margin-top</span><span class="token punctuation">:</span>10px<span class="token punctuation">;</span> /\*上边界\*/ 
    <span class="token property">margin-right</span><span class="token punctuation">:</span>10px<span class="token punctuation">;</span> /\*右边界值\*/ 
    <span class="token property">margin-bottom</span><span class="token punctuation">:</span>10px<span class="token punctuation">;</span> /\*下边界值\*/ 
    <span class="token property">margin-left</span><span class="token punctuation">:</span>10px<span class="token punctuation">;</span> /\*左边界值\*/ 
    </code></pre>
    <p><strong>CSS 属性&#xff1a;字体样式(Font Style)</strong></p>
    <pre><code class="prism language-css"><span class="token selector">序号中文说明标记语法 
    1 字体样式</span><span class="token punctuation">{<!-- --></span><span class="token property">font</span><span class="token punctuation">:</span>font-style font-variant font-weight font-size font-family<span class="token punctuation">}</span> 
    <span class="token selector">2 字体类型</span><span class="token punctuation">{<!-- --></span><span class="token property">font-family</span><span class="token punctuation">:</span><span class="token string">&#34;字体1&#34;</span><span class="token punctuation">,</span><span class="token string">&#34;字体2&#34;</span><span class="token punctuation">,</span><span class="token string">&#34;字体3&#34;</span><span class="token punctuation">,</span>...<span class="token punctuation">}</span> 
    <span class="token selector">3 字体大小</span> <span class="token punctuation">{<!-- --></span><span class="token property">font-size</span><span class="token punctuation">:</span>数值|inherit| medium| large|larger| x-large| xx-large| small| smaller| x-small| xx-small<span class="token punctuation">}</span> 
    <span class="token selector">4 字体风格</span><span class="token punctuation">{<!-- --></span><span class="token property">font-style</span><span class="token punctuation">:</span>inherit|italic|normal|oblique<span class="token punctuation">}</span> 
    <span class="token selector">5 字体粗细</span> <span class="token punctuation">{<!-- --></span><span class="token property">font-weight</span><span class="token punctuation">:</span>100-900|bold|bolder|lighter|normal<span class="token punctuation">;</span><span class="token punctuation">}</span> 
    <span class="token selector">6 字体颜色</span> <span class="token punctuation">{<!-- --></span><span class="token property">color</span><span class="token punctuation">:</span>数值<span class="token punctuation">;</span><span class="token punctuation">}</span> 
    <span class="token selector">7 阴影颜色</span><span class="token punctuation">{<!-- --></span><span class="token property">text-shadow</span><span class="token punctuation">:</span>16位色值<span class="token punctuation">}</span> 
    <span class="token selector">8 字体行高</span> <span class="token punctuation">{<!-- --></span><span class="token property">line-height</span><span class="token punctuation">:</span>数值|inherit|normal<span class="token punctuation">;</span><span class="token punctuation">}</span> 
    <span class="token selector">9 字间距</span> <span class="token punctuation">{<!-- --></span><span class="token property">letter-spacing</span><span class="token punctuation">:</span>数值|inherit|normal<span class="token punctuation">}</span> 
    <span class="token selector">10 单词间距</span><span class="token punctuation">{<!-- --></span><span class="token property">word-spacing</span><span class="token punctuation">:</span>数值|inherit|normal<span class="token punctuation">}</span> 
    <span class="token selector">11 字体变形</span><span class="token punctuation">{<!-- --></span><span class="token property">font-variant</span><span class="token punctuation">:</span>inherit|normal|small-cps <span class="token punctuation">}</span> 
    <span class="token selector">12 英文转换</span><span class="token punctuation">{<!-- --></span><span class="token property">text-transform</span><span class="token punctuation">:</span>inherit|none|capitalize|uppercase|lowercase<span class="token punctuation">}</span> 
    <span class="token selector">13 字体变形</span> <span class="token punctuation">{<!-- --></span><span class="token property">font-size-adjust</span><span class="token punctuation">:</span>inherit|none<span class="token punctuation">}</span> 
    <span class="token selector">14 字体</span><span class="token punctuation">{<!-- --></span><span class="token property">font-stretch</span><span class="token punctuation">:</span>condensed|expanded|extra-condensed|extra-expanded|inherit|narrower|normal|semi-condensed|semi-expanded|ultra-condensed|ultra-expanded|wider<span class="token punctuation">}</span> 
    </code></pre>
    <p><strong>文本样式(Text Style)</strong></p>
    <pre><code class="prism language-css"><span class="token selector">序号中文说明标记语法 
    1 行间距</span> <span class="token punctuation">{<!-- --></span><span class="token property">line-height</span><span class="token punctuation">:</span>数值|inherit|normal<span class="token punctuation">;</span><span class="token punctuation">}</span> 
    <span class="token selector">2 文本修饰</span><span class="token punctuation">{<!-- --></span><span class="token property">text-decoration</span><span class="token punctuation">:</span>inherit|none|underline|overline|line-through|blink<span class="token punctuation">}</span> 
    <span class="token selector">3 段首空格</span> <span class="token punctuation">{<!-- --></span><span class="token property">text-indent</span><span class="token punctuation">:</span>数值|inherit<span class="token punctuation">}</span> 
    <span class="token selector">4 水平对齐</span><span class="token punctuation">{<!-- --></span><span class="token property">text-align</span><span class="token punctuation">:</span>left|right|center|justify<span class="token punctuation">}</span> 
    <span class="token selector">5 垂直对齐</span><span class="token punctuation">{<!-- --></span><span class="token property">vertical-align</span><span class="token punctuation">:</span>inherit|top|bottom|text-top|text-bottom|baseline|middle|sub|super<span class="token punctuation">}</span> 
    <span class="token selector">6 书写方式</span><span class="token punctuation">{<!-- --></span><span class="token property">writing-mode</span><span class="token punctuation">:</span>lr-tb|tb-rl<span class="token punctuation">}</span> 
    </code></pre>
    <p><strong>背景样式</strong></p>
    <pre><code class="prism language-css"><span class="token selector">序号中文说明标记语法 
    1 背景颜色</span><span class="token punctuation">{<!-- --></span><span class="token property">background-color</span><span class="token punctuation">:</span>数值<span class="token punctuation">}</span> 
    <span class="token selector">2 背景图片</span><span class="token punctuation">{<!-- --></span><span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>URL<span class="token punctuation">)</span></span>|none<span class="token punctuation">}</span> 
    <span class="token selector">3 背景重复</span><span class="token punctuation">{<!-- --></span><span class="token property">background-repeat</span><span class="token punctuation">:</span>inherit|no-repeat|repeat|repeat-x|repeat-y<span class="token punctuation">}</span> 
    <span class="token selector">4 背景固定</span><span class="token punctuation">{<!-- --></span><span class="token property">background-attachment</span><span class="token punctuation">:</span>fixed|scroll<span class="token punctuation">}</span> 
    <span class="token selector">5 背景定位</span> <span class="token punctuation">{<!-- --></span><span class="token property">background-position</span><span class="token punctuation">:</span>数值|top|bottom|left|right|center<span class="token punctuation">}</span> 
    <span class="token selector">6 背影样式</span> <span class="token punctuation">{<!-- --></span><span class="token property">background</span><span class="token punctuation">:</span>背景颜色|背景图象|背景重复|背景附件|背景位置<span class="token punctuation">}</span> 
    </code></pre>
    <p><strong>框架样式(BoxStyle)</strong></p>
    <pre><code class="prism language-css"><span class="token selector">序号中文说明标记语法 
    1 边界留白</span><span class="token punctuation">{<!-- --></span><span class="token property">margin</span><span class="token punctuation">:</span>margin-top margin-right margin-bottom margin-left<span class="token punctuation">}</span> 
    <span class="token selector">2 补　　白</span><span class="token punctuation">{<!-- --></span><span class="token property">padding</span><span class="token punctuation">:</span>padding-top padding-right padding-bottom padding-left<span class="token punctuation">}</span> 
    <span class="token selector">3 边框宽度</span><span class="token punctuation">{<!-- --></span><span class="token property">border-width</span><span class="token punctuation">:</span>border-top-width border-right-width border-bottom-widthborder-left-width<span class="token punctuation">}</span>
    <span class="token selector">宽度值&#xff1a;thin|medium|thick|数值 
    4 边框颜色</span><span class="token punctuation">{<!-- --></span><span class="token property">border-color</span><span class="token punctuation">:</span>数值数值数值数值<span class="token punctuation">}</span>　　<span class="token selector">数值&#xff1a;分别代表top、right、bottom、left颜色值 
    5 边框风格</span><span class="token punctuation">{<!-- --></span><span class="token property">border-style</span><span class="token punctuation">:</span>none|hidden|inherit|dashed|solid|double|inset|outset|ridge|groove<span class="token punctuation">}</span> 
    <span class="token selector">6 边　　框</span><span class="token punctuation">{<!-- --></span><span class="token property">border</span><span class="token punctuation">:</span>border-width border-style color<span class="token punctuation">}</span> 
      <span class="token selector">上边框</span><span class="token punctuation">{<!-- --></span><span class="token property">border-top</span><span class="token punctuation">:</span>border-top-width border-style color<span class="token punctuation">}</span> 
      <span class="token selector">右边框</span><span class="token punctuation">{<!-- --></span><span class="token property">border-right</span><span class="token punctuation">:</span>border-right-width border-style color<span class="token punctuation">}</span> 
      <span class="token selector">下边框</span><span class="token punctuation">{<!-- --></span><span class="token property">border-bottom</span><span class="token punctuation">:</span>border-bottom-width border-style color<span class="token punctuation">}</span> 
      <span class="token selector">左边框</span><span class="token punctuation">{<!-- --></span><span class="token property">border-left</span><span class="token punctuation">:</span>border-left-width border-style color<span class="token punctuation">}</span> 
    <span class="token selector">7 宽　　度</span> <span class="token punctuation">{<!-- --></span><span class="token property">width</span><span class="token punctuation">:</span>长度|百分比| auto<span class="token punctuation">}</span> 
    <span class="token selector">8 高　　度</span> <span class="token punctuation">{<!-- --></span><span class="token property">height</span><span class="token punctuation">:</span>数值|auto<span class="token punctuation">}</span> 
    <span class="token selector">9 漂　　浮</span><span class="token punctuation">{<!-- --></span><span class="token property">float</span><span class="token punctuation">:</span>left|right|none<span class="token punctuation">}</span> 
    <span class="token selector">10 清　　除</span><span class="token punctuation">{<!-- --></span><span class="token property">clear</span><span class="token punctuation">:</span>none|left|right|both<span class="token punctuation">}</span> 
    </code></pre>
    <p><strong>分类列表</strong></p>
    <pre><code class="prism language-css"><span class="token selector">序号中文说明标记语法 
    1 控制显示</span><span class="token punctuation">{<!-- --></span><span class="token property">display</span><span class="token punctuation">:</span>none|block|inline|list-item<span class="token punctuation">}</span> 
    <span class="token selector">2 控制空白</span><span class="token punctuation">{<!-- --></span><span class="token property">white-space</span><span class="token punctuation">:</span>normal|pre|nowarp<span class="token punctuation">}</span> 
    <span class="token selector">3 符号列表</span><span class="token punctuation">{<!-- --></span><span class="token property">list-style-type</span><span class="token punctuation">:</span>disc|circle|square|decimal|lower-roman|upper-roman|lower-alpha|upper-alpha|none<span class="token punctuation">}</span> 
    <span class="token selector">4 图形列表</span><span class="token punctuation">{<!-- --></span><span class="token property">list-style-image</span><span class="token punctuation">:</span>URL<span class="token punctuation">}</span> 
    <span class="token selector">5 位置列表</span><span class="token punctuation">{<!-- --></span><span class="token property">list-style-position</span><span class="token punctuation">:</span>inside|outside<span class="token punctuation">}</span> 
    <span class="token selector">6 目录列表</span> <span class="token punctuation">{<!-- --></span><span class="token property">list-style</span><span class="token punctuation">:</span>目录样式类型|目录样式位置|url<span class="token punctuation">}</span> 
    <span class="token selector">7 鼠标形状</span><span class="token punctuation">{<!-- --></span><span class="token property">cursor</span><span class="token punctuation">:</span>hand|crosshair|text|wait|move|help|e-resize|nw-resize|w-resize|s-resize|se-resize|sw-resize<span class="token punctuation">}</span>
    </code></pre>
    <hr />
    <h1><a id="_324"></a>下面是我自己整理的</h1>
    <h1><a id="css_326"></a>css属性大全</h1>
    <p><strong>背景属性</strong></p>
    <pre><code class="prism language-css">background	简写属性&#xff0c;作用是将背景属性设置在一个声明中。
    background-attachment	背景图像是否固定或者随着页面的其余部分滚动。
    background-color	设置元素的背景颜色。
    background-image	把图像设置为背景。
    background-position	设置背景图像的起始位置。
    background-repeat	设置背景图像是否及如何重复。
    </code></pre>
    <p><strong>文本属性。</strong></p>
    <pre><code class="prism language-css">color	设置文本颜色
    direction	设置文本方向。
    letter-spacing	设置字符间距
    line-height	设置行高
    text-align	对齐元素中的文本
    text-decoration	向文本添加修饰
    text-indent	缩进元素中文本的首行
    text-shadow	设置文本阴影
    text-transform	控制元素中的字母
    unicode-bidi	设置或返回文本是否被重写 
    vertical-align	设置元素的垂直对齐
    white-space	设置元素中空白的处理方式
    word-spacing	设置字间距
    </code></pre>
    <p><strong>字体属性</strong></p>
    <pre><code class="prism language-css">font	在一个声明中设置所有的字体属性
    font-family	指定文本的字体系列
    font-size	指定文本的字体大小
    font-style	指定文本的字体样式
    font-variant	以小型大写字体或者正常字体显示文本。
    font-weight	指定字体的粗细。
    </code></pre>
    <p><strong>链接属性</strong></p>
    <pre><code class="prism language-css"><span class="token property">a</span><span class="token punctuation">:</span>link - 正常&#xff0c;未访问过的链接
    <span class="token property">a</span><span class="token punctuation">:</span>visited - 用户已访问过的链接
    <span class="token property">a</span><span class="token punctuation">:</span>hover - 当用户鼠标放在链接上时
    <span class="token property">a</span><span class="token punctuation">:</span>active - 链接被点击的那一刻

    当设置为若干链路状态的样式&#xff0c;也有一些顺序规则&#xff1a;
    <span class="token property">a</span><span class="token punctuation">:</span>hover 必须跟在 <span class="token property">a</span><span class="token punctuation">:</span>link 和 <span class="token property">a</span><span class="token punctuation">:</span>visited后面
    <span class="token property">a</span><span class="token punctuation">:</span>active 必须跟在 <span class="token property">a</span><span class="token punctuation">:</span>hover后面
    </code></pre>
    <p><strong>列表属性</strong></p>
    <pre><code class="prism language-css">list-style	简写属性。用于把所有用于列表的属性设置于一个声明中
    list-style-image	将图像设置为列表项标志。
    list-style-position	设置列表中列表项标志的位置。
    list-style-type	设置列表项标志的类型。
    </code></pre>
    <p><strong>table表格</strong></p>
    <pre><code class="prism language-css">border	指定CSS表格边框
    border-collapse 属性设置表格的边框是否被折叠成一个单一的边框或隔开
    Width和height属性定义表格的宽度和高度。
    text-align	属性设置水平对齐方式&#xff0c;向左&#xff0c;右&#xff0c;或中心
    vertical-align	垂直对齐属性设置垂直对齐&#xff0c;比如顶部&#xff0c;底部或中间
    </code></pre>
    <p><strong>盒子模型</strong></p>
    <pre><code class="prism language-css"><span class="token function">Margin</span><span class="token punctuation">(</span>外边距<span class="token punctuation">)</span> - 清除边框外的区域&#xff0c;外边距是透明的。
    <span class="token function">Border</span><span class="token punctuation">(</span>边框<span class="token punctuation">)</span> - 围绕在内边距和内容外的边框。
    <span class="token function">Padding</span><span class="token punctuation">(</span>内边距<span class="token punctuation">)</span> - 清除内容周围的区域&#xff0c;内边距是透明的。
    <span class="token function">Content</span><span class="token punctuation">(</span>内容<span class="token punctuation">)</span> - 盒子的内容&#xff0c;显示文本和图像。

    最终元素的总宽度计算公式是这样的&#xff1a;
    总元素的宽度&#61;宽度&#43;左填充&#43;右填充&#43;左边框&#43;右边框&#43;左边距&#43;右边距
    元素的总高度最终计算公式是这样的&#xff1a;
    总元素的高度&#61;高度&#43;顶部填充&#43;底部填充&#43;上边框&#43;下边框&#43;上边距&#43;下边距
    </code></pre>
    <p><strong>边框</strong></p>
    <pre><code class="prism language-css">border-style <span class="token property">值</span><span class="token punctuation">:</span>
    <span class="token property">dotted</span><span class="token punctuation">:</span> 定义一个点线边框
    <span class="token property">dashed</span><span class="token punctuation">:</span> 定义一个虚线边框
    <span class="token property">solid</span><span class="token punctuation">:</span> 定义实线边框
    <span class="token property">double</span><span class="token punctuation">:</span> 定义两个边框。 两个边框的宽度和 border-width 的值相同
    <span class="token property">groove</span><span class="token punctuation">:</span> 定义3D沟槽边框。效果取决于边框的颜色值
    <span class="token property">ridge</span><span class="token punctuation">:</span> 定义3D脊边框。效果取决于边框的颜色值
    <span class="token property">inset</span><span class="token punctuation">:</span>定义一个3D的嵌入边框。效果取决于边框的颜色值
    <span class="token property">outset</span><span class="token punctuation">:</span> 定义一个3D突出边框。 效果取决于边框的颜色值

    border-width	属性为边框指定宽度。
    border-color	属性用于设置边框的颜色
    注意&#xff1a; border-color单独使用是不起作用的&#xff0c;必须得先使用border-style来设置边框样式

    border	简写属性&#xff0c;用于把针对四个边的属性设置在一个声明。
    border-style	用于设置元素所有边框的样式&#xff0c;或者单独地为各边设置边框样式。
    border-width	简写属性&#xff0c;用于为元素的所有边框设置宽度&#xff0c;或者单独地为各边边框设置宽度。
    border-color	简写属性&#xff0c;设置元素的所有边框中可见部分的颜色&#xff0c;或为 4 个边分别设置颜色。
    border-bottom	简写属性&#xff0c;用于把下边框的所有属性设置到一个声明中。
    border-bottom-color	设置元素的下边框的颜色。
    border-bottom-style	设置元素的下边框的样式。
    border-bottom-width	设置元素的下边框的宽度。
    border-left	简写属性&#xff0c;用于把左边框的所有属性设置到一个声明中。
    border-left-color	设置元素的左边框的颜色。
    border-left-style	设置元素的左边框的样式。
    border-left-width	设置元素的左边框的宽度。
    border-right	简写属性&#xff0c;用于把右边框的所有属性设置到一个声明中。
    border-right-color	设置元素的右边框的颜色。
    border-right-style	设置元素的右边框的样式。
    border-right-width	设置元素的右边框的宽度。
    border-top	简写属性&#xff0c;用于把上边框的所有属性设置到一个声明中。
    border-top-color	设置元素的上边框的颜色。
    border-top-style	设置元素的上边框的样式。
    border-top-width	设置元素的上边框的宽度。
    border-radius	设置圆角的边框。
    </code></pre>
    <p><strong>轮廓</strong></p>
    <pre><code class="prism language-css">outline	在一个声明中设置所有的轮廓属性
    outline-color	设置轮廓的颜色
    outline-style	设置轮廓的样式
    outline-width	设置轮廓的宽度
    </code></pre>
    <p><strong>margin外边距</strong></p>
    <pre><code class="prism language-css">margin	简写属性。在一个声明中设置所有外边距属性。
    margin-bottom	设置元素的下外边距。
    margin-left	设置元素的左外边距。
    margin-right	设置元素的右外边距。
    margin-top	设置元素的上外边距。
    </code></pre>
    <p><strong>padding内边距</strong></p>
    <pre><code class="prism language-css">padding	使用简写属性设置在一个声明中的所有填充属性
    padding-bottom	设置元素的底部填充
    padding-left	设置元素的左部填充
    padding-right	设置元素的右部填充
    padding-top	设置元素的顶部填充
    </code></pre>
    <p><strong>尺寸属性</strong></p>
    <pre><code class="prism language-css">height	设置元素的高度。
    line-height	设置行高。
    max-height	设置元素的最大高度。
    max-width	设置元素的最大宽度。
    min-height	设置元素的最小高度。
    min-width	设置元素的最小宽度。
    width	设置元素的宽度。
    </code></pre>
    <p><strong>Display(显示) 与 Visibility&#xff08;可见性&#xff09;</strong></p>
    <pre><code class="prism language-css"><span class="token property">display</span><span class="token punctuation">:</span>none<span class="token punctuation">;</span>
    <span class="token property">visibility</span><span class="token punctuation">:</span>hidden<span class="token punctuation">;</span>
    </code></pre>
    <p><strong>Position&#xff1a;(定位)</strong></p>
    <pre><code class="prism language-css">static	HTML 元素的默认值&#xff0c;即没有定位&#xff0c;遵循正常的文档流对象。
    relative	相对定位元素的定位是相对其正常位置。
    fixed	元素的位置相对于浏览器窗口是固定位置。即使窗口是滚动的它也不会移动
    absolute	绝对定位的元素的位置相对于最近的已定位父元素&#xff0c;如果元素没有已定位的父元素&#xff0c;那么它的位置相对于&lt;html&gt;
    sticky	基于用户的滚动位置来定位。粘性定位的元素是依赖于用户的滚动&#xff0c;在 <span class="token property">position</span><span class="token punctuation">:</span>relative 与 <span class="token property">position</span><span class="token punctuation">:</span>fixed 定位之间切换。
    它的行为就像 <span class="token property">position</span><span class="token punctuation">:</span>relative<span class="token punctuation">;</span> 而当页面滚动超出目标区域时&#xff0c;它的表现就像 <span class="token property">position</span><span class="token punctuation">:</span>fixed<span class="token punctuation">;</span>&#xff0c;它会固定在目标位置。
    元素定位表现为在跨越特定阈值前为相对定位&#xff0c;之后为固定定位。这个特定阈值指的是 top<span class="token punctuation">,</span> right<span class="token punctuation">,</span> bottom 或 left 之一&#xff0c;换言之&#xff0c;指定 top<span class="token punctuation">,</span> right<span class="token punctuation">,</span> bottom 或 left 四个阈值其中之一&#xff0c;才可使粘性定位生效。否则其行为与相对定位相同。

    bottom	定义了定位元素下外边距边界与其包含块下边界之间的偏移。
    clip	剪辑一个绝对定位的元素
    cursor	显示光标移动到指定的类型
    left	定义了定位元素左外边距边界与其包含块左边界之间的偏移。
    overflow	设置当元素的内容溢出其区域时发生的事情。
    overflow-y	指定如何处理顶部/底部边缘的内容溢出元素的内容区域
    overflow-x	指定如何处理右边/左边边缘的内容溢出元素的内容区域
    position	指定元素的定位类型
    right	定义了定位元素右外边距边界与其包含块右边界之间的偏移。
    top		定义了一个定位元素的上外边距边界与其包含块上边界之间的偏移。
    z-index	设置元素的堆叠顺序
    </code></pre>
    <p><strong>Overflow&#xff1a; 属性可以控制内容溢出元素框时在对应的元素区间内添加滚动条</strong></p>
    <pre><code class="prism language-css">visible	默认值。内容不会被修剪&#xff0c;会呈现在元素框之外。
    hidden	内容会被修剪&#xff0c;并且其余内容是不可见的。
    scroll	内容会被修剪&#xff0c;但是浏览器会显示滚动条以便查看其余的内容。
    auto	如果内容被修剪&#xff0c;则浏览器会显示滚动条以便查看其余的内容。
    inherit	规定应该从父元素继承 overflow 属性的值。
    </code></pre>
    <p><strong>浮动</strong></p>
    <pre><code class="prism language-css">clear	指定不允许元素周围有浮动元素。
    float	指定一个盒子&#xff08;元素&#xff09;是否可以浮动。
    </code></pre>
    </div>
</template>

<style lang="scss" scoped>
span{
    white-space: pre-wrap;
}
</style>