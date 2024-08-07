import{r as d,C as G,e as _,w as l,D as N,s as q,i as H,M as J,o as n,b as a,u as s,E as b,a as e,c as x,G as I,F as j,H as K,t as p,n as O,V as m,f as u,N as Q,I as W}from"./main-BamGvAjg.js";import{a as X}from"./avatar-1-BpD18F9D.js";import{a as Y,b as Z,c as $,d as ee}from"./avatar-5-DCc5XOFQ.js";import{V as te,d as ae,b as oe,a as se}from"./VTextField-1ys-liIu.js";import{V as le,a as S}from"./VRow-CS9fcrjS.js";import{V as A}from"./VAutocomplete-CV-sKyN8.js";import{V as re}from"./VSkeletonLoader-HKZIy6ej.js";import{V as ne}from"./VTable-SAWoljyi.js";import{V as ce}from"./VPagination-Csy0LPkf.js";import{V as ie}from"./VBadge-CZ3u-gTm.js";import{V as F}from"./VTooltip-D20pEGI9.js";import{V as de}from"./forwardRefs-DUMsmNF6.js";import"./VImg-C3PmJxkR.js";/* empty css              */import"./VList-DyE5X8Dw.js";import"./VOverlay-BSOkjb50.js";import"./lazy-D8v9bkkP.js";import"./dialog-transition-C_q3zPbm.js";import"./ssrBoot-DWWf1isl.js";import"./VDivider-BVdfafVF.js";import"./VCheckboxBtn-CJx0AXnU.js";import"./VSelectionControl-Cb_evK1R.js";const pe=e("div",{class:"d-flex justify-between align-center"},[e("div",{class:"w-100"},[e("h4",null,"TimeSheet")])],-1),ue=e("thead",null,[e("tr",null,[e("th",{class:"text-uppercase",width:"1%"}," No "),e("th",{class:"text-uppercase text-center"},"School/Student Name"),e("th",{class:"text-uppercase text-center"},"Program Name"),e("th",{class:"text-uppercase text-center"},"Package"),e("th",{class:"text-uppercase text-center"},"Tutor/Mentor"),e("th",{class:"text-uppercase text-center"},"PIC"),e("th",{class:"text-uppercase text-center"},"Total Hours"),e("th",{class:"text-uppercase text-center"},"Used"),e("th",{class:"text-uppercase text-center"},"#")])],-1),me={class:"text-start"},ge={class:"text-left"},_e={class:"text-left"},fe={class:"text-left"},ve={class:"text-left"},he={key:0},Ve=e("tr",null,[e("td",{colspan:"9",class:"text-center"}," Sorry, no data found. ")],-1),ye=[Ve],xe={class:"d-flex justify-center mt-5"},Je={__name:"timesheet",setup(ke){const M=[X,Y,Z,$,ee];d([]);const g=d(1),D=d(),f=d(),w=d([]),c=d(!1),B=d([]),v=d(),U=d([]),h=d(),V=async()=>{var o,y;const r="?page="+g.value,i=f.value?"&keyword="+f.value:"",k=v.value?"&program_name="+v.value:"",P=h.value?"&package_id="+h.value:"",T="&paginate=true";try{c.value=!0;const t=await N.get("api/v1/timesheet/list"+r+i+k+P+T);t&&(g.value=t.current_page,D.value=t.last_page,w.value=t),c.value=!1}catch(t){q("error",(y=(o=t.response)==null?void 0:o.data)==null?void 0:y.message,"bottom-end"),console.error(t),c.value=!1}},z=async()=>{try{const r=await N.get("api/v1/program/component/list");r&&(B.value=r)}catch(r){console.error(r)}},E=async()=>{try{const r=await N.get("api/v1/package/component/list");r&&(U.value=r)}catch(r){console.error(r)}},L=async()=>{g.value=1,await V()};return G(()=>{V(),z(),E()}),(r,i)=>{const k=H("VText"),P=H("router-link"),T=J("tooltip");return n(),_(te,null,{default:l(()=>[a(ae,null,{default:l(()=>[pe]),_:1}),a(se,null,{default:l(()=>[a(le,{class:"my-1 justify-around"},{default:l(()=>[a(S,{cols:"12",md:"5"},{default:l(()=>[a(A,{clearable:"",modelValue:s(v),"onUpdate:modelValue":[i[0]||(i[0]=o=>b(v)?v.value=o:null),V],label:"Program Name",items:s(B),"item-title":"program_name",placeholder:"Select Program Name",density:"compact",variant:"solo","hide-details":"","single-line":"",loading:s(c),disabled:s(c)},null,8,["modelValue","items","loading","disabled"])]),_:1}),a(S,{cols:"12",md:"4"},{default:l(()=>[a(A,{clearable:"true",modelValue:s(h),"onUpdate:modelValue":[i[1]||(i[1]=o=>b(h)?h.value=o:null),V],label:"Package",items:s(U),"item-props":o=>({title:o.package!=null?o.type_of+" - "+o.package:o.type_of}),"item-value":"id",placeholder:"Select Package",density:"compact",variant:"solo","hide-details":"","single-line":"",loading:s(c),disabled:s(c)},null,8,["modelValue","items","item-props","loading","disabled"])]),_:1}),a(S,{cols:"12",md:"3"},{default:l(()=>[a(oe,{loading:s(c),disabled:s(c),"append-inner-icon":"ri-search-line",density:"compact",label:"Search",variant:"solo","hide-details":"","single-line":"",modelValue:s(f),"onUpdate:modelValue":i[2]||(i[2]=o=>b(f)?f.value=o:null),onChange:L},null,8,["loading","disabled","modelValue"])]),_:1})]),_:1}),s(c)?(n(),_(re,{key:0,class:"mx-auto border",type:"table-thead, table-row@10"})):(n(),_(ne,{key:1,class:"text-no-wrap"},{default:l(()=>{var o,y;return[ue,e("tbody",null,[(n(!0),x(j,null,I(s(w).data,(t,C)=>(n(),x("tr",{key:C},[e("td",null,p(parseInt(C)+1),1),e("td",{class:O(t.group?"cursor-pointer text-left":"text-left")},[t.group?(n(),_(k,{key:0},{default:l(()=>[a(m,{icon:"ri-group-line",class:"me-3"}),u(" "+p(t.clients[0])+" ",1),a(ie,{color:"error",content:t.clients.length-1+"+",inline:""},null,8,["content"]),a(F,{activator:"parent",location:"top",transition:"scroll-y-transition",class:"bg-white"},{default:l(()=>[(n(!0),x(j,null,I(t.clients,R=>(n(),x("div",null,p(R),1))),256))]),_:2},1024)]),_:2},1024)):(n(),_(k,{key:1},{default:l(()=>[a(m,{icon:"ri-user-line",class:"me-3"}),u(" "+p(t.clients),1)]),_:2},1024))],2),e("td",null,[a(m,{icon:"ri-bookmark-3-line",class:"me-3"}),u(" "+p(t.program_name),1)]),e("td",me,[a(m,{icon:"ri-bookmark-line",class:"me-3"}),u(" "+p(t.detail_package?t.package_type+" - "+t.detail_package:t.package_type),1)]),e("td",ge,[a(de,{size:"25",class:"avatar-center me-3",image:M[C%5]},null,8,["image"]),u(" "+p(t.tutor_mentor),1)]),e("td",_e,[a(m,{icon:"ri-user-line",class:"cursor-pointer me-3"}),u(" "+p(t.admin),1)]),e("td",fe,[a(m,{icon:"ri-calendar-schedule-line",class:"cursor-pointer me-3"}),u(" "+p(t.duration/60)+" Hours ",1)]),e("td",ve,[a(m,{icon:"ri-timer-2-line",class:"cursor-pointer me-3"}),u(" "+p(t.spent/60)+" Hours ",1)]),e("td",null,[a(P,{to:"/admin/timesheet/"+t.id},{default:l(()=>[Q((n(),_(W,{color:"secondary",density:"compact"},{default:l(()=>[a(m,{icon:"ri-timeline-view",class:"cursor-pointer"}),a(F,{activator:"parent",location:"top",transition:"scroll-y-transition"},{default:l(()=>[u(" View Detail ")]),_:1})]),_:1})),[[T,"Tooltip"]])]),_:2},1032,["to"])])]))),128))]),((y=(o=s(w))==null?void 0:o.data)==null?void 0:y.length)==0?(n(),x("tfoot",he,ye)):K("",!0)]}),_:1})),e("div",xe,[a(ce,{modelValue:s(g),"onUpdate:modelValue":[i[3]||(i[3]=o=>b(g)?g.value=o:null),V],length:s(D),"total-visible":4,color:"primary",density:"compact","show-first-last-page":!1},null,8,["modelValue","length"])])]),_:1})]),_:1})}}};export{Je as default};
