/*
Copyright 2010, KISSY UI Library v1.0.4
MIT Licensed
build: 480 Mar 11 14:06
*/
(function(g,k,m){if(g[k]===m)g[k]={};k=g[k];var j=g.document,o=Array.prototype,p=o.forEach,q=o.indexOf,t=/^\s+|\s+$/g,i=function(a,b,c,e){if(!b||!a)return a;if(c===m)c=true;var f,d,h;if(e&&(h=e.length))for(f=0;f<h;f++){d=e[f];if(d in b)if(c||!(d in a))a[d]=b[d]}else for(d in b)if(c||!(d in a))a[d]=b[d];return a},n=false,l=[],r=false;i(k,{version:"1.0.4",_init:function(){this.Env={mods:{}};this.Config={debug:true}},add:function(a,b){var c=this;c.Env.mods[a]={name:a,fn:b};b(c);return c},ready:function(a){r||
this._bindReady();n?a.call(g,this):l.push(a);return this},_bindReady:function(){var a=this,b=j.documentElement.doScroll,c=b?"onreadystatechange":"DOMContentLoaded";r=true;if(j.attachEvent){if(g!=g.top){function e(){if(j.readyState==="complete"){j.detachEvent(c,e);a._fireReady()}}j.attachEvent(c,e)}else{function f(){try{b("left");a._fireReady()}catch(h){setTimeout(f,1)}}f()}g.attachEvent("onload",function(){a._fireReady()})}else{function d(){j.removeEventListener(c,d,false);a._fireReady()}j.addEventListener(c,
d,false)}},_fireReady:function(){if(!n){n=true;if(l){for(var a,b=0;a=l[b++];)a.call(g,this);l=null}}},mix:i,merge:function(){var a=arguments,b={},c,e=a.length;for(c=0;c<e;++c)i(b,a[c]);return b},extend:function(a,b,c,e){if(!b||!a)return a;var f=Object.prototype,d=b.prototype,h=function(u){function s(){}s.prototype=u;return new s}(d);a.prototype=h;h.constructor=a;a.superclass=d;if(b!==Object&&d.constructor===f.constructor)d.constructor=b;c&&i(h,c);e&&i(a,e);return a},augment:function(a,b,c,e){return i(a.prototype,
b.prototype,c,e)},weave:function(a,b,c,e){var f=[c[e],a];b==="before"&&f.reverse();c[e]=function(){for(var d=0,h;d<2;++d)h=f[d].apply(this,arguments);return h};return this},cloneTo:function(a){var b=g[a]||{};i(b,this);b._init();i(b.Env.mods,this.Env.mods);return g[a]=b},namespace:function(){var a=arguments,b=a.length,c=null,e,f,d;for(e=0;e<b;++e){d=(""+a[e]).split(".");c=this;for(f=g[d[0]]===c?1:0;f<d.length;++f)c=c[d[f]]=c[d[f]]||{}}return c},each:p?function(a,b,c){p.call(a,b,c);return this}:function(a,
b,c){var e=a&&a.length||0,f;for(f=0;f<e;++f)b.call(c||this,a[f],f,a);return this},indexOf:q?function(a,b){return q.call(b,a)}:function(a,b){for(var c=0,e=b.length;c<e;++c)if(b[c]===a)return c;return-1},trim:String.prototype.trim?function(a){return(a||"").trim()}:function(a){return(a||"").replace(t,"")},log:function(a,b,c){if(this.Config.debug){c&&(a=c+": "+a);if(g.console!==m&&console.log)console[b&&console[b]?b:"log"](a)}return this}});k._init()})(window,"KISSY");
