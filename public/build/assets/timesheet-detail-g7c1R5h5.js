import{r as k,l as E,o as _,f as C,w as l,b as t,Z as ee,W as z,u as s,v as R,Y as A,V as g,j as V,m as te,A as P,s as T,$ as I,e as X,a as e,x as j,h as H,c as M,X as Z,F as K,t as m,y as se,a1 as le,k as Q,a4 as J}from"./main-DRbHMMTA.js";import{_ as ae}from"./DeleteHandler.vue_vue_type_script_setup_true_lang-BcApUNpr.js";import{d as oe}from"./debounce-C7xVZuMk.js";import{r as q}from"./rules-B5G8qOzK.js";import{a as $,c as ie,V as Y,b as U,d as F}from"./VCard-IU1KNjEw.js";import{V as ne}from"./VForm-DOFaAppg.js";import{V as O,a as b}from"./VRow-2G3M3Ur6.js";import{V as de}from"./VTextarea-Dr2ELyRK.js";import{V as W}from"./VDialog-DUZn9nzR.js";import{a as G,V as B}from"./VTable-kYK3nUGa.js";import{T as L}from"./index-DW34S_hj.js";import{V as re}from"./VCheckbox-CaQeYbo-.js";import"./VAvatar-DQOjqOCo.js";import"./VImg-CamkSaBR.js";import"./VTooltip-3amt0563.js";import"./VCheckboxBtn-ByEiU9uU.js";import"./VSelectionControl-Cvh4ixIA.js";const ce={__name:"activity-add",props:{id:String},emits:["close","reload"],setup(S,{emit:h}){const y=S,v=h,x=k(),d=k({activity:null,description:null,date:null,start_time:null,end_time:null,start_date:null,end_date:null,meeting_link:null}),r=async()=>{var i,D;const{valid:f}=await x.value.validate();if(f)try{const p=await P.post("api/v1/timesheet/"+y.id+"/activity",d.value);p&&T("success",p.message,"bottom-end")}catch(p){if((D=(i=p==null?void 0:p.response)==null?void 0:i.data)!=null&&D.errors){const c=p.response.data.errors;let u="Validation errors:";for(const a in c)c.hasOwnProperty(a)&&(u+=`
${a}: ${c[a].join(", ")}`);T("error",u,"bottom-end")}else T("error",p.response.data.message,"bottom-end")}finally{v("reload"),v("close")}};return(f,i)=>{const D=E("DialogCloseBtn"),p=E("VDateInput");return _(),C(Y,{title:"New Activity"},{default:l(()=>[t(D,{variant:"text",size:"default",onClick:i[0]||(i[0]=c=>v("close"))}),t($,null,{default:l(()=>[t(ne,{onSubmit:ee(r,["prevent"]),ref_key:"formData",ref:x,"validate-on":"input"},{default:l(()=>[t(O,null,{default:l(()=>[t(b,{cols:"12",class:"d-none"},{default:l(()=>[t(z,{modelValue:s(d).activity,"onUpdate:modelValue":i[1]||(i[1]=c=>s(d).activity=c),label:"Activity Name",placeholder:"Activity",variant:"solo"},null,8,["modelValue"])]),_:1}),t(b,{cols:"12"},{default:l(()=>[t(de,{modelValue:s(d).description,"onUpdate:modelValue":i[2]||(i[2]=c=>s(d).description=c),label:"Meeting Discussion",placeholder:"Meeting Discussion",variant:"solo",rules:s(q).required},null,8,["modelValue","rules"])]),_:1}),t(b,{md:"6",cols:"12"},{default:l(()=>[t(p,{modelValue:s(d).date,"onUpdate:modelValue":i[3]||(i[3]=c=>s(d).date=c),label:"Date",placeholder:"Select Date","prepend-icon":"",variant:"solo",rules:s(q).required},null,8,["modelValue","rules"])]),_:1}),t(b,{md:"3",cols:"6"},{default:l(()=>[t(z,{type:"time",modelValue:s(d).start_time,"onUpdate:modelValue":i[4]||(i[4]=c=>s(d).start_time=c),label:"Start Time",placeholder:"Start Time",rules:s(q).required,variant:"solo",class:"mb-3",onChange:i[5]||(i[5]=c=>s(d).start_date=s(R)(s(d).date).format("YYYY-MM-DD")+" "+s(d).start_time+":00")},null,8,["modelValue","rules"])]),_:1}),t(b,{md:"3",cols:"6"},{default:l(()=>[t(z,{type:"time",modelValue:s(d).end_time,"onUpdate:modelValue":i[6]||(i[6]=c=>s(d).end_time=c),label:"End Time",placeholder:"End Time",variant:"solo",onChange:i[7]||(i[7]=c=>s(d).end_date=s(R)(s(d).date).format("YYYY-MM-DD")+" "+s(d).end_time+":00")},null,8,["modelValue"])]),_:1}),t(b,{md:"12",cols:"12"},{default:l(()=>[t(z,{type:"text",modelValue:s(d).meeting_link,"onUpdate:modelValue":i[8]||(i[8]=c=>s(d).meeting_link=c),label:"Meeting Link",placeholder:"Meeting Link",variant:"solo",rules:s(q).url},null,8,["modelValue","rules"])]),_:1})]),_:1}),t(ie,{class:"mt-5"},{default:l(()=>[t(A,{type:"button",color:"error",onClick:i[9]||(i[9]=c=>v("close"))},{default:l(()=>[t(g,{icon:"ri-close-line",class:"me-3"}),V(" Close ")]),_:1}),t(te),t(A,{type:"submit",color:"success"},{default:l(()=>[V(" Save "),t(g,{icon:"ri-save-line",class:"ms-3"})]),_:1})]),_:1})]),_:1},512)]),_:1})]),_:1})}}},ue={class:"d-flex justify-between align-center"},me=e("div",{class:"w-100"},[e("h4",null,"Activity")],-1),_e=e("thead",null,[e("tr",null,[e("th",{class:"text-uppercase",width:"1%"}," No "),e("th",{class:"text-uppercase text-center"},"Meeting Discussion"),e("th",{class:"text-uppercase text-center"},"Date"),e("th",{class:"text-uppercase text-center"},"Start Time"),e("th",{class:"text-uppercase text-center",style:{width:"200px !important"}}," End Time "),e("th",{class:"text-uppercase text-center"},"Time Spent"),e("th",{class:"text-uppercase text-center"},"Status"),e("th",{class:"text-uppercase text-end"},"#")])],-1),pe={width:"1%"},fe={class:"text-start"},he={class:"text-center"},ve={class:"text-start"},ge=["onUpdate:modelValue","onChange","disabled"],ye={class:"text-center"},xe={class:"text-end"},we=["href"],Ve={__name:"timesheet-detail",props:{id:String,require:String},setup(S){const h=S,y=I("updateReload"),v=k([]),x=k(!1),d=k([{add:!1,delete:!1}]),r=k([]),f=async()=>{x.value=!0;try{const a=await P.get("api/v1/timesheet/"+h.id+"/activities");a&&(v.value=a)}catch(a){console.error(a)}finally{x.value=!1}},i=a=>{d.value[a]?d.value[a]=!1:d.value[a]=!0},D=(a,n)=>{r.value=n,i(a)},p=async()=>{var a,n,o;try{const w=await P.delete("api/v1/timesheet/"+h.id+"/activity/"+r.value.id);w&&(T("success",w.message,"bottom-end"),i("delete"))}catch(w){((a=w.response)==null?void 0:a.status)==400&&T("error",(o=(n=w.response)==null?void 0:n.data)==null?void 0:o.errors,"bottom-end")}finally{f(),y(!0)}},c=oe(async a=>{a.end_date=a.date+" "+a.end_time+":00";try{const n=await P.put("api/v1/timesheet/"+h.id+"/activity/"+a.id,a);n&&T("success",n.message,"bottom-end")}catch(n){console.error(n)}finally{f(),y(!0)}},500),u=async a=>{try{const n=await P.put("api/v1/timesheet/"+h.id+"/activity/"+a.id,a);n&&T("success",n.message,"bottom-end")}catch(n){console.error(n)}finally{f(),y(!0)}};return X(()=>{f()}),(a,n)=>(_(),C(Y,null,{default:l(()=>[t(U,null,{default:l(()=>[e("div",ue,[me,h.require=="mentor"?j((_(),C(A,{key:0,onClick:n[0]||(n[0]=o=>i("add"))},{default:l(()=>[t(g,{icon:"ri-add-line"})]),_:1})),[[L,"New Activity","start"]]):H("",!0),t(W,{modelValue:s(d).add,"onUpdate:modelValue":n[2]||(n[2]=o=>s(d).add=o),"max-width":"600",persistent:""},{default:l(()=>[t(ce,{id:h.id,onClose:n[1]||(n[1]=o=>i("add")),onReload:f},null,8,["id"])]),_:1},8,["modelValue"])])]),_:1}),t($,null,{default:l(()=>[s(x)?(_(),C(B,{key:1,type:"table"})):(_(),C(G,{key:0,class:"text-no-wrap",height:"400","fixed-header":""},{default:l(()=>[_e,e("tbody",null,[(_(!0),M(K,null,Z(s(v),(o,w)=>(_(),M("tr",{key:w},[e("td",pe,m(w+1),1),e("td",fe,m(o.description),1),e("td",null,m(a.$moment(o.start_date).format("dddd"))+", "+m(a.$moment(o.start_date).format("MMM Do YYYY")),1),e("td",he,m(o.start_time),1),e("td",ve,[j(e("input",{type:"time",class:"form-control px-2 py-2 border rounded cursor-pointer","onUpdate:modelValue":N=>o.end_time=N,onChange:N=>s(c)(o),disabled:o.start_time=="00:00"||o.cutoff_status=="completed"},null,40,ge),[[se,o.end_time],[L,o.cutoff_status=="completed"?"Already Cut-Off":"End Time","start"]])]),e("td",ye,m(o.estimate)+" Minutes",1),e("td",null,[j(t(re,{color:"success",modelValue:o.status,"onUpdate:modelValue":[N=>o.status=N,N=>u(o)],value:"1","false-value":0,disabled:o.start_time=="00:00"||o.cutoff_status=="completed"},null,8,["modelValue","onUpdate:modelValue","disabled"]),[[L,o.status?"Completed":"Not Yet","start"]])]),e("td",xe,[t(A,{color:"primary",density:"compact",class:"me-1"},{default:l(()=>[e("a",{href:o.meeting_link,target:"_blank",class:"bg-primary"},[t(g,{icon:"ri ri-link"}),V(" Join ")],8,we)]),_:2},1024),j((_(),C(A,{color:"error",density:"compact",disabled:o.start_time=="00:00"||o.cutoff_status=="completed",onClick:N=>D("delete",o)},{default:l(()=>[t(g,{icon:"ri-delete-bin-line",class:"cursor-pointer"})]),_:2},1032,["disabled","onClick"])),[[L,o.status?"Already Cut-Off":"Delete Activity","start"]])])]))),128))])]),_:1}))]),_:1}),t(W,{modelValue:s(d).delete,"onUpdate:modelValue":n[4]||(n[4]=o=>s(d).delete=o),"max-width":"400",persistent:""},{default:l(()=>[t(ae,{title:"activity",onClose:n[3]||(n[3]=o=>i("delete")),onDelete:p})]),_:1},8,["modelValue"])]),_:1}))}},be={class:"w-100"},ke={class:"mt-3 font-weight-light"},De=e("hr",{class:"my-2"},null,-1),$e={key:0},Ce=e("tr",{class:"bg-secondary"},[e("td",null,"Name"),e("td",null,"School"),e("td",null,"Grade")],-1),Te={key:1},Me=e("td",{width:"20%"},"Name",-1),Se=e("td",{width:"1%"},":",-1),Ne=e("td",null,"School Name",-1),Pe=e("td",{width:"1%"},":",-1),Ye=e("td",null,"Grade",-1),Ae=e("td",{width:"1%"},":",-1),Ue=e("td",null,"Email",-1),Be=e("td",{width:"1%"},":",-1),ze={class:"mt-5 font-weight-light"},je=e("hr",{class:"my-2"},null,-1),qe=e("td",{width:"20%"},"Program",-1),Le=e("td",{width:"1%"},":",-1),Fe=e("td",null,"Package",-1),Ee=e("td",{width:"1%"},":",-1),Re=e("td",null,"Person in Charge",-1),Ie=e("td",{width:"1%"},":",-1),Oe={class:"ms-4",type:"1"},Ge=e("td",null,"Tutor/Mentor",-1),He=e("td",{width:"1%"},":",-1),Je=e("td",null,"Update On",-1),We=e("td",{width:"1%"},":",-1),Xe={class:"d-flex align-end w-100"},Ze={class:"m-0 mb-1 text-white"},Ke=e("h4",{class:"m-0 ms-2 text-white"},"Minutes",-1),Qe={class:"text-end w-100"},et={class:"d-flex align-end w-100"},tt={class:"m-0 mb-1 text-white"},st=e("h4",{class:"m-0 ms-2 text-white"},"Minutes",-1),lt={class:"text-end w-100"},at={class:"d-flex align-end w-100"},ot={class:"m-0 mb-1 text-white"},it=e("h4",{class:"m-0 ms-2 text-white"},"Minutes",-1),nt={class:"text-end w-100"},dt={__name:"user-detail",props:{id:String},emits:["void"],setup(S,{emit:h}){const y=S,v=h,x=I("reloadData"),d=I("updateReload"),r=k([]),f=k(!1),i=async D=>{var p,c,u;f.value=!0;try{const a=await P.get("api/v1/timesheet/"+D+"/detail");a&&(r.value=a,v("void",a.packageDetails.void))}catch(a){((p=a.response)==null?void 0:p.status)==400&&(T("error",(u=(c=a.response)==null?void 0:c.data)==null?void 0:u.errors,"bottom-end"),Q.push("/admin/timesheet")),console.log(a)}finally{f.value=!1}};return X(()=>{i(y.id)}),le(()=>{x.value&&(i(y.id),d(!1))}),(D,p)=>{const c=E("router-link");return _(),C(Y,{class:"mb-3"},{default:l(()=>[t(U,{class:"d-flex justify-between align-center"},{default:l(()=>{var u;return[e("div",be,[t(c,{to:"/user/timesheet"},{default:l(()=>[t(g,{icon:"ri-arrow-left-line",color:"secondary",class:"me-2",size:"25"})]),_:1}),V(" Timesheet - "+m((u=s(r).packageDetails)==null?void 0:u.package_type),1)])]}),_:1}),t($,null,{default:l(()=>[s(f)?(_(),C(O,{key:1},{default:l(()=>[t(b,{md:"7"},{default:l(()=>[t(B,{type:"heading, paragraph, heading, paragraph",class:"mb-3"})]),_:1}),t(b,{md:"5"},{default:l(()=>[t(B,{type:"text@3",color:"#16B1FF",class:"mb-3"}),t(B,{type:"text@3",color:"#91c45e",class:"mb-3"}),t(B,{type:"text@3",color:"#e05e5e",class:"mb-3"})]),_:1})]),_:1})):(_(),C(O,{key:0,align:"center"},{default:l(()=>[t(b,{md:"7"},{default:l(()=>[e("h4",ke,[t(g,{icon:"ri-user-line",size:"17",class:"me-2"}),V(" Basic Profile ")]),De,t(G,{density:"compact"},{default:l(()=>{var u,a;return[((u=s(r).clientProfile)==null?void 0:u.length)>1?(_(),M("tbody",$e,[Ce,(_(!0),M(K,null,Z(s(r).clientProfile,n=>(_(),M("tr",null,[e("td",null,m(n.client_name),1),e("td",null,m(n.client_school),1),e("td",null,m(n.client_grade),1)]))),256))])):((a=s(r).clientProfile)==null?void 0:a.length)==1?(_(),M("tbody",Te,[e("tr",null,[Me,Se,e("td",null,m(s(r).clientProfile[0].client_name),1)]),e("tr",null,[Ne,Pe,e("td",null,m(s(r).clientProfile[0].client_school),1)]),e("tr",null,[Ye,Ae,e("td",null,m(s(r).clientProfile[0].client_grade),1)]),e("tr",null,[Ue,Be,e("td",null,m(s(r).clientProfile[0].client_mail),1)])])):H("",!0)]}),_:1}),e("h4",ze,[t(g,{icon:"ri-bookmark-line",class:"me-2",size:"17"}),V(" Package Details ")]),je,t(G,{density:"compact"},{default:l(()=>{var u,a,n,o,w;return[e("tbody",null,[e("tr",null,[qe,Le,e("td",null,m((u=s(r).packageDetails)==null?void 0:u.program_name),1)]),e("tr",null,[Fe,Ee,e("td",null,m(((a=s(r).packageDetails)==null?void 0:a.package_type)+" - "+((n=s(r).packageDetails)==null?void 0:n.package_name)),1)]),e("tr",null,[Re,Ie,e("td",null,[e("ol",Oe,[e("li",null,m((o=s(r).packageDetails)==null?void 0:o.pic_name),1)])])]),e("tr",null,[Ge,He,e("td",null,m((w=s(r).packageDetails)==null?void 0:w.tutormentor_name),1)]),e("tr",null,[Je,We,e("td",null,m(s(R)().format("LLL")),1)])])]}),_:1})]),_:1}),t(b,{md:"5"},{default:l(()=>[t(Y,{color:"#16B1FF",class:"mb-2 d-flex align-center"},{default:l(()=>[e("div",null,[t(F,null,{default:l(()=>[t(U,{class:"text-white"},{default:l(()=>[V(" Total Minutes of Package ")]),_:1})]),_:1}),t($,{class:"d-flex justify-between"},{default:l(()=>{var u;return[e("div",Xe,[e("h1",Ze,m((u=s(r).packageDetails)==null?void 0:u.duration_in_minutes),1),Ke])]}),_:1})]),t($,null,{default:l(()=>[e("div",Qe,[t(g,{icon:"ri-calendar-schedule-line",size:"60"})])]),_:1})]),_:1}),t(Y,{color:"#91c45e",class:"mb-2 d-flex align-center"},{default:l(()=>[e("div",null,[t(F,null,{default:l(()=>[t(U,{class:"text-white"},{default:l(()=>[V(" Total Minutes Spent ")]),_:1})]),_:1}),t($,{class:"d-flex justify-between"},{default:l(()=>{var u;return[e("div",et,[e("h1",tt,m((u=s(r).packageDetails)==null?void 0:u.time_spent_in_minutes),1),st])]}),_:1})]),t($,null,{default:l(()=>[e("div",lt,[t(g,{icon:"ri-timer-flash-line",size:"60",color:"white"})])]),_:1})]),_:1}),t(Y,{color:"#e05e5e",class:"mb-2 d-flex align-center"},{default:l(()=>[e("div",null,[t(F,null,{default:l(()=>[t(U,{class:"text-white"},{default:l(()=>[V(" Total Minutes Left ")]),_:1})]),_:1}),t($,{class:"d-flex justify-between"},{default:l(()=>{var u,a;return[e("div",at,[e("h1",ot,m(((u=s(r).packageDetails)==null?void 0:u.duration_in_minutes)-((a=s(r).packageDetails)==null?void 0:a.time_spent_in_minutes)),1),it])]}),_:1})]),t($,null,{default:l(()=>[e("div",nt,[t(g,{icon:"ri-timer-2-line",size:"60"})])]),_:1})]),_:1})]),_:1})]),_:1}))]),_:1})]),_:1})}}},rt={class:"h-auto position-relative"},ct={key:0,class:"overlay"},ut=e("div",{class:"bg-secondary",style:{height:"100%",position:"absolute",left:"0",top:"0","z-index":"9998",width:"100%",opacity:"0.6"}},null,-1),mt={class:"d-flex align-center justify-center",style:{height:"100%",position:"absolute",left:"0",top:"0","z-index":"9999",width:"100%",opacity:"1"}},_t={class:"text-center"},pt=e("h2",{class:"text-white mt-3"},"This Timesheet Has Changed Owner",-1),Pt={__name:"timesheet-detail",props:{id:Number,require:String},setup(S){const h=S,y=h.id,v=k(!1),x=k(!1);J("reloadData",v),J("updateReload",r=>{v.value=r});const d=r=>{x.value=r};return(r,f)=>(_(),M("div",rt,[s(x)=="true"?(_(),M("div",ct,[ut,e("div",mt,[e("div",_t,[t(g,{color:"white",icon:"ri-lock-line",size:"50"}),pt,t(A,{color:"light",class:"mt-4",onClick:f[0]||(f[0]=i=>s(Q).push({path:"/user/timesheet"}))},{default:l(()=>[V(" Back to List ")]),_:1})])])])):H("",!0),t(dt,{id:s(y),onVoid:d},null,8,["id"]),t(Ve,{id:s(y),require:h.require},null,8,["id","require"])]))}};export{Pt as default};
