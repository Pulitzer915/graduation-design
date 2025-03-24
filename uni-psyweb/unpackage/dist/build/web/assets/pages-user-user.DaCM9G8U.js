var t,e,i,a,l,s,A,o,n,r;import{o as u,c as d,w as c,d as h,v as p,y as f,n as g,k as m,z as v,a as y,A as b,B as S,b as x,i as w,C as k,D as C,e as _,F as B,g as N,x as D,s as I,p as $,E as z,l as R,u as H}from"./index-D_t6mnig.js";import{m as M,a as U,f as E,p as G,d as T,e as O,t as F,r as P,_ as V,b as j,c as L}from"./uv-icon.DNv2e-gP.js";import{_ as Y}from"./_plugin-vue_export-helper.BCo6x5W8.js";import{_ as Q}from"./uv-button.MXP0QCgh.js";import{g as W,a as J}from"./system.BKBl34T1.js";const Z=Y({name:"uv-link",emits:["click"],mixins:[M,U,{props:{color:{type:String,default:""},fontSize:{type:[String,Number],default:14},underLine:{type:Boolean,default:!1},href:{type:String,default:""},mpTips:{type:String,default:"链接已复制，请在浏览器打开"},lineColor:{type:String,default:""},text:{type:String,default:""},...null==(e=null==(t=uni.$uv)?void 0:t.props)?void 0:e.link}}],computed:{linkStyle(){return{color:this.color,fontSize:this.$uv.addUnit(this.fontSize),lineHeight:this.$uv.addUnit(this.$uv.getPx(this.fontSize)+2),textDecoration:this.underLine?"underline":"none"}}},methods:{openLink(){window.open(this.href),this.$emit("click")}}},[["render",function(t,e,i,a,l,s){const A=m;return u(),d(A,{class:"uv-link",onClick:f(s.openLink,["stop"]),style:g([s.linkStyle,t.$uv.addStyle(t.customStyle)])},{default:c((()=>[h(p(t.text),1)])),_:1},8,["onClick","style"])}],["__scopeId","data-v-8ef8b695"]]);const X=Y({name:"uv-text",emits:["click"],mixins:[M,U,{computed:{value(){const{text:t,mode:e,format:i,href:a}=this;return"price"===e?E(i)?i(t):G(t,2):"date"===e?(!T(t)&&O(),E(i)?i(t):F(t,i||"yyyy-mm-dd")):"phone"===e?E(i)?i(t):"encrypt"===i?`${t.substr(0,3)}****${t.substr(7)}`:t:"name"===e?E(i)?i(t):"encrypt"===i?this.formatName(t):t:t}},methods:{formatName(t){let e="";if(2===t.length)e=t.substr(0,1)+"*";else if(t.length>2){let i="";for(let e=0,a=t.length-2;e<a;e++)i+="*";e=t.substr(0,1)+i+t.substr(-1,1)}else e=t;return e}}},{props:{type:{type:String,default:""},show:{type:Boolean,default:!0},text:{type:[String,Number],default:""},prefixIcon:{type:String,default:""},suffixIcon:{type:String,default:""},mode:{type:String,default:""},href:{type:String,default:""},format:{type:[String,Function],default:""},call:{type:Boolean,default:!0},openType:{type:String,default:""},bold:{type:Boolean,default:!1},block:{type:Boolean,default:!1},lines:{type:[String,Number],default:""},color:{type:String,default:"#303133"},size:{type:[String,Number],default:15},iconStyle:{type:[Object,String],default:()=>({fontSize:"15px"})},decoration:{type:String,default:"none"},margin:{type:[Object,String,Number],default:0},lineHeight:{type:[String,Number],default:""},align:{type:String,default:"left"},wordWrap:{type:String,default:"normal"},...null==(a=null==(i=uni.$uv)?void 0:i.props)?void 0:a.text}}],computed:{valueStyle(){const t={textDecoration:this.decoration,fontWeight:this.bold?"bold":"normal",wordWrap:this.wordWrap,fontSize:this.$uv.addUnit(this.size)};return!this.type&&(t.color=this.color),this.isNvue&&this.lines&&(t.lines=this.lines),!this.isNvue||"price"==this.mode||this.prefixIcon||this.suffixIcon||(t.flex=1,t.textAlign="left"===this.align?"flex-start":"center"===this.align?"center":"right"),this.lineHeight&&(t.lineHeight=this.$uv.addUnit(this.lineHeight)),!this.isNvue&&this.block&&(t.display="block"),this.$uv.deepMerge(t,this.$uv.addStyle(this.customStyle))},isNvue:()=>!1,isMp:()=>!1},data:()=>({}),methods:{clickHandler(){this.call&&"phone"===this.mode&&v({phoneNumber:this.text}),this.$emit("click")}}},[["render",function(t,e,i,a,l,s){const A=m,o=P(y("uv-icon"),V),n=w,r=P(y("uv-link"),Z),f=k;return t.show?(u(),d(n,{key:0,class:b(["uv-text",[]]),style:g({margin:t.margin,justifyContent:"left"===t.align?"flex-start":"center"===t.align?"center":"flex-end"}),onClick:s.clickHandler},{default:c((()=>["price"===t.mode?(u(),d(A,{key:0,class:b(["uv-text__price",t.type&&`uv-text__value--${t.type}`]),style:g([s.valueStyle])},{default:c((()=>[h("￥")])),_:1},8,["class","style"])):S("",!0),t.prefixIcon?(u(),d(n,{key:1,class:"uv-text__prefix-icon"},{default:c((()=>[x(o,{name:t.prefixIcon,customStyle:t.$uv.addStyle(t.iconStyle)},null,8,["name","customStyle"])])),_:1})):S("",!0),"link"===t.mode?(u(),d(r,{key:2,text:t.value,href:t.href,underLine:""},null,8,["text","href"])):t.openType&&s.isMp?(u(),d(f,{key:3,class:"uv-reset-button uv-text__value",style:g([s.valueStyle]),openType:t.openType,onGetuserinfo:t.onGetUserInfo,onContact:t.onContact,onGetphonenumber:t.onGetPhoneNumber,onError:t.onError,onLaunchapp:t.onLaunchApp,onOpensetting:t.onOpenSetting,lang:t.lang,"session-from":t.sessionFrom,"send-message-title":t.sendMessageTitle,"send-message-path":t.sendMessagePath,"send-message-img":t.sendMessageImg,"show-message-card":t.showMessageCard,"app-parameter":t.appParameter},{default:c((()=>[h(p(t.value),1)])),_:1},8,["style","openType","onGetuserinfo","onContact","onGetphonenumber","onError","onLaunchapp","onOpensetting","lang","session-from","send-message-title","send-message-path","send-message-img","show-message-card","app-parameter"])):(u(),d(A,{key:4,class:b(["uv-text__value",[t.type&&`uv-text__value--${t.type}`,t.lines&&`uv-line-${t.lines}`]]),style:g([s.valueStyle])},{default:c((()=>[h(p(t.value),1)])),_:1},8,["style","class"])),t.suffixIcon?(u(),d(n,{key:5,class:"uv-text__suffix-icon"},{default:c((()=>[x(o,{name:t.suffixIcon,customStyle:t.$uv.addStyle(t.iconStyle)},null,8,["name","customStyle"])])),_:1})):S("",!0)])),_:1},8,["style","onClick"])):S("",!0)}],["__scopeId","data-v-4c65a453"]]),q={props:{src:{type:String,default:""},shape:{type:String,default:"circle"},size:{type:[String,Number],default:40},mode:{type:String,default:"scaleToFill"},text:{type:String,default:""},bgColor:{type:String,default:"#c0c4cc"},color:{type:String,default:"#fff"},fontSize:{type:[String,Number],default:18},icon:{type:String,default:""},mpAvatar:{type:Boolean,default:!1},randomBgColor:{type:Boolean,default:!1},defaultUrl:{type:String,default:""},colorIndex:{type:[String,Number],validator:t=>j(t,[0,19])||""===t,default:""},name:{type:String,default:""},...null==(s=null==(l=uni.$uv)?void 0:l.props)?void 0:s.avatar}};const K=Y({name:"uv-avatar",emits:["click"],mixins:[M,U,q],data(){return{colors:["#ffb34b","#f2bba9","#f7a196","#f18080","#88a867","#bfbf39","#89c152","#94d554","#f19ec2","#afaae4","#e1b0df","#c38cc1","#72dcdc","#9acdcb","#77b1cc","#448aca","#86cefa","#98d1ee","#73d1f1","#80a7dc"],avatarUrl:this.src,allowMp:!1}},watch:{src:{immediate:!0,handler(t){this.avatarUrl=t,t||this.errorHandler()}}},computed:{imageStyle:()=>({})},created(){this.init()},methods:{init(){},isImg(){return-1!==this.src.indexOf("/")},errorHandler(){this.avatarUrl=this.defaultUrl||"data:image/jpg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMraHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzYgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjREMEQwRkY0RjgwNDExRUE5OTY2RDgxODY3NkJFODMxIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjREMEQwRkY1RjgwNDExRUE5OTY2RDgxODY3NkJFODMxIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NEQwRDBGRjJGODA0MTFFQTk5NjZEODE4Njc2QkU4MzEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NEQwRDBGRjNGODA0MTFFQTk5NjZEODE4Njc2QkU4MzEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAGBAQEBQQGBQUGCQYFBgkLCAYG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"},clickHandler(){this.$emit("click",this.name)}}},[["render",function(t,e,i,a,l,s){const A=P(y("uv-icon"),V),o=P(y("uv-text"),X),n=N,r=w;return u(),d(r,{class:b(["uv-avatar",[`uv-avatar--${t.shape}`]]),style:g([{backgroundColor:t.text||t.icon?t.randomBgColor?l.colors[""!==t.colorIndex?t.colorIndex:t.$uv.random(0,19)]:t.bgColor:"transparent",width:t.$uv.addUnit(t.size),height:t.$uv.addUnit(t.size)},t.$uv.addStyle(t.customStyle)]),onClick:s.clickHandler},{default:c((()=>[C(t.$slots,"default",{},(()=>[t.mpAvatar&&l.allowMp?(u(),_(B,{key:0},[],64)):t.icon?(u(),d(A,{key:1,name:t.icon,size:t.fontSize,color:t.color},null,8,["name","size","color"])):t.text?(u(),d(o,{key:2,text:t.text,size:t.fontSize,color:t.color,align:"center",customStyle:"justify-content: center"},null,8,["text","size","color"])):(u(),d(n,{key:3,class:b(["uv-avatar__image",[`uv-avatar__image--${t.shape}`]]),src:l.avatarUrl||t.defaultUrl,mode:t.mode,onError:s.errorHandler,style:g([{width:t.$uv.addUnit(t.size),height:t.$uv.addUnit(t.size)}])},null,8,["class","src","mode","onError","style"]))]),!0)])),_:3},8,["class","style","onClick"])}],["__scopeId","data-v-5012def4"]]);const tt=Y({name:"uv-badge",mixins:[M,U,{props:{isDot:{type:Boolean,default:!1},value:{type:[Number,String],default:""},show:{type:Boolean,default:!0},max:{type:[Number,String],default:999},type:{type:[String,void 0,null],default:"error"},showZero:{type:Boolean,default:!1},bgColor:{type:[String,null],default:null},color:{type:[String,null],default:null},shape:{type:[String,void 0,null],default:"circle"},numberType:{type:[String,void 0,null],default:"overflow"},offset:{type:Array,default:()=>[]},inverted:{type:Boolean,default:!1},absolute:{type:Boolean,default:!1},...null==(o=null==(A=uni.$uv)?void 0:A.props)?void 0:o.badge}}],computed:{boxStyle:()=>({}),badgeStyle(){const t={};if(this.color&&(t.color=this.color),this.bgColor&&!this.inverted&&(t.backgroundColor=this.bgColor),this.absolute&&(t.position="absolute",this.offset.length)){const e=this.offset[0],i=this.offset[1]||e;t.top=this.$uv.addUnit(e),t.right=this.$uv.addUnit(i)}return t},showValue(){switch(this.numberType){case"overflow":return Number(this.value)>Number(this.max)?this.max+"+":this.value;case"ellipsis":return Number(this.value)>Number(this.max)?"...":this.value;case"limit":return Number(this.value)>999?Number(this.value)>=9999?Math.floor(this.value/1e4*100)/100+"w":Math.floor(this.value/1e3*100)/100+"k":this.value;default:return Number(this.value)}},propsType(){return this.type||"error"}}},[["render",function(t,e,i,a,l,s){const A=m;return t.show&&(0!==Number(t.value)||t.showZero||t.isDot)?(u(),d(A,{key:0,class:b([[t.isDot?"uv-badge--dot":"uv-badge--not-dot",t.inverted&&"uv-badge--inverted","horn"===t.shape&&"uv-badge--horn",`uv-badge--${s.propsType}${t.inverted?"--inverted":""}`],"uv-badge"]),style:g([t.$uv.addStyle(t.customStyle),s.badgeStyle])},{default:c((()=>[h(p(t.isDot?"":s.showValue),1)])),_:1},8,["class","style"])):S("",!0)}],["__scopeId","data-v-8c3e535e"]]);const et=Y({name:"uv-switch",mixins:[M,U,{props:{value:{type:[Boolean,String,Number],default:!1},modelValue:{type:[Boolean,String,Number],default:!1},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},size:{type:[String,Number],default:25},activeColor:{type:String,default:"#2979ff"},inactiveColor:{type:String,default:"#fff"},activeValue:{type:[String,Number,Boolean],default:!0},inactiveValue:{type:[String,Number,Boolean],default:!1},asyncChange:{type:Boolean,default:!1},space:{type:[String,Number],default:0},...null==(r=null==(n=uni.$uv)?void 0:n.props)?void 0:r.switch}}],data:()=>({bgColor:"#ffffff",innerValue:!1}),watch:{modelValue:{immediate:!0,handler(t){if(t!==this.inactiveValue&&t!==this.activeValue)return this.$uv.error("v-model绑定的值必须为inactiveValue、activeValue二者之一");this.innerValue=t}}},created(){this.innerValue=this.value||this.modelValue},computed:{isActive(){return this.innerValue===this.activeValue},switchStyle(){let t={};return t.width=this.$uv.addUnit(2*this.$uv.getPx(this.size)+2),t.height=this.$uv.addUnit(this.$uv.getPx(this.size)+2),this.customInactiveColor&&(t.borderColor="rgba(0, 0, 0, 0)"),t.backgroundColor=this.isActive?this.activeColor:this.inactiveColor,t},nodeStyle(){let t={};t.width=this.$uv.addUnit(this.$uv.getPx(this.size)-this.space),t.height=this.$uv.addUnit(this.$uv.getPx(this.size)-this.space);const e=this.isActive?this.$uv.addUnit(this.space):this.$uv.addUnit(this.$uv.getPx(this.size));return t.transform=`translateX(-${e})`,t},bgStyle(){let t={};return t.width=this.$uv.addUnit(2*this.$uv.getPx(this.size)-this.$uv.getPx(this.size)/2),t.height=this.$uv.addUnit(this.$uv.getPx(this.size)),t.backgroundColor=this.inactiveColor,t.transform=`scale(${this.isActive?0:1})`,t},customInactiveColor(){return"#fff"!==this.inactiveColor&&"#ffffff"!==this.inactiveColor}},methods:{clickHandler(){if(!this.disabled&&!this.loading){const t=this.isActive?this.inactiveValue:this.activeValue;this.asyncChange||(this.$emit("input",t),this.$emit("update:modelValue",t)),this.$nextTick((()=>{this.$emit("change",t)}))}}}},[["render",function(t,e,i,a,l,s){const A=w,o=P(y("uv-loading-icon"),L);return u(),d(A,{class:b(["uv-switch",[t.disabled&&"uv-switch--disabled"]]),style:g([s.switchStyle,t.$uv.addStyle(t.customStyle)]),onClick:s.clickHandler},{default:c((()=>[x(A,{class:"uv-switch__bg",style:g([s.bgStyle])},null,8,["style"]),x(A,{class:b(["uv-switch__node",[l.innerValue&&"uv-switch__node--on"]]),style:g([s.nodeStyle]),ref:"uv-switch__node"},{default:c((()=>[x(o,{show:t.loading,mode:"circle",timingFunction:"linear",color:l.innerValue?t.activeColor:"#AAABAD",size:.6*t.size},null,8,["show","color","size"])])),_:1},8,["class","style"])])),_:1},8,["class","style","onClick"])}],["__scopeId","data-v-29115cf0"]]);const it=Y({name:"uv-list-item",mixins:[M,U],emits:["click","switchChange"],props:{direction:{type:String,default:"row"},title:{type:String,default:""},note:{type:String,default:""},ellipsis:{type:[Number,String],default:0},disabled:{type:[Boolean,String],default:!1},clickable:{type:Boolean,default:!1},showArrow:{type:[Boolean,String],default:!1},link:{type:[Boolean,String],default:!1},to:{type:String,default:""},showSwitch:{type:[Boolean,String],default:!1},switchChecked:{type:[Boolean,String],default:!1},showBadge:{type:[Boolean,String],default:!1},badge:{type:Object,default:()=>({})},rightText:{type:String,default:""},thumb:{type:String,default:""},thumbSize:{type:String,default:"base"},showExtraIcon:{type:[Boolean,String],default:!1},extraIcon:{type:Object,default:()=>({name:"",color:"#000000",size:20,customPrefix:""})},border:{type:Boolean,default:!1},customStyle:{type:Object,default:()=>({padding:"",backgroundColor:"#FFFFFF"})},keepScrollPosition:{type:Boolean,default:!1}},computed:{directionData(){return this.direction?this.direction:this.parentData.direction?this.parentData.direction:"row"}},watch:{"customStyle.padding":{handler(t){t&&this.setPadding(t)},immediate:!0}},data:()=>({isFirstChild:!1,padding:{top:"",right:"",bottom:"",left:""},parentData:{direction:"row",padding:0}}),created(){this.updateParentData()},mounted(){this.init(),this.list=this.getForm(),this.list&&(this.list.firstChildAppend||(this.list.firstChildAppend=!0,this.isFirstChild=!0))},methods:{init(){this.parent||this.$uv.error("uv-list-item必须搭配uv-list组件使用"),this.$nextTick((()=>{this.padding.top||this.padding.right||this.padding.bottom||this.padding.left||this.setPadding(this.parentData.padding)}))},updateParentData(){this.getParentData("uv-list")},setPadding(t){"number"==typeof t&&(t+="");let e=t.split(" ");if(1===e.length){const t=e[0];this.padding={top:t,right:t,bottom:t,left:t}}else if(2===e.length){const[t,i]=e;this.padding={top:t,right:i,bottom:t,left:i}}else if(4===e.length){const[t,i,a,l]=e;this.padding={top:t,right:i,bottom:a,left:l}}},getForm(t="uniList"){let e=this.$parent,i=e.$options.name;for(;i!==t;){if(e=e.$parent,!e)return!1;i=e.$options.name}return e},onClick(){""===this.to?(this.clickable||this.link)&&this.$emit("click",{data:{}}):this.openPage()},onSwitchChange(t){this.$emit("switchChange",t)},openPage(){-1!==["navigateTo","redirectTo","reLaunch","switchTab"].indexOf(this.link)?this.pageApi(this.link):this.pageApi("navigateTo")},pageApi(t){let e={url:this.to,success:t=>{this.$emit("click",{data:t})},fail:t=>{this.$emit("click",{data:t})}};switch(t){case"navigateTo":default:D(e);break;case"redirectTo":z(e);break;case"reLaunch":$(e);break;case"switchTab":I(e)}}}},[["render",function(t,e,i,a,l,s){const A=w,o=N,n=P(y("uv-icon"),V),r=m,f=P(y("uv-badge"),tt),v=P(y("uv-switch"),et);return u(),d(A,{class:b([{"uv-list-item--disabled":i.disabled},"uv-list-item"]),style:g([t.$uv.addStyle(i.customStyle),{"background-color":i.customStyle.backgroundColor?i.customStyle.backgroundColor:"#fff"}]),"hover-class":!i.clickable&&!i.link||i.disabled||i.showSwitch?"":"uv-list-item--hover",onClick:s.onClick},{default:c((()=>[l.isFirstChild?S("",!0):(u(),d(A,{key:0,class:b(["border--left",{"uv-list--border":i.border}])},null,8,["class"])),x(A,{class:"uv-list-item__wrapper"},{default:c((()=>[C(t.$slots,"default",{},(()=>[x(A,{class:b(["uv-list-item__container",{"container--right":i.showArrow||i.link,"flex--direction":"column"===s.directionData}]),style:g({paddingTop:l.padding.top,paddingLeft:l.padding.left,paddingRight:l.padding.right,paddingBottom:l.padding.bottom})},{default:c((()=>[C(t.$slots,"header",{},(()=>[x(A,{class:"uv-list-item__header"},{default:c((()=>[i.thumb?(u(),d(A,{key:0,class:"uv-list-item__icon"},{default:c((()=>[x(o,{src:i.thumb,class:b(["uv-list-item__icon-img",["uv-list--"+i.thumbSize]])},null,8,["src","class"])])),_:1})):i.showExtraIcon?(u(),d(A,{key:1,class:"uv-list-item__icon"},{default:c((()=>[x(n,{name:i.extraIcon.icon,customPrefix:i.extraIcon.customPrefix,color:i.extraIcon.color,size:i.extraIcon.size},null,8,["name","customPrefix","color","size"])])),_:1})):S("",!0)])),_:1})]),!0),C(t.$slots,"body",{},(()=>[x(A,{class:b(["uv-list-item__content",{"uv-list-item__content--center":i.thumb||i.showExtraIcon||i.showBadge||i.showSwitch}])},{default:c((()=>[i.title?(u(),d(r,{key:0,class:b(["uv-list-item__content-title",[i.ellipsis&&`uv-line-${i.ellipsis}`]])},{default:c((()=>[h(p(i.title),1)])),_:1},8,["class"])):S("",!0),i.note?(u(),d(r,{key:1,class:"uv-list-item__content-note"},{default:c((()=>[h(p(i.note),1)])),_:1})):S("",!0)])),_:1},8,["class"])]),!0),C(t.$slots,"footer",{},(()=>[i.rightText||i.showBadge||i.showSwitch?(u(),d(A,{key:0,class:b(["uv-list-item__extra",{"flex--justify":"column"===s.directionData}])},{default:c((()=>[i.rightText?(u(),d(r,{key:0,class:"uv-list-item__extra-text"},{default:c((()=>[h(p(i.rightText),1)])),_:1})):S("",!0),i.showBadge?(u(),d(f,{key:1,show:!!(i.badge.show||i.badge.isDot||i.badge.value),isDot:i.badge.isDot,value:i.badge.value,max:i.badge.max,type:i.badge.type,showZero:i.badge.showZero,bgColor:i.badge.bgColor,color:i.badge.color,shape:i.badge.shape,numberType:i.badge.numberType,inverted:i.badge.inverted,customStyle:"margin-left: 4px;"},null,8,["show","isDot","value","max","type","showZero","bgColor","color","shape","numberType","inverted"])):S("",!0),i.showSwitch?(u(),d(v,{key:2,value:i.switchChecked,disabled:i.disabled,onChange:s.onSwitchChange},null,8,["value","disabled","onChange"])):S("",!0)])),_:1},8,["class"])):S("",!0)]),!0)])),_:3},8,["class","style"])]),!0)])),_:3}),i.showArrow||i.link?(u(),d(n,{key:1,size:"34rpx",class:"uv-icon-wrapper",color:"#bbb",name:"arrow-right"})):S("",!0)])),_:3},8,["class","style","hover-class","onClick"])}],["__scopeId","data-v-d64fa6e2"]]);const at=Y({name:"uv-list",mixins:[M,U],"mp-weixin":{options:{multipleSlots:!1}},props:{border:{type:Boolean,default:!1},borderColor:{type:String,default:"#dadbde"},direction:{type:String,default:"row"},padding:{type:[String,Number],default:"20rpx 30rpx"}},created(){this.firstChildAppend=!1},computed:{parentData(){return[this.direction,this.padding]}},methods:{loadMore(t){this.$emit("scrolltolower")},scroll(t){this.$emit("scroll",t)}}},[["render",function(t,e,i,a,l,s){const A=w;return u(),d(A,{class:"uv-list",style:g([t.$uv.addStyle(t.customStyle)])},{default:c((()=>[i.border?(u(),d(A,{key:0,class:"uv-list--border-top",style:g([{"background-color":i.borderColor}])},null,8,["style"])):S("",!0),C(t.$slots,"default",{},void 0,!0),i.border?(u(),d(A,{key:1,class:"uv-list--border-bottom",style:g([{"background-color":i.borderColor}])},null,8,["style"])):S("",!0)])),_:3},8,["style"])}],["__scopeId","data-v-cd43a7e2"]]),lt=Y({__name:"user",setup(t){const e=R("v96vwg02"),i=R(!0),a=R("用户名"),l=()=>{D({url:"/pages/user/register"})},s=()=>{D({url:"/pages/user/login"})};return(t,A)=>{const o=w,n=P(y("uv-avatar"),K),r=P(y("uv-list-item"),it),f=P(y("uv-list"),at),m=P(y("uv-button"),Q);return u(),d(o,{class:"pageBg",style:{overflow:"hidden"}},{default:c((()=>[x(o,{class:"status_bar",style:g({height:H(W)()+"px"})},null,8,["style"]),x(o,{class:"titleBar",style:g({height:H(J)()+"px"})},null,8,["style"]),x(o,{class:"userinfo"},{default:c((()=>[x(n,{text:a.value[0],fontSize:"18",randomBgColor:"",size:"160rpx"},null,8,["text"]),x(o,{class:"info"},{default:c((()=>[h(p(a.value),1)])),_:1})])),_:1}),i.value?(u(),_(B,{key:0},[x(o,{class:"tool"},{default:c((()=>[x(f,{border:""},{default:c((()=>[x(r,{"show-arrow":"",title:"历史记录",link:"navigateTo",to:`history?user_id=${e.value}`},null,8,["to"]),x(r,{"show-arrow":"",border:"",title:"其他"})])),_:1})])),_:1}),x(o,{class:"logout"},{default:c((()=>[x(m,{type:"error"},{default:c((()=>[h("退出登录")])),_:1})])),_:1})],64)):(u(),_(B,{key:1},[x(o,{class:"logout"},{default:c((()=>[x(m,{type:"primary",onClick:s},{default:c((()=>[h("登录")])),_:1})])),_:1}),x(o,{class:"logout"},{default:c((()=>[x(m,{type:"success",onClick:l},{default:c((()=>[h("注册")])),_:1})])),_:1})],64))])),_:1})}}},[["__scopeId","data-v-d7b629d5"]]);export{lt as default};
