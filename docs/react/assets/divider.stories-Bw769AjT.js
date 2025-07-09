import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{D as t}from"./timepicker-6LgBjDoY.js";const l={title:"Divider",component:t,args:{variant:"bold",orientation:"horizontal",indent:0},argTypes:{variant:{description:"Set the variant of the Divider.",table:{category:"Divider",type:{summary:"bold | subtle"},defaultValue:{summary:"bold"}},control:"radio",options:["bold","subtle"]},orientation:{description:"Set the orientation of the Divider.",table:{category:"Divider",type:{summary:"horizontal | vertical"},defaultValue:{summary:"horizontal"}},control:"radio",options:["horizontal","vertical"]},indent:{description:"Set the indent of the Divider.",table:{category:"Divider",type:{summary:"0 | 8 | 16 | 24"},defaultValue:{summary:"0"}},control:"radio",options:[0,8,16,24]},decorative:{table:{disable:!0}}},render:s=>e.jsx("div",{style:{display:"flex",height:"100px"},children:e.jsx(t,{...s})})},a={},o={args:{variant:"bold"}},n={args:{variant:"subtle"}},r=()=>e.jsxs("div",{className:"flex h-6 items-center justify-center space-x-4 text-sm",children:[e.jsx(t,{variant:"bold",orientation:"vertical"}),e.jsx("div",{children:"Item"}),e.jsx(t,{variant:"subtle",orientation:"vertical"}),e.jsx("div",{children:"Item"}),e.jsx(t,{variant:"subtle",orientation:"vertical"}),e.jsx("div",{children:"Item"}),e.jsx(t,{variant:"bold",orientation:"vertical"})]}),i=()=>e.jsxs("div",{className:"mx-10 flex w-16 flex-col items-center justify-center space-y-2 text-center text-sm",children:[e.jsx(t,{variant:"bold",orientation:"horizontal"}),e.jsx("div",{children:"Item"}),e.jsx(t,{variant:"subtle",orientation:"horizontal"}),e.jsx("div",{children:"Item"}),e.jsx(t,{variant:"subtle",orientation:"horizontal"}),e.jsx("div",{children:"Item"}),e.jsx(t,{variant:"bold",orientation:"horizontal"})]});r.__docgenInfo={description:"",methods:[],displayName:"Vertical"};i.__docgenInfo={description:"",methods:[],displayName:"Horizontal"};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "bold"
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "subtle"
  }
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => <div className="flex h-6 items-center justify-center space-x-4 text-sm">
    <Divider variant="bold" orientation="vertical" />
    <div>Item</div>
    <Divider variant="subtle" orientation="vertical" />
    <div>Item</div>
    <Divider variant="subtle" orientation="vertical" />
    <div>Item</div>
    <Divider variant="bold" orientation="vertical" />
  </div>`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => <div className="mx-10 flex w-16 flex-col items-center justify-center space-y-2 text-center text-sm">
    <Divider variant="bold" orientation="horizontal" />
    <div>Item</div>
    <Divider variant="subtle" orientation="horizontal" />
    <div>Item</div>
    <Divider variant="subtle" orientation="horizontal" />
    <div>Item</div>
    <Divider variant="bold" orientation="horizontal" />
  </div>`,...i.parameters?.docs?.source}}};const d=["Default","Bold","Subtle","Vertical","Horizontal"],m=Object.freeze(Object.defineProperty({__proto__:null,Bold:o,Default:a,Horizontal:i,Subtle:n,Vertical:r,__namedExportsOrder:d,default:l},Symbol.toStringTag,{value:"Module"}));export{o as B,a as D,i as H,n as S,r as V,m as a};
