import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as g}from"./index-MPVjHJeJ.js";import{be as n,bf as a,bg as p,B as m,bh as c}from"./timepicker-6LgBjDoY.js";const h={title:"Tooltip",component:n,args:{side:"top",textAlign:"center",align:"center",title:"Title",children:"Label"},argTypes:{side:{description:"Set the side where the Tooltip appears.",table:{category:"Tooltip",type:{summary:"undefined | top | right | bottom | left"}},control:"radio",options:["top","right","bottom","left"]},textAlign:{description:"Set the text alignment of the Tooltip.",table:{category:"Tooltip",type:{summary:"left | center | right"},defaultValue:{summary:"left"}},control:"radio",options:["left","center","right"]},align:{description:"Set the alignment of the Tooltip bubble.",table:{category:"Tooltip",type:{summary:"start | center | end"},defaultValue:{summary:"center"}},control:"radio",options:["start","center","end"]},title:{description:"Set the title of the Tooltip.",table:{category:"Tooltip",type:{summary:"React.ReactNode"}},control:"text"},children:{description:"Set the children of the Tooltip.",table:{category:"Tooltip",type:{summary:"React.ReactNode"}},control:"text"}},decorators:t=>e.jsx(t,{}),render:t=>{const[o,T]=g.useState(!0);return e.jsxs("div",{className:"grid h-28 grid-cols-[repeat(2,max-content)] items-center justify-center gap-2",children:[e.jsx(a,{children:e.jsxs(n,{open:o,children:[e.jsx(p,{asChild:!0,children:e.jsx(m,{variant:"outline",onClick:()=>T(!o),children:"Click"})}),e.jsx(c,{...t})]})}),e.jsx(a,{children:e.jsxs(n,{children:[e.jsx(p,{asChild:!0,children:e.jsx(m,{variant:"outline",children:"Hover"})}),e.jsx(c,{...t})]})})]})}},d={},r=()=>{const[t,o]=g.useState(!0);return e.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"7.5rem"},children:e.jsx(a,{children:e.jsxs(n,{open:t,children:[e.jsx(p,{onClick:()=>o(!t),children:"Trigger"}),e.jsx(c,{side:"right",title:"Title",children:"Label"})]})})})},i=()=>{const[t,o]=g.useState(!0);return e.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"7.5rem"},children:e.jsx(a,{children:e.jsxs(n,{open:t,children:[e.jsx(p,{onClick:()=>o(!t),children:"Trigger"}),e.jsx(c,{side:"bottom",title:"Title",children:"Label"})]})})})},s=()=>{const[t,o]=g.useState(!0);return e.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"7.5rem"},children:e.jsx(a,{children:e.jsxs(n,{open:t,children:[e.jsx(p,{onClick:()=>o(!t),children:"Trigger"}),e.jsx(c,{side:"left",title:"Title",children:"Label"})]})})})},l=()=>{const[t,o]=g.useState(!0);return e.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"7.5rem"},children:e.jsx(a,{children:e.jsxs(n,{open:t,children:[e.jsx(p,{onClick:()=>o(!t),children:"Trigger"}),e.jsx(c,{side:"top",title:"Title",children:"Label"})]})})})};r.__docgenInfo={description:"",methods:[],displayName:"Right"};i.__docgenInfo={description:"",methods:[],displayName:"Bottom"};s.__docgenInfo={description:"",methods:[],displayName:"Left"};l.__docgenInfo={description:"",methods:[],displayName:"Top"};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{}",...d.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  const [open, setOpen] = useState(true);
  return <div style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "7.5rem"
  }}>
      <TooltipProvider>
        <Tooltip open={open}>
          <TooltipTrigger onClick={() => setOpen(!open)}>
            Trigger
          </TooltipTrigger>
          <TooltipContent side="right" title="Title">
            Label
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>;
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  const [open, setOpen] = useState(true);
  return <div style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "7.5rem"
  }}>
      <TooltipProvider>
        <Tooltip open={open}>
          <TooltipTrigger onClick={() => setOpen(!open)}>
            Trigger
          </TooltipTrigger>
          <TooltipContent side="bottom" title="Title">
            Label
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>;
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  const [open, setOpen] = useState(true);
  return <div style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "7.5rem"
  }}>
      <TooltipProvider>
        <Tooltip open={open}>
          <TooltipTrigger onClick={() => setOpen(!open)}>
            Trigger
          </TooltipTrigger>
          <TooltipContent side="left" title="Title">
            Label
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>;
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
  const [open, setOpen] = useState(true);
  return <div style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "7.5rem"
  }}>
      <TooltipProvider>
        <Tooltip open={open}>
          <TooltipTrigger onClick={() => setOpen(!open)}>
            Trigger
          </TooltipTrigger>
          <TooltipContent side="top" title="Title">
            Label
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>;
}`,...l.parameters?.docs?.source}}};const u=["Default","Right","Bottom","Left","Top"],j=Object.freeze(Object.defineProperty({__proto__:null,Bottom:i,Default:d,Left:s,Right:r,Top:l,__namedExportsOrder:u,default:h},Symbol.toStringTag,{value:"Module"}));export{i as B,d as D,s as L,r as R,j as T,l as a};
