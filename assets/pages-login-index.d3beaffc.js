import{r as e,a as t,o as i,c as r,w as a,b as l,d as s,n,e as o,f as u,F as c,g as d,i as h,I as m,h as f,s as p,j as g,k as y,t as b,l as v,m as _,p as x,q as S,u as w,v as k,x as M,y as C,z as F,A as $,B as V,C as I,U as A,D as j,E as R}from"./index.f0d2fc57.js";import{_ as B}from"./uni-icons.28f7a2f3.js";import{_ as N}from"./plugin-vue_export-helper.f63bf49c.js";function D(e){let t="";for(let i in e){t+=`${i}:${e[i]};`}return t}const O=N({name:"uni-easyinput",emits:["click","iconClick","update:modelValue","input","focus","blur","confirm","clear","eyes","change"],model:{prop:"modelValue",event:"update:modelValue"},options:{virtualHost:!0},inject:{form:{from:"uniForm",default:null},formItem:{from:"uniFormItem",default:null}},props:{name:String,value:[Number,String],modelValue:[Number,String],type:{type:String,default:"text"},clearable:{type:Boolean,default:!0},autoHeight:{type:Boolean,default:!1},placeholder:{type:String,default:" "},placeholderStyle:String,focus:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},maxlength:{type:[Number,String],default:140},confirmType:{type:String,default:"done"},clearSize:{type:[Number,String],default:24},inputBorder:{type:Boolean,default:!0},prefixIcon:{type:String,default:""},suffixIcon:{type:String,default:""},trim:{type:[Boolean,String],default:!0},passwordIcon:{type:Boolean,default:!0},styles:{type:Object,default:()=>({color:"#333",disableColor:"#F7F6F6",borderColor:"#e5e5e5"})},errorMessage:{type:[String,Boolean],default:""}},data:()=>({focused:!1,val:"",showMsg:"",border:!1,isFirstBorder:!1,showClearIcon:!1,showPassword:!1,focusShow:!1,localMsg:""}),computed:{isVal(){const e=this.val;return!(!e&&0!==e)},msg(){return this.localMsg||this.errorMessage},inputMaxlength(){return Number(this.maxlength)},boxStyle(){return`color:${this.inputBorder&&this.msg?"#e43d33":this.styles.color};`},inputContentClass(){return function(e){let t="";for(let i in e)e[i]&&(t+=`${i} `);return t}({"is-input-border":this.inputBorder,"is-input-error-border":this.inputBorder&&this.msg,"is-textarea":"textarea"===this.type,"is-disabled":this.disabled})},inputContentStyle(){const e=this.focusShow?"#2979ff":this.styles.borderColor;return D({"border-color":(this.inputBorder&&this.msg?"#dd524d":e)||"#e5e5e5","background-color":this.disabled?this.styles.disableColor:"#fff"})},inputStyle(){return D({"padding-right":"password"===this.type||this.clearable||this.prefixIcon?"":"10px","padding-left":this.prefixIcon?"":"10px"})}},watch:{value(e){this.val=e},modelValue(e){this.val=e},focus(e){this.$nextTick((()=>{this.focused=this.focus,this.focusShow=this.focus}))}},created(){this.init(),this.form&&this.formItem&&this.$watch("formItem.errMsg",(e=>{this.localMsg=e}))},mounted(){this.$nextTick((()=>{this.focused=this.focus,this.focusShow=this.focus}))},methods:{init(){this.value||0===this.value?this.val=this.value:this.modelValue||0===this.modelValue?this.val=this.modelValue:this.val=null},onClickIcon(e){this.$emit("iconClick",e)},onEyes(){this.showPassword=!this.showPassword,this.$emit("eyes",this.showPassword)},onInput(e){let t=e.detail.value;this.trim&&("boolean"==typeof this.trim&&this.trim&&(t=this.trimStr(t)),"string"==typeof this.trim&&(t=this.trimStr(t,this.trim))),this.errMsg&&(this.errMsg=""),this.val=t,this.$emit("input",t),this.$emit("update:modelValue",t)},onFocus(){this.$nextTick((()=>{this.focused=!0})),this.$emit("focus",null)},_Focus(e){this.focusShow=!0,this.$emit("focus",e)},onBlur(){this.focused=!1,this.$emit("focus",null)},_Blur(e){if(e.detail.value,this.focusShow=!1,this.$emit("blur",e),this.$emit("change",this.val),this.form&&this.formItem){const{validateTrigger:e}=this.form;"blur"===e&&this.formItem.onFieldChange()}},onConfirm(e){this.$emit("confirm",this.val),this.$emit("change",this.val)},onClear(e){this.val="",this.$emit("input",""),this.$emit("update:modelValue",""),this.$emit("clear")},trimStr:(e,t="both")=>"both"===t?e.trim():"left"===t?e.trimLeft():"right"===t?e.trimRight():"start"===t?e.trimStart():"end"===t?e.trimEnd():"all"===t?e.replace(/\s+/g,""):e}},[["render",function(p,g,y,b,v,_){const x=e(t("uni-icons"),B),S=h,w=m,k=f;return i(),r(k,{class:n(["uni-easyinput",{"uni-easyinput-error":_.msg}]),style:o(_.boxStyle)},{default:a((()=>[l(k,{class:n(["uni-easyinput__content",_.inputContentClass]),style:o(_.inputContentStyle)},{default:a((()=>[y.prefixIcon?(i(),r(x,{key:0,class:"content-clear-icon",type:y.prefixIcon,color:"#c0c4cc",onClick:g[0]||(g[0]=e=>_.onClickIcon("prefix")),size:"22"},null,8,["type"])):s("v-if",!0),"textarea"===y.type?(i(),r(S,{key:1,class:n(["uni-easyinput__content-textarea",{"input-padding":y.inputBorder}]),name:y.name,value:v.val,placeholder:y.placeholder,placeholderStyle:y.placeholderStyle,disabled:y.disabled,"placeholder-class":"uni-easyinput__placeholder-class",maxlength:_.inputMaxlength,focus:v.focused,autoHeight:y.autoHeight,onInput:_.onInput,onBlur:_._Blur,onFocus:_._Focus,onConfirm:_.onConfirm},null,8,["class","name","value","placeholder","placeholderStyle","disabled","maxlength","focus","autoHeight","onInput","onBlur","onFocus","onConfirm"])):(i(),r(w,{key:2,type:"password"===y.type?"text":y.type,class:"uni-easyinput__content-input",style:o(_.inputStyle),name:y.name,value:v.val,password:!v.showPassword&&"password"===y.type,placeholder:y.placeholder,placeholderStyle:y.placeholderStyle,"placeholder-class":"uni-easyinput__placeholder-class",disabled:y.disabled,maxlength:_.inputMaxlength,focus:v.focused,confirmType:y.confirmType,onFocus:_._Focus,onBlur:_._Blur,onInput:_.onInput,onConfirm:_.onConfirm},null,8,["type","style","name","value","password","placeholder","placeholderStyle","disabled","maxlength","focus","confirmType","onFocus","onBlur","onInput","onConfirm"])),"password"===y.type&&y.passwordIcon?(i(),u(c,{key:3},[s(" 开启密码时显示小眼睛 "),_.isVal?(i(),r(x,{key:0,class:n(["content-clear-icon",{"is-textarea-icon":"textarea"===y.type}]),type:v.showPassword?"eye-slash-filled":"eye-filled",size:22,color:v.focusShow?"#2979ff":"#c0c4cc",onClick:_.onEyes},null,8,["class","type","color","onClick"])):s("v-if",!0)],64)):y.suffixIcon?(i(),u(c,{key:4},[y.suffixIcon?(i(),r(x,{key:0,class:"content-clear-icon",type:y.suffixIcon,color:"#c0c4cc",onClick:g[1]||(g[1]=e=>_.onClickIcon("suffix")),size:"22"},null,8,["type"])):s("v-if",!0)],64)):(i(),u(c,{key:5},[y.clearable&&_.isVal&&!y.disabled&&"textarea"!==y.type?(i(),r(x,{key:0,class:n(["content-clear-icon",{"is-textarea-icon":"textarea"===y.type}]),type:"clear",size:y.clearSize,color:_.msg?"#dd524d":v.focusShow?"#2979ff":"#c0c4cc",onClick:_.onClear},null,8,["class","size","color","onClick"])):s("v-if",!0)],64)),d(p.$slots,"right",{},void 0,!0)])),_:3},8,["class","style"])])),_:3},8,["class","style"])}],["__scopeId","data-v-708e9192"]]);const L=N({name:"uniFormsItem",options:{virtualHost:!0},provide(){return{uniFormItem:this}},inject:{form:{from:"uniForm",default:null}},props:{rules:{type:Array,default:()=>null},name:{type:[String,Array],default:""},required:{type:Boolean,default:!1},label:{type:String,default:""},labelWidth:{type:[String,Number],default:""},labelAlign:{type:String,default:""},errorMessage:{type:[String,Boolean],default:""},leftIcon:String,iconColor:{type:String,default:"#606266"}},data:()=>({errMsg:"",isRequired:!1,userRules:null,localLabelAlign:"left",localLabelWidth:"65px",localLabelPos:"left",border:!1,isFirstBorder:!1}),computed:{msg(){return this.errorMessage||this.errMsg}},watch:{"form.formRules"(e){this.init()},"form.labelWidth"(e){this.localLabelWidth=this._labelWidthUnit(e)},"form.labelPosition"(e){this.localLabelPos=this._labelPosition()},"form.labelAlign"(e){}},created(){this.init(!0),this.name&&this.form&&this.$watch((()=>this.form._getDataValue(this.name,this.form.localData)),((e,t)=>{if(!this.form._isEqual(e,t)){const t=this.itemSetValue(e);this.onFieldChange(t,!1)}}),{immediate:!1})},unmounted(){this.__isUnmounted=!0,this.unInit()},methods:{setRules(e=null){this.userRules=e,this.init(!1)},setValue(){},async onFieldChange(e,t=!0){const{formData:i,localData:r,errShowType:a,validateCheck:l,validateTrigger:s,_isRequiredField:n,_realName:o}=this.form,u=o(this.name);e||(e=this.form.formData[u]);const c=this.itemRules.rules&&this.itemRules.rules.length;if(!this.validator||!c||0===c)return;const d=n(this.itemRules.rules||[]);let h=null;return"bind"===s||t?(h=await this.validator.validateUpdate({[u]:e},i),d||void 0!==e&&""!==e||(h=null),h&&h.errorMessage?("undertext"===a&&(this.errMsg=h?h.errorMessage:""),"toast"===a&&p({title:h.errorMessage||"校验错误",icon:"none"}),"modal"===a&&g({title:"提示",content:h.errorMessage||"校验错误"})):this.errMsg="",l(h||null)):this.errMsg="",h||null},init(e=!1){const{validator:t,formRules:i,childrens:r,formData:a,localData:l,_realName:s,labelWidth:n,_getDataValue:o,_setDataValue:u}=this.form||{};if(this.localLabelAlign=this._justifyContent(),this.localLabelWidth=this._labelWidthUnit(n),this.localLabelPos=this._labelPosition(),this.isRequired=this.required,this.form&&e&&r.push(this),!t||!i)return;this.form.isFirstBorder||(this.form.isFirstBorder=!0,this.isFirstBorder=!0),this.group&&(this.group.isFirstBorder||(this.group.isFirstBorder=!0,this.isFirstBorder=!0)),this.border=this.form.border;const c=s(this.name),d=this.userRules||this.rules;"object"==typeof i&&d&&(i[c]={rules:d},t.updateSchema(i));const h=i[c]||{};this.itemRules=h,this.validator=t,this.itemSetValue(o(this.name,l)),this.isRequired=this._isRequired()},unInit(){if(this.form){const{childrens:e,formData:t,_realName:i}=this.form;e.forEach(((e,r)=>{e===this&&(this.form.childrens.splice(r,1),delete t[i(e.name)])}))}},itemSetValue(e){const t=this.form._realName(this.name),i=this.itemRules.rules||[],r=this.form._getValue(t,e,i);return this.form._setDataValue(t,this.form.formData,r),r},clearValidate(){this.errMsg=""},_isRequired(){return this.required},_justifyContent(){if(this.form){const{labelAlign:e}=this.form;let t=this.labelAlign?this.labelAlign:e;if("left"===t)return"flex-start";if("center"===t)return"center";if("right"===t)return"flex-end"}return"flex-start"},_labelWidthUnit(e){return this.num2px(this.labelWidth?this.labelWidth:e||(this.label?65:"auto"))},_labelPosition(){return this.form&&this.form.labelPosition||"left"},isTrigger:(e,t,i)=>"submit"!==e&&e?"bind":void 0===e?"bind"!==t?t?"submit":""===i?"bind":"submit":"bind":"submit",num2px:e=>"number"==typeof e?`${e}px`:e}},[["render",function(e,t,u,c,h,m){const p=v,g=f;return i(),r(g,{class:n(["uni-forms-item",["is-direction-"+h.localLabelPos,h.border?"uni-forms-item--border":"",h.border&&h.isFirstBorder?"is-first-border":""]])},{default:a((()=>[d(e.$slots,"label",{},(()=>[l(g,{class:n(["uni-forms-item__label",{"no-label":!u.label&&!h.isRequired}]),style:o({width:h.localLabelWidth,justifyContent:h.localLabelAlign})},{default:a((()=>[h.isRequired?(i(),r(p,{key:0,class:"is-required"},{default:a((()=>[y("*")])),_:1})):s("v-if",!0),l(p,null,{default:a((()=>[y(b(u.label),1)])),_:1})])),_:1},8,["class","style"])]),!0),l(g,{class:"uni-forms-item__content"},{default:a((()=>[d(e.$slots,"default",{},void 0,!0),l(g,{class:n(["uni-forms-item__error",{"msg--active":m.msg}])},{default:a((()=>[l(p,null,{default:a((()=>[y(b(m.msg),1)])),_:1})])),_:1},8,["class"])])),_:3})])),_:3},8,["class"])}],["__scopeId","data-v-24161517"]]);var q={email:/^\S+?@\S+?\.\S+?$/,idcard:/^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,url:new RegExp("^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$","i")};const P={int:"integer",bool:"boolean",double:"number",long:"number",password:"string"};function T(e,t=""){["label"].forEach((t=>{void 0===e[t]&&(e[t]="")}));let i=t;for(let r in e){let t=new RegExp("{"+r+"}");i=i.replace(t,e[r])}return i}const E={integer:e=>E.number(e)&&parseInt(e,10)===e,string:e=>"string"==typeof e,number:e=>!isNaN(e)&&"number"==typeof e,boolean:function(e){return"boolean"==typeof e},float:function(e){return E.number(e)&&!E.integer(e)},array:e=>Array.isArray(e),object:e=>"object"==typeof e&&!E.array(e),date:e=>e instanceof Date,timestamp(e){return!(!this.integer(e)||Math.abs(e).toString().length>16)},file:e=>"string"==typeof e.url,email:e=>"string"==typeof e&&!!e.match(q.email)&&e.length<255,url:e=>"string"==typeof e&&!!e.match(q.url),pattern(e,t){try{return new RegExp(e).test(t)}catch(i){return!1}},method:e=>"function"==typeof e,idcard:e=>"string"==typeof e&&!!e.match(q.idcard),"url-https"(e){return this.url(e)&&e.startsWith("https://")},"url-scheme":e=>e.startsWith("://"),"url-web":e=>!1};const z={required:(e,t,i)=>e.required&&function(e,t){return null==e||"string"==typeof e&&!e||!(!Array.isArray(e)||e.length)||"object"===t&&!Object.keys(e).length}(t,e.format||typeof t)?T(e,e.errorMessage||i.required):null,range(e,t,i){const{range:r,errorMessage:a}=e;let l=new Array(r.length);for(let n=0;n<r.length;n++){const e=r[n];E.object(e)&&void 0!==e.value?l[n]=e.value:l[n]=e}let s=!1;return Array.isArray(t)?s=new Set(t.concat(l)).size===l.length:l.indexOf(t)>-1&&(s=!0),s?null:T(e,a||i.enum)},rangeNumber(e,t,i){if(!E.number(t))return T(e,e.errorMessage||i.pattern.mismatch);let{minimum:r,maximum:a,exclusiveMinimum:l,exclusiveMaximum:s}=e,n=l?t<=r:t<r,o=s?t>=a:t>a;return void 0!==r&&n?T(e,e.errorMessage||i.number[l?"exclusiveMinimum":"minimum"]):void 0!==a&&o?T(e,e.errorMessage||i.number[s?"exclusiveMaximum":"maximum"]):void 0!==r&&void 0!==a&&(n||o)?T(e,e.errorMessage||i.number.range):null},rangeLength(e,t,i){if(!E.string(t)&&!E.array(t))return T(e,e.errorMessage||i.pattern.mismatch);let r=e.minLength,a=e.maxLength,l=t.length;return void 0!==r&&l<r?T(e,e.errorMessage||i.length.minLength):void 0!==a&&l>a?T(e,e.errorMessage||i.length.maxLength):void 0!==r&&void 0!==a&&(l<r||l>a)?T(e,e.errorMessage||i.length.range):null},pattern:(e,t,i)=>E.pattern(e.pattern,t)?null:T(e,e.errorMessage||i.pattern.mismatch),format(e,t,i){var r=Object.keys(E),a=P[e.format]?P[e.format]:e.format||e.arrayType;return r.indexOf(a)>-1&&!E[a](t)?T(e,e.errorMessage||i.typeError):null},arrayTypeFormat(e,t,i){if(!Array.isArray(t))return T(e,e.errorMessage||i.typeError);for(let r=0;r<t.length;r++){const a=t[r];let l=this.format(e,a,i);if(null!==l)return l}return null}};class W extends class{constructor(e){this._message=e}async validateRule(e,t,i,r,a){var l=null;let s=t.rules;if(s.findIndex((e=>e.required))<0){if(null==i)return l;if("string"==typeof i&&!i.length)return l}var n=this._message;if(void 0===s)return n.default;for(var o=0;o<s.length;o++){let u=s[o],c=this._getValidateType(u);if(Object.assign(u,{label:t.label||`["${e}"]`}),z[c]&&null!=(l=z[c](u,i,n)))break;if(u.validateExpr){let e=Date.now();if(!1===u.validateExpr(i,a,e)){l=this._getMessage(u,u.errorMessage||this._message.default);break}}if(u.validateFunction&&null!==(l=await this.validateFunction(u,i,r,a,c)))break}return null!==l&&(l=n.TAG+l),l}async validateFunction(e,t,i,r,a){let l=null;try{let s=null;const n=await e.validateFunction(e,t,r||i,(e=>{s=e}));(s||"string"==typeof n&&n||!1===n)&&(l=this._getMessage(e,s||n,a))}catch(s){l=this._getMessage(e,s.message,a)}return l}_getMessage(e,t,i){return T(e,t||e.errorMessage||this._message[i]||t.default)}_getValidateType(e){var t="";return e.required?t="required":e.format?t="format":e.arrayType?t="arrayTypeFormat":e.range?t="range":void 0!==e.maximum||void 0!==e.minimum?t="rangeNumber":void 0!==e.maxLength||void 0!==e.minLength?t="rangeLength":e.pattern?t="pattern":e.validateFunction&&(t="validateFunction"),t}}{constructor(e,t){super(W.message),this._schema=e,this._options=t||null}updateSchema(e){this._schema=e}async validate(e,t){let i=this._checkFieldInSchema(e);return i||(i=await this.invokeValidate(e,!1,t)),i.length?i[0]:null}async validateAll(e,t){let i=this._checkFieldInSchema(e);return i||(i=await this.invokeValidate(e,!0,t)),i}async validateUpdate(e,t){let i=this._checkFieldInSchema(e);return i||(i=await this.invokeValidateUpdate(e,!1,t)),i.length?i[0]:null}async invokeValidate(e,t,i){let r=[],a=this._schema;for(let l in a){let s=a[l],n=await this.validateRule(l,s,e[l],e,i);if(null!=n&&(r.push({key:l,errorMessage:n}),!t))break}return r}async invokeValidateUpdate(e,t,i){let r=[];for(let a in e){let l=await this.validateRule(a,this._schema[a],e[a],e,i);if(null!=l&&(r.push({key:a,errorMessage:l}),!t))break}return r}_checkFieldInSchema(e){var t=Object.keys(e),i=Object.keys(this._schema);if(new Set(t.concat(i)).size===i.length)return"";var r=t.filter((e=>i.indexOf(e)<0));return[{key:"invalid",errorMessage:T({field:JSON.stringify(r)},W.message.TAG+W.message.defaultInvalid)}]}}W.message=new function(){return{TAG:"",default:"验证错误",defaultInvalid:"提交的字段{field}在数据库中并不存在",validateFunction:"验证无效",required:"{label}必填",enum:"{label}超出范围",timestamp:"{label}格式无效",whitespace:"{label}不能为空",typeError:"{label}类型无效",date:{format:"{label}日期{value}格式无效",parse:"{label}日期无法解析,{value}无效",invalid:"{label}日期{value}无效"},length:{minLength:"{label}长度不能少于{minLength}",maxLength:"{label}长度不能超过{maxLength}",range:"{label}必须介于{minLength}和{maxLength}之间"},number:{minimum:"{label}不能小于{minimum}",maximum:"{label}不能大于{maximum}",exclusiveMinimum:"{label}不能小于等于{minimum}",exclusiveMaximum:"{label}不能大于等于{maximum}",range:"{label}必须介于{minimum}and{maximum}之间"},pattern:{mismatch:"{label}格式不匹配"}}};const U=(e,t,i)=>{const r=i.find((e=>{return e.format&&("int"===(t=e.format)||"double"===t||"number"===t||"timestamp"===t);var t})),a=i.find((e=>e.format&&"boolean"===e.format||"bool"===e.format));return r&&(t=t||0===t?Y(Number(t))?Number(t):t:null),a&&(t=!!Z(t)&&t),t},H=(e,t)=>Q(t,e),J=(e,t={})=>{const i=K(e);if("object"==typeof i&&Array.isArray(i)&&i.length>1){return i.reduce(((e,t)=>e+`#${t}`),"_formdata_")}return i[0]||e},G=e=>{let t=e.replace("_formdata_#","");return t=t.split("#").map((e=>Y(e)?Number(e):e)),t},X=(e,t,i)=>("object"!=typeof e||K(t).reduce(((e,t,r,a)=>r===a.length-1?(e[t]=i,null):(t in e||(e[t]=/^[0-9]{1,}$/.test(a[r+1])?[]:{}),e[t])),e),e);function K(e){return Array.isArray(e)?e:e.replace(/\[/g,".").replace(/\]/g,"").split(".")}const Q=(e,t,i="undefined")=>{let r=K(t).reduce(((e,t)=>(e||{})[t]),e);return r&&void 0===r?i:r},Y=e=>!isNaN(Number(e)),Z=e=>"boolean"==typeof e;const ee=N({name:"uniForms",emits:["validate","submit"],options:{virtualHost:!0},props:{value:{type:Object,default:()=>null},modelValue:{type:Object,default:()=>null},model:{type:Object,default:()=>null},rules:{type:Object,default:()=>({})},errShowType:{type:String,default:"undertext"},validateTrigger:{type:String,default:"submit"},labelPosition:{type:String,default:"left"},labelWidth:{type:[String,Number],default:""},labelAlign:{type:String,default:"left"},border:{type:Boolean,default:!1}},provide(){return{uniForm:this}},data:()=>({formData:{},formRules:{}}),computed:{localData(){const e=this.model||this.modelValue||this.value;return e?(t=e,JSON.parse(JSON.stringify(t))):{};var t}},watch:{rules:{handler:function(e,t){this.setRules(e)},deep:!0,immediate:!0}},created(){_().$vm.$.appContext.config.globalProperties.binddata||(_().$vm.$.appContext.config.globalProperties.binddata=function(e,t,i){if(i)this.$refs[i].setValue(e,t);else{let i;for(let e in this.$refs){const t=this.$refs[e];if(t&&t.$options&&"uniForms"===t.$options.name){i=t;break}}if(!i)return console.error("当前 uni-froms 组件缺少 ref 属性");i.setValue(e,t)}}),this.childrens=[],this.inputChildrens=[],this.setRules(this.rules)},methods:{setRules(e){this.formRules=Object.assign({},this.formRules,e),this.validator=new W(e)},setValue(e,t){let i=this.childrens.find((t=>t.name===e));return i?(this.formData[e]=U(0,t,this.formRules[e]&&this.formRules[e].rules||[]),i.onFieldChange(this.formData[e])):null},validate(e,t){return this.checkAll(this.formData,e,t)},validateField(e=[],t){e=[].concat(e);let i={};return this.childrens.forEach((t=>{const r=J(t.name);-1!==e.indexOf(r)&&(i=Object.assign({},i,{[r]:this.formData[r]}))})),this.checkAll(i,[],t)},clearValidate(e=[]){e=[].concat(e),this.childrens.forEach((t=>{if(0===e.length)t.errMsg="";else{const i=J(t.name);-1!==e.indexOf(i)&&(t.errMsg="")}}))},submit(e,t,i){for(let r in this.dataValue){this.childrens.find((e=>e.name===r))&&void 0===this.formData[r]&&(this.formData[r]=this._getValue(r,this.dataValue[r]))}return i||console.warn("submit 方法即将废弃，请使用validate方法代替！"),this.checkAll(this.formData,e,t,"submit")},async checkAll(e,t,i,r){if(!this.validator)return;let a,l=[];for(let u in e){const e=this.childrens.find((e=>J(e.name)===u));e&&l.push(e)}i||"function"!=typeof t||(i=t),!i&&"function"!=typeof i&&Promise&&(a=new Promise(((e,t)=>{i=function(i,r){i?t(i):e(r)}})));let s=[],n=JSON.parse(JSON.stringify(e));for(let u in l){const e=l[u];let t=J(e.name);const i=await e.onFieldChange(n[t]);if(i&&(s.push(i),"toast"===this.errShowType||"modal"===this.errShowType))break}Array.isArray(s)&&0===s.length&&(s=null),Array.isArray(t)&&t.forEach((e=>{let t=J(e),i=H(e,this.localData);void 0!==i&&(n[t]=i)})),"submit"===r?this.$emit("submit",{detail:{value:n,errors:s}}):this.$emit("validate",s);let o={};return o=((e={},t)=>{let i=JSON.parse(JSON.stringify(e)),r={};for(let a in i){let e=G(a);X(r,e,i[a])}return r})(n,this.name),i&&"function"==typeof i&&i(s,o),a&&i?a:null},validateCheck(e){this.$emit("validate",e)},_getValue:U,_isRequiredField:e=>{let t=!1;for(let i=0;i<e.length;i++){if(e[i].required){t=!0;break}}return t},_setDataValue:(e,t,i)=>(t[e]=i,i||""),_getDataValue:H,_realName:J,_isRealName:e=>/^_formdata_#*/.test(e),_isEqual:(e,t)=>{if(e===t)return 0!==e||1/e==1/t;if(null==e||null==t)return e===t;var i=toString.call(e);if(i!==toString.call(t))return!1;switch(i){case"[object RegExp]":case"[object String]":return""+e==""+t;case"[object Number]":return+e!=+e?+t!=+t:0==+e?1/+e==1/t:+e==+t;case"[object Date]":case"[object Boolean]":return+e==+t}if("[object Object]"==i){var r=Object.getOwnPropertyNames(e),a=Object.getOwnPropertyNames(t);if(r.length!=a.length)return!1;for(var l=0;l<r.length;l++){var s=r[l];if(e[s]!==t[s])return!1}return!0}return"[object Array]"==i?e.toString()==t.toString():void 0}}},[["render",function(e,t,s,n,o,u){const c=x,h=f;return i(),r(h,{class:"uni-forms"},{default:a((()=>[l(c,null,{default:a((()=>[d(e.$slots,"default",{},void 0,!0)])),_:3})])),_:3})}],["__scopeId","data-v-07703c20"]]);var te;const ie="undefined"!=typeof window;function re(e){return!!M()&&(C(e),!0)}function ae(e,t=1e3,i={}){const{immediate:r=!0,immediateCallback:a=!1}=i;let l=null;const s=S(!1);function n(){l&&(clearInterval(l),l=null)}function o(){s.value=!1,n()}function u(){var i;F(t)<=0||(s.value=!0,a&&e(),n(),l=setInterval(e,"function"==typeof(i=t)?i():F(i)))}if(r&&ie&&u(),w(t)){re(k(t,(()=>{s.value&&ie&&u()})))}return re(o),{isActive:s,pause:o,resume:u}}ie&&(null==(te=null==window?void 0:window.navigator)?void 0:te.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);const le=/^1[3-9]\d{9}$/;function se(e){return e&&le.test(e)}const ne=$({__name:"index",setup(n){const{time:o,start:u}=function(){const e=S(0),{pause:t,resume:i}=ae((()=>{e.value--,e.value<=0&&t()}),1e3,{immediate:!1});return{time:e,start:t=>{e.value=t,i()}}}(),{loading:c,setLoading:d}=function(e=!1){const t=S(e);return{loading:t,setLoading:e=>{t.value=e},toggle:()=>{t.value=!t.value}}}(),h=V(),m=I({phone:"18519004150",code:""}),g=async()=>{if(!c.value&&(se(m.phone)?m.code||(p({title:"请输入验证码",icon:"none"}),0):(p({title:"请输入正确的手机号",icon:"none"}),0))){d(!0);try{await h.login(m)}catch{}}},v=e=>{var t;p({title:null==(t=e.detail)?void 0:t.encryptedData})};return(n,d)=>{const h=j,_=f,x=e(t("uni-easyinput"),O),S=e(t("uni-forms-item"),L),w=R,k=e(t("uni-forms"),ee);return i(),r(_,{class:"login"},{default:a((()=>[s(" login banner "),l(_,{class:"login-banner"},{default:a((()=>[l(h,{src:"",class:"src"})])),_:1}),s(" login form "),l(_,{class:"login-form"},{default:a((()=>[l(k,{"model-value":m},{default:a((()=>[l(S,{name:"phone"},{default:a((()=>[l(x,{modelValue:m.phone,"onUpdate:modelValue":d[0]||(d[0]=e=>m.phone=e),type:"number",placeholder:"请输入手机号"},null,8,["modelValue"])])),_:1}),l(S,{name:"code"},{default:a((()=>[l(x,{modelValue:m.code,"onUpdate:modelValue":d[1]||(d[1]=e=>m.code=e),type:"number",placeholder:"请输入短信验证码"},null,8,["modelValue"])])),_:1}),l(w,{onClick:d[2]||(d[2]=e=>(async()=>{if(se(m.phone))try{await A.sendCode(m.phone),u(60),p({title:"发送成功",icon:"none"})}catch(e){p({title:`发送失败,${e}`,icon:"none"})}else p({title:"请输入正确的手机号",icon:"none"})})())},{default:a((()=>[y(b(0===F(o)?"获取验证码":`重新发送(${F(o)})s`),1)])),_:1})])),_:1},8,["model-value"])])),_:1}),l(_,null,{default:a((()=>[l(w,{loading:F(c),class:"btn-primary",onClick:g},{default:a((()=>[y(" 手机号登录 ")])),_:1},8,["loading"]),l(w,{"open-type":"getPhoneNumber",loading:F(c),class:"btn-success",onGetphonenumber:v},{default:a((()=>[y(" 微信授权登录 ")])),_:1},8,["loading"])])),_:1})])),_:1})}}});export{ne as default};