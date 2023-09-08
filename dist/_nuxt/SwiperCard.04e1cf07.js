import{_ as y}from"./nuxt-link.ac5f26dd.js";import{N as b,P as S}from"./pagination.795569d2.js";import{S as k,a as x}from"./swiper.2f12fe19.js";import{_ as B,i as v,o as l,h as _,w as r,c as g,r as F,a as t,t as i,g as u,b as L,F as C,I as E}from"./entry.c8fdadf4.js";const j={name:"SwiperCard",data(){return{modules:[b,S],swiper:Object}},methods:{onInit(e){setTimeout(()=>{this.isBeginning(e),this.isEnd(e)},10),this.swiper=e},onSlideChange:function(e){const c=e.el;if(!document.querySelector("html").classList.contains("pc"))return;const h=e.width,p=e.virtualSize,o=e.translate,a=20;p+o-a>h&&(e.activeIndex!=0?c.classList.add("activeIndex"):c.classList.remove("activeIndex")),this.isBeginning(e),this.isEnd(e)},isBeginning(e){const c=e.el;e.isBeginning?c.classList.add("isBeginning"):c.classList.remove("isBeginning")},isEnd(e){const c=e.el;e.isEnd?c.classList.add("isEnd"):c.classList.remove("isEnd")},focus(e){this.swiper.slideTo(e)}},props:{data:Object,option:Object},components:{Swiper:k,SwiperSlide:x}},T={class:"plan_item"},I={class:"card_top"},N={class:"partner"},O=["src","alt"],P={class:"star"},V=t("span",{class:"blind"},"별점",-1),M={class:"score"},z={class:"card_mid"},H={class:"plan_tit"},W={class:"plan_tit_sub"},q={class:"combi"},D={class:"combi_inner"},A={class:"period"},G={key:1,class:"thum_item"},J={class:"thum_img"},K=["src","title"],Q=t("span",{class:"blind"},"이벤트 상세페이지 이동",-1),R={class:"thum_item no_border"},U={class:"thum_img"},X=["src","alt"],Y={class:"thum_con"},Z={class:"thum_item insta_thum"},$={class:"thum_img"},tt=["src","alt"],st={class:"thum_con"},et={class:"sns_post"},it={class:"thum_item"},nt={class:"thum_img"},ot=["src","alt"],ct={class:"thum_con"},lt={class:"sns_post"},at=t("div",{class:"swiper-navigation"},[t("div",{class:"left"},[t("button",{type:"button",class:"swiper-button-prev"})]),t("div",{class:"right"},[t("button",{type:"button",class:"swiper-button-next"})])],-1);function rt(e,c,n,h,p,o){const a=y,f=v("swiper-slide"),w=v("swiper");return l(),_(w,{class:E(["swiper cardSwiper",{ty02:n.option.type=="youtube"||n.option.type=="naver",ty03:n.option.type=="instagram"}]),modules:p.modules,slidesPerView:"auto",spaceBetween:12,grabCursor:!0,observer:!0,observeParents:!0,freeMode:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},onSwiper:o.onInit,onSlideChange:o.onSlideChange,onBeforeTransitionStart:o.isEnd},{default:r(()=>[(l(!0),g(C,null,F(n.data,(s,d)=>(l(),_(f,{key:d},{default:r(()=>[n.option.type=="rateplan"?(l(),_(a,{key:0,to:"javascript:void(0);",onFocus:m=>o.focus(d)},{default:r(()=>[t("div",T,[t("div",I,[t("div",N,[t("img",{src:s.img,alt:s.alt},null,8,O),t("div",P,[V,t("span",M,i(s.score),1)])])]),t("div",z,[t("span",H,i(s.title),1),t("strong",W,i(s.desc),1)]),t("div",q,[t("div",D,[t("strong",null,i(s.price),1),t("span",A,i(s.priceOption),1)])])])]),_:2},1032,["onFocus"])):u("",!0),n.option.type=="youtube"?(l(),g("div",G,[t("div",J,[t("iframe",{src:s.url,title:s.videoTitle,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:""},null,8,K)]),L(a,{to:"javascript:void(0);",class:"thum_con",onFocus:m=>o.focus(d)},{default:r(()=>[t("strong",null,i(s.title),1),t("span",null,i(s.date),1)]),_:2},1032,["onFocus"])])):u("",!0),n.option.type=="event"?(l(),_(a,{key:2,to:"javascript:void(0);",class:"link_list",onFocus:m=>o.focus(d)},{default:r(()=>[Q,t("div",R,[t("div",U,[t("img",{src:s.img,alt:s.alt},null,8,X)]),t("div",Y,[t("strong",null,i(s.title),1)])])]),_:2},1032,["onFocus"])):u("",!0),n.option.type=="instagram"?(l(),_(a,{key:3,to:"javascript:void(0);",class:"link_list",onFocus:m=>o.focus(d)},{default:r(()=>[t("div",Z,[t("div",$,[t("img",{src:s.img,alt:s.alt},null,8,tt)]),t("div",st,[t("ul",et,[t("li",null,i(s.id),1),t("li",null,i(s.data),1)])])])]),_:2},1032,["onFocus"])):u("",!0),n.option.type=="naver"?(l(),_(a,{key:4,to:"javascript:void(0);",class:"link_list",onFocus:m=>o.focus(d)},{default:r(()=>[t("div",it,[t("div",nt,[t("img",{src:s.img,alt:s.alt},null,8,ot)]),t("div",ct,[t("strong",null,i(s.title),1),t("ul",lt,[t("li",null,i(s.date),1),t("li",null,i(s.story),1)])])])]),_:2},1032,["onFocus"])):u("",!0)]),_:2},1024))),128)),at]),_:1},8,["class","modules","navigation","onSwiper","onSlideChange","onBeforeTransitionStart"])}const pt=B(j,[["render",rt]]);export{pt as _};