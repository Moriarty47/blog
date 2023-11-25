import{_ as c,M as l,p,q as u,N as s,V as a,a0 as o,Q as t,t as n}from"./framework-5411b43d.js";const i={},r=o('<h2 id="reflect" tabindex="-1"><a class="header-anchor" href="#reflect" aria-hidden="true">#</a> Reflect</h2><p><code>Reflect</code> 是一个内建对象，可简化 <code>Proxy</code> 的创建。内建对象的内部方法，例如 <code>[[Get]]</code> 和 <code>[[Set]]</code> 等，都是规范性的，不能直接调用。</p><ul><li><code>Reflect</code> 对象使调用这些内部方法成为了可能。它的方法是内部方法的最小包装。</li><li>修改某些<code>Object</code>方法的返回结构，让其变得更合理。</li></ul>',3),d=t("pre",{class:"language-javascript"},[t("code",null,[t("span",{class:"token keyword"},"try"),n(),t("span",{class:"token punctuation"},"{"),n(`
  Object`),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"defineProperty"),t("span",{class:"token punctuation"},"("),n("target"),t("span",{class:"token punctuation"},","),n(" property"),t("span",{class:"token punctuation"},","),n(" attributes"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"catch"),n(),t("span",{class:"token punctuation"},"("),n("e"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),t("span",{class:"token punctuation"},"}"),n(`

`),t("span",{class:"token keyword"},"if"),n(),t("span",{class:"token punctuation"},"("),n("Reflect"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"defineProperty"),t("span",{class:"token punctuation"},"("),n("target"),t("span",{class:"token punctuation"},","),n(" property"),t("span",{class:"token punctuation"},","),n(" attributes"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
`),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"else"),n(),t("span",{class:"token punctuation"},"{"),n(`
`),t("span",{class:"token punctuation"},"}"),n(`
`)])],-1),k=t("div",{class:"line-numbers","aria-hidden":"true"},[t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"})],-1),f=o('<ul><li><p>让<code>Object</code>操作都变成函数行为。一些命令式的操作，如<code>name in obj</code>、<code>delete obj[name]</code>操作符。使用<code>Reflect.has(obj, name)</code>和<code>Reflect.deleteProperty(obj, name)</code>将命令式行为变成函数行为。</p></li><li><p><code>Reflect</code>对象的方法与<code>Proxy</code>对象的方法一一对应，不管<code>Proxy</code>怎么修改默认行为，总可以在<code>Reflect</code>上获取默认行为。</p></li></ul><h3 id="_13-种静态方法与-proxy-的-13-种捕捉器-拦截操作" tabindex="-1"><a class="header-anchor" href="#_13-种静态方法与-proxy-的-13-种捕捉器-拦截操作" aria-hidden="true">#</a> 13 种静态方法与 Proxy 的 13 种捕捉器(拦截操作)</h3><table><thead><tr><th style="text-align:left;">方法</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;"><code>Reflect.get(target, prop, receiver)</code></td><td style="text-align:left;">获取对象某个属性值，类似于 <code>target[name]</code></td></tr><tr><td style="text-align:left;"><code>Reflect.set(target, prop, value, receiver)</code></td><td style="text-align:left;">将值分配给对象属性，返回布尔值，成功返回<code>true</code></td></tr><tr><td style="text-align:left;"><code>Reflect.has(target, prop)</code></td><td style="text-align:left;">判断对象是否存在某一属性，相当于 <code>in</code>操作符</td></tr><tr><td style="text-align:left;"><code>Reflect.defineProperty(target, prop, attributes)</code></td><td style="text-align:left;">与<code>Object.defineProperty()</code>类似，设置成功返回<code>true</code></td></tr><tr><td style="text-align:left;"><code>Reflect.deleteProperty(target, prop)</code></td><td style="text-align:left;">相当于<code>delete</code>操作符，即<code>delete target[name]</code></td></tr><tr><td style="text-align:left;"><code>Reflect.getPrototypeOf(target)</code></td><td style="text-align:left;">获取对象的原型，类似于<code>Object.getPrototypeOf()</code></td></tr><tr><td style="text-align:left;"><code>Reflect.setPrototypeOf(target, prop)</code></td><td style="text-align:left;">设置对象的原型，返回布尔值，设置成功返回<code>true</code></td></tr><tr><td style="text-align:left;"><code>Reflect.getOwnPropertyDescriptor(target, prop)</code></td><td style="text-align:left;">类似于<code>Object.getOwnPropertyDescriptor()</code>，若存在属性，返回对应属性描述符，否则返回<code>undefined</code></td></tr><tr><td style="text-align:left;"><code>Reflect.ownKeys(target)</code></td><td style="text-align:left;">返回包含所有自身属性(不含继承属性)的数组。类似于<code>Object.keys()</code>，但不受<code>enumerable</code>影响</td></tr><tr><td style="text-align:left;"><code>Reflect.preventExtensions(target)</code></td><td style="text-align:left;">类似于<code>Object.preventExtensions()</code>，返回布尔值</td></tr><tr><td style="text-align:left;"><code>Reflect.isExtensible(target)</code></td><td style="text-align:left;">类似于<code>Object.isExtensible()</code></td></tr><tr><td style="text-align:left;"><code>Reflect.apply(target, thisArg, args)</code></td><td style="text-align:left;">对一个函数进行调用操作，类似于<code>Function.prototype.apply()</code></td></tr><tr><td style="text-align:left;"><code>Reflect.construct(target, args, newTarget)</code></td><td style="text-align:left;">对构造函数进行<code>new</code>操作，相当于执行<code>new target(...args)</code></td></tr></tbody></table><h3 id="使用-proxy-与-reflect-实现观察者模式" tabindex="-1"><a class="header-anchor" href="#使用-proxy-与-reflect-实现观察者模式" aria-hidden="true">#</a> 使用 Proxy 与 Reflect 实现观察者模式</h3><br>',5),g=t("pre",{class:"language-javascript"},[t("code",null,[t("span",{class:"token keyword"},"const"),n(" handlers "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"Symbol"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'handlers'"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`

`),t("span",{class:"token keyword"},"function"),n(),t("span",{class:"token function"},"Observable"),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"target"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
  target`),t("span",{class:"token punctuation"},"["),n("handlers"),t("span",{class:"token punctuation"},"]"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},";"),n(`

  target`),t("span",{class:"token punctuation"},"."),t("span",{class:"token function-variable function"},"observe"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token keyword"},"function"),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"handler"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"this"),t("span",{class:"token punctuation"},"["),n("handlers"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"push"),t("span",{class:"token punctuation"},"("),n("handler"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`

  `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token keyword"},"new"),n(),t("span",{class:"token class-name"},"Proxy"),t("span",{class:"token punctuation"},"("),n("target"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token function"},"set"),t("span",{class:"token punctuation"},"("),n("target"),t("span",{class:"token punctuation"},","),n(" prop"),t("span",{class:"token punctuation"},","),n(" value"),t("span",{class:"token punctuation"},","),n(" receiver"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
      `),t("span",{class:"token keyword"},"const"),n(" success "),t("span",{class:"token operator"},"="),n(" Reflect"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"set"),t("span",{class:"token punctuation"},"("),t("span",{class:"token operator"},"..."),n("arguments"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
      `),t("span",{class:"token keyword"},"if"),n(),t("span",{class:"token punctuation"},"("),n("success"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
        target`),t("span",{class:"token punctuation"},"["),n("handlers"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"forEach"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"handler"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token function"},"handler"),t("span",{class:"token punctuation"},"("),n("prop"),t("span",{class:"token punctuation"},","),n(" value"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
      `),t("span",{class:"token punctuation"},"}"),n(`
      `),t("span",{class:"token keyword"},"return"),n(" success"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token punctuation"},"}"),n(`

`),t("span",{class:"token keyword"},"const"),n(" user "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"Observable"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
user`),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"observe"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},[n("key"),t("span",{class:"token punctuation"},","),n(" value")]),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
  console`),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"log"),t("span",{class:"token punctuation"},"("),t("span",{class:"token template-string"},[t("span",{class:"token template-punctuation string"},"`"),t("span",{class:"token string"},"SET "),t("span",{class:"token interpolation"},[t("span",{class:"token interpolation-punctuation punctuation"},"${"),n("key"),t("span",{class:"token interpolation-punctuation punctuation"},"}")]),t("span",{class:"token string"},"="),t("span",{class:"token interpolation"},[t("span",{class:"token interpolation-punctuation punctuation"},"${"),n("value"),t("span",{class:"token interpolation-punctuation punctuation"},"}")]),t("span",{class:"token template-punctuation string"},"`")]),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
user`),t("span",{class:"token punctuation"},"."),n("name "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token string"},"'Moriarty'"),t("span",{class:"token punctuation"},";"),n(`
`)])],-1),y=t("div",{class:"line-numbers","aria-hidden":"true"},[t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"})],-1);function b(m,v){const e=l("CodeTool");return p(),u("div",null,[r,s(e,{class:"language-javascript line-numbers-mode","data-ext":"js",fullscreen:"undefined",steps:"undefined",action:"undefined",winCtrl:"undefined",async:"undefined",content:"try%20%7B%0A%20%20Object.defineProperty(target%2C%20property%2C%20attributes)%3B%0A%7D%20catch%20(e)%20%7B%7D%0A%0Aif%20(Reflect.defineProperty(target%2C%20property%2C%20attributes))%20%7B%0A%7D%20else%20%7B%0A%7D%0A",ext:"javascript"},{default:a(()=>[d,k]),_:1}),f,s(e,{id:"reflect-example",class:"language-javascript line-numbers-mode","data-ext":"js","data-action":"run",fullscreen:"undefined",steps:"undefined",action:"run",winCtrl:"undefined",async:"undefined",content:"const%20handlers%20%3D%20Symbol('handlers')%3B%0A%0Afunction%20Observable(target)%20%7B%0A%20%20target%5Bhandlers%5D%20%3D%20%5B%5D%3B%0A%0A%20%20target.observe%20%3D%20function%20(handler)%20%7B%0A%20%20%20%20this%5Bhandlers%5D.push(handler)%3B%0A%20%20%7D%3B%0A%0A%20%20return%20new%20Proxy(target%2C%20%7B%0A%20%20%20%20set(target%2C%20prop%2C%20value%2C%20receiver)%20%7B%0A%20%20%20%20%20%20const%20success%20%3D%20Reflect.set(...arguments)%3B%0A%20%20%20%20%20%20if%20(success)%20%7B%0A%20%20%20%20%20%20%20%20target%5Bhandlers%5D.forEach((handler)%20%3D%3E%20handler(prop%2C%20value))%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20return%20success%3B%0A%20%20%20%20%7D%2C%0A%20%20%7D)%3B%0A%7D%0A%0Aconst%20user%20%3D%20Observable(%7B%7D)%3B%0Auser.observe((key%2C%20value)%20%3D%3E%20%7B%0A%20%20console.log(%60SET%20%24%7Bkey%7D%3D%24%7Bvalue%7D%60)%3B%0A%7D)%3B%0Auser.name%20%3D%20'Moriarty'%3B%0A",ext:"javascript"},{default:a(()=>[g,y]),_:1})])}const x=c(i,[["render",b],["__file","reflect.html.vue"]]);export{x as default};
