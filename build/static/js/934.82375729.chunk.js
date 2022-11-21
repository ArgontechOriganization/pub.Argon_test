"use strict";(self.webpackChunkacadify_saas_frontend=self.webpackChunkacadify_saas_frontend||[]).push([[934],{6157:function(e,a,r){r.d(a,{Z:function(){return b}});var t=r(1413),n=r(885),o=r(5987),i=r(1694),s=r.n(i),l=r(2791),c=r(184),d=["as","disabled"];function f(e){var a=e.tagName,r=e.disabled,t=e.href,n=e.target,o=e.rel,i=e.role,s=e.onClick,l=e.tabIndex,c=void 0===l?0:l,d=e.type;a||(a=null!=t||null!=n||null!=o?"a":"button");var f={tagName:a};if("button"===a)return[{type:d||"button",disabled:r},f];var u=function(e){(r||"a"===a&&function(e){return!e||"#"===e.trim()}(t))&&e.preventDefault(),r?e.stopPropagation():null==s||s(e)};return"a"===a&&(t||(t="#"),r&&(t=void 0)),[{role:null!=i?i:"button",disabled:void 0,tabIndex:r?void 0:c,href:t,target:"a"===a?n:void 0,"aria-disabled":r||void 0,rel:"a"===a?o:void 0,onClick:u,onKeyDown:function(e){" "===e.key&&(e.preventDefault(),u(e))}},f]}var u=l.forwardRef((function(e,a){var r=e.as,t=e.disabled,o=function(e,a){if(null==e)return{};var r,t,n={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],a.indexOf(r)>=0||(n[r]=e[r]);return n}(e,d),i=f(Object.assign({tagName:r,disabled:t},o)),s=(0,n.Z)(i,2),l=s[0],u=s[1].tagName;return(0,c.jsx)(u,Object.assign({},o,l,{ref:a}))}));u.displayName="Button";var v=r(162),m=["as","bsPrefix","variant","size","active","className"],p=l.forwardRef((function(e,a){var r=e.as,i=e.bsPrefix,l=e.variant,d=e.size,u=e.active,p=e.className,b=(0,o.Z)(e,m),y=(0,v.vE)(i,"btn"),x=f((0,t.Z)({tagName:r},b)),h=(0,n.Z)(x,2),N=h[0],Z=h[1].tagName;return(0,c.jsx)(Z,(0,t.Z)((0,t.Z)((0,t.Z)({},N),b),{},{ref:a,className:s()(p,y,u&&"active",l&&"".concat(y,"-").concat(l),d&&"".concat(y,"-").concat(d),b.href&&b.disabled&&"disabled")}))}));p.displayName="Button",p.defaultProps={variant:"primary",active:!1,disabled:!1};var b=p},2677:function(e,a,r){var t=r(885),n=r(1413),o=r(5987),i=r(1694),s=r.n(i),l=r(2791),c=r(162),d=r(184),f=["as","bsPrefix","className"],u=["className"];var v=l.forwardRef((function(e,a){var r=function(e){var a=e.as,r=e.bsPrefix,t=e.className,i=(0,o.Z)(e,f);r=(0,c.vE)(r,"col");var l=(0,c.pi)(),d=(0,c.zG)(),u=[],v=[];return l.forEach((function(e){var a,t,n,o=i[e];delete i[e],"object"===typeof o&&null!=o?(a=o.span,t=o.offset,n=o.order):a=o;var s=e!==d?"-".concat(e):"";a&&u.push(!0===a?"".concat(r).concat(s):"".concat(r).concat(s,"-").concat(a)),null!=n&&v.push("order".concat(s,"-").concat(n)),null!=t&&v.push("offset".concat(s,"-").concat(t))})),[(0,n.Z)((0,n.Z)({},i),{},{className:s().apply(void 0,[t].concat(u,v))}),{as:a,bsPrefix:r,spans:u}]}(e),i=(0,t.Z)(r,2),l=i[0],v=l.className,m=(0,o.Z)(l,u),p=i[1],b=p.as,y=void 0===b?"div":b,x=p.bsPrefix,h=p.spans;return(0,d.jsx)(y,(0,n.Z)((0,n.Z)({},m),{},{ref:a,className:s()(v,!h.length&&x)}))}));v.displayName="Col",a.Z=v},7022:function(e,a,r){var t=r(1413),n=r(5987),o=r(1694),i=r.n(o),s=r(2791),l=r(162),c=r(184),d=["bsPrefix","fluid","as","className"],f=s.forwardRef((function(e,a){var r=e.bsPrefix,o=e.fluid,s=e.as,f=void 0===s?"div":s,u=e.className,v=(0,n.Z)(e,d),m=(0,l.vE)(r,"container"),p="string"===typeof o?"-".concat(o):"-fluid";return(0,c.jsx)(f,(0,t.Z)((0,t.Z)({ref:a},v),{},{className:i()(u,o?"".concat(m).concat(p):m)}))}));f.displayName="Container",f.defaultProps={fluid:!1},a.Z=f},9186:function(e,a,r){r.d(a,{Z:function(){return ne}});var t=r(1413),n=r(5987),o=r(1694),i=r.n(o),s=r(2007),l=r.n(s),c=r(2791),d=r(184),f=["as","className","type","tooltip"],u={type:l().string,tooltip:l().bool,as:l().elementType},v=c.forwardRef((function(e,a){var r=e.as,o=void 0===r?"div":r,s=e.className,l=e.type,c=void 0===l?"valid":l,u=e.tooltip,v=void 0!==u&&u,m=(0,n.Z)(e,f);return(0,d.jsx)(o,(0,t.Z)((0,t.Z)({},m),{},{ref:a,className:i()(s,"".concat(c,"-").concat(v?"tooltip":"feedback"))}))}));v.displayName="Feedback",v.propTypes=u;var m=v,p=c.createContext({}),b=r(162),y=["id","bsPrefix","className","type","isValid","isInvalid","as"],x=c.forwardRef((function(e,a){var r=e.id,o=e.bsPrefix,s=e.className,l=e.type,f=void 0===l?"checkbox":l,u=e.isValid,v=void 0!==u&&u,m=e.isInvalid,x=void 0!==m&&m,h=e.as,N=void 0===h?"input":h,Z=(0,n.Z)(e,y),g=(0,c.useContext)(p).controlId;return o=(0,b.vE)(o,"form-check-input"),(0,d.jsx)(N,(0,t.Z)((0,t.Z)({},Z),{},{ref:a,type:f,id:r||g,className:i()(s,o,v&&"is-valid",x&&"is-invalid")}))}));x.displayName="FormCheckInput";var h=x,N=["bsPrefix","className","htmlFor"],Z=c.forwardRef((function(e,a){var r=e.bsPrefix,o=e.className,s=e.htmlFor,l=(0,n.Z)(e,N),f=(0,c.useContext)(p).controlId;return r=(0,b.vE)(r,"form-check-label"),(0,d.jsx)("label",(0,t.Z)((0,t.Z)({},l),{},{ref:a,htmlFor:s||f,className:i()(o,r)}))}));Z.displayName="FormCheckLabel";var g=Z;var w=["id","bsPrefix","bsSwitchPrefix","inline","reverse","disabled","isValid","isInvalid","feedbackTooltip","feedback","feedbackType","className","style","title","type","label","children","as"],j=c.forwardRef((function(e,a){var r=e.id,o=e.bsPrefix,s=e.bsSwitchPrefix,l=e.inline,f=void 0!==l&&l,u=e.reverse,v=void 0!==u&&u,y=e.disabled,x=void 0!==y&&y,N=e.isValid,Z=void 0!==N&&N,j=e.isInvalid,P=void 0!==j&&j,I=e.feedbackTooltip,C=void 0!==I&&I,k=e.feedback,O=e.feedbackType,E=e.className,F=e.style,R=e.title,S=void 0===R?"":R,z=e.type,T=void 0===z?"checkbox":z,A=e.label,V=e.children,L=e.as,B=void 0===L?"input":L,G=(0,n.Z)(e,w);o=(0,b.vE)(o,"form-check"),s=(0,b.vE)(s,"form-switch");var _=(0,c.useContext)(p).controlId,M=(0,c.useMemo)((function(){return{controlId:r||_}}),[_,r]),D=!V&&null!=A&&!1!==A||function(e,a){return c.Children.toArray(e).some((function(e){return c.isValidElement(e)&&e.type===a}))}(V,g),H=(0,d.jsx)(h,(0,t.Z)((0,t.Z)({},G),{},{type:"switch"===T?"checkbox":T,ref:a,isValid:Z,isInvalid:P,disabled:x,as:B}));return(0,d.jsx)(p.Provider,{value:M,children:(0,d.jsx)("div",{style:F,className:i()(E,D&&o,f&&"".concat(o,"-inline"),v&&"".concat(o,"-reverse"),"switch"===T&&s),children:V||(0,d.jsxs)(d.Fragment,{children:[H,D&&(0,d.jsx)(g,{title:S,children:A}),k&&(0,d.jsx)(m,{type:O,tooltip:C,children:k})]})})})}));j.displayName="FormCheck";var P=Object.assign(j,{Input:h,Label:g}),I=r(4942),C=(r(2391),["bsPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","as"]),k=c.forwardRef((function(e,a){var r,o,s=e.bsPrefix,l=e.type,f=e.size,u=e.htmlSize,v=e.id,m=e.className,y=e.isValid,x=void 0!==y&&y,h=e.isInvalid,N=void 0!==h&&h,Z=e.plaintext,g=e.readOnly,w=e.as,j=void 0===w?"input":w,P=(0,n.Z)(e,C),k=(0,c.useContext)(p).controlId;(s=(0,b.vE)(s,"form-control"),Z)?r=(0,I.Z)({},"".concat(s,"-plaintext"),!0):(o={},(0,I.Z)(o,s,!0),(0,I.Z)(o,"".concat(s,"-").concat(f),f),r=o);return(0,d.jsx)(j,(0,t.Z)((0,t.Z)({},P),{},{type:l,size:u,ref:a,readOnly:g,id:v||k,className:i()(m,r,x&&"is-valid",N&&"is-invalid","color"===l&&"".concat(s,"-color"))}))}));k.displayName="FormControl";var O=Object.assign(k,{Feedback:m}),E=/-(.)/g;var F=["className","bsPrefix","as"],R=function(e){return e[0].toUpperCase()+(a=e,a.replace(E,(function(e,a){return a.toUpperCase()}))).slice(1);var a};var S=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=a.displayName,o=void 0===r?R(e):r,s=a.Component,l=a.defaultProps,f=c.forwardRef((function(a,r){var o=a.className,l=a.bsPrefix,c=a.as,f=void 0===c?s||"div":c,u=(0,n.Z)(a,F),v=(0,b.vE)(l,e);return(0,d.jsx)(f,(0,t.Z)({ref:r,className:i()(o,v)},u))}));return f.defaultProps=l,f.displayName=o,f}("form-floating"),z=["controlId","as"],T=c.forwardRef((function(e,a){var r=e.controlId,o=e.as,i=void 0===o?"div":o,s=(0,n.Z)(e,z),l=(0,c.useMemo)((function(){return{controlId:r}}),[r]);return(0,d.jsx)(p.Provider,{value:l,children:(0,d.jsx)(i,(0,t.Z)((0,t.Z)({},s),{},{ref:a}))})}));T.displayName="FormGroup";var A=T,V=r(2677),L=["as","bsPrefix","column","visuallyHidden","className","htmlFor"],B=c.forwardRef((function(e,a){var r=e.as,o=void 0===r?"label":r,s=e.bsPrefix,l=e.column,f=e.visuallyHidden,u=e.className,v=e.htmlFor,m=(0,n.Z)(e,L),y=(0,c.useContext)(p).controlId;s=(0,b.vE)(s,"form-label");var x="col-form-label";"string"===typeof l&&(x="".concat(x," ").concat(x,"-").concat(l));var h=i()(u,s,f&&"visually-hidden",l&&x);return v=v||y,l?(0,d.jsx)(V.Z,(0,t.Z)({ref:a,as:"label",className:h,htmlFor:v},m)):(0,d.jsx)(o,(0,t.Z)({ref:a,className:h,htmlFor:v},m))}));B.displayName="FormLabel",B.defaultProps={column:!1,visuallyHidden:!1};var G=B,_=["bsPrefix","className","id"],M=c.forwardRef((function(e,a){var r=e.bsPrefix,o=e.className,s=e.id,l=(0,n.Z)(e,_),f=(0,c.useContext)(p).controlId;return r=(0,b.vE)(r,"form-range"),(0,d.jsx)("input",(0,t.Z)((0,t.Z)({},l),{},{type:"range",ref:a,className:i()(o,r),id:s||f}))}));M.displayName="FormRange";var D=M,H=["bsPrefix","size","htmlSize","className","isValid","isInvalid","id"],U=c.forwardRef((function(e,a){var r=e.bsPrefix,o=e.size,s=e.htmlSize,l=e.className,f=e.isValid,u=void 0!==f&&f,v=e.isInvalid,m=void 0!==v&&v,y=e.id,x=(0,n.Z)(e,H),h=(0,c.useContext)(p).controlId;return r=(0,b.vE)(r,"form-select"),(0,d.jsx)("select",(0,t.Z)((0,t.Z)({},x),{},{size:s,ref:a,className:i()(l,r,o&&"".concat(r,"-").concat(o),u&&"is-valid",m&&"is-invalid"),id:y||h}))}));U.displayName="FormSelect";var K=U,Q=["bsPrefix","className","as","muted"],W=c.forwardRef((function(e,a){var r=e.bsPrefix,o=e.className,s=e.as,l=void 0===s?"small":s,c=e.muted,f=(0,n.Z)(e,Q);return r=(0,b.vE)(r,"form-text"),(0,d.jsx)(l,(0,t.Z)((0,t.Z)({},f),{},{ref:a,className:i()(o,r,c&&"text-muted")}))}));W.displayName="FormText";var $=W,q=c.forwardRef((function(e,a){return(0,d.jsx)(P,(0,t.Z)((0,t.Z)({},e),{},{ref:a,type:"switch"}))}));q.displayName="Switch";var J=Object.assign(q,{Input:P.Input,Label:P.Label}),X=["bsPrefix","className","children","controlId","label"],Y=c.forwardRef((function(e,a){var r=e.bsPrefix,o=e.className,s=e.children,l=e.controlId,c=e.label,f=(0,n.Z)(e,X);return r=(0,b.vE)(r,"form-floating"),(0,d.jsxs)(A,(0,t.Z)((0,t.Z)({ref:a,className:i()(o,r),controlId:l},f),{},{children:[s,(0,d.jsx)("label",{htmlFor:l,children:c})]}))}));Y.displayName="FloatingLabel";var ee=Y,ae=["className","validated","as"],re={_ref:l().any,validated:l().bool,as:l().elementType},te=c.forwardRef((function(e,a){var r=e.className,o=e.validated,s=e.as,l=void 0===s?"form":s,c=(0,n.Z)(e,ae);return(0,d.jsx)(l,(0,t.Z)((0,t.Z)({},c),{},{ref:a,className:i()(r,o&&"was-validated")}))}));te.displayName="Form",te.propTypes=re;var ne=Object.assign(te,{Group:A,Control:O,Floating:S,Check:P,Switch:J,Label:G,Text:$,Range:D,Select:K,FloatingLabel:ee})},9743:function(e,a,r){var t=r(1413),n=r(5987),o=r(1694),i=r.n(o),s=r(2791),l=r(162),c=r(184),d=["bsPrefix","className","as"],f=s.forwardRef((function(e,a){var r=e.bsPrefix,o=e.className,s=e.as,f=void 0===s?"div":s,u=(0,n.Z)(e,d),v=(0,l.vE)(r,"row"),m=(0,l.pi)(),p=(0,l.zG)(),b="".concat(v,"-cols"),y=[];return m.forEach((function(e){var a,r=u[e];delete u[e],a=null!=r&&"object"===typeof r?r.cols:r;var t=e!==p?"-".concat(e):"";null!=a&&y.push("".concat(b).concat(t,"-").concat(a))})),(0,c.jsx)(f,(0,t.Z)((0,t.Z)({ref:a},u),{},{className:i().apply(void 0,[o,v].concat(y))}))}));f.displayName="Row",a.Z=f},162:function(e,a,r){r.d(a,{vE:function(){return i},pi:function(){return s},zG:function(){return l}});var t=r(2791),n=(r(184),["xxl","xl","lg","md","sm","xs"]),o=t.createContext({prefixes:{},breakpoints:n,minBreakpoint:"xs"});o.Consumer,o.Provider;function i(e,a){var r=(0,t.useContext)(o).prefixes;return e||r[a]||a}function s(){return(0,t.useContext)(o).breakpoints}function l(){return(0,t.useContext)(o).minBreakpoint}},8185:function(e,a,r){r.d(a,{IQF:function(){return f}});var t=r(2791),n={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=t.createContext&&t.createContext(n),i=function(){return i=Object.assign||function(e){for(var a,r=1,t=arguments.length;r<t;r++)for(var n in a=arguments[r])Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);return e},i.apply(this,arguments)},s=function(e,a){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&a.indexOf(t)<0&&(r[t]=e[t]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(t=Object.getOwnPropertySymbols(e);n<t.length;n++)a.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(r[t[n]]=e[t[n]])}return r};function l(e){return e&&e.map((function(e,a){return t.createElement(e.tag,i({key:a},e.attr),l(e.child))}))}function c(e){return function(a){return t.createElement(d,i({attr:i({},e.attr)},a),l(e.child))}}function d(e){var a=function(a){var r,n=e.attr,o=e.size,l=e.title,c=s(e,["attr","size","title"]),d=o||a.size||"1em";return a.className&&(r=a.className),e.className&&(r=(r?r+" ":"")+e.className),t.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},a.attr,n,c,{className:r,style:i(i({color:e.color||a.color},a.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),l&&t.createElement("title",null,l),e.children)};return void 0!==o?t.createElement(o.Consumer,null,(function(e){return a(e)})):a(n)}function f(e){return c({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M13.485 1.431a1.473 1.473 0 0 1 2.104 2.062l-7.84 9.801a1.473 1.473 0 0 1-2.12.04L.431 8.138a1.473 1.473 0 0 1 2.084-2.083l4.111 4.112 6.82-8.69a.486.486 0 0 1 .04-.045z"}}]})(e)}},2391:function(e){var a=function(){};e.exports=a},907:function(e,a,r){function t(e,a){(null==a||a>e.length)&&(a=e.length);for(var r=0,t=new Array(a);r<a;r++)t[r]=e[r];return t}r.d(a,{Z:function(){return t}})},5987:function(e,a,r){r.d(a,{Z:function(){return n}});var t=r(3366);function n(e,a){if(null==e)return{};var r,n,o=(0,t.Z)(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}},885:function(e,a,r){r.d(a,{Z:function(){return n}});var t=r(181);function n(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,n,o=[],i=!0,s=!1;try{for(r=r.call(e);!(i=(t=r.next()).done)&&(o.push(t.value),!a||o.length!==a);i=!0);}catch(l){s=!0,n=l}finally{try{i||null==r.return||r.return()}finally{if(s)throw n}}return o}}(e,a)||(0,t.Z)(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},2982:function(e,a,r){r.d(a,{Z:function(){return o}});var t=r(907);var n=r(181);function o(e){return function(e){if(Array.isArray(e))return(0,t.Z)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||(0,n.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},181:function(e,a,r){r.d(a,{Z:function(){return n}});var t=r(907);function n(e,a){if(e){if("string"===typeof e)return(0,t.Z)(e,a);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?(0,t.Z)(e,a):void 0}}}}]);
//# sourceMappingURL=934.82375729.chunk.js.map