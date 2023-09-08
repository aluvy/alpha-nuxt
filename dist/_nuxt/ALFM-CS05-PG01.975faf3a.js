import{_}from"./PopupSelect.b08039e3.js";import{_ as u}from"./InputBox.1c61d644.js";import{_ as c}from"./TextareaBox.c5f82c99.js";import{_ as f,c as b,a as t,t as y,b as n,h as p,f as v,o as a}from"./entry.b6e4d86e.js";import"./MVNOList.c4a107ad.js";import"./nuxt-link.ab9ec2e5.js";import"./frontData.e7bcb1b2.js";const g={name:"ALFM-CS05-PG01",emits:["setLayout","openPopup"],data(){return{layout:{header:"sub",footer:"",floatMenu:"",title:"1:1 문의하기"},emailSelfInput:!0,emailSelectDomain:""}},methods:{selectDomain(s){this.emailSelfInput=s.value==0,this.emailSelectDomain=s.title,this.emailSelfInput&&setTimeout(()=>{this.$refs.emailSelfInput.$refs.input.focus()},10)}},mounted(){this.$emit("setLayout",this.layout)},components:{PopupSelect:_,TextareaBox:c,InputBox:u},props:{frontData:Object}},h={class:"container"},S={class:"content",id:"content"},x={class:"title_nav"},I=t("div",{class:"section"},[t("div",{class:"box_gray"},[t("ul",{class:"text_list bull"},[t("li",null," 문의가 많은 경우 일시적으로 답변이 지연될 수 있습니다. (답변 가능시간 : 평일 오전 9시 ~ 오후 6시) ")])])],-1),T={class:"section ty02"},B=t("div",{class:"page_info"}," 문의 내용을 작성해 주세요 ",-1),k={class:"form_group"},V=t("strong",{class:"form_label"},"문의유형",-1),D={class:"form_item"},q={class:"form_group"},$=t("strong",{class:"form_label"},"제목",-1),C={class:"form_item"},P=t("div",{class:"error"},"제목을 입력해 주세요",-1),L={class:"form_group"},M=t("strong",{class:"form_label"},"내용",-1),N={class:"form_item"},A=t("div",{class:"error"},"내용을 입력해 주세요",-1),F={class:"form_group"},G=t("strong",{class:"form_label"},"이메일",-1),j={class:"form_item"},E=t("span",{class:"mark_div"},"@",-1),O=t("div",{class:"error"},null,-1),w={class:"form_item"},z=v('<div class="form_group"><div class="box_gray"><ul class="text_list bull"><li> 입력하신 이메일 주소로 문의에 대한 답변을 보내 드리고 있으니, 정확히 입력해 주세요. </li></ul></div></div><div class="btn_group"><button type="button" class="btn lg c01" disabled>문의 등록하기</button></div>',2);function H(s,o,J,K,i,d){const r=_,l=u,m=c;return a(),b("div",h,[t("div",S,[t("h2",x,y(i.layout.title),1),I,t("div",T,[B,t("div",k,[V,t("div",D,[t("button",{type:"button",class:"btn_select",ref:"btn_inquiryType",onClick:o[0]||(o[0]=(...e)=>s.$refs.inquiryType.open&&s.$refs.inquiryType.open(...e))},"문의유형 선택",512)]),n(r,{ref:"inquiryType",option:{data:"inquiryType",popupTitle:"문의유형 선택",targetBtn:"btn_inquiryType"},onSelectItem:o[1]||(o[1]=e=>console.log(e))},null,512)]),t("div",q,[$,t("div",C,[n(l,{option:{placeholder:"제목을 입력해주세요"},onInputValue:o[2]||(o[2]=e=>console.log(e))})]),P]),t("div",L,[M,t("div",N,[n(m,{data:{type:"ty01",placeholder:"문의 내용을 입력해 주세요",maxlength:1e3,byteCheck:!0},onTextareaValue:o[3]||(o[3]=e=>console.log(e)),onTextareaSubmit:o[4]||(o[4]=e=>console.log(e))})]),A]),t("div",F,[G,t("div",j,[n(l,{option:{placeholder:"아이디"},onInputValue:o[5]||(o[5]=e=>console.log(e))}),E,i.emailSelfInput?(a(),p(l,{key:0,option:{placeholder:"도메인"},onInputValue:o[6]||(o[6]=e=>console.log(e)),ref:"emailSelfInput"},null,512)):(a(),p(l,{key:1,option:{value:i.emailSelectDomain,placeholder:"도메인",disabled:!0},onInputValue:o[7]||(o[7]=e=>console.log(e)),ref:"domain"},null,8,["option"]))]),O,t("div",w,[t("button",{type:"button",class:"btn_select",ref:"btn_email",onClick:o[8]||(o[8]=(...e)=>s.$refs.email.open&&s.$refs.email.open(...e))},"직접입력",512)]),n(r,{ref:"email",option:{data:"email",popupTitle:"도메인 선택",targetBtn:"btn_email"},onSelectItem:o[9]||(o[9]=e=>d.selectDomain(e))},null,512)]),z])])])}const tt=f(g,[["render",H]]);export{tt as default};
