(self.webpackChunkwebpack_test=self.webpackChunkwebpack_test||[]).push([[587],{2587:function(t,e,s){"use strict";s.r(e),s.d(e,{fwGanttChart:function(){return d}});var i=s(2137);function o(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}var a,r=s(7757),n=s.n(r),h=s(9122),c=s(7827),l=s(1160),p=s(6079),u=s(5316),d=function(t,e,s){u.s.call(this,t,e,s)};h.x.extend(d.prototype,u.s.prototype),d.prototype.defaultOptions=(o(a={pluginType:"uiplugin.fwGanttChart",pluginName:"fwGanttChart",useConfig:!0,accessibility:!1,displayData:!1,autoCategory:!0,multiTasks:!1,quarterNames:"",monthNames:"",plotColor:"2ec6c8,b5a1dd,5ab0ee,f4984e,d77a80,90bddc,fe5d55,b5dc59,9ea7b3,00ba84,878bb6,757a85",version:"3.7",dataColumns:"",resizeLastMonth:!1},"accessibility",!1),o(a,"title",""),a),d.prototype.initialize=function(t){this.fcObj=null,this.chartObj={},this.taskColorObj={},this.attributeObj=null,this.categories=null,this.processes=null,this.datatable=null,this.tasks=null,this.legends=null,this.trendlines=null,this.milestones=null,this.connectors=null,this.options.quarterNames=this.options.quarterNames||WebSquare.language.getMessage("fwGanttChart_quarterNames")||"1분기,2분기,3분기,4분기",this.options.monthNames=this.options.monthNames||WebSquare.language.getMessage("fwGanttChart_monthNames")||"1월,2월,3월,4월,5월,6월,7월,8월,9월,10월,11월,12월",!t.getAttribute("version")&&c.v.getConfiguration("/WebSquare/fusionchart/version/@value")&&(this.options.version=c.v.getConfiguration("/WebSquare/fusionchart/version/@value"))},d.prototype.initAsync=(0,i.Z)(n().mark((function t(){return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("undefined"!=typeof FusionCharts){t.next=27;break}if("3.19"!==this.options.version&&(this.options.version||"3.19"!=c.v.getConfiguration("/WebSquare/fusionchart/version/@value"))){t.next=7;break}return this.options.version="3.19",t.next=5,inquires("externalJS/FusionCharts3.19/FusionCharts_all.js");case 5:t.next=27;break;case 7:if("3.15"!==this.options.version&&(this.options.version||"3.15"!=c.v.getConfiguration("/WebSquare/fusionchart/version/@value"))){t.next=13;break}return this.options.version="3.15",t.next=11,inquires("externalJS/FusionCharts3.15.2/FusionCharts_all.js");case 11:t.next=27;break;case 13:if("3.13"!==this.options.version&&(this.options.version||"3.13"!=c.v.getConfiguration("/WebSquare/fusionchart/version/@value"))){t.next=19;break}return this.options.version="3.13",t.next=17,inquires("externalJS/FusionCharts3.13/js/FusionCharts_all.js");case 17:t.next=27;break;case 19:if("3.11"!=this.options.version&&(this.options.version||"3.11"!=c.v.getConfiguration("/WebSquare/fusionchart/version/@value"))){t.next=25;break}return this.options.version="3.11",t.next=23,inquires("externalJS/FusionCharts3.11.0/FusionCharts_all.js");case 23:t.next=27;break;case 25:return t.next=27,inquires("externalJS/FusionCharts3.7/FusionCharts_all.js");case 27:case"end":return t.stop()}}),t,this)}))),d.prototype.toHTML=function(){var t=[],e=""==this.options.style?"":"style='"+this.options.style+"'";return t.push("<div id='"+this.id+"' "+e+" class='w2fwGanttChart "+this.options.className+"'>"),t.push("</div>"),t.join("")},d.prototype.setAction=function(){if("3.19"==this.options.version&&"function"==typeof FusionCharts.options._setActivate&&FusionCharts.options._setActivate(),this.fcObj=new FusionCharts("gantt","fw_gantt_"+this.id,"100%",this.render.offsetHeight||"100%"),this.setDefaultOption(),this.modelControl.isDataCollectionRefBinded){var t=this.modelControl.dataCollectionRefInfo.dataComp,e={};e.dateformat=this.options.dateformat,e.timeBase=this.options.timeBase,e.monthNames=this.options.monthNames,e.timeGap=this.options.timeGap,e.plotColor=this.options.plotColor,e.processNode=this.options.processNode,e.dataColumns=this.options.dataColumns,e.taskNode=this.options.taskNode,e.startDateNode=this.options.startDateNode,e.endDateNode=this.options.endDateNode,e.autoCategory=this.options.autoCategory,
e.categoryDepth=this.options.categoryDepth,e.multiTasks=this.options.multiTasks,e.quarterNames=this.options.quarterNames,e.resizeLastMonth=this.options.resizeLastMonth,e.processIdNode=this.options.processIdNode||null,e.taskIdNode=this.options.taskIdNode||null,e.version=this.options.version,t.getRowCount()>0&&this.setJSONData(t.getfwGanttChartData(e))}},d.prototype.refresh=function(){try{if(this.modelControl.isDataCollectionRefBinded){var t=this.modelControl.dataCollectionRefInfo.dataComp,e={};if(e.dateformat=this.options.dateformat,e.timeBase=this.options.timeBase,e.monthNames=this.options.monthNames,e.timeGap=this.options.timeGap,e.plotColor=this.options.plotColor,e.processNode=this.options.processNode,e.dataColumns=this.options.dataColumns,e.taskNode=this.options.taskNode,e.startDateNode=this.options.startDateNode,e.endDateNode=this.options.endDateNode,e.autoCategory=this.options.autoCategory,e.categoryDepth=this.options.categoryDepth,e.multiTasks=this.options.multiTasks,e.quarterNames=this.options.quarterNames,e.resizeLastMonth=this.options.resizeLastMonth,e.taskIdNode=this.options.taskIdNode||null,t.getRowCount()>0){var s=t.getfwGanttChartData(e);this.categories=s.categories,this.setJSONData(s)}}}catch(t){l.w.printStackTrace(t)}},d.prototype.setJSONData=function(t){try{this.chartObj=t,this.draw()}catch(t){l.w.printStackTrace(t)}},d.prototype.getJSONData=function(){try{return FusionCharts.items["fw_gantt_"+this.id].getJSONData()}catch(t){l.w.printStackTrace(t)}},d.prototype.fc=function(){try{return FusionCharts.items["fw_gantt_"+this.id]}catch(t){l.w.printStackTrace(t)}},d.prototype.draw=function(){try{if(null!=this.attributeObj)for(var t in this.attributeObj){if(!this.chartObj.chart){this.chartObj.chart=this.attributeObj;break}this.chartObj.chart[t]=this.attributeObj[t]}if(this.categories){this.chartObj.categories=[];for(var e=0;e<this.categories.length;e++)this.chartObj.categories.push(this.categories[e])}if(this.processes&&(this.chartObj.processes||(this.chartObj.processes={}),this.chartObj.processes))for(var t in this.processes)this.chartObj.processes[t]=this.processes[t];if(this.datatable&&(this.chartObj.datatable||(this.chartObj.datatable={}),this.chartObj.datatable))for(var t in this.datatable)if("datacolumn"===t)for(e=0;e<this.datatable.datacolumn.length;e++)for(var s in this.datatable.datacolumn[e])this.chartObj.datatable.datacolumn[e][s]=this.datatable.datacolumn[e][s];else this.chartObj.datatable[t]=this.datatable[t];if(this.tasks&&(this.chartObj.tasks||(this.chartObj.tasks={}),this.chartObj.tasks))for(var t in this.tasks)this.chartObj.tasks[t]=this.tasks[t];if(this.taskColorObj)for(t in this.taskColorObj)for(e=0;e<this.chartObj.tasks.task.length;e++)t===this.chartObj.tasks.task[e].id&&(this.chartObj.tasks.task[e].color=this.taskColorObj[t]);this.trendlines&&(this.chartObj.trendlines||(this.chartObj.trendlines=[]),this.chartObj.trendlines.push(this.trendlines)),this.milestones&&(this.chartObj.milestones||(this.chartObj.milestones={},this.chartObj.milestones.milestone=[]),this.chartObj.milestones.milestone.push(this.milestones)),this.connectors&&(this.chartObj.connectors||(this.chartObj.connectors=[]),this.chartObj.connectors.push({connector:[]}),this.chartObj.connectors[0].connector.push(this.connectors)),this.legends&&(this.chartObj.legend||(this.chartObj.legend=[]),this.chartObj.legend=this.legends);var i=this.fc();if(i.setJSONData(this.chartObj),i.isActive()||i.render(this.id),1==this.options.accessibility){var o=document.getElementById("fw_gantt_"+this.id);o&&o.setAttribute("aria-hidden",!0),this.setAccessibility(!0)}}catch(t){l.w.printStackTrace(t)}},d.prototype.setAccessibility=function(t){try{var e=document.getElementById("accessibility_"+this.id);if(0==t)return void(e&&e.remove());var s=this.getDataListInfo(),i=WebSquare.util.getComponentById(s.id,this.scope_id);if(i){if(null==e){var o=document.createElement("table");o.id="accessibility_"+this.id,WebSquare.style.addClass(o,"w2fusionchart_accessibility"),
1==this.options.displayData&&(WebSquare.style.removeClass(o,"w2fusionchart_accessibility"),WebSquare.style.addClass(o,"w2tb"),WebSquare.style.addClass(o,"w2fusionchart_accessibility_table")),this.render.appendChild(o,this.render.lastChild),e=document.getElementById("accessibility_"+this.id)}e.innerHTML="";var a="",r=(this.chartObj,this.attributeObj.caption);r&&(a="<caption>"+r+"</caption>"),a+="<thead><tr>";for(var n=i.getColCnt(),h=0;h<n;h++){a+="<th scope='col' class='w2tb_th'>"+i.getColumnInfo(h,0).name+"</th>"}a+="</tr></thead>",a+="<tbody>";for(h=0;h<i.getRowCount();h++){a+="<tr>";for(var c=i.getRowData(h),l=0;l<c.length;l++)a+="<td class='w2tb_td'>"+c[l]+"</td>";a+="</tr>"}a+="</tbody>",e.innerHTML=a}}catch(t){WebSquare.exception.printStackTrace(t)}},d.prototype.setDefaultOption=function(){try{this.attributeObj={chartLeftMargin:"0",chartRightMargin:"0",chartTopMargin:"0",chartBottomMargin:"0",toolTipColor:"#ffffff",toolTipBorderThickness:"0",toolTipBgColor:"#000000",toolTipBgAlpha:"70",toolTipBorderRadius:"2",toolTipPadding:"5",dateformat:"yyyyMMdd"==this.options.dateformat?"yyyy/mm/dd":this.options.dateformat,caption:this.options.title}}catch(t){l.w.printStackTrace(t)}},d.prototype.setChartAttribute=function(t){try{for(var e in null==this.attributeObj&&(this.attributeObj={}),t)t.hasOwnProperty(e)&&(this.attributeObj[e.toLowerCase()]=t[e])}catch(t){l.w.printStackTrace(t)}},d.prototype.getChartAttribute=function(t){try{return this.fcObj.getChartAttribute(t)}catch(t){l.w.printStackTrace(t)}},d.prototype.setCategories=function(t){try{this.categories=[],this.categories.push(t)}catch(t){l.w.printStackTrace(t)}},d.prototype.addCategories=function(t){try{null==this.categories&&(this.categories=[]),this.categories.unshift(t)}catch(t){l.w.printStackTrace(t)}},d.prototype.setProcessesAttribute=function(t){try{this.processes=t}catch(t){l.w.printStackTrace(t)}},d.prototype.setDatatableAttribute=function(t){try{this.datatable=t}catch(t){l.w.printStackTrace(t)}},d.prototype.setTasksAttribute=function(t){try{this.tasks=t}catch(t){l.w.printStackTrace(t)}},d.prototype.setTasksColor=function(t,e){try{this.taskColorObj[t]=e,this.draw()}catch(t){l.w.printStackTrace(t)}},d.prototype.setTrendLine=function(t){try{this.trendlines=t}catch(t){l.w.printStackTrace(t)}},d.prototype.setMilestone=function(t){try{this.milestones=t}catch(t){l.w.printStackTrace(t)}},d.prototype.setConnector=function(t){try{this.connectors=t}catch(t){l.w.printStackTrace(t)}},d.prototype.exportJSChart=function(t){try{t||(t="jpg");var e=this.options.id||"fusionChart",s=this.getSVGString();if(s){var i=encodeURI(s+"ExportType="+t+"ExportFileName="+e),o=h.x._resourceURI+"engine/servlet/exportFusionChart.jsp";c.v.download(o,i,"post")}}catch(t){l.w.printStackTrace(t)}},d.prototype.getSVGString=function(){try{var t=this.fc().getSVGString();if(t)return t=(t=(t=(t=(t=t.wq_replaceAll('shape-rendering="default"',"shape-rendering='auto'")).wq_replaceAll('visibility=""',"visibility='inherit'")).wq_replaceAll('text-anchor="undefined"',"text-anchor='start'")).wq_replaceAll("1e-006","0.000001")).wq_replaceAll('font-family="15"','font-family="Verdana"');p.k.printLog("not found svg object")}catch(t){l.w.printStackTrace(t)}},d.prototype.getDataListInfo=function(){try{if(this.modelControl.isDataCollectionRefBinded){var t={};return t.ref=this.options.ref,t.id=this.modelControl.dataCollectionRefInfo.dataComp.id,t.taskNode=this.options.taskNode,t.taskIdNode=this.options.taskIdNode,t.startDateNode=this.options.startDateNode,t.endDateNode=this.options.endDateNode,t.processNode=this.options.processNode,t}return null}catch(t){l.w.printStackTrace(t)}}}}]);