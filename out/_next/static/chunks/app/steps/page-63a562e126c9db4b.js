(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[92],{1978:function(t,e,n){Promise.resolve().then(n.bind(n,101)),Promise.resolve().then(n.bind(n,6304))},1980:function(t,e,n){var r;"undefined"!=typeof self&&self,r=function(t){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e||4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,(function(e){return t[e]}).bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=2)}([function(e,n){e.exports=t},function(t,e,n){"use strict";var r={linear:function(t,e,n,r){return(n-e)*t/r+e},easeInQuad:function(t,e,n,r){return(n-e)*(t/=r)*t+e},easeOutQuad:function(t,e,n,r){return-(n-e)*(t/=r)*(t-2)+e},easeInOutQuad:function(t,e,n,r){var i=n-e;return(t/=r/2)<1?i/2*t*t+e:-i/2*(--t*(t-2)-1)+e},easeInCubic:function(t,e,n,r){return(n-e)*(t/=r)*t*t+e},easeOutCubic:function(t,e,n,r){return(n-e)*((t=t/r-1)*t*t+1)+e},easeInOutCubic:function(t,e,n,r){var i=n-e;return(t/=r/2)<1?i/2*t*t*t+e:i/2*((t-=2)*t*t+2)+e},easeInQuart:function(t,e,n,r){return(n-e)*(t/=r)*t*t*t+e},easeOutQuart:function(t,e,n,r){return-(n-e)*((t=t/r-1)*t*t*t-1)+e},easeInOutQuart:function(t,e,n,r){var i=n-e;return(t/=r/2)<1?i/2*t*t*t*t+e:-i/2*((t-=2)*t*t*t-2)+e},easeInQuint:function(t,e,n,r){return(n-e)*(t/=r)*t*t*t*t+e},easeOutQuint:function(t,e,n,r){return(n-e)*((t=t/r-1)*t*t*t*t+1)+e},easeInOutQuint:function(t,e,n,r){var i=n-e;return(t/=r/2)<1?i/2*t*t*t*t*t+e:i/2*((t-=2)*t*t*t*t+2)+e},easeInSine:function(t,e,n,r){var i=n-e;return-i*Math.cos(t/r*(Math.PI/2))+i+e},easeOutSine:function(t,e,n,r){return(n-e)*Math.sin(t/r*(Math.PI/2))+e},easeInOutSine:function(t,e,n,r){return-(n-e)/2*(Math.cos(Math.PI*t/r)-1)+e},easeInExpo:function(t,e,n,r){return 0==t?e:(n-e)*Math.pow(2,10*(t/r-1))+e},easeOutExpo:function(t,e,n,r){var i=n-e;return t==r?e+i:i*(1-Math.pow(2,-10*t/r))+e},easeInOutExpo:function(t,e,n,r){var i=n-e;return 0===t?e:t===r?e+i:(t/=r/2)<1?i/2*Math.pow(2,10*(t-1))+e:i/2*(2-Math.pow(2,-10*--t))+e},easeInCirc:function(t,e,n,r){return-(n-e)*(Math.sqrt(1-(t/=r)*t)-1)+e},easeOutCirc:function(t,e,n,r){return(n-e)*Math.sqrt(1-(t=t/r-1)*t)+e},easeInOutCirc:function(t,e,n,r){var i=n-e;return(t/=r/2)<1?-i/2*(Math.sqrt(1-t*t)-1)+e:i/2*(Math.sqrt(1-(t-=2)*t)+1)+e},easeInElastic:function(t,e,n,r){var i,o,a,s=n-e;return a=1.70158,0===t?e:1==(t/=r)?e+s:(o=0,o=.3*r,(i=s)<Math.abs(s)?(i=s,a=o/4):a=o/(2*Math.PI)*Math.asin(s/i),-i*Math.pow(2,10*(t-=1))*Math.sin(2*Math.PI*(t*r-a)/o)+e)},easeOutElastic:function(t,e,n,r){var i,o,a,s=n-e;return a=1.70158,0===t?e:1==(t/=r)?e+s:(o=0,o=.3*r,(i=s)<Math.abs(s)?(i=s,a=o/4):a=o/(2*Math.PI)*Math.asin(s/i),i*Math.pow(2,-10*t)*Math.sin(2*Math.PI*(t*r-a)/o)+s+e)},easeInOutElastic:function(t,e,n,r){var i,o,a,s=n-e;return a=1.70158,0===t?e:2==(t/=r/2)?e+s:(o=0,o=.3*1.5*r,(i=s)<Math.abs(s)?(i=s,a=o/4):a=o/(2*Math.PI)*Math.asin(s/i),t<1?-(i*Math.pow(2,10*(t-=1))*Math.sin(2*Math.PI*(t*r-a)/o)*.5)+e:i*Math.pow(2,-10*(t-=1))*Math.sin(2*Math.PI*(t*r-a)/o)*.5+s+e)},easeInBack:function(t,e,n,r,i){return void 0===i&&(i=1.70158),(n-e)*(t/=r)*t*((i+1)*t-i)+e},easeOutBack:function(t,e,n,r,i){return void 0===i&&(i=1.70158),(n-e)*((t=t/r-1)*t*((i+1)*t+i)+1)+e},easeInOutBack:function(t,e,n,r,i){var o=n-e;return void 0===i&&(i=1.70158),(t/=r/2)<1?o/2*(t*t*((1+(i*=1.525))*t-i))+e:o/2*((t-=2)*t*((1+(i*=1.525))*t+i)+2)+e},easeInBounce:function(t,e,n,i){var o=n-e;return o-r.easeOutBounce(i-t,0,o,i)+e},easeOutBounce:function(t,e,n,r){var i=n-e;return(t/=r)<1/2.75?7.5625*t*t*i+e:t<2/2.75?i*(7.5625*(t-=1.5/2.75)*t+.75)+e:t<2.5/2.75?i*(7.5625*(t-=2.25/2.75)*t+.9375)+e:i*(7.5625*(t-=2.625/2.75)*t+.984375)+e},easeInOutBounce:function(t,e,n,i){var o=n-e;return t<i/2?.5*r.easeInBounce(2*t,0,o,i)+e:.5*r.easeOutBounce(2*t-i,0,o,i)+.5*o+e}};t.exports=r},function(t,e,n){t.exports=n(3)},function(t,e,n){"use strict";n.r(e),n.d(e,"ReactConfetti",function(){return B});var r,i,o,a,s=n(0),c=n.n(s),l=n(1),u=n.n(l);function h(t,e){return t+Math.random()*(e-t)}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function d(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}(r=o||(o={}))[r.Circle=0]="Circle",r[r.Square=1]="Square",r[r.Strip=2]="Strip",(i=a||(a={}))[i.Positive=1]="Positive",i[i.Negative=-1]="Negative";var p=function(){var t,e;function n(t,e,r,i){(function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")})(this,n),d(this,"context",void 0),d(this,"radius",void 0),d(this,"x",void 0),d(this,"y",void 0),d(this,"w",void 0),d(this,"h",void 0),d(this,"vx",void 0),d(this,"vy",void 0),d(this,"shape",void 0),d(this,"angle",void 0),d(this,"angularSpin",void 0),d(this,"color",void 0),d(this,"rotateY",void 0),d(this,"rotationDirection",void 0),d(this,"getOptions",void 0),this.getOptions=e;var o=this.getOptions(),s=o.colors,c=o.initialVelocityX,l=o.initialVelocityY;this.context=t,this.x=r,this.y=i,this.w=h(5,20),this.h=h(5,20),this.radius=h(5,10),this.vx="number"==typeof c?h(-c,c):h(c.min,c.max),this.vy="number"==typeof l?h(-l,0):h(l.min,l.max),this.shape=Math.floor(0+3*Math.random()),this.angle=h(0,360)*Math.PI/180,this.angularSpin=h(-.2,.2),this.color=s[Math.floor(Math.random()*s.length)],this.rotateY=h(0,1),this.rotationDirection=h(0,1)?a.Positive:a.Negative}return t=[{key:"update",value:function(){var t=this.getOptions(),e=t.gravity,n=t.wind,r=t.friction,i=t.opacity,s=t.drawShape;this.x+=this.vx,this.y+=this.vy,this.vy+=e,this.vx+=n,this.vx*=r,this.vy*=r,this.rotateY>=1&&this.rotationDirection===a.Positive?this.rotationDirection=a.Negative:this.rotateY<=-1&&this.rotationDirection===a.Negative&&(this.rotationDirection=a.Positive);var c=.1*this.rotationDirection;if(this.rotateY+=c,this.angle+=this.angularSpin,this.context.save(),this.context.translate(this.x,this.y),this.context.rotate(this.angle),this.context.scale(1,this.rotateY),this.context.rotate(this.angle),this.context.beginPath(),this.context.fillStyle=this.color,this.context.strokeStyle=this.color,this.context.globalAlpha=i,this.context.lineCap="round",this.context.lineWidth=2,s&&"function"==typeof s)s.call(this,this.context);else switch(this.shape){case o.Circle:this.context.beginPath(),this.context.arc(0,0,this.radius,0,2*Math.PI),this.context.fill();break;case o.Square:this.context.fillRect(-this.w/2,-this.h/2,this.w,this.h);break;case o.Strip:this.context.fillRect(-this.w/6,-this.h/2,this.w/3,this.h)}this.context.closePath(),this.context.restore()}}],f(n.prototype,t),e&&f(n,e),n}();function m(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var v=function t(e,n){var r=this;(function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")})(this,t),m(this,"canvas",void 0),m(this,"context",void 0),m(this,"getOptions",void 0),m(this,"x",0),m(this,"y",0),m(this,"w",0),m(this,"h",0),m(this,"lastNumberOfPieces",0),m(this,"tweenInitTime",Date.now()),m(this,"particles",[]),m(this,"particlesGenerated",0),m(this,"removeParticleAt",function(t){r.particles.splice(t,1)}),m(this,"getParticle",function(){var t=h(r.x,r.w+r.x),e=h(r.y,r.h+r.y);return new p(r.context,r.getOptions,t,e)}),m(this,"animate",function(){var t=r.canvas,e=r.context,n=r.particlesGenerated,i=r.lastNumberOfPieces,o=r.getOptions(),a=o.run,s=o.recycle,c=o.numberOfPieces,l=o.debug,u=o.tweenFunction,h=o.tweenDuration;if(!a)return!1;var f=r.particles.length,d=s?f:n,p=Date.now();if(d<c){i!==c&&(r.tweenInitTime=p,r.lastNumberOfPieces=c);for(var m=r.tweenInitTime,v=u(p-m>h?h:Math.max(0,p-m),d,c,h),x=Math.round(v-d),y=0;y<x;y++)r.particles.push(r.getParticle());r.particlesGenerated+=x}return l&&(e.font="12px sans-serif",e.fillStyle="#333",e.textAlign="right",e.fillText("Particles: ".concat(f),t.width-10,t.height-20)),r.particles.forEach(function(e,n){e.update(),(e.y>t.height||e.y<-100||e.x>t.width+100||e.x<-100)&&(s&&d<=c?r.particles[n]=r.getParticle():r.removeParticleAt(n))}),f>0||d<c}),this.canvas=e;var i=this.canvas.getContext("2d");if(!i)throw Error("Could not get canvas context");this.context=i,this.getOptions=n};function x(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function y(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?x(Object(n),!0).forEach(function(e){g(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function b(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function g(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var w={width:"undefined"!=typeof window?window.innerWidth:300,height:"undefined"!=typeof window?window.innerHeight:200,numberOfPieces:200,friction:.99,wind:0,gravity:.1,initialVelocityX:4,initialVelocityY:10,colors:["#f44336","#e91e63","#9c27b0","#673ab7","#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688","#4CAF50","#8BC34A","#CDDC39","#FFEB3B","#FFC107","#FF9800","#FF5722","#795548"],opacity:1,debug:!1,tweenFunction:u.a.easeInOutQuad,tweenDuration:5e3,recycle:!0,run:!0},j=function(){var t,e;function n(t,e){var r=this;(function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")})(this,n),g(this,"canvas",void 0),g(this,"context",void 0),g(this,"_options",void 0),g(this,"generator",void 0),g(this,"rafId",void 0),g(this,"setOptionsWithDefaults",function(t){var e={confettiSource:{x:0,y:0,w:r.canvas.width,h:0}};r._options=y(y(y({},e),w),t),Object.assign(r,t.confettiSource)}),g(this,"update",function(){var t=r.options,e=t.run,n=t.onConfettiComplete,i=r.canvas,o=r.context;e&&(o.fillStyle="white",o.clearRect(0,0,i.width,i.height)),r.generator.animate()?r.rafId=requestAnimationFrame(r.update):(n&&"function"==typeof n&&r.generator.particlesGenerated>0&&n.call(r,r),r._options.run=!1)}),g(this,"reset",function(){r.generator&&r.generator.particlesGenerated>0&&(r.generator.particlesGenerated=0,r.generator.particles=[],r.generator.lastNumberOfPieces=0)}),g(this,"stop",function(){r.options={run:!1},r.rafId&&(cancelAnimationFrame(r.rafId),r.rafId=void 0)}),this.canvas=t;var i=this.canvas.getContext("2d");if(!i)throw Error("Could not get canvas context");this.context=i,this.generator=new v(this.canvas,function(){return r.options}),this.options=e,this.update()}return t=[{key:"options",get:function(){return this._options},set:function(t){var e=this._options&&this._options.run,n=this._options&&this._options.recycle;this.setOptionsWithDefaults(t),this.generator&&(Object.assign(this.generator,this.options.confettiSource),"boolean"==typeof t.recycle&&t.recycle&&!1===n&&(this.generator.lastNumberOfPieces=this.generator.particles.length)),"boolean"==typeof t.run&&t.run&&!1===e&&this.update()}}],b(n.prototype,t),e&&b(n,e),n}();function O(t){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function S(){return(S=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function k(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function P(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?k(Object(n),!0).forEach(function(e){T(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function M(t,e){if(t){if("string"==typeof t)return C(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?C(t,e):void 0}}function C(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function I(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function N(t,e){return(N=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function E(t){if(void 0===t)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _(t){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function T(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var D=c.a.createRef(),F=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&N(t,e)}(o,t);var e,n,r,i=(e=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}(),function(){var t,n=_(o);return t=e?Reflect.construct(n,arguments,_(this).constructor):n.apply(this,arguments),t&&("object"===O(t)||"function"==typeof t)?t:E(this)});function o(t){var e;!function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}(this,o);for(var n=arguments.length,r=Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];return T(E(e=i.call.apply(i,[this,t].concat(r))),"canvas",c.a.createRef()),T(E(e),"confetti",void 0),e.canvas=t.canvasRef||D,e}return n=[{key:"componentDidMount",value:function(){if(this.canvas.current){var t=A(this.props)[0];this.confetti=new j(this.canvas.current,t)}}},{key:"componentDidUpdate",value:function(){var t=A(this.props)[0];this.confetti&&(this.confetti.options=t)}},{key:"componentWillUnmount",value:function(){this.confetti&&this.confetti.stop(),this.confetti=void 0}},{key:"render",value:function(){var t,e=function(t){if(Array.isArray(t))return t}(t=A(this.props))||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,i=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),2!==n.length);r=!0);}catch(t){i=!0,o=t}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}return n}}(t,2)||M(t,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),n=e[0],r=e[1],i=P({zIndex:2,position:"absolute",pointerEvents:"none",top:0,left:0,bottom:0,right:0},r.style);return c.a.createElement("canvas",S({width:n.width,height:n.height,ref:this.canvas},r,{style:i}))}}],I(o.prototype,n),r&&I(o,r),o}(s.Component);function A(t){var e,n={},r={},i=[].concat(function(t){if(Array.isArray(t))return C(t)}(e=Object.keys(w))||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(e)||M(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),["confettiSource","drawShape","onConfettiComplete"]),o=["canvasRef"];for(var a in t){var s=t[a];i.includes(a)?n[a]=s:o.includes(a)?o[a]=s:r[a]=s}return[n,r,{}]}T(F,"defaultProps",P({},w)),T(F,"displayName","ReactConfetti");var B=c.a.forwardRef(function(t,e){return c.a.createElement(F,S({canvasRef:e},t))});e.default=B}]).default},t.exports=r(n(2265))},101:function(t,e,n){"use strict";n.d(e,{default:function(){return l}});var r=n(7437),i=n(7138),o=n(6648),a=n(1942),s=n(4783),c=n(2265);function l(){let[t,e]=(0,c.useState)(!1);return(0,r.jsx)("header",{className:"bg-white shadow-md shadow-primary-50 py-3",children:(0,r.jsxs)("nav",{className:"container mx-auto px-4 md:px-12 lg:px-24 flex justify-between items-center",children:[(0,r.jsx)(i.default,{href:s.MZ.logoLink,children:(0,r.jsx)(o.default,{src:"".concat(s.C1.basePath,"/images/logo.svg"),alt:"Company Logo",width:140,height:40})}),(0,r.jsx)("div",{className:"flex items-center md:hidden",children:(0,r.jsx)("button",{onClick:()=>e(!t),className:"text-primary-500 hover:text-primary-700 focus:outline-none",children:(0,r.jsx)("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:t?"M6 18L18 6M6 6l12 12":"M4 6h16M4 12h16m-7 6h7"})})})}),(0,r.jsxs)("div",{className:"".concat(t?"fixed inset-0 z-50 bg-white flex flex-col items-center justify-center space-y-6 p-8":"hidden"," md:flex md:items-center md:space-x-6 md:ml-auto"),children:[t&&(0,r.jsx)("button",{onClick:()=>e(!1),className:"absolute top-4 right-4 text-primary-500 hover:text-primary-700 focus:outline-none",children:(0,r.jsx)("svg",{className:"w-8 h-8",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})})}),(0,r.jsx)(i.default,{href:"/",className:"block text-secondary hover:text-primary text-xl",children:"Home"}),(0,r.jsx)(i.default,{href:"/steps",className:"block text-secondary hover:text-primary text-xl",children:"Guide"}),s.MZ.discordLink&&(0,r.jsx)(i.default,{href:s.MZ.discordLink,legacyBehavior:!0,children:(0,r.jsx)("a",{className:"text-primary-500 hover:text-primary-700 text-2xl",target:"_blank",rel:"noopener noreferrer","aria-label":"Join our Discord",children:(0,r.jsx)(a.j2d,{size:30})})}),(0,r.jsx)(i.default,{href:s.MZ.navbarButtonLink,legacyBehavior:!0,children:(0,r.jsx)("a",{className:"block bg-gradient-to-r from-primary-300 to-primary-600 text-white px-4 py-2 rounded-2xl text-md hover:from-primary hover:to-primary",target:"_blank",rel:"noopener noreferrer",children:s.MZ.navbarButtonText})})]})]})})}},6304:function(t,e,n){"use strict";n.d(e,{default:function(){return m}});var r=n(7437),i=n(2265),o=n(7476),a=n(1980),s=n.n(a),c=t=>{let{htmlContent:e}=t;return(0,i.useEffect)(()=>{document.querySelectorAll("pre code").forEach(t=>{let e=document.createElement("button");e.innerText="Copy",e.className="absolute right-2 top-2 bg-gray-700 text-white px-2 py-1 rounded text-sm",e.onclick=()=>{navigator.clipboard.writeText(t.textContent||""),e.innerText="Copied!",setTimeout(()=>e.innerText="Copy",2e3)};let n=t.parentNode;n.className="relative overflow-x-auto",n.style.position="relative",n.appendChild(e)})},[e]),(0,r.jsx)("div",{dangerouslySetInnerHTML:{__html:e}})},l=function(t){(0,i.useEffect)(t,[])},u=function(t){var e=(0,i.useRef)(t);e.current=t,l(function(){return function(){return e.current()}})},h=function(t){var e=(0,i.useRef)(0),n=(0,i.useState)(t),r=n[0],o=n[1],a=(0,i.useCallback)(function(t){cancelAnimationFrame(e.current),e.current=requestAnimationFrame(function(){o(t)})},[]);return u(function(){cancelAnimationFrame(e.current)}),[r,a]},f="undefined"!=typeof window,d=function(t,e){void 0===t&&(t=1/0),void 0===e&&(e=1/0);var n=h({width:f?window.innerWidth:t,height:f?window.innerHeight:e}),r=n[0],o=n[1];return(0,i.useEffect)(function(){if(f){var t=function(){o({width:window.innerWidth,height:window.innerHeight})};return function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];t&&t.addEventListener&&t.addEventListener.apply(t,e)}(window,"resize",t),function(){!function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];t&&t.removeEventListener&&t.removeEventListener.apply(t,e)}(window,"resize",t)}}},[]),r},p=n(4783);function m(t){let{steps:e}=t,[n,a]=(0,i.useState)([]),[l,u]=(0,i.useState)(1),[h,f]=(0,i.useState)(null),{width:m,height:v}=d(),x=n.length===e.length,y=(0,i.useRef)([]);(0,i.useEffect)(()=>{let t=JSON.parse(localStorage.getItem("completedSteps")||"[]");t.length>0&&(a(t),u(t[t.length-1]+1))},[]),(0,i.useEffect)(()=>{localStorage.setItem("completedSteps",JSON.stringify(n))},[n]);let b=t=>{f(h===t?null:t)},g=t=>{a(e=>[...e,t]);let e=t+1;f(e),u(e),setTimeout(()=>{if(y.current[e]){var t;null===(t=y.current[e])||void 0===t||t.scrollIntoView({behavior:"smooth",block:"start"})}},100)};return(0,r.jsxs)(r.Fragment,{children:[!n.includes(e.length)&&(0,r.jsxs)("div",{className:"bg-primary-50 border shadow-md shadow-primary-100 border-primary-200 rounded-lg p-6 mb-8",children:[(0,r.jsx)("h3",{className:"text-2xl font-bold text-primary mb-4",children:"Prerequisites:"}),(0,r.jsx)("ul",{className:"list-disc list-inside text-gray-700 mt-3",children:p.Tg.prerequisites.map((t,e)=>(0,r.jsx)("li",{dangerouslySetInnerHTML:{__html:t.text}},e))})]}),(0,r.jsxs)("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[x&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s(),{width:m,height:v}),(0,r.jsxs)("div",{className:"text-center",children:[(0,r.jsx)("h2",{className:"text-3xl sm:text-4xl font-bold text-primary-800 mb-8",children:"Congratulations!"}),(0,r.jsxs)("p",{className:"text-lg text-gray-700 mb-8",children:["You have completed the ",p.wO.mainTitle," Workshop!"]}),(0,r.jsx)("button",{className:"bg-gradient-to-r from-primary-300 to-primary-600 text-white px-6 py-3 rounded-2xl hover:from-primary hover:to-primary",onClick:()=>{localStorage.removeItem("completedSteps"),a([]),u(1),f(null)},children:"Start Over"})]})]}),!x&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h2",{className:"text-3xl sm:text-4xl font-bold text-primary mb-8 text-center",children:"Workshop Steps"}),(0,r.jsx)("div",{className:"space-y-4",children:e.map(t=>(0,r.jsxs)("div",{className:"border border-primary-200 shadow-md shadow-primary-100 rounded-lg p-4 sm:p-6 overflow-hidden ".concat(l===t.id?"bg-white":n.includes(t.id)?"bg-gray-100":"bg-gray-100 text-gray-400 cursor-not-allowed"),ref:e=>{y.current[t.id]=e},children:[(0,r.jsxs)("div",{className:"flex justify-between items-center ".concat(l===t.id||n.includes(t.id)?"cursor-pointer":""),onClick:()=>(l===t.id||n.includes(t.id))&&b(t.id),children:[(0,r.jsx)("div",{className:"flex items-center",children:(0,r.jsx)("h3",{className:"text-lg sm:text-xl font-semibold",children:t.title})}),(0,r.jsxs)("div",{className:"flex items-center space-x-2",children:[n.includes(t.id)&&(0,r.jsx)(o._rq,{className:"text-green-500 text-2xl"}),(l===t.id||h===t.id)&&(h===t.id?(0,r.jsx)(o.rH8,{className:"text-2xl"}):(0,r.jsx)(o.bTu,{className:"text-2xl"}))]})]}),h===t.id&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"mt-4 sm:mt-6 flex justify-center",children:(0,r.jsx)("div",{className:"prose prose-sm sm:prose-lg max-w-full",children:(0,r.jsx)(c,{htmlContent:t.content})})}),l===t.id&&(0,r.jsx)("div",{className:"w-full flex justify-center mt-4 sm:mt-6",children:(0,r.jsx)("button",{className:"bg-gradient-to-r from-white to-primary-50 text-primary-500 border border-primary-200 px-4 py-2 sm:px-6 sm:py-3 rounded-2xl hover:from-primary hover:to-primary hover:text-white",onClick:()=>g(t.id),children:"Complete"})})]})]},t.id))})]})]})]})}},4783:function(t,e,n){"use strict";n.d(e,{C1:function(){return r},MZ:function(){return i},Tg:function(){return a},wO:function(){return o}});let r={basePath:"/summer-school-workshop"},i={discordLink:"https://discord.gg/7h6bfRAq",navbarButtonText:"Login",navbarButtonLink:"https://sandbox.fireblocks.io",logoLink:"https://fireblocks.com"},o={mainTitle:"Fireblocks Summer School",subTitle:"Web3 Workshop",heroText:"Make sure that you have an active Fireblocks Sandbox Workspace.\nIf you don't - please click below to get a free one:",heroButtonText:"Sandbox Signup",heroButtonLink:"https://www.fireblocks.com/developer-sandbox-sign-up/",workshopSummarySteps:[{title:"General Setup",text:"Initialize the project and install dependencies."},{title:"Install Open Source Tooling",text:"Install and configure some EVM open source tooling like Hardhat and ethers.js"},{title:"Use Fireblocks Developer Tools",text:"Use the Fireblocks Developer tooling to integrate into Hardhat, Ethers.js and web3.js"},{title:"Create, Deploy and Mint an NFT",text:"Create a Smart Contract, deploy it using Fireblocks wallet and tools and mint your own NFT on Sepolia"}]},a={stepsData:[{id:1,title:"Step 1: Setup",file:"step1.md"},{id:2,title:"Step 2: Configure Hardhat",file:"step2.md"},{id:3,title:"Step 3: Compile our Smart Contract",file:"step3.md"},{id:4,title:"Step 4: Deploy our Smart Contract",file:"step4.md"},{id:5,title:"Step 5: Mint NFT",file:"step5.md"}],prerequisites:[{text:"Basic JavaScript knowledge"},{text:"Node.js version >20 installed. Follow the <a href='https://nodejs.org/en/download/package-manager' target='_blank' class='text-blue-500 underline hover:text-blue-700'>official documentation for installation.</a>"},{text:"NPM latest version installed"},{text:"Fireblocks Sandbox Workspace. Get a free one <a href='https://www.fireblocks.com/developer-sandbox-sign-up/' target='_blank' class='text-blue-500 underline hover:text-blue-700'>here.</a>"},{text:"Fireblocks API Key"},{text:"A code editor like VS Code"}]}}},function(t){t.O(0,[699,956,615,971,23,744],function(){return t(t.s=1978)}),_N_E=t.O()}]);