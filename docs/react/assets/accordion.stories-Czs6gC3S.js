import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{A as a,a as r,b as i,c}from"./timepicker-6LgBjDoY.js";const o={AccordionItem:{divider:"↳ AccordionItem: divider"},AccordionTrigger:{children:"↳ AccordionTrigger: children"},AccordionContent:{children:"↳ AccordionContent: children"}},A={title:"Accordion",component:a,args:{type:"single",border:!1,iconAlign:"right",iconSize:"small",[o.AccordionItem.divider]:!0,[o.AccordionTrigger.children]:"Title",[o.AccordionContent.children]:"Description"},argTypes:{type:{description:"Set the type of the Accordion.",table:{category:"Accordion",type:{summary:"single | multiple"}},control:"radio",options:["single","multiple"]},border:{description:"Set whether to use a border applied to the entire Accordion area.",table:{category:"Accordion",defaultValue:{summary:"false"},type:{summary:"boolean"}},control:"boolean"},iconAlign:{description:"Set the icon alignment in the Accordion.",table:{category:"Accordion",defaultValue:{summary:"right"},type:{summary:"left | right"}},control:"radio",options:["left","right"]},iconSize:{description:"Set the icon size in the Accordion.",table:{category:"Accordion",defaultValue:{summary:"small"},type:{summary:"small | medium | large"}},control:"radio",options:["small","medium","large"]},[o.AccordionItem.divider]:{description:"Set whether to use a divider in the AccordionItem.",table:{category:"AccordionItem",defaultValue:{summary:"true"},type:{summary:"boolean"}},control:"boolean"},[o.AccordionTrigger.children]:{description:"Set the children of AccordionTrigger.",table:{category:"AccordionTrigger",type:{summary:"React.ReactNode"}},control:"text"},[o.AccordionContent.children]:{description:"Set the children of AccordionContent.",table:{category:"AccordionContent",type:{summary:"React.ReactNode"}},control:"text"},collapsible:{table:{disable:!0}}},render:n=>e.jsxs(a,{type:n.type,border:n.border,iconAlign:n.iconAlign,iconSize:n.iconSize,children:[e.jsxs(r,{value:"item-1",divider:!!n[o.AccordionItem.divider],children:[e.jsx(i,{children:n[o.AccordionTrigger.children]}),e.jsx(c,{children:n[o.AccordionContent.children]})]}),e.jsxs(r,{value:"item-2",divider:!!n[o.AccordionItem.divider],children:[e.jsx(i,{children:n[o.AccordionTrigger.children]}),e.jsx(c,{children:n[o.AccordionContent.children]})]}),e.jsxs(r,{value:"item-3",divider:!!n[o.AccordionItem.divider],children:[e.jsx(i,{children:n[o.AccordionTrigger.children]}),e.jsx(c,{children:n[o.AccordionContent.children]})]})]})},m={},t=()=>e.jsxs(a,{type:"multiple",children:[e.jsxs(r,{value:"item-1",children:[e.jsx(i,{children:"Title"}),e.jsx(c,{children:"Description"})]}),e.jsxs(r,{value:"item-2",children:[e.jsx(i,{children:"Title"}),e.jsx(c,{children:"Description"})]}),e.jsxs(r,{value:"item-3",children:[e.jsx(i,{children:"Title"}),e.jsx(c,{children:"Description"})]})]}),d=()=>e.jsxs(a,{type:"multiple",iconAlign:"left",children:[e.jsxs(r,{value:"item-1",children:[e.jsx(i,{children:"Title"}),e.jsx(c,{children:"Description"})]}),e.jsxs(r,{value:"item-2",children:[e.jsx(i,{children:"Title"}),e.jsx(c,{children:"Description"})]}),e.jsxs(r,{value:"item-3",children:[e.jsx(i,{children:"Title"}),e.jsx(c,{children:"Description"})]})]}),l=()=>e.jsxs(a,{type:"multiple",border:!0,className:"rounded-[8px]",children:[e.jsxs(r,{value:"item-1",children:[e.jsx(i,{children:"Title"}),e.jsx(c,{children:"Description"})]}),e.jsxs(r,{value:"item-2",children:[e.jsx(i,{children:"Title"}),e.jsx(c,{children:"Description"})]}),e.jsxs(r,{value:"item-3",children:[e.jsx(i,{children:"Title"}),e.jsx(c,{children:"Description"})]})]}),s=()=>e.jsxs(a,{type:"multiple",border:!0,className:"rounded-[8px]",children:[e.jsxs(r,{value:"item-1",children:[e.jsx(i,{className:"bg-tertiary",children:"Title"}),e.jsx(c,{children:"Description"})]}),e.jsxs(r,{value:"item-2",children:[e.jsx(i,{className:"bg-tertiary",children:"Title"}),e.jsx(c,{children:"Description"})]}),e.jsxs(r,{value:"item-3",children:[e.jsx(i,{className:"bg-tertiary",children:"Title"}),e.jsx(c,{children:"Description"})]})]});t.__docgenInfo={description:"",methods:[],displayName:"RightAlign"};d.__docgenInfo={description:"",methods:[],displayName:"LeftAlign"};l.__docgenInfo={description:"",methods:[],displayName:"BorderWithoutBackground"};s.__docgenInfo={description:"",methods:[],displayName:"BorderWithBackground"};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => <Accordion type="multiple">
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
  </Accordion>`,...t.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => <Accordion type="multiple" iconAlign="left">
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
  </Accordion>`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => <Accordion type="multiple" border className="rounded-[8px]">
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
  </Accordion>`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => <Accordion type="multiple" border className="rounded-[8px]">
    <AccordionItem value="item-1">
      <AccordionTrigger className="bg-tertiary">Title</AccordionTrigger>
      <AccordionContent>Description</AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger className="bg-tertiary">Title</AccordionTrigger>
      <AccordionContent>Description</AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-3">
      <AccordionTrigger className="bg-tertiary">Title</AccordionTrigger>
      <AccordionContent>Description</AccordionContent>
    </AccordionItem>
  </Accordion>`,...s.parameters?.docs?.source}}};const g=["Default","RightAlign","LeftAlign","BorderWithoutBackground","BorderWithBackground"],h=Object.freeze(Object.defineProperty({__proto__:null,BorderWithBackground:s,BorderWithoutBackground:l,Default:m,LeftAlign:d,RightAlign:t,__namedExportsOrder:g,default:A},Symbol.toStringTag,{value:"Module"}));export{h as A,l as B,m as D,d as L,t as R,s as a};
