import{a as V}from"./avatar-1-BpD18F9D.js";import{a as v,b as g,c as k,d as b}from"./avatar-5-DCc5XOFQ.js";import{V as w,b as y,d as C,a as T}from"./VTextField-1ys-liIu.js";import{V as N}from"./VTable-SAWoljyi.js";import{V as I}from"./VPagination-Csy0LPkf.js";import{r as u,e as m,w as r,i as P,M as S,o as i,b as t,a as e,c as B,G as D,F,u as E,E as H,t as o,V as l,f as s,N as j,I as z}from"./main-BamGvAjg.js";import{V as G}from"./forwardRefs-DUMsmNF6.js";import{V as M}from"./VTooltip-D20pEGI9.js";import"./VImg-C3PmJxkR.js";import"./VOverlay-BSOkjb50.js";import"./lazy-D8v9bkkP.js";const U={class:"d-flex justify-between align-center"},A=e("div",{class:"w-100"},[e("h4",null,"TimeSheet")],-1),L={class:"w-25"},R=e("thead",null,[e("tr",null,[e("th",{class:"text-uppercase",width:"1%"}," No "),e("th",{class:"text-uppercase text-center"},"Program Name"),e("th",{class:"text-uppercase text-center"},"Package"),e("th",{class:"text-uppercase text-center"},"Tutor/Mentor"),e("th",{class:"text-uppercase text-center"},"PIC"),e("th",{class:"text-uppercase text-center"},"School/Student Name"),e("th",{class:"text-uppercase text-center"},"Total Hours"),e("th",{class:"text-uppercase text-center"},"Used"),e("th",{class:"text-uppercase text-center"},"#")])],-1),Y={class:"text-center"},q={class:"text-left"},J={class:"text-left"},K={class:"text-left"},O={class:"text-left"},Q={class:"text-left"},W={class:"d-flex justify-center mt-5"},ie={__name:"timesheet",setup(X){const _=[V,v,g,k,b],n=u(1);u([]);const f=[{dessert:"Frozen Yogurt",calories:159,fat:6,carbs:24,protein:4},{dessert:"Ice cream sandwich",calories:237,fat:6,carbs:24,protein:4},{dessert:"Eclair",calories:262,fat:6,carbs:24,protein:4},{dessert:"Cupcake",calories:305,fat:6,carbs:24,protein:4},{dessert:"Gingerbread",calories:356,fat:6,carbs:24,protein:4}];return(d,p)=>{const h=P("router-link"),x=S("tooltip");return i(),m(w,null,{default:r(()=>[t(C,null,{default:r(()=>[e("div",U,[A,e("div",L,[t(y,{loading:d.loading,"append-inner-icon":"mdi-magnify",density:"compact",label:"Search",variant:"solo","hide-details":"","single-line":"","onClick:appendInner":d.onClick},null,8,["loading","onClick:appendInner"])])])]),_:1}),t(T,null,{default:r(()=>[t(N,{class:"text-no-wrap"},{default:r(()=>[R,e("tbody",null,[(i(),B(F,null,D(f,(c,a)=>e("tr",{key:a},[e("td",null,o(a+1),1),e("td",null,[t(l,{icon:"ri-bookmark-3-line",class:"me-3"}),s(" "+o(c.dessert),1)]),e("td",Y,[t(l,{icon:"ri-bookmark-line",class:"me-3"}),s(" Package "+o(a+1),1)]),e("td",q,[t(G,{size:"25",class:"avatar-center me-3",image:_[a%5]},null,8,["image"]),s(" "+o(c.dessert),1)]),e("td",J,[t(l,{icon:"ri-user-line",class:"cursor-pointer me-3"}),s(" "+o(c.dessert),1)]),e("td",K,[t(l,{icon:"ri-user-line",class:"cursor-pointer me-3"}),s(" Student "+o(a+1),1)]),e("td",O,[t(l,{icon:"ri-calendar-schedule-line",class:"cursor-pointer me-3"}),s(" 40 Hours ")]),e("td",Q,[t(l,{icon:"ri-timer-2-line",class:"cursor-pointer me-3"}),s(" "+o(25-a%5)+" Hours ",1)]),e("td",null,[t(h,{to:"/user/timesheet/"+a},{default:r(()=>[j((i(),m(z,{color:"secondary",density:"compact"},{default:r(()=>[t(l,{icon:"ri-timeline-view",class:"cursor-pointer"}),t(M,{activator:"parent",location:"top",transition:"scroll-y-transition"},{default:r(()=>[s(" View Detail ")]),_:1})]),_:1})),[[x,"Tooltip"]])]),_:2},1032,["to"])])])),64))])]),_:1}),e("div",W,[t(I,{modelValue:E(n),"onUpdate:modelValue":p[0]||(p[0]=c=>H(n)?n.value=c:null),length:5,color:"primary"},null,8,["modelValue"])])]),_:1})]),_:1})}}};export{ie as default};
