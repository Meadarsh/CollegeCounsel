import{a0 as V,r as P,a as U,g as w,a1 as N,s as y,l as u,_ as a,a2 as T,u as G,b as A,j as i,c as Z,d as K,i as B,a3 as q,a4 as O,Q,w as H,B as J,a5 as X,q as L,a6 as Y,S as k,C as oo,T as E,L as D,e as $,D as to,a7 as W,Z as io,I as no,W as ro}from"./index-BTFajaqk.js";function so(){const t=V();return P.useMemo(()=>({back:()=>t(-1),forward:()=>t(1),reload:()=>window.location.reload(),push:n=>t(n),replace:n=>t(n,{replace:!0})}),[t])}function ao(t){return U("MuiCircularProgress",t)}w("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);const eo=["className","color","disableShrink","size","style","thickness","value","variant"];let R=t=>t,F,_,z,S;const g=44,lo=N(F||(F=R`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),co=N(_||(_=R`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),go=t=>{const{classes:o,variant:n,color:r,disableShrink:e}=t,s={root:["root",n,`color${u(r)}`],svg:["svg"],circle:["circle",`circle${u(n)}`,e&&"circleDisableShrink"]};return K(s,ao,o)},uo=y("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:n}=t;return[o.root,o[n.variant],o[`color${u(n.color)}`]]}})(({ownerState:t,theme:o})=>a({display:"inline-block"},t.variant==="determinate"&&{transition:o.transitions.create("transform")},t.color!=="inherit"&&{color:(o.vars||o).palette[t.color].main}),({ownerState:t})=>t.variant==="indeterminate"&&T(z||(z=R`
      animation: ${0} 1.4s linear infinite;
    `),lo)),ho=y("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(t,o)=>o.svg})({display:"block"}),xo=y("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(t,o)=>{const{ownerState:n}=t;return[o.circle,o[`circle${u(n.variant)}`],n.disableShrink&&o.circleDisableShrink]}})(({ownerState:t,theme:o})=>a({stroke:"currentColor"},t.variant==="determinate"&&{transition:o.transitions.create("stroke-dashoffset")},t.variant==="indeterminate"&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}),({ownerState:t})=>t.variant==="indeterminate"&&!t.disableShrink&&T(S||(S=R`
      animation: ${0} 1.4s ease-in-out infinite;
    `),co)),po=P.forwardRef(function(o,n){const r=G({props:o,name:"MuiCircularProgress"}),{className:e,color:s="primary",disableShrink:b=!1,size:h=40,style:M,thickness:d=3.6,value:x=0,variant:j="indeterminate"}=r,C=A(r,eo),p=a({},r,{color:s,disableShrink:b,size:h,thickness:d,value:x,variant:j}),f=go(p),v={},c={},m={};if(j==="determinate"){const I=2*Math.PI*((g-d)/2);v.strokeDasharray=I.toFixed(3),m["aria-valuenow"]=Math.round(x),v.strokeDashoffset=`${((100-x)/100*I).toFixed(3)}px`,c.transform="rotate(-90deg)"}return i.jsx(uo,a({className:Z(f.root,e),style:a({width:h,height:h},c,M),ownerState:p,ref:n,role:"progressbar"},m,C,{children:i.jsx(ho,{className:f.svg,ownerState:p,viewBox:`${g/2} ${g/2} ${g} ${g}`,children:i.jsx(xo,{className:f.circle,style:v,ownerState:p,cx:g,cy:g,r:(g-d)/2,fill:"none",strokeWidth:d})})}))}),fo=po;function vo(t){return U("MuiLoadingButton",t)}const mo=w("MuiLoadingButton",["root","loading","loadingIndicator","loadingIndicatorCenter","loadingIndicatorStart","loadingIndicatorEnd","endIconLoadingEnd","startIconLoadingStart"]),l=mo,Io=["children","disabled","id","loading","loadingIndicator","loadingPosition","variant"],Po=t=>{const{loading:o,loadingPosition:n,classes:r}=t,e={root:["root",o&&"loading"],startIcon:[o&&`startIconLoading${u(n)}`],endIcon:[o&&`endIconLoading${u(n)}`],loadingIndicator:["loadingIndicator",o&&`loadingIndicator${u(n)}`]},s=K(e,vo,r);return a({},r,s)},yo=t=>t!=="ownerState"&&t!=="theme"&&t!=="sx"&&t!=="as"&&t!=="classes",bo=y(B,{shouldForwardProp:t=>yo(t)||t==="classes",name:"MuiLoadingButton",slot:"Root",overridesResolver:(t,o)=>[o.root,o.startIconLoadingStart&&{[`& .${l.startIconLoadingStart}`]:o.startIconLoadingStart},o.endIconLoadingEnd&&{[`& .${l.endIconLoadingEnd}`]:o.endIconLoadingEnd}]})(({ownerState:t,theme:o})=>a({[`& .${l.startIconLoadingStart}, & .${l.endIconLoadingEnd}`]:{transition:o.transitions.create(["opacity"],{duration:o.transitions.duration.short}),opacity:0}},t.loadingPosition==="center"&&{transition:o.transitions.create(["background-color","box-shadow","border-color"],{duration:o.transitions.duration.short}),[`&.${l.loading}`]:{color:"transparent"}},t.loadingPosition==="start"&&t.fullWidth&&{[`& .${l.startIconLoadingStart}, & .${l.endIconLoadingEnd}`]:{transition:o.transitions.create(["opacity"],{duration:o.transitions.duration.short}),opacity:0,marginRight:-8}},t.loadingPosition==="end"&&t.fullWidth&&{[`& .${l.startIconLoadingStart}, & .${l.endIconLoadingEnd}`]:{transition:o.transitions.create(["opacity"],{duration:o.transitions.duration.short}),opacity:0,marginLeft:-8}})),jo=y("span",{name:"MuiLoadingButton",slot:"LoadingIndicator",overridesResolver:(t,o)=>{const{ownerState:n}=t;return[o.loadingIndicator,o[`loadingIndicator${u(n.loadingPosition)}`]]}})(({theme:t,ownerState:o})=>a({position:"absolute",visibility:"visible",display:"flex"},o.loadingPosition==="start"&&(o.variant==="outlined"||o.variant==="contained")&&{left:o.size==="small"?10:14},o.loadingPosition==="start"&&o.variant==="text"&&{left:6},o.loadingPosition==="center"&&{left:"50%",transform:"translate(-50%)",color:(t.vars||t).palette.action.disabled},o.loadingPosition==="end"&&(o.variant==="outlined"||o.variant==="contained")&&{right:o.size==="small"?10:14},o.loadingPosition==="end"&&o.variant==="text"&&{right:6},o.loadingPosition==="start"&&o.fullWidth&&{position:"relative",left:-10},o.loadingPosition==="end"&&o.fullWidth&&{position:"relative",right:-10})),Co=P.forwardRef(function(o,n){const r=P.useContext(q),e=O(r,o),s=G({props:e,name:"MuiLoadingButton"}),{children:b,disabled:h=!1,id:M,loading:d=!1,loadingIndicator:x,loadingPosition:j="center",variant:C="text"}=s,p=A(s,Io),f=Q(M),v=x??i.jsx(fo,{"aria-labelledby":f,color:"inherit",size:16}),c=a({},s,{disabled:h,loading:d,loadingIndicator:v,loadingPosition:j,variant:C}),m=Po(c),I=d?i.jsx(jo,{className:m.loadingIndicator,ownerState:c,children:v}):null;return i.jsxs(bo,a({disabled:h||d,id:f,ref:n},p,{variant:C,classes:m,ownerState:c,children:[c.loadingPosition==="end"?b:I,c.loadingPosition==="end"?I:b]}))}),Lo=Co;function ko(){const t=H(),o=so(),[n,r]=P.useState(!1),e=()=>{o.push("/dashboard")},s=i.jsxs(i.Fragment,{children:[i.jsxs(k,{spacing:3,children:[i.jsx(W,{name:"email",label:"Email address"}),i.jsx(W,{name:"password",label:"Password",type:n?"text":"password",InputProps:{endAdornment:i.jsx(io,{position:"end",children:i.jsx(no,{onClick:()=>r(!n),edge:"end",children:i.jsx($,{icon:n?"eva:eye-fill":"eva:eye-off-fill"})})})}})]}),i.jsx(k,{direction:"row",alignItems:"center",justifyContent:"flex-end",sx:{my:3},children:i.jsx(D,{variant:"subtitle2",underline:"hover",children:"Forgot password?"})}),i.jsx(Lo,{fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"inherit",onClick:e,children:"Login"})]});return i.jsxs(J,{sx:{...X({color:L(t.palette.background.default,.9),imgUrl:"/assets/background/overlay_4.jpg"}),height:1},children:[i.jsx(Y,{sx:{position:"fixed",top:{xs:16,md:24},left:{xs:16,md:24}}}),i.jsx(k,{alignItems:"center",justifyContent:"center",sx:{height:1},children:i.jsxs(oo,{sx:{p:5,width:1,maxWidth:420},children:[i.jsx(E,{variant:"h4",children:"Sign in to College councel"}),i.jsxs(E,{variant:"body2",sx:{mt:2,mb:5},children:["Don’t have an account?",i.jsx(D,{variant:"subtitle2",sx:{ml:.5},children:"Get started"})]}),i.jsxs(k,{direction:"row",spacing:2,children:[i.jsx(B,{fullWidth:!0,size:"large",color:"inherit",variant:"outlined",sx:{borderColor:L(t.palette.grey[500],.16)},children:i.jsx($,{icon:"eva:google-fill",color:"#DF3E30"})}),i.jsx(B,{fullWidth:!0,size:"large",color:"inherit",variant:"outlined",sx:{borderColor:L(t.palette.grey[500],.16)},children:i.jsx($,{icon:"eva:facebook-fill",color:"#1877F2"})}),i.jsx(B,{fullWidth:!0,size:"large",color:"inherit",variant:"outlined",sx:{borderColor:L(t.palette.grey[500],.16)},children:i.jsx($,{icon:"eva:twitter-fill",color:"#1C9CEA"})})]}),i.jsx(to,{sx:{my:3},children:i.jsx(E,{variant:"body2",sx:{color:"text.secondary"},children:"OR"})}),s]})})]})}function Bo(){return i.jsxs(i.Fragment,{children:[i.jsx(ro,{children:i.jsx("title",{children:" Login | Minimal UI "})}),i.jsx(ko,{})]})}export{Bo as default};
