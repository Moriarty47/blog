import{c as a,p as i,q as d,s as h,t as u,v as f,_ as p}from"./framework-5411b43d.js";const m=a({__name:"CodeLink",props:{to:{type:String,required:!0},text:{type:String,required:!1,default:""}},setup(o){const n=o,r=(e,s)=>{const l=s.parentElement.querySelectorAll(`[for="${e}"]`);l.forEach(t=>{t.classList.add("highlightBlock")}),setTimeout(()=>{l.forEach(t=>{t.classList.remove("highlightBlock")})},2e3)};function c(){const e=document.getElementById(n.to);e&&(e.scrollIntoView({block:"center",behavior:"smooth"}),r(n.to,e))}return(e,s)=>(i(),d("span",{class:"code-link",onClick:c},[h(e.$slots,"default",{},()=>[u(f(o.text),1)])]))}}),k=p(m,[["__file","CodeLink.vue"]]);export{k as default};
