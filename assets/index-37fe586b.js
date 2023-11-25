var m=Object.defineProperty;var v=(s,t,e)=>t in s?m(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var p=(s,t,e)=>(v(s,typeof t!="symbol"?t+"":t,e),e);import{c as b,r as _,o as g,p as y,q as $,an as E,ao as x,Q as r,_ as S}from"./framework-5411b43d.js";class N{constructor(t){this.data=t,this.run(t)}run(t){Object.keys(t).forEach(e=>{this.reactive(e,t[e])})}reactive(t,e){this.defineReactive(this.data,t,e)}defineReactive(t,e,i){const n=new l;h(i),Object.defineProperty(t,e,{enumerable:!0,configurable:!1,get(){return n.depend(),i},set(o){i!==o&&(i=o,h(o),n.notify())}})}}function h(s){if(!(!s||typeof s!="object"))return new N(s)}let w=0;const u=class{constructor(){this.id=w++,this.subs=[]}addSub(t){const e=t||{};if(!e.update||typeof e.update!="function"){console.error('You should subscribe an object with "update" function.');return}this.subs.push(e)}depend(){var t;(t=u.target)==null||t.addDep(this)}removeSub(t){const e=this.subs.findIndex(i=>i===t);e>-1&&this.subs.splice(e,1)}notify(){this.subs.forEach(t=>{t.update()})}};let l=u;p(l,"target",null);class f{constructor(t,e,i){this.vm=t,this.expOrFn=e,this.cb=i,this.depIds={},typeof e=="function"?this.getter=e:this.getter=this.parseGetter(e.trim()),this.value=this.get()}addDep(t){Object.prototype.hasOwnProperty.call(this.depIds,t.id)||(t.addSub(this),this.depIds[t.id]=t)}get(){l.target=this;const t=this.getter.call(this.vm,this.vm);return l.taget=null,t}run(){const t=this.get(),e=this.value;t!==e&&(this.value=t,this.cb.call(this.vm,t,e))}update(){this.run()}parseGetter(t){if(/[^\w.$]/.test(t))return function(i){return c.compile(i,t)};const e=t.split(".");return function(i){const n=e.length;for(let o=0;o<n;o++){if(!i)return;i=i[e[o]]}return i}}}class V{constructor(t,e){this.$vm=e,this.$el=this.isElementNode(t)?t:document.querySelector(t),this.$el&&(this.$fragment=this.node2Fragment(this.$el),this.init(),this.$el.appendChild(this.$fragment))}node2Fragment(t){const e=document.createDocumentFragment();let i;for(;i=t.firstChild;)e.appendChild(i);return e}init(){this.compileElement(this.$fragment)}compileElement(t){const e=t.childNodes,i=/\{\{(.*)\}\}/;[].slice.call(e).forEach(n=>{const o=n.textContent;this.isElementNode(n)?this.compile(n):this.isTextNode(n)&&i.test(o)&&this.compileText(n,RegExp.$1.trim()),n.childNodes&&n.childNodes.length&&this.compileElement(n)})}compileDirective(t,e){const i=e.name,n=e.value,o=i.substring(2);this.isEventDirective(o)?c.eventHandler(t,this.$vm,n,o):this.isBindDirective(o)?c.bindHandler(t,this.$vm,n,o):c[o]&&c[o](t,this.$vm,n),t.removeAttribute(i)}compile(t){const e=t.attributes;[].slice.call(e).forEach(i=>{this.isDirective(i.name)&&this.compileDirective(t,i)})}compileText(t,e){c.text(t,this.$vm,e)}isDirective(t){return t.indexOf("v-")===0}isEventDirective(t){return t.indexOf("on")===0}isBindDirective(t){return t.indexOf("bind")===0}isElementNode(t){return t.nodeType==1}isTextNode(t){return t.nodeType==3}}const d={textUpdater(s,t){s.textContent=typeof t>"u"?"":t},htmlUpdater(s,t){s.innerHTML=typeof t>"u"?"":t},classUpdater(s,t,e){let i=s.className;i=i.replace(e,"").replace(/\s$/,"");const n=i&&String(t)?" ":"";s.className=i+n+t},modelUpdater(s,t){s.value=typeof t>"u"?"":t},ifUpdater(s,t){s.style.display=t?"none":"block"}},c={text(s,t,e){this.bind(s,t,e,"text")},html(s,t,e){this.bind(s,t,e,"html")},class(s,t,e){this.bind(s,t,e,"class")},model(s,t,e){this.bind(s,t,e,"model");let i=this._getVMVal(t,e);s.addEventListener("input",n=>{const o=n.target.value;i!==o&&(this._setVMVal(t,e,o),i=o)})},if(s,t,e){this.bind(s,t,e,"if")},bind(s,t,e,i){const n=d[i+"Updater"];n&&n(s,this._getVMVal(t,e,i)),new f(t,e,(o,a)=>{n&&n(s,o,a)})},compile(){},eventHandler(s,t,e,i){const n=i.split(":")[1],o=t.$options.methods&&t.$options.methods[e];n&&o&&s.addEventListener(n,o.bind(t),!1)},bindHandler(s,t,e,i){const n=i.split(":")[1];console.log(n),d[n+"Updater"]||(d[n+"Updater"]=function(o,a){o.setAttribute(n,a)}),this.bind(s,t,e,n)},_getVMVal(s,t,e){if(e==="if")return this.compile(s,t);let i=s;return t=t.split("."),t.forEach(n=>{i=i[n]}),i},_setVMVal(s,t,e){let i=s;t=t.split("."),t.forEach((n,o)=>{o<t.length-1?i=i[n]:i[n]=e})}};class D{constructor(t){this.$options=t||{},this._data=this.$options.data();const e=this._data;Object.keys(e).forEach(i=>{this._proxyData(i)}),this._initComputed(),h(e),this.$compile=new V(t.el||document.body,this)}_initComputed(){const t=this.$options.computed;typeof t=="object"&&Object.keys(t).forEach(e=>{Object.defineProperty(this,e,{get:typeof t[e]=="function"?t[e]:t[e].get})})}_proxyData(t,e){e=e||Object.defineProperty(this,t,{configurable:!1,enumerable:!0,get:()=>this._data[t],set:i=>{this._data[t]=i}})}$watch(t,e){new f(this,t,e)}}const M=s=>(E("data-v-8a926f0f"),s=s(),x(),s),C=M(()=>r("div",{id:"mvvm-app"},[r("input",{type:"text","v-model":"someStr"}),r("input",{type:"text","v-model":"child.someStr"}),r("p",null,"{{ getHelloWord }}"),r("p",{"v-html":"htmlStr"}),r("button",{"v-on:click":"click"},"Change Name")],-1)),O=[C],H=b({__name:"index",setup(s){const t=_(null);function e(){new D({el:"#mvvm-app",data(){return{someStr:"Hello ",className:"btn",htmlStr:'<span style="color: #fcf;">pink</span>',child:{someStr:"world !"}}},computed:{getHelloWord(){return this.someStr+this.child.someStr}},methods:{click(){const n=["Walter","Hisenberg","Jesse"];this.child.someStr=n[Math.floor(Math.random()*3)]}}}).$watch("child.someStr",(n,o)=>{console.log(n,o)})}return g(e),(i,n)=>(y(),$("div",{ref_key:"mvvmRef",ref:t},O,512))}});const T=S(H,[["__scopeId","data-v-8a926f0f"],["__file","index.vue"]]);export{T as default};
