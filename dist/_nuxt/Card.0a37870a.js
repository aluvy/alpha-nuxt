import{_ as V}from"./nuxt-link.ac5f26dd.js";import{_ as T,i as f,o as c,c as _,a as s,t as x,g as p,d as n,b as a,w as e,I as d,T as C,F as L,f as r}from"./entry.c8fdadf4.js";import{_ as u}from"./logo_s_partner06.07311505.js";import{_ as U,a as A}from"./img_flag02.57559f1b.js";const h=""+globalThis.__publicAssetsURL("images/component/img_gifts01.png"),v=""+globalThis.__publicAssetsURL("images/component/img_gifts02.png"),k=""+globalThis.__publicAssetsURL("images/component/img_gifts03.png"),y=""+globalThis.__publicAssetsURL("images/component/img_gifts04.png"),I=""+globalThis.__publicAssetsURL("images/component/img_gifts05.png"),B=""+globalThis.__publicAssetsURL("images/component/img_flag06.png"),N=""+globalThis.__publicAssetsURL("images/component/img_flag05.png"),R={name:"Card",data(){return{flag:[!1,!1],tooltip:[!1,!1],detail:!1}},mounted(){this.detail=this.cardInfo.detail?this.cardInfo.detail:this.detail},props:{cardInfo:Object}},G={key:0,class:"plan_item"},j={key:0,class:"ranking"},E=r('<div class="card_top"><div class="partner"><img src="'+u+'" alt="프리티"><div class="star"><span class="blind">별점</span><span class="score">4.5</span></div></div><div class="beft"><img src="'+U+'" alt="특가"><img src="'+A+'" alt="+알파 only"></div></div>',1),F={class:"card_mid"},w=s("span",{class:"plan_tit"},"데이터안심15G+",-1),z={class:"plan_tit_sub"},D=r('<div class="plan_info"><span class="phone"><span class="blind">통화량</span>100분</span><span class="message"><span class="blind">문자량</span>100건</span><span class="cellular"><span class="blind">통신기술</span>LTE</span></div>',1),M=s("div",{class:"tooltip_content"}," 데이터 소진 시 유튜브 화질 1080p로 원활히 볼 수 있어요 ",-1),P={class:"combi"},S={class:"combi_inner"},O=s("span",{class:"fc01"},"결합하면",-1),q=s("span",{class:"period"},"6개월 이후 38,900원",-1),H=s("div",{class:"tooltip_content"}," LG U+ 인터넷/IPTV 신규 가입 + 알뜰폰 결합 시, 최대 118만원의 혜택을 받을 수 있어요! ",-1),J={class:"paln_badge"},K=s("span",{class:"blind"},"찜하기",-1),Q={class:"gift_box"},W=r('<div class="bag_list"><ul><li><div class="bag_git"><img src="'+h+'" alt="스타벅스 로고"></div></li><li><div class="bag_git"><img src="'+v+'" alt="신세계 로고"></div></li><li><div class="bag_git"><img src="'+k+'" alt="선물상자 로고"></div></li><li><div class="bag_git"><img src="'+y+'" alt="네이버페이 로고"></div></li><li><div class="bag_git"><img src="'+I+'" alt="데이터 로고"></div></li><li><div class="bag_git"> +2 </div></li></ul></div>',1),X={class:"acc_box"},Y=["aria-expanded"],Z=s("span",null,"3",-1),$={key:0,role:"region"},ss=s("ul",{class:"acc_contents"},[s("li",null,[s("div",{class:"bag_git"},[s("img",{src:k,alt:"선물상자 로고"})]),s("span",null,"일반 유심 무료 발송")]),s("li",null,[s("div",{class:"bag_git"},[s("img",{src:y,alt:"네이버페이 로고"})]),s("span",null,"네이버페이 5,000P 제공")]),s("li",null,[s("div",{class:"bag_git"},[s("img",{src:v,alt:"신세계 로고"})]),s("span",null,"신세계상품권 10,000원권 증정")]),s("li",null,[s("div",{class:"bag_git"},[s("img",{src:h,alt:"스타벅스 로고"})]),s("span",null,"스타벅스 아메리카노 기프티콘 2잔 제공")]),s("li",null,[s("div",{class:"bag_git"},[s("img",{src:v,alt:"신세계 로고"})]),s("span",null,"신세계 상품권 1만원")]),s("li",null,[s("div",{class:"bag_git"},[s("img",{src:I,alt:"데이터 로고"})]),s("span",null,"NFC 유심 50% 할인")])],-1),ts=[ss],os={key:1,class:"plan_item"},is={class:"card_top"},ls=r('<div class="partner"><img src="'+u+'" alt="프리티"><div class="star"><span class="blind">별점</span><span class="score">4.5</span></div></div>',1),ns={class:"beft siz_l"},as={key:0,src:B,alt:"+알파추천"},es={key:1,src:N,alt:"+알파추천"},cs={class:"card_mid"},_s={class:"plan_tit_sub"},ds=r('<div class="plan_info"><span class="phone"><span class="blind">통화량</span>100분</span><span class="message"><span class="blind">문자량</span>100건</span><span class="cellular"><span class="blind">통신기술</span>LTE</span></div>',1),ps=s("div",{class:"tooltip_content"}," 데이터 소진 시 유튜브 화질 1080p로 원활히 볼 수 있어요 ",-1),rs={class:"combi"},gs=s("div",{class:"combi_inner"},[s("strong",null,"월 10,890원"),s("span",{class:"period"},"6개월 이후 38,900원")],-1),ms=s("div",{class:"choice"},"22,521명이 선택했어요",-1);function vs(bs,o,i,fs,t,us){const g=f("v-btn"),m=f("v-tooltip"),b=V;return c(),_(L,null,[i.cardInfo.type=="ty01"?(c(),_("div",G,[i.cardInfo.lanking?(c(),_("div",j,[s("strong",null,x(i.cardInfo.lanking)+"위",1)])):p("",!0),E,s("div",F,[w,s("strong",z,[n(" 월 11GB + 매일 2GB + 3Mbps "),a(g,{id:`${i.cardInfo.name}-1`,class:d(["btn_tooltip",{on:t.tooltip[0]}]),title:"툴팁",onClick:o[0]||(o[0]=l=>t.tooltip[0]=!t.tooltip[0])},{default:e(()=>[n("요금제 툴팁")]),_:1},8,["id","class"])]),D]),a(m,{modelValue:t.tooltip[0],"onUpdate:modelValue":o[1]||(o[1]=l=>t.tooltip[0]=l),activator:`#${i.cardInfo.name}-1`,location:"top",offset:"0","scroll-strategy":"close","open-on-hover":!1,"no-click-animation":"",contained:""},{default:e(()=>[M]),_:1},8,["modelValue","activator"]),s("div",P,[s("div",S,[s("strong",null,[a(g,{id:`${i.cardInfo.name}-2`,class:d(["btn_tooltip",{on:t.tooltip[1]}]),title:"툴팁",onClick:o[2]||(o[2]=l=>t.tooltip[1]=!t.tooltip[1])},{default:e(()=>[n("요금제 툴팁")]),_:1},8,["id","class"]),O,n(" 월 10,890원 ")]),q]),a(b,{to:"javascript:void(0);",class:"btn sm c02"},{default:e(()=>[n("자세히보기")]),_:1})]),a(m,{modelValue:t.tooltip[1],"onUpdate:modelValue":o[3]||(o[3]=l=>t.tooltip[1]=l),activator:`#${i.cardInfo.name}-2`,location:"top",offset:"0","scroll-strategy":"close","open-on-hover":!1,"no-click-animation":"",contained:""},{default:e(()=>[H]),_:1},8,["modelValue","activator"]),s("div",{class:d(["card_bot",{on:t.detail}])},[s("div",J,[s("button",{type:"button",class:d(["btn bag c01",{on:t.flag[0]}]),onClick:o[4]||(o[4]=l=>t.flag[0]=!t.flag[0])},[K,n("480")],2),s("button",{type:"button",class:d(["btn bag c02",{on:t.flag[1]}]),onClick:o[5]||(o[5]=l=>t.flag[1]=!t.flag[1])},"비교하기",2)]),s("div",Q,[W,s("div",X,[s("button",{type:"button","aria-expanded":t.detail,class:"btn_acc",onClick:o[6]||(o[6]=l=>t.detail=!t.detail)},[n("사은품 최대 "),Z,n("개")],8,Y)])])],2),a(C,{name:"cardDetail"},{default:e(()=>[t.detail?(c(),_("div",$,ts)):p("",!0)]),_:1})])):p("",!0),i.cardInfo.type=="ty02"?(c(),_("div",os,[s("div",is,[ls,s("div",ns,[i.cardInfo.flag=="recom"?(c(),_("img",as)):i.cardInfo.flag=="best"?(c(),_("img",es)):p("",!0)])]),s("div",cs,[s("strong",_s,[n(" 월 11GB + 매일 2GB + 3Mbps "),a(g,{id:`${i.cardInfo.name}-1`,ref:`${i.cardInfo.name}-1`,class:d(["btn_tooltip",{on:t.tooltip[2]}]),title:"툴팁",onClick:o[7]||(o[7]=l=>t.tooltip[2]=!t.tooltip[2])},{default:e(()=>[n("툴팁")]),_:1},8,["id","class"])]),ds]),a(m,{modelValue:t.tooltip[2],"onUpdate:modelValue":o[8]||(o[8]=l=>t.tooltip[2]=l),activator:`#${i.cardInfo.name}-1`,location:"top",offset:"0","scroll-strategy":"close","open-on-hover":!1,"no-click-animation":"",contained:""},{default:e(()=>[ps]),_:1},8,["modelValue","activator"]),s("div",rs,[gs,a(b,{to:"javascript:void(0);",class:"btn sm c02"},{default:e(()=>[n("자세히보기")]),_:1}),ms])])):p("",!0)],64)}const Vs=T(R,[["render",vs]]);export{Vs as _};