(self.webpackChunkwebpack_test=self.webpackChunkwebpack_test||[]).push([[7643],{7643:function(t,e,i){"use strict";i.r(e),i.d(e,{fwPyramidChart:function(){return d}});var o=i(2137),s=i(7757),a=i.n(s),r=i(9122),n=i(7827),l=i(1160),h=i(8754),c=i(6079),p=i(5316),d=function(t,e,i){p.s.call(this,t,e,i)};r.x.extend(d.prototype,p.s.prototype),d.prototype.defaultOptions={pluginType:"uiplugin.fwPyramidChart",pluginName:"fwPyramidChart",useConfig:!0,accessibility:!1,displayData:!1,title:"",seriesType:"advanced",plotColor:"2ec6c8,b5a1dd,5ab0ee,f4984e,d77a80,90bddc,fe5d55,b5dc59,9ea7b3,00ba84,878bb6,757a85",version:"3.7"},d.prototype.initialize=function(t){this.fcObj=null,this.chartObj={},this.attributeObj=null,this.plotColorObj=null,!t.getAttribute("version")&&n.v.getConfiguration("/WebSquare/fusionchart/version/@value")&&(this.options.version=n.v.getConfiguration("/WebSquare/fusionchart/version/@value"))},d.prototype.initAsync=(0,o.Z)(a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("undefined"!=typeof FusionCharts){t.next=27;break}if("3.19"!==this.options.version&&(this.options.version||"3.19"!=n.v.getConfiguration("/WebSquare/fusionchart/version/@value"))){t.next=7;break}return this.options.version="3.19",t.next=5,inquires("externalJS/FusionCharts3.19/FusionCharts_all.js");case 5:t.next=27;break;case 7:if("3.15"!==this.options.version&&(this.options.version||"3.15"!=n.v.getConfiguration("/WebSquare/fusionchart/version/@value"))){t.next=13;break}return this.options.version="3.15",t.next=11,inquires("externalJS/FusionCharts3.15.2/FusionCharts_all.js");case 11:t.next=27;break;case 13:if("3.13"!==this.options.version&&(this.options.version||"3.13"!=n.v.getConfiguration("/WebSquare/fusionchart/version/@value"))){t.next=19;break}return this.options.version="3.13",t.next=17,inquires("externalJS/FusionCharts3.13/js/FusionCharts_all.js");case 17:t.next=27;break;case 19:if("3.11"!=this.options.version&&(this.options.version||"3.11"!=n.v.getConfiguration("/WebSquare/fusionchart/version/@value"))){t.next=25;break}return this.options.version="3.11",t.next=23,inquires("externalJS/FusionCharts3.11.0/FusionCharts_all.js");case 23:t.next=27;break;case 25:return t.next=27,inquires("externalJS/FusionCharts3.7/FusionCharts_all.js");case 27:case"end":return t.stop()}}),t,this)}))),d.prototype.toHTML=function(){var t=[],e=""==this.options.style?"":"style='"+this.options.style+"'";return t.push("<div id='"+this.id+"' "+e+" class='w2fwPyramidChart "+this.options.className+"'>"),t.push("</div>"),t.join("")},d.prototype.setAction=function(){try{if("3.19"==this.options.version&&"function"==typeof FusionCharts.options._setActivate&&FusionCharts.options._setActivate(),this.fcObj=new FusionCharts("pyramid","fw_pyramid_"+this.id,"100%",this.render.offsetHeight||"100%"),this.setDefaultOption(),this.modelControl.isDataCollectionRefBinded){var t,e=this.modelControl.dataCollectionRefInfo.dataComp;if("simple"==this.options.seriesType.toLowerCase()){if(e.getRowCount()>0)(t=e.getFusionChartSimpleData("pyramid",this.options.labelNode,this.options.seriesNode,this.options.valueNode))?this.setJSONData(t):c.k.printLog(this.id+" : Simple seriesType does not support")}else if(e.getRowCount()>0)(t=e.getFusionChartData("pyramid",this.options.labelNode,this.options.seriesColumns))&&this.setJSONData(t)}}catch(t){l.w.printStackTrace(t)}},d.prototype.refresh=function(){try{if(this.modelControl.isDataCollectionRefBinded){var t,e=this.modelControl.dataCollectionRefInfo.dataComp;if("simple"==this.options.seriesType.toLowerCase())(t=e.getFusionChartSimpleData("pyramid",this.options.labelNode,this.options.seriesNode,this.options.valueNode))?this.setJSONData(t):c.k.printLog(this.id+" : Simple seriesType does not support");else(t=e.getFusionChartData("pyramid",this.options.labelNode,this.options.seriesColumns))&&this.setJSONData(t)}}catch(t){l.w.printStackTrace(t)}},d.prototype.setJSONData=function(t){try{this.chartObj=t
;var e=this.options.plotColor.split(",");this.setPlotDefaultColor(e),this.draw()}catch(t){l.w.printStackTrace(t)}},d.prototype.getJSONData=function(){try{return this.fcObj.getJSONData()}catch(t){l.w.printStackTrace(t)}},d.prototype.fc=function(){try{return FusionCharts.items["fw_pyramid_"+this.id]}catch(t){l.w.printStackTrace(t)}},d.prototype.draw=function(){try{null!=this.attributeObj&&this._setChartAttribute(this.attributeObj),null!=this.plotColorObj&&this._setPlotColor(this.plotColorObj),null!=this.attributeObj&&(this.chartObj.chart=this.attributeObj);var t=this.fc();if(t.setJSONData(this.chartObj),t.isActive()||t.render(this.id),1==this.options.accessibility){var e=document.getElementById("fw_pyramid_"+this.id);e&&e.setAttribute("aria-hidden",!0),this.setAccessibility(!0)}}catch(t){l.w.printStackTrace(t)}},d.prototype.setDefaultOption=function(){try{var t={showborder:"1",animation:"1",bgcolor:"FFFFFF",canvasbgcolor:"FFFFFF",showplotborder:"0",divlinethickness:"1",canvasbordercolor:"FFFFFF",showalternatehgridcolor:"0",showvalues:"0",plotgradientcolor:"",showalternatevgridcolor:"0",divlinecolor:"b3b3b3",bordercolor:"b3b3b3",use3dlighting:"0",showshadow:"0",formatnumberscale:"0",caption:this.options.title};for(var e in t)this.attributeObj&&void 0!==this.attributeObj[e]&&(t[e]=this.attributeObj[e]);this.setChartAttribute(t)}catch(t){l.w.printStackTrace(t)}},d.prototype.setPlotDefaultColor=function(t){try{var e=this.chartObj;if(null!=e.dataset)for(var i=0;i<e.dataset.length&&!(i>=t.length);i++)e.dataset[i].color=t[i];else if(null!=e.data)for(var o=0;o<e.data.length&&!(o>=t.length);o++)e.data[o].color=t[o]}catch(t){l.w.printStackTrace(t)}},d.prototype.setChartAttribute=function(t){try{for(var e in null==this.attributeObj&&(this.attributeObj={}),t)t.hasOwnProperty(e)&&(this.attributeObj[e.toLowerCase()]=t[e])}catch(t){l.w.printStackTrace(t)}},d.prototype._setChartAttribute=function(t){try{this.chartObj.chart=t}catch(t){l.w.printStackTrace(t)}},d.prototype.setPlotColor=function(t){try{this.plotColorObj=t}catch(t){l.w.printStackTrace(t)}},d.prototype._setPlotColor=function(t){try{var e=this.chartObj;if(null!=e.dataset)for(var i=0;i<e.dataset.length&&!(i>=t.length);i++)e.dataset[i].color=t[i];else if(null!=e.data)for(i=0;i<e.data.length&&!(i>=t.length);i++)e.data[i].color=t[i]}catch(t){l.w.printStackTrace(t)}},d.prototype.getChartAttribute=function(t){try{return FusionCharts.items["fw_pyramid_"+this.id].getChartAttribute(t)}catch(t){l.w.printStackTrace(t)}},d.prototype.setChartColumnRef=function(t,e,i){try{if(t=h.D.isNull(t)?this.options.ref:t,e=h.D.isNull(e)?this.options.labelNode:e,i=h.D.isNull(i)?this.options.seriesColumns:i,this.options.ref!=t){""!=this.options.ref&&this.modelControl.dataCollectionRefInfo.dataComp.removeChild(this.id);var o=t.replace("data:","");WebSquare.DataCollection.comp[o].addChild(h.D.getComponentById(this.id))}this.options.ref=t,this.options.labelNode=e,this.options.seriesColumns=i,this.modelControl.useRef=!0,this.modelControl.setRef(t),this.refresh()}catch(t){l.w.printStackTrace(t)}},d.prototype.setChartColumnSimpleRef=function(t,e,i,o){try{if(t=h.D.isNull(t)?this.options.ref:t,e=h.D.isNull(e)?this.options.labelNode:e,i=h.D.isNull(i)?this.options.seriesNode:i,o=h.D.isNull(o)?this.options.valueNode:o,this.options.ref!=t){""!=this.options.ref&&this.modelControl.dataCollectionRefInfo.dataComp.removeChild(this.id);var s=t.replace("data:","");WebSquare.DataCollection.comp[s].addChild(h.D.getComponentById(this.id))}this.options.ref=t,this.options.labelNode=e,this.options.seriesNode=i,this.options.valueNode=o,this.modelControl.useRef=!0,this.modelControl.setRef(t),this.refresh()}catch(t){l.w.printStackTrace(t)}},d.prototype.exportJSChart=function(t){try{t||(t="jpg");var e=this.options.id||"fusionChart",i=this.getSVGString();if(i){var o=encodeURI(i+"ExportType="+t+"ExportFileName="+e),s=r.x._resourceURI+"engine/servlet/exportFusionChart.jsp";n.v.download(s,o,"post")}}catch(t){l.w.printStackTrace(t)}},
d.prototype.getSVGString=function(){try{var t=this.fc().getSVGString();if(t)return t=(t=(t=(t=(t=t.wq_replaceAll('shape-rendering="default"',"shape-rendering='auto'")).wq_replaceAll('visibility=""',"visibility='inherit'")).wq_replaceAll('text-anchor="undefined"',"text-anchor='start'")).wq_replaceAll("1e-006","0.000001")).wq_replaceAll('font-family="15"','font-family="Verdana"');c.k.printLog("not found svg object")}catch(t){l.w.printStackTrace(t)}},d.prototype.setAccessibility=function(t){try{var e=document.getElementById("accessibility_"+this.id);if(0==t)return void(e&&e.remove());var i="",o="";if(null==e){var s=document.createElement("table");s.id="accessibility_"+this.id,WebSquare.style.addClass(s,"w2fusionchart_accessibility"),1==this.options.displayData&&(WebSquare.style.removeClass(s,"w2fusionchart_accessibility"),WebSquare.style.addClass(s,"w2tb"),WebSquare.style.addClass(s,"w2fusionchart_accessibility_table")),this.render.appendChild(s,this.render.lastChild),e=document.getElementById("accessibility_"+this.id)}e.innerHTML="";var a="",r=this.chartObj,n=this.attributeObj.caption;n&&(a="<caption>"+n+"</caption>"),a+="<thead><tr>",r.dataName&&(a+="<th scope='col' class='w2tb_th'>"+r.dataName.labelName+"</th>",a+="<th scope='col' class='w2tb_th'>"+r.dataName.valueName+"</th>"),a+="</tr></thead>",a+="<tbody>";for(var h=0;h<r.data.length;h++)a+="<tr>",r.data[h]?(i=r.data[h].label?r.data[h].label:r.data[h].LABEL,o=r.data[h].value?r.data[h].value:r.data[h].VALUE):(i="",o=""),a+="<td class='w2tb_td'>"+i+"</td>",a+="<td class='w2tb_td'>"+o+"</td>",a+="</tr>";a+="</tbody>",e.innerHTML=a}catch(t){l.w.printStackTrace(t)}},d.prototype.getDataListInfo=function(){try{var t={};if(this.modelControl.isDataCollectionRefBinded){var e=this.options.ref.replace("data:","");return t.id=e.slice(0),"simple"==this.options.seriesType.toLowerCase()?(t.ref=this.options.ref,t.labelNode=this.options.labelNode,t.serieNode=this.options.seriesNode,t.valueNode=this.options.valueNode):(t.ref=this.options.ref,t.labelNode=this.options.labelNode,t.seriesColumns=this.options.seriesColumns),t}return null}catch(t){l.w.printStackTrace(t)}}}}]);