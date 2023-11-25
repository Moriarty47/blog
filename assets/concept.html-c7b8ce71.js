import{_ as A,M as c,p as u,q as i,Q as n,t,N as e,V as a,a0 as l}from"./framework-5411b43d.js";const r={},d=n("h2",{id:"理念",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#理念","aria-hidden":"true"},"#"),t(" 理念")],-1),C=n("h3",{id:"设计理念",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#设计理念","aria-hidden":"true"},"#"),t(" 设计理念")],-1),k=n("p",null,[t("在开发中，CPU(计算能力) 与 IO(网络延迟) 的瓶颈制约了应用的 "),n("strong",null,"快速响应"),t(" 。")],-1),F=n("code",null,"JS脚本 -> 样式布局 -> 样式绘制",-1),m=n("code",null,"JS脚本",-1),D=n("code",null,"样式布局",-1),h=n("code",null,"样式绘制",-1),_=n("strong",null,"节流",-1),f=n("strong",null,"防抖",-1),g=n("ul",null,[n("li",null,"节流：限制触发更新的频率；"),n("li",null,"防抖：一段时间的输入只会触发一次更新；")],-1),R=n("p",null,[t("新的浏览器 API 中的 "),n("code",null,"requestIdleCallback"),t(" 函数用于在浏览器空闲时段将要调用的函数排队。")],-1),b=n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token function"},"requestIdleCallback"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"deadline"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},"=>"),n("span",{class:"token punctuation"},"{"),t(`
    console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),t("deadline"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"timeRemaining"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(" deadline"),n("span",{class:"token punctuation"},"."),t("didTimeout"),n("span",{class:"token punctuation"},")"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])],-1),y=l('<p><code>timeRemaining()</code> 函数告知当前还剩多少时间来做我需要做的工作或者说我还没有用完的所有可分配的时间，<code>didTimeout</code> 告知是否超时。一旦浏览器有工作要做，<code>timeRemaining()</code> 就会改变，需要不断检查它。</p><blockquote><p><code>requestIdleCallback</code> 实际上限制太大，执行频率不够，无法实现流畅的 UI 渲染，所以 React 团队不得不实现自己的版本。</p></blockquote><p>React 提出 <strong>将同步更新变为异步可中断更新</strong>。将一帧的一部分时间预留给 React ，React 利用这部分时间完成自己的工作，如果当前工作需要时间过长，超出预留时间，React 会中断当前工作并将控制权交还浏览器，等待下一帧 React 的预留时间，接着进行已中断的工作，浏览器在每一帧都可以执行 <code>样式布局</code> 与 <code>样式绘制</code> ，即可以减少浏览器掉帧卡顿的可能。</p><p>IO 方面，如在数据请求等场景下，用户感知应用的快速响应。React Concurrent 模式 <strong>帮助将人机交互研究的结果整合到真实的 UI 中</strong>。例如在屏幕之间切换时显示过多的中间加载状态会使切换的速度<em>变慢</em>，或者悬停和文本输入之类的交互需要在很短的时间内处理，而点击和页面转换可以等待稍长时间而不会感到迟缓。</p><h3 id="架构演进" tabindex="-1"><a class="header-anchor" href="#架构演进" aria-hidden="true">#</a> 架构演进</h3><h4 id="旧架构" tabindex="-1"><a class="header-anchor" href="#旧架构" aria-hidden="true">#</a> 旧架构</h4><p>Reconciler 采用递归的方式运行，数据保存在递归的调用栈中。即 Stack Reconciler。</p>',7),x=n("p",null,"例如点击按钮，状态 state.count 有 1 变为 2：",-1),S=n("p",null,"若中间有中断发生时：",-1),M=n("p",null,"发生中断后，后续渲染不会发生。",-1),N=n("h4",{id:"新架构",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#新架构","aria-hidden":"true"},"#"),t(" 新架构")],-1),O=n("p",null,"首先调度器(Scheduler)会调度更新的优先级，高优先级更新会首先进入调和器(Reconciler)，在调和器进行调和(reconcile) 过程(Diff 算法)时，若产生了更高优先级的更新，则正在调和的更新会被中断，更高优先级更新进入调和器。(因为调度器和调和器是在内存中工作，不会进行具体的视图操作，即使中断发生，页面也不会有出现更新不完全的视图。)当更新完成在调和器中的工作时，调和器会通知渲染器，本次更新有哪些组件需要执行对应的视图操作，由渲染器执行对应的视图操作。对于 ReactDOM 渲染器来说，这些视图操作包含了 DOM 节点的增删改查。当更新最终完成渲染，调度器会开始新一轮的调度。",-1),v=n("p",null,"例如点击按钮，状态 state.count 有 1 变为 2：",-1),w=n("h3",{id:"fiber-架构-及-工作原理",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#fiber-架构-及-工作原理","aria-hidden":"true"},"#"),t(" Fiber 架构 及 工作原理")],-1),I={href:"https://overreacted.io/algebraic-effects-for-the-rest-of-us/",target:"_blank",rel:"noopener noreferrer"},q=l("<blockquote><p>进程(Process)</p><p>线程(Thread)</p><p>协程(Coroutine) Generator 和 async 一样，有传染性，不能中断恢复。</p><p>纤程(Fiber)</p></blockquote><p>旧架构中的 Reconciler 采用递归的方式运行，数据保存在递归的调用栈中。即 Stack Reconciler。</p><blockquote><p>从根节点一直向下“递”到子节点，再从子节点一路向上“归”到根节点，在“归”阶段，函数处理完子节点后，会返回它的父节点。</p></blockquote><p>新架构中的 Reconciler 基于 <strong>Fiber 节点</strong> 实现。即 Fiber Reconciler。</p><p>作为<strong>静态数据结构</strong>，每个 Fiber 节点对应一个组件，保存该组件的类型，对应的 DOM 节点等信息，即虚拟 DOM。</p><p>作为<strong>动态工作单元</strong>，保存组件需要更新的状态以及需要执行的副作用。</p><blockquote><p>采用遍历的形式实现可中断递归，复用了 Stack Reconciler 思想。</p></blockquote>",7),j=n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"App"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token punctuation"},"["),t("num"),n("span",{class:"token punctuation"},","),t(" add"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"useState"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

  `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"("),t(`
    `),n("span",{class:"token operator"},"<"),t("p onClick"),n("span",{class:"token operator"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),t("num "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},">"),t(`
      Content
      `),n("span",{class:"token punctuation"},"{"),t("num"),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),t("p"),n("span",{class:"token operator"},">"),t(`
  `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

ReactDOM`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"render"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"<"),t("App "),n("span",{class:"token operator"},"/"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},","),t(" document"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getElementById"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'root'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])],-1),T=n("h4",{id:"双缓存机制",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#双缓存机制","aria-hidden":"true"},"#"),t(" 双缓存机制")],-1),V=n("p",null,"内存中构建并直接替换的技术。",-1),G=n("p",null,"在 mount 时不存在对应的 current Fiber 树，在 update 时存在一棵 current Fiber 树。",-1),L=n("h3",{id:"源码文件目录与调试",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#源码文件目录与调试","aria-hidden":"true"},"#"),t(" 源码文件目录与调试")],-1),U=n("br",null,null,-1),P=n("pre",{class:"language-yaml"},[n("code",null,[t(`根目录
`),n("span",{class:"token punctuation"},"|"),n("span",{class:"token punctuation"},"-"),n("span",{class:"token punctuation"},"-"),t(" fixtures "),n("span",{class:"token comment"},"# 包含一些给贡献者准备的小型 React 测试项目"),t(`
`),n("span",{class:"token punctuation"},"|"),n("span",{class:"token punctuation"},"-"),n("span",{class:"token punctuation"},"-"),t(" packages "),n("span",{class:"token comment"},"# 包含元数据 与 React 仓库中所有 packages 的源码"),t(`
`),n("span",{class:"token punctuation"},"|"),n("span",{class:"token punctuation"},"-"),n("span",{class:"token punctuation"},"-"),t(" scripts "),n("span",{class:"token comment"},"# 各种工具链脚本，如git、jest、eslint等"),t(`
`)])],-1),H=n("pre",{class:"language-yaml"},[n("code",null,[t(`根目录
`),n("span",{class:"token punctuation"},"|"),n("span",{class:"token punctuation"},"-"),n("span",{class:"token punctuation"},"-"),t(" packages "),n("span",{class:"token comment"},"# 包含元数据 与 React 仓库中所有 packages 的源码"),t(`
  `),n("span",{class:"token punctuation"},"|"),n("span",{class:"token punctuation"},"-"),n("span",{class:"token punctuation"},"-"),t(" react "),n("span",{class:"token comment"},"# React 基础包"),t(`
  `),n("span",{class:"token punctuation"},"|"),n("span",{class:"token punctuation"},"-"),n("span",{class:"token punctuation"},"-"),t(" scheduler "),n("span",{class:"token comment"},"# 调度器"),t(`
  `),n("span",{class:"token punctuation"},"|"),n("span",{class:"token punctuation"},"-"),n("span",{class:"token punctuation"},"-"),t(" react"),n("span",{class:"token punctuation"},"-"),t("reconciler "),n("span",{class:"token comment"},"# 调和器，可用于构建自己的 Renderer"),t(`
  `),n("span",{class:"token punctuation"},"|"),n("span",{class:"token punctuation"},"-"),n("span",{class:"token punctuation"},"-"),t(" react"),n("span",{class:"token punctuation"},"-"),t("dom "),n("span",{class:"token comment"},"# DOM与SSR渲染器"),t(`
  `),n("span",{class:"token punctuation"},"|"),n("span",{class:"token punctuation"},"-"),n("span",{class:"token punctuation"},"-"),t(" react"),n("span",{class:"token punctuation"},"-"),t("native"),n("span",{class:"token punctuation"},"-"),t("renderer "),n("span",{class:"token comment"},"# RN渲染器"),t(`
  `),n("span",{class:"token punctuation"},"|"),n("span",{class:"token punctuation"},"-"),n("span",{class:"token punctuation"},"-"),t(" react"),n("span",{class:"token punctuation"},"-"),t("noop"),n("span",{class:"token punctuation"},"-"),t("renderer "),n("span",{class:"token comment"},"# debug fiber 渲染器"),t(`
  `),n("span",{class:"token punctuation"},"|"),n("span",{class:"token punctuation"},"-"),n("span",{class:"token punctuation"},"-"),t(" react"),n("span",{class:"token punctuation"},"-"),t("test"),n("span",{class:"token punctuation"},"-"),t(`renderer
  `),n("span",{class:"token punctuation"},"|"),n("span",{class:"token punctuation"},"-"),n("span",{class:"token punctuation"},"-"),t(" react"),n("span",{class:"token punctuation"},"-"),t("art "),n("span",{class:"token comment"},"# Canvas与SVG渲染器"),t(`
  `),n("span",{class:"token punctuation"},"|"),n("span",{class:"token punctuation"},"-"),n("span",{class:"token punctuation"},"-"),t(" shared "),n("span",{class:"token comment"},"#公共方法"),t(`
  `),n("span",{class:"token punctuation"},"|"),n("span",{class:"token punctuation"},"-"),n("span",{class:"token punctuation"},"-"),t(" react"),n("span",{class:"token punctuation"},"-"),t("server "),n("span",{class:"token comment"},"# 创建自定义SSR流"),t(`
  `),n("span",{class:"token punctuation"},"|"),n("span",{class:"token punctuation"},"-"),n("span",{class:"token punctuation"},"-"),t(" react"),n("span",{class:"token punctuation"},"-"),t("client "),n("span",{class:"token comment"},"# 创建自定义流"),t(`
  `),n("span",{class:"token punctuation"},"|"),n("span",{class:"token punctuation"},"-"),n("span",{class:"token punctuation"},"-"),t(" react"),n("span",{class:"token punctuation"},"-"),t("fetch "),n("span",{class:"token comment"},"# 用于数据请求"),t(`
  `),n("span",{class:"token punctuation"},"|"),n("span",{class:"token punctuation"},"-"),n("span",{class:"token punctuation"},"-"),t(" react"),n("span",{class:"token punctuation"},"-"),t("interactions "),n("span",{class:"token comment"},"# 用于测试交互相关的内部特性，如 React"),t(`
  `),n("span",{class:"token punctuation"},"|"),n("span",{class:"token punctuation"},"-"),n("span",{class:"token punctuation"},"-"),t(" react"),n("span",{class:"token punctuation"},"-"),t("is "),n("span",{class:"token comment"},"# 用于测试组件是否是某类型"),t(`
  `),n("span",{class:"token punctuation"},"|"),n("span",{class:"token punctuation"},"-"),n("span",{class:"token punctuation"},"-"),t(" react"),n("span",{class:"token punctuation"},"-"),t("refresh "),n("span",{class:"token comment"},"# “热重载”的 React 官方实现"),t(`
`)])],-1),J=n("h4",{id:"调试",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#调试","aria-hidden":"true"},"#"),t(" 调试")],-1),X=n("p",null,"拉取 React 17.0.0.dev 源码",-1),z=n("pre",{class:"language-yaml"},[n("code",null,[n("span",{class:"token comment"},"# git clone -b [BRANCH_NAME] https://github.com/facebook/react.git [DIR_NAME]"),t(`

git clone `),n("span",{class:"token punctuation"},"-"),t("b 17.0.0.dev https"),n("span",{class:"token punctuation"},":"),t("//github.com/facebook/react.git react"),n("span",{class:"token punctuation"},"-"),t(`source

`),n("span",{class:"token comment"},"# 执行"),t(`
cd react`),n("span",{class:"token punctuation"},"-"),t(`source
yarn build react/index`),n("span",{class:"token punctuation"},","),t("react"),n("span",{class:"token punctuation"},"-"),t("dom/index"),n("span",{class:"token punctuation"},","),t("scheduler "),n("span",{class:"token punctuation"},"-"),n("span",{class:"token punctuation"},"-"),t(`type=NODE
`),n("span",{class:"token comment"},"# 生成 build 文件夹"),t(`
cd build/node_modules `),n("span",{class:"token comment"},"# 打开 build/node_modules"),t(`
cd react `),n("span",{class:"token important"},"&&"),t(" yarn link "),n("span",{class:"token comment"},"# 进入 react 文件夹，使用 yarn link 创建软连接"),t(`
cd ../react`),n("span",{class:"token punctuation"},"-"),t("dom "),n("span",{class:"token important"},"&&"),t(" yarn link "),n("span",{class:"token comment"},"# 进入 react-dom 文件夹，使用 yarn link 创建软连接"),t(`

`),n("span",{class:"token comment"},"# 与 react-source 文件夹 同级"),t(`
create`),n("span",{class:"token punctuation"},"-"),t("react"),n("span",{class:"token punctuation"},"-"),t("app react"),n("span",{class:"token punctuation"},"-"),t("source"),n("span",{class:"token punctuation"},"-"),t("demo "),n("span",{class:"token comment"},"# 使用 create-react-app 创建 react 项目"),t(`
cd react`),n("span",{class:"token punctuation"},"-"),t("source"),n("span",{class:"token punctuation"},"-"),t(`demo
rimraf node_modules `),n("span",{class:"token comment"},"# 删除 node_modules 文件夹"),t(`
`),n("span",{class:"token comment"},"# 修改 package.json 中 react 与 react-dom 版本为 17.0.0"),t(`
yarn
yarn link react react`),n("span",{class:"token punctuation"},"-"),t("dom "),n("span",{class:"token comment"},"# 关联 react-source 中创建的软连接"),t(`
yarn start `),n("span",{class:"token comment"},"# 运行测试项目，调试源码"),t(`
`)])],-1);function K(Q,W){const o=c("Katex"),E=c("ClientOnly"),B=c("CodeTool"),s=c("Mermaid"),p=c("ExternalLinkIcon");return u(),i("div",null,[d,C,k,n("p",null,[t("CPU 方面，主流浏览器刷新频率为 "),e(E,null,{default:a(()=>[e(o,{id:"katex_1a96284b",type:"inline",expression:"60Hz"})]),_:1}),t("，即 "),e(E,null,{default:a(()=>[e(o,{id:"katex_1a96284d",type:"inline",expression:"1000ms%20%2F%2060Hz%20%3D%2016.6ms"})]),_:1}),t(" 刷新一次(一帧)；")]),n("p",null,[e(E,null,{default:a(()=>[e(o,{id:"katex_1a96284a",type:"inline",expression:"16.6ms"})]),_:1}),t("内执行 "),F,t("，若一帧内 "),m,t(" 的执行时间超过 "),e(E,null,{default:a(()=>[e(o,{id:"katex_1a962850",type:"inline",expression:"16.6ms"})]),_:1}),t("，则浏览器没有足够时间进行 "),D,t(" 与 "),h,t("，浏览器就会发生掉帧卡顿现象。 一般通过 "),_,t(" 与 "),f,t(" 解决这个问题(治标不治本)。")]),g,R,e(B,{class:"language-javascript","data-ext":"js",fullscreen:"undefined",steps:"undefined",action:"undefined",winCtrl:"false",async:"undefined",content:"requestIdleCallback((deadline)%3D%3E%7B%0A%20%20%20%20console.log(deadline.timeRemaining()%2C%20deadline.didTimeout)%0A%7D)%3B%0A",ext:"javascript"},{default:a(()=>[b]),_:1}),y,e(E,null,{default:a(()=>[e(s,{id:"React15架构",no:"",graph:"flowchart%20LR%0A%20%20C(reconcile%5CnDiff%E7%AE%97%E6%B3%95)%20-.-%20A(Reconciler%5Cn%E8%B0%83%E5%92%8C%E5%99%A8%5Cn%E5%86%B3%E5%AE%9A%E6%B8%B2%E6%9F%93%E4%BB%80%E4%B9%88%E7%BB%84%E4%BB%B6)%0A%20%20A(Reconciler%5Cn%E8%B0%83%E5%92%8C%E5%99%A8%5Cn%E5%86%B3%E5%AE%9A%E6%B8%B2%E6%9F%93%E4%BB%80%E4%B9%88%E7%BB%84%E4%BB%B6)%20~~~%20B(Renderer%5Cn%E6%B8%B2%E6%9F%93%E5%99%A8%5Cn%E5%B0%86%E7%BB%84%E4%BB%B6%E6%B8%B2%E6%9F%93%E5%88%B0%E8%A7%86%E5%9B%BE%E4%B8%AD)%0A%20%20B(Renderer%5Cn%E6%B8%B2%E6%9F%93%E5%99%A8%5Cn%E5%B0%86%E7%BB%84%E4%BB%B6%E6%B8%B2%E6%9F%93%E5%88%B0%E8%A7%86%E5%9B%BE%E4%B8%AD)%20~~~%20A(Reconciler%5Cn%E8%B0%83%E5%92%8C%E5%99%A8%5Cn%E5%86%B3%E5%AE%9A%E6%B8%B2%E6%9F%93%E4%BB%80%E4%B9%88%E7%BB%84%E4%BB%B6)%0A%20%20B(Renderer%5Cn%E6%B8%B2%E6%9F%93%E5%99%A8%5Cn%E5%B0%86%E7%BB%84%E4%BB%B6%E6%B8%B2%E6%9F%93%E5%88%B0%E8%A7%86%E5%9B%BE%E4%B8%AD)%20-.-%20D(ReactDOM%E6%B8%B2%E6%9F%93%E5%99%A8%5Cn%E6%B5%8F%E8%A7%88%E5%99%A8%2FSSR)%0A%20%20B(Renderer%5Cn%E6%B8%B2%E6%9F%93%E5%99%A8%5Cn%E5%B0%86%E7%BB%84%E4%BB%B6%E6%B8%B2%E6%9F%93%E5%88%B0%E8%A7%86%E5%9B%BE%E4%B8%AD)%20-.-%20E(ReactNative%E6%B8%B2%E6%9F%93%E5%99%A8%5Cn%E6%B8%B2%E6%9F%93App%E5%8E%9F%E7%94%9F%E7%BB%84%E4%BB%B6)%0A%20%20B(Renderer%5Cn%E6%B8%B2%E6%9F%93%E5%99%A8%5Cn%E5%B0%86%E7%BB%84%E4%BB%B6%E6%B8%B2%E6%9F%93%E5%88%B0%E8%A7%86%E5%9B%BE%E4%B8%AD)%20-.-%20F(ReactTest%E6%B8%B2%E6%9F%93%E5%99%A8%5Cn%E6%B8%B2%E6%9F%93JS%E5%AF%B9%E8%B1%A1)%0A%20%20B(Renderer%5Cn%E6%B8%B2%E6%9F%93%E5%99%A8%5Cn%E5%B0%86%E7%BB%84%E4%BB%B6%E6%B8%B2%E6%9F%93%E5%88%B0%E8%A7%86%E5%9B%BE%E4%B8%AD)%20-.-%20G(ReactArt%E6%B8%B2%E6%9F%93%E5%99%A8%5CnCanvas%2FSVG)%0A"})]),_:1}),x,e(E,null,{default:a(()=>[e(s,{id:"React15同步更新",no:"",graph:"flowchart%20LR%0A%20%20A%5B%22%23lt%3Bli%23gt%3B1%23lt%3B%2Fli%23gt%3B%22%5D%20-.-%3E%7C%22%E8%B0%83%E5%92%8C%E5%99%A8%E5%8F%91%E7%8E%B01%E9%9C%80%E8%A6%81%E5%8F%98%E4%B8%BA2%EF%BC%8C%E9%80%9A%E7%9F%A5%E6%B8%B2%E6%9F%93%E5%99%A8%EF%BC%8C%E6%B8%B2%E6%9F%93%E5%99%A8%E6%9B%B4%E6%96%B0DOM%EF%BC%8C1%E5%8F%98%E4%B8%BA2%22%7CD%5B%22%23lt%3Bli%23gt%3B2%23lt%3B%2Fli%23gt%3B%22%5D%0A%20%20B%5B%22%23lt%3Bli%23gt%3B2%23lt%3B%2Fli%23gt%3B%22%5D%20-.-%3E%7C%22%E8%B0%83%E5%92%8C%E5%99%A8%E5%8F%91%E7%8E%B02%E9%9C%80%E8%A6%81%E5%8F%98%E4%B8%BA4%EF%BC%8C%E9%80%9A%E7%9F%A5%E6%B8%B2%E6%9F%93%E5%99%A8%EF%BC%8C%E6%B8%B2%E6%9F%93%E5%99%A8%E6%9B%B4%E6%96%B0DOM%EF%BC%8C2%E5%8F%98%E4%B8%BA4%22%7CE%5B%22%23lt%3Bli%23gt%3B4%23lt%3B%2Fli%23gt%3B%22%5D%0A%20%20C%5B%22%23lt%3Bli%23gt%3B3%23lt%3B%2Fli%23gt%3B%22%5D%20-.-%3E%7C%22%E8%B0%83%E5%92%8C%E5%99%A8%E5%8F%91%E7%8E%B03%E9%9C%80%E8%A6%81%E5%8F%98%E4%B8%BA6%EF%BC%8C%E9%80%9A%E7%9F%A5%E6%B8%B2%E6%9F%93%E5%99%A8%EF%BC%8C%E6%B8%B2%E6%9F%93%E5%99%A8%E6%9B%B4%E6%96%B0DOM%EF%BC%8C3%E5%8F%98%E4%B8%BA6%22%7CF%5B%22%23lt%3Bli%23gt%3B6%23lt%3B%2Fli%23gt%3B%22%5D%0A"})]),_:1}),S,e(E,null,{default:a(()=>[e(s,{id:"React15更新-异步中断",no:"",graph:"flowchart%20LR%0A%20%20A%5B%22%23lt%3Bli%23gt%3B1%23lt%3B%2Fli%23gt%3B%22%5D%20-.-%3E%7C%22%E8%B0%83%E5%92%8C%E5%99%A8%E5%8F%91%E7%8E%B01%E9%9C%80%E8%A6%81%E5%8F%98%E4%B8%BA2%EF%BC%8C%E9%80%9A%E7%9F%A5%E6%B8%B2%E6%9F%93%E5%99%A8%EF%BC%8C%E6%B8%B2%E6%9F%93%E5%99%A8%E6%9B%B4%E6%96%B0DOM%EF%BC%8C1%E5%8F%98%E4%B8%BA2%22%7CD%5B%22%23lt%3Bli%23gt%3B2%23lt%3B%2Fli%23gt%3B%22%5D%0A%20%20B%5B%22%23lt%3Bli%23gt%3B2%23lt%3B%2Fli%23gt%3B%22%5D%20-.-%3E%7C%22%E5%8F%91%E7%94%9F%E4%B8%AD%E6%96%AD%22%7C%20E%5B%22%23lt%3Bli%23gt%3B2%23lt%3B%2Fli%23gt%3B%22%5D%0A%20%20C%5B%22%23lt%3Bli%23gt%3B3%23lt%3B%2Fli%23gt%3B%22%5D%20~~~%20F%5B%22%23lt%3Bli%23gt%3B3%23lt%3B%2Fli%23gt%3B%22%5D%0A"})]),_:1}),M,N,e(E,null,{default:a(()=>[e(s,{id:"React16架构",no:"",graph:"flowchart%20LR%0A%20%20update3(%E6%9B%B4%E6%96%B03%5Cn%E9%AB%98%E4%BC%98%E5%85%88%E7%BA%A7)%20-.-%20X(Scheduler%5Cn%E8%B0%83%E5%BA%A6%E5%99%A8%5Cn%E8%B0%83%E5%BA%A6%E6%9B%B4%E6%96%B0)%0A%20%20update2(%E6%9B%B4%E6%96%B02%5Cn%E4%B8%AD%E4%BC%98%E5%85%88%E7%BA%A7)%20-.-%20X(Scheduler%5Cn%E8%B0%83%E5%BA%A6%E5%99%A8%5Cn%E8%B0%83%E5%BA%A6%E6%9B%B4%E6%96%B0)%0A%20%20update1(%E6%9B%B4%E6%96%B01%5Cn%E4%BD%8E%E4%BC%98%E5%85%88%E7%BA%A7)%20-.-%20X(Scheduler%5Cn%E8%B0%83%E5%BA%A6%E5%99%A8%5Cn%E8%B0%83%E5%BA%A6%E6%9B%B4%E6%96%B0)%0A%20%20C(reconcile%5CnDiff%E7%AE%97%E6%B3%95)%20-.-%20A(Reconciler%5Cn%E8%B0%83%E5%92%8C%E5%99%A8%5Cn%E5%86%B3%E5%AE%9A%E6%B8%B2%E6%9F%93%E4%BB%80%E4%B9%88%E7%BB%84%E4%BB%B6)%0A%20%20X(Scheduler%5Cn%E8%B0%83%E5%BA%A6%E5%99%A8%5Cn%E8%B0%83%E5%BA%A6%E6%9B%B4%E6%96%B0)%20~~~%20A(Reconciler%5Cn%E8%B0%83%E5%92%8C%E5%99%A8%5Cn%E5%86%B3%E5%AE%9A%E6%B8%B2%E6%9F%93%E4%BB%80%E4%B9%88%E7%BB%84%E4%BB%B6)%0A%20%20A(Reconciler%5Cn%E8%B0%83%E5%92%8C%E5%99%A8%5Cn%E5%86%B3%E5%AE%9A%E6%B8%B2%E6%9F%93%E4%BB%80%E4%B9%88%E7%BB%84%E4%BB%B6)%20~~~%20B(Renderer%5Cn%E6%B8%B2%E6%9F%93%E5%99%A8%5Cn%E5%B0%86%E7%BB%84%E4%BB%B6%E6%B8%B2%E6%9F%93%E5%88%B0%E8%A7%86%E5%9B%BE%E4%B8%AD)%0A%20%20B(Renderer%5Cn%E6%B8%B2%E6%9F%93%E5%99%A8%5Cn%E5%B0%86%E7%BB%84%E4%BB%B6%E6%B8%B2%E6%9F%93%E5%88%B0%E8%A7%86%E5%9B%BE%E4%B8%AD)%20~~~%20A(Reconciler%5Cn%E8%B0%83%E5%92%8C%E5%99%A8%5Cn%E5%86%B3%E5%AE%9A%E6%B8%B2%E6%9F%93%E4%BB%80%E4%B9%88%E7%BB%84%E4%BB%B6)%0A%20%20B(Renderer%5Cn%E6%B8%B2%E6%9F%93%E5%99%A8%5Cn%E5%B0%86%E7%BB%84%E4%BB%B6%E6%B8%B2%E6%9F%93%E5%88%B0%E8%A7%86%E5%9B%BE%E4%B8%AD)%20-.-%20D(ReactDOM%E6%B8%B2%E6%9F%93%E5%99%A8%5Cn%E6%B5%8F%E8%A7%88%E5%99%A8%2FSSR)%0A%20%20B(Renderer%5Cn%E6%B8%B2%E6%9F%93%E5%99%A8%5Cn%E5%B0%86%E7%BB%84%E4%BB%B6%E6%B8%B2%E6%9F%93%E5%88%B0%E8%A7%86%E5%9B%BE%E4%B8%AD)%20-.-%20E(ReactNative%E6%B8%B2%E6%9F%93%E5%99%A8%5Cn%E6%B8%B2%E6%9F%93App%E5%8E%9F%E7%94%9F%E7%BB%84%E4%BB%B6)%0A%20%20B(Renderer%5Cn%E6%B8%B2%E6%9F%93%E5%99%A8%5Cn%E5%B0%86%E7%BB%84%E4%BB%B6%E6%B8%B2%E6%9F%93%E5%88%B0%E8%A7%86%E5%9B%BE%E4%B8%AD)%20-.-%20F(ReactTest%E6%B8%B2%E6%9F%93%E5%99%A8%5Cn%E6%B8%B2%E6%9F%93JS%E5%AF%B9%E8%B1%A1)%0A%20%20B(Renderer%5Cn%E6%B8%B2%E6%9F%93%E5%99%A8%5Cn%E5%B0%86%E7%BB%84%E4%BB%B6%E6%B8%B2%E6%9F%93%E5%88%B0%E8%A7%86%E5%9B%BE%E4%B8%AD)%20-.-%20G(ReactArt%E6%B8%B2%E6%9F%93%E5%99%A8%5CnCanvas%2FSVG)%0A"})]),_:1}),O,v,e(E,null,{default:a(()=>[e(s,{id:"React16更新",no:"",graph:"sequenceDiagram%0A%20%20participant%20A%20as%20%E8%B0%83%E5%BA%A6%E5%99%A8%0A%20%20participant%20B%20as%20%E8%B0%83%E5%92%8C%E5%99%A8%0A%20%20participant%20C%20as%20%E6%B8%B2%E6%9F%93%E5%99%A8%0A%20%20Note%20left%20of%20A%3A%20%E6%8E%A5%E6%94%B6%E5%88%B0%E6%9B%B4%E6%96%B0%EF%BC%8C%E6%98%AF%E5%90%A6%E6%9C%89%E5%85%B6%E4%BB%96%3Cbr%3E%E9%AB%98%E4%BC%98%E5%85%88%E7%BA%A7%E6%9B%B4%E6%96%B0%E9%9C%80%E8%A6%81%E5%85%88%E8%A2%AB%E8%B0%83%E5%BA%A6%EF%BC%9F%3Cbr%3E%E6%B2%A1%E6%9C%89%E7%9A%84%E8%AF%9D%EF%BC%8C%E5%B0%86%E6%9B%B4%E6%96%B0%E4%BA%A4%E7%BB%99%E8%B0%83%E5%92%8C%E5%99%A8%0A%20%20A%20-%3E%3E%20B%3A%20%E6%8E%A5%E6%94%B6%E6%9B%B4%E6%96%B0%EF%BC%8C%3Cbr%3E%E5%88%9B%E5%BB%BA%E8%99%9A%E6%8B%9FDOM%E6%A0%91%0A%20%20Note%20left%20of%20B%3A%20li%3E1%20-%3E%20li%3E2%20%2C%E6%89%93%E4%B8%8A%E6%A0%87%E8%AE%B0Update%20%3Cbr%3E%20li%3E2%20-%3E%20li%3E4%20%2C%E6%89%93%E4%B8%8A%E6%A0%87%E8%AE%B0Update%20%3Cbr%3E%20li%3E3%20-%3E%20li%3E6%20%2C%E6%89%93%E4%B8%8A%E6%A0%87%E8%AE%B0Update%20%3Cbr%3E%20%E5%B0%86%E6%89%93%E4%BA%86%E6%A0%87%E8%AE%B0%E7%9A%84%E8%99%9A%E6%8B%9FDOM%E4%BA%A4%E7%BB%99%E6%B8%B2%E6%9F%93%E5%99%A8%0A%20%20B%20-%3E%3E%20C%3A%20%E6%8E%A5%E6%94%B6%E5%88%B0%E9%80%9A%E7%9F%A5%EF%BC%8C%E6%9F%A5%E7%9C%8B%E6%9C%89%E5%93%AA%E4%BA%9B%3Cbr%3E%E8%A2%AB%E6%89%93%E6%A0%87%E8%AE%B0%E7%9A%84%E8%99%9A%E6%8B%9FDOM%EF%BC%8C%3Cbr%3E%E6%89%A7%E8%A1%8C%E5%AF%B9%E5%BA%94%E7%9A%84%E6%9B%B4%E6%96%B0DOM%E6%93%8D%E4%BD%9C%0A"})]),_:1}),w,n("p",null,[n("strong",null,[n("a",I,[t("代数效应"),e(p)])]),t("：函数式编程中的概念，用于将副作用从函数调用中分离。中断恢复思想。")]),q,e(B,{class:"language-javascript","data-ext":"js",fullscreen:"undefined",steps:"undefined",action:"undefined",winCtrl:"false",async:"undefined",content:"function%20App()%20%7B%0A%20%20const%20%5Bnum%2C%20add%5D%20%3D%20useState(0)%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3Cp%20onClick%3D%7B()%20%3D%3E%20add(num%20%2B%201)%7D%3E%0A%20%20%20%20%20%20Content%0A%20%20%20%20%20%20%7Bnum%7D%0A%20%20%20%20%3C%2Fp%3E%0A%20%20)%3B%0A%7D%0A%0AReactDOM.render(%3CApp%20%2F%3E%2C%20document.getElementById('root'))%3B%0A",ext:"javascript"},{default:a(()=>[j]),_:1}),e(E,null,{default:a(()=>[e(s,{id:"Fiber节点",no:"",graph:"flowchart%20LR%0A%20%20FiberRootNode%20--%3E%7Ccurrent%7C%20RootFiber%0A%20%20RootFiber%20--%3E%7CstateNode%7C%20FiberRootNode%0A%20%20RootFiber%20--%3E%7Cchild%7C%20App%0A%20%20App%20--%3E%7Creturn%7C%20RootFiber%0A%20%20App%20--%3E%7Cchild%7C%20p%0A%20%20p%20--%3E%7Creturn%7C%20App%0A%20%20p%20--%3E%7Cchild%7C%20Content%0A%20%20Content%20--%3E%7Creturn%7C%20p%0A%20%20Content%20--%3E%7Csibling%7C%20num%0A%20%20num%20--%3E%7Creturn%7C%20p%0A"})]),_:1}),T,V,G,e(E,null,{default:a(()=>[e(s,{id:"双缓存",no:"",graph:"flowchart%20TB%0A%20%20FiberRootNode%20--%3E%7Ccurrent%7C%20A%5BRootFiber%5D%0A%20%20FiberRootNode%20-.-%3E%20B%5BRootFiber%5D%0A%20%20A%5BRootFiber%5D%20--%3E%7Cchild%7C%20C1%5BApp%5D%0A%20%20B%5BRootFiber%5D%20--%3E%7Cchild%7C%20C2%5BApp%5D%0A%20%20A%5BRootFiber%5D%20%3C--%3E%7Calternate%7C%20B%5BRootFiber%5D%0A%20%20subgraph%20workInProgress%20Fiber%20%E6%A0%91%0A%20%20%20%20C2%5BApp%5D%20--%3E%7Creturn%7C%20B%5BRootFiber%5D%0A%20%20%20%20C2%5BApp%5D%20--%3E%7Cchild%7C%20D2%5Bp%5D%0A%20%20%20%20D2%5Bp%5D%20--%3E%7Creturn%7C%20C2%5BApp%5D%0A%20%20%20%20D2%5Bp%5D%20--%3E%7Cchild%7C%20E2%5BContent%5D%0A%20%20%20%20E2%5BContent%5D%20--%3E%7Creturn%7C%20D2%5Bp%5D%0A%20%20%20%20E2%5BContent%5D%20--%3E%7Csibling%7C%20F2%5Bnum%5D%0A%20%20%20%20F2%5Bnum%5D%20--%3E%7Creturn%7C%20D2%5Bp%5D%0A%20%20end%0A%20%20subgraph%20current%20Fiber%20%E6%A0%91%0A%20%20%20%20C1%5BApp%5D%20--%3E%7Creturn%7C%20A%5BRootFiber%5D%0A%20%20%20%20C1%5BApp%5D%20--%3E%7Cchild%7C%20D1%5Bp%5D%0A%20%20%20%20D1%5Bp%5D%20--%3E%7Creturn%7C%20C1%5BApp%5D%0A%20%20%20%20D1%5Bp%5D%20--%3E%7Cchild%7C%20E1%5BContent%5D%0A%20%20%20%20E1%5BContent%5D%20--%3E%7Creturn%7C%20D1%5Bp%5D%0A%20%20%20%20E1%5BContent%5D%20--%3E%7Csibling%7C%20F1%5Bnum%5D%0A%20%20%20%20F1%5Bnum%5D%20--%3E%7Creturn%7C%20D1%5Bp%5D%0A%20%20end%0A%0A"})]),_:1}),L,U,e(B,{class:"language-yaml","data-ext":"yml",fullscreen:"undefined",steps:"undefined",action:"undefined",winCtrl:"false",async:"undefined",content:"%E6%A0%B9%E7%9B%AE%E5%BD%95%0A%7C--%20fixtures%20%23%20%E5%8C%85%E5%90%AB%E4%B8%80%E4%BA%9B%E7%BB%99%E8%B4%A1%E7%8C%AE%E8%80%85%E5%87%86%E5%A4%87%E7%9A%84%E5%B0%8F%E5%9E%8B%20React%20%E6%B5%8B%E8%AF%95%E9%A1%B9%E7%9B%AE%0A%7C--%20packages%20%23%20%E5%8C%85%E5%90%AB%E5%85%83%E6%95%B0%E6%8D%AE%20%E4%B8%8E%20React%20%E4%BB%93%E5%BA%93%E4%B8%AD%E6%89%80%E6%9C%89%20packages%20%E7%9A%84%E6%BA%90%E7%A0%81%0A%7C--%20scripts%20%23%20%E5%90%84%E7%A7%8D%E5%B7%A5%E5%85%B7%E9%93%BE%E8%84%9A%E6%9C%AC%EF%BC%8C%E5%A6%82git%E3%80%81jest%E3%80%81eslint%E7%AD%89%0A",ext:"yaml"},{default:a(()=>[P]),_:1}),e(B,{class:"language-yaml","data-ext":"yml",fullscreen:"undefined",steps:"undefined",action:"undefined",winCtrl:"false",async:"undefined",content:"%E6%A0%B9%E7%9B%AE%E5%BD%95%0A%7C--%20packages%20%23%20%E5%8C%85%E5%90%AB%E5%85%83%E6%95%B0%E6%8D%AE%20%E4%B8%8E%20React%20%E4%BB%93%E5%BA%93%E4%B8%AD%E6%89%80%E6%9C%89%20packages%20%E7%9A%84%E6%BA%90%E7%A0%81%0A%20%20%7C--%20react%20%23%20React%20%E5%9F%BA%E7%A1%80%E5%8C%85%0A%20%20%7C--%20scheduler%20%23%20%E8%B0%83%E5%BA%A6%E5%99%A8%0A%20%20%7C--%20react-reconciler%20%23%20%E8%B0%83%E5%92%8C%E5%99%A8%EF%BC%8C%E5%8F%AF%E7%94%A8%E4%BA%8E%E6%9E%84%E5%BB%BA%E8%87%AA%E5%B7%B1%E7%9A%84%20Renderer%0A%20%20%7C--%20react-dom%20%23%20DOM%E4%B8%8ESSR%E6%B8%B2%E6%9F%93%E5%99%A8%0A%20%20%7C--%20react-native-renderer%20%23%20RN%E6%B8%B2%E6%9F%93%E5%99%A8%0A%20%20%7C--%20react-noop-renderer%20%23%20debug%20fiber%20%E6%B8%B2%E6%9F%93%E5%99%A8%0A%20%20%7C--%20react-test-renderer%0A%20%20%7C--%20react-art%20%23%20Canvas%E4%B8%8ESVG%E6%B8%B2%E6%9F%93%E5%99%A8%0A%20%20%7C--%20shared%20%23%E5%85%AC%E5%85%B1%E6%96%B9%E6%B3%95%0A%20%20%7C--%20react-server%20%23%20%E5%88%9B%E5%BB%BA%E8%87%AA%E5%AE%9A%E4%B9%89SSR%E6%B5%81%0A%20%20%7C--%20react-client%20%23%20%E5%88%9B%E5%BB%BA%E8%87%AA%E5%AE%9A%E4%B9%89%E6%B5%81%0A%20%20%7C--%20react-fetch%20%23%20%E7%94%A8%E4%BA%8E%E6%95%B0%E6%8D%AE%E8%AF%B7%E6%B1%82%0A%20%20%7C--%20react-interactions%20%23%20%E7%94%A8%E4%BA%8E%E6%B5%8B%E8%AF%95%E4%BA%A4%E4%BA%92%E7%9B%B8%E5%85%B3%E7%9A%84%E5%86%85%E9%83%A8%E7%89%B9%E6%80%A7%EF%BC%8C%E5%A6%82%20React%0A%20%20%7C--%20react-is%20%23%20%E7%94%A8%E4%BA%8E%E6%B5%8B%E8%AF%95%E7%BB%84%E4%BB%B6%E6%98%AF%E5%90%A6%E6%98%AF%E6%9F%90%E7%B1%BB%E5%9E%8B%0A%20%20%7C--%20react-refresh%20%23%20%E2%80%9C%E7%83%AD%E9%87%8D%E8%BD%BD%E2%80%9D%E7%9A%84%20React%20%E5%AE%98%E6%96%B9%E5%AE%9E%E7%8E%B0%0A",ext:"yaml"},{default:a(()=>[H]),_:1}),J,X,e(B,{class:"language-yaml","data-ext":"yml",fullscreen:"undefined",steps:"undefined",action:"undefined",winCtrl:"false",async:"undefined",content:"%23%20git%20clone%20-b%20%5BBRANCH_NAME%5D%20https%3A%2F%2Fgithub.com%2Ffacebook%2Freact.git%20%5BDIR_NAME%5D%0A%0Agit%20clone%20-b%2017.0.0.dev%20https%3A%2F%2Fgithub.com%2Ffacebook%2Freact.git%20react-source%0A%0A%23%20%E6%89%A7%E8%A1%8C%0Acd%20react-source%0Ayarn%20build%20react%2Findex%2Creact-dom%2Findex%2Cscheduler%20--type%3DNODE%0A%23%20%E7%94%9F%E6%88%90%20build%20%E6%96%87%E4%BB%B6%E5%A4%B9%0Acd%20build%2Fnode_modules%20%23%20%E6%89%93%E5%BC%80%20build%2Fnode_modules%0Acd%20react%20%26%26%20yarn%20link%20%23%20%E8%BF%9B%E5%85%A5%20react%20%E6%96%87%E4%BB%B6%E5%A4%B9%EF%BC%8C%E4%BD%BF%E7%94%A8%20yarn%20link%20%E5%88%9B%E5%BB%BA%E8%BD%AF%E8%BF%9E%E6%8E%A5%0Acd%20..%2Freact-dom%20%26%26%20yarn%20link%20%23%20%E8%BF%9B%E5%85%A5%20react-dom%20%E6%96%87%E4%BB%B6%E5%A4%B9%EF%BC%8C%E4%BD%BF%E7%94%A8%20yarn%20link%20%E5%88%9B%E5%BB%BA%E8%BD%AF%E8%BF%9E%E6%8E%A5%0A%0A%23%20%E4%B8%8E%20react-source%20%E6%96%87%E4%BB%B6%E5%A4%B9%20%E5%90%8C%E7%BA%A7%0Acreate-react-app%20react-source-demo%20%23%20%E4%BD%BF%E7%94%A8%20create-react-app%20%E5%88%9B%E5%BB%BA%20react%20%E9%A1%B9%E7%9B%AE%0Acd%20react-source-demo%0Arimraf%20node_modules%20%23%20%E5%88%A0%E9%99%A4%20node_modules%20%E6%96%87%E4%BB%B6%E5%A4%B9%0A%23%20%E4%BF%AE%E6%94%B9%20package.json%20%E4%B8%AD%20react%20%E4%B8%8E%20react-dom%20%E7%89%88%E6%9C%AC%E4%B8%BA%2017.0.0%0Ayarn%0Ayarn%20link%20react%20react-dom%20%23%20%E5%85%B3%E8%81%94%20react-source%20%E4%B8%AD%E5%88%9B%E5%BB%BA%E7%9A%84%E8%BD%AF%E8%BF%9E%E6%8E%A5%0Ayarn%20start%20%23%20%E8%BF%90%E8%A1%8C%E6%B5%8B%E8%AF%95%E9%A1%B9%E7%9B%AE%EF%BC%8C%E8%B0%83%E8%AF%95%E6%BA%90%E7%A0%81%0A",ext:"yaml"},{default:a(()=>[z]),_:1})])}const Z=A(r,[["render",K],["__file","concept.html.vue"]]);export{Z as default};