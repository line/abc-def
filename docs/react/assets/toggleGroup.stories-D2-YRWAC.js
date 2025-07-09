import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{bc as g,bd as l,l as i}from"./timepicker-6LgBjDoY.js";const t={ToggleGroupItem:{children:"↳ ToggleGroupItem: children",disabled:"↳ ToggleGroupItem: disabled"}},u={title:"ToggleGroup",component:g,args:{type:"single",[t.ToggleGroupItem.children]:"ToggleGroupItem",[t.ToggleGroupItem.disabled]:!1},argTypes:{type:{description:"Set whether the ToggleGroup is single or multiple selection type.",table:{category:"ToggleGroup",defaultValue:{summary:"single"},type:{summary:"single | multiple"}},control:"radio",options:["single","multiple"]},[t.ToggleGroupItem.children]:{description:"Set the children of the ToggleGroupItem.",table:{category:"ToggleGroupItem",type:{summary:"React.ReactNode"}},control:"text"},[t.ToggleGroupItem.disabled]:{description:"Set whether the ToggleGroupItem is in a disabled state.",table:{category:"ToggleGroupItem"},control:"boolean"}},render:m=>e.jsxs(g,{type:m.type,children:[e.jsxs(l,{value:"item-1",children:[e.jsx(i,{name:"RiFlashlightFill",size:20}),"Item 1"]}),e.jsxs(l,{value:"item-2",children:[e.jsx(i,{name:"RiFlashlightFill",size:20}),"Item 2"]}),e.jsxs(l,{value:"item-3",disabled:m[t.ToggleGroupItem.disabled],children:[e.jsx(i,{name:"RiFlashlightFill",size:20}),m[t.ToggleGroupItem.children]]})]})},r={},o=()=>e.jsxs(g,{type:"single",children:[e.jsx(l,{value:"item-1",children:e.jsx(i,{name:"RiFlashlightFill",size:20})}),e.jsx(l,{value:"item-2",children:e.jsx(i,{name:"RiFlashlightFill",size:20})}),e.jsx(l,{value:"item-3",children:e.jsx(i,{name:"RiFlashlightFill",size:20})}),e.jsx(l,{value:"item-4",children:e.jsx(i,{name:"RiFlashlightFill",size:20})}),e.jsx(l,{value:"item-5",disabled:!0,children:e.jsx(i,{name:"RiFlashlightFill",size:20})})]}),s=()=>e.jsxs(g,{type:"single",children:[e.jsx(l,{value:"item-1",children:"Single"}),e.jsx(l,{value:"item-2",children:"Single"}),e.jsx(l,{value:"item-3",children:"Single"}),e.jsx(l,{value:"item-4",children:"Single"}),e.jsx(l,{value:"item-5",disabled:!0,children:"Disabled"})]}),n=()=>e.jsxs(g,{type:"single",children:[e.jsxs(l,{value:"item-1",children:[e.jsx(i,{name:"RiFlashlightFill",size:20}),"Single"]}),e.jsxs(l,{value:"item-2",children:[e.jsx(i,{name:"RiFlashlightFill",size:20}),"Single"]}),e.jsxs(l,{value:"item-3",children:[e.jsx(i,{name:"RiFlashlightFill",size:20}),"Single"]}),e.jsxs(l,{value:"item-4",children:[e.jsx(i,{name:"RiFlashlightFill",size:20}),"Single"]}),e.jsxs(l,{value:"item-5",disabled:!0,children:[e.jsx(i,{name:"RiFlashlightFill",size:20}),"Disabled"]})]}),a=()=>e.jsxs(g,{type:"multiple",children:[e.jsxs(l,{value:"item-1",children:[e.jsx(i,{name:"RiFlashlightFill",size:20}),"Multiple"]}),e.jsxs(l,{value:"item-2",children:[e.jsx(i,{name:"RiFlashlightFill",size:20}),"Multiple"]}),e.jsxs(l,{value:"item-3",children:[e.jsx(i,{name:"RiFlashlightFill",size:20}),"Multiple"]}),e.jsxs(l,{value:"item-4",children:[e.jsx(i,{name:"RiFlashlightFill",size:20}),"Multiple"]}),e.jsxs(l,{value:"item-5",disabled:!0,children:[e.jsx(i,{name:"RiFlashlightFill",size:20}),"Disabled"]})]});o.__docgenInfo={description:"",methods:[],displayName:"OnlyIcon"};s.__docgenInfo={description:"",methods:[],displayName:"Text"};n.__docgenInfo={description:"",methods:[],displayName:"Icon_With_Text"};a.__docgenInfo={description:"",methods:[],displayName:"Multiple"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => <ToggleGroup type="single">
    <ToggleGroupItem value="item-1">
      <Icon name="RiFlashlightFill" size={20} />
    </ToggleGroupItem>
    <ToggleGroupItem value="item-2">
      <Icon name="RiFlashlightFill" size={20} />
    </ToggleGroupItem>
    <ToggleGroupItem value="item-3">
      <Icon name="RiFlashlightFill" size={20} />
    </ToggleGroupItem>
    <ToggleGroupItem value="item-4">
      <Icon name="RiFlashlightFill" size={20} />
    </ToggleGroupItem>
    <ToggleGroupItem value="item-5" disabled>
      <Icon name="RiFlashlightFill" size={20} />
    </ToggleGroupItem>
  </ToggleGroup>`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => <ToggleGroup type="single">
    <ToggleGroupItem value="item-1">Single</ToggleGroupItem>
    <ToggleGroupItem value="item-2">Single</ToggleGroupItem>
    <ToggleGroupItem value="item-3">Single</ToggleGroupItem>
    <ToggleGroupItem value="item-4">Single</ToggleGroupItem>
    <ToggleGroupItem value="item-5" disabled>
      Disabled
    </ToggleGroupItem>
  </ToggleGroup>`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => <ToggleGroup type="single">
    <ToggleGroupItem value="item-1">
      <Icon name="RiFlashlightFill" size={20} />
      Single
    </ToggleGroupItem>
    <ToggleGroupItem value="item-2">
      <Icon name="RiFlashlightFill" size={20} />
      Single
    </ToggleGroupItem>
    <ToggleGroupItem value="item-3">
      <Icon name="RiFlashlightFill" size={20} />
      Single
    </ToggleGroupItem>
    <ToggleGroupItem value="item-4">
      <Icon name="RiFlashlightFill" size={20} />
      Single
    </ToggleGroupItem>
    <ToggleGroupItem value="item-5" disabled>
      <Icon name="RiFlashlightFill" size={20} />
      Disabled
    </ToggleGroupItem>
  </ToggleGroup>`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => <ToggleGroup type="multiple">
    <ToggleGroupItem value="item-1">
      <Icon name="RiFlashlightFill" size={20} />
      Multiple
    </ToggleGroupItem>
    <ToggleGroupItem value="item-2">
      <Icon name="RiFlashlightFill" size={20} />
      Multiple
    </ToggleGroupItem>
    <ToggleGroupItem value="item-3">
      <Icon name="RiFlashlightFill" size={20} />
      Multiple
    </ToggleGroupItem>
    <ToggleGroupItem value="item-4">
      <Icon name="RiFlashlightFill" size={20} />
      Multiple
    </ToggleGroupItem>
    <ToggleGroupItem value="item-5" disabled>
      <Icon name="RiFlashlightFill" size={20} />
      Disabled
    </ToggleGroupItem>
  </ToggleGroup>`,...a.parameters?.docs?.source}}};const p=["Default","OnlyIcon","Text","Icon_With_Text","Multiple"],d=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Icon_With_Text:n,Multiple:a,OnlyIcon:o,Text:s,__namedExportsOrder:p,default:u},Symbol.toStringTag,{value:"Module"}));export{r as D,n as I,a as M,o as O,d as T,s as a};
