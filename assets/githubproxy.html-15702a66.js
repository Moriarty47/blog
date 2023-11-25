import{_ as c,M as i,p as l,q as r,N as t,V as o,Q as e,t as n,a0 as d}from"./framework-5411b43d.js";const h={},u=e("h2",{id:"github代理问题",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#github代理问题","aria-hidden":"true"},"#"),n(" GitHub代理问题")],-1),g=e("h3",{id:"github-clone-加速",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#github-clone-加速","aria-hidden":"true"},"#"),n(" GitHub clone 加速")],-1),p=e("p",null,"一般 clone 仓库会使用 ssh 或者 https 两种方式。",-1),m=e("pre",{class:"language-terminal"},[e("code",null,`# ssh
$ git clone git@github.com:xxx/yyy.git
# https
$ git clone https://github.com:xxx/yyy.git
`)],-1),x=e("h4",{id:"设置-http-proxy",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#设置-http-proxy","aria-hidden":"true"},"#"),n(" 设置 Http Proxy")],-1),_=e("br",null,null,-1),f=e("pre",{class:"language-terminal"},[e("code",null,`$ git config --global http.proxy socks5://127.0.0.1:7890
`)],-1),b=e("p",null,"因为git底层使用libcurl发送http请求，而libcurl的代理使用 socks5://时会在本地解析DNS，实际使用中我们希望DNS也在远程解析，所以使用socks5h，即",-1),y=e("pre",{class:"language-terminal"},[e("code",null,`$ git config --global http.proxy socks5h://127.0.0.1:7890
`)],-1),A=e("p",null,"其中 h代表host，包括了域名解析，即域名解析也强制走这个代理。",-1),F=e("p",null,"但这样配置的话会使本机所有的 git 服务都走了代理，假如你在国内主机上部署了自己的 gitea，服务地址 https://gitea.example.com，那么可以只配置 GitHub 的 http proxy，即",-1),C=e("pre",{class:"language-terminal"},[e("code",null,`$ git config --global http.https://github.com.proxy socks5://127.0.0.1:7890
`)],-1),w=e("p",null,[n("这样做实际上修改了 "),e("code",null,"~/.gitconfig"),n(" 文件：")],-1),k=e("pre",{class:"language-terminal"},[e("code",null,`[http "https://github.com"]
        proxy = socks5://127.0.0.1:7890
`)],-1),P=e("h4",{id:"设置-ssh-proxy",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#设置-ssh-proxy","aria-hidden":"true"},"#"),n(" 设置 SSH Proxy")],-1),v=e("h5",{id:"linux-macos",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#linux-macos","aria-hidden":"true"},"#"),n(" Linux & macOS")],-1),D=e("code",null,".ssh/config",-1),S={href:"https://www.commandlinux.com/man-page/man1/nc.1.html",target:"_blank",rel:"noopener noreferrer"},B=e("code",null,"nc",-1),N=e("code",null,"/usr/bin/nc",-1),H=e("blockquote",null,[e("p",null,'netcat is a simple unix utility which reads and writes data across network connections, using TCP or UDP protocol. It is designed to be a reliable "back-end" tool that can be used directly or easily driven by other programs and scripts. At the same time, it is a feature-rich network debugging and exploration tool, since it can create almost any kind of connection you would need and has several interesting built-in capabilities. Netcat, or "nc" as the actual program is named, should have been supplied long ago as another one of those cryptic but standard Unix tools.')],-1),G=e("blockquote",null,[e("p",null,"netcat 是一个简单的 unix 实用程序，它使用 TCP 或 UDP 协议跨网络连接读取和写入数据。 它被设计成一个可靠的“后端”工具，可以直接使用或由其他程序和脚本轻松驱动。 同时，它还是一个功能丰富的网络调试和探索工具，因为它几乎可以创建您需要的任何类型的连接，并且具有几个有趣的内置功能。 Netcat，或实际程序命名的“nc”，早就应该作为另一种神秘但标准的 Unix 工具提供。")],-1),U=e("pre",{class:"language-terminal"},[e("code",null,`$ cat ~/.ssh/config

Host github.com
 Hostname ssh.github.com
 IdentityFile /xxx/.ssh/github_id_rsa
 User git
 Port 443
 ProxyCommand nc -v -x 127.0.0.1:7890 %h %p
`)],-1),E=d('<h5 id="window" tabindex="-1"><a class="header-anchor" href="#window" aria-hidden="true">#</a> Window</h5><p>Win 下与之对应的 netcat 程序是 <code>connect.exe</code>，程序位于 Git 默认安装路径 <code>C:\\Program Files\\Git\\mingw64\\bin</code>，win 下推荐使用 Git Bash，路径也是 Linux style</p><p>因为 connect 程序内置在 Git 中，只要是正常安装 Git 的电脑环境都有这个程序，在 Git Bash 终端输入 connect 即可知晓程序路径在 <code>C:\\Program Files\\Git\\mingw64\\bin\\connect.exe</code>。</p><div class="custom-container warning"><p class="custom-container-title">注意</p><p>路径有空格可能会有问题，找不到路径</p></div>',4),I=e("pre",{class:"language-gitbash"},[e("code",null,`UserName@PC MINGW64 ~
$ connect
connect --- simple relaying command via proxy.
Version 1.105
usage: C:\\Program Files\\Git\\mingw64\\bin\\connect.exe [-dnhst45] [-p local-port]
          [-H proxy-server[:port]] [-S [user@]socks-server[:port]]
          [-T proxy-server[:port]]
          [-c telnet-proxy-command]
          host port
`)],-1),$=e("pre",{class:"language-cmd"},[e("code",null,`$ cat ~/.ssh/config

Host github.com
 Hostname ssh.github.com
 IdentityFile /c/users/xxx/.ssh/github_id_rsa
 User git
 Port 443
 ProxyCommand connect -S 127.0.0.1:7890 %h %p
`)],-1),T=e("h5",{id:"为什么-hostname-是-ssh-github-com-ssh-默认是-22-端口-为什么要用-443-端口",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#为什么-hostname-是-ssh-github-com-ssh-默认是-22-端口-为什么要用-443-端口","aria-hidden":"true"},"#"),n(" 为什么 hostname 是 ssh.github.com，ssh 默认是 22 端口，为什么要用 443 端口？")],-1),V=e("p",null,"有些代理对22端口做了限制，可能会遇到问题，所以使用443端口更加安全稳定可靠。",-1),M={class:"custom-container warning"},W=e("p",{class:"custom-container-title"},"注意",-1),R={href:"https://docs.github.com/cn/authentication/troubleshooting-ssh/using-ssh-over-the-https-port",target:"_blank",rel:"noopener noreferrer"},L=e("h5",{id:"如果代理设置了用户名和密码基础认证呢",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#如果代理设置了用户名和密码基础认证呢","aria-hidden":"true"},"#"),n(" 如果代理设置了用户名和密码基础认证呢？")],-1),q=e("p",null,"如 clash 的 config.yaml 中就可以添加如下配置以增加 http 基础认证。",-1),O=e("pre",{class:"language-yaml"},[e("code",null,[e("span",{class:"token key atrule"},"authentication"),e("span",{class:"token punctuation"},":"),n(`
  `),e("span",{class:"token punctuation"},"-"),n(),e("span",{class:"token string"},'"USERNAME:PASSWORD"'),n(`
`)])],-1),Q=e("p",null,[n("那么写成 "),e("code",null,"ProxyCommand nc -v -x USERNAME@127.0.0.1:7890 %h %p"),n(" 执行命令的时候终端会让输入密码。")],-1);function j(z,J){const s=i("CodeTool"),a=i("ExternalLinkIcon");return l(),r("div",null,[u,g,p,t(s,{class:"language-terminal","data-ext":"terminal",fullscreen:"undefined",steps:"undefined",action:"undefined",winCtrl:"false",async:"undefined",content:"%23%20ssh%0A%24%20git%20clone%20git%40github.com%3Axxx%2Fyyy.git%0A%23%20https%0A%24%20git%20clone%20https%3A%2F%2Fgithub.com%3Axxx%2Fyyy.git%0A",ext:"terminal"},{default:o(()=>[m]),_:1}),x,_,t(s,{class:"language-terminal","data-ext":"terminal",fullscreen:"undefined",steps:"undefined",action:"undefined",winCtrl:"false",async:"undefined",content:"%24%20git%20config%20--global%20http.proxy%20socks5%3A%2F%2F127.0.0.1%3A7890%0A",ext:"terminal"},{default:o(()=>[f]),_:1}),b,t(s,{class:"language-terminal","data-ext":"terminal",fullscreen:"undefined",steps:"undefined",action:"undefined",winCtrl:"false",async:"undefined",content:"%24%20git%20config%20--global%20http.proxy%20socks5h%3A%2F%2F127.0.0.1%3A7890%0A",ext:"terminal"},{default:o(()=>[y]),_:1}),A,F,t(s,{class:"language-terminal","data-ext":"terminal",fullscreen:"undefined",steps:"undefined",action:"undefined",winCtrl:"false",async:"undefined",content:"%24%20git%20config%20--global%20http.https%3A%2F%2Fgithub.com.proxy%20socks5%3A%2F%2F127.0.0.1%3A7890%0A",ext:"terminal"},{default:o(()=>[C]),_:1}),w,t(s,{class:"language-terminal","data-ext":"terminal",fullscreen:"undefined",steps:"undefined",action:"undefined",winCtrl:"false",async:"undefined",content:"%5Bhttp%20%22https%3A%2F%2Fgithub.com%22%5D%0A%20%20%20%20%20%20%20%20proxy%20%3D%20socks5%3A%2F%2F127.0.0.1%3A7890%0A",ext:"terminal"},{default:o(()=>[k]),_:1}),P,v,e("p",null,[n("配置文件在用户目录下的 "),D,n(" 其中 "),e("a",S,[B,t(a)]),n(" 程序位于 "),N]),H,G,t(s,{class:"language-terminal","data-ext":"terminal",fullscreen:"undefined",steps:"undefined",action:"undefined",winCtrl:"false",async:"undefined",content:"%24%20cat%20~%2F.ssh%2Fconfig%0A%0AHost%20github.com%0A%20Hostname%20ssh.github.com%0A%20IdentityFile%20%2Fxxx%2F.ssh%2Fgithub_id_rsa%0A%20User%20git%0A%20Port%20443%0A%20ProxyCommand%20nc%20-v%20-x%20127.0.0.1%3A7890%20%25h%20%25p%0A",ext:"terminal"},{default:o(()=>[U]),_:1}),E,t(s,{class:"language-gitbash","data-ext":"gitbash",fullscreen:"undefined",steps:"undefined",action:"undefined",winCtrl:"false",async:"undefined",content:"UserName%40PC%20MINGW64%20~%0A%24%20connect%0Aconnect%20---%20simple%20relaying%20command%20via%20proxy.%0AVersion%201.105%0Ausage%3A%20C%3A%5CProgram%20Files%5CGit%5Cmingw64%5Cbin%5Cconnect.exe%20%5B-dnhst45%5D%20%5B-p%20local-port%5D%0A%20%20%20%20%20%20%20%20%20%20%5B-H%20proxy-server%5B%3Aport%5D%5D%20%5B-S%20%5Buser%40%5Dsocks-server%5B%3Aport%5D%5D%0A%20%20%20%20%20%20%20%20%20%20%5B-T%20proxy-server%5B%3Aport%5D%5D%0A%20%20%20%20%20%20%20%20%20%20%5B-c%20telnet-proxy-command%5D%0A%20%20%20%20%20%20%20%20%20%20host%20port%0A",ext:"gitbash"},{default:o(()=>[I]),_:1}),t(s,{class:"language-cmd","data-ext":"cmd",fullscreen:"undefined",steps:"undefined",action:"undefined",winCtrl:"false",async:"undefined",content:"%24%20cat%20~%2F.ssh%2Fconfig%0A%0AHost%20github.com%0A%20Hostname%20ssh.github.com%0A%20IdentityFile%20%2Fc%2Fusers%2Fxxx%2F.ssh%2Fgithub_id_rsa%0A%20User%20git%0A%20Port%20443%0A%20ProxyCommand%20connect%20-S%20127.0.0.1%3A7890%20%25h%20%25p%0A",ext:"cmd"},{default:o(()=>[$]),_:1}),T,V,e("div",M,[W,e("p",null,[e("a",R,[n("22 端口时 hostname 应为 github.com"),t(a)])])]),L,q,t(s,{class:"language-yaml","data-ext":"yml",fullscreen:"undefined",steps:"undefined",action:"undefined",winCtrl:"false",async:"undefined",content:"authentication%3A%0A%20%20-%20%22USERNAME%3APASSWORD%22%0A",ext:"yaml"},{default:o(()=>[O]),_:1}),Q])}const X=c(h,[["render",j],["__file","githubproxy.html.vue"]]);export{X as default};