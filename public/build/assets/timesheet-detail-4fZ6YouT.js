import{_ as ye}from"./DeleteHandler.vue_vue_type_script_setup_true_lang-CaSOcq-Q.js";import{r as k,l as F,o as D,f as Y,w as s,b as e,Z as oe,W as E,u as t,v as q,Y as j,V as b,j as $,m as ne,A as P,s as T,$ as Q,t as v,e as de,a,x as H,c as z,X as he,F as re,a0 as Ve,i as be,P as ke,h as we,k as ve,a1 as De,a2 as xe,a3 as ge}from"./main-Bi9r-4Ql.js";import{r as L}from"./rules-B5G8qOzK.js";import{a as N,c as ue,V as I,b as J,d as le}from"./VCard-DEqD-1Cu.js";import{V as ce}from"./VForm-BVYfyk37.js";import{V as K,a as w}from"./VRow-D46IQa3-.js";import{V as me}from"./VTextarea-CPrOJb1W.js";import{V as Z}from"./VDialog-jJY7kWUD.js";import{a as ie,V as W}from"./VTable-CZzJBOVi.js";import{T as X}from"./index-CFB4-0RO.js";import{V as $e}from"./VCheckbox-pKwAeyP1.js";import{V as ae}from"./VAutocomplete-BAFnyaou.js";import{V as Ce}from"./VDivider-CkODZiAX.js";import{V as Me,a as se,b as Te}from"./VList-CMVJqZTy.js";import"./VAvatar-DN9a1EgN.js";import"./VImg-CSJfACX5.js";import"./VTooltip-Di1Q3TqI.js";import"./VCheckboxBtn-DO6yynBr.js";import"./VSelectionControl-DIk74u_C.js";import"./VSlideGroup-CDQmH8M0.js";import"./ssrBoot-v5eU2Xi2.js";const Se={__name:"activity-add",props:{id:String},emits:["close","reload"],setup(A,{emit:y}){const h=A,o=y,u=k(),d=k({activity:null,description:null,date:null,start_time:null,end_time:null,start_date:null,end_date:null,meeting_link:null}),m=()=>{d.value={activity:null,description:null,date:null,start_time:null,end_time:null,start_date:null,end_date:null,meeting_link:null}},M=async()=>{const{valid:x}=await u.value.validate();if(x)try{const n=await P.post("api/v1/timesheet/"+h.id+"/activity",d.value);n&&T("success",n.message,"bottom-end")}catch(n){T("error",n.response.data.errors,"bottom-end")}finally{m(),o("reload"),o("close")}};return(x,n)=>{const g=F("DialogCloseBtn"),_=F("VDateInput");return D(),Y(I,{title:"New Activity"},{default:s(()=>[e(g,{variant:"text",size:"default",onClick:n[0]||(n[0]=l=>o("close"))}),e(N,null,{default:s(()=>[e(ce,{onSubmit:oe(M,["prevent"]),ref_key:"formData",ref:u,"validate-on":"input"},{default:s(()=>[e(K,null,{default:s(()=>[e(w,{cols:"12",class:"d-none"},{default:s(()=>[e(E,{modelValue:t(d).activity,"onUpdate:modelValue":n[1]||(n[1]=l=>t(d).activity=l),label:"Activity Name",placeholder:"Activity",variant:"solo"},null,8,["modelValue"])]),_:1}),e(w,{cols:"12"},{default:s(()=>[e(me,{modelValue:t(d).description,"onUpdate:modelValue":n[2]||(n[2]=l=>t(d).description=l),label:"Meeting Discussion",placeholder:"Meeting Discussion",variant:"solo",rules:t(L).required},null,8,["modelValue","rules"])]),_:1}),e(w,{md:"6",cols:"12"},{default:s(()=>[e(_,{modelValue:t(d).date,"onUpdate:modelValue":n[3]||(n[3]=l=>t(d).date=l),label:"Date",placeholder:"Select Date","prepend-icon":"",variant:"solo",rules:t(L).required},null,8,["modelValue","rules"])]),_:1}),e(w,{md:"3",cols:"6"},{default:s(()=>[e(E,{type:"time",modelValue:t(d).start_time,"onUpdate:modelValue":n[4]||(n[4]=l=>t(d).start_time=l),label:"Start Time",placeholder:"Start Time",rules:t(L).required,variant:"solo",class:"mb-3",onChange:n[5]||(n[5]=l=>t(d).start_date=t(q)(t(d).date).format("YYYY-MM-DD")+" "+t(d).start_time+":00")},null,8,["modelValue","rules"])]),_:1}),e(w,{md:"3",cols:"6"},{default:s(()=>[e(E,{type:"time",modelValue:t(d).end_time,"onUpdate:modelValue":n[6]||(n[6]=l=>t(d).end_time=l),label:"End Time",placeholder:"End Time",variant:"solo",onChange:n[7]||(n[7]=l=>t(d).end_date=t(q)(t(d).date).format("YYYY-MM-DD")+" "+t(d).end_time+":00")},null,8,["modelValue"])]),_:1}),e(w,{md:"12",cols:"12"},{default:s(()=>[e(E,{type:"text",modelValue:t(d).meeting_link,"onUpdate:modelValue":n[8]||(n[8]=l=>t(d).meeting_link=l),label:"Meeting Link",placeholder:"Meeting Link",variant:"solo",rules:t(L).url},null,8,["modelValue","rules"])]),_:1})]),_:1}),e(ue,{class:"mt-5"},{default:s(()=>[e(j,{type:"button",color:"error",onClick:n[9]||(n[9]=l=>o("close"))},{default:s(()=>[e(b,{icon:"ri-close-line",class:"me-3"}),$(" Close ")]),_:1}),e(ne),e(j,{type:"submit",color:"success"},{default:s(()=>[$(" Save "),e(b,{icon:"ri-save-line",class:"ms-3"})]),_:1})]),_:1})]),_:1},512)]),_:1})]),_:1})}}},Ye={__name:"activity-edit",props:{timesheet_id:Number,activity:String},emits:["close","reload"],setup(A,{emit:y}){const h=k(),o=A,u=y,d=Q("updateReload"),m=k({activity:o==null?void 0:o.activity.activity,description:o==null?void 0:o.activity.description,date:new Date(o==null?void 0:o.activity.start_date),start_time:o==null?void 0:o.activity.start_time,end_time:o==null?void 0:o.activity.end_time,start_date:q(o==null?void 0:o.activity.start_date).format("YYYY-MM-DD")+" "+(o==null?void 0:o.activity.start_time)+":00",end_date:(o==null?void 0:o.activity.end_time)!=0?q(o==null?void 0:o.activity.start_date).format("YYYY-MM-DD")+" "+(o==null?void 0:o.activity.end_time)+":00":null,meeting_link:o==null?void 0:o.activity.meeting_link}),M=async()=>{var n,g;const{valid:x}=await h.value.validate();if(x)try{const _=await P.put("api/v1/timesheet/"+o.timesheet_id+"/activity/"+o.activity.id,m.value);_&&(T("success",_.message,"bottom-end"),u("reload"))}catch(_){if((g=(n=_==null?void 0:_.response)==null?void 0:n.data)!=null&&g.errors){const l=_.response.data.errors;let c="Validation errors:";if(typeof l!="string"){for(const i in l)l.hasOwnProperty(i)&&(c+=`
${i}: ${l[i].join(", ")}`);T("error",c,"bottom-end")}else T("error",_.response.data.errors,"bottom-end")}}finally{u("close"),setTimeout(()=>{d(!0)},3e3)}};return(x,n)=>{const g=F("DialogCloseBtn"),_=F("VDateInput");return D(),Y(I,{title:"Edit Activity"},{default:s(()=>[e(g,{variant:"text",size:"default",onClick:n[0]||(n[0]=l=>u("close"))}),e(N,null,{default:s(()=>[e(ce,{onSubmit:oe(M,["prevent"]),ref_key:"formData",ref:h,"validate-on":"input"},{default:s(()=>[e(K,null,{default:s(()=>[e(w,{cols:"12",class:"d-none"},{default:s(()=>[e(E,{modelValue:t(m).activity,"onUpdate:modelValue":n[1]||(n[1]=l=>t(m).activity=l),label:"Activity Name",placeholder:"Activity",variant:"solo"},null,8,["modelValue"])]),_:1}),e(w,{cols:"12"},{default:s(()=>[e(me,{modelValue:t(m).description,"onUpdate:modelValue":n[2]||(n[2]=l=>t(m).description=l),label:"Meeting Discussion",rules:t(L).required,placeholder:"Meeting Discussion",variant:"solo"},null,8,["modelValue","rules"])]),_:1}),e(w,{md:"6",cols:"12"},{default:s(()=>[$(v(x.activityDate)+" ",1),e(_,{modelValue:t(m).date,"onUpdate:modelValue":n[3]||(n[3]=l=>t(m).date=l),label:"Date",placeholder:"Select Date","prepend-icon":"",variant:"solo",rules:t(L).required},null,8,["modelValue","rules"])]),_:1}),e(w,{md:"3",cols:"6"},{default:s(()=>[e(E,{type:"time",modelValue:t(m).start_time,"onUpdate:modelValue":n[4]||(n[4]=l=>t(m).start_time=l),label:"Start Time",rules:t(L).required,placeholder:"Start Time",variant:"solo",onChange:n[5]||(n[5]=l=>t(m).start_date=t(q)(o==null?void 0:o.activity.date).format("YYYY-MM-DD")+" "+t(m).start_time+":00")},null,8,["modelValue","rules"])]),_:1}),e(w,{md:"3",cols:"6"},{default:s(()=>[e(E,{type:"time",modelValue:t(m).end_time,"onUpdate:modelValue":n[6]||(n[6]=l=>t(m).end_time=l),label:"End Time",placeholder:"End Time",variant:"solo",onChange:n[7]||(n[7]=l=>t(m).end_date=t(q)(o==null?void 0:o.activity.date).format("YYYY-MM-DD")+" "+t(m).end_time+":00")},null,8,["modelValue"])]),_:1}),e(w,{md:"12",cols:"12"},{default:s(()=>[e(E,{type:"text",modelValue:t(m).meeting_link,"onUpdate:modelValue":n[8]||(n[8]=l=>t(m).meeting_link=l),label:"Meeting Link",placeholder:"Meeting Link",variant:"solo",rules:t(L).url},null,8,["modelValue","rules"])]),_:1})]),_:1}),e(ue,{class:"mt-5"},{default:s(()=>[e(j,{color:"error",onClick:n[9]||(n[9]=l=>u("close"))},{default:s(()=>[e(b,{icon:"ri-close-line",class:"me-3"}),$(" Close ")]),_:1}),e(ne),e(j,{color:"success",type:"submit"},{default:s(()=>[$(" Save "),e(b,{icon:"ri-save-line",class:"ms-3"})]),_:1})]),_:1})]),_:1},512)]),_:1})]),_:1})}}},Ue={class:"d-flex justify-between align-center"},Pe=a("div",{class:"w-100"},[a("h4",null,"Activity")],-1),Le=a("thead",null,[a("tr",null,[a("th",{class:"text-uppercase",width:"1%"}," No "),a("th",{class:"text-uppercase text-center"},"Meeting Discussion"),a("th",{class:"text-uppercase text-center"},"Date"),a("th",{class:"text-uppercase text-center"},"Start Time"),a("th",{class:"text-uppercase text-center"},"End Time"),a("th",{class:"text-uppercase text-center"},"Time Spent"),a("th",{class:"text-uppercase text-center"},"Status"),a("th",{class:"text-uppercase text-end"},"#")])],-1),Ae={width:"1%"},Ne={class:"d-none"},je={class:"text-start"},Be={class:"text-center"},Ee={class:"text-center"},Re={class:"text-center"},Ie={class:"text-end"},qe=["href"],ze={__name:"timesheet-detail",props:{id:String},setup(A){const y=A,h=Q("updateReload"),o=k([]),u=k(!1),d=k([{add:!1,edit:!1,delete:!1}]),m=k([]),M=async()=>{u.value=!0;try{const l=await P.get("api/v1/timesheet/"+y.id+"/activities");l&&(o.value=l)}catch(l){console.error(l)}finally{u.value=!1}},x=l=>{d.value[l]?d.value[l]=!1:d.value[l]=!0},n=(l,c)=>{m.value=c,x(l)},g=async()=>{var l,c,i;try{const r=await P.delete("api/v1/timesheet/"+y.id+"/activity/"+m.value.id);r&&(T("success",r.message,"bottom-end"),x("delete"))}catch(r){((l=r.response)==null?void 0:l.status)==400&&T("error",(i=(c=r.response)==null?void 0:c.data)==null?void 0:i.errors,"bottom-end")}finally{M(),h(!0)}},_=async l=>{var c,i;try{const r=await P.patch("api/v1/timesheet/"+y.id+"/activity/"+l.id,l);r&&T("success",r.message,"bottom-end")}catch(r){if((i=(c=r==null?void 0:r.response)==null?void 0:c.data)!=null&&i.errors){const f=r.response.data.errors;let B="Validation errors:";if(typeof f!="string"){for(const U in f)f.hasOwnProperty(U)&&(B+=`
${U}: ${f[U].join(", ")}`);T("error",B,"bottom-end")}else T("error",r.response.data.errors,"bottom-end")}}finally{M(),h(!0)}};return de(()=>{M()}),(l,c)=>(D(),Y(I,null,{default:s(()=>[e(J,null,{default:s(()=>[a("div",Ue,[Pe,H((D(),Y(j,{onClick:c[0]||(c[0]=i=>x("add"))},{default:s(()=>[e(b,{icon:"ri-add-line"})]),_:1})),[[X,"New Activity","start"]]),e(Z,{modelValue:t(d).add,"onUpdate:modelValue":c[2]||(c[2]=i=>t(d).add=i),"max-width":"600",persistent:""},{default:s(()=>[e(Se,{id:y.id,onClose:c[1]||(c[1]=i=>x("add")),onReload:M},null,8,["id"])]),_:1},8,["modelValue"])])]),_:1}),e(N,null,{default:s(()=>[t(u)?(D(),Y(W,{key:1,type:"table"})):(D(),Y(ie,{key:0,class:"text-no-wrap",height:"400","fixed-header":""},{default:s(()=>[Le,a("tbody",null,[(D(!0),z(re,null,he(t(o),(i,r)=>(D(),z("tr",{key:r},[a("td",Ae,v(r+1),1),a("td",Ne,v(i.activity),1),a("td",je,v(i.description),1),a("td",null,v(l.$moment(i.start_date).format("dddd"))+", "+v(l.$moment(i.start_date).format("MMM Do YYYY")),1),a("td",Be,v(i.start_time),1),a("td",Ee,v(i.end_time),1),a("td",Re,[e(b,{icon:"ri-timer-2-line",class:"cursor-pointer me-3"}),$(" "+v(i.estimate)+" Minutes ",1)]),a("td",null,[H(e($e,{color:"success",modelValue:i.status,"onUpdate:modelValue":[f=>i.status=f,f=>_(i)],value:"1","false-value":0},null,8,["modelValue","onUpdate:modelValue"]),[[X,i.status?"Completed":"Not Yet","start"]])]),a("td",Ie,[e(j,{color:"primary",density:"compact",class:"me-1"},{default:s(()=>[a("a",{href:i.meeting_link,target:"_blank",class:"bg-primary"},[e(b,{icon:"ri ri-link"}),$(" Join ")],8,qe)]),_:2},1024),H((D(),Y(j,{color:"warning",density:"compact",class:"me-1",onClick:f=>n("edit",i)},{default:s(()=>[e(b,{icon:"ri-edit-line",class:"cursor-pointer"})]),_:2},1032,["onClick"])),[[X,"Edit Activity","start"]]),H((D(),Y(j,{color:"error",density:"compact",onClick:f=>n("delete",i)},{default:s(()=>[e(b,{icon:"ri-delete-bin-line",class:"cursor-pointer"})]),_:2},1032,["onClick"])),[[X,"Delete Activity","start"]])])]))),128))])]),_:1}))]),_:1}),e(Z,{modelValue:t(d).edit,"onUpdate:modelValue":c[4]||(c[4]=i=>t(d).edit=i),"max-width":"600",persistent:""},{default:s(()=>[e(Ye,{timesheet_id:y==null?void 0:y.id,activity:t(m),onClose:c[3]||(c[3]=i=>x("edit")),onReload:M},null,8,["timesheet_id","activity"])]),_:1},8,["modelValue"]),e(Z,{modelValue:t(d).delete,"onUpdate:modelValue":c[6]||(c[6]=i=>t(d).delete=i),"max-width":"400",persistent:""},{default:s(()=>[e(ye,{title:"activity",onClose:c[5]||(c[5]=i=>x("delete")),onDelete:g})]),_:1},8,["modelValue"])]),_:1}))}},Fe={__name:"user-edit",props:["id","item","package_id"],emits:["close","reload"],setup(A,{emit:y}){var U,R,O,G,_e,pe;const h=A,o=y,u=k([]),d=k([]),m=k([]),M=k([]),x=k(!1),n=k(!0),g=k(!0),_=k(),l=k({mentortutor_email:(U=h.item)==null?void 0:U.tutormentor_email,subject_id:(R=h.item)==null?void 0:R.subject_id,inhouse_id:(O=h.item)==null?void 0:O.inhouse_id,package_id:h.package_id,duration:(G=h.item)==null?void 0:G.duration,notes:(_e=h.item)==null?void 0:_e.notes,pic_id:(pe=h.item)==null?void 0:pe.pic_id}),c=async(C=!1)=>{g.value=!0;const V=C?"api/v1/user/mentor-tutors?inhouse=true":"api/v1/user/mentor-tutors";try{const S=await P.get(V);S&&(C?M.value=Object.values(S):u.value=S)}catch(S){console.error(S)}finally{g.value=!1}},i=async()=>{g.value=!0;try{const C=await P.get("api/v1/package/component/list");C&&(d.value=C)}catch(C){console.error(C)}finally{g.value=!1}},r=()=>{const C=l.value.package_id,V=d.value.findIndex(p=>p.id===C);let S=d.value[V];S.detail?(x.value=!0,l.value.duration=S.detail):(x.value=!1,l.value.duration=null)},f=async()=>{g.value=!0;try{const C=await P.get("api/v1/user/component/list");C&&(m.value=C)}catch(C){console.error(C)}finally{g.value=!1}},B=async()=>{var V,S;const{valid:C}=await _.value.validate();if(C)try{const p=await P.put("api/v1/timesheet/"+h.id+"/update",l.value);p&&(l.value={mentortutor_email:null,subject_id:null,inhouse_id:null,package_id:null,duration:"",notes:"",pic_id:[]},T("success",p.message,"bottom-end"),o("reload"))}catch(p){if((S=(V=p==null?void 0:p.response)==null?void 0:V.data)!=null&&S.errors){const ee=p.response.data.errors;let fe="Validation errors:";for(const te in ee)ee.hasOwnProperty(te)&&(fe+=`
${te}: ${ee[te].join(", ")}`);T("error",fe,"bottom-end")}}finally{o("close")}};return de(()=>{c(!0),i(),f(),setTimeout(()=>{n.value=!1},2e3)}),(C,V)=>{const S=F("DialogCloseBtn");return D(),Y(I,{title:"Edit Detail"},{default:s(()=>[e(S,{variant:"text",size:"default",onClick:V[0]||(V[0]=p=>o("close"))}),e(N,null,{default:s(()=>[e(ce,{onSubmit:oe(B,["prevent"]),ref_key:"formData",ref:_,"validate-on":"input"},{default:s(()=>[e(K,null,{default:s(()=>[e(w,{md:"8"},{default:s(()=>[e(ae,{variant:"solo",clearable:"",label:"Package",modelValue:t(l).package_id,"onUpdate:modelValue":[V[1]||(V[1]=p=>t(l).package_id=p),r],items:t(d),"item-props":p=>({title:p.package!=null?p.type_of+" - "+p.package:p.type_of}),"item-value":"id",rules:t(L).required,loading:t(g),disabled:t(g)},null,8,["modelValue","items","item-props","rules","loading","disabled"])]),_:1}),e(w,{md:"4"},{default:s(()=>[e(E,{type:"number",variant:"solo",clearable:"",label:+t(l).duration/60?"Minutes ("+t(l).duration/60+" Hours)":"Minutes",readonly:t(x),modelValue:t(l).duration,"onUpdate:modelValue":V[2]||(V[2]=p=>t(l).duration=p),rules:t(L).required},null,8,["label","readonly","modelValue","rules"])]),_:1}),e(w,{md:"12"},{default:s(()=>[e(ae,{variant:"solo",clearable:"",modelValue:t(l).inhouse_id,"onUpdate:modelValue":V[3]||(V[3]=p=>t(l).inhouse_id=p),label:"Inhouse Mentor/Tutor",items:t(M),"item-props":p=>({title:p.full_name}),"item-value":"uuid",rules:t(L).required,loading:t(g),disabled:t(g)},null,8,["modelValue","items","item-props","rules","loading","disabled"])]),_:1}),e(w,{md:"12"},{default:s(()=>[e(ae,{variant:"solo",multiple:"",clearable:"",chips:"",label:"PIC",modelValue:t(l).pic_id,"onUpdate:modelValue":V[4]||(V[4]=p=>t(l).pic_id=p),items:t(m),"item-title":"full_name","item-value":"id",rules:t(L).required,loading:t(g),disabled:t(g)},null,8,["modelValue","items","rules","loading","disabled"])]),_:1}),e(w,{md:"12"},{default:s(()=>[e(me,{label:"Notes",modelValue:t(l).notes,"onUpdate:modelValue":V[5]||(V[5]=p=>t(l).notes=p),variant:"solo"},null,8,["modelValue"])]),_:1})]),_:1}),e(Ce,{class:"my-3"}),e(ue,null,{default:s(()=>[e(j,{color:"error",type:"button",onClick:V[6]||(V[6]=p=>o("close"))},{default:s(()=>[e(b,{icon:"ri-close-line",class:"me-3"}),$(" Close ")]),_:1}),e(ne),e(j,{color:"success",type:"submit"},{default:s(()=>[$(" Save "),e(b,{icon:"ri-save-line",class:"ms-3"})]),_:1})]),_:1})]),_:1},512)]),_:1})]),_:1})}}},Oe={class:"w-100"},Ge={class:"mt-3 font-weight-light"},He=a("hr",{class:"my-2"},null,-1),Je={key:0},We=a("tr",{class:"bg-secondary"},[a("td",null,"Name"),a("td",null,"School"),a("td",null,"Grade")],-1),Xe={key:1},Ze=a("td",{width:"20%"},"Name",-1),Ke=a("td",{width:"1%"},":",-1),Qe=a("td",null,"School Name",-1),et=a("td",{width:"1%"},":",-1),tt=a("td",null,"Grade",-1),lt=a("td",{width:"1%"},":",-1),at=a("td",null,"Email",-1),st=a("td",{width:"1%"},":",-1),it={class:"mt-5 font-weight-light"},ot=a("hr",{class:"my-2"},null,-1),nt=a("td",{width:"30%"},"Program",-1),dt=a("td",{width:"1%"},":",-1),rt=a("td",null,"Package",-1),ut=a("td",{width:"1%"},":",-1),ct=a("td",null,"Person in Charge",-1),mt=a("td",{width:"1%"},":",-1),_t={class:"ms-4",type:"1"},pt=a("td",null,"Tutor/Mentor",-1),ft=a("td",{width:"1%"},":",-1),vt=a("td",null,"Inhouse Tutor/Mentor",-1),gt=a("td",{width:"1%"},":",-1),yt=a("td",null,"Update On",-1),ht=a("td",{width:"1%"},":",-1),Vt={class:"d-flex align-end w-100"},bt={class:"m-0 mb-1 text-white"},kt=a("h4",{class:"m-0 ms-2 text-white"},"Minutes",-1),wt={class:"text-end w-100"},Dt={class:"d-flex align-end w-100"},xt={class:"m-0 mb-1 text-white"},$t=a("h4",{class:"m-0 ms-2 text-white"},"Minutes",-1),Ct={class:"text-end w-100"},Mt={class:"d-flex align-end w-100"},Tt={class:"m-0 mb-1 text-white"},St=a("h4",{class:"m-0 ms-2 text-white"},"Minutes",-1),Yt={class:"text-end w-100"},Ut={__name:"user-detail",props:{id:String},setup(A){const y=A,h=Q("reloadData"),o=Q("updateReload"),u=k([]),d=k([{edit:!1,delete:!1}]),m=k(!1),M=async _=>{var l,c,i;m.value=!0;try{const r=await P.get("api/v1/timesheet/"+_+"/detail");r&&(u.value=r)}catch(r){((l=r.response)==null?void 0:l.status)==400&&(T("error",(i=(c=r.response)==null?void 0:c.data)==null?void 0:i.errors,"bottom-end"),ve.push("/admin/timesheet")),console.log(r)}finally{m.value=!1}},x=async()=>{var _,l,c;try{const i=await P.delete("api/v1/timesheet/"+y.id+"/delete");i&&(u.value=i,T("success",i.message,"bottom-end"),d.value.delete=!1,ve.push("/admin/timesheet"))}catch(i){((_=i.response)==null?void 0:_.status)==400&&T("error",(c=(l=i.response)==null?void 0:l.data)==null?void 0:c.errors,"bottom-end")}},n=_=>{d.value[_]?d.value[_]=!1:d.value[_]=!0},g=async(_,l)=>{var c;De();try{const i=await P.get("api/v1/timesheet/"+_+"/export",{responseType:"blob"});if(i){const r=window.URL.createObjectURL(new Blob([i],{type:'"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"'})),f=document.createElement("a");f.href=r,f.setAttribute("download",`timesheet_${l}.xlsx`),document.body.appendChild(f),f.click(),document.body.removeChild(f),window.URL.revokeObjectURL(r),xe.close()}}catch(i){T("error",(c=i.response)==null?void 0:c.statusText,"bottom-end"),console.log(i)}};return de(()=>{M(y.id)}),Ve(()=>{h.value&&(M(y.id),o(!1))}),(_,l)=>{const c=F("router-link");return D(),Y(I,{class:"mb-3"},{default:s(()=>[e(J,{class:"d-flex justify-between align-center"},{default:s(()=>{var i;return[a("div",Oe,[e(c,{to:"/admin/timesheet"},{default:s(()=>[e(b,{icon:"ri-arrow-left-line",color:"secondary",class:"me-2",size:"25"})]),_:1}),$(" Timesheet - "+v((i=t(u).packageDetails)==null?void 0:i.package_type),1)]),a("div",null,[e(be,{"close-on-content-click":!1,location:"bottom"},{activator:s(({props:r})=>[H((D(),Y(j,ke({color:"secondary"},r),{default:s(()=>[e(b,{icon:"ri-settings-3-line"})]),_:2},1040)),[[X,"Settings","start"]])]),default:s(()=>[e(Me,null,{default:s(()=>[e(se,null,{default:s(()=>[a("div",{class:"cursor-pointer",onClick:l[0]||(l[0]=r=>n("edit"))},[e(b,{icon:"ri-pencil-line",class:"me-2"}),$(" Edit TimeSheet ")])]),_:1}),e(se,null,{default:s(()=>[e(Te,null,{default:s(()=>[a("div",{class:"cursor-pointer",onClick:l[1]||(l[1]=r=>{var f,B,U,R,O,G;return g(y.id,((B=(f=t(u))==null?void 0:f.packageDetails)==null?void 0:B.package_type)+"-"+((R=(U=t(u))==null?void 0:U.packageDetails)==null?void 0:R.package_name)+"_"+((G=(O=t(u))==null?void 0:O.packageDetails)==null?void 0:G.tutormentor_name))})},[e(b,{icon:"ri-download-line",class:"me-2"}),$(" Download TimeSheet ")])]),_:1})]),_:1}),e(se,null,{default:s(()=>[a("div",{class:"cursor-pointer",onClick:l[2]||(l[2]=r=>n("delete"))},[e(b,{icon:"ri-delete-bin-line",class:"me-2"}),$(" Delete TimeSheet ")])]),_:1})]),_:1})]),_:1})])]}),_:1}),e(N,null,{default:s(()=>[t(m)?(D(),Y(K,{key:1},{default:s(()=>[e(w,{md:"7"},{default:s(()=>[e(W,{type:"heading, paragraph, heading, paragraph",class:"mb-3"})]),_:1}),e(w,{md:"5"},{default:s(()=>[e(W,{type:"text@3",color:"#16B1FF",class:"mb-3"}),e(W,{type:"text@3",color:"#91c45e",class:"mb-3"}),e(W,{type:"text@3",color:"#e05e5e",class:"mb-3"})]),_:1})]),_:1})):(D(),Y(K,{key:0,align:"center"},{default:s(()=>[e(w,{md:"7"},{default:s(()=>[a("h4",Ge,[e(b,{icon:"ri-user-line",size:"17",class:"me-2"}),$(" Basic Profile ")]),He,e(ie,{density:"compact"},{default:s(()=>{var i,r;return[((i=t(u).clientProfile)==null?void 0:i.length)>1?(D(),z("tbody",Je,[We,(D(!0),z(re,null,he(t(u).clientProfile,f=>(D(),z("tr",null,[a("td",null,v(f.client_name),1),a("td",null,v(f.client_school),1),a("td",null,v(f.client_grade),1)]))),256))])):((r=t(u).clientProfile)==null?void 0:r.length)==1?(D(),z("tbody",Xe,[a("tr",null,[Ze,Ke,a("td",null,v(t(u).clientProfile[0].client_name),1)]),a("tr",null,[Qe,et,a("td",null,v(t(u).clientProfile[0].client_school),1)]),a("tr",null,[tt,lt,a("td",null,v(t(u).clientProfile[0].client_grade),1)]),a("tr",null,[at,st,a("td",null,v(t(u).clientProfile[0].client_mail),1)])])):we("",!0)]}),_:1}),a("h4",it,[e(b,{icon:"ri-bookmark-line",class:"me-2",size:"17"}),$(" Package Details ")]),ot,e(ie,{density:"compact"},{default:s(()=>{var i,r,f,B,U,R;return[a("tbody",null,[a("tr",null,[nt,dt,a("td",null,v((i=t(u).packageDetails)==null?void 0:i.program_name),1)]),a("tr",null,[rt,ut,a("td",null,v(((r=t(u).packageDetails)==null?void 0:r.package_type)+" - "+((f=t(u).packageDetails)==null?void 0:f.package_name)),1)]),a("tr",null,[ct,mt,a("td",null,[a("ol",_t,[a("li",null,v((B=t(u).packageDetails)==null?void 0:B.pic_name),1)])])]),a("tr",null,[pt,ft,a("td",null,v((U=t(u).packageDetails)==null?void 0:U.tutormentor_name),1)]),a("tr",null,[vt,gt,a("td",null,v((R=t(u).packageDetails)==null?void 0:R.inhouse_name),1)]),a("tr",null,[yt,ht,a("td",null,v(t(q)().format("LLL")),1)])])]}),_:1})]),_:1}),e(w,{md:"5"},{default:s(()=>[e(I,{color:"#16B1FF",class:"mb-2 d-flex align-center"},{default:s(()=>[a("div",null,[e(le,null,{default:s(()=>[e(J,{class:"text-white"},{default:s(()=>[$(" Total Minutes of Package ")]),_:1})]),_:1}),e(N,{class:"d-flex justify-between"},{default:s(()=>{var i;return[a("div",Vt,[a("h1",bt,v((i=t(u).packageDetails)==null?void 0:i.duration_in_minutes),1),kt])]}),_:1})]),e(N,null,{default:s(()=>[a("div",wt,[e(b,{icon:"ri-calendar-schedule-line",size:"60"})])]),_:1})]),_:1}),e(I,{color:"#91c45e",class:"mb-2 d-flex align-center"},{default:s(()=>[a("div",null,[e(le,null,{default:s(()=>[e(J,{class:"text-white"},{default:s(()=>[$(" Total Minutes Spent ")]),_:1})]),_:1}),e(N,{class:"d-flex justify-between"},{default:s(()=>{var i;return[a("div",Dt,[a("h1",xt,v((i=t(u).packageDetails)==null?void 0:i.time_spent_in_minutes),1),$t])]}),_:1})]),e(N,null,{default:s(()=>[a("div",Ct,[e(b,{icon:"ri-timer-flash-line",size:"60",color:"white"})])]),_:1})]),_:1}),e(I,{color:"#e05e5e",class:"mb-2 d-flex align-center"},{default:s(()=>[a("div",null,[e(le,null,{default:s(()=>[e(J,{class:"text-white"},{default:s(()=>[$(" Total Minutes Left ")]),_:1})]),_:1}),e(N,{class:"d-flex justify-between"},{default:s(()=>{var i,r;return[a("div",Mt,[a("h1",Tt,v(((i=t(u).packageDetails)==null?void 0:i.duration_in_minutes)-((r=t(u).packageDetails)==null?void 0:r.time_spent_in_minutes)),1),St])]}),_:1})]),e(N,null,{default:s(()=>[a("div",Yt,[e(b,{icon:"ri-timer-2-line",size:"60"})])]),_:1})]),_:1})]),_:1})]),_:1}))]),_:1}),e(Z,{modelValue:t(d).edit,"onUpdate:modelValue":l[5]||(l[5]=i=>t(d).edit=i),"max-width":"600",persistent:""},{default:s(()=>{var i;return[e(Fe,{item:t(u).editableColumns,package_id:(i=t(u).packageDetails)==null?void 0:i.package_id,id:y.id,onClose:l[3]||(l[3]=r=>n("edit")),onReload:l[4]||(l[4]=r=>M(y.id))},null,8,["item","package_id","id"])]}),_:1},8,["modelValue"]),e(Z,{modelValue:t(d).delete,"onUpdate:modelValue":l[7]||(l[7]=i=>t(d).delete=i),"max-width":"400",persistent:""},{default:s(()=>[e(ye,{title:"timesheet",onDelete:x,onClose:l[6]||(l[6]=i=>n("delete"))})]),_:1},8,["modelValue"])]),_:1})}}},el={__name:"timesheet-detail",props:{id:Number},setup(A){const h=A.id,o=k(!1);return ge("reloadData",o),ge("updateReload",u=>{o.value=u}),(u,d)=>(D(),z(re,null,[e(Ut,{id:t(h)},null,8,["id"]),e(ze,{id:t(h)},null,8,["id"])],64))}};export{el as default};
