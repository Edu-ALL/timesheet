import{bG as te,B as E,a9 as ne,aa as oe,av as _e,D as W,az as Ce,ay as Te,ax as Se,aH as ke,r as C,K as V,ae as G,a0 as Pe,a3 as Be,b as s,Y as p,M as R,x as ae,aU as Ie,aJ as $e,bH as pe,$ as se,aS as Ee,bI as We,an as Re,bl as Xe,b4 as U,aE as Ye,b5 as le,bJ as He,bf as Me,F as A,P as $,bc as Ae,bK as ze,bL as Le,E as ie,ar as De,aO as Ge,bi as Ue,ac as P,bD as je,aA as Fe,bA as Oe,o as M,f as Ne,w as y,Z as qe,W as z,u as g,a as X,c as j,X as re,V as ue,t as ce,j as F,a1 as Je,A as Ke,s as L,k as Ze,z as K,ah as Qe}from"./main-CMBL_cll.js";import{r as Z}from"./rules-B5G8qOzK.js";import{a as H,V as Q}from"./VRow-9MWBnQjb.js";import{V as et,a as D}from"./VCard-CkReJ1hG.js";import{V as tt}from"./VForm-C6a7sasP.js";import{u as nt}from"./ssrBoot-5h7EeiQ9.js";import{m as ot,V as ee}from"./VSlideGroup-DP8CCuyG.js";import"./VAvatar-DV0JH4wH.js";import"./VImg-CLmLm-wd.js";const at=e=>{const{touchstartX:o,touchendX:n,touchstartY:t,touchendY:l}=e,i=.5,a=16;e.offsetX=n-o,e.offsetY=l-t,Math.abs(e.offsetY)<i*Math.abs(e.offsetX)&&(e.left&&n<o-a&&e.left(e),e.right&&n>o+a&&e.right(e)),Math.abs(e.offsetX)<i*Math.abs(e.offsetY)&&(e.up&&l<t-a&&e.up(e),e.down&&l>t+a&&e.down(e))};function st(e,o){var t;const n=e.changedTouches[0];o.touchstartX=n.clientX,o.touchstartY=n.clientY,(t=o.start)==null||t.call(o,{originalEvent:e,...o})}function lt(e,o){var t;const n=e.changedTouches[0];o.touchendX=n.clientX,o.touchendY=n.clientY,(t=o.end)==null||t.call(o,{originalEvent:e,...o}),at(o)}function it(e,o){var t;const n=e.changedTouches[0];o.touchmoveX=n.clientX,o.touchmoveY=n.clientY,(t=o.move)==null||t.call(o,{originalEvent:e,...o})}function rt(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const o={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:e.left,right:e.right,up:e.up,down:e.down,start:e.start,move:e.move,end:e.end};return{touchstart:n=>st(n,o),touchend:n=>lt(n,o),touchmove:n=>it(n,o)}}function ut(e,o){var r;const n=o.value,t=n!=null&&n.parent?e.parentElement:e,l=(n==null?void 0:n.options)??{passive:!0},i=(r=o.instance)==null?void 0:r.$.uid;if(!t||!i)return;const a=rt(o.value);t._touchHandlers=t._touchHandlers??Object.create(null),t._touchHandlers[i]=a,te(a).forEach(d=>{t.addEventListener(d,a[d],l)})}function ct(e,o){var i,a;const n=(i=o.value)!=null&&i.parent?e.parentElement:e,t=(a=o.instance)==null?void 0:a.$.uid;if(!(n!=null&&n._touchHandlers)||!t)return;const l=n._touchHandlers[t];te(l).forEach(r=>{n.removeEventListener(r,l[r])}),delete n._touchHandlers[t]}const de={mounted:ut,unmounted:ct},ve=Symbol.for("vuetify:v-window"),fe=Symbol.for("vuetify:v-window-group"),me=E({continuous:Boolean,nextIcon:{type:[Boolean,String,Function,Object],default:"$next"},prevIcon:{type:[Boolean,String,Function,Object],default:"$prev"},reverse:Boolean,showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||e==="hover"},touch:{type:[Object,Boolean],default:void 0},direction:{type:String,default:"horizontal"},modelValue:null,disabled:Boolean,selectedClass:{type:String,default:"v-window-item--active"},mandatory:{type:[Boolean,String],default:"force"},...ne(),...oe(),..._e()},"VWindow"),O=W()({name:"VWindow",directives:{Touch:de},props:me(),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:n}=o;const{themeClasses:t}=Ce(e),{isRtl:l}=Te(),{t:i}=Se(),a=ke(e,fe),r=C(),d=V(()=>l.value?!e.reverse:e.reverse),m=G(!1),u=V(()=>{const b=e.direction==="vertical"?"y":"x",_=(d.value?!m.value:m.value)?"-reverse":"";return`v-window-${b}${_}-transition`}),c=G(0),v=C(void 0),h=V(()=>a.items.value.findIndex(b=>a.selected.value.includes(b.id)));Pe(h,(b,w)=>{const _=a.items.value.length,T=_-1;_<=2?m.value=b<w:b===T&&w===0?m.value=!0:b===0&&w===T?m.value=!1:m.value=b<w}),Be(ve,{transition:u,isReversed:m,transitionCount:c,transitionHeight:v,rootRef:r});const f=V(()=>e.continuous||h.value!==0),x=V(()=>e.continuous||h.value!==a.items.value.length-1);function B(){f.value&&a.prev()}function Y(){x.value&&a.next()}const S=V(()=>{const b=[],w={icon:l.value?e.nextIcon:e.prevIcon,class:`v-window__${d.value?"right":"left"}`,onClick:a.prev,"aria-label":i("$vuetify.carousel.prev")};b.push(f.value?n.prev?n.prev({props:w}):s(p,w,null):s("div",null,null));const _={icon:l.value?e.prevIcon:e.nextIcon,class:`v-window__${d.value?"left":"right"}`,onClick:a.next,"aria-label":i("$vuetify.carousel.next")};return b.push(x.value?n.next?n.next({props:_}):s(p,_,null):s("div",null,null)),b}),k=V(()=>e.touch===!1?e.touch:{...{left:()=>{d.value?B():Y()},right:()=>{d.value?Y():B()},start:w=>{let{originalEvent:_}=w;_.stopPropagation()}},...e.touch===!0?{}:e.touch});return R(()=>ae(s(e.tag,{ref:r,class:["v-window",{"v-window--show-arrows-on-hover":e.showArrows==="hover"},t.value,e.class],style:e.style},{default:()=>{var b,w;return[s("div",{class:"v-window__container",style:{height:v.value}},[(b=n.default)==null?void 0:b.call(n,{group:a}),e.showArrows!==!1&&s("div",{class:"v-window__controls"},[S.value])]),(w=n.additional)==null?void 0:w.call(n,{group:a})]}}),[[Ie("touch"),k.value]])),{group:a}}}),he=E({reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},...ne(),...$e(),...pe()},"VWindowItem"),N=W()({name:"VWindowItem",directives:{Touch:de},props:he(),emits:{"group:selected":e=>!0},setup(e,o){let{slots:n}=o;const t=se(ve),l=Ee(e,fe),{isBooted:i}=nt();if(!t||!l)throw new Error("[Vuetify] VWindowItem must be used inside VWindow");const a=G(!1),r=V(()=>i.value&&(t.isReversed.value?e.reverseTransition!==!1:e.transition!==!1));function d(){!a.value||!t||(a.value=!1,t.transitionCount.value>0&&(t.transitionCount.value-=1,t.transitionCount.value===0&&(t.transitionHeight.value=void 0)))}function m(){var f;a.value||!t||(a.value=!0,t.transitionCount.value===0&&(t.transitionHeight.value=U((f=t.rootRef.value)==null?void 0:f.clientHeight)),t.transitionCount.value+=1)}function u(){d()}function c(f){a.value&&Ye(()=>{!r.value||!a.value||!t||(t.transitionHeight.value=U(f.clientHeight))})}const v=V(()=>{const f=t.isReversed.value?e.reverseTransition:e.transition;return r.value?{name:typeof f!="string"?t.transition.value:f,onBeforeEnter:m,onAfterEnter:d,onEnterCancelled:u,onBeforeLeave:m,onAfterLeave:d,onLeaveCancelled:u,onEnter:c}:!1}),{hasContent:h}=We(e,l.isSelected);return R(()=>s(Xe,{transition:v.value,disabled:!i.value},{default:()=>{var f;return[ae(s("div",{class:["v-window-item",l.selectedClass.value,e.class],style:e.style},[h.value&&((f=n.default)==null?void 0:f.call(n))]),[[Re,l.isSelected.value]])]}})),{groupItem:l}}}),q=Symbol.for("vuetify:v-tabs"),dt=E({fixed:Boolean,sliderColor:String,hideSlider:Boolean,direction:{type:String,default:"horizontal"},...le(He({selectedClass:"v-tab--selected",variant:"text"}),["active","block","flat","location","position","symbol"])},"VTab"),be=W()({name:"VTab",props:dt(),setup(e,o){let{slots:n,attrs:t}=o;const{textColorClasses:l,textColorStyles:i}=Me(e,"sliderColor"),a=C(),r=C(),d=V(()=>e.direction==="horizontal"),m=V(()=>{var c,v;return((v=(c=a.value)==null?void 0:c.group)==null?void 0:v.isSelected.value)??!1});function u(c){var h,f;let{value:v}=c;if(v){const x=(f=(h=a.value)==null?void 0:h.$el.parentElement)==null?void 0:f.querySelector(".v-tab--selected .v-tab__slider"),B=r.value;if(!x||!B)return;const Y=getComputedStyle(x).color,S=x.getBoundingClientRect(),k=B.getBoundingClientRect(),b=d.value?"x":"y",w=d.value?"X":"Y",_=d.value?"right":"bottom",T=d.value?"width":"height",ge=S[b],we=k[b],I=ge>we?S[_]-k[_]:S[b]-k[b],ye=Math.sign(I)>0?d.value?"right":"bottom":Math.sign(I)<0?d.value?"left":"top":"center",Ve=(Math.abs(I)+(Math.sign(I)<0?S[T]:k[T]))/Math.max(S[T],k[T])||0,xe=S[T]/k[T]||0,J=1.5;ze(B,{backgroundColor:[Y,"currentcolor"],transform:[`translate${w}(${I}px) scale${w}(${xe})`,`translate${w}(${I/J}px) scale${w}(${(Ve-1)/J+1})`,"none"],transformOrigin:Array(3).fill(ye)},{duration:225,easing:Le})}}return R(()=>{const c=p.filterProps(e);return s(p,$({symbol:q,ref:a,class:["v-tab",e.class],style:e.style,tabindex:m.value?0:-1,role:"tab","aria-selected":String(m.value),active:!1},c,t,{block:e.fixed,maxWidth:e.fixed?300:void 0,"onGroup:selected":u}),{...n,default:()=>{var v;return s(A,null,[((v=n.default)==null?void 0:v.call(n))??e.text,!e.hideSlider&&s("div",{ref:r,class:["v-tab__slider",l.value],style:i.value},null)])}})}),Ae({},a)}}),vt=E({...le(me(),["continuous","nextIcon","prevIcon","showArrows","touch","mandatory"])},"VTabsWindow"),ft=W()({name:"VTabsWindow",props:vt(),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:n}=o;const t=se(q,null),l=ie(e,"modelValue"),i=V({get(){var a;return l.value!=null||!t?l.value:(a=t.items.value.find(r=>t.selected.value.includes(r.id)))==null?void 0:a.value},set(a){l.value=a}});return R(()=>{const a=O.filterProps(e);return s(O,$({_as:"VTabsWindow"},a,{modelValue:i.value,"onUpdate:modelValue":r=>i.value=r,class:["v-tabs-window",e.class],style:e.style,mandatory:!1,touch:!1}),n)}),{}}}),mt=E({...he()},"VTabsWindowItem"),ht=W()({name:"VTabsWindowItem",props:mt(),setup(e,o){let{slots:n}=o;return R(()=>{const t=N.filterProps(e);return s(N,$({_as:"VTabsWindowItem"},t,{class:["v-tabs-window-item",e.class],style:e.style}),n)}),{}}});function bt(e){return e?e.map(o=>Oe(o)?o:{text:o,value:o}):[]}const gt=E({alignTabs:{type:String,default:"start"},color:String,fixedTabs:Boolean,items:{type:Array,default:()=>[]},stacked:Boolean,bgColor:String,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,sliderColor:String,...ot({mandatory:"force",selectedClass:"v-tab-item--selected"}),...De(),...oe()},"VTabs"),wt=W()({name:"VTabs",props:gt(),emits:{"update:modelValue":e=>!0},setup(e,o){let{attrs:n,slots:t}=o;const l=ie(e,"modelValue"),i=V(()=>bt(e.items)),{densityClasses:a}=Ge(e),{backgroundColorClasses:r,backgroundColorStyles:d}=Ue(P(e,"bgColor")),{scopeId:m}=je();return Fe({VTab:{color:P(e,"color"),direction:P(e,"direction"),stacked:P(e,"stacked"),fixed:P(e,"fixedTabs"),sliderColor:P(e,"sliderColor"),hideSlider:P(e,"hideSlider")}}),R(()=>{const u=ee.filterProps(e),c=!!(t.window||e.items.length>0);return s(A,null,[s(ee,$(u,{modelValue:l.value,"onUpdate:modelValue":v=>l.value=v,class:["v-tabs",`v-tabs--${e.direction}`,`v-tabs--align-tabs-${e.alignTabs}`,{"v-tabs--fixed-tabs":e.fixedTabs,"v-tabs--grow":e.grow,"v-tabs--stacked":e.stacked},a.value,r.value,e.class],style:[{"--v-tabs-height":U(e.height)},d.value,e.style],role:"tablist",symbol:q},m,n),{default:()=>{var v;return[((v=t.default)==null?void 0:v.call(t))??i.value.map(h=>{var f;return((f=t.tab)==null?void 0:f.call(t,{item:h}))??s(be,$(h,{key:h.text,value:h.value}),{default:t[`tab.${h.value}`]?()=>{var x;return(x=t[`tab.${h.value}`])==null?void 0:x.call(t,{item:h})}:void 0})})]}}),c&&s(ft,$({modelValue:l.value,"onUpdate:modelValue":v=>l.value=v,key:"tabs-window"},m),{default:()=>{var v;return[i.value.map(h=>{var f;return((f=t.item)==null?void 0:f.call(t,{item:h}))??s(ht,{value:h.value},{default:()=>{var x;return(x=t[`item.${h.value}`])==null?void 0:x.call(t,{item:h})}})}),(v=t.window)==null?void 0:v.call(t)]}})])}),{}}}),yt=X("p",{class:"text-base font-weight-medium"},"Password Requirements:",-1),Vt={class:"d-flex flex-column gap-y-3"},xt={class:"font-weight-medium"},_t={__name:"security",setup(e){const o=C(null),n=C(!1),t=C(!1),l=C(!1),i=[m=>m!==r.value.new_password?"Passwords do not match":!0],a=["Minimum 8 characters long - the more, the better","At least one lowercase character","At least one number, symbol, or whitespace character"],r=C({current_password:null,new_password:null,new_password_confirmation:null}),d=async()=>{const{valid:m}=await o.value.validate();if(m){Je();try{const u=await Ke.patch("api/v1/auth/change-password",r.value);u&&(L("success",u.message,"bottom-end"),setTimeout(()=>{Ze.go(0)},3e3))}catch(u){typeof u.response.data.errors=="string"?L("error",u.response.data.errors,"bottom-end"):L("error",u.message,"bottom-end")}finally{o.value.reset()}}};return(m,u)=>(M(),Ne(Q,null,{default:y(()=>[s(H,{cols:"12"},{default:y(()=>[s(et,{title:"Change Password"},{default:y(()=>[s(tt,{onSubmit:qe(d,["prevent"]),ref_key:"formData",ref:o},{default:y(()=>[s(D,null,{default:y(()=>[s(Q,{class:"mb-1"},{default:y(()=>[s(H,{cols:"12",md:"4"},{default:y(()=>[s(z,{modelValue:g(r).current_password,"onUpdate:modelValue":u[0]||(u[0]=c=>g(r).current_password=c),type:g(n)?"text":"password","append-inner-icon":g(n)?"ri-eye-off-line":"ri-eye-line",autocomplete:"on",label:"Current Password",placeholder:"············","onClick:appendInner":u[1]||(u[1]=c=>n.value=!g(n)),rules:g(Z).required},null,8,["modelValue","type","append-inner-icon","rules"])]),_:1}),s(H,{cols:"12",md:"4"},{default:y(()=>[s(z,{modelValue:g(r).new_password,"onUpdate:modelValue":u[2]||(u[2]=c=>g(r).new_password=c),type:g(t)?"text":"password","append-inner-icon":g(t)?"ri-eye-off-line":"ri-eye-line",label:"New Password",autocomplete:"on",placeholder:"············","onClick:appendInner":u[3]||(u[3]=c=>t.value=!g(t)),rules:g(Z).password},null,8,["modelValue","type","append-inner-icon","rules"])]),_:1}),s(H,{cols:"12",md:"4"},{default:y(()=>[s(z,{modelValue:g(r).new_password_confirmation,"onUpdate:modelValue":u[4]||(u[4]=c=>g(r).new_password_confirmation=c),type:g(l)?"text":"password","append-inner-icon":g(l)?"ri-eye-off-line":"ri-eye-line",autocomplete:"on",label:"Confirm New Password",placeholder:"············","onClick:appendInner":u[5]||(u[5]=c=>l.value=!g(l)),rules:i},null,8,["modelValue","type","append-inner-icon"])]),_:1})]),_:1})]),_:1}),s(D,null,{default:y(()=>[yt,X("ul",Vt,[(M(),j(A,null,re(a,c=>X("li",{key:c,class:"d-flex"},[X("div",null,[s(ue,{size:"7",icon:"ri-checkbox-blank-circle-fill",class:"me-3"})]),X("span",xt,ce(c),1)])),64))])]),_:1}),s(D,{class:"d-flex flex-wrap gap-4 mt-4 justify-center"},{default:y(()=>[s(p,{type:"submit"},{default:y(()=>[F("Save changes")]),_:1}),s(p,{type:"reset",color:"secondary",variant:"outlined"},{default:y(()=>[F(" Reset ")]),_:1})]),_:1})]),_:1},512)]),_:1})]),_:1})]),_:1}))}},Wt={__name:"account",setup(e){const o=Qe(),n=C(o.params.tab),t=[{title:"Security",icon:"ri-lock-line",tab:"security"}];return(l,i)=>(M(),j("div",null,[s(wt,{modelValue:g(n),"onUpdate:modelValue":i[0]||(i[0]=a=>K(n)?n.value=a:null),"show-arrows":""},{default:y(()=>[(M(),j(A,null,re(t,a=>s(be,{key:a.icon,value:a.tab},{default:y(()=>[s(ue,{size:"20",start:"",icon:a.icon},null,8,["icon"]),F(" "+ce(a.title),1)]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"]),s(O,{modelValue:g(n),"onUpdate:modelValue":i[1]||(i[1]=a=>K(n)?n.value=a:null),class:"mt-5 disable-tab-transition",touch:!1},{default:y(()=>[s(N,{value:"security"},{default:y(()=>[s(_t)]),_:1})]),_:1},8,["modelValue"])]))}};export{Wt as default};
