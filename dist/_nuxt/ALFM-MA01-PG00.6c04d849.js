import{_ as f}from"./Lottie.75e41d84.js";import{_ as L}from"./nuxt-link.ab9ec2e5.js";import{_ as b}from"./SwiperMainBnr.caed2c38.js";import{_ as g}from"./SwiperCard.8624a831.js";import{_ as y}from"./Tag.c60b82b5.js";import{_ as w}from"./Card.8f4c9ea3.js";import{_ as A}from"./SwiperFlow.3e1ae653.js";import{_ as k}from"./Compare.a5cb0a89.js";import{_ as G,c as d,a as t,b as s,w as a,I as m,d as i,o as p,g as u}from"./entry.b6e4d86e.js";import{_ as I}from"./logo_s_partner06.9847b9f4.js";import{_ as M}from"./logo_s_partner21.1aa5bdf6.js";import{_ as T}from"./logo_s_partner13.d41cac8c.js";import"./pagination.83542e02.js";import"./swiper.6c7e7ca1.js";import"./autoplay.1a1b3614.js";import"./frontData.e7bcb1b2.js";import"./img_flag02.ffc08efe.js";const S=""+globalThis.__publicAssetsURL("images/data/img_main_bnr04.png"),N=""+globalThis.__publicAssetsURL("images/data/img_main_bnr03.png"),V=""+globalThis.__publicAssetsURL("images/data/img_main_bnr02.png"),D={name:"ALFM-MA01-PG00",emits:["setLayout","openPopup"],data(){return{layout:{header:"main",footer:"",floatMenu:"",title:""},goPlan:!1,checked:"",partnerActive:[!0,!1,!1]}},watch:{checked(){this.goPlan=!0}},methods:{nextPartner(){let c,e=this.partnerActive.length;this.partnerActive.forEach((l,v)=>{l==!0&&(c=v)}),c++,c==e&&(c=0),this.partnerActive=this.partnerActive.map(l=>!1),this.partnerActive[c]=!0}},mounted(){this.$emit("setLayout",this.layout),this.$emit("openPopup",["notice","btn_notice",101]),setInterval(()=>{this.nextPartner()},5e3)},components:{Lottie:f,Card:w,SwiperMainBnr:b,SwiperCard:g,SwiperFlow:A,Tag:y,Compare:k},props:{frontData:Object}},F={class:"container"},U={class:"content main",id:"content"},R={class:"section main_top"},E=t("strong",null,[i("나에게 "),t("span",null,"꼭"),i(" 맞는"),t("br"),i(" 저렴한 요금제 찾기")],-1),O=t("em",null,"바로가기",-1),z={class:"section"},$={class:"tit_wrap"},q=t("h3",{class:"tit03"},"내가 찜한 요금제",-1),H={class:"section"},J={class:"tit_wrap"},K=t("h3",{class:"tit03"},"최근 본 요금제",-1),Q={class:"section"},W={class:"tit_wrap"},X=t("h3",{class:"tit03"},"추천 요금제를 만나보세요",-1),Y={class:"item_list ty03"},Z=t("div",{class:"btn_group"},[t("button",{type:"button",class:"btn md c05"},"더볼래요")],-1),tt={class:"section"},st=t("div",{class:"tit_wrap"},[t("h3",{class:"tit03"},"주요서비스를 만나보세요")],-1),et={class:"main_service"},ot={class:"svc01"},at={class:"svc02"},nt={class:"svc03"},it={class:"section"},_t=t("div",{class:"tit_wrap"},[t("h3",{class:"tit03"},"데이터별로 추천해드릴께요")],-1),ct={class:"main_data_select"},lt={class:"item_list03"},rt={class:"radio_item ty01"},dt=t("label",{for:"data_select_01"},"데이터 무제한",-1),pt={class:"radio_item ty01"},mt=t("label",{for:"data_select_02"},"50~100GB",-1),ut={class:"radio_item ty01"},vt=t("label",{for:"data_select_03"},"15~50GB",-1),ht={class:"radio_item ty01"},ft=t("label",{for:"data_select_04"},"5~15GB",-1),bt={class:"radio_item ty01"},gt=t("label",{for:"data_select_05"},"1~5GB",-1),yt={class:"radio_item ty01"},wt=t("label",{for:"data_select_06"},"1GB 미만",-1),At={class:"btn_group"},kt=["disabled"],xt={class:"section"},jt=t("div",{class:"tit_wrap"},[t("h3",{class:"tit03"},"당신에게 필요한 정보를 모았어요")],-1),Ct={class:"main_bnr_wrap"},Pt={class:"bnr_area"},Bt=t("img",{src:S,alt:"충전하여 사용하는 충전형 요금제 상담받자!"},null,-1),Lt={class:"bnr_area"},Gt=t("img",{src:N,alt:"알뜰폰 + TV + 인터넷 올인원 결합 혜택"},null,-1),It={class:"bnr_area"},Mt=t("img",{src:V,alt:"U+알뜰폰, 우체국에서 상담받고 개통하자!"},null,-1),Tt=t("div",{class:"btn_group"},[t("button",{type:"button",class:"btn md c05"},"더볼래요")],-1),St={class:"section"},Nt={class:"tit_wrap"},Vt=t("h3",{class:"tit03"},[i("함께하는 파트너사를 "),t("br",{class:"pc_hide"}),i("만나보세요")],-1),Dt={class:"main_partner"},Ft=t("div",{class:"partner"},[t("strong",null,"프리티"),t("div",{class:"star"},[t("span",{class:"blind"},"별점"),t("span",{class:"score"},"4.7")]),t("img",{src:I,alt:"프리티"})],-1),Ut={key:0},Rt=t("div",{class:"partner"},[t("strong",null,"티플러스"),t("div",{class:"star"},[t("span",{class:"blind"},"별점"),t("span",{class:"score"},"3.8")]),t("img",{src:M,alt:"티플러스"})],-1),Et={key:0},Ot=t("div",{class:"partner"},[t("strong",null,"스마텔"),t("div",{class:"star"},[t("span",{class:"blind"},"별점"),t("span",{class:"score"},"4.4")]),t("img",{src:T,alt:"스마텔"})],-1),zt={key:0};function $t(c,e,l,v,n,qt){const x=f,o=L,j=b,h=g,C=y,r=w,P=A,B=k;return p(),d("div",F,[t("div",U,[t("div",R,[s(o,{to:"javascript:void(0);",class:"link_plan"},{default:a(()=>[E,O,t("i",null,[s(x,{name:"mainChar"})])]),_:1}),s(o,{to:"javascript:void(0);",class:"link_ranking"},{default:a(()=>[i("3월 알파 요금제 랭킹 보기")]),_:1}),s(j)]),t("div",z,[t("div",$,[q,s(o,{to:"javascript:void(0);",class:"more"},{default:a(()=>[i("더보기")]),_:1})]),s(h,{data:l.frontData.swiper.rateplan,option:{type:"rateplan"}},null,8,["data"])]),t("div",H,[t("div",J,[K,s(o,{to:"javascript:void(0);",class:"more"},{default:a(()=>[i("더보기")]),_:1})]),s(h,{data:l.frontData.swiper.rateplan3,option:{type:"rateplan"}},null,8,["data"])]),t("div",Q,[t("div",W,[X,s(o,{to:"javascript:void(0);",class:"more"},{default:a(()=>[i("전체보기")]),_:1})]),s(C,{data:l.frontData.tag.recom,option:{type:"default",multi:!1}},null,8,["data"]),t("div",Y,[s(r,{cardInfo:{type:"ty01",name:"plan01"}}),s(r,{cardInfo:{type:"ty01",name:"plan02"}}),s(r,{cardInfo:{type:"ty01",name:"plan03"}}),s(r,{cardInfo:{type:"ty01",name:"plan04"}}),s(r,{cardInfo:{type:"ty01",name:"plan05"}}),Z])]),t("div",tt,[st,t("ul",et,[t("li",ot,[s(o,{to:"javascript:void(0);"},{default:a(()=>[i("결합 요금제")]),_:1})]),t("li",at,[s(o,{to:"javascript:void(0);"},{default:a(()=>[i("친구 초대")]),_:1})]),t("li",nt,[s(o,{to:"javascript:void(0);"},{default:a(()=>[i("바로배송")]),_:1})])])]),t("div",it,[_t,t("div",ct,[t("div",lt,[t("ul",null,[t("li",null,[t("div",rt,[t("input",{type:"radio",id:"data_select_01",name:"data_select",onChange:e[0]||(e[0]=_=>n.checked=!0)},null,32),dt])]),t("li",null,[t("div",pt,[t("input",{type:"radio",id:"data_select_02",name:"data_select",onChange:e[1]||(e[1]=_=>n.checked=!0)},null,32),mt])]),t("li",null,[t("div",ut,[t("input",{type:"radio",id:"data_select_03",name:"data_select",onChange:e[2]||(e[2]=_=>n.checked=!0)},null,32),vt])]),t("li",null,[t("div",ht,[t("input",{type:"radio",id:"data_select_04",name:"data_select",onChange:e[3]||(e[3]=_=>n.checked=!0)},null,32),ft])]),t("li",null,[t("div",bt,[t("input",{type:"radio",id:"data_select_05",name:"data_select",onChange:e[4]||(e[4]=_=>n.checked=!0)},null,32),gt])]),t("li",null,[t("div",yt,[t("input",{type:"radio",id:"data_select_06",name:"data_select",onChange:e[5]||(e[5]=_=>n.checked=!0)},null,32),wt])])])]),t("div",At,[t("button",{type:"button",class:"btn md c03",disabled:n.goPlan==!1},"요금제 보러가기",8,kt)])])]),t("div",xt,[jt,t("div",Ct,[t("div",Pt,[s(o,{to:"javascript:void(0);"},{default:a(()=>[Bt]),_:1})]),t("div",Lt,[s(o,{to:"javascript:void(0);"},{default:a(()=>[Gt]),_:1})]),t("div",It,[s(o,{to:"javascript:void(0);"},{default:a(()=>[Mt]),_:1})])]),Tt]),t("div",St,[t("div",Nt,[Vt,s(o,{to:"javascript:void(0);",class:"more"},{default:a(()=>[i("전체보기")]),_:1})]),t("div",Dt,[t("ol",null,[t("li",{class:m({on:n.partnerActive[0]})},[s(o,{to:"javascript:void(0);"},{default:a(()=>[Ft,n.partnerActive[0]?(p(),d("p",Ut,"통신요금을 아끼고 속도도 빨라서 매우 만족하고 있습니다. 굳이 비싼 요금제를 사용할 필요없다는 생각이네요. 가족들에게도 추천했어요.")):u("",!0)]),_:1})],2),t("li",{class:m({on:n.partnerActive[1]})},[s(o,{to:"javascript:void(0);"},{default:a(()=>[Rt,n.partnerActive[1]?(p(),d("p",Et,"통신요금을 아끼고 속도도 빨라서 매우 만족하고 있습니다. 굳이 비싼 요금제를 사용할 필요없다는 생각이네요. 가족들에게도 추천했어요.")):u("",!0)]),_:1})],2),t("li",{class:m({on:n.partnerActive[2]})},[s(o,{to:"javascript:void(0);"},{default:a(()=>[Ot,n.partnerActive[2]?(p(),d("p",zt,"통신요금을 아끼고 속도도 빨라서 매우 만족하고 있습니다. 굳이 비싼 요금제를 사용할 필요없다는 생각이네요. 가족들에게도 추천했어요.")):u("",!0)]),_:1})],2)]),s(P)])]),s(B,{onOpenPopup:e[6]||(e[6]=_=>this.$emit("openPopup",_))})])])}const ls=G(D,[["render",$t]]);export{ls as default};