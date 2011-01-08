/*
Copyright 2011, KISSY UI Library v1.1.7dev
MIT Licensed
build time: ${build.time}
*/
KISSY.add("dd/ddm",function(f,g,i,m,l){function e(){e.superclass.constructor.apply(this,arguments);this._init()}function j(a,c,d){d=d||150;if(d===-1)return function(){a.apply(c,arguments)};var k=f.now();return function(){var n=f.now();if(n-k>d){k=n;a.apply(c,arguments)}}}var h=document,b=f.require("node/node");e.ATTRS={bufferTime:{value:200},activeDrag:{}};f.extend(e,l,{_init:function(){this._showShimMove=j(this._move,this,30)},_move:function(a){var c=this.get("activeDrag");if(c){a.preventDefault();
c._move(a)}},_start:function(a){var c=this,d=c.get("bufferTime")||0;c._registerEvent();if(d)c._bufferTimer=setTimeout(function(){c._bufferStart(a)},d);else c._bufferStart(a)},_bufferStart:function(a){this.set("activeDrag",a);a.get("shim")&&this._activeShim();a._start()},_end:function(a){var c=this.get("activeDrag");this._unregisterEvent();if(this._bufferTimer){clearTimeout(this._bufferTimer);this._bufferTimer=null}this._shim&&this._shim.css({display:"none"});if(c){c._end(a);this.set("activeDrag",
null)}},_activeShim:function(){var a=document;this._shim=(new b("<div style='background-color:red;position:absolute;left:0;width:100%;top:0;z-index:999999;'></div>")).appendTo(a.body);this._shim.css("opacity",0);this._activeShim=this._showShim;this._showShim()},_showShim:function(){this._shim.css({display:"",height:g.docHeight()})},_registerEvent:function(){i.on(h,"mouseup",this._end,this);i.on(h,"mousemove",this._showShimMove,this)},_unregisterEvent:function(){i.remove(h,"mousemove",this._showShimMove,
this);i.remove(h,"mouseup",this._end,this)}});return new e},{requires:["dom","event","node","base"]});
KISSY.add("dd/draggable",function(f,g,i,m,l){function e(){e.superclass.constructor.apply(this,arguments);this._init()}var j=f.require("node/node");e.ATTRS={node:{setter:function(b){return j.one(b)}},shim:{value:true},handlers:{value:[],setter:function(b){if(b)for(var a=0;a<b.length;a++){b[a]=j.one(b[a]);h(b[a][0])}}}};f.extend(e,m,{_init:function(){var b=this.get("node"),a=this.get("handlers");if(a.length==0)a[0]=b;for(var c=0;c<a.length;c++){var d=a[c],k=d.css("cursor");if(d[0]!=b[0])if(!k||k===
"auto")d.css("cursor","move")}b.on("mousedown",this._handleMouseDown,this)},destroy:function(){for(var b=this.get("node"),a=this.get("handlers"),c=0;c<a.length;c++){var d=a[c];d.css("cursor")=="move"&&d.css("cursor","auto")}b.detach("mousedown",this._handleMouseDown,this);this.detach()},_check:function(b){for(var a=this.get("handlers"),c=0;c<a.length;c++){var d=a[c];if(d.contains(b)||d[0]==b[0])return true}return false},_handleMouseDown:function(b){if(this._check(new j(b.target))){b.preventDefault();
l._start(this);var a=this.get("node"),c=b.pageX;b=b.pageY;a=a.offset();this.startMousePos={left:c,top:b};this.startNodePos=a;this._diff={left:c-a.left,top:b-a.top};this.set("diff",this._diff)}},_move:function(b){var a=this.get("diff");this.fire("drag",{left:b.pageX-a.left,top:b.pageY-a.top})},_end:function(){this.fire("dragend")},_start:function(){this.fire("dragstart")}});var h=g.gecko?function(b){b.style.MozUserSelect="none"}:g.webkit?function(b){b.style.KhtmlUserSelect="none"}:function(b){if(g.ie||
g.opera){var a=0,c=b.getElementsByTagName("*");for(b.setAttribute("unselectable","on");b=c[a++];)switch(b.tagName.toLowerCase()){case "iframe":case "textarea":case "input":case "select":break;default:b.setAttribute("unselectable","on")}}};return e},{requires:["ua","node","base","dd/ddm"]});KISSY.add("dd",function(){},{requires:["dd/draggable"]});