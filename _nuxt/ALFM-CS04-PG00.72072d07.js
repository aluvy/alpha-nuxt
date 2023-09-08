import{_ as r}from"./InputBox.1c61d644.js";import{_ as d}from"./Tag.c60b82b5.js";import{_ as b}from"./nuxt-link.ab9ec2e5.js";import{_ as V,i as l,c as i,a as t,t as c,b as e,w as n,o as _,F as B,r as L,h as k,d as p,I as C}from"./entry.b6e4d86e.js";const F={name:"ALFM-CS04-PG00",emits:["setLayout","openPopup"],data(){return{layout:{header:"sub",footer:"",floatMenu:"",title:"자주하는 질문"},acd:[],data:[{title:"납기일은 어떻게 되나요?",type:"요금 및 납부",color:"c01",content:"요금 납기일(납부기한)은 해당 청구월의 말일까지 입니다. 납기일 경과 후 납부된 경우에는 연체료(이용요금의 2%)가 다음달 청구요금에 포함되어 청구됩니다."},{title:"미납 문자메시지를 받았어요. 어떻게 해야 하나요?",type:"가입 및 변경",color:"c09",content:"요금 납기일(납부기한)은 해당 청구월의 말일까지 입니다. 납기일 경과 후 납부된 경우에는 연체료(이용요금의 2%)가 다음달 청구요금에 포함되어 청구됩니다."},{title:"신용카드로 자동이체가 되어 있는데, 요금이 왜 결제되지 않나요?",type:"혜택/이벤트",color:"c03",content:"요금 납기일(납부기한)은 해당 청구월의 말일까지 입니다. 납기일 경과 후 납부된 경우에는 연체료(이용요금의 2%)가 다음달 청구요금에 포함되어 청구됩니다."},{title:"미납 문자메시지를 받았어요. 어떻게 해야 하나요?",type:"요금 및 납부",color:"c01",content:"요금 납기일(납부기한)은 해당 청구월의 말일까지 입니다. 납기일 경과 후 납부된 경우에는 연체료(이용요금의 2%)가 다음달 청구요금에 포함되어 청구됩니다."},{title:"미납 문자메시지를 받았어요. 어떻게 해야 하나요?",type:"결합할인",color:"c04",content:"요금 납기일(납부기한)은 해당 청구월의 말일까지 입니다. 납기일 경과 후 납부된 경우에는 연체료(이용요금의 2%)가 다음달 청구요금에 포함되어 청구됩니다."},{title:"미납 문자메시지를 받았어요. 어떻게 해야 하나요?",type:"회원가입",color:"c05",content:"요금 납기일(납부기한)은 해당 청구월의 말일까지 입니다. 납기일 경과 후 납부된 경우에는 연체료(이용요금의 2%)가 다음달 청구요금에 포함되어 청구됩니다."}]}},mounted(){this.$emit("setLayout",this.layout)},components:{Tag:d,InputBox:r},props:{frontData:Object}},w={class:"container"},I={class:"content",id:"content"},N={class:"title_nav"},q={class:"section"},A={class:"form_group"},D={class:"form_item"},M={class:"section"},P={class:"filter_wrap"},S={class:"acd_title qna_tit"},T=t("b",null,"Q",-1),j={class:"qna_ty"},G=t("span",null,"공통",-1),Q={class:"acd_panel qna_con"},z={role:"region"},E={class:"box_gray"},O=t("span",null," 더 자세히 알고 싶으시면, 1:1 문의하기를 이용해주세요. ",-1);function U(H,s,u,J,a,K){const m=r,v=d,f=l("v-expansion-panel-title"),x=b,h=l("v-expansion-panel-text"),y=l("v-expansion-panel"),g=l("v-expansion-panels");return _(),i("div",w,[t("div",I,[t("h2",N,c(a.layout.title),1),t("div",q,[t("div",A,[t("div",D,[e(m,{option:{placeholder:"검색어를 입력해주세요",search:!0},onInputValue:s[0]||(s[0]=o=>console.log(o))})])])]),t("div",M,[t("div",P,[e(v,{data:u.frontData.tag.FAQ,option:{type:"default",multi:!1}},null,8,["data"])]),e(g,{class:"acd_wrap",modelValue:a.acd,"onUpdate:modelValue":s[1]||(s[1]=o=>a.acd=o),multiple:""},{default:n(()=>[(_(!0),i(B,null,L(a.data,o=>(_(),k(y,{class:"acd_item ty05",key:o},{default:n(()=>[t("div",S,[e(f,null,{default:n(()=>[t("strong",null,[T,p(" "+c(o.title),1)]),t("div",j,[t("div",{class:C(["bag clr",o.color])},c(o.type),3),G])]),_:2},1024)]),t("div",Q,[e(h,null,{default:n(()=>[t("div",z,[t("p",null,c(o.content),1),t("div",E,[O,e(x,{to:"javascript:void(0);",role:"button",class:"btn xsm c07"},{default:n(()=>[p("1:1문의하기")]),_:1})])])]),_:2},1024)])]),_:2},1024))),128))]),_:1},8,["modelValue"])])])])}const Z=V(F,[["render",U]]);export{Z as default};
