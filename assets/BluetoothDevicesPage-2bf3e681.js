import{u}from"./Playground-3eb19026.js";import{a as p}from"./index-d2316ac8.js";import{$ as d}from"./app-bf7bc9cc.js";import{c as h,p as t,q as s,O as f,P as m,Q as c,v as o,z as a,_ as v}from"./framework-5411b43d.js";const g=["onClick"],k={class:"settingsIcon"},B={class:"itemInfo"},D={class:"itemTitle"},y={key:0,class:"itemDesc"},C={key:1,class:"itemDesc"},P=h({__name:"BluetoothDevicesPage",setup(x){const i=p.BluetoothDevices,{bluetooth:l,connectBluetooth:r}=u();function _(n){if(n==="AddDevice"||n==="Bluetooth"){r(()=>{});return}}return(n,I)=>(t(),s("div",null,[(t(!0),s(f,null,m(a(i),e=>(t(),s("div",{key:e.key,class:"pageItem",onClick:S=>_(e.key)},[c("span",k,o(e.icon),1),c("div",B,[c("p",D,o(e.title),1),e.key==="Bluetooth"?(t(),s("p",y,o(e.description)+": "+o(a(d)("State")(a(l).isConnected.value)),1)):(t(),s("p",C,o(e.description),1))])],8,g))),128))]))}}),A=v(P,[["__file","BluetoothDevicesPage.vue"]]);export{A as default};
