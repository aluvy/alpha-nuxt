import{_ as u}from"./InputBox.1c61d644.js";import{_ as v}from"./PopupSelect.b08039e3.js";import{_ as f,c as l,a as t,t as a,j as d,P as r,b as i,g as p,d as m,f as h,o as c}from"./entry.b6e4d86e.js";import"./MVNOList.c4a107ad.js";import"./nuxt-link.ab9ec2e5.js";import"./frontData.e7bcb1b2.js";const P={name:"ALFM-PR03-PG16",emits:["setLayout","openPopup"],data(){return{layout:{header:"sub2",footer:"none",floatMenu:"none",title:"요금납부정보"},ALFMPR03PG16:"item_select_01",certifyBtn:"카드 등록하기"}},watch:{ALFMPR03PG16(n){this.certifyBtn=n=="item_select_01"?"카드 등록하기":"인증하기"}},mounted(){this.$emit("setLayout",this.layout)},components:{PopupSelect:v,InputBox:u},props:{frontData:Object}},y={class:"container"},g={class:"content",id:"content"},k={class:"title_nav"},M=t("div",{class:"page_info"},[m("요금을 납부하실 방법을 "),t("br"),m("선택해 주세요")],-1),L={class:"section"},R={class:"item_list02"},A={class:"radio_item ty01"},F=t("label",{for:"item_select_01"},"신용카드",-1),G={class:"radio_item ty01"},V=t("label",{for:"item_select_02"},"계좌이체",-1),x={class:"section"},B={key:0,id:"panel_item_select_01"},I={class:"form_wrap"},w={class:"form_group"},N=t("strong",{class:"form_label"},"신용카드 번호",-1),S={class:"form_item"},D=t("div",{class:"error"},"신용카드 정보를 다시 입력해주세요",-1),j={class:"form_item"},C=t("div",{class:"error"},"신용카드 정보를 다시 입력해주세요",-1),T={key:1,id:"panel_item_select_02"},U={class:"form_wrap"},Y={class:"form_group"},E=t("strong",{class:"form_label"},"은행 계좌번호",-1),O={class:"form_item"},q={class:"form_item"},z={class:"section"},H=t("div",{class:"terms_consent"},[t("div",{class:"cst_box check_st"},[t("input",{type:"checkbox",id:"check_01",name:"agreement"}),t("label",{for:"check_01"},"자동결제 또는 자동이체에 동의합니다. (필수)")])],-1),J={class:"btn_group"},K={type:"button",class:"btn md c01",disabled:""},Q=h('<div class="bottom_float"><div class="inner"><div class="float_btn_wrap"><div class="btn_group"><button type="button" class="btn lg c01" disabled>다음으로</button></div></div></div></div>',1);function W(n,e,X,Z,s,$){const _=u,b=v;return c(),l("div",y,[t("div",g,[t("h2",k,a(s.layout.title),1),M,t("div",L,[t("div",R,[t("ul",null,[t("li",null,[t("div",A,[d(t("input",{type:"radio",id:"item_select_01",name:"item_select",value:"item_select_01","onUpdate:modelValue":e[0]||(e[0]=o=>s.ALFMPR03PG16=o)},null,512),[[r,s.ALFMPR03PG16]]),F])]),t("li",null,[t("div",G,[d(t("input",{type:"radio",id:"item_select_02",name:"item_select",value:"item_select_02","onUpdate:modelValue":e[1]||(e[1]=o=>s.ALFMPR03PG16=o)},null,512),[[r,s.ALFMPR03PG16]]),V])])])])]),t("div",x,[s.ALFMPR03PG16=="item_select_01"?(c(),l("div",B,[t("div",I,[t("div",w,[N,t("div",S,[i(_,{option:{placeholder:"‘-’ 없이 숫자만 입력"},onInputValue:e[2]||(e[2]=o=>console.log(o))})]),D,t("div",j,[i(_,{option:{placeholder:"MMYY",maxLength:4},onInputValue:e[3]||(e[3]=o=>console.log(o))})]),C])])])):p("",!0),s.ALFMPR03PG16=="item_select_02"?(c(),l("div",T,[t("div",U,[t("div",Y,[E,t("div",O,[t("button",{type:"button",class:"btn_select",ref:"btn_bank",onClick:e[4]||(e[4]=(...o)=>n.$refs.bank.open&&n.$refs.bank.open(...o))},"선택",512)]),t("div",q,[i(_,{option:{placeholder:"‘-’ 없이 숫자만 입력"},onInputValue:e[5]||(e[5]=o=>console.log(o))})]),i(b,{ref:"bank",option:{data:"bank",popupTitle:"선택",targetBtn:"btn_bank"},onSelectItem:e[6]||(e[6]=o=>console.log(o))},null,512)])])])):p("",!0)]),t("div",z,[H,t("div",J,[t("button",K,a(s.certifyBtn),1)])]),Q])])}const _t=f(P,[["render",W]]);export{_t as default};
