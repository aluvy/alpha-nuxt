import{_ as p}from"./nuxt-link.ab9ec2e5.js";import{_ as c}from"./Pagination.8bba8a0b.js";import{_ as l}from"./NoData.572b708a.js";import{_ as d,c as u,a as s,t as r,b as t,w as a,d as n,o as h}from"./entry.b6e4d86e.js";const m={name:"ALFM-MY03-LT00",emits:["setLayout","openPopup"],data(){return{layout:{header:"sub",footer:"",floatMenu:"",title:"내가 구매한 USIM"}}},mounted(){this.$emit("setLayout",this.layout)},components:{Pagination:c,NoData:l}},v={class:"container"},f={class:"content",id:"content"},y={class:"title_nav"},w=s("div",{class:"section"},[s("div",{class:"box_gray"},[s("ul",{class:"text_list bull"},[s("li",null,"결제 완료일을 기준으로 1개월이 지나지 않은 내역만 확인할 수 있습니다."),s("li",null,"1개월이 지난 구매 내역은 고객 정보보호를 위해 삭제되어 조회하실 수 없습니다.")])])],-1),x={class:"section"},b=s("h3",{class:"tit02"},[n("총 "),s("span",{class:"fc01"},"4"),n("건의 구매내역이 있습니다")],-1),L={class:"line_list"},g=s("span",{class:"tit ty02"},"모두의 유심, 원칩",-1),M=s("span",{class:"date"},[s("span",null,"2022.02.02"),s("span",null,"택배배송"),s("span",{class:"pc_show"},"결제금액"),s("span",{class:"pc_show"},"결제방법")],-1),N=s("span",{class:"tit ty02"},"모두의 유심, 원칩",-1),j=s("span",{class:"date"},[s("span",null,"2022.02.02"),s("span",null,"택배배송"),s("span",{class:"pc_show"},"결제금액"),s("span",{class:"pc_show"},"결제방법")],-1),$=s("span",{class:"tit ty02"},"모두의 유심, 원칩",-1),k=s("span",{class:"date"},[s("span",null,"2022.02.02"),s("span",null,"택배배송"),s("span",{class:"pc_show"},"결제금액"),s("span",{class:"pc_show"},"결제방법")],-1),B=s("span",{class:"tit ty02"},"모두의 유심, 원칩",-1),D=s("span",{class:"date"},[s("span",null,"2022.02.02"),s("span",null,"택배배송"),s("span",{class:"pc_show"},"결제금액"),s("span",{class:"pc_show"},"결제방법")],-1),P={class:"btn_group pc_hide mgt12"};function S(T,V,A,F,_,Y){const o=p,e=c,i=l;return h(),u("div",v,[s("div",f,[s("h2",y,r(_.layout.title),1),w,s("div",x,[b,s("div",L,[s("ul",null,[s("li",null,[t(o,{to:"javascript:void(0);",class:"list_con ty01"},{default:a(()=>[g,M]),_:1})]),s("li",null,[t(o,{to:"javascript:void(0);",class:"list_con ty01"},{default:a(()=>[N,j]),_:1})]),s("li",null,[t(o,{to:"javascript:void(0);",class:"list_con ty01"},{default:a(()=>[$,k]),_:1})]),s("li",null,[t(o,{to:"javascript:void(0);",class:"list_con ty01"},{default:a(()=>[B,D]),_:1})])]),s("div",P,[t(o,{to:"javascript:void(0);",role:"button",class:"btn md c05"},{default:a(()=>[n("더볼래요")]),_:1})]),t(e,{option:{pcShow:!0}})]),t(i,{option:{type:"his",html:"<p>구매하신 내역이 없습니다</p>"}})])])])}const q=d(m,[["render",S]]);export{q as default};
