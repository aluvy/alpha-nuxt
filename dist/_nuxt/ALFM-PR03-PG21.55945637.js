import{_ as c}from"./InputBox.1c61d644.js";import{_ as m,i,c as h,a as e,t as v,b as t,w as l,d as _,o as f}from"./entry.b6e4d86e.js";const g={name:"ALFM-PR03-PG21",emits:["setLayout","openPopup"],data(){return{layout:{header:"sub2",footer:"none",floatMenu:"none",title:"본인인증"},acd:[],next:!1}},mounted(){this.$emit("setLayout",this.layout)},components:{InputBox:c}},x={class:"container"},b={class:"content",id:"content"},y={class:"title_nav"},P=e("div",{class:"page_info"},[_("가입하실 분의 "),e("br"),_("본인인증을 진행해 주세요")],-1),V={class:"section"},k={class:"form_group"},I=e("strong",{class:"form_label"},"Name",-1),w={class:"form_item"},B=e("div",{class:"error"},"Please enter your name.",-1),M=e("div",{class:"error"},"Please enter your name correctly.",-1),N={class:"form_group"},D=e("strong",{class:"form_label"},"Alien Registration Number",-1),L={class:"form_item"},R=e("span",{class:"mark_div"},"-",-1),Y=e("div",{class:"error"},"Please enter your alien registration number.",-1),A=e("div",{class:"error"},"Please enter your alien registration number correctly.",-1),E={class:"form_group"},S=e("strong",{class:"form_label"},"Date of issue",-1),C={class:"form_item"},F=e("div",{class:"error"},"Please enter the date of issuance of the alien registration card.",-1),G=e("div",{class:"error"},"Please enter the 8-digit alien registration card issuance date correctly.",-1),q={class:"form_group"},T={class:"form_item"},U={class:"acd_title"},$=e("div",{class:"acd_tab"},[e("div",{class:"check_st"},[e("input",{type:"checkbox",id:"check_consent01_all",name:""}),e("label",{for:"check_consent01_all"},"I agree to collection and use of alien registration number. (Required)")])],-1),j={class:"acd_panel"},z=e("ul",{class:"text_list bull"},[e("li",null," 수집·이용 목적: 본인확인, 본인인증, 미환급금 안내, 실명인증 "),e("li",null," 수집 정보의 항목: 외국인 등록번호 (본인, 대리인 신분확인 이미지 및 내용 포함) "),e("li",null," 정보의 보유 및 이용기간: 서비스 가입기간 동안 이용하고, 요금 정산과 오납 분쟁 대비를 위하여 해지 후 요금 완납 후 6개월까지 이용 ")],-1),H=e("div",{class:"error"},"Please agree to the terms and conditions.",-1),J={class:"bottom_float"},K={class:"inner"},O={class:"float_btn_wrap"},Q={class:"btn_group"},W=["disabled"];function X(Z,o,ee,oe,n,se){const a=c,r=i("v-expansion-panel-title"),d=i("v-expansion-panel-text"),p=i("v-expansion-panel"),u=i("v-expansion-panels");return f(),h("div",x,[e("div",b,[e("h2",y,v(n.layout.title),1),P,e("div",V,[e("div",k,[I,e("div",w,[t(a,{option:{placeholder:"Enter a name"},onInputValue:o[0]||(o[0]=s=>console.log(s))})]),B,M]),e("div",N,[D,e("div",L,[t(a,{option:{placeholder:"Six digits"},onInputValue:o[1]||(o[1]=s=>console.log(s))}),R,t(a,{option:{type:"password",placeholder:"Seven digits"},onInputValue:o[2]||(o[2]=s=>console.log(s))})]),Y,A]),e("div",E,[S,e("div",C,[t(a,{option:{placeholder:"YYYYMMDD Eight digits"},onInputValue:o[3]||(o[3]=s=>console.log(s))})]),F,G]),e("div",q,[e("div",T,[t(u,{class:"acd_wrap",modelValue:n.acd,"onUpdate:modelValue":o[4]||(o[4]=s=>n.acd=s)},{default:l(()=>[t(p,{class:"acd_item ty02"},{default:l(()=>[e("div",U,[$,t(r)]),e("div",j,[t(d,null,{default:l(()=>[z]),_:1})])]),_:1})]),_:1},8,["modelValue"])]),H])]),e("div",J,[e("div",K,[e("div",O,[e("div",Q,[e("button",{type:"button",class:"btn lg c01",disabled:n.next==!1},"가입자 인증하기",8,W)])])])])])])}const ae=m(g,[["render",X]]);export{ae as default};
