import{_ as l}from"./nuxt-link.ab9ec2e5.js";import{_ as r,c as o,a as t,t as e,F as _,r as d,o as a,b as u,w as p}from"./entry.b6e4d86e.js";const h={name:"ALFM-BE01-PG01",emits:["setLayout","openPopup"],data(){return{layout:{header:"sub",footer:"",floatMenu:"",title:"<sup>+</sup>알파 유튜브 컨텐츠"},conTitle:"무제한이 9천원대! 오직 알파에서만",conDate:"2023.02.02",dataHashTag:[{to:"javascript:void(0);",tag:"우체국"},{to:"javascript:void(0);",tag:"원칩"},{to:"javascript:void(0);",tag:"셀프 개통"},{to:"javascript:void(0);",tag:"유심"}]}},mounted(){this.$emit("setLayout",this.layout)}},m={class:"container"},v={class:"content",id:"content"},y=["innerHTML"],b={class:"section"},f={class:"bsc_dtl_tit"},g={class:"tit"},w={class:"date"},x={class:"bsc_dtl_con"},L=t("div",{class:"yt_box"},[t("iframe",{src:"https://www.youtube.com/embed/xt9WafOY8d0",title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:""})],-1),T={class:"yt_tag"},B=t("div",{class:"btn_group"},[t("button",{type:"button",class:"btn md c05"},"목록보기")],-1);function M(j,k,F,H,s,D){const c=l;return a(),o("div",m,[t("div",v,[t("h2",{class:"title_nav",innerHTML:s.layout.title},null,8,y),t("div",b,[t("div",f,[t("strong",g,e(s.conTitle),1),t("span",w,e(s.conDate),1)]),t("div",x,[L,t("div",T,[t("ul",null,[(a(!0),o(_,null,d(s.dataHashTag,(n,i)=>(a(),o("li",{key:i},[u(c,{to:n.to},{default:p(()=>[t("span",null,"#"+e(n.tag),1)]),_:2},1032,["to"])]))),128))])])]),B])])])}const P=r(h,[["render",M]]);export{P as default};
