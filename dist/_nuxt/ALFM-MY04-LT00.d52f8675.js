import{_ as u}from"./nuxt-link.ac5f26dd.js";import{_ as c}from"./Card.0a37870a.js";import{_ as i}from"./NoData.7397e912.js";import{_ as p}from"./Compare.26159122.js";import{_ as f,c as h,a as t,t as y,b as o,w as _,d as s,o as b}from"./entry.c8fdadf4.js";import"./logo_s_partner06.07311505.js";import"./img_flag02.57559f1b.js";const v={name:"ALFM-MY04-LT00",emits:["setLayout","openPopup"],data(){return{layout:{header:"sub",footer:"",floatMenu:"",title:"내가 찜한 요금제"}}},mounted(){this.$emit("setLayout",this.layout)},components:{Card:c,NoData:i,Compare:p}},x={class:"container"},L={class:"content",id:"content"},N={class:"title_nav"},C={class:"section"},M={class:"box_yellow"},$={class:"my_box"},k=t("p",null,[s(" 찜한 요금제는 "),t("span",null,[s("최대 30일 이내 "),t("br"),s(" 50개")]),s("까지 유지됩니다. ")],-1),w={class:"section"},B=t("button",{type:"button",class:"btn_text ty02"},"전체삭제하기",-1),D={class:"item_list ty03"},P={class:"btn_group"};function T(V,e,g,j,r,A){const n=u,a=c,d=i,l=p;return b(),h("div",x,[t("div",L,[t("h2",N,y(r.layout.title),1),t("div",C,[t("div",M,[t("div",$,[k,o(n,{to:"javascript:void(0);",role:"button",class:"btn sm c01"},{default:_(()=>[s("요금제 전체 보러가기")]),_:1})])])]),t("div",w,[B,t("div",D,[o(a,{cardInfo:{type:"ty01",name:"prd1",detail:!1}}),o(a,{cardInfo:{type:"ty01",name:"prd2",detail:!1}}),t("div",P,[o(n,{to:"javascript:void(0);",role:"button",class:"btn md c05"},{default:_(()=>[s("더볼래요")]),_:1})])]),o(d,{option:{type:"his",html:"<p>찜한 요금제가 없습니다</p>"}})]),o(l,{onOpenPopup:e[0]||(e[0]=m=>this.$emit("openPopup",m))})])])}const z=f(v,[["render",T]]);export{z as default};