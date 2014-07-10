/*!
* Velocity.js: Accelerated JavaScript animation.
* @version 0.5.1
* @docs http://velocityjs.org
* @license Copyright 2014 Julian Shapiro. MIT License: http://en.wikipedia.org/wiki/MIT_License
*/
!function(a,b,c,d){function e(a){for(var b=-1,c=a?a.length:0,d=[];++b<c;){var e=a[b];e&&d.push(e)}return d}function f(a){var b=q.data(a,k);return null===b?d:b}function g(a){return function(b){return Math.round(b*a)*(1/a)}}function h(a,b){var c=a;return p.isString(a)?r.Easings[a]||(c=!1):c=p.isArray(a)&&1===a.length?g.apply(null,a):p.isArray(a)&&2===a.length?t.apply(null,a.concat([b])):p.isArray(a)&&4===a.length?s.apply(null,a):!1,c===!1&&(c=r.Easings[r.defaults.easing]?r.defaults.easing:m),c}function i(a){if(a)for(var b=(new Date).getTime(),c=0,e=r.State.calls.length;e>c;c++)if(r.State.calls[c]){var g=r.State.calls[c],h=g[0],k=g[2],l=g[3];l||(l=r.State.calls[c][3]=b-16);for(var m=Math.min((b-l)/k.duration,1),n=0,q=h.length;q>n;n++){var s=h[n],t=s.element;if(f(t)){var v=!1;null!==k.display&&"none"!==k.display&&u.setPropertyValue(t,"display",k.display);for(var w in s)if("element"!==w){var x,y=s[w],z=p.isString(y.easing)?r.Easings[y.easing]:y.easing;if(x=1===m?y.endValue:y.startValue+(y.endValue-y.startValue)*z(m),y.currentValue=x,u.Hooks.registered[w]){var A=u.Hooks.getRoot(w),B=f(t).rootPropertyValueCache[A];B&&(y.rootPropertyValue=B)}var C=u.setPropertyValue(t,w,y.currentValue+(0===parseFloat(x)?"":y.unitType),y.rootPropertyValue,y.scrollData);u.Hooks.registered[w]&&(f(t).rootPropertyValueCache[A]=u.Normalizations.registered[A]?u.Normalizations.registered[A]("extract",null,C[1]):C[1]),"transform"===C[0]&&(v=!0)}k.mobileHA&&f(t).transformCache.translate3d===d&&(f(t).transformCache.translate3d="(0px, 0px, 0px)",v=!0),v&&u.flushTransformCache(t)}}null!==k.display&&"none"!==k.display&&(r.State.calls[c][2].display=!1),k.progress&&k.progress.call(g[1],g[1],m,Math.max(0,l+k.duration-b),l),1===m&&j(c)}r.State.isTicking&&o(i)}function j(a,b){if(!r.State.calls[a])return!1;for(var c=r.State.calls[a][0],e=r.State.calls[a][1],g=r.State.calls[a][2],h=r.State.calls[a][4],i=!1,j=0,k=c.length;k>j;j++){var l=c[j].element;if(b||"none"!==g.display||g.loop||u.setPropertyValue(l,"display",g.display),(q.queue(l)[1]===d||!/\.velocityQueueEntryFlag/i.test(q.queue(l)[1]))&&f(l)){f(l).isAnimating=!1,f(l).rootPropertyValueCache={};var m,n=["transformPerspective","translateZ","rotateX","rotateY"],o=!1;for(var p in n)m=n[p],/^\(0[^.]/.test(f(l).transformCache[m])&&(o=!0,delete f(l).transformCache[m]);g.mobileHA&&(o=!0,delete f(l).transformCache.translate3d),o&&u.flushTransformCache(l)}b||!g.complete||g.loop||j!==k-1||g.complete.call(e,e),h&&h(e),g.queue!==!1&&q.dequeue(l,g.queue)}r.State.calls[a]=!1;for(var s=0,t=r.State.calls.length;t>s;s++)if(r.State.calls[s]!==!1){i=!0;break}i===!1&&(r.State.isTicking=!1,delete r.State.calls,r.State.calls=[])}var k="velocity",l=400,m="swing",n=function(){if(c.documentMode)return c.documentMode;for(var a=7;a>4;a--){var b=c.createElement("div");if(b.innerHTML="<!--[if IE "+a+"]><span></span><![endif]-->",b.getElementsByTagName("span").length)return b=null,a}return d}(),o=b.requestAnimationFrame||function(){var a=0;return b.webkitRequestAnimationFrame||b.mozRequestAnimationFrame||function(b){var c,d=(new Date).getTime();return c=Math.max(0,16-(d-a)),a=d+c,setTimeout(function(){b(d+c)},c)}}(),p={isString:function(a){return"string"==typeof a},isArray:Array.isArray||function(a){return"[object Array]"===Object.prototype.toString.call(a)},isFunction:function(a){return"[object Function]"===Object.prototype.toString.call(a)},isNode:function(a){return a&&a.nodeType},isNodeList:function(a){return"object"==typeof a&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(a))&&a.length!==d&&(0===a.length||"object"==typeof a[0]&&a[0].nodeType>0)},isWrapped:function(a){return a&&(a.jquery||b.Zepto&&b.Zepto.zepto.isZ(a))},isSVG:function(a){return b.SVGElement&&a instanceof SVGElement}},q=b.jQuery||a.Velocity&&a.Velocity.Utilities;if(!q)throw new Error("Velocity: Either jQuery or Velocity's jQuery shim must first be loaded.");if(a.Velocity!==d&&!a.Velocity.Utilities)throw new Error("Velocity: Namespace is occupied.");if(7>=n){if(b.jQuery)return void(b.jQuery.fn.velocity=b.jQuery.fn.animate);throw new Error("Velocity: For IE<=7, Velocity falls back to jQuery, which must first be loaded.")}if(8===n&&!b.jQuery)throw new Error("Velocity: For IE8, Velocity requires jQuery to be loaded. (Velocity's jQuery shim does not work with IE8.)");var r=a.Velocity=a.velocity={State:{isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),isAndroid:/Android/i.test(navigator.userAgent),isGingerbread:/Android 2\.3\.[3-7]/i.test(navigator.userAgent),isChrome:b.chrome,prefixElement:c.createElement("div"),prefixMatches:{},scrollAnchor:null,scrollPropertyLeft:null,scrollPropertyTop:null,isTicking:!1,calls:[]},CSS:{},Utilities:b.jQuery,Sequences:{},Easings:{},Promise:b.Promise,defaults:{queue:"",duration:l,easing:m,begin:null,complete:null,progress:null,display:null,loop:!1,delay:!1,mobileHA:!0,_cacheValues:!0},animate:function(){},mock:!1,version:{major:0,minor:5,patch:1},debug:!1};b.pageYOffset!==d?(r.State.scrollAnchor=b,r.State.scrollPropertyLeft="pageXOffset",r.State.scrollPropertyTop="pageYOffset"):(r.State.scrollAnchor=c.documentElement||c.body.parentNode||c.body,r.State.scrollPropertyLeft="scrollLeft",r.State.scrollPropertyTop="scrollTop");var s=function(){function a(a,b){return 1-3*b+3*a}function b(a,b){return 3*b-6*a}function c(a){return 3*a}function d(d,e,f){return((a(e,f)*d+b(e,f))*d+c(e))*d}function e(d,e,f){return 3*a(e,f)*d*d+2*b(e,f)*d+c(e)}return function(a,b,c,f){function g(b){for(var f=b,g=0;8>g;++g){var h=e(f,a,c);if(0===h)return f;var i=d(f,a,c)-b;f-=i/h}return f}if(4!==arguments.length)return!1;for(var h=0;4>h;++h)if("number"!=typeof arguments[h]||isNaN(arguments[h])||!isFinite(arguments[h]))return!1;return a=Math.min(a,1),c=Math.min(c,1),a=Math.max(a,0),c=Math.max(c,0),function(e){return a===b&&c===f?e:d(g(e),b,f)}}}(),t=function(){function a(a){return-a.tension*a.x-a.friction*a.v}function b(b,c,d){var e={x:b.x+d.dx*c,v:b.v+d.dv*c,tension:b.tension,friction:b.friction};return{dx:e.v,dv:a(e)}}function c(c,d){var e={dx:c.v,dv:a(c)},f=b(c,.5*d,e),g=b(c,.5*d,f),h=b(c,d,g),i=1/6*(e.dx+2*(f.dx+g.dx)+h.dx),j=1/6*(e.dv+2*(f.dv+g.dv)+h.dv);return c.x=c.x+i*d,c.v=c.v+j*d,c}return function d(a,b,e){var f,g,h,i={x:-1,v:0,tension:null,friction:null},j=[0],k=0,l=1e-4,m=.016;for(a=parseFloat(a)||500,b=parseFloat(b)||20,e=e||null,i.tension=a,i.friction=b,f=null!==e,f?(k=d(a,b),g=k/e*m):g=m;;)if(h=c(h||i,g),j.push(1+h.x),k+=16,!(Math.abs(h.x)>l&&Math.abs(h.v)>l))break;return f?function(a){return j[a*(j.length-1)|0]}:k}}();!function(){r.Easings.linear=function(a){return a},r.Easings.swing=function(a){return.5-Math.cos(a*Math.PI)/2},r.Easings.spring=function(a){return 1-Math.cos(4.5*a*Math.PI)*Math.exp(6*-a)},r.Easings.ease=s(.25,.1,.25,1),r.Easings["ease-in"]=s(.42,0,1,1),r.Easings["ease-out"]=s(0,0,.58,1),r.Easings["ease-in-out"]=s(.42,0,.58,1);var a={};q.each(["Quad","Cubic","Quart","Quint","Expo"],function(b,c){a[c]=function(a){return Math.pow(a,b+2)}}),q.extend(a,{Sine:function(a){return 1-Math.cos(a*Math.PI/2)},Circ:function(a){return 1-Math.sqrt(1-a*a)},Elastic:function(a){return 0===a||1===a?a:-Math.pow(2,8*(a-1))*Math.sin((80*(a-1)-7.5)*Math.PI/15)},Back:function(a){return a*a*(3*a-2)},Bounce:function(a){for(var b,c=4;a<((b=Math.pow(2,--c))-1)/11;);return 1/Math.pow(4,3-c)-7.5625*Math.pow((3*b-2)/22-a,2)}}),q.each(a,function(a,b){r.Easings["easeIn"+a]=b,r.Easings["easeOut"+a]=function(a){return 1-b(1-a)},r.Easings["easeInOut"+a]=function(a){return.5>a?b(2*a)/2:1-b(-2*a+2)/2}})}();var u=r.CSS={RegEx:{valueUnwrap:/^[A-z]+\((.*)\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,valueSplit:/([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi},Hooks:{templates:{color:["Red Green Blue Alpha","255 255 255 1"],backgroundColor:["Red Green Blue Alpha","255 255 255 1"],borderColor:["Red Green Blue Alpha","255 255 255 1"],borderTopColor:["Red Green Blue Alpha","255 255 255 1"],borderRightColor:["Red Green Blue Alpha","255 255 255 1"],borderBottomColor:["Red Green Blue Alpha","255 255 255 1"],borderLeftColor:["Red Green Blue Alpha","255 255 255 1"],outlineColor:["Red Green Blue Alpha","255 255 255 1"],fill:["Red Green Blue Alpha","255 255 255 1"],stroke:["Red Green Blue Alpha","255 255 255 1"],stopColor:["Red Green Blue Alpha","255 255 255 1"],textShadow:["Color X Y Blur","black 0px 0px 0px"],boxShadow:["Color X Y Blur Spread","black 0px 0px 0px 0px"],clip:["Top Right Bottom Left","0px 0px 0px 0px"],backgroundPosition:["X Y","0% 0%"],transformOrigin:["X Y Z","50% 50% 0px"],perspectiveOrigin:["X Y","50% 50%"]},registered:{},register:function(){var a,b,c;if(n)for(a in u.Hooks.templates){b=u.Hooks.templates[a],c=b[0].split(" ");var d=b[1].match(u.RegEx.valueSplit);"Color"===c[0]&&(c.push(c.shift()),d.push(d.shift()),u.Hooks.templates[a]=[c.join(" "),d.join(" ")])}for(a in u.Hooks.templates){b=u.Hooks.templates[a],c=b[0].split(" ");for(var e in c){var f=a+c[e],g=e;u.Hooks.registered[f]=[a,g]}}},getRoot:function(a){var b=u.Hooks.registered[a];return b?b[0]:a},cleanRootPropertyValue:function(a,b){return u.RegEx.valueUnwrap.test(b)&&(b=b.match(u.Hooks.RegEx.valueUnwrap)[1]),u.Values.isCSSNullValue(b)&&(b=u.Hooks.templates[a][1]),b},extractValue:function(a,b){var c=u.Hooks.registered[a];if(c){var d=c[0],e=c[1];return b=u.Hooks.cleanRootPropertyValue(d,b),b.toString().match(u.RegEx.valueSplit)[e]}return b},injectValue:function(a,b,c){var d=u.Hooks.registered[a];if(d){var e,f,g=d[0],h=d[1];return c=u.Hooks.cleanRootPropertyValue(g,c),e=c.toString().match(u.RegEx.valueSplit),e[h]=b,f=e.join(" ")}return c}},Normalizations:{registered:{clip:function(a,b,c){switch(a){case"name":return"clip";case"extract":var d;return u.RegEx.wrappedValueAlreadyExtracted.test(c)?d=c:(d=c.toString().match(u.RegEx.valueUnwrap),d=d?d[1].replace(/,(\s+)?/g," "):c),d;case"inject":return"rect("+c+")"}},opacity:function(a,b,c){if(8>=n)switch(a){case"name":return"filter";case"extract":var d=c.toString().match(/alpha\(opacity=(.*)\)/i);return c=d?d[1]/100:1;case"inject":return b.style.zoom=1,parseFloat(c)>=1?"":"alpha(opacity="+parseInt(100*parseFloat(c),10)+")"}else switch(a){case"name":return"opacity";case"extract":return c;case"inject":return c}}},register:function(){function a(a){var b,c=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,d=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;return a=a.replace(c,function(a,b,c,d){return b+b+c+c+d+d}),b=d.exec(a),b?"rgb("+(parseInt(b[1],16)+" "+parseInt(b[2],16)+" "+parseInt(b[3],16))+")":"rgb(0 0 0)"}var b=["translateX","translateY","scale","scaleX","scaleY","skewX","skewY","rotateZ"];9>=n||r.State.isGingerbread||(b=b.concat(["transformPerspective","translateZ","scaleZ","rotateX","rotateY"]));for(var c=0,e=b.length;e>c;c++)!function(){var a=b[c];u.Normalizations.registered[a]=function(b,c,e){switch(b){case"name":return"transform";case"extract":return f(c).transformCache[a]===d?/^scale/i.test(a)?1:0:f(c).transformCache[a].replace(/[()]/g,"");case"inject":var g=!1;switch(a.substr(0,a.length-1)){case"translate":g=!/(%|px|em|rem|\d)$/i.test(e);break;case"scal":case"scale":r.State.isAndroid&&f(c).transformCache[a]===d&&(e=1),g=!/(\d)$/i.test(e);break;case"skew":g=!/(deg|\d)$/i.test(e);break;case"rotate":g=!/(deg|\d)$/i.test(e)}return g||(f(c).transformCache[a]="("+e+")"),f(c).transformCache[a]}}}();for(var g=["fill","stroke","stopColor","color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","outlineColor"],c=0,h=g.length;h>c;c++)!function(){var b=g[c];u.Normalizations.registered[b]=function(c,e,f){switch(c){case"name":return b;case"extract":var g;if(u.RegEx.wrappedValueAlreadyExtracted.test(f))g=f;else{var h,i={aqua:"rgb(0, 255, 255);",black:"rgb(0, 0, 0)",blue:"rgb(0, 0, 255)",fuchsia:"rgb(255, 0, 255)",gray:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",lime:"rgb(0, 255, 0)",maroon:"rgb(128, 0, 0)",navy:"rgb(0, 0, 128)",olive:"rgb(128, 128, 0)",purple:"rgb(128, 0, 128)",red:"rgb(255, 0, 0)",silver:"rgb(192, 192, 192)",teal:"rgb(0, 128, 128)",white:"rgb(255, 255, 255)",yellow:"rgb(255, 255, 0)"};/^[A-z]+$/i.test(f)?h=i[f]!==d?i[f]:i.black:/^#([A-f\d]{3}){1,2}$/i.test(f)?h=a(f):/^rgba?\(/i.test(f)||(h=i.black),g=(h||f).toString().match(u.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g," ")}return 8>=n||3!==g.split(" ").length||(g+=" 1"),g;case"inject":return 8>=n?4===f.split(" ").length&&(f=f.split(/\s+/).slice(0,3).join(" ")):3===f.split(" ").length&&(f+=" 1"),(8>=n?"rgb":"rgba")+"("+f.replace(/\s+/g,",").replace(/\.(\d)+(?=,)/g,"")+")"}}}()}},Names:{camelCase:function(a){return a.replace(/-(\w)/g,function(a,b){return b.toUpperCase()})},SVGAttribute:function(a){var b="width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y1";return(n||r.State.isAndroid&&!r.State.isChrome)&&(b+="|transform"),new RegExp("^("+b+")$","i").test(a)},prefixCheck:function(a){if(r.State.prefixMatches[a])return[r.State.prefixMatches[a],!0];for(var b=["","Webkit","Moz","ms","O"],c=0,d=b.length;d>c;c++){var e;if(e=0===c?a:b[c]+a.replace(/^\w/,function(a){return a.toUpperCase()}),p.isString(r.State.prefixElement.style[e]))return r.State.prefixMatches[a]=e,[e,!0]}return[a,!1]}},Values:{isCSSNullValue:function(a){return 0==a||/^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(a)},getUnitType:function(a){return/^(rotate|skew)/i.test(a)?"deg":/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(a)?"":"px"}},getPropertyValue:function(a,c,e,g){function h(a,c){var e=0;if(8>=n)e=q.css(a,c);else{if(!g){if("height"===c&&"border-box"!==u.getPropertyValue(a,"boxSizing").toString().toLowerCase())return a.offsetHeight-(parseFloat(u.getPropertyValue(a,"borderTopWidth"))||0)-(parseFloat(u.getPropertyValue(a,"borderBottomWidth"))||0)-(parseFloat(u.getPropertyValue(a,"paddingTop"))||0)-(parseFloat(u.getPropertyValue(a,"paddingBottom"))||0);if("width"===c&&"border-box"!==u.getPropertyValue(a,"boxSizing").toString().toLowerCase())return a.offsetWidth-(parseFloat(u.getPropertyValue(a,"borderLeftWidth"))||0)-(parseFloat(u.getPropertyValue(a,"borderRightWidth"))||0)-(parseFloat(u.getPropertyValue(a,"paddingLeft"))||0)-(parseFloat(u.getPropertyValue(a,"paddingRight"))||0)}var i;i=f(a)===d?b.getComputedStyle(a,null):f(a).computedStyle?f(a).computedStyle:f(a).computedStyle=b.getComputedStyle(a,null),n&&"borderColor"===c&&(c="borderTopColor"),e=9===n&&"filter"===c?i.getPropertyValue(c):i[c],(""===e||null===e)&&(e=a.style[c])}if("auto"===e&&/^(top|right|bottom|left)$/i.test(c)){var j=h(a,"position");("fixed"===j||"absolute"===j&&/top|left/i.test(c))&&(e=q(a).position()[c]+"px")}return e}var i;if(u.Hooks.registered[c]){var j=c,k=u.Hooks.getRoot(j);e===d&&(e=u.getPropertyValue(a,u.Names.prefixCheck(k)[0])),u.Normalizations.registered[k]&&(e=u.Normalizations.registered[k]("extract",a,e)),i=u.Hooks.extractValue(j,e)}else if(u.Normalizations.registered[c]){var l,m;l=u.Normalizations.registered[c]("name",a),"transform"!==l&&(m=h(a,u.Names.prefixCheck(l)[0]),u.Values.isCSSNullValue(m)&&u.Hooks.templates[c]&&(m=u.Hooks.templates[c][1])),i=u.Normalizations.registered[c]("extract",a,m)}return/^[\d-]/.test(i)||(i=f(a)&&f(a).isSVG&&u.Names.SVGAttribute(c)?/^(height|width)$/i.test(c)?a.getBBox()[c]:a.getAttribute(c):h(a,u.Names.prefixCheck(c)[0])),u.Values.isCSSNullValue(i)&&(i=0),r.debug>=2&&console.log("Get "+c+": "+i),i},setPropertyValue:function(a,c,d,e,g){var h=c;if("scroll"===c)g.container?g.container["scroll"+g.direction]=d:"Left"===g.direction?b.scrollTo(d,g.alternateValue):b.scrollTo(g.alternateValue,d);else if(u.Normalizations.registered[c]&&"transform"===u.Normalizations.registered[c]("name",a))u.Normalizations.registered[c]("inject",a,d),h="transform",d=f(a).transformCache[c];else{if(u.Hooks.registered[c]){var i=c,j=u.Hooks.getRoot(c);e=e||u.getPropertyValue(a,j),d=u.Hooks.injectValue(i,d,e),c=j}if(u.Normalizations.registered[c]&&(d=u.Normalizations.registered[c]("inject",a,d),c=u.Normalizations.registered[c]("name",a)),h=u.Names.prefixCheck(c)[0],8>=n)try{a.style[h]=d}catch(k){r.debug&&console.log("Browser does not support ["+d+"] for ["+h+"]")}else f(a)&&f(a).isSVG&&u.Names.SVGAttribute(c)?a.setAttribute(c,d):a.style[h]=d;r.debug>=2&&console.log("Set "+c+" ("+h+"): "+d)}return[h,d]},flushTransformCache:function(a){function b(b){return parseFloat(u.getPropertyValue(a,b))}var c="";if((n||r.State.isAndroid&&!r.State.isChrome)&&f(a).isSVG){var d={translate:[b("translateX"),b("translateY")],skewX:[b("skewX")],skewY:[b("skewY")],scale:1!==b("scale")?[b("scale"),b("scale")]:[b("scaleX"),b("scaleY")],rotate:[b("rotateZ"),0,0]};q.each(f(a).transformCache,function(a){/^translate/i.test(a)?a="translate":/^scale/i.test(a)?a="scale":/^rotate/i.test(a)&&(a="rotate"),d[a]&&(c+=a+"("+d[a].join(" ")+") ",delete d[a])})}else{var e,g;q.each(f(a).transformCache,function(b){return e=f(a).transformCache[b],"transformPerspective"===b?(g=e,!0):(9===n&&"rotateZ"===b&&(b="rotate"),void(c+=b+e+" "))}),g&&(c="perspective"+g+" "+c)}u.setPropertyValue(a,"transform",c)}};u.Hooks.register(),u.Normalizations.register(),r.animate=function(){function a(){return g?B.promise||null:m}function b(){function a(){function a(a){var c=d,e=d,f=d;return p.isArray(a)?(c=a[0],!p.isArray(a[1])&&/^[\d-]/.test(a[1])||p.isFunction(a[1])?f=a[1]:(p.isString(a[1])||p.isArray(a[1]))&&(e=h(a[1],g.duration),a[2]!==d&&(f=a[2]))):c=a,e=e||g.easing,p.isFunction(c)&&(c=c.call(b,y,x)),p.isFunction(f)&&(f=f.call(b,y,x)),[c||0,e,f]}function k(a,b){var c,d;return d=(b||0).toString().toLowerCase().replace(/[%A-z]+$/,function(a){return c=a,""}),c||(c=u.Values.getUnitType(a)),[d,c]}function l(){var a={parent:b.parentNode,position:u.getPropertyValue(b,"position"),fontSize:u.getPropertyValue(b,"fontSize")},d=a.position===G.lastPosition&&a.parent===G.lastParent,e=a.fontSize===G.lastFontSize&&a.parent===G.lastParent;G.lastParent=a.parent,G.lastPosition=a.position,G.lastFontSize=a.fontSize,null===G.remToPxRatio&&(G.remToPxRatio=parseFloat(u.getPropertyValue(c.body,"fontSize"))||16);var g={overflowX:null,overflowY:null,boxSizing:null,width:null,minWidth:null,maxWidth:null,height:null,minHeight:null,maxHeight:null,paddingLeft:null},h={},i=10;if(h.remToPxRatio=G.remToPxRatio,n&&!f(b).isSVG)var j=/^auto$/i.test(b.currentStyle.width),k=/^auto$/i.test(b.currentStyle.height);d&&e||(f(b).isSVG||(g.overflowX=u.getPropertyValue(b,"overflowX"),g.overflowY=u.getPropertyValue(b,"overflowY"),g.boxSizing=u.getPropertyValue(b,"boxSizing"),g.minWidth=u.getPropertyValue(b,"minWidth"),g.maxWidth=u.getPropertyValue(b,"maxWidth")||"none",g.minHeight=u.getPropertyValue(b,"minHeight"),g.maxHeight=u.getPropertyValue(b,"maxHeight")||"none",g.paddingLeft=u.getPropertyValue(b,"paddingLeft")),g.width=u.getPropertyValue(b,"width",null,!0),g.height=u.getPropertyValue(b,"height",null,!0)),d?(h.percentToPxRatioWidth=G.lastPercentToPxWidth,h.percentToPxRatioHeight=G.lastPercentToPxHeight):(f(b).isSVG||(u.setPropertyValue(b,"overflowX","hidden"),u.setPropertyValue(b,"overflowY","hidden"),u.setPropertyValue(b,"boxSizing","content-box"),u.setPropertyValue(b,"minWidth",i+"%"),u.setPropertyValue(b,"maxWidth",i+"%"),u.setPropertyValue(b,"minHeight",i+"%"),u.setPropertyValue(b,"maxHeight",i+"%")),u.setPropertyValue(b,"width",i+"%"),u.setPropertyValue(b,"height",i+"%")),e?h.emToPxRatio=G.lastEmToPx:f(b).isSVG||u.setPropertyValue(b,"paddingLeft",i+"em"),d||(h.percentToPxRatioWidth=G.lastPercentToPxWidth=(parseFloat(u.getPropertyValue(b,"width",null,!0))||1)/i,h.percentToPxRatioHeight=G.lastPercentToPxHeight=(parseFloat(u.getPropertyValue(b,"height",null,!0))||1)/i),e||(h.emToPxRatio=G.lastEmToPx=(parseFloat(u.getPropertyValue(b,"paddingLeft"))||1)/i);for(var l in g)null!==g[l]&&u.setPropertyValue(b,l,g[l]);return f(b).isSVG||(n?(j&&u.setPropertyValue(b,"width","auto"),k&&u.setPropertyValue(b,"height","auto")):(u.setPropertyValue(b,"height","auto"),g.height!==u.getPropertyValue(b,"height",null,!0)&&u.setPropertyValue(b,"height",g.height),u.setPropertyValue(b,"width","auto"),g.width!==u.getPropertyValue(b,"width",null,!0)&&u.setPropertyValue(b,"width",g.width))),r.debug>=1&&console.log("Unit ratios: "+JSON.stringify(h),b),h}if(g.begin&&0===y&&g.begin.call(s,s),"scroll"===C){var m,o,w,z=/^x$/i.test(g.axis)?"Left":"Top",A=parseFloat(g.offset)||0;g.container?g.container.jquery||p.isNode(g.container)?(g.container=g.container[0]||g.container,m=g.container["scroll"+z],w=m+q(b).position()[z.toLowerCase()]+A):g.container=null:(m=r.State.scrollAnchor[r.State["scrollProperty"+z]],o=r.State.scrollAnchor[r.State["scrollProperty"+("Left"===z?"Top":"Left")]],w=q(b).offset()[z.toLowerCase()]+A),j={scroll:{rootPropertyValue:!1,startValue:m,currentValue:m,endValue:w,unitType:"",easing:g.easing,scrollData:{container:g.container,direction:z,alternateValue:o}},element:b}}else if("reverse"===C){if(!f(b).tweensContainer)return void q.dequeue(b,g.queue);"none"===f(b).opts.display&&(f(b).opts.display="block"),f(b).opts.loop=!1,f(b).opts.begin=null,f(b).opts.complete=null,v.easing||delete g.easing,v.duration||delete g.duration,g=q.extend({},f(b).opts,g);var D=q.extend(!0,{},f(b).tweensContainer);for(var E in D)if("element"!==E){var F=D[E].startValue;D[E].startValue=D[E].currentValue=D[E].endValue,D[E].endValue=F,v&&(D[E].easing=g.easing)}j=D}else if("start"===C){var D;f(b).tweensContainer&&f(b).isAnimating===!0&&(D=f(b).tweensContainer);for(var I in t){var J=a(t[I]),K=J[0],L=J[1],M=J[2];I=u.Names.camelCase(I);var N=u.Hooks.getRoot(I),O=!1;if(f(b).isSVG||u.Names.prefixCheck(N)[1]!==!1||u.Normalizations.registered[N]!==d){null!==g.display&&"none"!==g.display&&/opacity|filter/.test(I)&&!M&&0!==K&&(M=0),g._cacheValues&&D&&D[I]?(M===d&&(M=D[I].endValue+D[I].unitType),O=f(b).rootPropertyValueCache[N]):u.Hooks.registered[I]?M===d?(O=u.getPropertyValue(b,N),M=u.getPropertyValue(b,I,O)):O=u.Hooks.templates[N][1]:M===d&&(M=u.getPropertyValue(b,I));var P,Q,R,S;P=k(I,M),M=P[0],R=P[1],P=k(I,K),K=P[0].replace(/^([+-\/*])=/,function(a,b){return S=b,""}),Q=P[1],M=parseFloat(M)||0,K=parseFloat(K)||0;var T;if("%"===Q&&(/^(fontSize|lineHeight)$/.test(I)?(K/=100,Q="em"):/^scale/.test(I)?(K/=100,Q=""):/(Red|Green|Blue)$/i.test(I)&&(K=K/100*255,Q="")),/[\/*]/.test(S))Q=R;else if(R!==Q&&0!==M)if(0===K)Q=R;else{T=T||l();var U=/margin|padding|left|right|width|text|word|letter/i.test(I)||/X$/.test(I)?"x":"y";switch(R){case"%":M*="x"===U?T.percentToPxRatioWidth:T.percentToPxRatioHeight;break;case"em":M*=T.emToPxRatio;break;case"rem":M*=T.remToPxRatio;break;case"px":}switch(Q){case"%":M*=1/("x"===U?T.percentToPxRatioWidth:T.percentToPxRatioHeight);break;case"em":M*=1/T.emToPxRatio;break;case"rem":M*=1/T.remToPxRatio;break;case"px":}}switch(S){case"+":K=M+K;break;case"-":K=M-K;break;case"*":K=M*K;break;case"/":K=M/K}j[I]={rootPropertyValue:O,startValue:M,currentValue:M,endValue:K,unitType:Q,easing:L},r.debug&&console.log("tweensContainer ("+I+"): "+JSON.stringify(j[I]),b)}else r.debug&&console.log("Skipping ["+N+"] due to a lack of browser support.")}j.element=b}j.element&&(H.push(j),f(b).tweensContainer=j,f(b).opts=g,f(b).isAnimating=!0,y===x-1?(r.State.calls.length>1e4&&(r.State.calls=e(r.State.calls)),r.State.calls.push([H,s,g,null,B.resolver]),r.State.isTicking===!1&&(r.State.isTicking=!0,i())):y++)}var b=this,g=q.extend({},r.defaults,v),j={};if(f(b)===d&&q.data(b,k,{isSVG:p.isSVG(b),isAnimating:!1,computedStyle:null,tweensContainer:null,rootPropertyValueCache:{},transformCache:{}}),parseFloat(g.delay)&&g.queue!==!1&&q.queue(b,g.queue,function(a){r.velocityQueueEntryFlag=!0,setTimeout(a,parseFloat(g.delay))}),r.mock===!0)g.duration=1;else switch(g.duration.toString().toLowerCase()){case"fast":g.duration=200;break;case"normal":g.duration=l;break;case"slow":g.duration=600;break;default:g.duration=parseFloat(g.duration)||1}g.easing=h(g.easing,g.duration),g.begin&&!p.isFunction(g.begin)&&(g.begin=null),g.progress&&!p.isFunction(g.progress)&&(g.progress=null),g.complete&&!p.isFunction(g.complete)&&(g.complete=null),p.isString(g.display)&&(g.display=g.display.toLowerCase()),g.mobileHA=g.mobileHA&&r.State.isMobile&&!r.State.isGingerbread,g.queue===!1?g.delay?setTimeout(a,g.delay):a():q.queue(b,g.queue,function(b){return"clearQueue"===b?(B.promise&&B.resolver(s),!0):(r.velocityQueueEntryFlag=!0,void a(b))}),""!==g.queue&&"fx"!==g.queue||"inprogress"===q.queue(b)[0]||q.dequeue(b)}var g,m,o,s,t,v,w=arguments[0]&&(q.isPlainObject(arguments[0].properties)&&!arguments[0].properties.names||p.isString(arguments[0].properties));if(p.isWrapped(this)?(g=!1,o=0,s=this,m=this):(g=!0,o=1,s=w?arguments[0].elements:arguments[0]),s=p.isWrapped(s)?[].slice.call(s):s){w?(t=arguments[0].properties,v=arguments[0].options):(t=arguments[o],v=arguments[o+1]);var x=p.isArray(s)||p.isNodeList(s)?s.length:1,y=0;if("stop"!==t&&!q.isPlainObject(v)){var z=o+1;v={};for(var A=z;A<arguments.length;A++)!p.isArray(arguments[A])&&/^\d/.test(arguments[A])?v.duration=parseFloat(arguments[A]):p.isString(arguments[A])||p.isArray(arguments[A])?v.easing=arguments[A]:p.isFunction(arguments[A])&&(v.complete=arguments[A])}var B={promise:null,resolver:null,rejecter:null};g&&r.Promise&&(B.promise=new r.Promise(function(a,b){B.resolver=a,B.rejecter=b}));var C;switch(t){case"scroll":C="scroll";break;case"reverse":C="reverse";break;case"stop":var D=[];return q.each(r.State.calls,function(a,b){b!==!1&&q.each(p.isNode(b[1])?[b[1]]:b[1],function(b,c){q.each(p.isNode(s)?[s]:s,function(b,d){if(d===c){if(f(d)&&q.each(f(d).tweensContainer,function(a,b){b.endValue=b.currentValue}),v===!0||p.isString(v)){var e=p.isString(v)?v:"";q.each(q.queue(d,e),function(a,b){p.isFunction(b)&&b("clearQueue")}),q.queue(d,e,[])}D.push(a)}})})}),q.each(D,function(a,b){j(b,!0)}),B.promise&&B.resolver(s),a();default:if(!q.isPlainObject(t)||q.isEmptyObject(t)){if(p.isString(t)&&r.Sequences[t]){var E=v.duration;return v.backwards===!0&&(s=(s.jquery?[].slice.call(s):s).reverse()),q.each(s,function(a,b){parseFloat(v.stagger)&&(v.delay=parseFloat(v.stagger)*a),v.drag&&(v.duration=parseFloat(E)||(/^(callout|transition)/.test(t)?1e3:l),v.duration=Math.max(v.duration*(v.backwards?1-a/x:(a+1)/x),.75*v.duration,200)),r.Sequences[t].call(b,b,v||{},a,x,s,B.promise?B:d)}),a()}var F="Velocity: First argument ("+t+") was not a property map, a known action, or a registered sequence. Aborting.";return B.promise?B.rejecter(new Error(F)):console.log(F),a()}C="start"}var G={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPxRatio:null},H=[];q.each(p.isNode(s)?[s]:s,function(a,c){p.isNode(c)&&b.call(c)});var I,J=q.extend({},r.defaults,v);if(J.loop=parseInt(J.loop),I=2*J.loop-1,J.loop)for(var K=0;I>K;K++){var L={delay:J.delay};J.complete&&K===I-1&&(L.complete=J.complete),r.animate(s,"reverse",L)}return a()}};var v=b.jQuery||b.Zepto;v&&(v.fn.velocity=r.animate,v.fn.velocity.defaults=r.defaults),"undefined"!=typeof define&&define.amd?define(function(){return r}):"undefined"!=typeof module&&module.exports&&(module.exports=r),q.each(["Down","Up"],function(a,b){r.Sequences["slide"+b]=function(a,c){var d=q.extend({},c),e={height:null,marginTop:null,marginBottom:null,paddingTop:null,paddingBottom:null,overflow:null,overflowX:null,overflowY:null},f=d.begin,g=d.complete,h=!1;null!==d.display&&(d.display="Down"===b?d.display||"":d.display||"none"),d.begin=function(){function c(){a.style.display="block",e.height=r.CSS.getPropertyValue(a,"height"),a.style.height="auto",r.CSS.getPropertyValue(a,"height")===e.height&&(h=!0),r.CSS.setPropertyValue(a,"height",e.height+"px")}if("Down"===b){e.overflow=[r.CSS.getPropertyValue(a,"overflow"),0],e.overflowX=[r.CSS.getPropertyValue(a,"overflowX"),0],e.overflowY=[r.CSS.getPropertyValue(a,"overflowY"),0],a.style.overflow="hidden",a.style.overflowX="visible",a.style.overflowY="hidden",c();for(var d in e)/^overflow/.test(d)||(e[d]=[r.CSS.getPropertyValue(a,d),0]);a.style.display="none"}else{c();for(var d in e)e[d]=[0,r.CSS.getPropertyValue(a,d)];a.style.overflow="hidden",a.style.overflowX="visible",a.style.overflowY="hidden"}f&&f.call(a,a)},d.complete=function(a){var c="Down"===b?0:1;h===!0?e.height[c]="auto":e.height[c]+="px";for(var d in e)a.style[d]=e[d][c];g&&g.call(a,a)},r.animate(a,e,d)}}),q.each(["In","Out"],function(a,b){r.Sequences["fade"+b]=function(a,c,d,e){var f=q.extend({},c),g={opacity:"In"===b?1:0};d!==e-1&&(f.complete=f.begin=null),null!==f.display&&(f.display="In"===b?"":"none"),r.animate(this,g,f)}})}(window.jQuery||window.Zepto||window,window,document);