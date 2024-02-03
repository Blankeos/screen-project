(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const f of i.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&o(f)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function O(){}function Q(e){return e()}function z(){return Object.create(null)}function L(e){e.forEach(Q)}function U(e){return typeof e=="function"}function ee(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let C;function te(e,t){return C||(C=document.createElement("a")),C.href=t,e===C.href}function ne(e){return Object.keys(e).length===0}function s(e,t){e.appendChild(t)}function re(e,t,n){e.insertBefore(t,n||null)}function X(e){e.parentNode&&e.parentNode.removeChild(e)}function d(e){return document.createElement(e)}function T(e){return document.createTextNode(e)}function _(){return T(" ")}function j(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function a(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Y(e){return e===""?null:+e}function le(e){return Array.from(e.childNodes)}function D(e,t){t=""+t,e.data!==t&&(e.data=t)}function P(e,t){e.value=t==null?"":t}let M;function E(e){M=e}const $=[],H=[];let v=[];const J=[],oe=Promise.resolve();let B=!1;function ie(){B||(B=!0,oe.then(Z))}function I(e){v.push(e)}const G=new Set;let b=0;function Z(){if(b!==0)return;const e=M;do{try{for(;b<$.length;){const t=$[b];b++,E(t),ue(t.$$)}}catch(t){throw $.length=0,b=0,t}for(E(null),$.length=0,b=0;H.length;)H.pop()();for(let t=0;t<v.length;t+=1){const n=v[t];G.has(n)||(G.add(n),n())}v.length=0}while($.length);for(;J.length;)J.pop()();B=!1,G.clear(),E(e)}function ue(e){if(e.fragment!==null){e.update(),L(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(I)}}function se(e){const t=[],n=[];v.forEach(o=>e.indexOf(o)===-1?t.push(o):n.push(o)),n.forEach(o=>o()),v=t}const fe=new Set;function ce(e,t){e&&e.i&&(fe.delete(e),e.i(t))}function ae(e,t,n,o){const{fragment:r,after_update:i}=e.$$;r&&r.m(t,n),o||I(()=>{const f=e.$$.on_mount.map(Q).filter(U);e.$$.on_destroy?e.$$.on_destroy.push(...f):L(f),e.$$.on_mount=[]}),i.forEach(I)}function de(e,t){const n=e.$$;n.fragment!==null&&(se(n.after_update),L(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function pe(e,t){e.$$.dirty[0]===-1&&($.push(e),ie(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function he(e,t,n,o,r,i,f,g=[-1]){const u=M;E(e);const l=e.$$={fragment:null,ctx:[],props:i,update:O,not_equal:r,bound:z(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(u?u.$$.context:[])),callbacks:z(),dirty:g,skip_bound:!1,root:t.target||u.$$.root};f&&f(l.root);let m=!1;if(l.ctx=n?n(e,t.props||{},(c,x,...w)=>{const k=w.length?w[0]:x;return l.ctx&&r(l.ctx[c],l.ctx[c]=k)&&(!l.skip_bound&&l.bound[c]&&l.bound[c](k),m&&pe(e,c)),x}):[],l.update(),m=!0,L(l.before_update),l.fragment=o?o(l.ctx):!1,t.target){if(t.hydrate){const c=le(t.target);l.fragment&&l.fragment.l(c),c.forEach(X)}else l.fragment&&l.fragment.c();t.intro&&ce(e.$$.fragment),ae(e,t.target,t.anchor,t.customElement),Z()}E(u)}class _e{$destroy(){de(this,1),this.$destroy=O}$on(t,n){if(!U(n))return O;const o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(n),()=>{const r=o.indexOf(n);r!==-1&&o.splice(r,1)}}$set(t){this.$$set&&!ne(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const me="/assets/logo-universal.f9dae61b.png";function ge(e){return window.go.main.App.Greet(e)}function ye(e){return window.go.main.App.VerifyAge(e)}function be(e){let t,n,o,r,i,f,g,u,l,m,c,x,w,k,N,F,h,K,A,R,S,V,q,W;return{c(){t=d("main"),n=d("img"),r=_(),i=d("div"),f=T(e[0]),g=_(),u=d("div"),l=d("input"),m=_(),c=d("button"),c.textContent="Greet",x=_(),w=d("br"),k=_(),N=d("label"),N.textContent="Age:",F=_(),h=d("input"),K=_(),A=d("button"),A.textContent="Verify",R=_(),S=d("div"),V=T(e[2]),a(n,"alt","Wails logo"),a(n,"id","logo"),te(n.src,o=me)||a(n,"src",o),a(n,"class","svelte-140lxdh"),a(i,"class","result svelte-140lxdh"),a(i,"id","result"),a(l,"autocomplete","off"),a(l,"class","input svelte-140lxdh"),a(l,"id","name"),a(l,"type","text"),a(c,"class","btn svelte-140lxdh"),a(N,"for","age"),a(h,"autocomplete","off"),a(h,"type","number"),a(h,"id","age"),a(A,"class","btn svelte-140lxdh"),a(u,"class","input-box svelte-140lxdh"),a(u,"id","input")},m(p,y){re(p,t,y),s(t,n),s(t,r),s(t,i),s(i,f),s(t,g),s(t,u),s(u,l),P(l,e[1]),s(u,m),s(u,c),s(u,x),s(u,w),s(u,k),s(u,N),s(u,F),s(u,h),P(h,e[3]),s(u,K),s(u,A),s(u,R),s(u,S),s(S,V),q||(W=[j(l,"input",e[6]),j(c,"click",e[4]),j(h,"input",e[7]),j(A,"click",e[5])],q=!0)},p(p,[y]){y&1&&D(f,p[0]),y&2&&l.value!==p[1]&&P(l,p[1]),y&8&&Y(h.value)!==p[3]&&P(h,p[3]),y&4&&D(V,p[2])},i:O,o:O,d(p){p&&X(t),q=!1,L(W)}}}function $e(e,t,n){let o="Please enter your name below \u{1F447}",r,i="",f;function g(){ge(r).then(c=>n(0,o=c))}function u(){ye(f).then(c=>{n(2,i=c)})}function l(){r=this.value,n(1,r)}function m(){f=Y(this.value),n(3,f)}return[o,r,i,f,g,u,l,m]}class ve extends _e{constructor(t){super(),he(this,t,$e,be,ee,{})}}new ve({target:document.getElementById("app")});
