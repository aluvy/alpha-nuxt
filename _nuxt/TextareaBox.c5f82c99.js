import{_ as d,o as l,c as o,a as u,t as h,g as c,I as r}from"./entry.b6e4d86e.js";const m={name:"TextareaBox",emits:["textareaValue","textareaSubmit"],data(){return{isActive:!1,isFocus:!1,value:"",maxlength:0,count:0}},watch:{isFocus(){this.data.readonly&&(this.isFocus=!1)},count(t){this.count=t.toLocaleString("ko-KR")},maxlength(t){this.maxlength=t.toLocaleString("ko-KR")}},methods:{input(){this.value=this.$refs.textarea.value,this.count=this.value.length,this.isActive=this.count>0,this.data.type=="ty02"&&this.autoHeight();const t={isActive:this.isActive,value:this.value,count:this.count};this.$emit("textareaValue",t)},submit(){const t={isActive:this.isActive,value:this.value,count:this.count};this.$emit("textareaSubmit",t)},autoHeight(){const t=this.$refs.textarea;t.style.height="auto";let e=t.scrollHeight;e<48&&(e=48),t.style.height=`${e}px`}},mounted(){this.maxlength=this.data.maxlength,setTimeout(()=>{this.data.type=="ty02"&&this.autoHeight()},10),!(this.data.value==null||this.data.value=="")&&(this.value=this.data.value,this.count=this.value.length,this.count>0&&(this.isActive=!0))},props:{data:Object}},v=["placeholder","rows","maxlength","disabled","readonly","value"],x={key:0,class:"byte_check"},g={class:"count"},f={class:"total"},b=["disabled"];function _(t,e,a,y,s,n){return l(),o("div",{class:r(["textarea_box",{ty02:a.data.type=="ty02",disabled:a.data.disabled,on:s.isActive,focus:s.isFocus}])},[u("textarea",{class:"textarea",placeholder:a.data.placeholder,rows:a.data.rows,maxlength:a.data.maxlength,disabled:a.data.disabled,readonly:a.data.readonly,value:s.value,ref:"textarea",onInput:e[0]||(e[0]=(...i)=>n.input&&n.input(...i)),onFocus:e[1]||(e[1]=i=>s.isFocus=!0),onBlur:e[2]||(e[2]=i=>s.isFocus=!1)},null,40,v),a.data.byteCheck?(l(),o("div",x,[u("span",g,h(s.count),1),u("span",f,h(s.maxlength),1)])):c("",!0),a.data.button?(l(),o("button",{key:1,type:"button",onClick:e[3]||(e[3]=(...i)=>n.submit&&n.submit(...i)),disabled:s.count==0},h(a.data.buttonValue),9,b)):c("",!0)],2)}const A=d(m,[["render",_]]);export{A as _};