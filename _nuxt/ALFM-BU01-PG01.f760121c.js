import{_ as c}from"./InputBox.1c61d644.js";import{_ as a}from"./PopupSelect.b08039e3.js";import{_ as m,c as d,a as t,t as f,b as s,g as v,d as r,o as _}from"./entry.b6e4d86e.js";import"./MVNOList.c4a107ad.js";import"./nuxt-link.ab9ec2e5.js";import"./frontData.e7bcb1b2.js";const b={name:"ALFM-BU01-PG01",emits:["setLayout","openPopup"],data(){return{layout:{header:"sub2",footer:"none",floatMenu:"none",title:"배송정보"},deliveryRequestSelfInput:!1,nextBtn:!1}},watch:{},methods:{selectDeliveryRequest(l){this.deliveryRequestSelfInput=l.value==3,this.deliveryRequestSelfInput&&setTimeout(()=>{this.$refs.deliveryRequestSelfInput.$refs.input.focus()},10)}},mounted(){this.$emit("setLayout",this.layout)},components:{InputBox:c,PopupSelect:a},props:{frontData:Object}},h={class:"container"},y={class:"content",id:"content"},g={class:"title_nav"},I=t("div",{class:"page_info"},[r("배송정보를 "),t("br"),r("입력해주세요")],-1),q={class:"section"},R={class:"form_wrap"},V={class:"form_group"},B=t("strong",{class:"form_label"},"수령인",-1),S={class:"form_item"},x=t("div",{class:"error"},"수령인을 입력해주세요",-1),L=t("div",{class:"error"},"수령인을 정확히 입력해주세요",-1),N={class:"form_group"},P=t("strong",{class:"form_label"},"휴대폰 번호",-1),$={class:"form_item"},k=t("button",{type:"button",class:"btn md c03"},"인증번호 받기",-1),D=t("div",{class:"error"},"휴대폰 번호가 올바르지 않습니다",-1),w={class:"form_item"},G=t("div",{class:"error"},"인증번호를 정확히 입력해주세요",-1),M=t("div",{class:"text_info"},"휴대폰으로 전송된 인증번호를 3분안에 입력해 주세요.",-1),T=t("div",{class:"btn_group"},[t("button",{type:"button",class:"btn md c03"},"인증 확인")],-1),A=t("div",{class:"btn_group"},[t("button",{type:"button",class:"btn md c03",disabled:""},"인증 완료")],-1),C={class:"form_group"},F=t("strong",{class:"form_label"},"주소",-1),U={class:"form_item"},j=t("button",{type:"button",class:"btn md c03"},"우편번호 찾기",-1),E={class:"form_item"},O={class:"form_item"},z={class:"form_group"},H=t("strong",{class:"form_label"},"배송 시 요청사항 (선택)",-1),J={class:"form_item"},K={key:0,class:"form_item"},Q={class:"bottom_float"},W={class:"inner"},X={class:"float_btn_wrap"},Y={class:"btn_group"},Z=["disabled"];function tt(l,o,ot,et,i,u){const n=c,p=a;return _(),d("div",h,[t("div",y,[t("h2",g,f(i.layout.title),1),I,t("div",q,[t("div",R,[t("div",V,[B,t("div",S,[s(n,{option:{placeholder:"수령인 입력"},onInputValue:o[0]||(o[0]=e=>console.log(e))})]),x,L]),t("div",N,[P,t("div",$,[s(n,{option:{type:"tel",placeholder:"‘-’ 없이 숫자만 입력"},onInputValue:o[1]||(o[1]=e=>console.log(e))}),k]),D,t("div",w,[s(n,{option:{placeholder:"인증번호",authNum:!0},onInputValue:o[2]||(o[2]=e=>console.log(e))})]),G,M]),T,A,t("div",C,[F,t("div",U,[s(n,{option:{placeholder:"우편번호",disabled:!0},onInputValue:o[3]||(o[3]=e=>console.log(e))}),j]),t("div",E,[s(n,{option:{placeholder:"주소",disabled:!0},onInputValue:o[4]||(o[4]=e=>console.log(e))})]),t("div",O,[s(n,{option:{value:"LG유플러스 상암사옥",placeholder:"상세주소 입력"},onInputValue:o[5]||(o[5]=e=>console.log(e))})])]),t("div",z,[H,t("div",J,[t("button",{type:"button",class:"btn_select",ref:"btn_deliveryRequest",onClick:o[6]||(o[6]=(...e)=>l.$refs.deliveryRequest.open&&l.$refs.deliveryRequest.open(...e))},"배송 시 요청사항 선택하기",512)]),i.deliveryRequestSelfInput?(_(),d("div",K,[s(n,{option:{placeholder:"40글자 이내로 입력"},onInputValue:o[7]||(o[7]=e=>console.log(e)),ref:"deliveryRequestSelfInput"},null,512)])):v("",!0),s(p,{ref:"deliveryRequest",option:{data:"deliveryRequest",popupTitle:"배송 시 요청사항 선택",targetBtn:"btn_deliveryRequest"},onSelectItem:o[8]||(o[8]=e=>u.selectDeliveryRequest(e))},null,512)])])]),t("div",Q,[t("div",W,[t("div",X,[t("div",Y,[t("button",{type:"button",class:"btn lg c01",disabled:i.nextBtn==!1},"다음으로",8,Z)])])])])])])}const _t=m(b,[["render",tt]]);export{_t as default};
