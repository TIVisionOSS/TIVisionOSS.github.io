(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9781],{9036:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var s=r(5531);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=(0,s.Z)("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]])},8477:function(e,t,r){Promise.resolve().then(r.bind(r,1090))},1090:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return p}});var s=r(7437),n=r(2265),i=r(1396),a=r.n(i),o=r(3023),l=r(1908),d=r(6672),u=r(9036),c=r(2621),f=r(3431),m=r(2601);function p(){let[e,t]=(0,n.useState)(""),[r,i]=(0,n.useState)(!1),{toast:p}=(0,c.pm)(),h=async r=>{r.preventDefault(),i(!0);try{await f.ZP.send(m.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,m.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,{to_email:e,template_type:"reset_password"},m.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY),p({title:"Reset email sent",description:"Please check your email for password reset instructions."}),t("")}catch(e){p({title:"Error sending reset email",description:"Please try again later.",variant:"destructive"})}finally{i(!1)}};return(0,s.jsx)("div",{className:"min-h-[calc(100vh-4rem)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8",children:(0,s.jsxs)("div",{className:"w-full max-w-md space-y-8",children:[(0,s.jsxs)("div",{className:"text-center",children:[(0,s.jsxs)(a(),{href:"/",className:"inline-flex items-center gap-2 text-orange-500 hover:opacity-90",children:[(0,s.jsx)(u.Z,{className:"h-8 w-8"}),(0,s.jsx)("span",{className:"text-2xl font-bold",children:"Tonmoy I&V"})]}),(0,s.jsx)("h2",{className:"mt-6 text-3xl font-bold tracking-tight",children:"Reset your password"}),(0,s.jsx)("p",{className:"mt-2 text-sm text-muted-foreground",children:"Enter your email address and we'll send you instructions to reset your password."})]}),(0,s.jsxs)("form",{className:"mt-8 space-y-6",onSubmit:h,children:[(0,s.jsxs)("div",{children:[(0,s.jsx)(d._,{htmlFor:"email",children:"Email address"}),(0,s.jsx)(l.I,{id:"email",name:"email",type:"email",autoComplete:"email",required:!0,value:e,onChange:e=>t(e.target.value),className:"mt-1",placeholder:"Enter your email"})]}),(0,s.jsx)(o.z,{type:"submit",className:"w-full cloudflare-button",disabled:r,children:r?"Sending reset instructions...":"Reset password"}),(0,s.jsx)("div",{className:"text-center",children:(0,s.jsx)(a(),{href:"/login",className:"text-sm font-medium text-orange-500 hover:text-orange-600",children:"Return to login"})})]})]})})}},3023:function(e,t,r){"use strict";r.d(t,{d:function(){return l},z:function(){return d}});var s=r(7437),n=r(2265),i=r(7256),a=r(9213),o=r(9311);let l=(0,a.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),d=n.forwardRef((e,t)=>{let{className:r,variant:n,size:a,asChild:d=!1,...u}=e,c=d?i.g7:"button";return(0,s.jsx)(c,{className:(0,o.cn)(l({variant:n,size:a,className:r})),ref:t,...u})});d.displayName="Button"},1908:function(e,t,r){"use strict";r.d(t,{I:function(){return a}});var s=r(7437),n=r(2265),i=r(9311);let a=n.forwardRef((e,t)=>{let{className:r,type:n,...a}=e;return(0,s.jsx)("input",{type:n,className:(0,i.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",r),ref:t,...a})});a.displayName="Input"},6672:function(e,t,r){"use strict";r.d(t,{_:function(){return d}});var s=r(7437),n=r(2265),i=r(6743),a=r(9213),o=r(9311);let l=(0,a.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),d=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,s.jsx)(i.f,{ref:t,className:(0,o.cn)(l(),r),...n})});d.displayName=i.f.displayName},2621:function(e,t,r){"use strict";r.d(t,{pm:function(){return f}});var s=r(2265);let n=0,i=new Map,a=e=>{if(i.has(e))return;let t=setTimeout(()=>{i.delete(e),u({type:"REMOVE_TOAST",toastId:e})},1e6);i.set(e,t)},o=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,1)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case"DISMISS_TOAST":{let{toastId:r}=t;return r?a(r):e.toasts.forEach(e=>{a(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===r||void 0===r?{...e,open:!1}:e)}}case"REMOVE_TOAST":if(void 0===t.toastId)return{...e,toasts:[]};return{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)}}},l=[],d={toasts:[]};function u(e){d=o(d,e),l.forEach(e=>{e(d)})}function c(e){let{...t}=e,r=(n=(n+1)%Number.MAX_SAFE_INTEGER).toString(),s=()=>u({type:"DISMISS_TOAST",toastId:r});return u({type:"ADD_TOAST",toast:{...t,id:r,open:!0,onOpenChange:e=>{e||s()}}}),{id:r,dismiss:s,update:e=>u({type:"UPDATE_TOAST",toast:{...e,id:r}})}}function f(){let[e,t]=s.useState(d);return s.useEffect(()=>(l.push(t),()=>{let e=l.indexOf(t);e>-1&&l.splice(e,1)}),[e]),{...e,toast:c,dismiss:e=>u({type:"DISMISS_TOAST",toastId:e})}}},9311:function(e,t,r){"use strict";r.d(t,{cn:function(){return i}});var s=r(7042),n=r(4769);function i(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.m6)((0,s.W)(t))}},1396:function(e,t,r){e.exports=r(4724)}},function(e){e.O(0,[4724,4395,8556,2971,7864,1744],function(){return e(e.s=8477)}),_N_E=e.O()}]);