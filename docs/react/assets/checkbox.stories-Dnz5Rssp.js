import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{n as a}from"./timepicker-6LgBjDoY.js";const r={title:"Checkbox",component:a,args:{size:"small",checked:void 0,disabled:!1,children:"Label"},argTypes:{size:{description:"Set the size of the Checkbox.",table:{category:"Checkbox",type:{summary:"large | medium | small"},defaultValue:{summary:"small"}},control:"radio",options:["large","medium","small"]},checked:{description:"Set the checked state of the Checkbox.",table:{category:"Checkbox",type:{summary:"boolean | indeterminate | undefined"},defaultValue:{summary:"undefined"}},control:"select",options:[!0,!1,"indeterminate",void 0]},children:{description:"Set the children of the Checkbox.",table:{category:"Checkbox",type:{summary:"React.ReactNode"}},control:"text"},disabled:{description:"Set whether the Checkbox is in a disabled state.",table:{category:"Checkbox",defaultValue:{summary:"false"}},control:"boolean"}}},c={},d=()=>e.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[e.jsxs("div",{className:"grid h-fit gap-4",children:[e.jsx("p",{children:"default (false)"}),e.jsx(a,{})]}),e.jsxs("div",{className:"grid h-fit gap-4",children:[e.jsx("p",{children:"checked"}),e.jsx(a,{checked:!0})]}),e.jsxs("div",{className:"grid h-fit gap-4",children:[e.jsx("p",{children:"indeterminate"}),e.jsx(a,{checked:"indeterminate"})]})]}),i=()=>e.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[e.jsxs("div",{className:"grid h-fit gap-4",children:[e.jsx("p",{children:"default (false)"}),e.jsx(a,{disabled:!0})]}),e.jsxs("div",{className:"grid h-fit gap-4",children:[e.jsx("p",{children:"checked"}),e.jsx(a,{checked:!0,disabled:!0})]}),e.jsxs("div",{className:"grid h-fit gap-4",children:[e.jsx("p",{children:"indeterminate"}),e.jsx(a,{checked:"indeterminate",disabled:!0})]})]}),s=()=>e.jsxs("div",{className:"grid grid-cols-[repeat(3,max-content)] gap-4",children:[e.jsx(a,{size:"medium",children:"Label"}),e.jsx(a,{size:"medium",checked:!0,children:"Label"}),e.jsx(a,{size:"medium",checked:"indeterminate",children:"Label"}),e.jsx(a,{size:"medium",disabled:!0,children:"Label"}),e.jsx(a,{size:"medium",checked:!0,disabled:!0,children:"Label"}),e.jsx(a,{size:"medium",checked:"indeterminate",disabled:!0,children:"Label"})]});d.__docgenInfo={description:"",methods:[],displayName:"Checked"};i.__docgenInfo={description:"",methods:[],displayName:"Disabled"};s.__docgenInfo={description:"",methods:[],displayName:"With_Label"};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"{}",...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  return <div className="grid grid-cols-3 gap-4">
      <div className="grid h-fit gap-4">
        <p>default (false)</p>
        <Checkbox />
      </div>
      <div className="grid h-fit gap-4">
        <p>checked</p>
        <Checkbox checked />
      </div>
      <div className="grid h-fit gap-4">
        <p>indeterminate</p>
        <Checkbox checked="indeterminate" />
      </div>
    </div>;
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  return <div className="grid grid-cols-3 gap-4">
      <div className="grid h-fit gap-4">
        <p>default (false)</p>
        <Checkbox disabled />
      </div>
      <div className="grid h-fit gap-4">
        <p>checked</p>
        <Checkbox checked disabled />
      </div>
      <div className="grid h-fit gap-4">
        <p>indeterminate</p>
        <Checkbox checked="indeterminate" disabled />
      </div>
    </div>;
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  return <div className="grid grid-cols-[repeat(3,max-content)] gap-4">
      <Checkbox size="medium">Label</Checkbox>
      <Checkbox size="medium" checked>
        Label
      </Checkbox>
      <Checkbox size="medium" checked="indeterminate">
        Label
      </Checkbox>
      <Checkbox size="medium" disabled>
        Label
      </Checkbox>
      <Checkbox size="medium" checked disabled>
        Label
      </Checkbox>
      <Checkbox size="medium" checked="indeterminate" disabled>
        Label
      </Checkbox>
    </div>;
}`,...s.parameters?.docs?.source}}};const t=["Default","Checked","Disabled","With_Label"],o=Object.freeze(Object.defineProperty({__proto__:null,Checked:d,Default:c,Disabled:i,With_Label:s,__namedExportsOrder:t,default:r},Symbol.toStringTag,{value:"Module"}));export{o as C,c as D,s as W,d as a,i as b};
