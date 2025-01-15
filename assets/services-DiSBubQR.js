import{r as P,n as E}from"./components-BS1H3UBt.js";import{c as Kt,a as gt,B as Ut,L as mn}from"./button-BYozkFbl.js";import{B as pn}from"./badge-BN1cKDr-.js";function gn(t){return Object.prototype.toString.call(t)==="[object Object]"}function Ht(t){return gn(t)||Array.isArray(t)}function hn(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function jt(t,n){const o=Object.keys(t),r=Object.keys(n);if(o.length!==r.length)return!1;const c=JSON.stringify(Object.keys(t.breakpoints||{})),s=JSON.stringify(Object.keys(n.breakpoints||{}));return c!==s?!1:o.every(e=>{const a=t[e],u=n[e];return typeof a=="function"?`${a}`==`${u}`:!Ht(a)||!Ht(u)?a===u:jt(a,u)})}function Gt(t){return t.concat().sort((n,o)=>n.name>o.name?1:-1).map(n=>n.options)}function xn(t,n){if(t.length!==n.length)return!1;const o=Gt(t),r=Gt(n);return o.every((c,s)=>{const e=r[s];return jt(c,e)})}function Tt(t){return typeof t=="number"}function Ct(t){return typeof t=="string"}function St(t){return typeof t=="boolean"}function qt(t){return Object.prototype.toString.call(t)==="[object Object]"}function D(t){return Math.abs(t)}function At(t){return Math.sign(t)}function ft(t,n){return D(t-n)}function yn(t,n){if(t===0||n===0||D(t)<=D(n))return 0;const o=ft(D(t),D(n));return D(o/t)}function Sn(t){return Math.round(t*100)/100}function dt(t){return mt(t).map(Number)}function V(t){return t[ht(t)]}function ht(t){return Math.max(0,t.length-1)}function Pt(t,n){return n===ht(t)}function $t(t,n=0){return Array.from(Array(t),(o,r)=>n+r)}function mt(t){return Object.keys(t)}function Qt(t,n){return[t,n].reduce((o,r)=>(mt(r).forEach(c=>{const s=o[c],e=r[c],a=qt(s)&&qt(e);o[c]=a?Qt(s,e):e}),o),{})}function It(t,n){return typeof n.MouseEvent<"u"&&t instanceof n.MouseEvent}function bn(t,n){const o={start:r,center:c,end:s};function r(){return 0}function c(u){return s(u)/2}function s(u){return n-u}function e(u,i){return Ct(t)?o[t](u):t(n,u,i)}return{measure:e}}function pt(){let t=[];function n(c,s,e,a={passive:!0}){let u;if("addEventListener"in c)c.addEventListener(s,e,a),u=()=>c.removeEventListener(s,e,a);else{const i=c;i.addListener(e),u=()=>i.removeListener(e)}return t.push(u),r}function o(){t=t.filter(c=>c())}const r={add:n,clear:o};return r}function vn(t,n,o,r){const c=pt(),s=1e3/60;let e=null,a=0,u=0;function i(){c.add(t,"visibilitychange",()=>{t.hidden&&l()})}function x(){S(),c.clear()}function d(h){if(!u)return;e||(e=h,o(),o());const f=h-e;for(e=h,a+=f;a>=s;)o(),a-=s;const g=a/s;r(g),u&&(u=n.requestAnimationFrame(d))}function m(){u||(u=n.requestAnimationFrame(d))}function S(){n.cancelAnimationFrame(u),e=null,a=0,u=0}function l(){e=null,a=0}return{init:i,destroy:x,start:m,stop:S,update:o,render:r}}function wn(t,n){const o=n==="rtl",r=t==="y",c=r?"y":"x",s=r?"x":"y",e=!r&&o?-1:1,a=x(),u=d();function i(l){const{height:p,width:h}=l;return r?p:h}function x(){return r?"top":o?"right":"left"}function d(){return r?"bottom":o?"left":"right"}function m(l){return l*e}return{scroll:c,cross:s,startEdge:a,endEdge:u,measureSize:i,direction:m}}function et(t=0,n=0){const o=D(t-n);function r(i){return i<t}function c(i){return i>n}function s(i){return r(i)||c(i)}function e(i){return s(i)?r(i)?t:n:i}function a(i){return o?i-o*Math.ceil((i-n)/o):i}return{length:o,max:n,min:t,constrain:e,reachedAny:s,reachedMax:c,reachedMin:r,removeOffset:a}}function Jt(t,n,o){const{constrain:r}=et(0,t),c=t+1;let s=e(n);function e(m){return o?D((c+m)%c):r(m)}function a(){return s}function u(m){return s=e(m),d}function i(m){return x().set(a()+m)}function x(){return Jt(t,a(),o)}const d={get:a,set:u,add:i,clone:x};return d}function En(t,n,o,r,c,s,e,a,u,i,x,d,m,S,l,p,h,f,g){const{cross:b,direction:L}=t,T=["INPUT","SELECT","TEXTAREA"],N={passive:!1},v=pt(),w=pt(),C=et(50,225).constrain(S.measure(20)),O={mouse:300,touch:400},I={mouse:500,touch:600},z=l?43:25;let H=!1,G=0,q=0,W=!1,_=!1,U=!1,Q=!1;function it(y){if(!g)return;function j(F){(St(g)||g(y,F))&&ut(F)}const M=n;v.add(M,"dragstart",F=>F.preventDefault(),N).add(M,"touchmove",()=>{},N).add(M,"touchend",()=>{}).add(M,"touchstart",j).add(M,"mousedown",j).add(M,"touchcancel",k).add(M,"contextmenu",k).add(M,"click",X,!0)}function $(){v.clear(),w.clear()}function ot(){const y=Q?o:n;w.add(y,"touchmove",B,N).add(y,"touchend",k).add(y,"mousemove",B,N).add(y,"mouseup",k)}function rt(y){const j=y.nodeName||"";return T.includes(j)}function J(){return(l?I:O)[Q?"mouse":"touch"]}function ct(y,j){const M=d.add(At(y)*-1),F=x.byDistance(y,!l).distance;return l||D(y)<C?F:h&&j?F*.5:x.byIndex(M.get(),0).distance}function ut(y){const j=It(y,r);Q=j,U=l&&j&&!y.buttons&&H,H=ft(c.get(),e.get())>=2,!(j&&y.button!==0)&&(rt(y.target)||(W=!0,s.pointerDown(y),i.useFriction(0).useDuration(0),c.set(e),ot(),G=s.readPoint(y),q=s.readPoint(y,b),m.emit("pointerDown")))}function B(y){if(!It(y,r)&&y.touches.length>=2)return k(y);const M=s.readPoint(y),F=s.readPoint(y,b),K=ft(M,G),Y=ft(F,q);if(!_&&!Q&&(!y.cancelable||(_=K>Y,!_)))return k(y);const tt=s.pointerMove(y);K>p&&(U=!0),i.useFriction(.3).useDuration(.75),a.start(),c.add(L(tt)),y.preventDefault()}function k(y){const M=x.byDistance(0,!1).index!==d.get(),F=s.pointerUp(y)*J(),K=ct(L(F),M),Y=yn(F,K),tt=z-10*Y,Z=f+Y/50;_=!1,W=!1,w.clear(),i.useDuration(tt).useFriction(Z),u.distance(K,!l),Q=!1,m.emit("pointerUp")}function X(y){U&&(y.stopPropagation(),y.preventDefault(),U=!1)}function R(){return W}return{init:it,destroy:$,pointerDown:R}}function Ln(t,n){let r,c;function s(d){return d.timeStamp}function e(d,m){const l=`client${(m||t.scroll)==="x"?"X":"Y"}`;return(It(d,n)?d:d.touches[0])[l]}function a(d){return r=d,c=d,e(d)}function u(d){const m=e(d)-e(c),S=s(d)-s(r)>170;return c=d,S&&(r=d),m}function i(d){if(!r||!c)return 0;const m=e(c)-e(r),S=s(d)-s(r),l=s(d)-s(c)>170,p=m/S;return S&&!l&&D(p)>.1?p:0}return{pointerDown:a,pointerMove:u,pointerUp:i,readPoint:e}}function Nn(){function t(o){const{offsetTop:r,offsetLeft:c,offsetWidth:s,offsetHeight:e}=o;return{top:r,right:c+s,bottom:r+e,left:c,width:s,height:e}}return{measure:t}}function Cn(t){function n(r){return t*(r/100)}return{measure:n}}function In(t,n,o,r,c,s,e){const a=[t].concat(r);let u,i,x=[],d=!1;function m(h){return c.measureSize(e.measure(h))}function S(h){if(!s)return;i=m(t),x=r.map(m);function f(g){for(const b of g){if(d)return;const L=b.target===t,T=r.indexOf(b.target),N=L?i:x[T],v=m(L?t:r[T]);if(D(v-N)>=.5){h.reInit(),n.emit("resize");break}}}u=new ResizeObserver(g=>{(St(s)||s(h,g))&&f(g)}),o.requestAnimationFrame(()=>{a.forEach(g=>u.observe(g))})}function l(){d=!0,u&&u.disconnect()}return{init:S,destroy:l}}function jn(t,n,o,r,c,s){let e=0,a=0,u=c,i=s,x=t.get(),d=0;function m(){const N=r.get()-t.get(),v=!u;let w=0;return v?(e=0,o.set(r),t.set(r),w=N):(o.set(t),e+=N/u,e*=i,x+=e,t.add(e),w=x-d),a=At(w),d=x,T}function S(){const N=r.get()-n.get();return D(N)<.001}function l(){return u}function p(){return a}function h(){return e}function f(){return b(c)}function g(){return L(s)}function b(N){return u=N,T}function L(N){return i=N,T}const T={direction:p,duration:l,velocity:h,seek:m,settled:S,useBaseFriction:g,useBaseDuration:f,useFriction:L,useDuration:b};return T}function Tn(t,n,o,r,c){const s=c.measure(10),e=c.measure(50),a=et(.1,.99);let u=!1;function i(){return!(u||!t.reachedAny(o.get())||!t.reachedAny(n.get()))}function x(S){if(!i())return;const l=t.reachedMin(n.get())?"min":"max",p=D(t[l]-n.get()),h=o.get()-n.get(),f=a.constrain(p/e);o.subtract(h*f),!S&&D(h)<s&&(o.set(t.constrain(o.get())),r.useDuration(25).useBaseFriction())}function d(S){u=!S}return{shouldConstrain:i,constrain:x,toggleActive:d}}function An(t,n,o,r,c){const s=et(-n+t,0),e=d(),a=x(),u=m();function i(l,p){return ft(l,p)<=1}function x(){const l=e[0],p=V(e),h=e.lastIndexOf(l),f=e.indexOf(p)+1;return et(h,f)}function d(){return o.map((l,p)=>{const{min:h,max:f}=s,g=s.constrain(l),b=!p,L=Pt(o,p);return b?f:L||i(h,g)?h:i(f,g)?f:g}).map(l=>parseFloat(l.toFixed(3)))}function m(){if(n<=t+c)return[s.max];if(r==="keepSnaps")return e;const{min:l,max:p}=a;return e.slice(l,p)}return{snapsContained:u,scrollContainLimit:a}}function Pn(t,n,o){const r=n[0],c=o?r-t:V(n);return{limit:et(c,r)}}function Dn(t,n,o,r){const s=n.min+.1,e=n.max+.1,{reachedMin:a,reachedMax:u}=et(s,e);function i(m){return m===1?u(o.get()):m===-1?a(o.get()):!1}function x(m){if(!i(m))return;const S=t*(m*-1);r.forEach(l=>l.add(S))}return{loop:x}}function On(t){const{max:n,length:o}=t;function r(s){const e=s-n;return o?e/-o:0}return{get:r}}function Mn(t,n,o,r,c){const{startEdge:s,endEdge:e}=t,{groupSlides:a}=c,u=d().map(n.measure),i=m(),x=S();function d(){return a(r).map(p=>V(p)[e]-p[0][s]).map(D)}function m(){return r.map(p=>o[s]-p[s]).map(p=>-D(p))}function S(){return a(i).map(p=>p[0]).map((p,h)=>p+u[h])}return{snaps:i,snapsAligned:x}}function kn(t,n,o,r,c,s){const{groupSlides:e}=c,{min:a,max:u}=r,i=x();function x(){const m=e(s),S=!t||n==="keepSnaps";return o.length===1?[s]:S?m:m.slice(a,u).map((l,p,h)=>{const f=!p,g=Pt(h,p);if(f){const b=V(h[0])+1;return $t(b)}if(g){const b=ht(s)-V(h)[0]+1;return $t(b,V(h)[0])}return l})}return{slideRegistry:i}}function Fn(t,n,o,r,c){const{reachedAny:s,removeOffset:e,constrain:a}=r;function u(l){return l.concat().sort((p,h)=>D(p)-D(h))[0]}function i(l){const p=t?e(l):a(l),h=n.map((g,b)=>({diff:x(g-p,0),index:b})).sort((g,b)=>D(g.diff)-D(b.diff)),{index:f}=h[0];return{index:f,distance:p}}function x(l,p){const h=[l,l+o,l-o];if(!t)return l;if(!p)return u(h);const f=h.filter(g=>At(g)===p);return f.length?u(f):V(h)-o}function d(l,p){const h=n[l]-c.get(),f=x(h,p);return{index:l,distance:f}}function m(l,p){const h=c.get()+l,{index:f,distance:g}=i(h),b=!t&&s(h);if(!p||b)return{index:f,distance:l};const L=n[f]-g,T=l+x(L,0);return{index:f,distance:T}}return{byDistance:m,byIndex:d,shortcut:x}}function zn(t,n,o,r,c,s,e){function a(d){const m=d.distance,S=d.index!==n.get();s.add(m),m&&(r.duration()?t.start():(t.update(),t.render(1),t.update())),S&&(o.set(n.get()),n.set(d.index),e.emit("select"))}function u(d,m){const S=c.byDistance(d,m);a(S)}function i(d,m){const S=n.clone().set(d),l=c.byIndex(S.get(),m);a(l)}return{distance:u,index:i}}function Bn(t,n,o,r,c,s,e,a){const u={passive:!0,capture:!0};let i=0;function x(S){if(!a)return;function l(p){if(new Date().getTime()-i>10)return;e.emit("slideFocusStart"),t.scrollLeft=0;const g=o.findIndex(b=>b.includes(p));Tt(g)&&(c.useDuration(0),r.index(g,0),e.emit("slideFocus"))}s.add(document,"keydown",d,!1),n.forEach((p,h)=>{s.add(p,"focus",f=>{(St(a)||a(S,f))&&l(h)},u)})}function d(S){S.code==="Tab"&&(i=new Date().getTime())}return{init:x}}function lt(t){let n=t;function o(){return n}function r(u){n=e(u)}function c(u){n+=e(u)}function s(u){n-=e(u)}function e(u){return Tt(u)?u:u.get()}return{get:o,set:r,add:c,subtract:s}}function Xt(t,n){const o=t.scroll==="x"?e:a,r=n.style;let c=null,s=!1;function e(m){return`translate3d(${m}px,0px,0px)`}function a(m){return`translate3d(0px,${m}px,0px)`}function u(m){if(s)return;const S=Sn(t.direction(m));S!==c&&(r.transform=o(S),c=S)}function i(m){s=!m}function x(){s||(r.transform="",n.getAttribute("style")||n.removeAttribute("style"))}return{clear:x,to:u,toggleActive:i}}function Rn(t,n,o,r,c,s,e,a,u){const x=dt(c),d=dt(c).reverse(),m=f().concat(g());function S(v,w){return v.reduce((C,O)=>C-c[O],w)}function l(v,w){return v.reduce((C,O)=>S(C,w)>0?C.concat([O]):C,[])}function p(v){return s.map((w,C)=>({start:w-r[C]+.5+v,end:w+n-.5+v}))}function h(v,w,C){const O=p(w);return v.map(I=>{const z=C?0:-o,H=C?o:0,G=C?"end":"start",q=O[I][G];return{index:I,loopPoint:q,slideLocation:lt(-1),translate:Xt(t,u[I]),target:()=>a.get()>q?z:H}})}function f(){const v=e[0],w=l(d,v);return h(w,o,!1)}function g(){const v=n-e[0]-1,w=l(x,v);return h(w,-o,!0)}function b(){return m.every(({index:v})=>{const w=x.filter(C=>C!==v);return S(w,n)<=.1})}function L(){m.forEach(v=>{const{target:w,translate:C,slideLocation:O}=v,I=w();I!==O.get()&&(C.to(I),O.set(I))})}function T(){m.forEach(v=>v.translate.clear())}return{canLoop:b,clear:T,loop:L,loopPoints:m}}function Vn(t,n,o){let r,c=!1;function s(u){if(!o)return;function i(x){for(const d of x)if(d.type==="childList"){u.reInit(),n.emit("slidesChanged");break}}r=new MutationObserver(x=>{c||(St(o)||o(u,x))&&i(x)}),r.observe(t,{childList:!0})}function e(){r&&r.disconnect(),c=!0}return{init:s,destroy:e}}function Hn(t,n,o,r){const c={};let s=null,e=null,a,u=!1;function i(){a=new IntersectionObserver(l=>{u||(l.forEach(p=>{const h=n.indexOf(p.target);c[h]=p}),s=null,e=null,o.emit("slidesInView"))},{root:t.parentElement,threshold:r}),n.forEach(l=>a.observe(l))}function x(){a&&a.disconnect(),u=!0}function d(l){return mt(c).reduce((p,h)=>{const f=parseInt(h),{isIntersecting:g}=c[f];return(l&&g||!l&&!g)&&p.push(f),p},[])}function m(l=!0){if(l&&s)return s;if(!l&&e)return e;const p=d(l);return l&&(s=p),l||(e=p),p}return{init:i,destroy:x,get:m}}function Gn(t,n,o,r,c,s){const{measureSize:e,startEdge:a,endEdge:u}=t,i=o[0]&&c,x=l(),d=p(),m=o.map(e),S=h();function l(){if(!i)return 0;const g=o[0];return D(n[a]-g[a])}function p(){if(!i)return 0;const g=s.getComputedStyle(V(r));return parseFloat(g.getPropertyValue(`margin-${u}`))}function h(){return o.map((g,b,L)=>{const T=!b,N=Pt(L,b);return T?m[b]+x:N?m[b]+d:L[b+1][a]-g[a]}).map(D)}return{slideSizes:m,slideSizesWithGaps:S,startGap:x,endGap:d}}function qn(t,n,o,r,c,s,e,a,u){const{startEdge:i,endEdge:x,direction:d}=t,m=Tt(o);function S(f,g){return dt(f).filter(b=>b%g===0).map(b=>f.slice(b,b+g))}function l(f){return f.length?dt(f).reduce((g,b,L)=>{const T=V(g)||0,N=T===0,v=b===ht(f),w=c[i]-s[T][i],C=c[i]-s[b][x],O=!r&&N?d(e):0,I=!r&&v?d(a):0,z=D(C-I-(w+O));return L&&z>n+u&&g.push(b),v&&g.push(f.length),g},[]).map((g,b,L)=>{const T=Math.max(L[b-1]||0);return f.slice(T,g)}):[]}function p(f){return m?S(f,o):l(f)}return{groupSlides:p}}function $n(t,n,o,r,c,s,e){const{align:a,axis:u,direction:i,startIndex:x,loop:d,duration:m,dragFree:S,dragThreshold:l,inViewThreshold:p,slidesToScroll:h,skipSnaps:f,containScroll:g,watchResize:b,watchSlides:L,watchDrag:T,watchFocus:N}=s,v=2,w=Nn(),C=w.measure(n),O=o.map(w.measure),I=wn(u,i),z=I.measureSize(C),H=Cn(z),G=bn(a,z),q=!d&&!!g,W=d||!!g,{slideSizes:_,slideSizesWithGaps:U,startGap:Q,endGap:it}=Gn(I,C,O,o,W,c),$=qn(I,z,h,d,C,O,Q,it,v),{snaps:ot,snapsAligned:rt}=Mn(I,G,C,O,$),J=-V(ot)+V(U),{snapsContained:ct,scrollContainLimit:ut}=An(z,J,rt,g,v),B=q?ct:rt,{limit:k}=Pn(J,B,d),X=Jt(ht(B),x,d),R=X.clone(),A=dt(o),y=({dragHandler:st,scrollBody:Lt,scrollBounds:Nt,options:{loop:xt}})=>{xt||Nt.constrain(st.pointerDown()),Lt.seek()},j=({scrollBody:st,translate:Lt,location:Nt,offsetLocation:xt,previousLocation:rn,scrollLooper:sn,slideLooper:cn,dragHandler:un,animation:an,eventHandler:Ft,scrollBounds:ln,options:{loop:zt}},Bt)=>{const Rt=st.settled(),fn=!ln.shouldConstrain(),Vt=zt?Rt:Rt&&fn;Vt&&!un.pointerDown()&&(an.stop(),Ft.emit("settle")),Vt||Ft.emit("scroll");const dn=Nt.get()*Bt+rn.get()*(1-Bt);xt.set(dn),zt&&(sn.loop(st.direction()),cn.loop()),Lt.to(xt.get())},M=vn(r,c,()=>y(Et),st=>j(Et,st)),F=.68,K=B[X.get()],Y=lt(K),tt=lt(K),Z=lt(K),nt=lt(K),at=jn(Y,Z,tt,nt,m,F),vt=Fn(d,B,J,k,nt),wt=zn(M,X,R,at,vt,nt,e),Ot=On(k),Mt=pt(),en=Hn(n,o,e,p),{slideRegistry:kt}=kn(q,g,B,ut,$,A),on=Bn(t,o,kt,wt,at,Mt,e,N),Et={ownerDocument:r,ownerWindow:c,eventHandler:e,containerRect:C,slideRects:O,animation:M,axis:I,dragHandler:En(I,t,r,c,nt,Ln(I,c),Y,M,wt,at,vt,X,e,H,S,l,f,F,T),eventStore:Mt,percentOfView:H,index:X,indexPrevious:R,limit:k,location:Y,offsetLocation:Z,previousLocation:tt,options:s,resizeHandler:In(n,e,c,o,I,b,w),scrollBody:at,scrollBounds:Tn(k,Z,nt,at,H),scrollLooper:Dn(J,k,Z,[Y,Z,tt,nt]),scrollProgress:Ot,scrollSnapList:B.map(Ot.get),scrollSnaps:B,scrollTarget:vt,scrollTo:wt,slideLooper:Rn(I,z,J,_,U,ot,B,Z,o),slideFocus:on,slidesHandler:Vn(n,e,L),slidesInView:en,slideIndexes:A,slideRegistry:kt,slidesToScroll:$,target:nt,translate:Xt(I,n)};return Et}function Kn(){let t={},n;function o(i){n=i}function r(i){return t[i]||[]}function c(i){return r(i).forEach(x=>x(n,i)),u}function s(i,x){return t[i]=r(i).concat([x]),u}function e(i,x){return t[i]=r(i).filter(d=>d!==x),u}function a(){t={}}const u={init:o,emit:c,off:e,on:s,clear:a};return u}const Un={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0,watchFocus:!0};function Qn(t){function n(s,e){return Qt(s,e||{})}function o(s){const e=s.breakpoints||{},a=mt(e).filter(u=>t.matchMedia(u).matches).map(u=>e[u]).reduce((u,i)=>n(u,i),{});return n(s,a)}function r(s){return s.map(e=>mt(e.breakpoints||{})).reduce((e,a)=>e.concat(a),[]).map(t.matchMedia)}return{mergeOptions:n,optionsAtMedia:o,optionsMediaQueries:r}}function Jn(t){let n=[];function o(s,e){return n=e.filter(({options:a})=>t.optionsAtMedia(a).active!==!1),n.forEach(a=>a.init(s,t)),e.reduce((a,u)=>Object.assign(a,{[u.name]:u}),{})}function r(){n=n.filter(s=>s.destroy())}return{init:o,destroy:r}}function yt(t,n,o){const r=t.ownerDocument,c=r.defaultView,s=Qn(c),e=Jn(s),a=pt(),u=Kn(),{mergeOptions:i,optionsAtMedia:x,optionsMediaQueries:d}=s,{on:m,off:S,emit:l}=u,p=I;let h=!1,f,g=i(Un,yt.globalOptions),b=i(g),L=[],T,N,v;function w(){const{container:A,slides:y}=b;N=(Ct(A)?t.querySelector(A):A)||t.children[0];const M=Ct(y)?N.querySelectorAll(y):y;v=[].slice.call(M||N.children)}function C(A){const y=$n(t,N,v,r,c,A,u);if(A.loop&&!y.slideLooper.canLoop()){const j=Object.assign({},A,{loop:!1});return C(j)}return y}function O(A,y){h||(g=i(g,A),b=x(g),L=y||L,w(),f=C(b),d([g,...L.map(({options:j})=>j)]).forEach(j=>a.add(j,"change",I)),b.active&&(f.translate.to(f.location.get()),f.animation.init(),f.slidesInView.init(),f.slideFocus.init(R),f.eventHandler.init(R),f.resizeHandler.init(R),f.slidesHandler.init(R),f.options.loop&&f.slideLooper.loop(),N.offsetParent&&v.length&&f.dragHandler.init(R),T=e.init(R,L)))}function I(A,y){const j=$();z(),O(i({startIndex:j},A),y),u.emit("reInit")}function z(){f.dragHandler.destroy(),f.eventStore.clear(),f.translate.clear(),f.slideLooper.clear(),f.resizeHandler.destroy(),f.slidesHandler.destroy(),f.slidesInView.destroy(),f.animation.destroy(),e.destroy(),a.clear()}function H(){h||(h=!0,a.clear(),z(),u.emit("destroy"),u.clear())}function G(A,y,j){!b.active||h||(f.scrollBody.useBaseFriction().useDuration(y===!0?0:b.duration),f.scrollTo.index(A,j||0))}function q(A){const y=f.index.add(1).get();G(y,A,-1)}function W(A){const y=f.index.add(-1).get();G(y,A,1)}function _(){return f.index.add(1).get()!==$()}function U(){return f.index.add(-1).get()!==$()}function Q(){return f.scrollSnapList}function it(){return f.scrollProgress.get(f.location.get())}function $(){return f.index.get()}function ot(){return f.indexPrevious.get()}function rt(){return f.slidesInView.get()}function J(){return f.slidesInView.get(!1)}function ct(){return T}function ut(){return f}function B(){return t}function k(){return N}function X(){return v}const R={canScrollNext:_,canScrollPrev:U,containerNode:k,internalEngine:ut,destroy:H,off:S,on:m,emit:l,plugins:ct,previousScrollSnap:ot,reInit:p,rootNode:B,scrollNext:q,scrollPrev:W,scrollProgress:it,scrollSnapList:Q,scrollTo:G,selectedScrollSnap:$,slideNodes:X,slidesInView:rt,slidesNotInView:J};return O(n,o),setTimeout(()=>u.emit("init"),0),R}yt.globalOptions=void 0;function Dt(t={},n=[]){const o=P.useRef(t),r=P.useRef(n),[c,s]=P.useState(),[e,a]=P.useState(),u=P.useCallback(()=>{c&&c.reInit(o.current,r.current)},[c]);return P.useEffect(()=>{jt(o.current,t)||(o.current=t,u())},[t,u]),P.useEffect(()=>{xn(r.current,n)||(r.current=n,u())},[n,u]),P.useEffect(()=>{if(hn()&&e){yt.globalOptions=Dt.globalOptions;const i=yt(e,o.current,r.current);return s(i),()=>i.destroy()}else s(void 0)},[e,s]),[a,c]}Dt.globalOptions=void 0;/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xn=Kt("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yn=Kt("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]),Yt=P.createContext(null);function bt(){const t=P.useContext(Yt);if(!t)throw new Error("useCarousel must be used within a <Carousel />");return t}const _t=P.forwardRef(({orientation:t="horizontal",opts:n,setApi:o,plugins:r,className:c,children:s,...e},a)=>{const[u,i]=Dt({...n,axis:t==="horizontal"?"x":"y"},r),[x,d]=P.useState(!1),[m,S]=P.useState(!1),l=P.useCallback(g=>{g&&(d(g.canScrollPrev()),S(g.canScrollNext()))},[]),p=P.useCallback(()=>{i==null||i.scrollPrev()},[i]),h=P.useCallback(()=>{i==null||i.scrollNext()},[i]),f=P.useCallback(g=>{g.key==="ArrowLeft"?(g.preventDefault(),p()):g.key==="ArrowRight"&&(g.preventDefault(),h())},[p,h]);return P.useEffect(()=>{!i||!o||o(i)},[i,o]),P.useEffect(()=>{if(i)return l(i),i.on("reInit",l),i.on("select",l),()=>{i==null||i.off("select",l)}},[i,l]),E.jsx(Yt.Provider,{value:{carouselRef:u,api:i,opts:n,orientation:t||((n==null?void 0:n.axis)==="y"?"vertical":"horizontal"),scrollPrev:p,scrollNext:h,canScrollPrev:x,canScrollNext:m},children:E.jsx("div",{ref:a,onKeyDownCapture:f,className:gt("relative",c),role:"region","aria-roledescription":"carousel",...e,children:s})})});_t.displayName="Carousel";const Zt=P.forwardRef(({className:t,...n},o)=>{const{carouselRef:r,orientation:c}=bt();return E.jsx("div",{ref:r,className:"overflow-hidden",children:E.jsx("div",{ref:o,className:gt("flex",c==="horizontal"?"-ml-4":"-mt-4 flex-col",t),...n})})});Zt.displayName="CarouselContent";const Wt=P.forwardRef(({className:t,...n},o)=>{const{orientation:r}=bt();return E.jsx("div",{ref:o,role:"group","aria-roledescription":"slide",className:gt("min-w-0 shrink-0 grow-0 basis-full",r==="horizontal"?"pl-4":"pt-4",t),...n})});Wt.displayName="CarouselItem";const tn=P.forwardRef(({className:t,variant:n="outline",size:o="icon",...r},c)=>{const{orientation:s,scrollPrev:e,canScrollPrev:a}=bt();return E.jsxs(Ut,{ref:c,variant:n,size:o,className:gt("absolute  h-8 w-8 rounded-full",s==="horizontal"?"-left-12 top-1/2 -translate-y-1/2":"-top-12 left-1/2 -translate-x-1/2 rotate-90",t),disabled:!a,onClick:e,...r,children:[E.jsx(Xn,{className:"h-4 w-4"}),E.jsx("span",{className:"sr-only",children:"Previous slide"})]})});tn.displayName="CarouselPrevious";const nn=P.forwardRef(({className:t,variant:n="outline",size:o="icon",...r},c)=>{const{orientation:s,scrollNext:e,canScrollNext:a}=bt();return E.jsxs(Ut,{ref:c,variant:n,size:o,className:gt("absolute h-8 w-8 rounded-full",s==="horizontal"?"-right-12 top-1/2 -translate-y-1/2":"-bottom-12 left-1/2 -translate-x-1/2 rotate-90",t),disabled:!a,onClick:e,...r,children:[E.jsx(Yn,{className:"h-4 w-4"}),E.jsx("span",{className:"sr-only",children:"Next slide"})]})});nn.displayName="CarouselNext";const _n=["/sam1/scenario.png","/sam1/scenarios.png","/sam1/debrief-log.png","/sam1/emitter-control.png"],Zn=()=>E.jsx("div",{className:"w-full py-20 lg:py-40",children:E.jsx("div",{className:"container mx-auto",children:E.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 justify-end items-end  gap-10",children:[E.jsxs("div",{className:"flex gap-4 flex-col items-start",children:[E.jsx("div",{children:E.jsx(pn,{children:"SAM1"})}),E.jsxs("div",{className:"flex gap-2 flex-col",children:[E.jsx("h2",{className:"text-xl md:text-3xl lg:text-5xl tracking-tighter lg:max-w-xl font-regular text-left",children:"Run prebuild scenarios for your pilots in realtime"}),E.jsx("p",{className:"text-lg  max-w-xl lg:max-w-sm leading-relaxed tracking-tight text-muted-foreground  text-left",children:"Build complex scenarios and play them in realtime. No more man-in-the-woods-to-flip-a-switch. Offload work for your SAM-personell, increased responstime for pilots and do more complex scenarios."})]})]}),E.jsx("div",{className:"w-full max-w-full px-6",children:E.jsxs(_t,{children:[E.jsx(Zt,{children:_n.map((t,n)=>E.jsx(Wt,{children:E.jsx("div",{className:"flex rounded-md aspect-video bg-muted items-center justify-center p-6",children:E.jsx("img",{src:t,alt:`Platform Screenshot ${n+1}`,className:"w-full h-auto object-contain"})})},n))}),E.jsx(tn,{}),E.jsx(nn,{})]})})]})})}),ee=()=>E.jsx(mn,{children:E.jsx(Zn,{})});export{ee as default};
