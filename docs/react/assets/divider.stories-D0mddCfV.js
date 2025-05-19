import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{D as t}from"./timepicker-BluA0Tv8.js";const z={title:"Divider",component:t,args:{variant:"bold",orientation:"horizontal",indent:0},argTypes:{variant:{description:"Set the variant of the Divider.",table:{category:"Divider",type:{summary:"bold | subtle"},defaultValue:{summary:"bold"}},control:"radio",options:["bold","subtle"]},orientation:{description:"Set the orientation of the Divider.",table:{category:"Divider",type:{summary:"horizontal | vertical"},defaultValue:{summary:"horizontal"}},control:"radio",options:["horizontal","vertical"]},indent:{description:"Set the indent of the Divider.",table:{category:"Divider",type:{summary:"0 | 8 | 16 | 24"},defaultValue:{summary:"0"}},control:"radio",options:[0,8,16,24]},decorative:{table:{disable:!0}}},render:g=>e.jsx("div",{style:{display:"flex",height:"100px"},children:e.jsx(t,{...g})})},a={},o={args:{variant:"bold"}},n={args:{variant:"subtle"}},r=()=>e.jsxs("div",{className:"flex h-6 items-center justify-center space-x-4 text-sm",children:[e.jsx(t,{variant:"bold",orientation:"vertical"}),e.jsx("div",{children:"Item"}),e.jsx(t,{variant:"subtle",orientation:"vertical"}),e.jsx("div",{children:"Item"}),e.jsx(t,{variant:"subtle",orientation:"vertical"}),e.jsx("div",{children:"Item"}),e.jsx(t,{variant:"bold",orientation:"vertical"})]}),i=()=>e.jsxs("div",{className:"mx-10 flex w-16 flex-col items-center justify-center space-y-2 text-center text-sm",children:[e.jsx(t,{variant:"bold",orientation:"horizontal"}),e.jsx("div",{children:"Item"}),e.jsx(t,{variant:"subtle",orientation:"horizontal"}),e.jsx("div",{children:"Item"}),e.jsx(t,{variant:"subtle",orientation:"horizontal"}),e.jsx("div",{children:"Item"}),e.jsx(t,{variant:"bold",orientation:"horizontal"})]});r.__docgenInfo={description:"",methods:[],displayName:"Vertical"};i.__docgenInfo={description:"",methods:[],displayName:"Horizontal"};var s,l,d;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(d=(l=a.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var c,v,m;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    variant: "bold"
  }
}`,...(m=(v=o.parameters)==null?void 0:v.docs)==null?void 0:m.source}}};var u,p,x;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    variant: "subtle"
  }
}`,...(x=(p=n.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};var b,h,f;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`() => <div className="flex h-6 items-center justify-center space-x-4 text-sm">
    <Divider variant="bold" orientation="vertical" />
    <div>Item</div>
    <Divider variant="subtle" orientation="vertical" />
    <div>Item</div>
    <Divider variant="subtle" orientation="vertical" />
    <div>Item</div>
    <Divider variant="bold" orientation="vertical" />
  </div>`,...(f=(h=r.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var j,y,D;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`() => <div className="mx-10 flex w-16 flex-col items-center justify-center space-y-2 text-center text-sm">
    <Divider variant="bold" orientation="horizontal" />
    <div>Item</div>
    <Divider variant="subtle" orientation="horizontal" />
    <div>Item</div>
    <Divider variant="subtle" orientation="horizontal" />
    <div>Item</div>
    <Divider variant="bold" orientation="horizontal" />
  </div>`,...(D=(y=i.parameters)==null?void 0:y.docs)==null?void 0:D.source}}};const I=["Default","Bold","Subtle","Vertical","Horizontal"],V=Object.freeze(Object.defineProperty({__proto__:null,Bold:o,Default:a,Horizontal:i,Subtle:n,Vertical:r,__namedExportsOrder:I,default:z},Symbol.toStringTag,{value:"Module"}));export{o as B,a as D,i as H,n as S,r as V,V as a};
