(self.webpackChunkwebpack_test=self.webpackChunkwebpack_test||[]).push([[653],{5653:function(t,e,i){"use strict";i.r(e),i.d(e,{multiselect:function(){return u}});var s=i(9122),r=i(1160),a=i(5841),l=i(8754),n=i(5316),o=i(3721),c=i(8463),h=i(3386),u=function(t,e,i){n.s.call(this,t,e,i)};s.x.extend(u.prototype,n.s.prototype),s.x.extend(u.prototype,o.E.prototype),s.x.extend(u.prototype,c.z.prototype),u.prototype.defaultOptions={pluginType:"uiplugin.multiselect",pluginName:"multiselect",userEvents:["onchange","onviewchange"],systemEvents:["onclick","ondblclick","onfocus","onblur"],initValue:"",mandatory:!1,maxlength:-1,minlength:-1,allowChar:"",ignoreChar:"",characterCase:"",maxByteLength:-1,minByteLength:-1,validator:"",invalidMessage:"",invalidMessageFunc:"",displaymessage:!1,separator:" ",title:"",escape:!0,maxItemNum:-1,dataListAutoRefresh:!1,accessibility:!1,ariaLabel:""},u.prototype.initialize=function(t){try{this.lastSelectedIndex=-1,this.initializeItemArr(t),this.validator=new WebSquare.validator.validateInvoker(this.id,this.options),this.separator=this.options.separator=this.options.separator||" "}catch(t){r.w.printStackTrace(t,null,this)}},u.prototype.toHTML=function(){try{var t=l.D.getDataPrefix("index"),e=l.D.getDataPrefix("checked"),i=""==this.options.disabled?"":"disabled='true'",s=""==this.options.style?"":"style='"+this.options.style+"'",a=""==this.options.tabIndex?"tabIndex='0'":"tabIndex='"+this.options.tabIndex+"'",n=""==this.options.title?"":"title='"+this.options.title+"'",o="aria-label='"+(""==this.options.ariaLabel?h.d.getMessage("multiselect_ariaLabel")||"다중선택 영역":this.options.ariaLabel)+"'",c=[];if(1==this.options.accessibility){var u=this.options.accessibility?"tabindex='-1'":"";c.push("<div "+i+" id='"+this.id+"' "+s+" class='w2multiselect_acc "+this.options.className+"' "+(this.options.accessibility?"":a+" "+n+" "+o)+">"),(l.D.isIE(6)||l.D.isIE(7)||l.D.isOpera())&&c.push("<div style='overflow:visible;position:relative;height:0px'>"),c.push("<ul id='"+this.id+"_ul' class='w2multiselect_acc_ul' role='listbox' "+(this.options.accessibility?" "+a+" "+n+" "+o:"")+">");for(var d=0;d<this.itemArr.length;d++){var p=this.options.accessibility?"id='"+this.id+"_li_item_"+d+"'":"",b=this.options.escape?WebSquare.xml._encode(this.itemArr[d].label):this.itemArr[d].label;c.push("<li "+p+" role='option' class='w2multiselect_acc_li' "+t+"='"+d+"' "+e+"='false' aria-selected='false' >"),c.push("<button class='w2multiselect_acc_link' "+u+">"+b+"</button>"),c.push("</li>")}c.push("</ul>"),(l.D.isIE(6)||l.D.isIE(7)||l.D.isOpera())&&c.push("</div>"),c.push("</div>")}else{c.push("<div "+i+" id='"+this.id+"' "+s+" class='w2multiselect_div "+this.options.className+"' "+a+" "+n+" "+o+">"),(l.D.isIE(6)||l.D.isIE(7)||l.D.isOpera())&&c.push("<div style='overflow:visible;position:relative;height:0px'>"),c.push("<table id='"+this.id+"_table' class='w2multiselect_table' role='listbox'>");for(d=0;d<this.itemArr.length;d++){b=this.options.escape?WebSquare.xml._encode(this.itemArr[d].label):this.itemArr[d].label;c.push("<tr role='option' class='w2multiselect_tr' "+t+"='"+d+"' "+e+"='false' aria-selected='false'>"),c.push("<td class='w2multiselect_td'>"+b+"</td>"),c.push("</tr>")}c.push("</table>"),(l.D.isIE(6)||l.D.isIE(7)||l.D.isOpera())&&c.push("</div>"),c.push("</div>")}return c.join("")}catch(t){r.w.printStackTrace(t,null,this)}},u.prototype.setPreAction=function(){},u.prototype.setAction=function(){try{if(this.options.nextTabID&&this.setNextTabID(this.options.nextTabID,this.scope_id),this.modelControl.isItemsetBinded()&&(this.refreshItemArr(),this.componentRedraw()),this.modelControl.isBinded()){var t=this.modelControl.getData();this.setValueNM(t)}this.options.mandatory&&this.onPropertyChange("mandatory",l.D.getBoolean(this.options.mandatory)),this.event.addListener(this.render,"onclick",this.event.bindAsEventListener(this,this.handleClickEvent)),this.event.addListener(this.render,"onselectstart",(function(t){a.B.stopEvent(t)})),
this.event.addListener(this.render,"onkeydown",this.event.bindAsEventListener(this,this.handleKeydownEvent))}catch(t){r.w.printStackTrace(t,null,this)}},u.prototype.refreshItemset=function(){try{if(this.modelControl.isItemsetBinded()){var t=this.getValue();this.refreshItemArr(),this.componentRedraw(t)}}catch(t){r.w.printStackTrace(t,null,this)}},u.prototype.refresh=function(){try{if(this.modelControl.isBinded()){var t=this.getValue(),e=this.modelControl.getData();this.setValueNM(e),t!=this.getValue()&&a.B.fireEvent(this,"onchange")}}catch(t){r.w.printStackTrace(t,null,this)}},u.prototype.componentRedraw=function(t){try{this.redraw(),this.setValueNM(t)}catch(t){r.w.printStackTrace(t,null,this)}},u.prototype.getItemCount=function(){try{return this.itemArr.length}catch(t){r.w.printStackTrace(t,null,this)}},u.prototype.setSelectedIndex=function(t){try{for(var e=t.split(this.separator),i=0;i<e.length;i++){var s=e[i];s=parseInt(s),this.setSelectedIndexNM(s)&&this.setInstanceValue()}}catch(t){r.w.printStackTrace(t,null,this)}},u.prototype.setSelectedIndexNM=function(t,e){try{if((t=parseInt(t))<0||t>=this.getItemCount())return!1;var i=l.D.getDataPrefix("checked"),s=this.getMultiselectList()[t];return e=null==e||e,s.setAttribute(i,e),1==this.options.accessibility&&s.setAttribute("aria-selected",e),e?1==this.options.accessibility?this.addClass(s,"w2multiselect_acc_li_over"):this.addClass(s,"w2multiselect_tr_over"):1==this.options.accessibility?this.removeClass(s,"w2multiselect_acc_li_over"):this.removeClass(s,"w2multiselect_tr_over"),!0}catch(t){r.w.printStackTrace(t,null,this)}},u.prototype.getText=function(t){try{t||(t=this.separator);for(var e=[],i=l.D.getDataPrefix("checked"),s=this.getMultiselectList(),a=0;a<s.length;a++)l.D.getBoolean(s[a].getAttribute(i))&&e.push(this.itemArr[a].label);return e.join(t).wq_trim()}catch(t){r.w.printStackTrace(t,null,this)}},u.prototype.getValue=function(t){try{t||(t=this.separator);for(var e=[],i=l.D.getDataPrefix("checked"),s=this.getMultiselectList(),a=0;a<s.length;a++)l.D.getBoolean(s[a].getAttribute(i))&&e.push(this.itemArr[a].value);return e.join(t).wq_trim()}catch(t){r.w.printStackTrace(t,null,this)}},u.prototype.getAllValue=function(){try{for(var t=[],e=this.getMultiselectList(),i=0;i<e.length;i++)t.push(this.itemArr[i].value);return t.join(this.separator).wq_trim()}catch(t){r.w.printStackTrace(t,null,this)}},u.prototype.getIdxValue=function(t){try{return!(t<0||t>=this.getItemCount())&&this.itemArr[t].value}catch(t){r.w.printStackTrace(t,null,this)}},u.prototype.setValue=function(t){try{if(l.D.isNull(t))return;var e=this.getValue();this.setValueNM(t),this.modelControl.setData(t),e!=this.getValue()&&a.B.fireEvent(this,"onchange")}catch(t){r.w.printStackTrace(t,null,this)}},u.prototype.setValueNM=function(t){try{if(l.D.isNull(t))return;for(var e=(t=t.toString()).split(this.separator),i=[],s=0;s<e.length;s++)i[e[s]+""]="";var a=this.getItemCount();for(s=0;s<a;s++){null!=i[t=this.itemArr[s].value]?this.setSelectedIndexNM(s,!0):this.setSelectedIndexNM(s,!1)}}catch(t){r.w.printStackTrace(t,null,this)}},u.prototype.setText=function(t){try{for(var e=t.split(this.separator),i=this.getItemCount(),s=[],a=0;a<e.length;a++)for(var l=0;l<i;l++)this.itemArr[l].label==e[a]&&s.push(this.itemArr[l].value);var n=s.join(this.separator).wq_trim();this.setValue(n)}catch(t){r.w.printStackTrace(t,null,this)}},u.prototype.getSelectedIndex=function(t){try{t||(t=this.separator);for(var e=[],i=l.D.getDataPrefix("checked"),s=this.getMultiselectList(),a=0;a<s.length;a++)l.D.getBoolean(s[a].getAttribute(i))&&e.push(a);return e.join(t).wq_trim()}catch(t){r.w.printStackTrace(t,null,this)}},u.prototype.deleteItem=function(t,e){try{if(t=parseInt(t),null==e&&(e=this.options.dataListAutoRefresh),this.itemsetObj.nodeset.match("data:")&&e){var i=this.modelControl.getDataComp();if(i&&WebSquare.idCache[i.uuid]){var s=i.removeRow(t-1);return{label:s[i.getColumnIndex(this.itemsetObj.label)],
value:s[i.getColumnIndex(this.itemsetObj.value)]}}}for(var a=1==this.options.accessibility?this.getLabelDom():this.getTbodyDom(),l=null,n=a.firstChild;null!=n;n=n.nextSibling)n.getAttribute("index")==t&&(l=this.itemArr.splice(t,1)[0],n.parentNode.removeChild(n),this.refreshIndex());return l}catch(t){r.w.printStackTrace(t,null,this)}},u.prototype.deleteSelectedItems=function(t){try{var e=1==this.options.accessibility?this.getLabelDom():this.getTbodyDom();null==t&&(t=this.options.dataListAutoRefresh);for(var i=l.D.getDataPrefix("index"),s=l.D.getDataPrefix("checked"),a=e.firstChild;null!=a;a=a.nextSibling)if(l.D.getBoolean(a.getAttribute(s))){var n=a.getAttribute(i);if(this.itemsetObj.nodeset.match("data:")&&t){var o=this.modelControl.getDataComp();if(o&&WebSquare.idCache[o.uuid]){o.removeRow(n),this.deleteSelectedItems(t);continue}}this.itemArr.splice(n,1),a.parentNode.removeChild(a),this.refreshIndex(),this.deleteSelectedItems()}}catch(t){r.w.printStackTrace(t,null,this)}},u.prototype.refreshIndex=function(){try{for(var t=1==this.options.accessibility?this.getLabelDom():this.getTbodyDom(),e=0,i=t.firstChild;null!=i;i=i.nextSibling)i.setAttribute("index",e+""),this.options.accessibility&&i.setAttribute("id",this.id+"_li_item_"+e),++e}catch(t){r.w.printStackTrace(t,null,this)}},u.prototype.setInstanceValue=function(){try{var t=this.getValue();this.modelControl.setData(t),this.fireOnchange()}catch(t){r.w.printStackTrace(t,null,this)}},u.prototype.getMultiselectList=function(){try{return 1==this.options.accessibility?this.getDomList("multiselectArr","li"):this.getDomList("multiselectArr","tr")}catch(t){r.w.printStackTrace(t,null,this)}},u.prototype.onPropertyChange=function(t,e){try{switch(t){case"disabled":this.options.disabled=e,e?this.addClass(this.render,"w2multiselect_disabled"):this.removeClass(this.render,"w2multiselect_disabled");break;case"readOnly":break;case"mandatory":1==e?this.addClass(this.render,"w2multiselect_mandatory"):this.removeClass(this.render,"w2multiselect_mandatory")}}catch(t){r.w.printStackTrace(t,null,this)}},u.prototype.validate=function(){try{var t=this.validator.validate(this.getValue());return t||this.focus(),t}catch(t){r.w.printStackTrace(t,null,this)}},u.prototype.validateObject=function(){try{var t=this.validator.validate(this.getValue()),e={};return t||(this.focus(),this.validator&&this.validator.obfuscator_invalidObject&&(e.callerId=this.validator.obfuscator_invalidObject.callerId,e.type=this.validator.obfuscator_invalidObject.getType(),e.value=this.validator.obfuscator_invalidObject.getValue())),e}catch(t){r.w.printStackTrace(t,null,this)}},u.prototype.setInitValue=function(t){try{var e=this.getValue();this.setValueNM(this.options.initValue),this.modelControl.setData(this.options.initValue),t.fireEvent&&e!=this.getValue()&&a.B.fireEvent(this,"onchange")}catch(t){r.w.printStackTrace(t,null,this)}},u.prototype.setRef=function(t){try{this.modelControl.isBinded()||(this.modelControl.useRef=!0),this.options.ref=t,this.modelControl.setRef(t),this.refresh()}catch(t){r.w.printStackTrace(t)}},u.prototype.unbindRef=function(){try{this.modelControl.isBinded()&&(this.options.ref="",this.modelControl.unbindRef(),this.refresh())}catch(t){r.w.printStackTrace(t)}},u.prototype.focusNextTabOrder=function(){try{if(null!=WebSquare.tabOrder[this.id]&&null!=WebSquare.tabOrder[this.id].nextTabID){var t=l.D.getNextTabbableComp(this.id);t&&t.focus()}}catch(t){r.w.printStackTrace(t)}},u.prototype.focusPreTabOrder=function(){try{if(null!=WebSquare.tabOrder[this.id]&&null!=WebSquare.tabOrder[this.id].preTabID){var t=l.D.getPreTabbableComp(this.id);t&&t.focus()}}catch(t){r.w.printStackTrace(t)}},u.prototype.handleClickEvent=function(t){try{if(a.B.stopEvent(t),this.options.disabled)return!1;var e=this.event.getTargetIterator(t,this.render),i=1==this.options.accessibility?this.getLabelDom():this.getTbodyDom()
;if(!t.ctrlKey&&i.childNodes&&1!=this.options.accessibility)for(var s=0;s<i.childNodes.length;s++)this.setSelectedIndexNM(s,!1);for(var n=this.getValue(),o=this.getSelectedIndex(),c=l.D.getDataPrefix("index"),h=l.D.getDataPrefix("checked");e.next();)if(e.match("w2multiselect_tr")||e.match("w2multiselect_acc_li")){var u=e.getElement().getAttribute(c);if(t.shiftKey){var d,p=parseInt(u,10),b=parseInt(this.lastSelectedIndex,10),m=-1,f=-1,v=[];if(b<p)if(m=b,this.options.maxItemNum>-1)f=b+(m>-1?this.options.maxItemNum-1:this.options.maxItemNum);else f=p;else if(f=b,this.options.maxItemNum>-1)m=b-(this.options.maxItemNum-1);else m=p;for(s=m;s<=f;s++)v.push(s);d=v.join(this.separator).wq_trim(),this.setSelectedIndex(d)}else if((t.ctrlKey||1==this.options.accessibility)&&l.D.getBoolean(e.getElement().getAttribute(h)))this.lastSelectedIndex=u,this.setSelectedIndexNM(u,!1),this.setInstanceValue();else{var g=this.getValue();if((""==g?0:g.split(" ").length)>=this.options.maxItemNum&&this.options.maxItemNum>-1)break;this.lastSelectedIndex=u,this.setSelectedIndex(u)}}e=null;var y=this.getValue(),x={oldValue:n,newValue:y,oldSelectedIndex:o,newSelectedIndex:this.getSelectedIndex()};n!=y&&a.B.fireEvent(this,"onviewchange",x),a.B.fireEvent(this,"onrowclick",x),1!=this.options.accessibility&&this.focus()}catch(t){r.w.printStackTrace(t,null,this)}},u.prototype.handleKeydownEvent=function(t){try{var e=t.charCode?t.charCode:t.keyCode;if(this.options.accessibility){40!=e&&38!=e&&32!=e||a.B.preventDefault(t);var i=this.event.getTargetIterator(t,this.render),s=document.getElementById(this.id+"_ul");switch(e){case 40:if(null!=WebSquare.tabOrder[this.id]&&null!=WebSquare.tabOrder[this.id].preTabID){if(c=l.D.getNextTabbableComp(this.id))return void c.focus()}else for(;i.next();){if(i.match("w2multiselect_acc_li")){var n=i.getElement().nextSibling;null!=n&&(i.getElement().removeAttribute("tabindex"),n.setAttribute("tabindex",0),n.focus(),s.setAttribute("aria-activedescendant",n.getAttribute("id")));break}if(i.match("w2multiselect_acc_ul")){s.firstChild.setAttribute("tabindex",0),s.firstChild.focus(),s.setAttribute("aria-activedescendant",s.firstChild.getAttribute("id"));break}}break;case 38:if(null!=WebSquare.tabOrder[this.id]&&null!=WebSquare.tabOrder[this.id].nextTabID){if(c=l.D.getPreTabbableComp(this.id))return void c.focus()}else for(;i.next();)if(i.match("w2multiselect_acc_li")){var o=i.getElement().previousSibling;null!=o&&(i.getElement().removeAttribute("tabindex"),o.setAttribute("tabindex",0),o.focus(),s.setAttribute("aria-activedescendant",o.getAttribute("id")));break}break;case 32:t.target.click();break;case 9:window.requestAnimationFrame((function(){for(;i.next();)if(i.match("w2multiselect_acc_li")){i.getElement().removeAttribute("tabindex");break}})),s.removeAttribute("aria-activedescendant")}}else{var c;if(9==e)if(t.shiftKey){if(null!=WebSquare.tabOrder[this.id]&&null!=WebSquare.tabOrder[this.id].preTabID)if(a.B.preventDefault(t),c=l.D.getPreTabbableComp(this.id))return void c.focus()}else if(null!=WebSquare.tabOrder[this.id]&&null!=WebSquare.tabOrder[this.id].nextTabID)if(a.B.preventDefault(t),c=l.D.getNextTabbableComp(this.id))return void c.focus()}}catch(t){r.w.printStackTrace(t,null,this)}},u.prototype.fireOnchange=function(){try{a.B.fireEvent(this,"onchange")}catch(t){r.w.printStackTrace(t,null,this)}},u.prototype.setStyle=function(t,e){try{if(!this.render)return;if(WebSquare.style.setStyle(this.render,t,e),"font-size"==t)for(var i=(1==this.options.accessibility?this.getLabelDom():this.getTbodyDom()).firstChild;null!=i;i=i.nextSibling){i.firstChild.style[t]=e}}catch(t){r.w.printStackTrace(t)}},u.prototype.addItem=function(t,e,i,s){try{if(i=parseInt(i,10),(isNaN(i)||i<0||i>=this.getItemCount())&&(i=this.getItemCount()),null==s&&(s=!0),this.itemsetObj.nodeset.match("data:")&&s){var a=this.modelControl.getDataComp();if(a&&WebSquare.idCache[a.uuid]){var l={};return l[this.itemsetObj.value]=t,l[this.itemsetObj.label]=e,a.insertJSON(i,[l]),i}}
var n={};return n.value=t,n.label=e,this.itemArr.splice(i,0,n),this.redraw(),i}catch(t){r.w.printStackTrace(t,null,this)}},u.prototype.getTbodyDom=function(){try{var t=document.getElementById(this.id+"_table");return t.childNodes.length>0?t.childNodes[0]:[]}catch(t){r.w.printStackTrace(t,null,this)}},u.prototype.getLabelDom=function(){try{var t=document.getElementById(this.id+"_ul");return t.childNodes.length>0?t:[]}catch(t){r.w.printStackTrace(t,null,this)}}}}]);