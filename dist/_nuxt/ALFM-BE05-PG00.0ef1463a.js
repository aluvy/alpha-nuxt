import{_ as m}from"./nuxt-link.ab9ec2e5.js";import{_ as p}from"./InputBox.1c61d644.js";import{_ as h}from"./NoData.572b708a.js";import{_ as b,c as _,a as t,t as i,b as e,w as d,j as f,v as y,F as g,r as x,d as n,f as w,o as r}from"./entry.b6e4d86e.js";const k={name:"ALFM-BE05-PG00",emits:["setLayout","openPopup"],data(){return{layout:{header:"sub2",footer:"",floatMenu:"",title:"친구 추천 이벤트"},tableShow:!0,dataTable:[{name:"이*신",phone:"010-12**-34**",date:"2023.02.28"},{name:"이*신",phone:"010-12**-34**",date:"2023.02.28"},{name:"이*신",phone:"010-12**-34**",date:"2023.02.28"},{name:"이*신",phone:"010-12**-34**",date:"2023.02.28"},{name:"이*신",phone:"010-12**-34**",date:"2023.02.28"}]}},mounted(){this.$emit("setLayout",this.layout)},components:{InputBox:p,NoData:h}},V={class:"container"},N={class:"content",id:"content"},B={class:"title_nav"},I={class:"section"},L={class:"invite_event"},S={class:"box_yellow"},j={class:"my_event"},D=t("p",null,[t("strong",null,[t("span",null,"홍*동"),n("님")]),n("이 추천한 "),t("sup",null,"+"),n("알뜰폰 파트너스 "),t("br"),n(" 요금제 가입하고 혜택 받기")],-1),F=w('<div class="box_gray"><div class="center">이벤트 영역(임시)</div></div><div class="box_gray"><div class="center">요금제 추천 영역(임시)</div></div><div class="page_info">초대 링크 생성하기</div><h3 class="tit02"><sup>+</sup>알파 요금제 가입이력 인증</h3>',4),E={class:"form_wrap"},M={class:"form_group"},P=t("strong",{class:"form_label"},"이름",-1),T={class:"form_item"},A=t("div",{class:"error"},"이름을 입력해 주세요",-1),G={class:"form_item"},$={class:"form_group"},C=t("strong",{class:"form_label"},"휴대폰번호",-1),R={class:"form_item"},U=t("button",{type:"button",class:"btn md c03"},"인증번호 받기",-1),q=t("div",{class:"error"},"휴대폰번호를 확인해주세요",-1),z={class:"form_item"},H=t("button",{type:"button",class:"btn md c03",disabled:""},"인증번호 재전송",-1),J={class:"form_item"},K=t("div",{class:"error"},"인증번호를 정확히 입력해주세요",-1),O=t("div",{class:"error"},"인증번호 입력시간이 초과되었습니다",-1),Q=t("div",{class:"btn_group"},[t("button",{type:"button",class:"btn md c03"},"인증 확인")],-1),W=t("div",{class:"btn_group"},[t("button",{type:"button",class:"btn md c03",disabled:""},"인증 완료")],-1),X=t("div",{class:"box_gray mgt32"},[t("ul",{class:"text_list bull"},[t("li",null,"인증요청 후 3분 안에 인증번호를 입력하셔야 하며, 3분 이내 인증번호 입력 또는 재전송하지 않는 경우 다시 휴대폰 인증을 요청하여야 합니다."),t("li",null,[n("인증문자가 오지 않을 경우 아래와 같이 단말기 설정을 변경해주세요. "),t("ul",{class:"text_list dash"},[t("li",null,"휴대폰 문자 설정 메뉴 중 스팸 관련 항목의 번호 없는 메시지 차단 선택 해제")])]),t("li",null,"수집된 개인정보 (이름, 생년월일, 성별, 휴대폰 번호)는 본인 인증에 사용됩니다.")])],-1),Y=t("h3",{class:"tit02"},"요금제가입 추천 링크 공유하기",-1),Z={class:"cir_icon_link invite"},tt=t("span",null,"카카오톡",-1),st=t("span",null,"URL 복사",-1),ot=t("h3",{class:"tit02"},"추천 활동내역 확인하기",-1),et=t("div",{class:"txt"},"최근 3개월동안 추천한 지인이 유심 개통완료한 내역",-1),nt=t("div",{class:"sort_wrap"},[t("div",null,[n("총 "),t("span",null,"16"),n("건")])],-1),lt={class:"table ty03"},it=t("caption",null,"추천 활동내역",-1),at=t("colgroup",null,[t("col",{style:{width:"7rem"}}),t("col",{style:{width:"auto"}}),t("col",{style:{width:"12rem"}})],-1),ct={scope:"row"},_t={class:"date"},dt=t("div",{class:"btn_group"},[t("button",{type:"button",class:"btn md c05"},"더볼래요")],-1),rt=t("div",{class:"sort_wrap"},[t("div",null,[n("총 "),t("span",null,"0"),n("건")])],-1),ut=t("div",{class:"box_gray"},[t("div",{class:"center"},"혜택 안내 영역(임시)")],-1),pt=t("div",{class:"box_gray"},[t("div",{class:"center"},"유의사항 영역(임시)")],-1);function ht(vt,o,mt,bt,a,ft){const c=m,l=p,u=h;return r(),_("div",V,[t("div",N,[t("h2",B,i(a.layout.title),1),t("div",I,[t("div",L,[t("div",S,[t("div",j,[D,e(c,{to:"javascript:void(0);",class:"btn sm c01"},{default:d(()=>[n("요금제 가입하기")]),_:1})])]),F,t("div",E,[t("div",M,[P,t("div",T,[e(l,{option:{placeholder:"+알파에서 개통 시 등록한 이름"},onInputValue:o[0]||(o[0]=s=>console.log(s))})]),A,t("div",G,[e(l,{option:{placeholder:"김알파",disabled:!0},onInputValue:o[1]||(o[1]=s=>console.log(s))})])]),t("div",$,[C,t("div",R,[e(l,{option:{placeholder:"‘-’ 없이 숫자만 입력"},onInputValue:o[2]||(o[2]=s=>console.log(s))}),U]),q,t("div",z,[e(l,{option:{value:"010-12**-56**",placeholder:"‘-’ 없이 숫자만 입력",disabled:!0},onInputValue:o[3]||(o[3]=s=>console.log(s))}),H]),t("div",J,[e(l,{option:{value:"322115",disabled:!0,placeholder:"4자리 숫자",authNum:!0},onInputValue:o[4]||(o[4]=s=>console.log(s))})]),K,O]),Q,W]),X,Y,t("div",Z,[t("ul",null,[t("li",null,[e(c,{to:"javascript:void(0);",class:"icon_link kakao"},{default:d(()=>[tt]),_:1})]),t("li",null,[e(c,{to:"javascript:void(0);",class:"icon_link url"},{default:d(()=>[st]),_:1})])])]),ot,et,nt,f(t("div",lt,[t("table",null,[it,at,t("tbody",null,[(r(!0),_(g,null,x(a.dataTable,(s,v)=>(r(),_("tr",{key:v},[t("th",ct,i(s.name),1),t("td",null,i(s.phone),1),t("td",_t,i(s.date)+" 개통",1)]))),128))])])],512),[[y,a.tableShow]]),dt,rt,e(u,{option:{type:"his",html:"<p>일시적으로 추천활동 내역을 불러올 수 없습니다<br>나중에 다시 시도해 주세요</p>"}}),e(u,{option:{type:"his",html:"<p>등록된 추천활동 내역이 없습니다</p>"}}),ut,pt])])])])}const kt=b(k,[["render",ht]]);export{kt as default};
