import{_ as p,M as o,p as l,q as r,Q as n,t as s,N as e,V as t,a0 as i}from"./framework-5411b43d.js";const u={},d=i('<h2 id="webpack" tabindex="-1"><a class="header-anchor" href="#webpack" aria-hidden="true">#</a> Webpack</h2><p>默认配置文件名为 <code>webpack.config.js</code>;</p><p>亦可通过 <code>webpack --config [path/to/filename]</code> 指定配置文件。</p><h3 id="webpack-环境搭建" tabindex="-1"><a class="header-anchor" href="#webpack-环境搭建" aria-hidden="true">#</a> Webpack 环境搭建</h3><p>安装 Node.js 和 NPM</p>',5),k={class:"custom-container tip"},A=n("p",{class:"custom-container-title"},"提示",-1),b={href:"https://github.com/nvm-sh/nvm",target:"_blank",rel:"noopener noreferrer"},h=n("pre",{class:"language-PowerShell"},[n("code",null,`nvm use 16
Now using node v16.9.1 (npm v7.21.1)
node -v
v16.9.1
nvm use 14
Now using node v14.18.0 (npm v6.14.15)
node -v
v14.18.0
nvm install 12
Now using node v12.22.6 (npm v6.14.5)
node -v
v12.22.6
`)],-1),m=n("p",null,"使用下面的 cURL 或 Wget 命令进行安装：",-1),w=n("pre",{class:"language-PowerShell"},[n("code",null,`
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
`)],-1),f=n("h3",{id:"安装-webpack-和-webpack-cli",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#安装-webpack-和-webpack-cli","aria-hidden":"true"},"#"),s(" 安装 Webpack 和 Webpack-cli")],-1),g=n("br",null,null,-1),B=n("pre",{class:"language-PowerShell"},[n("code",null,`# 创建空文件夹Webpack，并在当前目录下执行以下命令初始化 package.json
npm init -y

# 安装 webpack 和 webpack-cli
npm install webpack webpack-cli --save-dev

# 执行以下命令检查是否安装成功
./node_modules/.bin/webpack -v
`)],-1),E=n("h3",{id:"webpack-配置组成",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#webpack-配置组成","aria-hidden":"true"},"#"),s(" Webpack 配置组成")],-1),_=n("br",null,null,-1),y=n("pre",{class:"language-javascript"},[n("code",null,[s("module"),n("span",{class:"token punctuation"},"."),s("exports "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"entry"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'./src/index.js'"),n("span",{class:"token punctuation"},","),n("span",{class:"token comment"},"// ---------------- 打包的入口文件，Webpack4+默认值"),s(`
  `),n("span",{class:"token literal-property property"},"output"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'./dist/main.js'"),n("span",{class:"token punctuation"},","),n("span",{class:"token comment"},"// --------------- 打包的输出，Webpack4+默认值"),s(`
  `),n("span",{class:"token literal-property property"},"mode"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'development'"),n("span",{class:"token punctuation"},","),n("span",{class:"token comment"},"// -------------------- 环境"),s(`
  `),n("span",{class:"token literal-property property"},"module"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"rules"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token comment"},"// ------------------------------ Loader 配置"),s(`
      `),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"test"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token regex"},[n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-source language-regex"},"\\.txt$"),n("span",{class:"token regex-delimiter"},"/")]),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"use"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'raw-loader'"),s(),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token literal-property property"},"plugins"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token comment"},"// ------------------------------ 插件 配置"),s(`
    `),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"HtmlWebpackPlugin"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"template"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'./src/index.html'"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"]"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])],-1),v=n("h3",{id:"示例",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#示例","aria-hidden":"true"},"#"),s(" 示例")],-1),F=n("p",null,[s("在创建好的 Webpack 根目录下创建 "),n("code",null,"webpack.config.js"),s(" 文件：")],-1),C=n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// ./Webpack/webpack.config.js"),s(`
`),n("span",{class:"token keyword"},"const"),s(" path "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'path'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

module`),n("span",{class:"token punctuation"},"."),s("exports "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"entry"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'./src/index.js'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token literal-property property"},"output"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"path"),n("span",{class:"token operator"},":"),s(" path"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"join"),n("span",{class:"token punctuation"},"("),s("__dirname"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'dist'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"filename"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'bundle.js'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token literal-property property"},"mode"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'production'"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])],-1),x=n("p",null,[s("在创建好的 Webpack 根目录下创建 src 目录，并在 src 目录中创建 "),n("code",null,"test.js"),s(" 和 "),n("code",null,"index.js"),s("：")],-1),j=n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// ./Webpack/src/test.js"),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"printHello"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token string"},"'Hello world!'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("a"),n("span",{class:"token punctuation"},","),s(" b")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"return"),s(" a "),n("span",{class:"token operator"},"+"),s(" b"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"// ./Webpack/src/index.js"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" printHello "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'./test'"),n("span",{class:"token punctuation"},";"),s(`

document`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"write"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"printHello"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])],-1),D=n("p",null,"在终端中运行命令行进行打包：",-1),S=n("pre",{class:"language-PowerShell"},[n("code",null,`./node_modules/.bin/webpack
`)],-1),P=n("p",null,[s("在进行模块局部安装时会在 "),n("code",null,"node_modules/.bin"),s(" 目录下创建软连接，而 "),n("code",null,"package.json"),s(" 默认可以读取到该目录下的命令，因此可以通过 npm script 运行 webpack")],-1),W=n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"name"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"webpack"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"version"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"1.0.0"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"description"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"main"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"index.js"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"scripts"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"dev"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"webpack-dev-server --config webpack.dev.js --open"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token property"},'"build"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"webpack --config webpack.prod.js"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token property"},'"watch"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"webpack --watch"'),n("span",{class:"token punctuation"},","),s(`

  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"keywords"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"author"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"license"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"ISC"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"devDependencies"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"webpack"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"^4.31.0"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token property"},'"webpack-cli"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"^3.3.2"'),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])],-1),N=n("p",null,"接着在终端中运行：",-1),H=n("pre",{class:"language-PowerShell"},[n("code",null,`npm run build

> webpack@1.0.0 build
> webpack

Hash: dc04ce51eb3dc2716844
Version: webpack 4.31.0
Time: 75ms
Built at: 2021/03/10 12:40:11
     Asset       Size  Chunks             Chunk Names
bundler.js  982 bytes       0  [emitted]  main
Entrypoint main = bundler.js
[0] ./src/index.js + 1 modules 171 bytes {0} [built]
    | ./src/index.js 67 bytes [built]
    | ./src/test.js 104 bytes [built]
`)],-1),V=n("p",null,[s("可看到 根目录下生成 "),n("code",null,"dist/bundler.js"),s(" 打包文件。")],-1);function q(L,T){const c=o("ExternalLinkIcon"),a=o("CodeTool");return l(),r("div",null,[d,n("div",k,[A,n("p",null,[s("安装 "),n("a",b,[s("nvm"),e(c)]),s(" 允许你通过命令行快速安装和使用不同版本的 node。")]),e(a,{class:"language-PowerShell","data-ext":"PowerShell",fullscreen:"undefined",steps:"undefined",action:"undefined",winCtrl:"false",async:"undefined",content:"nvm%20use%2016%0ANow%20using%20node%20v16.9.1%20(npm%20v7.21.1)%0Anode%20-v%0Av16.9.1%0Anvm%20use%2014%0ANow%20using%20node%20v14.18.0%20(npm%20v6.14.15)%0Anode%20-v%0Av14.18.0%0Anvm%20install%2012%0ANow%20using%20node%20v12.22.6%20(npm%20v6.14.5)%0Anode%20-v%0Av12.22.6%0A",ext:"PowerShell"},{default:t(()=>[h]),_:1}),m,e(a,{class:"language-PowerShell","data-ext":"PowerShell",fullscreen:"undefined",steps:"undefined",action:"undefined",winCtrl:"false",async:"undefined",content:"%0Acurl%20-o-%20https%3A%2F%2Fraw.githubusercontent.com%2Fnvm-sh%2Fnvm%2Fv0.39.3%2Finstall.sh%20%7C%20bash%0Awget%20-qO-%20https%3A%2F%2Fraw.githubusercontent.com%2Fnvm-sh%2Fnvm%2Fv0.39.3%2Finstall.sh%20%7C%20bash%0A",ext:"PowerShell"},{default:t(()=>[w]),_:1})]),f,g,e(a,{class:"language-PowerShell","data-ext":"PowerShell",fullscreen:"undefined",steps:"undefined",action:"undefined",winCtrl:"false",async:"undefined",content:"%23%20%E5%88%9B%E5%BB%BA%E7%A9%BA%E6%96%87%E4%BB%B6%E5%A4%B9Webpack%EF%BC%8C%E5%B9%B6%E5%9C%A8%E5%BD%93%E5%89%8D%E7%9B%AE%E5%BD%95%E4%B8%8B%E6%89%A7%E8%A1%8C%E4%BB%A5%E4%B8%8B%E5%91%BD%E4%BB%A4%E5%88%9D%E5%A7%8B%E5%8C%96%20package.json%0Anpm%20init%20-y%0A%0A%23%20%E5%AE%89%E8%A3%85%20webpack%20%E5%92%8C%20webpack-cli%0Anpm%20install%20webpack%20webpack-cli%20--save-dev%0A%0A%23%20%E6%89%A7%E8%A1%8C%E4%BB%A5%E4%B8%8B%E5%91%BD%E4%BB%A4%E6%A3%80%E6%9F%A5%E6%98%AF%E5%90%A6%E5%AE%89%E8%A3%85%E6%88%90%E5%8A%9F%0A.%2Fnode_modules%2F.bin%2Fwebpack%20-v%0A",ext:"PowerShell"},{default:t(()=>[B]),_:1}),E,_,e(a,{class:"language-javascript","data-ext":"js",fullscreen:"undefined",steps:"undefined",action:"undefined",winCtrl:"false",async:"undefined",content:"module.exports%20%3D%20%7B%0A%20%20entry%3A%20'.%2Fsrc%2Findex.js'%2C%2F%2F%20----------------%20%E6%89%93%E5%8C%85%E7%9A%84%E5%85%A5%E5%8F%A3%E6%96%87%E4%BB%B6%EF%BC%8CWebpack4%2B%E9%BB%98%E8%AE%A4%E5%80%BC%0A%20%20output%3A%20'.%2Fdist%2Fmain.js'%2C%2F%2F%20---------------%20%E6%89%93%E5%8C%85%E7%9A%84%E8%BE%93%E5%87%BA%EF%BC%8CWebpack4%2B%E9%BB%98%E8%AE%A4%E5%80%BC%0A%20%20mode%3A%20'development'%2C%2F%2F%20--------------------%20%E7%8E%AF%E5%A2%83%0A%20%20module%3A%20%7B%0A%20%20%20%20rules%3A%20%5B%2F%2F%20------------------------------%20Loader%20%E9%85%8D%E7%BD%AE%0A%20%20%20%20%20%20%7B%20test%3A%20%2F%5C.txt%24%2F%2C%20use%3A%20'raw-loader'%20%7D%0A%20%20%20%20%5D%0A%20%20%7D%2C%0A%20%20plugins%3A%20%5B%2F%2F%20------------------------------%20%E6%8F%92%E4%BB%B6%20%E9%85%8D%E7%BD%AE%0A%20%20%20%20new%20HtmlWebpackPlugin(%7B%0A%20%20%20%20%20%20template%3A%20'.%2Fsrc%2Findex.html'%0A%20%20%20%20%7D)%0A%20%20%5D%0A%7D%3B%0A",ext:"javascript"},{default:t(()=>[y]),_:1}),v,F,e(a,{class:"language-javascript","data-ext":"js",fullscreen:"undefined",steps:"undefined",action:"undefined",winCtrl:"false",async:"undefined",content:"%2F%2F%20.%2FWebpack%2Fwebpack.config.js%0Aconst%20path%20%3D%20require('path')%3B%0A%0Amodule.exports%20%3D%20%7B%0A%20%20entry%3A%20'.%2Fsrc%2Findex.js'%2C%0A%20%20output%3A%20%7B%0A%20%20%20%20path%3A%20path.join(__dirname%2C%20'dist')%2C%0A%20%20%20%20filename%3A%20'bundle.js'%2C%0A%20%20%7D%2C%0A%20%20mode%3A%20'production'%2C%0A%7D%3B%0A",ext:"javascript"},{default:t(()=>[C]),_:1}),x,e(a,{class:"language-javascript","data-ext":"js",fullscreen:"undefined",steps:"undefined",action:"undefined",winCtrl:"false",async:"undefined",content:"%2F%2F%20.%2FWebpack%2Fsrc%2Ftest.js%0Aexport%20function%20printHello()%20%7B%0A%20%20return%20'Hello%20world!'%3B%0A%7D%0A%0Aexport%20function%20add(a%2C%20b)%20%7B%0A%20%20return%20a%20%2B%20b%3B%0A%7D%0A%2F%2F%20.%2FWebpack%2Fsrc%2Findex.js%0Aimport%20%7B%20printHello%20%7D%20from%20'.%2Ftest'%3B%0A%0Adocument.write(printHello())%3B%0A",ext:"javascript"},{default:t(()=>[j]),_:1}),D,e(a,{class:"language-PowerShell","data-ext":"PowerShell",fullscreen:"undefined",steps:"undefined",action:"undefined",winCtrl:"false",async:"undefined",content:".%2Fnode_modules%2F.bin%2Fwebpack%0A",ext:"PowerShell"},{default:t(()=>[S]),_:1}),P,e(a,{class:"language-json","data-ext":"json",fullscreen:"undefined",steps:"undefined",action:"undefined",winCtrl:"false",async:"undefined",content:"%7B%0A%20%20%22name%22%3A%20%22webpack%22%2C%0A%20%20%22version%22%3A%20%221.0.0%22%2C%0A%20%20%22description%22%3A%20%22%22%2C%0A%20%20%22main%22%3A%20%22index.js%22%2C%0A%20%20%22scripts%22%3A%20%7B%0A%20%20%20%20%22dev%22%3A%20%22webpack-dev-server%20--config%20webpack.dev.js%20--open%22%2C%0A%20%20%20%20%22build%22%3A%20%22webpack%20--config%20webpack.prod.js%22%2C%0A%20%20%20%20%22watch%22%3A%20%22webpack%20--watch%22%2C%0A%0A%20%20%7D%2C%0A%20%20%22keywords%22%3A%20%5B%5D%2C%0A%20%20%22author%22%3A%20%22%22%2C%0A%20%20%22license%22%3A%20%22ISC%22%2C%0A%20%20%22devDependencies%22%3A%20%7B%0A%20%20%20%20%22webpack%22%3A%20%22%5E4.31.0%22%2C%0A%20%20%20%20%22webpack-cli%22%3A%20%22%5E3.3.2%22%0A%20%20%7D%0A%7D%0A",ext:"json"},{default:t(()=>[W]),_:1}),N,e(a,{class:"language-PowerShell","data-ext":"PowerShell",fullscreen:"undefined",steps:"undefined",action:"undefined",winCtrl:"false",async:"undefined",content:"npm%20run%20build%0A%0A%3E%20webpack%401.0.0%20build%0A%3E%20webpack%0A%0AHash%3A%20dc04ce51eb3dc2716844%0AVersion%3A%20webpack%204.31.0%0ATime%3A%2075ms%0ABuilt%20at%3A%202021%2F03%2F10%2012%3A40%3A11%0A%20%20%20%20%20Asset%20%20%20%20%20%20%20Size%20%20Chunks%20%20%20%20%20%20%20%20%20%20%20%20%20Chunk%20Names%0Abundler.js%20%20982%20bytes%20%20%20%20%20%20%200%20%20%5Bemitted%5D%20%20main%0AEntrypoint%20main%20%3D%20bundler.js%0A%5B0%5D%20.%2Fsrc%2Findex.js%20%2B%201%20modules%20171%20bytes%20%7B0%7D%20%5Bbuilt%5D%0A%20%20%20%20%7C%20.%2Fsrc%2Findex.js%2067%20bytes%20%5Bbuilt%5D%0A%20%20%20%20%7C%20.%2Fsrc%2Ftest.js%20104%20bytes%20%5Bbuilt%5D%0A",ext:"PowerShell"},{default:t(()=>[H]),_:1}),V])}const z=p(u,[["render",q],["__file","index.html.vue"]]);export{z as default};
