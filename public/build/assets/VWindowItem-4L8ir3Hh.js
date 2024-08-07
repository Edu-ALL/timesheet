import{a as G,V as K}from"./VRow-CS9fcrjS.js";import{V as Re,a as J,b as Q}from"./VTextField-1ys-liIu.js";import{V as Ee}from"./VForm-C_0S8g3K.js";import{r as I,o as de,e as pe,w,b as i,u as T,E as Z,a as Y,c as $e,F as xe,G as Me,V as ee,t as Ae,I as X,f as ve,k as F,aE as He,bu as Oe,l as W,aI as Xe,v as b,au as R,y as L,A as te,a8 as fe,a2 as ae,bv as Ye,a4 as le,a3 as Fe,bb as Se,at as We,a6 as we,ar as me,aA as Le,as as Ce,aY as Ge,ax as De,ab as je,m as Ne,aj as qe,W as Ue,X as $,a7 as Ke,bw as Je,aD as ne,bx as Ve,T as Qe,_ as Ze,$ as et,aW as tt,N as ke,M as nt,ac as at,aV as lt,am as ot,aq as st,az as it}from"./main-BamGvAjg.js";import{e as ut,s as rt,k as he}from"./forwardRefs-DUMsmNF6.js";import{m as ct,u as dt}from"./lazy-D8v9bkkP.js";import{u as vt}from"./ssrBoot-DWWf1isl.js";import{M as ft}from"./VImg-C3PmJxkR.js";const mt=Y("p",{class:"text-base font-weight-medium mt-2"},"Password Requirements:",-1),ht={class:"d-flex flex-column gap-y-3"},gt={class:"font-weight-medium"},Yt={__name:"security",setup(e){const a=I(!1),t=I(!1),n=I(!1),v=I("12345678"),r=I("87654321"),l=I("87654321"),c=["Minimum 8 characters long - the more, the better","At least one lowercase character","At least one number, symbol, or whitespace character"];return(o,s)=>(de(),pe(K,null,{default:w(()=>[i(G,{cols:"12"},{default:w(()=>[i(Re,{title:"Change Password"},{default:w(()=>[i(Ee,null,{default:w(()=>[i(J,null,{default:w(()=>[i(K,{class:"mb-3"},{default:w(()=>[i(G,{cols:"12",md:"6"},{default:w(()=>[i(Q,{modelValue:T(v),"onUpdate:modelValue":s[0]||(s[0]=d=>Z(v)?v.value=d:null),type:T(a)?"text":"password","append-inner-icon":T(a)?"ri-eye-off-line":"ri-eye-line",autocomplete:"on",label:"Current Password",placeholder:"············","onClick:appendInner":s[1]||(s[1]=d=>a.value=!T(a))},null,8,["modelValue","type","append-inner-icon"])]),_:1})]),_:1}),i(K,null,{default:w(()=>[i(G,{cols:"12",md:"6"},{default:w(()=>[i(Q,{modelValue:T(r),"onUpdate:modelValue":s[2]||(s[2]=d=>Z(r)?r.value=d:null),type:T(t)?"text":"password","append-inner-icon":T(t)?"ri-eye-off-line":"ri-eye-line",label:"New Password",autocomplete:"on",placeholder:"············","onClick:appendInner":s[3]||(s[3]=d=>t.value=!T(t))},null,8,["modelValue","type","append-inner-icon"])]),_:1}),i(G,{cols:"12",md:"6"},{default:w(()=>[i(Q,{modelValue:T(l),"onUpdate:modelValue":s[4]||(s[4]=d=>Z(l)?l.value=d:null),type:T(n)?"text":"password","append-inner-icon":T(n)?"ri-eye-off-line":"ri-eye-line",autocomplete:"on",label:"Confirm New Password",placeholder:"············","onClick:appendInner":s[5]||(s[5]=d=>n.value=!T(n))},null,8,["modelValue","type","append-inner-icon"])]),_:1})]),_:1})]),_:1}),i(J,null,{default:w(()=>[mt,Y("ul",ht,[(de(),$e(xe,null,Me(c,d=>Y("li",{key:d,class:"d-flex"},[Y("div",null,[i(ee,{size:"7",icon:"ri-checkbox-blank-circle-fill",class:"me-3"})]),Y("span",gt,Ae(d),1)])),64))])]),_:1}),i(J,{class:"d-flex flex-wrap gap-4"},{default:w(()=>[i(X,null,{default:w(()=>[ve("Save changes")]),_:1}),i(X,{type:"reset",color:"secondary",variant:"outlined"},{default:w(()=>[ve(" Reset ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}},Te=Symbol.for("vuetify:v-tabs"),yt=F({fixed:Boolean,sliderColor:String,hideSlider:Boolean,direction:{type:String,default:"horizontal"},...He(Oe({selectedClass:"v-tab--selected",variant:"text"}),["active","block","flat","location","position","symbol"])},"VTab"),bt=W()({name:"VTab",props:yt(),setup(e,a){let{slots:t,attrs:n}=a;const{textColorClasses:v,textColorStyles:r}=Xe(e,"sliderColor"),l=b(()=>e.direction==="horizontal"),c=R(!1),o=I(),s=I();function d(h){var V,f;let{value:x}=h;if(c.value=x,x){const B=(f=(V=o.value)==null?void 0:V.$el.parentElement)==null?void 0:f.querySelector(".v-tab--selected .v-tab__slider"),E=s.value;if(!B||!E)return;const M=getComputedStyle(B).color,C=B.getBoundingClientRect(),_=E.getBoundingClientRect(),g=l.value?"x":"y",y=l.value?"X":"Y",S=l.value?"right":"bottom",P=l.value?"width":"height",D=C[g],A=_[g],p=D>A?C[S]-_[S]:C[g]-_[g],j=Math.sign(p)>0?l.value?"right":"bottom":Math.sign(p)<0?l.value?"left":"top":"center",N=(Math.abs(p)+(Math.sign(p)<0?C[P]:_[P]))/Math.max(C[P],_[P])||0,k=C[P]/_[P]||0,H=1.5;ut(E,{backgroundColor:[M,"currentcolor"],transform:[`translate${y}(${p}px) scale${y}(${k})`,`translate${y}(${p/H}px) scale${y}(${(N-1)/H+1})`,"none"],transformOrigin:Array(3).fill(j)},{duration:225,easing:rt})}}return L(()=>{const h=X.filterProps(e);return i(X,te({symbol:Te,ref:o,class:["v-tab",e.class],style:e.style,tabindex:c.value?0:-1,role:"tab","aria-selected":String(c.value),active:!1},h,n,{block:e.fixed,maxWidth:e.fixed?300:void 0,"onGroup:selected":d}),{...t,default:()=>{var x;return i(xe,null,[((x=t.default)==null?void 0:x.call(t))??e.text,!e.hideSlider&&i("div",{ref:s,class:["v-tab__slider",v.value],style:r.value},null)])}})}),{}}});function ge(e){const t=Math.abs(e);return Math.sign(e)*(t/((1/.501-2)*(1-t)+1))}function ye(e){let{selectedElement:a,containerSize:t,contentSize:n,isRtl:v,currentScrollOffset:r,isHorizontal:l}=e;const c=l?a.clientWidth:a.clientHeight,o=l?a.offsetLeft:a.offsetTop,s=v&&l?n-o-c:o,d=t+r,h=c+s,x=c*.4;return s<=r?r=Math.max(s-x,0):d<=h&&(r=Math.min(r-(d-h-x),n-t)),r}function xt(e){let{selectedElement:a,containerSize:t,contentSize:n,isRtl:v,isHorizontal:r}=e;const l=r?a.clientWidth:a.clientHeight,c=r?a.offsetLeft:a.offsetTop,o=v&&r?n-c-l/2-t/2:c+l/2-t/2;return Math.min(n-t,Math.max(0,o))}const St=Symbol.for("vuetify:v-slide-group"),_e=F({centerActive:Boolean,direction:{type:String,default:"horizontal"},symbol:{type:null,default:St},nextIcon:{type:fe,default:"$next"},prevIcon:{type:fe,default:"$prev"},showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["always","desktop","mobile"].includes(e)},...ae(),...Ye(),...le(),...Fe({selectedClass:"v-slide-group-item--active"})},"VSlideGroup"),be=W()({name:"VSlideGroup",props:_e(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:t}=a;const{isRtl:n}=Se(),{displayClasses:v,mobile:r}=We(e),l=we(e,e.symbol),c=R(!1),o=R(0),s=R(0),d=R(0),h=b(()=>e.direction==="horizontal"),{resizeRef:x,contentRect:V}=me(),{resizeRef:f,contentRect:B}=me(),E=b(()=>l.selected.value.length?l.items.value.findIndex(u=>u.id===l.selected.value[0]):-1),M=b(()=>l.selected.value.length?l.items.value.findIndex(u=>u.id===l.selected.value[l.selected.value.length-1]):-1);if(Le){let u=-1;Ce(()=>[l.selected.value,V.value,B.value,h.value],()=>{cancelAnimationFrame(u),u=requestAnimationFrame(()=>{if(V.value&&B.value){const m=h.value?"width":"height";s.value=V.value[m],d.value=B.value[m],c.value=s.value+1<d.value}if(E.value>=0&&f.value){const m=f.value.children[M.value];E.value===0||!c.value?o.value=0:e.centerActive?o.value=xt({selectedElement:m,containerSize:s.value,contentSize:d.value,isRtl:n.value,isHorizontal:h.value}):c.value&&(o.value=ye({selectedElement:m,containerSize:s.value,contentSize:d.value,isRtl:n.value,currentScrollOffset:o.value,isHorizontal:h.value}))}})})}const C=R(!1);let _=0,g=0;function y(u){const m=h.value?"clientX":"clientY";g=(n.value&&h.value?-1:1)*o.value,_=u.touches[0][m],C.value=!0}function S(u){if(!c.value)return;const m=h.value?"clientX":"clientY",z=n.value&&h.value?-1:1;o.value=z*(g+_-u.touches[0][m])}function P(u){const m=d.value-s.value;o.value<0||!c.value?o.value=0:o.value>=m&&(o.value=m),C.value=!1}function D(){x.value&&(x.value[h.value?"scrollLeft":"scrollTop"]=0)}const A=R(!1);function p(u){if(A.value=!0,!(!c.value||!f.value)){for(const m of u.composedPath())for(const z of f.value.children)if(z===m){o.value=ye({selectedElement:z,containerSize:s.value,contentSize:d.value,isRtl:n.value,currentScrollOffset:o.value,isHorizontal:h.value});return}}}function j(u){A.value=!1}function oe(u){var m;!A.value&&!(u.relatedTarget&&((m=f.value)!=null&&m.contains(u.relatedTarget)))&&k()}function N(u){f.value&&(h.value?u.key==="ArrowRight"?k(n.value?"prev":"next"):u.key==="ArrowLeft"&&k(n.value?"next":"prev"):u.key==="ArrowDown"?k("next"):u.key==="ArrowUp"&&k("prev"),u.key==="Home"?k("first"):u.key==="End"&&k("last"))}function k(u){var m,z,ue,re,ce;if(f.value)if(!u)(m=Ge(f.value)[0])==null||m.focus();else if(u==="next"){const O=(z=f.value.querySelector(":focus"))==null?void 0:z.nextElementSibling;O?O.focus():k("first")}else if(u==="prev"){const O=(ue=f.value.querySelector(":focus"))==null?void 0:ue.previousElementSibling;O?O.focus():k("last")}else u==="first"?(re=f.value.firstElementChild)==null||re.focus():u==="last"&&((ce=f.value.lastElementChild)==null||ce.focus())}function H(u){const m=o.value+(u==="prev"?-1:1)*s.value;o.value=De(m,0,d.value-s.value)}const Ie=b(()=>{let u=o.value>d.value-s.value?-(d.value-s.value)+ge(d.value-s.value-o.value):-o.value;o.value<=0&&(u=ge(-o.value));const m=n.value&&h.value?-1:1;return{transform:`translate${h.value?"X":"Y"}(${m*u}px)`,transition:C.value?"none":"",willChange:C.value?"transform":""}}),q=b(()=>({next:l.next,prev:l.prev,select:l.select,isSelected:l.isSelected})),U=b(()=>{switch(e.showArrows){case"always":return!0;case"desktop":return!r.value;case!0:return c.value||Math.abs(o.value)>0;case"mobile":return r.value||c.value||Math.abs(o.value)>0;default:return!r.value&&(c.value||Math.abs(o.value)>0)}}),se=b(()=>Math.abs(o.value)>0),ie=b(()=>d.value>Math.abs(o.value)+s.value);return L(()=>i(e.tag,{class:["v-slide-group",{"v-slide-group--vertical":!h.value,"v-slide-group--has-affixes":U.value,"v-slide-group--is-overflowing":c.value},v.value,e.class],style:e.style,tabindex:A.value||l.selected.value.length?-1:0,onFocus:oe},{default:()=>{var u,m,z;return[U.value&&i("div",{key:"prev",class:["v-slide-group__prev",{"v-slide-group__prev--disabled":!se.value}],onClick:()=>se.value&&H("prev")},[((u=t.prev)==null?void 0:u.call(t,q.value))??i(he,null,{default:()=>[i(ee,{icon:n.value?e.nextIcon:e.prevIcon},null)]})]),i("div",{key:"container",ref:x,class:"v-slide-group__container",onScroll:D},[i("div",{ref:f,class:"v-slide-group__content",style:Ie.value,onTouchstartPassive:y,onTouchmovePassive:S,onTouchendPassive:P,onFocusin:p,onFocusout:j,onKeydown:N},[(m=t.default)==null?void 0:m.call(t,q.value)])]),U.value&&i("div",{key:"next",class:["v-slide-group__next",{"v-slide-group__next--disabled":!ie.value}],onClick:()=>ie.value&&H("next")},[((z=t.next)==null?void 0:z.call(t,q.value))??i(he,null,{default:()=>[i(ee,{icon:n.value?e.prevIcon:e.nextIcon},null)]})])]}})),{selected:l.selected,scrollTo:H,scrollOffset:o,focus:k}}});function wt(e){return e?e.map(a=>Je(a)?a:{text:a,value:a}):[]}const Ct=F({alignTabs:{type:String,default:"start"},color:String,fixedTabs:Boolean,items:{type:Array,default:()=>[]},stacked:Boolean,bgColor:String,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,sliderColor:String,..._e({mandatory:"force"}),...je(),...le()},"VTabs"),Ft=W()({name:"VTabs",props:Ct(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:t}=a;const n=Ne(e,"modelValue"),v=b(()=>wt(e.items)),{densityClasses:r}=qe(e),{backgroundColorClasses:l,backgroundColorStyles:c}=Ue($(e,"bgColor"));return Ke({VTab:{color:$(e,"color"),direction:$(e,"direction"),stacked:$(e,"stacked"),fixed:$(e,"fixedTabs"),sliderColor:$(e,"sliderColor"),hideSlider:$(e,"hideSlider")}}),L(()=>{const o=be.filterProps(e);return i(be,te(o,{modelValue:n.value,"onUpdate:modelValue":s=>n.value=s,class:["v-tabs",`v-tabs--${e.direction}`,`v-tabs--align-tabs-${e.alignTabs}`,{"v-tabs--fixed-tabs":e.fixedTabs,"v-tabs--grow":e.grow,"v-tabs--stacked":e.stacked},r.value,l.value,e.class],style:[{"--v-tabs-height":ne(e.height)},c.value,e.style],role:"tablist",symbol:Te}),{default:()=>[t.default?t.default():v.value.map(s=>i(bt,te(s,{key:s.text}),null))]})}),{}}}),Vt=e=>{const{touchstartX:a,touchendX:t,touchstartY:n,touchendY:v}=e,r=.5,l=16;e.offsetX=t-a,e.offsetY=v-n,Math.abs(e.offsetY)<r*Math.abs(e.offsetX)&&(e.left&&t<a-l&&e.left(e),e.right&&t>a+l&&e.right(e)),Math.abs(e.offsetX)<r*Math.abs(e.offsetY)&&(e.up&&v<n-l&&e.up(e),e.down&&v>n+l&&e.down(e))};function kt(e,a){var n;const t=e.changedTouches[0];a.touchstartX=t.clientX,a.touchstartY=t.clientY,(n=a.start)==null||n.call(a,{originalEvent:e,...a})}function Tt(e,a){var n;const t=e.changedTouches[0];a.touchendX=t.clientX,a.touchendY=t.clientY,(n=a.end)==null||n.call(a,{originalEvent:e,...a}),Vt(a)}function _t(e,a){var n;const t=e.changedTouches[0];a.touchmoveX=t.clientX,a.touchmoveY=t.clientY,(n=a.move)==null||n.call(a,{originalEvent:e,...a})}function Pt(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const a={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:e.left,right:e.right,up:e.up,down:e.down,start:e.start,move:e.move,end:e.end};return{touchstart:t=>kt(t,a),touchend:t=>Tt(t,a),touchmove:t=>_t(t,a)}}function zt(e,a){var c;const t=a.value,n=t!=null&&t.parent?e.parentElement:e,v=(t==null?void 0:t.options)??{passive:!0},r=(c=a.instance)==null?void 0:c.$.uid;if(!n||!r)return;const l=Pt(a.value);n._touchHandlers=n._touchHandlers??Object.create(null),n._touchHandlers[r]=l,Ve(l).forEach(o=>{n.addEventListener(o,l[o],v)})}function Bt(e,a){var r,l;const t=(r=a.value)!=null&&r.parent?e.parentElement:e,n=(l=a.instance)==null?void 0:l.$.uid;if(!(t!=null&&t._touchHandlers)||!n)return;const v=t._touchHandlers[n];Ve(v).forEach(c=>{t.removeEventListener(c,v[c])}),delete t._touchHandlers[n]}const Pe={mounted:zt,unmounted:Bt},ze=Symbol.for("vuetify:v-window"),Be=Symbol.for("vuetify:v-window-group"),It=F({continuous:Boolean,nextIcon:{type:[Boolean,String,Function,Object],default:"$next"},prevIcon:{type:[Boolean,String,Function,Object],default:"$prev"},reverse:Boolean,showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||e==="hover"},touch:{type:[Object,Boolean],default:void 0},direction:{type:String,default:"horizontal"},modelValue:null,disabled:Boolean,selectedClass:{type:String,default:"v-window-item--active"},mandatory:{type:[Boolean,String],default:"force"},...ae(),...le(),...Qe()},"VWindow"),Wt=W()({name:"VWindow",directives:{Touch:Pe},props:It(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:t}=a;const{themeClasses:n}=Ze(e),{isRtl:v}=Se(),{t:r}=et(),l=we(e,Be),c=I(),o=b(()=>v.value?!e.reverse:e.reverse),s=R(!1),d=b(()=>{const g=e.direction==="vertical"?"y":"x",S=(o.value?!s.value:s.value)?"-reverse":"";return`v-window-${g}${S}-transition`}),h=R(0),x=I(void 0),V=b(()=>l.items.value.findIndex(g=>l.selected.value.includes(g.id)));Ce(V,(g,y)=>{const S=l.items.value.length,P=S-1;S<=2?s.value=g<y:g===P&&y===0?s.value=!0:g===0&&y===P?s.value=!1:s.value=g<y}),tt(ze,{transition:d,isReversed:s,transitionCount:h,transitionHeight:x,rootRef:c});const f=b(()=>e.continuous||V.value!==0),B=b(()=>e.continuous||V.value!==l.items.value.length-1);function E(){f.value&&l.prev()}function M(){B.value&&l.next()}const C=b(()=>{const g=[],y={icon:v.value?e.nextIcon:e.prevIcon,class:`v-window__${o.value?"right":"left"}`,onClick:l.prev,ariaLabel:r("$vuetify.carousel.prev")};g.push(f.value?t.prev?t.prev({props:y}):i(X,y,null):i("div",null,null));const S={icon:v.value?e.prevIcon:e.nextIcon,class:`v-window__${o.value?"left":"right"}`,onClick:l.next,ariaLabel:r("$vuetify.carousel.next")};return g.push(B.value?t.next?t.next({props:S}):i(X,S,null):i("div",null,null)),g}),_=b(()=>e.touch===!1?e.touch:{...{left:()=>{o.value?E():M()},right:()=>{o.value?M():E()},start:y=>{let{originalEvent:S}=y;S.stopPropagation()}},...e.touch===!0?{}:e.touch});return L(()=>ke(i(e.tag,{ref:c,class:["v-window",{"v-window--show-arrows-on-hover":e.showArrows==="hover"},n.value,e.class],style:e.style},{default:()=>{var g,y;return[i("div",{class:"v-window__container",style:{height:x.value}},[(g=t.default)==null?void 0:g.call(t,{group:l}),e.showArrows!==!1&&i("div",{class:"v-window__controls"},[C.value])]),(y=t.additional)==null?void 0:y.call(t,{group:l})]}}),[[nt("touch"),_.value]])),{group:l}}}),Rt=F({reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},...ae(),...at(),...ct()},"VWindowItem"),Lt=W()({name:"VWindowItem",directives:{Touch:Pe},props:Rt(),emits:{"group:selected":e=>!0},setup(e,a){let{slots:t}=a;const n=lt(ze),v=ot(e,Be),{isBooted:r}=vt();if(!n||!v)throw new Error("[Vuetify] VWindowItem must be used inside VWindow");const l=R(!1),c=b(()=>r.value&&(n.isReversed.value?e.reverseTransition!==!1:e.transition!==!1));function o(){!l.value||!n||(l.value=!1,n.transitionCount.value>0&&(n.transitionCount.value-=1,n.transitionCount.value===0&&(n.transitionHeight.value=void 0)))}function s(){var f;l.value||!n||(l.value=!0,n.transitionCount.value===0&&(n.transitionHeight.value=ne((f=n.rootRef.value)==null?void 0:f.clientHeight)),n.transitionCount.value+=1)}function d(){o()}function h(f){l.value&&it(()=>{!c.value||!l.value||!n||(n.transitionHeight.value=ne(f.clientHeight))})}const x=b(()=>{const f=n.isReversed.value?e.reverseTransition:e.transition;return c.value?{name:typeof f!="string"?n.transition.value:f,onBeforeEnter:s,onAfterEnter:o,onEnterCancelled:d,onBeforeLeave:s,onAfterLeave:o,onLeaveCancelled:d,onEnter:h}:!1}),{hasContent:V}=dt(e,v.isSelected);return L(()=>i(ft,{transition:x.value,disabled:!r.value},{default:()=>{var f;return[ke(i("div",{class:["v-window-item",v.selectedClass.value,e.class],style:e.style},[V.value&&((f=t.default)==null?void 0:f.call(t))]),[[st,v.isSelected.value]])]}})),{groupItem:v}}});export{Ft as V,Yt as _,Wt as a,Lt as b,bt as c};
