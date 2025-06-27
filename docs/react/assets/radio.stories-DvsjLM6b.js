import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{ax as l,ay as a}from"./timepicker-eymHVOXz.js";const t={RadioItem:{disabled:"↳ RadioItem: disabled",children:"↳ RadioItem: children"}},h={title:"Radio",component:l,args:{orientation:"horizontal",[t.RadioItem.disabled]:!1,[t.RadioItem.children]:"Custom"},argTypes:{orientation:{description:"Set the orientation of the RadioGroup.",table:{category:"RadioGroup",type:{summary:"horizontal | vertical"},defaultValue:{summary:"horizontal"}},control:"radio",options:["horizontal","vertical"]},[t.RadioItem.disabled]:{description:"Set whether the RadioItem is in a disabled state.",table:{category:"RadioItem",defaultValue:{summary:"false"}},control:"boolean"},[t.RadioItem.children]:{description:"Set the children of the RadioItem.",table:{category:"RadioItem",type:{summary:"React.ReactNode"}},control:"text"}},decorators:r=>e.jsx(r,{}),render:r=>e.jsxs(l,{defaultValue:"comfortable",...r,children:[e.jsx(a,{value:"default",id:"r1",children:"Default"}),e.jsx(a,{value:"comfortable",id:"r2",children:"Comfortable"}),e.jsx(a,{value:"compact",id:"r3",disabled:r[t.RadioItem.disabled],children:r[t.RadioItem.children]})]})},d={},o=()=>e.jsxs(l,{children:[e.jsx(a,{value:"value-item-1",id:"r1",children:"Item 1"}),e.jsx(a,{value:"value-item-2",id:"r2",children:"Item 2"}),e.jsx(a,{value:"value-item-3",id:"r3",disabled:!0,children:"Item 3"})]}),i=()=>e.jsxs(l,{orientation:"vertical",children:[e.jsx(a,{value:"value-item-1",id:"r1",children:"Item 1"}),e.jsx(a,{value:"value-item-2",id:"r2",children:"Item 2"}),e.jsx(a,{value:"value-item-3",id:"r3",disabled:!0,children:"Item 3"})]});o.__docgenInfo={description:"",methods:[],displayName:"Horizontal"};i.__docgenInfo={description:"",methods:[],displayName:"Vertical"};var s,m,n;d.parameters={...d.parameters,docs:{...(s=d.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(n=(m=d.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};var c,u,p;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`() => <RadioGroup>
    <RadioItem value="value-item-1" id="r1">
      Item 1
    </RadioItem>
    <RadioItem value="value-item-2" id="r2">
      Item 2
    </RadioItem>
    <RadioItem value="value-item-3" id="r3" disabled>
      Item 3
    </RadioItem>
  </RadioGroup>`,...(p=(u=o.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var I,R,v;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`() => <RadioGroup orientation="vertical">
    <RadioItem value="value-item-1" id="r1">
      Item 1
    </RadioItem>
    <RadioItem value="value-item-2" id="r2">
      Item 2
    </RadioItem>
    <RadioItem value="value-item-3" id="r3" disabled>
      Item 3
    </RadioItem>
  </RadioGroup>`,...(v=(R=i.parameters)==null?void 0:R.docs)==null?void 0:v.source}}};const b=["Default","Horizontal","Vertical"],j=Object.freeze(Object.defineProperty({__proto__:null,Default:d,Horizontal:o,Vertical:i,__namedExportsOrder:b,default:h},Symbol.toStringTag,{value:"Module"}));export{d as D,o as H,j as R,i as V};
