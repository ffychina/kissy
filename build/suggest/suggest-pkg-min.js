/*
Copyright 2010, KISSY UI Library v1.1.4
MIT Licensed
build time: Sep 16 16:18
*/
KISSY.add("suggest",function(f,n){function k(a,b,c){if(!(this instanceof k))return new k(a,b,c);this.textInput=f.get(a);this.config=c=f.merge(B,c);b+=b.indexOf("?")===-1?"?":"&";this.dataSource=b+c.callbackName+"="+(a=c.callbackFn);a!==u&&C(a);this.queryParams=this.query=l;this._dataCache={};this._init()}function v(a){a.style.visibility=l}function w(a){a.style.visibility=x}function y(a,b){if(b.nodeType===1){d.html(a,l);a.appendChild(b)}else d.html(a,b)}function C(a){var b=a.split("."),c=b.length;
if(c>1){a=a.replace(/^(.*)\..+$/,"$1");a=f.namespace(a,true);a[b[c-1]]=q}else r[a]=q}function q(a){k.focusInstance&&f.later(function(){k.focusInstance._handleResponse(a)},0)}var d=f.DOM,j=f.Event,r=window,o=document,p,z=f.get("head"),s=f.UA.ie,u="KISSY.Suggest.callback",l="",x="hidden",A=parseInt,D=/^(input|button|a)$/i,B={containerCls:l,resultFormat:"%result%",closeBtnText:"\u5173\u95ed",shim:s===6,submitOnSelect:true,offset:-1,charset:"utf-8",callbackName:"callback",callbackFn:u,queryName:"q"};
f.augment(k,f.EventTarget,{_init:function(){p=o.body;this._initTextInput();this._initContainer();this.config.shim&&this._initShim();this._initStyle();this._initEvent()},_initTextInput:function(){var a=this,b=a.textInput,c=false,e=0;d.attr(b,"autocomplete","off");a.config.autoFocus&&b.focus();j.on(b,"keydown",function(h){var i=h.keyCode;if(i===27){a.hide();b.value=a.query}else if(i>32&&i<41)if(b.value){if(i===40||i===38){if(e++===0){a._isRunning&&a.stop();c=true;a._selectItem(i===40)}else if(e==3)e=
0;h.preventDefault()}}else b.blur();else if(i===13){b.blur();if(c)if(b.value==a._getSelectedItemKey())if(a.fire("itemSelect")===false)return;a._submitForm()}else{a._isRunning||a.start();c=false}});j.on(b,"keyup",function(){e=0});j.on(b,"blur",function(){a.stop();f.later(function(){a._focusing||a.hide()},0)})},_initContainer:function(){var a=d.create("<div>",{"class":"ks-suggest-container "+this.config.containerCls,style:"position:absolute;visibility:hidden"}),b=d.create("<div>",{"class":"ks-suggest-content"}),
c=d.create("<div>",{"class":"ks-suggest-footer"});a.appendChild(b);a.appendChild(c);p.insertBefore(a,p.firstChild);this.container=a;this.content=b;this.footer=c;this._initContainerEvent()},_setContainerRegion:function(){var a=this.config,b=this.textInput,c=d.offset(b),e=this.container;d.offset(e,{left:c.left,top:c.top+b.offsetHeight+a.offset});d.width(e,a.containerWidth||b.offsetWidth-2)},_initContainerEvent:function(){var a=this,b=a.textInput,c=a.container,e=a.content,h=a.footer,i,t;j.on(e,"mousemove",
function(g){g=g.target;if(g.nodeName!=="LI")g=d.parent(g,"li");if(d.contains(e,g))if(g!==a.selectedItem){a._removeSelectedItem();a._setSelectedItem(g)}});j.on(e,"mousedown",function(g){g=g.target;if(g.nodeName!=="LI")g=d.parent(g,"li");i=g});j.on(c,"mousedown",function(g){if(!D.test(g.target.nodeName)){b.onbeforedeactivate=function(){r.event.returnValue=false;b.onbeforedeactivate=null};g.preventDefault()}});j.on(e,"mouseup",function(g){var m=g.target;if(!(g.which>2)){if(m.nodeName!=="LI")m=d.parent(m,
"li");if(m==i)if(d.contains(e,m)){a._updateInputFromSelectItem(m);if(a.fire("itemSelect")!==false){b.blur();a._submitForm()}}}});j.on(h,"focusin",function(){a._focusing=true;a._removeSelectedItem();t=false});j.on(h,"focusout",function(){a._focusing=false;f.later(function(){if(t)a.hide();else a._focusing||a.textInput.focus()},0)});j.on(a.container,"mouseleave",function(){t=true});j.on(h,"click",function(g){d.hasClass(g.target,"ks-suggest-closebtn")&&a.hide()})},_submitForm:function(){if(this.config.submitOnSelect){var a=
this.textInput.form;if(a)if(this.fire("beforeSubmit",{form:a})!==false){if(o.createEvent){var b=o.createEvent("MouseEvents");b.initEvent("submit",true,false);a.dispatchEvent(b)}else o.createEventObject&&a.fireEvent("onsubmit");a.submit()}}},_initShim:function(){var a=d.create("<iframe>",{src:"about:blank","class":"ks-suggest-shim",style:"position:absolute;visibility:hidden;border:none"});this.container.shim=a;p.insertBefore(a,p.firstChild)},_setShimRegion:function(){var a=this.container,b=a.style,
c=a.shim;c&&d.css(c,{left:A(b.left)-2,top:b.top,width:A(b.width)+2,height:d.height(a)-2})},_initStyle:function(){f.get("#ks-suggest-style")||d.addStyleSheet(".ks-suggest-container{background:white;border:1px solid #999;z-index:99999}.ks-suggest-shim{z-index:99998}.ks-suggest-container li{color:#404040;padding:1px 0 2px;font-size:12px;line-height:18px;float:left;width:100%}.ks-suggest-container .ks-selected{background-color:#39F;cursor:default}.ks-suggest-key{float:left;text-align:left;padding-left:5px}.ks-suggest-result{float:right;text-align:right;padding-right:5px;color:green}.ks-suggest-container .ks-selected span{color:#FFF;cursor:default}.ks-suggest-footer{padding:0 5px 5px}.ks-suggest-closebtn{float:right}.ks-suggest-container li,.ks-suggest-footer{overflow:hidden;zoom:1;clear:both}.ks-suggest-container{*margin-left:2px;_margin-left:-2px;_margin-top:-3px}",
"ks-suggest-style")},_initEvent:function(){var a=this;j.on(r,"resize",function(){a._setContainerRegion();a._setShimRegion()})},start:function(){var a=this;if(a.fire("beforeStart")!==false){k.focusInstance=a;a._timer=f.later(function(){a._updateContent();a._timer=f.later(arguments.callee,200)},200);a._isRunning=true}},stop:function(){k.focusInstance=n;this._timer&&this._timer.cancel();this._isRunning=false},show:function(){if(!this.isVisible()){var a=this.container,b=a.shim;this._setContainerRegion();
v(a);if(b){this._setShimRegion();v(b)}}},hide:function(){if(this.isVisible()){var a=this.container,b=a.shim;b&&w(b);w(a)}},isVisible:function(){return this.container.style.visibility!=x},_updateContent:function(){var a=this.textInput;if(a.value!=this.query){a=this.query=a.value;if(f.trim(a))if(this._dataCache[a]!==n){this._fillContainer(this._dataCache[a]);this._displayContainer()}else this._requestData();else{this._fillContainer();this.hide()}}},_requestData:function(){var a=this,b=a.config,c;if(!s)a.dataScript=
n;if(!a.dataScript){c=o.createElement("script");c.charset=b.charset;c.async=true;z.insertBefore(c,z.firstChild);a.dataScript=c;if(!s){var e=f.now();a._latestScriptTime=e;d.attr(c,"data-time",e);j.on(c,"load",function(){a._scriptDataIsOut=d.attr(c,"data-time")!=a._latestScriptTime})}}a.queryParams=b.queryName+"="+encodeURIComponent(a.query);if(a.fire("beforeDataRequest")!==false)a.dataScript.src=a.dataSource+"&"+a.queryParams},_handleResponse:function(a){var b=l,c,e,h,i;if(!this._scriptDataIsOut){this.returnedData=
a;if(this.fire("dataReturn",{data:a})!==false){a=this._formatData(this.returnedData);if((c=a.length)>0){e=d.create("<ol>");for(b=0;b<c;++b){h=a[b];h=this._formatItem(i=h.key,h.result);d.attr(h,"key",i);d.addClass(h,b%2?"ks-even":"ks-odd");e.appendChild(h)}b=e}this._fillContainer(b);if(this.fire("beforeShow")!==false){this._dataCache[this.query]=d.html(this.content);this._displayContainer()}}}},_formatData:function(a){var b=[],c,e,h,i=0;if(!a)return b;if(f.isArray(a.result))a=a.result;if(!(c=a.length))return b;
for(h=0;h<c;++h){e=a[h];if(f.isString(e))b[i++]={key:e};else if(f.isArray(e)&&e.length>1)b[i++]={key:e[0],result:e[1]}}return b},_formatItem:function(a,b){var c=d.create("<li>");c.appendChild(d.create("<span>",{"class":"ks-suggest-key",html:a}));if(b){a=this.config.resultFormat.replace("%result%",b);f.trim(a)&&c.appendChild(d.create("<span>",{"class":"ks-suggest-result",html:a}))}return c},_fillContainer:function(a,b){this._fillContent(a||l);this._fillFooter(b||l)},_fillContent:function(a){y(this.content,
a);this.selectedItem=n},_fillFooter:function(a){var b=this.config,c=this.footer;y(c,a);b.closeBtn&&c.appendChild(d.create("<a>",{"class":"ks-suggest-closebtn",text:b.closeBtnText,href:"javascript: void(0)",target:"_self"}));this.fire("updateFooter",{footer:c,query:this.query});d.css(c,"display",d.text(c)?l:"none")},_displayContainer:function(){f.trim(d.text(this.container))?this.show():this.hide()},_selectItem:function(a){var b=f.query("li",this.container);if(b.length!==0)if(this.isVisible()){if(this.selectedItem){a=
d[a?"next":"prev"](this.selectedItem);if(!a)this.textInput.value=this.query}else a=b[a?0:b.length-1];this._removeSelectedItem();if(a){this._setSelectedItem(a);this._updateInputFromSelectItem()}}else this.show()},_removeSelectedItem:function(){d.removeClass(this.selectedItem,"ks-selected");this.selectedItem=n},_setSelectedItem:function(a){d.addClass(a,"ks-selected");this.selectedItem=a;this.textInput.focus()},_getSelectedItemKey:function(){if(!this.selectedItem)return l;return d.attr(this.selectedItem,
"key")},_updateInputFromSelectItem:function(){this.textInput.value=this._getSelectedItemKey(this.selectedItem)||this.query}});k.version=1.1;k.callback=q;f.Suggest=k},{requires:["core"]});
