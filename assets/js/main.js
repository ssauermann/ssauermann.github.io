var Zepto=function(){function c(t){return null==t?String(t):q[H.call(t)]||"object"}function a(t){return"function"==c(t)}function o(t){return null!=t&&t==t.window}function s(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function i(t){return"object"==c(t)}function u(t){return i(t)&&!o(t)&&Object.getPrototypeOf(t)==Object.prototype}function l(t){return"number"==typeof t.length}function h(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function n(t){return t in e?e[t]:e[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function f(t,e){return"number"!=typeof e||T[h(t)]?e:e+"px"}function r(t){return"children"in t?S.call(t.children):x.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function p(t,e){return null==e?x(t):x(t).filter(e)}function d(t,e,n,i){return a(e)?e.call(t,n,i):e}function m(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function v(t,e){var n=t.className||"",i=n&&n.baseVal!==y;return e===y?i?n.baseVal:n:void(i?n.baseVal=e:t.className=e)}function g(e){try{return e?"true"==e||"false"!=e&&("null"==e?null:+e+""==e?+e:/^[\[\{]/.test(e)?x.parseJSON(e):e):e}catch(t){return e}}var y,b,x,w,L,E,j=[],S=j.slice,C=j.filter,O=window.document,N={},e={},T={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},U=/^\s*<(\w+|!)[^>]*>/,P=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,A=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,k=/^(?:body|html)$/i,R=/([A-Z])/g,Z=["val","css","html","text","data","width","height","offset"],t=O.createElement("table"),M=O.createElement("tr"),$={tr:O.createElement("tbody"),tbody:t,thead:t,tfoot:t,td:M,th:M,"*":O.createElement("div")},D=/complete|loaded|interactive/,I=/^[\w-]*$/,q={},H=q.toString,_={},z=O.createElement("div"),F={tabindex:"tabIndex",readonly:"readOnly",for:"htmlFor",class:"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},J=Array.isArray||function(t){return t instanceof Array};return _.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var i,r=t.parentNode,o=!r;return o&&(r=z).appendChild(t),i=~_.qsa(r,e).indexOf(t),o&&z.removeChild(t),i},L=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},E=function(n){return C.call(n,function(t,e){return n.indexOf(t)==e})},_.fragment=function(t,e,n){var i,r,o;return P.test(t)&&(i=x(O.createElement(RegExp.$1))),i||(t.replace&&(t=t.replace(A,"<$1></$2>")),e===y&&(e=U.test(t)&&RegExp.$1),e in $||(e="*"),(o=$[e]).innerHTML=""+t,i=x.each(S.call(o.childNodes),function(){o.removeChild(this)})),u(n)&&(r=x(i),x.each(n,function(t,e){-1<Z.indexOf(t)?r[t](e):r.attr(t,e)})),i},_.Z=function(t,e){return(t=t||[]).__proto__=x.fn,t.selector=e||"",t},_.isZ=function(t){return t instanceof _.Z},_.init=function(t,e){var n;if(!t)return _.Z();if("string"==typeof t)if("<"==(t=t.trim())[0]&&U.test(t))n=_.fragment(t,RegExp.$1,e),t=null;else{if(e!==y)return x(e).find(t);n=_.qsa(O,t)}else{if(a(t))return x(O).ready(t);if(_.isZ(t))return t;if(J(t))n=function(t){return C.call(t,function(t){return null!=t})}(t);else if(i(t))n=[t],t=null;else if(U.test(t))n=_.fragment(t.trim(),RegExp.$1,e),t=null;else{if(e!==y)return x(e).find(t);n=_.qsa(O,t)}}return _.Z(n,t)},(x=function(t,e){return _.init(t,e)}).extend=function(e){var n,t=S.call(arguments,1);return"boolean"==typeof e&&(n=e,e=t.shift()),t.forEach(function(t){!function t(e,n,i){for(b in n)i&&(u(n[b])||J(n[b]))?(u(n[b])&&!u(e[b])&&(e[b]={}),J(n[b])&&!J(e[b])&&(e[b]=[]),t(e[b],n[b],i)):n[b]!==y&&(e[b]=n[b])}(e,t,n)}),e},_.qsa=function(t,e){var n,i="#"==e[0],r=!i&&"."==e[0],o=i||r?e.slice(1):e,a=I.test(o);return s(t)&&a&&i?(n=t.getElementById(o))?[n]:[]:1!==t.nodeType&&9!==t.nodeType?[]:S.call(a&&!i?r?t.getElementsByClassName(o):t.getElementsByTagName(e):t.querySelectorAll(e))},x.contains=O.documentElement.contains?function(t,e){return t!==e&&t.contains(e)}:function(t,e){for(;e=e&&e.parentNode;)if(e===t)return!0;return!1},x.type=c,x.isFunction=a,x.isWindow=o,x.isArray=J,x.isPlainObject=u,x.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},x.inArray=function(t,e,n){return j.indexOf.call(e,t,n)},x.camelCase=L,x.trim=function(t){return null==t?"":String.prototype.trim.call(t)},x.uuid=0,x.support={},x.expr={},x.map=function(t,e){var n,i,r,o=[];if(l(t))for(i=0;i<t.length;i++)null!=(n=e(t[i],i))&&o.push(n);else for(r in t)null!=(n=e(t[r],r))&&o.push(n);return function(t){return 0<t.length?x.fn.concat.apply([],t):t}(o)},x.each=function(t,e){var n,i;if(l(t)){for(n=0;n<t.length;n++)if(!1===e.call(t[n],n,t[n]))return t}else for(i in t)if(!1===e.call(t[i],i,t[i]))return t;return t},x.grep=function(t,e){return C.call(t,e)},window.JSON&&(x.parseJSON=JSON.parse),x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){q["[object "+e+"]"]=e.toLowerCase()}),x.fn={forEach:j.forEach,reduce:j.reduce,push:j.push,sort:j.sort,indexOf:j.indexOf,concat:j.concat,map:function(n){return x(x.map(this,function(t,e){return n.call(t,e,t)}))},slice:function(){return x(S.apply(this,arguments))},ready:function(t){return D.test(O.readyState)&&O.body?t(x):O.addEventListener("DOMContentLoaded",function(){t(x)},!1),this},get:function(t){return t===y?S.call(this):this[0<=t?t:t+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(n){return j.every.call(this,function(t,e){return!1!==n.call(t,e,t)}),this},filter:function(e){return a(e)?this.not(this.not(e)):x(C.call(this,function(t){return _.matches(t,e)}))},add:function(t,e){return x(E(this.concat(x(t,e))))},is:function(t){return 0<this.length&&_.matches(this[0],t)},not:function(e){var n=[];if(a(e)&&e.call!==y)this.each(function(t){e.call(this,t)||n.push(this)});else{var i="string"==typeof e?this.filter(e):l(e)&&a(e.item)?S.call(e):x(e);this.forEach(function(t){i.indexOf(t)<0&&n.push(t)})}return x(n)},has:function(t){return this.filter(function(){return i(t)?x.contains(this,t):x(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!i(t)?t:x(t)},last:function(){var t=this[this.length-1];return t&&!i(t)?t:x(t)},find:function(t){var n=this;return t?"object"==typeof t?x(t).filter(function(){var e=this;return j.some.call(n,function(t){return x.contains(t,e)})}):1==this.length?x(_.qsa(this[0],t)):this.map(function(){return _.qsa(this,t)}):x()},closest:function(t,e){var n=this[0],i=!1;for("object"==typeof t&&(i=x(t));n&&!(i?0<=i.indexOf(n):_.matches(n,t));)n=n!==e&&!s(n)&&n.parentNode;return x(n)},parents:function(t){for(var e=[],n=this;0<n.length;)n=x.map(n,function(t){return(t=t.parentNode)&&!s(t)&&e.indexOf(t)<0?(e.push(t),t):void 0});return p(e,t)},parent:function(t){return p(E(this.pluck("parentNode")),t)},children:function(t){return p(this.map(function(){return r(this)}),t)},contents:function(){return this.map(function(){return S.call(this.childNodes)})},siblings:function(t){return p(this.map(function(t,e){return C.call(r(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(e){return x.map(this,function(t){return t[e]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=function(t){var e,n;return N[t]||(e=O.createElement(t),O.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),N[t]=n),N[t]}(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(e){var n=a(e);if(this[0]&&!n)var i=x(e).get(0),r=i.parentNode||1<this.length;return this.each(function(t){x(this).wrapAll(n?e.call(this,t):r?i.cloneNode(!0):i)})},wrapAll:function(t){if(this[0]){x(this[0]).before(t=x(t));for(var e;(e=t.children()).length;)t=e.first();x(t).append(this)}return this},wrapInner:function(r){var o=a(r);return this.each(function(t){var e=x(this),n=e.contents(),i=o?r.call(this,t):r;n.length?n.wrapAll(i):e.append(i)})},unwrap:function(){return this.parent().each(function(){x(this).replaceWith(x(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(e){return this.each(function(){var t=x(this);(e===y?"none"==t.css("display"):e)?t.show():t.hide()})},prev:function(t){return x(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return x(this.pluck("nextElementSibling")).filter(t||"*")},html:function(n){return 0 in arguments?this.each(function(t){var e=this.innerHTML;x(this).empty().append(d(this,n,t,e))}):0 in this?this[0].innerHTML:null},text:function(n){return 0 in arguments?this.each(function(t){var e=d(this,n,t,this.textContent);this.textContent=null==e?"":""+e}):0 in this?this[0].textContent:null},attr:function(e,n){var t;return"string"!=typeof e||1 in arguments?this.each(function(t){if(1===this.nodeType)if(i(e))for(b in e)m(this,b,e[b]);else m(this,e,d(this,n,t,this.getAttribute(e)))}):this.length&&1===this[0].nodeType?!(t=this[0].getAttribute(e))&&e in this[0]?this[0][e]:t:y},removeAttr:function(t){return this.each(function(){1===this.nodeType&&t.split(" ").forEach(function(t){m(this,t)},this)})},prop:function(e,n){return e=F[e]||e,1 in arguments?this.each(function(t){this[e]=d(this,n,t,this[e])}):this[0]&&this[0][e]},data:function(t,e){var n="data-"+t.replace(R,"-$1").toLowerCase(),i=1 in arguments?this.attr(n,e):this.attr(n);return null!==i?g(i):y},val:function(e){return 0 in arguments?this.each(function(t){this.value=d(this,e,t,this.value)}):this[0]&&(this[0].multiple?x(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(o){if(o)return this.each(function(t){var e=x(this),n=d(this,o,t,e.offset()),i=e.offsetParent().offset(),r={top:n.top-i.top,left:n.left-i.left};"static"==e.css("position")&&(r.position="relative"),e.css(r)});if(!this.length)return null;var t=this[0].getBoundingClientRect();return{left:t.left+window.pageXOffset,top:t.top+window.pageYOffset,width:Math.round(t.width),height:Math.round(t.height)}},css:function(t,e){if(arguments.length<2){var n,i=this[0];if(!i)return;if(n=getComputedStyle(i,""),"string"==typeof t)return i.style[L(t)]||n.getPropertyValue(t);if(J(t)){var r={};return x.each(t,function(t,e){r[e]=i.style[L(e)]||n.getPropertyValue(e)}),r}}var o="";if("string"==c(t))e||0===e?o=h(t)+":"+f(t,e):this.each(function(){this.style.removeProperty(h(t))});else for(b in t)t[b]||0===t[b]?o+=h(b)+":"+f(b,t[b])+";":this.each(function(){this.style.removeProperty(h(b))});return this.each(function(){this.style.cssText+=";"+o})},index:function(t){return t?this.indexOf(x(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return!!t&&j.some.call(this,function(t){return this.test(v(t))},n(t))},addClass:function(n){return n?this.each(function(t){if("className"in this){w=[];var e=v(this);d(this,n,t,e).split(/\s+/g).forEach(function(t){x(this).hasClass(t)||w.push(t)},this),w.length&&v(this,e+(e?" ":"")+w.join(" "))}}):this},removeClass:function(e){return this.each(function(t){if("className"in this){if(e===y)return v(this,"");w=v(this),d(this,e,t,w).split(/\s+/g).forEach(function(t){w=w.replace(n(t)," ")}),v(this,w.trim())}})},toggleClass:function(n,i){return n?this.each(function(t){var e=x(this);d(this,n,t,v(this)).split(/\s+/g).forEach(function(t){(i===y?!e.hasClass(t):i)?e.addClass(t):e.removeClass(t)})}):this},scrollTop:function(t){if(this.length){var e="scrollTop"in this[0];return t===y?e?this[0].scrollTop:this[0].pageYOffset:this.each(e?function(){this.scrollTop=t}:function(){this.scrollTo(this.scrollX,t)})}},scrollLeft:function(t){if(this.length){var e="scrollLeft"in this[0];return t===y?e?this[0].scrollLeft:this[0].pageXOffset:this.each(e?function(){this.scrollLeft=t}:function(){this.scrollTo(t,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),n=this.offset(),i=k.test(e[0].nodeName)?{top:0,left:0}:e.offset();return n.top-=parseFloat(x(t).css("margin-top"))||0,n.left-=parseFloat(x(t).css("margin-left"))||0,i.top+=parseFloat(x(e[0]).css("border-top-width"))||0,i.left+=parseFloat(x(e[0]).css("border-left-width"))||0,{top:n.top-i.top,left:n.left-i.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||O.body;t&&!k.test(t.nodeName)&&"static"==x(t).css("position");)t=t.offsetParent;return t})}},x.fn.detach=x.fn.remove,["width","height"].forEach(function(i){var r=i.replace(/./,function(t){return t[0].toUpperCase()});x.fn[i]=function(e){var t,n=this[0];return e===y?o(n)?n["inner"+r]:s(n)?n.documentElement["scroll"+r]:(t=this.offset())&&t[i]:this.each(function(t){(n=x(this)).css(i,d(this,e,t,n[i]()))})}}),["after","prepend","before","append"].forEach(function(e,a){var s=a%2;x.fn[e]=function(){var e,i,r=x.map(arguments,function(t){return"object"==(e=c(t))||"array"==e||null==t?t:_.fragment(t)}),o=1<this.length;return r.length<1?this:this.each(function(t,e){i=s?e:e.parentNode,e=0==a?e.nextSibling:1==a?e.firstChild:2==a?e:null;var n=x.contains(O.documentElement,i);r.forEach(function(t){if(o)t=t.cloneNode(!0);else if(!i)return x(t).remove();i.insertBefore(t,e),n&&function t(e,n){n(e);for(var i=0,r=e.childNodes.length;i<r;i++)t(e.childNodes[i],n)}(t,function(t){null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src||window.eval.call(window,t.innerHTML)})})})},x.fn[s?e+"To":"insert"+(a?"Before":"After")]=function(t){return x(t)[e](this),this}}),_.Z.prototype=x.fn,_.uniq=E,_.deserializeValue=g,x.zepto=_,x}();window.Zepto=Zepto,void 0===window.$&&(window.$=Zepto),function(l){function h(t){return t._zid||(t._zid=e++)}function a(t,e,n,i){if((e=f(e)).ns)var r=function(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}(e.ns);return(L[h(t)]||[]).filter(function(t){return!(!t||e.e&&t.e!=e.e||e.ns&&!r.test(t.ns)||n&&h(t.fn)!==h(n)||i&&t.sel!=i)})}function f(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function p(t,e){return t.del&&!n&&t.e in i||!!e}function d(t){return E[t]||n&&i[t]||t}function u(r,t,e,o,a,s,c){var n=h(r),u=L[n]||(L[n]=[]);t.split(/\s/).forEach(function(t){if("ready"==t)return l(document).ready(e);var n=f(t);n.fn=e,n.sel=a,n.e in E&&(e=function(t){var e=t.relatedTarget;return!e||e!==this&&!l.contains(this,e)?n.fn.apply(this,arguments):void 0});var i=(n.del=s)||e;n.proxy=function(t){if(!(t=v(t)).isImmediatePropagationStopped()){t.data=o;var e=i.apply(r,t._args==b?[t]:[t].concat(t._args));return!1===e&&(t.preventDefault(),t.stopPropagation()),e}},n.i=u.length,u.push(n),"addEventListener"in r&&r.addEventListener(d(n.e),n.proxy,p(n,c))})}function m(e,t,n,i,r){var o=h(e);(t||"").split(/\s/).forEach(function(t){a(e,t,n,i).forEach(function(t){delete L[o][t.i],"removeEventListener"in e&&e.removeEventListener(d(t.e),t.proxy,p(t,r))})})}function v(i,r){return!r&&i.isDefaultPrevented||(r=r||i,l.each(t,function(t,e){var n=r[t];i[t]=function(){return this[e]=s,n&&n.apply(r,arguments)},i[e]=j}),(r.defaultPrevented!==b?r.defaultPrevented:"returnValue"in r?!1===r.returnValue:r.getPreventDefault&&r.getPreventDefault())&&(i.isDefaultPrevented=s)),i}function g(t){var e,n={originalEvent:t};for(e in t)r.test(e)||t[e]===b||(n[e]=t[e]);return v(n,t)}function y(t){return"string"==typeof t}var b,e=1,x=Array.prototype.slice,w=l.isFunction,L={},o={},n="onfocusin"in window,i={focus:"focusin",blur:"focusout"},E={mouseenter:"mouseover",mouseleave:"mouseout"};o.click=o.mousedown=o.mouseup=o.mousemove="MouseEvents",l.event={add:u,remove:m},l.proxy=function(t,e){var n=2 in arguments&&x.call(arguments,2);if(w(t)){function i(){return t.apply(e,n?n.concat(x.call(arguments)):arguments)}return i._zid=h(t),i}if(y(e))return n?(n.unshift(t[e],t),l.proxy.apply(null,n)):l.proxy(t[e],t);throw new TypeError("expected function")},l.fn.bind=function(t,e,n){return this.on(t,e,n)},l.fn.unbind=function(t,e){return this.off(t,e)},l.fn.one=function(t,e,n,i){return this.on(t,e,n,i,1)};var s=function(){return!0},j=function(){return!1},r=/^([A-Z]|returnValue$|layer[XY]$)/,t={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};l.fn.delegate=function(t,e,n){return this.on(e,t,n)},l.fn.undelegate=function(t,e,n){return this.off(e,t,n)},l.fn.live=function(t,e){return l(document.body).delegate(this.selector,t,e),this},l.fn.die=function(t,e){return l(document.body).undelegate(this.selector,t,e),this},l.fn.on=function(e,r,n,o,a){var s,c,i=this;return e&&!y(e)?(l.each(e,function(t,e){i.on(t,r,n,e,a)}),i):(y(r)||w(o)||!1===o||(o=n,n=r,r=b),!w(n)&&!1!==n||(o=n,n=b),!1===o&&(o=j),i.each(function(t,i){a&&(s=function(t){return m(i,t.type,o),o.apply(this,arguments)}),r&&(c=function(t){var e,n=l(t.target).closest(r,i).get(0);return n&&n!==i?(e=l.extend(g(t),{currentTarget:n,liveFired:i}),(s||o).apply(n,[e].concat(x.call(arguments,1)))):void 0}),u(i,e,o,n,r,c||s)}))},l.fn.off=function(t,n,e){var i=this;return t&&!y(t)?(l.each(t,function(t,e){i.off(t,n,e)}),i):(y(n)||w(e)||!1===e||(e=n,n=b),!1===e&&(e=j),i.each(function(){m(this,t,e,n)}))},l.fn.trigger=function(t,e){return(t=y(t)||l.isPlainObject(t)?l.Event(t):v(t))._args=e,this.each(function(){t.type in i&&"function"==typeof this[t.type]?this[t.type]():"dispatchEvent"in this?this.dispatchEvent(t):l(this).triggerHandler(t,e)})},l.fn.triggerHandler=function(n,i){var r,o;return this.each(function(t,e){(r=g(y(n)?l.Event(n):n))._args=i,r.target=e,l.each(a(e,n.type||n),function(t,e){return o=e.proxy(r),!r.isImmediatePropagationStopped()&&void 0})}),o},"focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e){l.fn[e]=function(t){return 0 in arguments?this.bind(e,t):this.trigger(e)}}),l.Event=function(t,e){y(t)||(t=(e=t).type);var n=document.createEvent(o[t]||"Events"),i=!0;if(e)for(var r in e)"bubbles"==r?i=!!e[r]:n[r]=e[r];return n.initEvent(t,i,!0),v(n)}}(Zepto),function(dh){function fh(t,e,n,i){return t.global?function(t,e,n){var i=dh.Event(e);return dh(t).trigger(i,n),!i.isDefaultPrevented()}(e||vh,n,i):void 0}function ih(t,e){var n=e.context;return!1!==e.beforeSend.call(n,t,e)&&!1!==fh(e,n,"ajaxBeforeSend",[t,e])&&void fh(e,n,"ajaxSend",[t,e])}function jh(t,e,n,i){var r=n.context,o="success";n.success.call(r,t,o,e),i&&i.resolveWith(r,[t,o,e]),fh(n,r,"ajaxSuccess",[e,n,t]),lh(o,e,n)}function kh(t,e,n,i,r){var o=i.context;i.error.call(o,n,e,t),r&&r.rejectWith(o,[n,e,t]),fh(i,o,"ajaxError",[n,i,t||e]),lh(e,n,i)}function lh(t,e,n){var i=n.context;n.complete.call(i,e,t),fh(n,i,"ajaxComplete",[e,n]),function(t){t.global&&!--dh.active&&fh(t,null,"ajaxStop")}(n)}function mh(){}function oh(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function qh(t,e,n,i){return dh.isFunction(e)&&(i=n,n=e,e=void 0),dh.isFunction(n)||(i=n,n=void 0),{url:t,data:e,success:n,dataType:i}}var sh,th,uh=0,vh=window.document,wh=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,xh=/^(?:text|application)\/javascript/i,yh=/^(?:text|application)\/xml/i,zh="application/json",Ah="text/html",Bh=/^\s*$/,Ch=vh.createElement("a");Ch.href=window.location.href,dh.active=0,dh.ajaxJSONP=function(n,i){if(!("type"in n))return dh.ajax(n);function t(t){dh(s).triggerHandler("error",t||"abort")}var r,o,e=n.jsonpCallback,a=(dh.isFunction(e)?e():e)||"jsonp"+ ++uh,s=vh.createElement("script"),c=window[a],u={abort:t};return i&&i.promise(u),dh(s).on("load error",function(t,e){clearTimeout(o),dh(s).off().remove(),"error"!=t.type&&r?jh(r[0],u,n,i):kh(null,e||"error",u,n,i),window[a]=c,r&&dh.isFunction(c)&&c(r[0]),c=r=void 0}),!1===ih(u,n)?t("abort"):(window[a]=function(){r=arguments},s.src=n.url.replace(/\?(.+)=\?/,"?$1="+a),vh.head.appendChild(s),0<n.timeout&&(o=setTimeout(function(){t("timeout")},n.timeout))),u},dh.ajaxSettings={type:"GET",beforeSend:mh,success:mh,error:mh,complete:mh,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:zh,xml:"application/xml, text/xml",html:Ah,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},dh.ajax=function(Ji){var Ki,Li=dh.extend({},Ji||{}),Mi=dh.Deferred&&dh.Deferred();for(sh in dh.ajaxSettings)void 0===Li[sh]&&(Li[sh]=dh.ajaxSettings[sh]);(function(t){t.global&&0==dh.active++&&fh(t,null,"ajaxStart")})(Li),Li.crossDomain||((Ki=vh.createElement("a")).href=Li.url,Ki.href=Ki.href,Li.crossDomain=Ch.protocol+"//"+Ch.host!=Ki.protocol+"//"+Ki.host),Li.url||(Li.url=window.location.toString()),function(t){t.processData&&t.data&&"string"!=dh.type(t.data)&&(t.data=dh.param(t.data,t.traditional)),!t.data||t.type&&"GET"!=t.type.toUpperCase()||(t.url=oh(t.url,t.data),t.data=void 0)}(Li);var Ni=Li.dataType,Oi=/\?.+=\?/.test(Li.url);if(Oi&&(Ni="jsonp"),!1!==Li.cache&&(Ji&&!0===Ji.cache||"script"!=Ni&&"jsonp"!=Ni)||(Li.url=oh(Li.url,"_="+Date.now())),"jsonp"==Ni)return Oi||(Li.url=oh(Li.url,Li.jsonp?Li.jsonp+"=?":!1===Li.jsonp?"":"callback=?")),dh.ajaxJSONP(Li,Mi);function Si(t,e){Ri[t.toLowerCase()]=[t,e]}var Pi,Qi=Li.accepts[Ni],Ri={},Ti=/^([\w-]+:)\/\//.test(Li.url)?RegExp.$1:window.location.protocol,Ui=Li.xhr(),Vi=Ui.setRequestHeader;if(Mi&&Mi.promise(Ui),Li.crossDomain||Si("X-Requested-With","XMLHttpRequest"),Si("Accept",Qi||"*/*"),(Qi=Li.mimeType||Qi)&&(-1<Qi.indexOf(",")&&(Qi=Qi.split(",",2)[0]),Ui.overrideMimeType&&Ui.overrideMimeType(Qi)),(Li.contentType||!1!==Li.contentType&&Li.data&&"GET"!=Li.type.toUpperCase())&&Si("Content-Type",Li.contentType||"application/x-www-form-urlencoded"),Li.headers)for(th in Li.headers)Si(th,Li.headers[th]);if(Ui.setRequestHeader=Si,!(Ui.onreadystatechange=function(){if(4==Ui.readyState){Ui.onreadystatechange=mh,clearTimeout(Pi);var Zi,$i=!1;if(200<=Ui.status&&Ui.status<300||304==Ui.status||0==Ui.status&&"file:"==Ti){Ni=Ni||function(t){return(t=t&&t.split(";",2)[0])&&(t==Ah?"html":t==zh?"json":xh.test(t)?"script":yh.test(t)&&"xml")||"text"}(Li.mimeType||Ui.getResponseHeader("content-type")),Zi=Ui.responseText;try{"script"==Ni?eval(Zi):"xml"==Ni?Zi=Ui.responseXML:"json"==Ni&&(Zi=Bh.test(Zi)?null:dh.parseJSON(Zi))}catch(t){$i=t}$i?kh($i,"parsererror",Ui,Li,Mi):jh(Zi,Ui,Li,Mi)}else kh(Ui.statusText||null,Ui.status?"error":"abort",Ui,Li,Mi)}})===ih(Ui,Li))return Ui.abort(),kh(null,"abort",Ui,Li,Mi),Ui;if(Li.xhrFields)for(th in Li.xhrFields)Ui[th]=Li.xhrFields[th];var Wi=!("async"in Li)||Li.async;for(th in Ui.open(Li.type,Li.url,Wi,Li.username,Li.password),Ri)Vi.apply(Ui,Ri[th]);return 0<Li.timeout&&(Pi=setTimeout(function(){Ui.onreadystatechange=mh,Ui.abort(),kh(null,"timeout",Ui,Li,Mi)},Li.timeout)),Ui.send(Li.data?Li.data:null),Ui},dh.get=function(){return dh.ajax(qh.apply(null,arguments))},dh.post=function(){var t=qh.apply(null,arguments);return t.type="POST",dh.ajax(t)},dh.getJSON=function(){var t=qh.apply(null,arguments);return t.dataType="json",dh.ajax(t)},dh.fn.load=function(t,e,n){if(!this.length)return this;var i,r=this,o=t.split(/\s/),a=qh(t,e,n),s=a.success;return 1<o.length&&(a.url=o[0],i=o[1]),a.success=function(t){r.html(i?dh("<div>").html(t.replace(wh,"")).find(i):t),s&&s.apply(r,arguments)},dh.ajax(a),this};var Dh=encodeURIComponent;dh.param=function(t,e){var n=[];return n.add=function(t,e){dh.isFunction(e)&&(e=e()),null==e&&(e=""),this.push(Dh(t)+"="+Dh(e))},function n(i,t,r,o){var a,s=dh.isArray(t),c=dh.isPlainObject(t);dh.each(t,function(t,e){a=dh.type(e),o&&(t=r?o:o+"["+(c||"object"==a||"array"==a?t:"")+"]"),!o&&s?i.add(e.name,e.value):"array"==a||!r&&"object"==a?n(i,e,r,t):i.add(t,e)})}(n,t,e),n.join("&").replace(/%20/g,"+")}}(Zepto),function(o){o.fn.serializeArray=function(){var n,i,e=[],r=function(t){return t.forEach?t.forEach(r):void e.push({name:n,value:t})};return this[0]&&o.each(this[0].elements,function(t,e){i=e.type,(n=e.name)&&"fieldset"!=e.nodeName.toLowerCase()&&!e.disabled&&"submit"!=i&&"reset"!=i&&"button"!=i&&"file"!=i&&("radio"!=i&&"checkbox"!=i||e.checked)&&r(o(e).val())}),e},o.fn.serialize=function(){var e=[];return this.serializeArray().forEach(function(t){e.push(encodeURIComponent(t.name)+"="+encodeURIComponent(t.value))}),e.join("&")},o.fn.submit=function(t){if(0 in arguments)this.bind("submit",t);else if(this.length){var e=o.Event("submit");this.eq(0).trigger(e),e.isDefaultPrevented()||this.get(0).submit()}return this}}(Zepto),function(n){"__proto__"in{}||n.extend(n.zepto,{Z:function(t,e){return t=t||[],n.extend(t,n.fn),t.selector=e||"",t.__Z=!0,t},isZ:function(t){return"array"===n.type(t)&&"__Z"in t}});try{getComputedStyle(void 0)}catch(t){var e=getComputedStyle;window.getComputedStyle=function(t){try{return e(t)}catch(t){return null}}}}(Zepto),function(t,e){"function"==typeof define&&define.amd?define("smoothScroll",e(t)):"object"==typeof exports?module.exports=e(t):t.smoothScroll=e(t)}(window||this,function(v){"use strict";function t(t,e,n){if("[object Object]"===Object.prototype.toString.call(t))for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.call(n,t[i],i,t);else for(var r=0,o=t.length;r<o;r++)e.call(n,t[r],r,t)}function g(n,i){var r={};return t(n,function(t,e){r[e]=n[e]}),t(i,function(t,e){r[e]=i[e]}),r}function y(t){return Math.max(t.scrollHeight,t.offsetHeight,t.clientHeight)}var n,e,b,i={},r=!!document.querySelector&&!!v.addEventListener,x={speed:500,easing:"easeInOutCubic",offset:0,updateURL:!0,callbackBefore:function(){},callbackAfter:function(){}};i.animateScroll=function(r,o,t){var a=g(a||x,t||{}),e=function(t){return t&&"object"==typeof JSON&&"function"==typeof JSON.parse?JSON.parse(t):{}}(r?r.getAttribute("data-options"):null);a=g(a,e);var n,i,s,c="#"===(o="#"+function(t){for(var e,n=String(t),i=n.length,r=-1,o="",a=n.charCodeAt(0);++r<i;){if(0===(e=n.charCodeAt(r)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");1<=e&&e<=31||127==e||0===r&&48<=e&&e<=57||1===r&&48<=e&&e<=57&&45===a?o+="\\"+e.toString(16)+" ":o+=128<=e||45===e||95===e||48<=e&&e<=57||65<=e&&e<=90||97<=e&&e<=122?n.charAt(r):"\\"+n.charAt(r)}return o}(o.substr(1)))?document.documentElement:document.querySelector(o),u=v.pageYOffset,l=null===(b=b||document.querySelector("[data-scroll-header]"))?0:y(b)+b.offsetTop,h=function(t,e,n){var i=0;if(t.offsetParent)for(;i+=t.offsetTop,t=t.offsetParent;);return 0<=(i=i-e-n)?i:0}(c,l,parseInt(a.offset,10)),f=h-u,p=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight),d=0;!function(t,e){history.pushState&&(e||"true"===e)&&history.pushState(null,null,[v.location.protocol,"//",v.location.host,v.location.pathname,v.location.search,t].join(""))}(o,a.updateURL);function m(){i=1<(i=(d+=16)/parseInt(a.speed,10))?1:i,s=u+f*function(t,e){var n;return"easeInQuad"===t&&(n=e*e),"easeOutQuad"===t&&(n=e*(2-e)),"easeInOutQuad"===t&&(n=e<.5?2*e*e:(4-2*e)*e-1),"easeInCubic"===t&&(n=e*e*e),"easeOutCubic"===t&&(n=--e*e*e+1),"easeInOutCubic"===t&&(n=e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1),"easeInQuart"===t&&(n=e*e*e*e),"easeOutQuart"===t&&(n=1- --e*e*e*e),"easeInOutQuart"===t&&(n=e<.5?8*e*e*e*e:1-8*--e*e*e*e),"easeInQuint"===t&&(n=e*e*e*e*e),"easeOutQuint"===t&&(n=1+--e*e*e*e*e),"easeInOutQuint"===t&&(n=e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e),n||e}(a.easing,i),v.scrollTo(0,Math.floor(s)),function(t,e,n){var i=v.pageYOffset;(t==e||i==e||v.innerHeight+i>=p)&&(clearInterval(n),c.focus(),a.callbackAfter(r,o))}(s,h,n)}0===v.pageYOffset&&v.scrollTo(0,0),a.callbackBefore(r,o),n=setInterval(m,16)};function o(t){var e=function(t,e){for(var n=e.charAt(0);t&&t!==document;t=t.parentNode)if("."===n){if(t.classList.contains(e.substr(1)))return t}else if("#"===n){if(t.id===e.substr(1))return t}else if("["===n&&t.hasAttribute(e.substr(1,e.length-2)))return t;return!1}(t.target,"[data-scroll]");e&&"a"===e.tagName.toLowerCase()&&(t.preventDefault(),i.animateScroll(e,e.hash,n))}function a(t){e=e||setTimeout(function(){headerHeight=(e=null)===b?0:y(b)+b.offsetTop},66)}return i.destroy=function(){n&&(document.removeEventListener("click",o,!1),v.removeEventListener("resize",a,!1),b=e=n=null)},i.init=function(t){r&&(i.destroy(),n=g(x,t||{}),b=document.querySelector("[data-scroll-header]"),document.addEventListener("click",o,!1),b&&v.addEventListener("resize",a,!1))},i}),function(u){u.fn.simpleJekyllSearch=function(t){var r=u.extend({jsonFile:"/search.json",jsonFormat:"title,category,desc,url,date,shortdate",template:'<li><article><a href="{url}">{title} <span class="entry-date"><time datetime="{date}">{date}</time></span></a></article></li>',searchResults:".search-results",searchResultsTitle:"<h4>Search Results:</h4>",limit:"5",noResults:"<p>Oh snap!<br/><small>Nothing found! :(</small></p>"},t),o=r.jsonFormat.split(","),a=[],i=this,s=u(r.searchResults);function c(){s.children().remove()}r.jsonFile.length&&s.length&&u.ajax({type:"GET",url:r.jsonFile,dataType:"json",success:function(t,e,n){a=t,i.keyup(function(t){u(this).val().length?function(t){c(),s.append(u(r.searchResultsTitle)),t.length?u.each(t,function(t,e){if(t<r.limit){var n=r.template;for(t=0;t<o.length;t++){var i=new RegExp("{"+o[t]+"}","g");n=n.replace(i,e[o[t]])}s.append(u(n))}}):s.append(r.noResults)}(function(n){var i=[];return u.each(a,function(t,e){for(t=0;t<o.length;t++)void 0!==e[o[t]]&&-1!==e[o[t]].toLowerCase().indexOf(n.toLowerCase())&&(i.push(e),t=o.length)}),i}(u(this).val())):c()})},error:function(t,e,n){console.log("***ERROR in simpleJekyllSearch.js***"),console.log(t),console.log(e),console.log(n)}})}}(Zepto),function(t){t("a#slide").click(function(){t("#sidebar,a#slide,#fade").addClass("slide"),t("#open").hide(),t("#search").hide(),t("#close").show()}),t("#fade").click(function(){t("#sidebar,a#slide,#fade").removeClass("slide"),t("#open").show(),t("#search").show(),t("#close").hide()});var e={close:t(".icon-remove-sign"),searchform:t(".search-form"),canvas:t("body"),dothis:t(".dosearch")};e.dothis.on("click",function(){t(".search-wrapper").toggleClass("active"),e.searchform.toggleClass("active"),e.searchform.find("input").focus(),e.canvas.toggleClass("search-overlay"),t(".search-field").simpleJekyllSearch()}),e.close.on("click",function(){t(".search-wrapper").toggleClass("active"),e.searchform.toggleClass("active"),e.canvas.removeClass("search-overlay")}),smoothScroll.init({updateURL:!1})}(Zepto,window);