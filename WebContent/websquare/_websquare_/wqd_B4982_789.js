(self.webpackChunkwebpack_test=self.webpackChunkwebpack_test||[]).push([[789],{6789:(t,e,i)=>{"use strict";i.r(e),i.d(e,{mapchart:()=>l});var a=i(2981),o=i(2085),s=i(1960),r=i(3082),n=i(9304),p=i(6615),l=function(t,e,i){p.s.call(this,t,e,i)};l.prototype.initAsync=async function(){l.isImported||(await inquires("externalJS/mapchart/d3.min.js"),await inquires("externalJS/mapchart/topojson.min.js"),await inquires("externalJS/mapchart/textures.min.js"),l.isImported=!0)},a.x.extend(l.prototype,p.s.prototype),l.prototype.defaultOptions={pluginType:"uiplugin.mapchart",pluginName:"mapchart",useConfig:!0,userEvents:["onbeforemapchange","onaftermapchange","onmapmouseover","onmapmouseout","onmapclick","onmapdblclick","onmapmousemove","onmapdatachange"],dataMapPath:"",dataMapRatio_level0:"simp1",dataMapRatio_level1:"simp1",dataMapRatio_level2:"simp1",startMap:"0",dataLists:"",zoomMin:"0.2",zoomMax:"5",maxDepth:-1,usePattern:!0,useMarker:!1,contextFormatter:"",showMunicipalityLabel:!0,setTooltipStrFunc:"",event_drillup:"oncontextmenu",event_drilldown:"onclick",event_select:"onmouseover",event_deselect:"onmouseout",event_tooltipon:"onmouseover",event_tooltipoff:"onmouseout",event_zoom:"onzoom",event_drag:"ondrag",accessibility:!1},l.prototype.initialize=function(t){try{if(!this.options.dataMapPath){var e=location.pathname.lastIndexOf("/");this.options.dataMapPath=e>=0?location.pathname.slice(0,e)+"/_websquare_/externalJS/mapchart":"/_websquare_/externalJS/mapchart"}this.currentMap="",this._dataListsObj={},this._load=!1,this.patternList=[]}catch(t){o.w.printStackTrace(t)}},l.prototype.toHTML=function(){try{var t=[],e=""==this.options.style?"":"style='"+this.options.style+"'";return t.push("<div id='"+this.id+"' "+e+" class='w2mapchart "+this.options.className+"'>"),t.push("<div id='"+this.id+"_tooltip' class='w2mapchart_tooltip' style='position:absolute;border:1px solid black;display:none;z-index:10;'></div>"),t.push("<div id='"+this.id+"_marker_tooltip' class='' style='position:absolute;display:none;z-index:10;'></div>"),1==this.options.accessibility&&(t.push("<div id='"+this.id+"_accessibilityZone' class='w2mapchart_accessibility'>"),t.push("<select id='"+this.id+"_level1' class='w2mapchart_accessibility_select'><option value='LEVEL1'>LEVEL1</options></select>"),t.push("<select id='"+this.id+"_level2' class='w2mapchart_accessibility_select'><option value='LEVEL2'>LEVEL2</options></select>"),t.push("<select id='"+this.id+"_level3' class='w2mapchart_accessibility_select'><option value='LEVEL3'>LEVEL3</options></select>"),t.push("</div>")),t.push("</div>"),t.join("")}catch(t){o.w.printStackTrace(t)}},l.prototype.setAction=function(){try{p.s.addCheckResize(this.uuid,"checkResize"),this.render&&this.render.offsetWidth>0&&this.render.offsetHeight>0&&(this._marker_tooltip=this.getElementById(this.id+"_marker_tooltip"),this.createMap({width:this.render.offsetWidth,height:this.render.offsetHeight,topoFile:this.getDataMapPath(this.options.startMap),topoObj:this.options.startMap}))}catch(t){o.w.printStackTrace(t)}},l.prototype.refreshItemset=function(){},l.prototype.finalize=function(){},l.prototype.createMap=function(t){try{var e=this;this.currentMap=t.topoObj
;var i=d3.select("#"+this.id).append("svg").attr("width",t.width).attr("height",t.height).attr("id",this.id+"_svg").style("overflow","hidden"),p=i.append("g").attr("class","w2mapchart_map").attr("id",this.id+"_map"),l=i.append("g").attr("class","w2mapchart_places").attr("id",this.id+"_places"),c=this.id,h=this.uuid,d=t.width,u=t.height,f=parseFloat(this.options.zoomMin),m=parseFloat(this.options.zoomMax),v=this.options.event_drillup.replace(/^on/,""),y=this.options.event_drilldown.replace(/^on/,""),B=this.options.event_select.replace(/^on/,""),k=this.options.event_deselect.replace(/^on/,""),D=this.options.event_tooltipon.replace(/^on/,""),g=this.options.event_tooltipoff.replace(/^on/,""),_=this.options.event_drag.replace(/^on/,""),b=this.options.event_zoom.replace(/^on/,""),z=this.patternList,W=null,w=null;this.options.setTooltipStrFunc&&(W=r.D.getGlobalFunction(this.options.setTooltipStrFunc,this.scope_id)),this.options.contextFormatter&&(w=r.D.getGlobalFunction(this.options.contextFormatter,this.scope_id));var M=this.options.markerImage||"m0.99,-32a10.982,10.982 0 0 0 -10.99,10.99c0,8.242 10.99,20.41 10.99,20.41s10.99,-12.168 10.99,-20.41a10.982,10.982 0 0 0 -10.99,-10.99zm0,14.915a3.925,3.925 0 1 1 3.925,-3.925a3.926,3.926 0 0 1 -3.925,3.925z";d3.json(t.topoFile,(function(o,S){var x,E=d/S.transform.scale[0],L=u/S.transform.scale[1]*.8,q=Math.min(E,L)/180,C=Math.min(1.25*E*S.transform.scale[1],u),T=Math.min(Math.min(E,L)*S.transform.scale[0],d),j=C+(u-C)/2-u/100,P=(d-T)/2+d/100,F=d3.geo.mercator().center(S.transform.translate).scale(q).translate([P,j]);if(i.on(v+".drillup",(function(){d3.event.preventDefault(),WebSquare.idCache[h].drillup()})),parseFloat(f)==parseFloat(m)||"none"===b){if("none"!==_){var O=d3.behavior.drag().on(_+".drag",(function(t,e){var i=d3.transform(p.attr("transform")),a=d3.transform(l.attr("transform")),o=[i.translate[0]+d3.event.dx,i.translate[1]+d3.event.dy].toString(),s=[a.translate[0]+d3.event.dx,a.translate[1]+d3.event.dy].toString(),r=[i.scale[0],i.scale[1]].toString(),n=[a.scale[0],a.scale[1]].toString();p.attr("transform",(function(){return"translate("+o+")scale("+r+")"})),l.attr("transform",(function(){return"translate("+s+")scale("+n+")"}))}));i.call(O)}}else"none"===_?((x=d3.behavior.zoom()).scaleExtent([f,m]),x.on(b+".zoom",(function(){p.attr("transform","scale("+d3.event.scale+")"),l.attr("transform","scale("+d3.event.scale+")")})),i.call(x),i.call(x.event)):((x=d3.behavior.zoom()).scaleExtent([f,m]),x.on(b+".zoom",(function(){p.attr("transform","translate("+d3.event.translate+")scale("+d3.event.scale+")"),l.attr("transform","translate("+d3.event.translate+")scale("+d3.event.scale+")")})),i.call(x),i.call(x.event));var A=d3.geo.path().projection(F),I=topojson.feature(S,S.objects[t.topoObj]).features;if(0!=z.length)for(var R in z)i.call(z[R]);var H=p.selectAll("path").data(I).enter().append("path").attr("class",(function(t){return"municipality c"+t.properties.code})).attr("d",A);if(0!=z.length&&H.style("fill",(function(t,e){return z[e%z.length].url()})),"none"!==D&&H.on(D+".tooltipon",(function(t){var e="";if(e+='<div class="kv">',e+='<span class="key">',"function"==typeof W){var i=W(t.properties.name,t.properties.code);e+=null!=i?i:t.properties.name+"("+t.properties.code+")"}else e+=t.properties.name+"("+t.properties.code+")";e+="</span>",e+="</div>",d3.select("#"+c+"_tooltip").html(e).style("display","block").style("pointer-events","none");var a=A.centroid(t),o=d3.transform(p.attr("transform"));d3.select("#"+c+"_tooltip").style("top",(a[1]+10)*o.scale[1]+o.translate[1]+"px").style("left",(a[0]+10)*o.scale[0]+o.translate[0]+"px")})),"none"!==B&&H.on(B+".select",(function(t){this.setAttribute("fill-opacity","0.6")})),"none"!==g&&H.on(g+".tooltipoff",(function(){d3.select("#"+c+"_tooltip").style("display","none")})),"none"!==k&&H.on(k+".deselect",(function(){this.setAttribute("fill-opacity","1.0")})),"none"!==y&&H.on(y+".drilldown",(function(t){
WebSquare.idCache[h].changeMap(t.properties.code)})),H.on("click.onmapclick",(function(t){s.B.fireEvent(WebSquare.idCache[h],"onmapclick",a.x.extend({},t.properties))})).on("dblclick.onmapdblclick",(function(t){s.B.fireEvent(WebSquare.idCache[h],"onmapdblclick",a.x.extend({},t.properties))})).on("mouseover.onmapmouseover",(function(t){s.B.fireEvent(WebSquare.idCache[h],"onmapmouseover",a.x.extend({},t.properties))})).on("mouseout.onmapmouseout",(function(t){s.B.fireEvent(WebSquare.idCache[h],"onmapmouseout",a.x.extend({},t.properties))})).on("mousemove.onmapmousemove",(function(t){s.B.fireEvent(WebSquare.idCache[h],"onmapmousemove",a.x.extend({},t.properties))})),e.options.useMarker){p.selectAll("text").data(I).enter().append("svg:path").attr("d",M).attr("class","w2mapchart_marker").attr("transform",(function(t){var e=A.centroid(t);return"31"==t.properties.code?"translate("+[1.1*e[0],1.1*e[1]]+") scale(0)":"translate("+e+") scale(0)"})).transition().ease("elastic").attr("transform",(function(t){var e=A.centroid(t);return"31"==t.properties.code||"23"==t.properties.code?"translate("+[1.1*e[0],1.1*e[1]]+") scale(1.25)":"translate("+e+") scale(1.25)"}));p.selectAll(".w2mapchart_marker").on("mouseover",(function(t){})).on("mouseleave",(function(t){})).on("click",(function(t){var e="";if(e+='<div class="w2mapchart_marker_tooltip">',e+='<span class="key">',w&&"function"==typeof w){var i=w(t.properties.name,t.properties.code);e+=null!=i?i:t.properties.name+"("+t.properties.code+")"}else e+=t.properties.name+"("+t.properties.code+")";e+="</span>",e+="</div>",d3.select("#"+c+"_marker_tooltip").html(e).style("display","block").style("pointer-events","none");var a,o,s=A.centroid(t),r=d3.transform(p.attr("transform"));"31"==t.properties.code||"23"==t.properties.code?(a=(1.1*s[1]+5)*r.scale[1]+r.translate[1],o=(1.1*s[0]+5)*r.scale[0]+r.translate[0]):(a=(s[1]+5)*r.scale[1]+r.translate[1],o=(s[0]+5)*r.scale[0]+r.translate[0]),d3.select("#"+c+"_marker_tooltip").style("top",a+"px").style("left",o+"px")}))}var V=[],J=[],N=[],G=0;p.selectAll("text").data(I).enter().append("text").attr("transform",(function(t){if(1==e.options.accessibility){var i=t.properties.code;i.length>=7?(G=3,N.push({text:t.properties.name,value:t.properties.code})):i.length>=5?(G=2,J.push({text:t.properties.name,value:t.properties.code})):i.length>=2&&(G=1,V.push({text:t.properties.name,value:t.properties.code}))}var a=A.centroid(t);return"31"==t.properties.code||"23"==t.properties.code?"translate("+[1.1*a[0],1.1*a[1]]+")":"translate("+a+")"})).attr("dy",".35em").attr("class",(function(t){return"municipality-label c"+t.properties.code})).style("font-size",(function(t){if(!1===e.options.showMunicipalityLabel)return"0px"})).text((function(t){var i;if(e.options.regionNameShort){var a="Map_name_"+t.properties.code;i=n.d.getMessage(a)}return i||t.properties.name})),1==e.options.accessibility&&(1==G?e.setSelectOptions(V,G):2==G?e.setSelectOptions(J,G):3==G&&e.setSelectOptions(N,G));var U=WebSquare.idCache[h].options.csvFileName;if(WebSquare.idCache[h].options.csvHandler)var Z=r.D.getGlobalFunction(WebSquare.idCache[h].options.csvHandler);if(U&&"function"==typeof Z&&d3.csv(WebSquare.idCache[h].getURL(U),(function(t){Z.call(WebSquare.idCache[h],l,t,F)})),s.B.fireEvent(WebSquare.idCache[h],"onaftermapchange"),!WebSquare.idCache[h]._load){WebSquare.idCache[h]._load=!0;var K=WebSquare.idCache[h].options.dataLists.split(",");for(R=0;R<K.length;R++){var Q=K[R].wq_trim(),X=r.D.getComponentById(Q,WebSquare.idCache[h].scope_id);null!=X&&(X.addChild(WebSquare.idCache[h]),WebSquare.idCache[h].refreshDataLists(X.id))}}}))}catch(t){o.w.printStackTrace(t)}},l.prototype.setSelectOptions=function(t,e){try{var i=document.getElementById(this.id+"_level"+e);if(1==e)for(var a=1;a<3;a++){for(var s=(r=document.getElementById(this.id+"_level"+(e+a))).options.length;s>=0;s--)r.remove(s);(n=document.createElement("option")).text="LEVEL"+(e+a),n.value="",r.options[0]=n}else if(2==e){var r
;for(a=(r=document.getElementById(this.id+"_level"+(e+1))).options.length;a>=0;a--)r.remove(a);(n=document.createElement("option")).text="LEVEL3",n.value="",r.options[0]=n}for(a=0;a<t.length;a++){var n;(n=document.createElement("option")).text=t[a].text,n.value=t[a].value,i.options[a]=n}}catch(t){o.w.printStackTrace(t,null,this)}},l.prototype.drillup=function(){try{if("0"===this.currentMap)return;var t="0";this.currentMap.length>2&&(t=this.currentMap.slice(0,2)),this.changeMap(t)}catch(t){o.w.printStackTrace(t)}},l.prototype.changeMap=function(t){try{var e;if(this._marker_tooltip.style.display="none",1==this.options.accessibility)t.length>=7?e=document.getElementById(this.id+"_level3"):t.length>=5?e=document.getElementById(this.id+"_level2"):t.length>=2&&(e=document.getElementById(this.id+"_level1")),e&&(e.value=t);if(t.length<=5){if(!1===s.B.fireEvent(this,"onbeforemapchange",{oldMapCode:this.currentMap,newMapCode:t}))return;d3.select("#"+this.id+"_svg").remove(),d3.select("#"+this.id+"_svg").selectAll("defs").remove();var i=t,a=this.getDataMapPath(i);this.createMap({width:this.render.offsetWidth,height:this.render.offsetHeight,topoFile:a,topoObj:i})}}catch(t){o.w.printStackTrace(t)}},l.prototype.changeMapPath=function(t){try{d3.select("#"+this.id+"_svg").remove(),d3.select("#"+this.id+"_svg").selectAll("defs").remove(),this.options.dataMapPath=t,this.createMap({width:this.render.offsetWidth,height:this.render.offsetHeight,topoFile:this.getDataMapPath(this.options.startMap),topoObj:this.options.startMap})}catch(t){o.w.printStackTrace(t)}},l.prototype.getCurrentMap=function(){try{return this.currentMap}catch(t){o.w.printStackTrace(t)}},l.prototype.getParentMap=function(){try{return this.currentMap.length>2?this.currentMap.slice(0,2):"0"}catch(t){o.w.printStackTrace(t)}},l.prototype.addMapEvent=function(t,e){try{for(var i=!1,r=0;r<this.options.userEvents.length;r++)if(this.options.userEvents[r]===t){i=!0;break}i||this.options.userEvents.push(t);var n=t.replace("on",""),p=this.uuid;d3.select("#"+this.id+"_svg").select(".w2mapchart_map").selectAll("path").on(n+".onmap"+n,(function(t){s.B.fireEvent(WebSquare.idCache[p],"onmap"+n,a.x.extend({},t.properties))})),this.bind("onmap"+n,e)}catch(t){o.w.printStackTrace(t)}},l.prototype.setScale=function(t){try{d3.select("#"+this.id+"_map").attr("transform",(function(e){return"scale("+t+")"})),d3.select("#"+this.id+"_places").attr("transform",(function(e){return"scale("+t+")"}))}catch(t){o.w.printStackTrace(t)}},l.prototype.getDataMapPath=function(t){try{var e=0,i=this.options.dataMapRatio_level0;t.length>=5?(e=2,i=this.options.dataMapRatio_level2):t.length>=2&&(e=1,i=this.options.dataMapRatio_level1);var a=this.options.dataMapPath+"/level"+e+"/"+i+"/"+t+".json";return a=WebSquare.BootLoader.getResourcePostfix(a)}catch(t){o.w.printStackTrace(t)}},l.prototype.createPattern=function(t,e){try{var i=[{type:"line",size:4,stroke:"#BDBDBD",strokeWidth:1},{type:"line",orientation:["vertical"],size:4,stroke:"#BDBDBD",strokeWidth:1},{type:"line",orientation:["7/8"],size:8,stroke:"#BDBDBD",strokeWidth:.7},{type:"line",orientation:["vertical","horizontal"],size:4,stroke:"#BDBDBD",strokeWidth:.5},{type:"line",orientation:["2/8"],size:8,stroke:"#BDBDBD",strokeWidth:1},{type:"line",orientation:["1/8","6/8"],size:8,stroke:"#BDBDBD",strokeWidth:.5},{type:"line",orientation:["3/8","7/8"],size:8,stroke:"#BDBDBD",strokeWidth:.6},{type:"line",orientation:["3/8","7/8"],size:6,stroke:"#BDBDBD",strokeWidth:.5},{type:"line",orientation:["2/8","6/8"],size:6,stroke:"#BDBDBD",strokeWidth:.5},{type:"line",orientation:["2/8","6/8"],size:3,stroke:"#BDBDBD",strokeWidth:.5},{type:"line",orientation:["2/8"],size:2,stroke:"#BDBDBD",strokeWidth:.5},{type:"line",orientation:["6/8"],size:3,stroke:"#BDBDBD",strokeWidth:.5},{type:"line",orientation:["1/8","5/8"],size:5,stroke:"#BDBDBD",strokeWidth:.5},{type:"line",orientation:["3/8"],size:4,stroke:"#BDBDBD",strokeWidth:.5},{type:"line",orientation:["1/8","4/8","6/8"],size:8,
stroke:"#BDBDBD",strokeWidth:.5},{type:"line",orientation:["1/8","4/8","6/8","8/8"],size:8,stroke:"#BDBDBD",strokeWidth:.5},{type:"circle",size:5,radius:1.5,fill:"#BDBDBD"},{type:"circle",size:2,radius:.5,fill:"#BDBDBD"},{type:"circle",size:5,radius:2,fill:"#BDBDBD"},{type:"circle",size:8,radius:2,fill:"#BDBDBD",strokeWidth:.5},{type:"circle",size:3,radius:.4,fill:"#BDBDBD"},{type:"circle",size:10,radius:2,fill:"#BDBDBD"},{type:"circle",size:5,radius:1.5,fill:"#BDBDBD"},{type:"circle",size:10,radius:4,fill:"#BDBDBD"},{type:"circle",size:6,radius:2,fill:"transparent",stroke:"#BDBDBD",strokeWidth:1},{type:"circle",size:8,radius:4,fill:"transparent",stroke:"#BDBDBD",strokeWidth:2},{type:"circle",size:5,radius:1.5,fill:"#EAEAEA",stroke:"#BDBDBD",strokeWidth:2},{type:"path",d:"hexagons",size:3.5,strokeWidth:2,stroke:"#BDBDBD"},{type:"path",d:"crosses",size:8,stroke:"#BDBDBD",strokeWidth:1},{type:"path",d:"caps",size:7,stroke:"#BDBDBD",strokeWidth:.5},{type:"path",d:"woven",size:10,stroke:"#BDBDBD",strokeWidth:1},{type:"path",d:"waves",size:5,stroke:"#BDBDBD",strokeWidth:1},{type:"path",d:"nylon",size:10,stroke:"#BDBDBD",strokeWidth:1},{type:"path",d:"squares",size:5,stroke:"#BDBDBD",strokeWidth:.7},{type:"path",d:"waves",size:4,stroke:"#BDBDBD",strokeWidth:.5},{type:"path",d:"caps",size:4,stroke:"#BDBDBD",strokeWidth:.3},{type:"path",d:"nylon",size:7,stroke:"#BDBDBD",strokeWidth:.5},{type:"path",d:"woven",size:6,stroke:"#BDBDBD",strokeWidth:1.5},{type:"path",d:"squares",size:2,stroke:"#BDBDBD",strokeWidth:.5}];t&&"object"==typeof t?0!=e&&void 0!==e||(i=t):0!=e&&void 0!==e||(i=[]);for(var a=0;a<i.length;a++){var s=this.createPatternElement(i[a]);this.patternList.push(s);d3.select("#"+this.id).select("svg").call(s).select("pattern")}}catch(t){o.w.printStackTrace(t)}},l.prototype.addPattern=function(t){try{if(this.options.usePattern){var e=this.createPatternElement(t);this.patternList.push(e);var i=d3.select("#"+this.id).select("svg").call(e).selectAll("pattern")[0];return i[i.length-1].getAttribute("id")}}catch(t){o.w.printStackTrace(t)}},l.prototype.createPatternElement=function(t){try{var e;switch(t.type){case"line":e=textures.lines();break;case"circle":e=textures.circles();break;case"path":case"userDefine":e=textures.paths();break;default:return e}return t.orientation&&"line"==t.type&&e.orientation.apply(this,t.orientation),t.d&&"path"==t.type&&e.d(t.d),t.radius&&"circle"==t.type&&e.radius(t.radius),t.stroke&&e.stroke(t.stroke),t.strokeWidth&&e.strokeWidth(t.strokeWidth),t.background&&e.background(t.background),t.size&&e.size(t.size),t.fill&&"circle"==t.type&&e.fill(t.fill),e}catch(t){o.w.printStackTrace(t,null,this)}},l.prototype.checkResize=function(){try{if(this.render){var t=this.render.offsetWidth,e=this.render.offsetHeight;this.resizeObj&&t>0&&e>0&&0==this.resizeObj.width&&0==this.resizeObj.height&&(this._marker_tooltip=this.getElementById(this.id+"_marker_tooltip"),this.createMap({width:this.render.offsetWidth,height:this.render.offsetHeight,topoFile:this.getDataMapPath(this.options.startMap),topoObj:this.options.startMap})),this.resizeObj={width:t,height:e}}}catch(t){o.w.printStackTrace(t,null,this)}},l.prototype.refreshDataLists=function(t){try{this._load&&s.B.fireEvent(this,"onmapdatachange",t)}catch(t){o.w.printStackTrace(t)}}}}]);