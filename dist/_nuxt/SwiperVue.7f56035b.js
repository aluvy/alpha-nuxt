import{_ as y}from"./nuxt-link.ac5f26dd.js";import{_ as c}from"./SwiperCard.04e1cf07.js";import{_ as r}from"./SwiperFlow.035b4576.js";import{_ as d}from"./SwiperBnr.7e163318.js";import{_ as p,a as l,b as h}from"./SwiperShop.2f2fd42a.js";import{_ as m}from"./SwiperMainBnr.f63491de.js";import{_ as x,c as b,a as t,b as o,w as a,o as B,d as _}from"./entry.c8fdadf4.js";import"./pagination.795569d2.js";import"./swiper.2f12fe19.js";import"./autoplay.69be1282.js";import"./frontData.e7bcb1b2.js";const D={name:"GuideSwiper",emits:["setLayout","openPopup"],data(){return{layout:{header:"sub",footer:"",floatMenu:"none",title:""}}},mounted(){this.$emit("setLayout",this.layout)},components:{SwiperCard:c,SwiperFlow:r,SwiperBnr:d,SwiperNotice:p,SwiperMainBnr:m,SwiperEsim:l,SwiperShop:h},props:{frontData:Object}},N={class:"container"},g={class:"content",id:"content"},V=t("h2",{class:"title_nav"},"Guide",-1),k=t("div",{class:"page_info"},"swiper Vue",-1),L={class:"section ty02"},j={class:"tit_wrap"},C=t("h3",{class:"tit03"},"내가 찜한 요금제 (7개)",-1),E={class:"section ty02"},G=t("h3",{class:"tit02"},"card Swiper (3개)",-1),M={class:"section ty02"},F=t("h3",{class:"tit02"},"card Swiper (2개)",-1),T={class:"section"},$={class:"tit_wrap"},O=t("h3",{class:"tit03"},"YouTube",-1),P={class:"section"},Y=t("h3",{class:"tit03"},"다른 이벤트도 둘러보세요",-1),q={class:"section"},z=t("h3",{class:"tit03"},"인스타그램",-1),A={class:"section"},H=t("h3",{class:"tit02"},"flow Swiper",-1),I={class:"section"},J=t("h3",{class:"tit02"},"banner Swiper",-1),K={class:"section"},Q=t("h3",{class:"tit02"},"Notice Swiper",-1),R={style:{width:"28rem"}},U={class:"section",style:{background:"#f1f3f4"}},W=t("h3",{class:"tit02"},"main Swiper",-1),X=t("br",null,null,-1),Z={class:"section"},tt=t("h3",{class:"tit02"},"내 휴대폰 설정에서 개통하는 방법",-1),ot=t("strong",null,"아이폰",-1),st=t("strong",null,"갤럭시(안드로이드)",-1),et={class:"section"},nt=t("h3",{class:"tit02"},"LG유플러스 상암동 누리꿈점",-1),it={style:{width:"26.6rem"}};function at(_t,ct,s,rt,dt,pt){const n=y,e=c,u=r,w=d,f=p,v=m,i=l,S=h;return B(),b("div",N,[t("div",g,[V,k,t("div",L,[t("div",j,[C,o(n,{to:"javascript:void(0);",class:"more"},{default:a(()=>[_("더보기")]),_:1})]),o(e,{data:s.frontData.swiper.rateplan,option:{type:"rateplan"}},null,8,["data"])]),t("div",E,[G,o(e,{data:s.frontData.swiper.rateplan3,option:{type:"rateplan"}},null,8,["data"])]),t("div",M,[F,o(e,{data:s.frontData.swiper.rateplan2,option:{type:"rateplan"}},null,8,["data"])]),t("div",T,[t("div",$,[O,o(n,{to:"javascript:void(0);",class:"more"},{default:a(()=>[_("더보기")]),_:1})]),o(e,{data:s.frontData.swiper.youtube,option:{type:"youtube"}},null,8,["data"])]),t("div",P,[Y,o(e,{data:s.frontData.swiper.event,option:{type:"event"}},null,8,["data"])]),t("div",q,[z,o(e,{data:s.frontData.swiper.instagram,option:{type:"instagram"}},null,8,["data"])]),t("div",A,[H,o(u)]),t("div",I,[J,o(w)]),t("div",K,[Q,t("div",R,[o(f)])]),t("div",U,[W,o(v),X]),t("div",Z,[tt,ot,o(i,{option:{type:"ios"}}),st,o(i,{option:{type:"aos"}})]),t("div",et,[nt,t("div",it,[o(S)])])])])}const Bt=x(D,[["render",at]]);export{Bt as default};