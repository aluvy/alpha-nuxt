import{_ as e}from"./Card.8f4c9ea3.js";import{_ as r}from"./nuxt-link.ab9ec2e5.js";import{_ as a}from"./Compare.a5cb0a89.js";import{_ as d,c as l,a as o,t as m,b as t,w as u,f,o as v,d as y}from"./entry.b6e4d86e.js";import"./logo_s_partner06.9847b9f4.js";import"./img_flag02.ffc08efe.js";const h=""+globalThis.__publicAssetsURL("images/data/img_ranking_top.jpg"),g={name:"ALFM-MA01-PG01",emits:["setLayout","openPopup"],data(){return{layout:{header:"sub",footer:"",floatMenu:"",title:"요금제 랭킹"}}},components:{Card:e,Compare:a},mounted(){this.$emit("setLayout",this.layout)}},x={class:"container"},b={class:"content",id:"content"},k={class:"title_nav"},L=f('<div class="section"><div class="ranking_top"><div class="box_yellow"><div class="txt_area"> 신학기 청소년 요금제 Top 10 <br> 요금제를 확인해 보세요! </div></div><img src="'+h+'" alt="데이터·통화 무제한 5월 알뜰폰 요금제 랭킹"></div></div>',1),A={class:"section"},C={class:"item_list ty03"},M={class:"btn_group"};function N(P,s,$,I,i,T){const n=e,c=r,_=a;return v(),l("div",x,[o("div",b,[o("h2",k,m(i.layout.title),1),L,o("div",A,[o("div",C,[t(n,{cardInfo:{type:"ty01",lanking:1,name:"plan01"}}),t(n,{cardInfo:{type:"ty01",lanking:2,name:"plan02"}}),t(n,{cardInfo:{type:"ty01",lanking:3,name:"plan03"}}),t(n,{cardInfo:{type:"ty01",name:"plan11"}}),o("div",M,[t(c,{to:"javascript:void(0);",class:"btn md c05"},{default:u(()=>[y("지금 HOT한 요금제 보러가기")]),_:1})])])]),t(_,{onOpenPopup:s[0]||(s[0]=p=>this.$emit("openPopup",p))})])])}const O=d(g,[["render",N]]);export{O as default};