import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{A as a,a as o,b as r,c as i}from"./timepicker-CL72WzDo.js";const c={AccordionTrigger:{children:"↳ AccordionTrigger: children"},AccordionContent:{children:"↳ AccordionContent: children"}},S={title:"Accordion",component:a,args:{type:"single",divider:!0,border:!1,bgColor:!1,collapsible:!1,iconAlign:"right",iconSize:"small",[c.AccordionTrigger.children]:"Title",[c.AccordionContent.children]:"Description"},argTypes:{type:{description:"Set the type of the Accordion.",table:{category:"Accordion",type:{summary:"single | multiple"}},control:"radio",options:["single","multiple"]},divider:{description:"Set whether to use a divider in the Accordion.",table:{category:"Accordion",defaultValue:{summary:"true"},type:{summary:"boolean"}},control:"boolean"},border:{description:"Set whether to use a border applied to the entire Accordion area.",table:{category:"Accordion",defaultValue:{summary:"false"},type:{summary:"boolean"}},control:"boolean"},bgColor:{description:"Set whether to use a background color to distinguish the trigger area in the Accordion.",table:{category:"Accordion",defaultValue:{summary:"false"},type:{summary:"boolean"}},control:"boolean"},collapsible:{description:"Set whether the trigger in the Accordion can be collapsed.",table:{category:"Accordion",defaultValue:{summary:'type="single": false | type="multiple": true'},type:{summary:"boolean"}},control:"boolean"},iconAlign:{description:"Set the icon alignment in the Accordion.",table:{category:"Accordion",defaultValue:{summary:"right"},type:{summary:"left | right"}},control:"radio",options:["left","right"]},iconSize:{description:"Set the icon size in the Accordion.",table:{category:"Accordion",defaultValue:{summary:"small"},type:{summary:"small | medium | large"}},control:"radio",options:["small","medium","large"]},[c.AccordionTrigger.children]:{description:"Set the children of AccordionTrigger.",table:{category:"AccordionTrigger",type:{summary:"React.ReactNode"}},control:"text"},[c.AccordionContent.children]:{description:"Set the children of AccordionContent.",table:{category:"AccordionContent",type:{summary:"React.ReactNode"}},control:"text"}},render:n=>e.jsxs(a,{type:n.type,divider:n.divider,border:n.border,collapsible:n.type==="single"?n.collapsible:void 0,iconAlign:n.iconAlign,iconSize:n.iconSize,children:[e.jsxs(o,{value:"item-1",children:[e.jsx(r,{children:n[c.AccordionTrigger.children]}),e.jsx(i,{children:n[c.AccordionContent.children]})]}),e.jsxs(o,{value:"item-2",children:[e.jsx(r,{children:n[c.AccordionTrigger.children]}),e.jsx(i,{children:n[c.AccordionContent.children]})]}),e.jsxs(o,{value:"item-3",children:[e.jsx(r,{children:n[c.AccordionTrigger.children]}),e.jsx(i,{children:n[c.AccordionContent.children]})]})]})},m={},t=()=>e.jsxs(a,{type:"multiple",children:[e.jsxs(o,{value:"item-1",children:[e.jsx(r,{children:"Title"}),e.jsx(i,{children:"Description"})]}),e.jsxs(o,{value:"item-2",children:[e.jsx(r,{children:"Title"}),e.jsx(i,{children:"Description"})]}),e.jsxs(o,{value:"item-3",children:[e.jsx(r,{children:"Title"}),e.jsx(i,{children:"Description"})]})]}),d=()=>e.jsxs(a,{type:"multiple",iconAlign:"left",children:[e.jsxs(o,{value:"item-1",children:[e.jsx(r,{children:"Title"}),e.jsx(i,{children:"Description"})]}),e.jsxs(o,{value:"item-2",children:[e.jsx(r,{children:"Title"}),e.jsx(i,{children:"Description"})]}),e.jsxs(o,{value:"item-3",children:[e.jsx(r,{children:"Title"}),e.jsx(i,{children:"Description"})]})]}),l=()=>e.jsxs(a,{type:"multiple",border:!0,className:"rounded-[8px]",children:[e.jsxs(o,{value:"item-1",children:[e.jsx(r,{children:"Title"}),e.jsx(i,{children:"Description"})]}),e.jsxs(o,{value:"item-2",children:[e.jsx(r,{children:"Title"}),e.jsx(i,{children:"Description"})]}),e.jsxs(o,{value:"item-3",children:[e.jsx(r,{children:"Title"}),e.jsx(i,{children:"Description"})]})]}),s=()=>e.jsxs(a,{type:"multiple",bgColor:!0,border:!0,className:"rounded-[8px]",children:[e.jsxs(o,{value:"item-1",children:[e.jsx(r,{children:"Title"}),e.jsx(i,{children:"Description"})]}),e.jsxs(o,{value:"item-2",children:[e.jsx(r,{children:"Title"}),e.jsx(i,{children:"Description"})]}),e.jsxs(o,{value:"item-3",children:[e.jsx(r,{children:"Title"}),e.jsx(i,{children:"Description"})]})]});t.__docgenInfo={description:"",methods:[],displayName:"RightAlign"};d.__docgenInfo={description:"",methods:[],displayName:"LeftAlign"};l.__docgenInfo={description:"",methods:[],displayName:"BorderWithoutBackground"};s.__docgenInfo={description:"",methods:[],displayName:"BorderWithBackground"};var A,p,g;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:"{}",...(g=(p=m.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var u,h,T;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`() => <Accordion type="multiple">
    <AccordionItem value="item-1">
      <AccordionTrigger>Title</AccordionTrigger>
      <AccordionContent>Description</AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger>Title</AccordionTrigger>
      <AccordionContent>Description</AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-3">
      <AccordionTrigger>Title</AccordionTrigger>
      <AccordionContent>Description</AccordionContent>
    </AccordionItem>
  </Accordion>`,...(T=(h=t.parameters)==null?void 0:h.docs)==null?void 0:T.source}}};var x,y,j;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`() => <Accordion type="multiple" iconAlign="left">
    <AccordionItem value="item-1">
      <AccordionTrigger>Title</AccordionTrigger>
      <AccordionContent>Description</AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger>Title</AccordionTrigger>
      <AccordionContent>Description</AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-3">
      <AccordionTrigger>Title</AccordionTrigger>
      <AccordionContent>Description</AccordionContent>
    </AccordionItem>
  </Accordion>`,...(j=(y=d.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var b,C,v;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`() => <Accordion type="multiple" border className="rounded-[8px]">
    <AccordionItem value="item-1">
      <AccordionTrigger>Title</AccordionTrigger>
      <AccordionContent>Description</AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger>Title</AccordionTrigger>
      <AccordionContent>Description</AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-3">
      <AccordionTrigger>Title</AccordionTrigger>
      <AccordionContent>Description</AccordionContent>
    </AccordionItem>
  </Accordion>`,...(v=(C=l.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};var f,I,D;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`() => <Accordion type="multiple" bgColor border className="rounded-[8px]">
    <AccordionItem value="item-1">
      <AccordionTrigger>Title</AccordionTrigger>
      <AccordionContent>Description</AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger>Title</AccordionTrigger>
      <AccordionContent>Description</AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-3">
      <AccordionTrigger>Title</AccordionTrigger>
      <AccordionContent>Description</AccordionContent>
    </AccordionItem>
  </Accordion>`,...(D=(I=s.parameters)==null?void 0:I.docs)==null?void 0:D.source}}};const _=["Default","RightAlign","LeftAlign","BorderWithoutBackground","BorderWithBackground"],R=Object.freeze(Object.defineProperty({__proto__:null,BorderWithBackground:s,BorderWithoutBackground:l,Default:m,LeftAlign:d,RightAlign:t,__namedExportsOrder:_,default:S},Symbol.toStringTag,{value:"Module"}));export{R as A,l as B,m as D,d as L,t as R,s as a};
