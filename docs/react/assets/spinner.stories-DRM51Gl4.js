import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{aY as a}from"./timepicker-6LgBjDoY.js";const i={title:"Spinner",component:a,argTypes:{size:{description:"Set the size of the Spinner.",table:{category:"Spinner",type:{summary:"small | medium | large"},defaultValue:{summary:"medium"}},control:"radio",options:["small","medium","large"]},color:{description:"Set the color of the Spinner.",table:{category:"Spinner",type:{summary:"string"},defaultValue:{summary:"currentColor"}},control:"text"}}},s={},r=()=>e.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[e.jsxs("div",{className:"grid gap-4",children:[e.jsx("p",{children:"Small"}),e.jsx(a,{size:"small"})]}),e.jsxs("div",{className:"grid gap-4",children:[e.jsx("p",{children:"Medium"}),e.jsx(a,{size:"medium"})]}),e.jsxs("div",{className:"grid gap-4",children:[e.jsx("p",{children:"Large"}),e.jsx(a,{size:"large"})]})]});r.__docgenInfo={description:"",methods:[],displayName:"Size"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => <div className="grid grid-cols-3 gap-4">
    <div className="grid gap-4">
      <p>Small</p>
      <Spinner size="small" />
    </div>
    <div className="grid gap-4">
      <p>Medium</p>
      <Spinner size="medium" />
    </div>
    <div className="grid gap-4">
      <p>Large</p>
      <Spinner size="large" />
    </div>
  </div>`,...r.parameters?.docs?.source}}};const n=["Default","Size"],d=Object.freeze(Object.defineProperty({__proto__:null,Default:s,Size:r,__namedExportsOrder:n,default:i},Symbol.toStringTag,{value:"Module"}));export{s as D,d as S,r as a};
