(self.webpackChunkwebpack_test=self.webpackChunkwebpack_test||[]).push([[6691],{6691:function(e,t,i){"use strict";i.r(t),i.d(t,{textarea:function(){return d}});var s=i(9122),n=i(7827),o=i(1160),r=i(5841),a=i(8754),h=i(5316),l=i(8463),d=function(e,t,i){h.s.call(this,e,t,i)};s.x.extend(d.prototype,h.s.prototype),s.x.extend(d.prototype,l.z.prototype),d.prototype.defaultOptions={pluginType:"uiplugin.textarea",pluginName:"textarea",userEvents:["oneditend","onchange","onviewchange","oneditkeyup","oneditenter","oneditfull","onafterblur"],systemEvents:["onclick","ondblclick","onkeydown","onfocus","onbeforeeditfocus","onfocusin","onblur","onkeyup","onkeypress","onmouseup","onmousedown","onmouseover","onmouseout","onmousemove"],useConfig:!0,initValue:"",mandatory:!1,maxlength:-1,minlength:-1,allowChar:"",ignoreChar:"",characterCase:"",maxByteLength:-1,minByteLength:-1,validator:"",invalidMessage:"",invalidMessageFunc:"",displaymessage:!1,title:"",wrap:"",readOnlyClass:"w2textarea_readonly",focusRemember:!1,placeholder:"",showPlaceHolderOnReadOnly:!1,name:"",refSyncKeyup:!1,preventCopyPaste:!1,nextTabByEnter:!1},d.prototype.initialize=function(e){try{this.validator=new WebSquare.validator.validateInvoker(this.id,this.options),this.refreshStop=!1,this.caretPosition={start:-1,end:-1},this.rememberCaretPosition=this.options.focusRemember&&n.v.browserCheck.ie&&parseInt(n.v.browserVersion(),10)<10,this._focusStatus="init",this.realValue="",this.supportPlaceholder=!1,this.options.placeholder&&WebSquare.uiplugin.textarea.placeholder&&(this.supportPlaceholder=!0),this.beforeEditValue=""}catch(e){o.w.printStackTrace(e,null,this)}},d.placeholder="string"==typeof document.createElement("textarea").placeholder,d.prototype.toHTML=function(){try{var e=[],t=""==this.options.style?"":"style='"+this.options.style+"'",i=""==this.options.tabIndex?"":"tabIndex='"+this.options.tabIndex+"'",s=""==this.options.title?"":"title='"+this.options.title+"'",n=""==this.options.wrap?"":"wrap='"+this.options.wrap+"'",r=""==this.supportPlaceholder?"":" placeholder='"+this.options.placeholder+"'",a=""==this.options.name?"":"name='"+this.options.name+"'";return e.push("<textarea id='"+this.id+"' "+t+" class='w2textarea "+this.options.className+"' "+s+" "+n+" "+i+" "+r+" "+a+">"),e.push("</textarea>"),e.join("")}catch(e){o.w.printStackTrace(e,null,this)}},d.prototype.setAction=function(){try{this.options.nextTabID&&this.setNextTabID(this.options.nextTabID,this.scope_id),this.addEvent("oneditend",(function(){if(!this.options.placeholder||this.supportPlaceholder||0!=this.realValue.length||!this.render.className.match("w2textarea_placeholder")){var e=this.getValue(),t=e;-1!=this.options.maxByteLength&&(e=a.D.getStringByByteSize(e,this.options.maxByteLength)),e=this.validator.validateString(e),this.options.focusRemember&&t==e||this.setValueNM(e)}})),this.options.maxlength>0&&this.render.setAttribute("maxlength",this.options.maxlength),this.options.mandatory&&this.onPropertyChange("mandatory",a.D.getBoolean(this.options.mandatory)),(a.D.isIEAllVersion()||a.D.isSpartan())&&(this.event.addListener(this.render,"onbeforeeditfocus",this.event.bindAsEventListener(this,this.handleBeforeFocusEvent)),this.event.addListener(this.render,"onfocusin",this.event.bindAsEventListener(this,this.handleFocusinEvent))),this.options.preventCopyPaste&&(a.D.isOpera()&&(this.event.addListener(this.render,"onmousedown",this.event.bindAsEventListener(this,(function(e){r.B.stopEvent(e),this.focus()}))),this.event.addListener(this.render,"onkeydown",this.event.bindAsEventListener(this,(function(e){e.ctrlKey&&(88!==e.keyCode&&67!==e.keyCode&&86!==e.keyCode||r.B.stopEvent(e))})))),this.setStyle("MozUserSelect","none"),this.event.addListener(this.render,"ondragstart",this.event.bindAsEventListener(this,(function(e){r.B.stopEvent(e)}))),this.event.addListener(this.render,"ondragover",this.event.bindAsEventListener(this,(function(e){r.B.stopEvent(e)}))),
this.event.addListener(this.render,"ondrop",this.event.bindAsEventListener(this,(function(e){r.B.stopEvent(e)}))),this.event.addListener(this.render,"oncopy",this.event.bindAsEventListener(this,(function(e){r.B.stopEvent(e)}))),this.event.addListener(this.render,"oncut",this.event.bindAsEventListener(this,(function(e){r.B.stopEvent(e)}))),this.event.addListener(this.render,"onpaste",this.event.bindAsEventListener(this,(function(e){r.B.stopEvent(e)}))),this.event.addListener(this.render,"oncontextmenu",this.event.bindAsEventListener(this,(function(e){r.B.stopEvent(e)})))),this.event.addListener(this.render,"onfocus",this.event.bindAsEventListener(this,this.handleFocusEvent)),this.event.addListener(this.render,"onblur",this.event.bindAsEventListener(this,this.handleBlurEvent)),this.event.addListener(this.render,"onkeydown",this.event.bindAsEventListener(this,this.handleKeydownEvent)),this.event.addListener(this.render,"onkeypress",this.event.bindAsEventListener(this,this.handleKeypressEvent)),this.event.addListener(this.render,"onkeyup",this.event.bindAsEventListener(this,this.handleKeyupEvent)),this.rememberCaretPosition&&this.event.addListener(this.render,"onmouseup",this.event.bindAsEventListener(this,this.handleMouseupEvent)),this.options.placeholder&&!this.supportPlaceholder&&0==this.realValue.length&&(this.render.value=this.options.placeholder,this.addClass("w2textarea_placeholder")),this.refresh()}catch(e){o.w.printStackTrace(e,null,this)}},d.prototype.refresh=function(){try{if(this.modelControl.isBinded()){var e=this.getValue(),t=this.modelControl.getData();this.setValueNM(t),e!=this.getValue()&&r.B.fireEvent(this,"onchange",{oldValue:e,newValue:this.getValue()})}}catch(e){o.w.printStackTrace(e,null,this)}},d.prototype.setValue=function(e){try{if(a.D.isNull(e))return;var t=this.getValue();this.setValueNM(e),this.modelControl.setData(e),t!=this.getValue()&&r.B.fireEvent(this,"onchange",{oldValue:t,newValue:this.getValue()})}catch(e){o.w.printStackTrace(e,null,this)}},d.prototype.setValueNM=function(e){try{if(a.D.isNull(e)||this.refreshStop)return;e=e.toString(),this.options.placeholder&&!this.supportPlaceholder?0==e.length?(this.hasClass("w2textarea_placeholder")||this.addClass("w2textarea_placeholder"),this.render.value=this.options.placeholder):(this.removeClass("w2textarea_placeholder"),this.render.value=e):this.render.value=e,this.realValue=e}catch(e){o.w.printStackTrace(e,null,this)}},d.prototype.getValue=function(){try{return this.refreshStop?this.refreshStopValue:this.options.placeholder&&!this.supportPlaceholder&&0==this.realValue.length&&this.hasClass("w2textarea_placeholder")?"":this.render.value}catch(e){o.w.printStackTrace(e,null,this)}},d.prototype.validate=function(){try{var e=this.validator.validate(this.getValue());return e||this.focus(),e}catch(e){o.w.printStackTrace(e,null,this)}},d.prototype.setInitValue=function(e){try{var t=this.getValue();this.setValueNM(this.options.initValue),this.modelControl.setData(this.options.initValue),e.fireEvent&&t!=this.getValue()&&r.B.fireEvent(this,"onchange",{oldValue:t,newValue:this.getValue()})}catch(e){o.w.printStackTrace(e,null,this)}},d.prototype.onPropertyChange=function(e,t){try{switch(e){case"disabled":1==t?this.addClass(this.render,"w2textarea_disabled"):this.removeClass(this.render,"w2textarea_disabled");break;case"readOnly":1==t?this.addClass(this.render,this.options.readOnlyClass):this.removeClass(this.render,this.options.readOnlyClass);break;case"mandatory":1==t?this.addClass(this.render,"w2textarea_mandatory"):this.removeClass(this.render,"w2textarea_mandatory")}}catch(e){o.w.printStackTrace(e,null,this)}},d.prototype.setRef=function(e){try{this.modelControl.isBinded()||(this.modelControl.useRef=!0),this.options.ref=e,this.modelControl.setRef(e),this.refresh()}catch(e){o.w.printStackTrace(e)}},d.prototype.getDataListInfo=function(){try{var e={};return this.modelControl.isDataCollectionRefBinded?(e.id=this.modelControl.dataCollectionRefInfo.dataComp.id,
e.ref=this.options.ref,e):null}catch(e){o.w.printStackTrace(e)}},d.prototype.unbindRef=function(){try{this.modelControl.isBinded()&&(this.options.ref="",this.modelControl.unbindRef(),this.refresh())}catch(e){o.w.printStackTrace(e)}},d.prototype.handleFocusEvent=function(e){try{this.options.placeholder&&!this.supportPlaceholder&&0==this.realValue.length&&(this.render.value="",this.removeClass("w2textarea_placeholder")),this.rememberCaretPosition&&(this.caretPosition=WebSquare.text.getSelection(this.render));var t=this;WebSquare.historyManager.set(this.options.pluginName,this.id,{value:this.getValue()},{onRestore:function(e){t.refreshStop=!0,t.refreshStopValue=e.value;var i=t.refreshStopValue;if(!a.D.isNull(i)){var s=t.render.value;t.setValueNM(i),t.modelControl.setData(i),s!=i&&r.B.fireEvent(t,"onchange",{oldValue:s,newValue:i}),t.refreshStop=!1,t.refreshStopValue=""}}}),this._focusStatus="done"}catch(e){o.w.printStackTrace(e,null,this)}},d.prototype.handleBlurEvent=function(e){try{if(r.B.fireEvent(this,"oneditend"),this.options.focusRemember){var t=this.getValue();if(a.D.isNull(t))return;this.modelControl.setData(t)}else this.setValue(this.getValue());var i=WebSquare.historyManager.get(this.options.pluginName,this.id);i.value!=this.getValue()&&(r.B.fireEvent(this,"onchange",{oldValue:i.value,newValue:this.getValue()}),r.B.fireEvent(this,"onviewchange",{oldValue:i.value,newValue:this.getValue()})),r.B.fireEvent(this,"onafterblur",e),this._focusStatus="init"}catch(e){o.w.printStackTrace(e,null,this)}},d.prototype.handleKeydownEvent=function(e){try{var t,i=e.charCode?e.charCode:e.keyCode,s=!0;if(13==i&&(this._handleDownKey=!0),9!=i&&13!=i||(s=r.B.fireEvent(this,"oneditenter",e)),9==i||13==i&&!0===this.options.nextTabByEnter)if(!1!==s)if(e.shiftKey){if(null!=WebSquare.tabOrder[this.id]&&null!=WebSquare.tabOrder[this.id].preTabID)if(r.B.preventDefault(e),t=a.D.getPreTabbableComp(this.id))return void t.focus()}else if(null!=WebSquare.tabOrder[this.id]&&null!=WebSquare.tabOrder[this.id].nextTabID)if(r.B.preventDefault(e),t=a.D.getNextTabbableComp(this.id))return void t.focus();this.beforeEditValue=this.getValue()}catch(e){o.w.printStackTrace(e,null,this)}},d.prototype.handleKeypressEvent=function(e){try{13!=(e.charCode?e.charCode:e.keyCode)||this._handleDownKey||r.B.stopEvent(e),this.validator.validateKeyPress(this.render,this.getValue(),e)||r.B.stopEvent(e)}catch(e){o.w.printStackTrace(e,null,this)}},d.prototype.handleKeyupEvent=function(e){try{this.options.refSyncKeyup&&this.commit();var t=!1,i=e.charCode?e.charCode:e.keyCode;if(37==i);else if(38==i);else if(39==i);else if(40==i);else if(33==i);else if(34==i);else if(35==i);else if(36==i);else if(13==i&&(this._handleDownKey=!1),this.options.maxlength>-1)if(a.D.isIE()){var s=WebSquare.text.getSelection(this.render);0!=e.charCode&&s.start==s.end&&this.render.value.length+1>this.options.maxlength&&(t=!0)}else this.render.value.length>this.options.maxlength&&(t=!0);if(-1!=this.options.maxByteLength)(n=this.render.value)!=a.D.getStringByByteSize(n,this.options.maxByteLength)&&(t=!0);if(this.rememberCaretPosition&&(this.caretPosition=WebSquare.text.getSelection(this.render)),t&&(this.render.blur(),this.rememberCaretPosition?WebSquare.text.setSelection(this.render,this.caretPosition):this.render.focus()),-1!=this.options.maxByteLength){var n=this.render.value,h=a.D.getByteLength(n)===this.options.maxByteLength&&!0!==a.D.isKorean(n.charAt(n.length-1)),l=a.D.getByteLength(n)>this.options.maxByteLength;if(h||l){var d={value:this.getValue(),keyCode:i};r.B.fireEvent(this,"oneditfull",d)}}d={oldValue:this.beforeEditValue,newValue:this.getValue(),keyCode:i};r.B.fireEvent(this,"oneditkeyup",d,e)}catch(e){o.w.printStackTrace(e,null,this)}},d.prototype.focus=function(){this.rememberCaretPosition?WebSquare.text.setSelection(this.render,this.caretPosition):h.s.prototype.focus.call(this)},d.prototype.handleMouseupEvent=function(e){this.caretPosition=WebSquare.text.getSelection(this.render)},
d.prototype.handleFocusinEvent=function(e){this._focusStatus="focusin"},d.prototype.handleBeforeFocusEvent=function(e){switch(this._focusStatus){case"init":this._focusStatus="ready";break;case"ready":this._focusStatus="cancel",this.focus();break;case"done":this._focusStatus="init"}},d.prototype.setPlaceholder=function(e){try{if(a.D.isNull(e))return;if(this.options.placeholder!=e)if(this.options.placeholder=e,this.options.original_placeholder=e,this.supportPlaceholder){var t=document.getElementById(this.id);this.options.showPlaceHolderOnReadOnly||!t.disabled&&!t.readOnly?t.placeholder=this.options.placeholder:this.options.placeholder=""}else 0==this.realValue.length&&(this.render.disabled||this.render.readOnly?this.options.placeholder="":this.hasClass("w2textarea_placeholder")?this.render.value=this.options.placeholder:(this.render.value=this.options.placeholder,this.addClass("w2textarea_placeholder")))}catch(e){o.w.printStackTrace(e)}},d.prototype.setDisabled=function(e){try{if(e=a.D.getBoolean(e)){if(this.options.placeholder||this.options.original_placeholder){var t=this.options.placeholder||this.options.original_placeholder;this.options.showPlaceHolderOnReadOnly||this.setPlaceholder(""),this.options.original_placeholder=t}this.options.disabled=e,this.setProperty("disabled",e)}else this.options.disabled=e,this.setProperty("disabled",e),(this.options.placeholder||this.options.original_placeholder)&&this.setPlaceholder(this.options.original_placeholder)}catch(e){o.w.printStackTrace(e)}return e},d.prototype.setReadOnly=function(e){try{if(e=a.D.getBoolean(e)){if(this.options.placeholder||this.options.original_placeholder){var t=this.options.placeholder||this.options.original_placeholder;this.options.showPlaceHolderOnReadOnly||this.setPlaceholder(""),this.options.original_placeholder=t}this.options.readOnly=e,this.setProperty("readOnly",e)}else this.options.readOnly=e,this.setProperty("readOnly",e),(this.options.placeholder||this.options.original_placeholder)&&this.setPlaceholder(this.options.original_placeholder)}catch(e){o.w.printStackTrace(e,null,this)}return e},d.prototype.commit=function(){try{this.setValue(this.getValue())}catch(e){o.w.printStackTrace(e,null,this)}}}}]);