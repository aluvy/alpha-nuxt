import{_ as e,c as i,a as t,t as c,o as l}from"./entry.b6e4d86e.js";const _={name:"ALFM-CS05-PO00",emits:["setLayout","openAlert"],data(){return{layout:{header:"sub",footer:"none",floatMenu:"none",title:"1:1 문의하기 > 본인인증"}}},mounted(){this.$emit("setLayout",this.layout)}},d={class:"container"},a={class:"content",id:"content"},r={class:"title_nav"},b={class:"section"},u=t("h3",{class:"tit02"},"인증번호 발송 안내",-1),p={class:"btn_group"},C={class:"section"},h=t("h3",{class:"tit02"},"고객명 입력 안내",-1),m={class:"btn_group"},v={class:"section"},S=t("h3",{class:"tit02"},"휴대폰 번호 입력 안내",-1),O={class:"btn_group"},P={class:"section"},$=t("h3",{class:"tit02"},"인증 완료 안내",-1),A={class:"btn_group"},y={class:"section"},f=t("h3",{class:"tit02"},"인증 번호 불일치 안내",-1),k={class:"btn_group"};function g(B,s,D,E,n,L){return l(),i("div",d,[t("div",a,[t("h2",r,c(n.layout.title),1),t("div",b,[u,t("div",p,[t("button",{type:"button",class:"btn md c03",id:"btn_CS05PO00",onClick:s[0]||(s[0]=o=>{this.$emit("openAlert",["CS05PO00","btn_CS05PO00",101])})},"Alert")])]),t("div",C,[h,t("div",m,[t("button",{type:"button",class:"btn md c03",id:"btn_CS05PO00B",onClick:s[1]||(s[1]=o=>{this.$emit("openAlert",["CS05PO00B","btn_CS05PO00B",101])})},"Alert")])]),t("div",v,[S,t("div",O,[t("button",{type:"button",class:"btn md c03",id:"btn_CS05PO00C",onClick:s[2]||(s[2]=o=>{this.$emit("openAlert",["CS05PO00C","btn_CS05PO00C",101])})},"Alert")])]),t("div",P,[$,t("div",A,[t("button",{type:"button",class:"btn md c03",id:"btn_CS05PO00D",onClick:s[3]||(s[3]=o=>{this.$emit("openAlert",["CS05PO00D","btn_CS05PO00D",101])})},"Alert")])]),t("div",y,[f,t("div",k,[t("button",{type:"button",class:"btn md c03",id:"btn_CS05PO00E",onClick:s[4]||(s[4]=o=>{this.$emit("openAlert",["CS05PO00E","btn_CS05PO00E",101])})},"Alert")])])])])}const M=e(_,[["render",g]]);export{M as default};
