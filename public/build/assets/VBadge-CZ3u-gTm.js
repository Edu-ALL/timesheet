import{k as V,a8 as B,a2 as N,aS as h,ad as P,a4 as T,T as x,l as R,W as L,X as d,ak as _,$ as w,aI as A,aL as I,aT as X,y as $,aU as M,b as t,N as W,aq as Y,A as u,V as q}from"./main-BamGvAjg.js";import{m as D,M as F}from"./VImg-C3PmJxkR.js";const U=V({bordered:Boolean,color:String,content:[Number,String],dot:Boolean,floating:Boolean,icon:B,inline:Boolean,label:{type:String,default:"$vuetify.badge"},max:[Number,String],modelValue:{type:Boolean,default:!0},offsetX:[Number,String],offsetY:[Number,String],textColor:String,...N(),...h({location:"top end"}),...P(),...T(),...x(),...D({transition:"scale-rotate-transition"})},"VBadge"),E=R()({name:"VBadge",inheritAttrs:!1,props:U(),setup(e,o){const{backgroundColorClasses:c,backgroundColorStyles:g}=L(d(e,"color")),{roundedClasses:m}=_(e),{t:b}=w(),{textColorClasses:f,textColorStyles:v}=A(d(e,"textColor")),{themeClasses:C}=I(),{locationStyles:k}=X(e,!0,a=>(e.floating?e.dot?2:4:e.dot?8:12)+(["top","bottom"].includes(a)?+(e.offsetY??0):["left","right"].includes(a)?+(e.offsetX??0):0));return $(()=>{const a=Number(e.content),n=!e.max||isNaN(a)?e.content:a<=+e.max?a:`${e.max}+`,[y,S]=M(o.attrs,["aria-atomic","aria-label","aria-live","role","title"]);return t(e.tag,u({class:["v-badge",{"v-badge--bordered":e.bordered,"v-badge--dot":e.dot,"v-badge--floating":e.floating,"v-badge--inline":e.inline},e.class]},S,{style:e.style}),{default:()=>{var s,l;return[t("div",{class:"v-badge__wrapper"},[(l=(s=o.slots).default)==null?void 0:l.call(s),t(F,{transition:e.transition},{default:()=>{var i,r;return[W(t("span",u({class:["v-badge__badge",C.value,c.value,m.value,f.value],style:[g.value,v.value,e.inline?{}:k.value],"aria-atomic":"true","aria-label":b(e.label,a),"aria-live":"polite",role:"status"},y),[e.dot?void 0:o.slots.badge?(r=(i=o.slots).badge)==null?void 0:r.call(i):e.icon?t(q,{icon:e.icon},null):n]),[[Y,e.modelValue]])]}})])]}})}),{}}});export{E as V};
