(self.webpackChunkwebpack_test=self.webpackChunkwebpack_test||[]).push([[7049],{7049:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{wUnit:()=>wUnit});var _websquareGlobal_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2981),_exception_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2085),_core_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1656),_logger_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(7275),_util_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(3082),wUnit={commandList:[],testFrame:null,currentTestCount:-1,totalTestCount:-1,lock:!1,options:{interval:0,showSuccess:!0,showLog:!1},start:function(){try{this.testFrame=parent.document.getElementById("testFrame"),this.testSuiteFrame=parent.document.getElementById("testSuiteFrame"),this.selenium_myiframe=parent.document.getElementById("selenium_myiframe"),this.commandList=[],this.currentTestCount=-1,this.totalTestCount=-1,this.totalTestCount=-1,this.lock=!1}catch(e){_exception_js__WEBPACK_IMPORTED_MODULE_1__.w.printStackTrace(e)}},stop:function(){},log:function(){try{for(var e=!0,t=[],_=0;_<this.commandList.length;_++)0==this.commandList[_].success&&(t.push(_),_logger_js__WEBPACK_IMPORTED_MODULE_3__.k.printLog("--fail.."+_),e=!1);""!=_logger_js__WEBPACK_IMPORTED_MODULE_3__.k.getErrorLog()&&(e=!1);var n=_logger_js__WEBPACK_IMPORTED_MODULE_3__.k.getObjectStr(0,this.commandList,{log:!0,includeFunction:!1,maxDepth:2,include:null,exclude:"event parentComponent defaultOptions"});n="\n\n--------------object log----------------\n\n"+n,_logger_js__WEBPACK_IMPORTED_MODULE_3__.k.printLog(n),_logger_js__WEBPACK_IMPORTED_MODULE_3__.k.printLog("  wUnit TEST : "+e),1==this.options.showSuccess&&(e?alert("wUnit Test SUCCESS"):alert("wUnit Test FAIL "+t.length+"\n see : "+t));var r=_core_js__WEBPACK_IMPORTED_MODULE_2__.v.getConfiguration("/WebSquare/wUnit/showLogPopup/@value");r="string"!=typeof r||"false"!=r.toLowerCase(),0!=e&&1!=this.options.showLog||!r||_logger_js__WEBPACK_IMPORTED_MODULE_3__.k.showLog()}catch(e){_exception_js__WEBPACK_IMPORTED_MODULE_1__.w.printStackTrace(e)}},runTimeout:function(){try{var e=this,t=e.options.interval;this.currentTestCount<this.commandList.length&&"pause"==this.commandList[this.currentTestCount].command&&(t+=parseInt(this.commandList[this.currentTestCount].target)),setTimeout((function(){e.executeCommand(e.currentTestCount)?(e.currentTestCount++,e.runTimeout()):e.log()}),t)}catch(e){_exception_js__WEBPACK_IMPORTED_MODULE_1__.w.printStackTrace(e)}},run:function(){try{1==_util_js__WEBPACK_IMPORTED_MODULE_4__.D.getBoolean(WebSquare.net.getParameter("bySelenium"))?this.options.showSuccess=!1:(this.currentTestCount=0,this.totalTestCount=this.commandList.length,this.runTimeout())}catch(e){_exception_js__WEBPACK_IMPORTED_MODULE_1__.w.printStackTrace(e)}},executeCommand:function(e){try{if(e>this.commandList.length||!this.commandList[e])return!1;var t=this.commandList[e].command,_="";switch(null!=_websquareGlobal_js__WEBPACK_IMPORTED_MODULE_0__.x.strictModeFrame&&(_=_websquareGlobal_js__WEBPACK_IMPORTED_MODULE_0__.x.strictModeFrame.id),t){case"set":new Function(_util_js__WEBPACK_IMPORTED_MODULE_4__.D.scopingFuncBody(this.commandList[e].target,_))(),this.commandList[e].success="pass";break;case"assert":void 0!==(n=new Function(_util_js__WEBPACK_IMPORTED_MODULE_4__.D.scopingFuncBody(this.commandList[e].target,_))())&&null!=n&&(n=n.toString()),n==this.commandList[e].value?(this.commandList[e].success=!0,this.commandList[e].message=""):(this.commandList[e].success=!1,this.commandList[e].message="value '"+this.commandList[e].value+"' is different from the actual value '"+n+"'");break;case"assertNot":void 0!==(n=new Function(_util_js__WEBPACK_IMPORTED_MODULE_4__.D.scopingFuncBody(this.commandList[e].target,_))())&&null!=n&&(n=n.toString()),n!=this.commandList[e].value?(this.commandList[e].success=!0,
this.commandList[e].message=""):(this.commandList[e].success=!1,this.commandList[e].message="value '"+this.commandList[e].value+"' is same with the actual value '"+n+"'");break;case"object":break;case"exec":var n=new Function(_util_js__WEBPACK_IMPORTED_MODULE_4__.D.scopingFuncBody("WebSquare.wUnit."+this.commandList[e].target,_))();this.commandList[e].success="pass";break;case"assertExec":void 0!==(n=new Function(_util_js__WEBPACK_IMPORTED_MODULE_4__.D.scopingFuncBody("WebSquare.wUnit."+this.commandList[e].target,_))())&&null!=n&&(n=n.toString()),n==this.commandList[e].value?(this.commandList[e].success=!0,this.commandList[e].message=""):(this.commandList[e].success=!1,this.commandList[e].message="value '"+this.commandList[e].value+"' is different from the actual value '"+n+"'");break;case"robot":this.commandList[e].success=!0}}catch(t){return _logger_js__WEBPACK_IMPORTED_MODULE_3__.k.printLog("[wUnit] error to execute command.  idx:"+e),this.commandList[e].success=!1,this.commandList[e].message=t.toString(),_exception_js__WEBPACK_IMPORTED_MODULE_1__.w.printStackTrace(t),!1}return!0},setOptions:function(e){_websquareGlobal_js__WEBPACK_IMPORTED_MODULE_0__.x.extend(this.options,e)},addCommand:function(e,t,_){try{e=e||"",t=t||"",_=_||"",this.commandList.push({command:e,target:t,value:_,success:null,message:""})}catch(e){_exception_js__WEBPACK_IMPORTED_MODULE_1__.w.printStackTrace(e)}},click:function(e){try{var t=document.getElementById(e);t&&t.click()}catch(e){_exception_js__WEBPACK_IMPORTED_MODULE_1__.w.printStackTrace(e,null,this)}},editGridCell:function(e,t,_){try{var n=document.getElementById(e+"_cell_"+t+"_"+_);n&&n.click()}catch(e){_exception_js__WEBPACK_IMPORTED_MODULE_1__.w.printStackTrace(e,null,this)}},getGridScrollX:function(e){try{var t=document.getElementById(e+"_scrollX_right");return t?t.scrollLeft:null}catch(e){_exception_js__WEBPACK_IMPORTED_MODULE_1__.w.printStackTrace(e,null,this)}},getGridScrollXRange:function(e,t,_){try{var n=document.getElementById(e+"_scrollX_right");return n?t<=n.scrollLeft&&n.scrollLeft<=_:null}catch(e){_exception_js__WEBPACK_IMPORTED_MODULE_1__.w.printStackTrace(e,null,this)}},checkCell:function(e){try{var t=this.getEditCellDom(e),_=WebSquare.text.getSelection(t);return _.start!=_.end}catch(e){_exception_js__WEBPACK_IMPORTED_MODULE_1__.w.printStackTrace(e,null,this)}},getEditCellInfo:function(e){try{var t=_util_js__WEBPACK_IMPORTED_MODULE_4__.D.getComponentById(e);if(t){var _=t.getFocusedColumnIndex(),n=t.getFocusedRowIndex(),r=document.getElementById(e+"_cell_"+n+"_"+_);if(r)return t.getCellInfo(r)}return null}catch(e){_exception_js__WEBPACK_IMPORTED_MODULE_1__.w.printStackTrace(e,null,this)}},getEditCellDom:function(e){try{var t=this.getEditCellInfo(e);return document.getElementById(t.mainGridId+t.id)}catch(e){_exception_js__WEBPACK_IMPORTED_MODULE_1__.w.printStackTrace(e,null,this)}},openGridCalendar:function(e){try{var t=this.getEditCellDom(e);t&&this.openCalendar(t.id)}catch(e){_exception_js__WEBPACK_IMPORTED_MODULE_1__.w.printStackTrace(e,null,this)}},openCalendar:function(e){try{var t=document.getElementById(e+"_img");t&&t.click()}catch(e){_exception_js__WEBPACK_IMPORTED_MODULE_1__.w.printStackTrace(e,null,this)}},openSelectbox:function(e){try{var t=document.getElementById(e+"_button");t&&t.click()}catch(e){_exception_js__WEBPACK_IMPORTED_MODULE_1__.w.printStackTrace(e,null,this)}},checkInputCalendarPos:function(e){try{return!0}catch(e){_exception_js__WEBPACK_IMPORTED_MODULE_1__.w.printStackTrace(e,null,this)}},checkGridSelectboxPos:function(e){try{var t=this.getEditCellDom(e);return t?this.checkSelectboxPos(t.id):null}catch(e){_exception_js__WEBPACK_IMPORTED_MODULE_1__.w.printStackTrace(e,null,this)}},checkSelectboxPos:function(e){try{var t=document.getElementById(e),_=WebSquare.style.getAbsoluteLeft(t),n=WebSquare.style.getAbsoluteTop(t),r=(n=WebSquare.style.getAbsoluteTop(t),
t.offsetHeight),i=document.getElementById(e+"_itemTable"),o=WebSquare.style.getAbsoluteLeft(i),c=WebSquare.style.getAbsoluteTop(i),s=i.offsetHeight;return Math.abs(_-o)<3&&(Math.abs(n+r-c)<3||Math.abs(c+s-n)<3)}catch(e){_exception_js__WEBPACK_IMPORTED_MODULE_1__.w.printStackTrace(e,null,this)}},keyinInput:function(e,t,_){try{var n=_core_js__WEBPACK_IMPORTED_MODULE_2__.v.getComponentById(_)||_util_js__WEBPACK_IMPORTED_MODULE_4__.D.getComponentById(e),r=document.getElementById(e);if(n&&r){n.focus&&n.focus();for(var i=0;i<t.length;i++){var o=t.charCodeAt(i),c={charCode:o,keyCode:o,target:r};n.handleKeydownEvent&&(n.handleKeydownEvent(c),WebSquare.event.fireEvent(n,"onkeydown","")),n.handleKeypressEvent&&(n.validator.validateKeyPress(n.render,n.getValue(),c)&&(r.value=r.value+String.fromCharCode(o)),WebSquare.event.fireEvent(n,"onkeypress","")),n.handleKeyupEvent&&(n.handleKeyupEvent(c),WebSquare.event.fireEvent(n,"onkeyup",""))}n.blur&&n.blur()}}catch(e){_exception_js__WEBPACK_IMPORTED_MODULE_1__.w.printStackTrace(e,null,this)}},keyinInputCalendar:function(e,t){try{var _=_util_js__WEBPACK_IMPORTED_MODULE_4__.D.getComponentById(e),n=document.getElementById(e+"_input");if(_&&n){_.focus&&_.focus();for(var r=0;r<t.length;r++){var i=t.charCodeAt(r),o={charCode:i,keyCode:i};_.handleKeydownEvent&&_.handleKeydownEvent(o),_.handleKeypressEvent&&_.validator.validateKeyPress(_.render,_.getValue(),o)&&(n.value=n.value+String.fromCharCode(i)),_.handleKeyupEvent&&_.handleKeyupEvent(o)}_.blur&&_.blur()}}catch(e){_exception_js__WEBPACK_IMPORTED_MODULE_1__.w.printStackTrace(e,null,this)}},keyinGridCell:function(e,t,_){try{var n=_util_js__WEBPACK_IMPORTED_MODULE_4__.D.getComponentById(_||"grid1"),r=document.getElementById(e),i=n.getCellInfo(r),o=n.dom[i.mainGridId+i.id],c=document.getElementById(o.id);if(o&&c){o.focus&&o.focus();for(var s=0;s<t.length;s++){var a=t.charCodeAt(s),l={charCode:a,keyCode:a,target:c};o.handleKeydownEvent&&o.handleKeydownEvent(l),o.handleKeypressEvent&&o.validator.validateKeyPress(o.render,o.getValue(),l)&&(c.value=c.value+String.fromCharCode(a)),o.handleKeyupEvent&&o.handleKeyupEvent(l)}o.blur&&o.blur()}}catch(e){_exception_js__WEBPACK_IMPORTED_MODULE_1__.w.printStackTrace(e,null,this)}},getGridCellDisplayData:function(e,t){try{var _=document.getElementById(e),n=_?_.innerHTML:"";return n=n.replace(/<[^<|>]*>/g,"")}catch(e){_exception_js__WEBPACK_IMPORTED_MODULE_1__.w.printStackTrace(e,null,this)}},getInnerHTML:function(e,t){try{var _=document.getElementById(e);return _?_.innerHTML:null}catch(e){_exception_js__WEBPACK_IMPORTED_MODULE_1__.w.printStackTrace(e,null,this)}},getProperty:function(e,t){try{var _=document.getElementById(e);return _?_[t]:null}catch(e){_exception_js__WEBPACK_IMPORTED_MODULE_1__.w.printStackTrace(e,null,this)}},getStyle:function(e,t){try{var _=document.getElementById(e);return _?_util_js__WEBPACK_IMPORTED_MODULE_4__.D.getStyleProperty(_,t):null}catch(e){_exception_js__WEBPACK_IMPORTED_MODULE_1__.w.printStackTrace(e,null,this)}},doesExist:function(e){try{return!!document.getElementById(e)}catch(e){_exception_js__WEBPACK_IMPORTED_MODULE_1__.w.printStackTrace(e,null,this)}},isVisible:function(e){try{var t=document.getElementById(e);return t?"none"!=_util_js__WEBPACK_IMPORTED_MODULE_4__.D.getStyleProperty(t,"display")&&("hidden"!=_util_js__WEBPACK_IMPORTED_MODULE_4__.D.getStyleProperty(t,"visibility")&&(0!=t.offsetWidth&&0!=t.offsetHeight)):null}catch(e){_exception_js__WEBPACK_IMPORTED_MODULE_1__.w.printStackTrace(e,null,this)}},clickSelectboxIndex:function(e,t){var _=_util_js__WEBPACK_IMPORTED_MODULE_4__.D.getComponentById(e);if("native"==_.options.renderType)_.setSelectedIndex(t);else{wUnit.click(e+"_button");var n=document.getElementById(e+"_itemTable").firstChild.firstChild.childNodes;setTimeout((function(){n[t].firstChild.click()}),20)}},getTextNode:function(e){return document.getElementById(e).firstChild.data},compareXML:function(e,t,_,n){
var r=e.documentElement,i=t.documentElement,o=wUnit.compareNode(r,i,_,n);return o||(_logger_js__WEBPACK_IMPORTED_MODULE_3__.k.printLog("원본 XML "+WebSquare.xml.indent(e)),_logger_js__WEBPACK_IMPORTED_MODULE_3__.k.printLog("비교대상 XML "+WebSquare.xml.indent(t))),o},compareNode:function(e,t,_,n){if(null==e)return _logger_js__WEBPACK_IMPORTED_MODULE_3__.k.printLog("src node is null"),!1;if(null==t)return _logger_js__WEBPACK_IMPORTED_MODULE_3__.k.printLog("dest node is null"),!1;if(e.nodeName!=t.nodeName)return _logger_js__WEBPACK_IMPORTED_MODULE_3__.k.printLog("노드의 이름이 다릅니다. 원본["+e.nodeName+"] 비교대상["+t.nodeName+"]"),!1;if(void 0!==n)for(var r=0;r<n.length;r++)e.removeAttribute(n[r]),t.removeAttribute(n[r]);if(_){var i=e.attributes;for(r=0;null!=i&&r<i.length;r++){var o=i[r];if(WebSquare.nodeValueDeprecated){if(t.getAttribute(o.name)!=o.value)return _logger_js__WEBPACK_IMPORTED_MODULE_3__.k.printLog("속성 ["+o.name+"] 이전값["+o.value+"] 변경된값["+t.getAttribute(o.name)+"]"),!1}else if(t.getAttribute(o.nodeName)!=o.nodeValue)return _logger_js__WEBPACK_IMPORTED_MODULE_3__.k.printLog("속성 ["+o.nodeName+"] 이전값["+o.nodeValue+"] 변경된값["+t.getAttribute(o.nodeName)+"]"),!1}}for(var c=e.firstChild,s=t.firstChild;null!=c;){if(null==s)return _logger_js__WEBPACK_IMPORTED_MODULE_3__.k.printLog(e.nodeName+" 하위노드의 개수가 다릅니다. 원본노드수["+e.childNodes.length+"] 비교대상노드수["+t.childNodes.length+"]"),!1;for(;null!=c&&(3==c.nodeType||4==c.nodeType||8==c.nodeType);)c=c.nextSibling;for(;null!=s&&(3==s.nodeType||4==s.nodeType||8==s.nodeType);)s=s.nextSibling;if(null==c||null==s)break;if(c.nodeType!=s.nodeType)return _logger_js__WEBPACK_IMPORTED_MODULE_3__.k.printLog(e.nodeName+" 하위노드의 종류가 다릅니다. 원본["+c.nodeType+"] 비교대상["+s.nodeType+"]"),!1;if(1==c.nodeType){if(!wUnit.compareNode(c,s,_,n))return!1}else if(3==c.nodeType){if(c.nodeValue!=s.nodeValue)return _logger_js__WEBPACK_IMPORTED_MODULE_3__.k.printLog(e.nodeName+" 하위노드의 TextNode 값이 다릅니다. 원본["+c.nodeType+"] 비교대상["+s.nodeType+"]"),!1}else if(4==c.nodeType&&c.nodeValue!=s.nodeValue)return _logger_js__WEBPACK_IMPORTED_MODULE_3__.k.printLog(e.nodeName+" 하위노드의 CData 값이 다릅니다. 원본["+c.nodeType+"] 비교대상["+s.nodeType+"]"),!1;c=c.nextSibling,s=s.nextSibling}if(null!=c){for(;null!=c&&(8==c.nodeType||3==c.nodeType||4==c.nodeType);)c=c.nextSibling;if(null!=c)return _logger_js__WEBPACK_IMPORTED_MODULE_3__.k.printLog(e.nodeName+" 하위노드의 개수가 다릅니다. 원본노드수["+e.childNodes.length+"] 비교대상노드수["+t.childNodes.length+"]"),!1}if(null!=s){for(;null!=s&&(8==s.nodeType||3==s.nodeType||4==s.nodeType);)s=s.nextSibling;if(null!=s)return _logger_js__WEBPACK_IMPORTED_MODULE_3__.k.printLog(e.nodeName+" 하위노드의 개수가 다릅니다. 원본노드수["+e.childNodes.length+"] 비교대상노드수["+t.childNodes.length+"]"),!1}return!0},getObjById:function(id){try{if("string"!=typeof id){var ret=id;try{ret=eval(id)}catch(e){ret=id}return ret}if(WebSquare.idCache[WebSquare.idToUUID[id]])return WebSquare.idCache[WebSquare.idToUUID[id]];var ret;try{ret=eval(id)}catch(e){_exception_js__WEBPACK_IMPORTED_MODULE_1__.w.printStackTrace(e)}if(null==ret&&WebSquare.strictMode){var sId=id,prefix=WebSquare.strictModeFrame.id+"_";"G_"===id.slice(0,2)?sId="G_"+prefix+id.slice(2):id.slice(0,prefix.length)!==prefix&&(sId=prefix+id),sId=sId.replace(new RegExp("("+WebSquare.strictModeFrame.id+"\\_){2,}","g"),prefix);var comp=WebSquare.idCache[WebSquare.idToUUID[sId]];if(comp)ret=comp;else try{ret=eval(sId)}catch(e){ret=id}}return null==ret&&(ret=id),ret}catch(e){return id}},getDomById:function(id){try{if("string"!=typeof id){var ret=id;try{ret=eval(id)}catch(e){ret=id}return ret}var ret=document.getElementById(id);if(null==ret&&WebSquare.strictMode){var prefix=WebSquare.strictModeFrame.id+"_",prefixReg=new RegExp("("+WebSquare.strictModeFrame.id+"\\_){2,}","g"),sId=(prefix+id).replace(prefixReg,prefix);if(ret=document.getElementById(sId),null==ret){var gIdx=sId.indexOf("G_");gIdx>=0&&(sId=sId.slice(0,gIdx+2)+prefix+sId.slice(gIdx+2),sId=sId.replace(prefixReg,prefix),ret=document.getElementById(sId),
null==ret&&(sId=(prefix+sId).replace(prefixReg,prefix),ret=document.getElementById(sId))),null==ret&&(ret=document.getElementById(sId.replace(prefix,"")))}}return ret}catch(e){return null}},getJq:function(e){try{var t=$(e);if(0===t.length){var _=e.wq_trim(),n=_.slice(1),r=WebSquare.strictModeFrame.id+"_";"G_"===n.slice(0,2)?n="G_"+r+n.slice(2):n.slice(0,r.length)!==r&&(n=r+n),t=$(_.slice(0,1)+n)}return t}catch(e){_exception_js__WEBPACK_IMPORTED_MODULE_1__.w.printStackTrace(e,null,this)}}}}}]);