import{_ as p,i as d,c as r,a as t,t as v,b as s,w as n,f as o,o as b,d as h}from"./entry.c8fdadf4.js";const f={name:"ALFM-MY02-PG00",emits:["setLayout","openPopup"],data(){return{layout:{header:"sub",footer:"",floatMenu:"",title:"내가 신청한 요금제 상세"},acd:[]}},mounted(){this.$emit("setLayout",this.layout)}},m={class:"container"},x={class:"content",id:"content"},y={class:"title_nav"},g=o('<div class="section"><button type="button" class="line_btn_arrw"><strong class="fs16">eSIM 활성화 방법</strong></button></div><div class="section"><button type="button" class="line_btn_arrw"><strong class="fs16">희망번호 선택하기</strong></button></div><div class="section"><button type="button" class="line_btn_arrw"><strong class="fs16">USIM 정보 입력하기</strong></button></div>',3),M={class:"section"},w=t("h3",{class:"tit02"},"신청 정보",-1),V={class:"list_info_ty01"},G=o('<dl><dt>사업자</dt><dd>프리티</dd></dl><dl><dt>신청한 요금제</dt><dd>5G 더빠른 180GB+ <button type="button" class="btn xsm c07">자세히 보기</button></dd></dl><dl><dt>유심/eSIM</dt><dd>유심</dd></dl><dl><dt>신청상태</dt><dd>가입신청완료</dd></dl><dl><dt>신청일</dt><dd>2022.10.03</dd></dl><dl><dt>부가서비스</dt><dd>발신자표시 제한(무료), 통화중 대기(무료)</dd></dl>',6),S={class:"wid_full"},B={class:"acd_title"},L=t("div",{class:"charge_info"},[t("span",{class:""},"월통신요금"),t("strong",null,[t("span",{class:"fc01"},"51,700"),h("원")])],-1),N={class:"acd_panel"},I=t("div",{class:"panel_inner_list"},[t("ul",null,[t("li",null,[t("span",null,"5G 더빠른 180G+"),t("span",null,"77,000원")]),t("li",null,[t("span",null,"프로모션 할인"),t("strong",null,"-20,300원")]),t("li",null,[t("span",null,"Kb국민카드 이벤트 할인"),t("strong",null,"-5,000원")])])],-1),P=o('<div class="section"><h3 class="tit02">가입자 정보</h3><div class="list_info_ty01"><dl><dt>고객유형</dt><dd>내국인</dd></dl><dl><dt>가입유형</dt><dd>신규가입</dd></dl><dl><dt>이름</dt><dd>김*파</dd></dl><dl><dt>생년월일</dt><dd>1992.05.01</dd></dl><dl><dt>휴대폰 번호</dt><dd>010-12**-56**</dd></dl><dl><dt>납부방법</dt><dd>신용카드</dd></dl><dl><dt>청구서 수령방법</dt><dd>이메일 청구서</dd></dl></div></div><div class="section"><h3 class="tit02">법정대리인 정보</h3><div class="list_info_ty01"><dl><dt>이름</dt><dd>김*파</dd></dl><dl><dt>생년월일</dt><dd>1992.05.01</dd></dl><dl><dt>휴대폰 번호</dt><dd>010-12**-56**</dd></dl></div></div><div class="section"><div class="btn_group"><button type="button" class="btn md c04">신청 취소하기</button></div><div class="btn_group"><button type="button" class="btn md c05">목록보기</button></div></div>',3);function k(A,e,C,F,l,U){const a=d("v-expansion-panel-title"),i=d("v-expansion-panel-text"),c=d("v-expansion-panel"),_=d("v-expansion-panels");return b(),r("div",m,[t("div",x,[t("h2",y,v(l.layout.title),1),g,t("div",M,[w,t("div",V,[G,t("dl",S,[t("dt",null,[s(_,{class:"acd_wrap",modelValue:l.acd,"onUpdate:modelValue":e[0]||(e[0]=u=>l.acd=u)},{default:n(()=>[s(c,{class:"acd_item"},{default:n(()=>[t("div",B,[s(a,null,{default:n(()=>[L]),_:1})]),t("div",N,[s(i,null,{default:n(()=>[I]),_:1})])]),_:1})]),_:1},8,["modelValue"])])])])]),P])])}const $=p(f,[["render",k]]);export{$ as default};