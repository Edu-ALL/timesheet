import{r as n,e as Y,o as v,f as k,w as o,b as t,Z as ee,u as e,z as A,h as W,W as X,Y as z,V as C,j as T,m as te,A as U,s as R,l as le,x as ae,t as $,a as u,c as L,X as oe,F as se,n as re}from"./main-q_2XmQyG.js";import{r as D}from"./rules-B5G8qOzK.js";import{a as Z,c as ne,V as J,b as ie}from"./VCard-BREfH8kc.js";import{V as ue}from"./VForm-Bl0-w1NW.js";import{V as K,a as h}from"./VRow-Z-P_Tzmm.js";import{V as M}from"./VAutocomplete-DrNoZDnX.js";import{V as de}from"./VTextarea-XkCnv21Z.js";import{d as ce}from"./debounce-CWLKiiGL.js";import{V as me}from"./VDialog-CVC_quYx.js";import{V as pe,a as fe}from"./VTable-DvqxA2uq.js";import{V as ve}from"./VPagination-DKHdr9Fu.js";import{T as ge}from"./index-D7ftcdZm.js";import{V as _e}from"./VCheckbox-Bhtpqgtk.js";import{V as O}from"./VTooltip-AHy_Y_qZ.js";import"./VAvatar-R3q5ZIkA.js";import"./VImg-Du0ue-Xq.js";import"./VList-Dt-NZPXO.js";import"./ssrBoot-DJtqp1tw.js";import"./VDivider-CrQfmmxF.js";import"./VCheckboxBtn-CFRgiPc-.js";import"./VSelectionControl-BQ7W11sV.js";import"./VSlideGroup-D2vuRgS8.js";const be={__name:"program_add",props:{selected:Object},emits:["close","reload"],setup(E,{emit:b}){var G,H;const x=E,V=b,c=n(!1),p=n([]),q=n([]),g=n([]),P=n([]),w=n([]),j=n([]),B=n(!1),I=(H=(G=x.selected[0])==null?void 0:G.require)==null?void 0:H.toLowerCase(),y=n(),l=n({ref_id:x.selected.map(r=>r.id),mentortutor_email:null,subject_id:null,inhouse_id:null,package_id:null,duration:"",notes:"",pic_id:[]}),S=async(r=!1)=>{const s=r?"api/v1/user/mentor-tutors?inhouse=true&role="+I:"api/v1/user/mentor-tutors?role="+I;try{const i=await U.get(s);i&&(r?j.value=Object.values(i):q.value=i)}catch(i){console.error(i)}},d=async()=>{try{const r=await U.get("api/v1/package/component/list?category="+I);r&&(P.value=r)}catch(r){console.error(r)}},N=()=>{const r=l.value.package_id,s=P.value.findIndex(f=>f.id===r);let i=P.value[s];i.detail?(B.value=!0,l.value.duration=i.detail):(B.value=!1,l.value.duration=null)},m=async()=>{try{const r=await U.get("api/v1/user/component/list");r&&(w.value=r)}catch(r){console.error(r)}},_=async(r,s=null)=>{if(l.value.subject_id=null,I=="mentor")l.value.subject_id=r[0].subjects[0].id;else try{const i=await U.get("api/v1/user/mentor-tutors/"+s+"/subjects");i&&(g.value=i)}catch(i){console.error(i)}},F=async()=>{var s,i;c.value=!0,l.value.mentortutor_email=p.value.email;const{valid:r}=await y.value.validate();if(r)try{const f=await U.post("api/v1/timesheet/create",l.value);f&&(R("success",f.message,"bottom-end"),V("reload"),selected.value=[],l.value={ref_id:[],mentortutor_email:null,subject_id:null,inhouse_id:null,package_id:null,duration:"",notes:"",pic_id:[]},p.value=[])}catch(f){if(console.log(f),(i=(s=f==null?void 0:f.response)==null?void 0:s.data)!=null&&i.errors){const a=f.response.data.errors;R("error",a,"bottom-end")}}finally{V("close"),c.value=!1}};return Y(()=>{S(),S(!0),d(),m()}),(r,s)=>(v(),k(J,{width:"600","prepend-icon":"ri-send-plane-line",title:"Assign to Mentor/Tutor"},{default:o(()=>[t(Z,null,{default:o(()=>[t(ue,{onSubmit:ee(F,["prevent"]),ref_key:"formData",ref:y,"validate-on":"input"},{default:o(()=>[t(K,null,{default:o(()=>{var i,f;return[t(h,{md:"12"},{default:o(()=>[t(M,{variant:"solo",clearable:"",modelValue:e(p),"onUpdate:modelValue":[s[0]||(s[0]=a=>A(p)?p.value=a:null),s[1]||(s[1]=a=>_(e(p).roles,e(p).uuid))],label:"Mentor/Tutor",items:e(q),"item-props":a=>({title:a.full_name,subtitle:a.roles.map(Q=>Q.name).join(", ")}),rules:e(D).required,loading:e(c),disabled:e(c)},null,8,["modelValue","items","item-props","rules","loading","disabled"])]),_:1}),((f=(i=x.selected[0])==null?void 0:i.require)==null?void 0:f.toLowerCase())=="tutor"?(v(),k(h,{key:0,md:"12"},{default:o(()=>[t(M,{variant:"solo",clearable:"",modelValue:e(l).subject_id,"onUpdate:modelValue":s[2]||(s[2]=a=>e(l).subject_id=a),label:"Subject Tutoring",items:e(g),"item-title":"subject","item-value":"id",loading:e(c),disabled:e(c),rules:e(D).required},null,8,["modelValue","items","loading","disabled","rules"])]),_:1})):W("",!0),t(h,{md:"8"},{default:o(()=>[t(M,{variant:"solo",clearable:"",label:"Package",modelValue:e(l).package_id,"onUpdate:modelValue":[s[3]||(s[3]=a=>e(l).package_id=a),N],items:e(P),"item-props":a=>({title:a.package!=null?a.type_of+" - "+a.package:a.type_of,subtitle:a.detail?a.detail/60+" Hours":"Customizable"}),"item-value":"id",rules:e(D).required,loading:e(c),disabled:e(c)},null,8,["modelValue","items","item-props","rules","loading","disabled"])]),_:1}),t(h,{md:"4"},{default:o(()=>[t(X,{type:"number",variant:"solo",clearable:"",label:+e(l).duration/60?"Minutes ("+e(l).duration/60+" Hours)":"Minutes",readonly:e(B),modelValue:e(l).duration,"onUpdate:modelValue":s[4]||(s[4]=a=>e(l).duration=a),rules:e(D).required},null,8,["label","readonly","modelValue","rules"])]),_:1}),t(h,{md:"12"},{default:o(()=>[t(M,{variant:"solo",clearable:"",modelValue:e(l).inhouse_id,"onUpdate:modelValue":s[5]||(s[5]=a=>e(l).inhouse_id=a),label:"Inhouse Mentor/Tutor",items:e(j),"item-props":a=>({title:a.full_name}),"item-value":"uuid",loading:e(c),disabled:e(c),rules:e(D).required},null,8,["modelValue","items","item-props","loading","disabled","rules"])]),_:1}),t(h,{md:"12"},{default:o(()=>[t(M,{variant:"solo",multiple:"",clearable:"",chips:"",label:"PIC",modelValue:e(l).pic_id,"onUpdate:modelValue":s[6]||(s[6]=a=>e(l).pic_id=a),items:e(w),"item-title":"full_name","item-value":"id",loading:e(c),disabled:e(c),rules:e(D).required},null,8,["modelValue","items","loading","disabled","rules"])]),_:1}),t(h,{md:"12"},{default:o(()=>[t(de,{label:"Notes",modelValue:e(l).notes,"onUpdate:modelValue":s[7]||(s[7]=a=>e(l).notes=a),variant:"solo"},null,8,["modelValue"])]),_:1})]}),_:1}),t(ne,{class:"mt-5"},{default:o(()=>[t(z,{color:"error",type:"button",onClick:s[8]||(s[8]=i=>V("close"))},{default:o(()=>[t(C,{icon:"ri-close-line",class:"me-3"}),T(" Close ")]),_:1}),t(te),t(z,{color:"success",type:"submit"},{default:o(()=>[T(" Save "),t(C,{icon:"ri-save-line",class:"ms-3"})]),_:1})]),_:1})]),_:1},512)]),_:1})]),_:1}))}},Ve=u("div",{class:"d-flex justify-between align-center"},[u("div",{class:"w-100"},[u("h4",null,"Program Name")])],-1),ye=u("thead",null,[u("tr",null,[u("th",{class:"text-uppercase",width:"1%"}," # "),u("th",{class:"text-uppercase text-center"},"Invoice ID"),u("th",{class:"text-uppercase text-center"},"Student/School Name"),u("th",{class:"text-uppercase text-center"},"Program Name"),u("th",{class:"text-uppercase text-center"},"Timesheet")])],-1),ke={nowrap:""},he={class:"text-left",nowrap:""},xe={class:"text-left",nowrap:""},we={class:"text-center"},je={key:0},Ce=u("tr",null,[u("td",{colspan:"6",class:"text-center"}," Sorry, no data found. ")],-1),Te=[Ce],Pe={class:"d-flex justify-center mt-5"},Je={__name:"program",setup(E){const b=n([]),x=n(!1),V=n(1),c=n(),p=n(),q=n([]),g=n(!1),P=n([]),w=n();n(),n({ref_id:[],mentortutor_email:null,subject_id:null,inhouse_id:null,package_id:null,duration:"",notes:"",pic_id:[]});const j=async()=>{var N,m;const y="?page="+V.value,l=p.value?"&keyword="+p.value:"",S=w.value?"&program_name="+w.value:"",d="&paginate=true";try{g.value=!0;const _=await U.get("api/v1/program/list"+y+l+S+d);_&&(V.value=_.current_page,c.value=_.last_page,q.value=_),g.value=!1}catch(_){R("error",(m=(N=_.response)==null?void 0:N.data)==null?void 0:m.message,"bottom-end"),console.error(_),g.value=!1}},B=async()=>{try{const y=await U.get("api/v1/program/component/list");y&&(P.value=y)}catch(y){console.error(y)}},I=ce(async()=>{V.value=1,await j()},500);return Y(()=>{j(),B()}),(y,l)=>{const S=le("VText");return v(),k(J,null,{default:o(()=>[t(ie,null,{default:o(()=>[Ve]),_:1}),t(Z,null,{default:o(()=>[t(K,{class:"my-1"},{default:o(()=>[t(h,{cols:"12",md:"3"},{default:o(()=>[t(M,{clearable:"",modelValue:e(w),"onUpdate:modelValue":[l[0]||(l[0]=d=>A(w)?w.value=d:null),j],label:"Program Name",items:e(P),"item-title":"program_name",placeholder:"Select Program Name",density:"compact",variant:"solo","hide-details":"","single-line":"",loading:e(g),disabled:e(g)},null,8,["modelValue","items","loading","disabled"])]),_:1}),t(h,{cols:"12",md:"3"},{default:o(()=>[t(X,{loading:e(g),disabled:e(g),"append-inner-icon":"ri-search-line",density:"compact",label:"Search",variant:"solo","hide-details":"","single-line":"",modelValue:e(p),"onUpdate:modelValue":l[1]||(l[1]=d=>A(p)?p.value=d:null),onInput:e(I)},null,8,["loading","disabled","modelValue","onInput"])]),_:1}),t(h,{cols:"12",md:"6",class:"text-end"},{default:o(()=>[ae((v(),k(z,{density:"compact",color:e(b).length>0?"warning":"primary",class:"mb-2",disabled:!(e(b).length>0),onClick:l[2]||(l[2]=d=>x.value=!0)},{default:o(()=>[T(" Assign "+$(e(b).length>1?"to Group":""),1)]),_:1},8,["color","disabled"])),[[ge,"Generate Timesheet","start"]])]),_:1})]),_:1}),t(me,{modelValue:e(x),"onUpdate:modelValue":l[4]||(l[4]=d=>A(x)?x.value=d:null),width:"auto",persistent:""},{default:o(()=>[t(be,{selected:e(b),onClose:l[3]||(l[3]=d=>x.value=!1),onReload:j},null,8,["selected"])]),_:1},8,["modelValue"]),e(g)?(v(),k(pe,{key:0,class:"mx-auto border",type:"table-thead, table-row@10"})):(v(),k(fe,{key:1,class:"table-responsive"},{default:o(()=>{var d,N;return[ye,u("tbody",null,[(v(!0),L(se,null,oe(e(q).data,(m,_)=>(v(),L("tr",{key:_,class:re({"bg-secondary":e(b).includes(m.id)})},[u("td",null,[m.timesheet_id?(v(),k(C,{key:1,icon:"ri-check-line",color:"success"})):(v(),k(_e,{key:0,modelValue:e(b),"onUpdate:modelValue":l[5]||(l[5]=F=>A(b)?b.value=F:null),value:{id:m.id,require:m.require}},null,8,["modelValue","value"]))]),u("td",ke,[t(C,{icon:"ri-receipt-line",class:"me-3"}),T(" "+$(m.invoice_id),1)]),u("td",he,[t(C,{icon:"ri-user-line",class:"me-3"}),T(" "+$(m.student_name+" - "+m.student_school),1)]),u("td",xe,[t(C,{icon:"ri-bookmark-line",class:"me-3"}),T(" "+$(m.program_name),1)]),u("td",we,[m.timesheet_id?(v(),k(S,{key:0},{default:o(()=>[t(C,{icon:"ri-file-check-line",class:"mx-1",color:"success"}),t(O,{activator:"parent",location:"top"},{default:o(()=>[T("Already")]),_:1})]),_:1})):(v(),k(S,{key:1},{default:o(()=>[t(C,{icon:"ri-file-close-line",class:"mx-1",color:"error"}),t(O,{activator:"parent",location:"top"},{default:o(()=>[T("Not Yet")]),_:1})]),_:1}))])],2))),128))]),((N=(d=e(q))==null?void 0:d.data)==null?void 0:N.length)==0?(v(),L("tfoot",je,Te)):W("",!0)]}),_:1})),u("div",Pe,[t(ve,{modelValue:e(V),"onUpdate:modelValue":[l[6]||(l[6]=d=>A(V)?V.value=d:null),j],length:e(c),"total-visible":4,color:"primary",density:"compact","show-first-last-page":!1},null,8,["modelValue","length"])])]),_:1})]),_:1})}}};export{Je as default};
