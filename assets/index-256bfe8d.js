import{I as s}from"./Playground-3eb19026.js";import{$ as d}from"./app-bf7bc9cc.js";import{c as h,r as u,p as r,q as i,Q as t,N as o,z as m,O as c,P as p,v as f,_ as g}from"./framework-5411b43d.js";const b={class:"topBar"},v={class:"addressBar"},k={class:"iconBtn"},y={class:"iconBtn"},w={class:"iconBtn"},B=["placeholder"],x={class:"iconBtn"},z=t("button",{class:"iconBtn"}," ••• ",-1),C={class:"bookmarksBar"},j=["href","onClick"],E=["src"],I=h({__name:"index",setup(M){const n=u("https://www.google.com/webhp?igu=1"),l=[{key:"GitHub",href:"https://github.com/Moriarty47",title:"GitHub",icon:"https://github.com/favicon.ico"},{key:"Email",href:"mailto:wang_jn_xian@163.com",title:"Email",icon:"https://mail.163.com/favicon.ico"},{key:"Moriarty",href:"https://moriarty47.github.io/blog/",title:"Moriarty",icon:"https://moriarty47.github.io/blog/images/m.ico"}];function _(a){n.value=a}return(a,N)=>(r(),i(c,null,[t("div",b,[t("div",v,[t("button",k,[o(s,{class:"invert",name:"svg/arrowLeft.svg",size:20})]),t("button",y,[o(s,{class:"invert",name:"svg/arrowClockwise.svg",size:20})]),t("button",w,[o(s,{class:"invert",name:"svg/home.svg",size:20})]),t("input",{class:"addressInput",type:"text",placeholder:m(d)("placeholder.edgeAddress")},null,8,B),t("button",x,[o(s,{class:"round",name:"jpg/avatar.jpg",size:20})]),z]),t("div",C,[(r(),i(c,null,p(l,e=>t("a",{key:e.key,href:e.href,target:"_blank",rel:"noreferrer",onClick:$=>_(e.href)},[o(s,{src:e.icon,size:20},null,8,["src"]),t("p",null,f(e.title),1)],8,j)),64))])]),t("iframe",{src:n.value,frameborder:"0",class:"edgeWindow",title:"broswer iframe"},null,8,E)],64))}}),S=g(I,[["__file","index.vue"]]);export{S as default};