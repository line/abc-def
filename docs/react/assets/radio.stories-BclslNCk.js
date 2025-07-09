import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{aL as l,aM as a}from"./timepicker-6LgBjDoY.js";const t={RadioItem:{disabled:"↳ RadioItem: disabled",children:"↳ RadioItem: children"}},s={title:"Radio",component:l,args:{orientation:"horizontal",[t.RadioItem.disabled]:!1,[t.RadioItem.children]:"Custom"},argTypes:{orientation:{description:"Set the orientation of the RadioGroup.",table:{category:"RadioGroup",type:{summary:"horizontal | vertical"},defaultValue:{summary:"horizontal"}},control:"radio",options:["horizontal","vertical"]},[t.RadioItem.disabled]:{description:"Set whether the RadioItem is in a disabled state.",table:{category:"RadioItem",defaultValue:{summary:"false"}},control:"boolean"},[t.RadioItem.children]:{description:"Set the children of the RadioItem.",table:{category:"RadioItem",type:{summary:"React.ReactNode"}},control:"text"}},decorators:r=>e.jsx(r,{}),render:r=>e.jsxs(l,{defaultValue:"comfortable",...r,children:[e.jsx(a,{value:"default",id:"r1",children:"Default"}),e.jsx(a,{value:"comfortable",id:"r2",children:"Comfortable"}),e.jsx(a,{value:"compact",id:"r3",disabled:r[t.RadioItem.disabled],children:r[t.RadioItem.children]})]})},d={},o=()=>e.jsxs(l,{children:[e.jsx(a,{value:"value-item-1",id:"r1",children:"Item 1"}),e.jsx(a,{value:"value-item-2",id:"r2",children:"Item 2"}),e.jsx(a,{value:"value-item-3",id:"r3",disabled:!0,children:"Item 3"})]}),i=()=>e.jsxs(l,{orientation:"vertical",children:[e.jsx(a,{value:"value-item-1",id:"r1",children:"Item 1"}),e.jsx(a,{value:"value-item-2",id:"r2",children:"Item 2"}),e.jsx(a,{value:"value-item-3",id:"r3",disabled:!0,children:"Item 3"})]});o.__docgenInfo={description:"",methods:[],displayName:"Horizontal"};i.__docgenInfo={description:"",methods:[],displayName:"Vertical"};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{}",...d.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => <RadioGroup>
    <RadioItem value="value-item-1" id="r1">
      Item 1
    </RadioItem>
    <RadioItem value="value-item-2" id="r2">
      Item 2
    </RadioItem>
    <RadioItem value="value-item-3" id="r3" disabled>
      Item 3
    </RadioItem>
  </RadioGroup>`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => <RadioGroup orientation="vertical">
    <RadioItem value="value-item-1" id="r1">
      Item 1
    </RadioItem>
    <RadioItem value="value-item-2" id="r2">
      Item 2
    </RadioItem>
    <RadioItem value="value-item-3" id="r3" disabled>
      Item 3
    </RadioItem>
  </RadioGroup>`,...i.parameters?.docs?.source}}};const m=["Default","Horizontal","Vertical"],u=Object.freeze(Object.defineProperty({__proto__:null,Default:d,Horizontal:o,Vertical:i,__namedExportsOrder:m,default:s},Symbol.toStringTag,{value:"Module"}));export{d as D,o as H,u as R,i as V};
