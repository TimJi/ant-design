webpackJsonp([38],{1880:function(n,a,s){n.exports={active:s(2361),basic:s(2362),children:s(2363),complex:s(2364),list:s(2365)}},2361:function(n,a,s){n.exports={content:{"zh-CN":[["p","\u663e\u793a\u52a8\u753b\u6548\u679c\u3002"]],"en-US":[["p","Display active animation."]]},meta:{order:2,title:{"zh-CN":"\u52a8\u753b\u6548\u679c","en-US":"Active Animation"},filename:"components/skeleton/demo/active.md",id:"components-skeleton-demo-active"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Skeleton <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Skeleton</span> <span class="token attr-name">active</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=s(0),a=(s(9),s(26));return n.createElement(a.Skeleton,{active:!0})}}},2362:function(n,a,s){n.exports={content:{"zh-CN":[["p","\u6700\u7b80\u5355\u7684\u5360\u4f4d\u6548\u679c\u3002"]],"en-US":[["p","Simplest Skeleton usage."]]},meta:{order:0,title:{"zh-CN":"\u57fa\u672c","en-US":"Basic"},filename:"components/skeleton/demo/basic.md",id:"components-skeleton-demo-basic"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Skeleton <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Skeleton</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=s(0),a=(s(9),s(26));return n.createElement(a.Skeleton,null)}}},2363:function(n,a,s){n.exports={content:{"zh-CN":[["p","\u52a0\u8f7d\u5360\u4f4d\u56fe\u5305\u542b\u5b50\u7ec4\u4ef6\u3002"]],"en-US":[["p","Skeleton contains sub component."]]},meta:{order:3,title:{"zh-CN":"\u5305\u542b\u5b50\u7ec4\u4ef6","en-US":"Contains sub component"},filename:"components/skeleton/demo/children.md",id:"components-skeleton-demo-children"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Skeleton<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Demo</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    loading<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  showSkeleton <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> loading<span class="token punctuation">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> loading<span class="token punctuation">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>article<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Skeleton</span> <span class="token attr-name">loading</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>loading<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h4</span><span class="token punctuation">></span></span>Ant Design<span class="token punctuation">,</span> a design language<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h4</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>We supply a series <span class="token keyword">of</span> design principles<span class="token punctuation">,</span> practical patterns and high quality design resources <span class="token punctuation">(</span>Sketch and Axure<span class="token punctuation">)</span><span class="token punctuation">,</span> to help people create their product prototypes beautifully and efficiently<span class="token punctuation">.</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Skeleton</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>showSkeleton<span class="token punctuation">}</span></span> <span class="token attr-name">disabled</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>loading<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n          Show Skeleton\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Demo</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=s(0),a=(s(9),function(){function n(n,a){for(var s=0;s<a.length;s++){var t=a[s];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}return function(a,s,t){return s&&n(a.prototype,s),t&&n(a,t),a}}()),t=s(26);function p(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}var e=function(s){function e(){var n,a,s;!function(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}(this,e);for(var t=arguments.length,o=Array(t),c=0;c<t;c++)o[c]=arguments[c];return a=s=p(this,(n=e.__proto__||Object.getPrototypeOf(e)).call.apply(n,[this].concat(o))),s.state={loading:!1},s.showSkeleton=function(){s.setState({loading:!0}),setTimeout(function(){s.setState({loading:!1})},3e3)},p(s,a)}return function(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):n.__proto__=a)}(e,n.Component),a(e,[{key:"render",value:function(){return n.createElement("div",{className:"article"},n.createElement(t.Skeleton,{loading:this.state.loading},n.createElement("div",null,n.createElement("h4",null,"Ant Design, a design language"),n.createElement("p",null,"We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently."))),n.createElement(t.Button,{onClick:this.showSkeleton,disabled:this.state.loading},"Show Skeleton"))}}]),e}();return n.createElement(e,null)},style:"\n.article h4 {\n  margin-bottom: 16px;\n}\n.article button {\n  margin-top: 16px;\n}\n"}},2364:function(n,a,s){n.exports={content:{"zh-CN":[["p","\u66f4\u590d\u6742\u7684\u7ec4\u5408\u3002"]],"en-US":[["p","Complex combination with avatar and multiple paragraphs."]]},meta:{order:1,title:{"zh-CN":"\u590d\u6742\u7684\u7ec4\u5408","en-US":"Complex combination"},filename:"components/skeleton/demo/complex.md",id:"components-skeleton-demo-complex"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Skeleton <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Skeleton</span> <span class="token attr-name">avatar</span> <span class="token attr-name">paragraph</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> rows<span class="token punctuation">:</span> <span class="token number">4</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=s(0),a=(s(9),s(26));return n.createElement(a.Skeleton,{avatar:!0,paragraph:{rows:4}})}}},2365:function(n,a,s){n.exports={content:{"zh-CN":[["p","\u5728\u5217\u8868\u7ec4\u4ef6\u4e2d\u4f7f\u7528\u52a0\u8f7d\u5360\u4f4d\u7b26\u3002"]],"en-US":[["p","Use skeleton in list component."]]},meta:{order:4,title:{"zh-CN":"\u5217\u8868","en-US":"List"},filename:"components/skeleton/demo/list.md",id:"components-skeleton-demo-list"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span>\n  Skeleton<span class="token punctuation">,</span> Switch<span class="token punctuation">,</span> List<span class="token punctuation">,</span> Avatar<span class="token punctuation">,</span> Icon<span class="token punctuation">,</span>\n<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> listData <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  listData<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    href<span class="token punctuation">:</span> <span class="token string">\'http://ant.design\'</span><span class="token punctuation">,</span>\n    title<span class="token punctuation">:</span> <span class="token template-string"><span class="token string">`ant design part </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>i<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">,</span>\n    avatar<span class="token punctuation">:</span> <span class="token string">\'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png\'</span><span class="token punctuation">,</span>\n    description<span class="token punctuation">:</span> <span class="token string">\'Ant Design, a design language for background applications, is refined by Ant UED Team.\'</span><span class="token punctuation">,</span>\n    content<span class="token punctuation">:</span> <span class="token string">\'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> IconText <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> type<span class="token punctuation">,</span> text <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon</span> <span class="token attr-name">type</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>type<span class="token punctuation">}</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginRight<span class="token punctuation">:</span> <span class="token number">8</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n    <span class="token punctuation">{</span>text<span class="token punctuation">}</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    loading<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span>\n\n  onChange <span class="token operator">=</span> <span class="token punctuation">(</span>checked<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> loading<span class="token punctuation">:</span> <span class="token operator">!</span>checked <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> loading <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>\n\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Switch</span> <span class="token attr-name">checked</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token operator">!</span>loading<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List</span>\n          <span class="token attr-name">itemLayout</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>vertical<span class="token punctuation">"</span></span>\n          <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>large<span class="token punctuation">"</span></span>\n          <span class="token attr-name">dataSource</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>listData<span class="token punctuation">}</span></span>\n          <span class="token attr-name">renderItem</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>item <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>\n            <span class="token operator">&lt;</span>List<span class="token punctuation">.</span>Item\n              key<span class="token punctuation">=</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>title<span class="token punctuation">}</span>\n              actions<span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token operator">!</span>loading <span class="token operator">&amp;&amp;</span> <span class="token punctuation">[</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>IconText</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>star-o<span class="token punctuation">"</span></span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>156<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>IconText</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>like-o<span class="token punctuation">"</span></span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>156<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>IconText</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>message<span class="token punctuation">"</span></span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">]</span><span class="token punctuation">}</span>\n              extra<span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token operator">!</span>loading <span class="token operator">&amp;&amp;</span> <span class="token operator">&lt;</span>img width<span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">272</span><span class="token punctuation">}</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>logo<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span>\n            <span class="token operator">></span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Skeleton</span> <span class="token attr-name">loading</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>loading<span class="token punctuation">}</span></span> <span class="token attr-name">active</span> <span class="token attr-name">avatar</span><span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item.Meta</span>\n                  <span class="token attr-name">avatar</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>Avatar src<span class="token punctuation">=</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>avatar<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span>\n                  title<span class="token operator">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>href<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>title<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token punctuation">}</span>\n                  description<span class="token operator">=</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>description<span class="token punctuation">}</span>\n                <span class="token operator">/</span><span class="token operator">></span>\n                <span class="token punctuation">{</span>item<span class="token punctuation">.</span>content<span class="token punctuation">}</span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Skeleton</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item</span><span class="token punctuation">></span></span>\n          <span class="token punctuation">)</span><span class="token punctuation">}</span>\n        <span class="token operator">/</span><span class="token operator">></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>App</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=s(0),a=(s(9),function(){function n(n,a){for(var s=0;s<a.length;s++){var t=a[s];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}return function(a,s,t){return s&&n(a.prototype,s),t&&n(a,t),a}}()),t=s(26);function p(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}for(var e=[],o=0;o<3;o++)e.push({href:"http://ant.design",title:"ant design part "+o,avatar:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",description:"Ant Design, a design language for background applications, is refined by Ant UED Team.",content:"We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently."});var c=function(a){var s=a.type,p=a.text;return n.createElement("span",null,n.createElement(t.Icon,{type:s,style:{marginRight:8}}),p)},l=function(s){function o(){var n,a,s;!function(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}(this,o);for(var t=arguments.length,e=Array(t),c=0;c<t;c++)e[c]=arguments[c];return a=s=p(this,(n=o.__proto__||Object.getPrototypeOf(o)).call.apply(n,[this].concat(e))),s.state={loading:!0},s.onChange=function(n){s.setState({loading:!n})},p(s,a)}return function(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):n.__proto__=a)}(o,n.Component),a(o,[{key:"render",value:function(){var a=this.state.loading;return n.createElement("div",null,n.createElement(t.Switch,{checked:!a,onChange:this.onChange}),n.createElement(t.List,{itemLayout:"vertical",size:"large",dataSource:e,renderItem:function(s){return n.createElement(t.List.Item,{key:s.title,actions:!a&&[n.createElement(c,{type:"star-o",text:"156"}),n.createElement(c,{type:"like-o",text:"156"}),n.createElement(c,{type:"message",text:"2"})],extra:!a&&n.createElement("img",{width:272,alt:"logo",src:"https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"})},n.createElement(t.Skeleton,{loading:a,active:!0,avatar:!0},n.createElement(t.List.Item.Meta,{avatar:n.createElement(t.Avatar,{src:s.avatar}),title:n.createElement("a",{href:s.href},s.title),description:s.description}),s.content))}}))}}]),o}();return n.createElement(l,null)},style:"\n.skeleton-demo {\n  border: 1px solid #f4f4f4;\n}\n"}}});