(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{733:function(e,t,d){var content=d(738);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,d(81).default)("9f247568",content,!0,{sourceMap:!1})},737:function(e,t,d){"use strict";d(733)},738:function(e,t,d){var n=d(80)(!1);n.push([e.i,".address-input[data-v-44f36e2b]{width:0;position:relative;font-weight:500;outline:none;font-size:20px;border:none;flex:1 1 auto;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding:0;-webkit-appearance:textfield}.address-input[data-v-44f36e2b]:disabled{cursor:not-allowed}.address-input[data-v-44f36e2b]::-moz-placeholder{color:var(--placeholder-color);opacity:1}.address-input[data-v-44f36e2b]::placeholder{color:var(--placeholder-color);opacity:1}.address-input[data-v-44f36e2b] ::-webkit-search-decoration{-webkit-appearance:none}.address-input [type=number][data-v-44f36e2b]{-moz-appearance:textfield}.address-input[data-v-44f36e2b] ::-webkit-inner-spin-button,.address-input[data-v-44f36e2b] ::-webkit-outer-spin-button{-webkit-appearance:none}",""]),e.exports=n},744:function(e,t,d){"use strict";d.r(t);var n=d(14),o={data:function(){return{inputValue:"",isFocused:!1}},props:{address:{type:String,default:""},disabled:{type:Boolean,default:!1}},mounted:function(){this.inputValue=this.address,this.blurred()},methods:{onAddressInput:function(e){var address=e.target.value;this.$emit("address-changed",{address:address})},focused:function(){this.isFocused=!0,this.inputValue=this.address},blurred:function(){this.isFocused=!1,Object(n.a)(this.address)&&(this.inputValue=Object(n.g)(this.address))}},watch:{address:function(){this.address!=this.inputValue&&(this.inputValue=this.isFocused?this.address:Object(n.g)(this.address))}},computed:{dynamicStyle:function(){return{color:this.theme.text4,background:"transparent","--placeholder-color":this.theme.text3}}}},r=(d(737),d(11)),component=Object(r.a)(o,(function(){var e=this;return(0,e._self._c)("input",{directives:[{name:"model",rawName:"v-model",value:e.inputValue,expression:"inputValue"}],staticClass:"address-input",style:e.dynamicStyle,attrs:{disabled:e.disabled,inputmode:"hex",title:"Address Input",autocomplete:"off",autocorrect:"off",type:"text",pattern:"^0x[a-fA-F0-9]{40}$",placeholder:"",minlength:"0",maxlength:"42",spellcheck:"false"},domProps:{value:e.inputValue},on:{input:[function(t){t.target.composing||(e.inputValue=t.target.value)},e.onAddressInput],focus:e.focused,blur:e.blurred}})}),[],!1,null,"44f36e2b",null);t.default=component.exports}}]);