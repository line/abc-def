import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{e as s}from"./index-DubqEmGm.js";import{V as p,W as m,X as b,Y as D,Z as a,_ as u,$ as r,l as t,a0 as w,a1 as g,a2 as j,a3 as C,a4 as L,B as H,a5 as i,a6 as M,a7 as c}from"./timepicker-BluA0Tv8.js";const o={DropdownContent:{side:"↳ DropdownContent: side",maxHeight:"↳ DropdownContent: maxHeight"},DropdownItem:{inset:"↳ DropdownItem: inset",children:"↳ DropdownItem: children"},DropdownSubTrigger:{inset:"↳ DropdownSubTrigger: inset",children:"↳ DropdownSubTrigger: children"},DropdownLabel:{children:"↳ DropdownLabel: children"}},O={title:"Dropdown",component:p,args:{[o.DropdownContent.side]:"right",[o.DropdownContent.maxHeight]:"300px",[o.DropdownLabel.children]:"Title",[o.DropdownItem.inset]:!1,[o.DropdownItem.children]:"DropdownItem",[o.DropdownSubTrigger.inset]:!1,[o.DropdownSubTrigger.children]:"DropdownSubTrigger"},argTypes:{[o.DropdownContent.side]:{description:"Set the side where the DropdownContent appears.",table:{category:"DropdownContent",defaultValue:{summary:"bottom"},type:{summary:"top | right | bottom | left"}},control:"select",options:["top","right","bottom","left"]},[o.DropdownContent.maxHeight]:{description:"Set the maxHeight of the DropdownContent.",table:{category:"DropdownContent",type:{summary:"string"}},control:"text"},[o.DropdownItem.inset]:{description:"Set whether the DropdownItem has an inset.",table:{category:"DropdownItem",defaultValue:{summary:"false"}},control:"boolean"},[o.DropdownItem.children]:{description:"Set the children of the DropdownItem.",table:{category:"DropdownItem",type:{summary:"React.ReactNode"}},control:"text"},[o.DropdownSubTrigger.inset]:{description:"Set whether the DropdownSubTrigger has an inset.",table:{category:"DropdownSubTrigger",defaultValue:{summary:"false"}},control:"boolean"},[o.DropdownSubTrigger.children]:{description:"Set the children of the DropdownSubTrigger.",table:{category:"DropdownSubTrigger",type:{summary:"React.ReactNode"}},control:"text"},[o.DropdownLabel.children]:{description:"DropdownLabel의 children을 설정합니다.",table:{category:"DropdownLabel",type:{summary:"React.ReactNode"}},control:"text"},open:{table:{disable:!0}}},decorators:n=>e.jsx(n,{}),render:n=>e.jsxs("div",{className:"grid h-28 grid-cols-[repeat(2,max-content)] items-center justify-center gap-2",children:[e.jsxs(p,{children:[e.jsx(m,{children:"Trigger (Click)"}),e.jsxs(b,{className:"min-w-56",side:n[o.DropdownContent.side],maxHeight:n[o.DropdownContent.maxHeight],children:[e.jsx(D,{children:n[o.DropdownLabel.children]}),e.jsx(a,{}),e.jsxs(u,{children:[e.jsxs(r,{children:[e.jsx(t,{name:"RiUserLine",size:16,className:"mr-2"}),"Profile",e.jsx(w,{children:"⇧⌘P"})]}),e.jsxs(r,{children:[e.jsx(t,{name:"RiSettingsLine",size:16,className:"mr-2"}),"Billing",e.jsx(w,{children:"⌘B"})]}),e.jsxs(r,{inset:n[o.DropdownItem.inset],children:[e.jsx(t,{name:"Ri24HoursFill",size:16,className:"mr-2"}),n[o.DropdownItem.children]]}),e.jsxs(g,{children:[e.jsxs(j,{inset:n[o.DropdownSubTrigger.inset],children:[e.jsx(t,{name:"Ri24HoursFill",size:16,className:"mr-2"}),n[o.DropdownSubTrigger.children],e.jsx(t,{name:"RiArrowRightSLine",size:16,className:"ml-auto"})]}),e.jsx(C,{children:e.jsxs(L,{children:[e.jsx(r,{children:"User 1"}),e.jsx(r,{children:"User 2"}),e.jsx(a,{}),e.jsx(r,{children:"More..."})]})})]})]})]})]}),e.jsxs(p,{children:[e.jsx(m,{trigger:"hover",children:"Trigger (Hover)"}),e.jsxs(b,{className:"min-w-56",side:n[o.DropdownContent.side],maxHeight:n[o.DropdownContent.maxHeight],children:[e.jsx(D,{children:n[o.DropdownLabel.children]}),e.jsx(a,{}),e.jsxs(u,{children:[e.jsxs(r,{children:[e.jsx(t,{name:"RiUserLine",size:16,className:"mr-2"}),"Profile",e.jsx(w,{children:"⇧⌘P"})]}),e.jsxs(r,{children:[e.jsx(t,{name:"RiSettingsLine",size:16,className:"mr-2"}),"Billing",e.jsx(w,{children:"⌘B"})]}),e.jsxs(r,{inset:n[o.DropdownItem.inset],children:[e.jsx(t,{name:"Ri24HoursFill",size:16,className:"mr-2"}),n[o.DropdownItem.children]]}),e.jsxs(g,{children:[e.jsxs(j,{inset:n[o.DropdownSubTrigger.inset],children:[e.jsx(t,{name:"Ri24HoursFill",size:16,className:"mr-2"}),n[o.DropdownSubTrigger.children],e.jsx(t,{name:"RiArrowRightSLine",size:16,className:"ml-auto"})]}),e.jsx(C,{children:e.jsxs(L,{children:[e.jsx(r,{children:"User 1"}),e.jsx(r,{children:"User 2"}),e.jsx(a,{}),e.jsx(r,{children:"More..."})]})})]})]})]})]})]})},h={},d=()=>{const[n,x]=s.useState(!0),[z,_]=s.useState(!1),[B,P]=s.useState(!1),[U,V]=s.useState(!1),[F,G]=s.useState(!1);return e.jsxs(p,{children:[e.jsx(m,{asChild:!0,children:e.jsx(H,{variant:"outline",children:"Dropdown (Checkbox)"})}),e.jsxs(b,{className:"w-56",children:[e.jsx(D,{children:"Title"}),e.jsx(a,{}),e.jsx(i,{checked:n,onCheckedChange:x,children:"Label"}),e.jsx(i,{checked:z,onCheckedChange:_,children:"Label"}),e.jsx(i,{checked:B,onCheckedChange:P,children:"Label"}),e.jsx(i,{checked:U,onCheckedChange:V,children:"Label"}),e.jsx(i,{checked:F,onCheckedChange:G,disabled:!0,children:"Label (Disabled)"})]})]})},l=()=>{const[n,x]=s.useState("bottom");return e.jsxs(p,{children:[e.jsx(m,{asChild:!0,children:e.jsx(H,{variant:"outline",children:"Dropdown (Radio)"})}),e.jsxs(b,{className:"w-56",children:[e.jsx(D,{children:"Title"}),e.jsx(a,{}),e.jsxs(M,{value:n,onValueChange:x,children:[e.jsx(c,{value:"label1",children:"Label"}),e.jsx(c,{value:"label2",children:"Label"}),e.jsx(c,{value:"label3",children:"Label"}),e.jsx(c,{value:"label4",children:"Label"}),e.jsx(c,{value:"label5",disabled:!0,children:"Label (Disabled)"})]})]})]})};d.__docgenInfo={description:"",methods:[],displayName:"Checkbox"};l.__docgenInfo={description:"",methods:[],displayName:"Radio"};var S,R,k;h.parameters={...h.parameters,docs:{...(S=h.parameters)==null?void 0:S.docs,source:{originalSource:"{}",...(k=(R=h.parameters)==null?void 0:R.docs)==null?void 0:k.source}}};var I,f,T;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`() => {
  const [showLabel, setShowLabel] = React.useState<Checked>(true);
  const [showLabel2, setShowLabel2] = React.useState<Checked>(false);
  const [showLabel3, setShowLabel3] = React.useState<Checked>(false);
  const [showLabel4, setShowLabel4] = React.useState<Checked>(false);
  const [showLabel5, setShowLabel5] = React.useState<Checked>(false);
  return <Dropdown>
      <DropdownTrigger asChild>
        <Button variant="outline">Dropdown (Checkbox)</Button>
      </DropdownTrigger>
      <DropdownContent className="w-56">
        <DropdownLabel>Title</DropdownLabel>
        <DropdownSeparator />
        <DropdownCheckboxItem checked={showLabel} onCheckedChange={setShowLabel}>
          Label
        </DropdownCheckboxItem>
        <DropdownCheckboxItem checked={showLabel2} onCheckedChange={setShowLabel2}>
          Label
        </DropdownCheckboxItem>
        <DropdownCheckboxItem checked={showLabel3} onCheckedChange={setShowLabel3}>
          Label
        </DropdownCheckboxItem>
        <DropdownCheckboxItem checked={showLabel4} onCheckedChange={setShowLabel4}>
          Label
        </DropdownCheckboxItem>
        <DropdownCheckboxItem checked={showLabel5} onCheckedChange={setShowLabel5} disabled>
          Label (Disabled)
        </DropdownCheckboxItem>
      </DropdownContent>
    </Dropdown>;
}`,...(T=(f=d.parameters)==null?void 0:f.docs)==null?void 0:T.source}}};var y,N,v;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
  const [position, setPosition] = React.useState("bottom");
  return <Dropdown>
      <DropdownTrigger asChild>
        <Button variant="outline">Dropdown (Radio)</Button>
      </DropdownTrigger>
      <DropdownContent className="w-56">
        <DropdownLabel>Title</DropdownLabel>
        <DropdownSeparator />
        <DropdownRadioGroup value={position} onValueChange={setPosition}>
          <DropdownRadioItem value="label1">Label</DropdownRadioItem>
          <DropdownRadioItem value="label2">Label</DropdownRadioItem>
          <DropdownRadioItem value="label3">Label</DropdownRadioItem>
          <DropdownRadioItem value="label4">Label</DropdownRadioItem>
          <DropdownRadioItem value="label5" disabled>
            Label (Disabled)
          </DropdownRadioItem>
        </DropdownRadioGroup>
      </DropdownContent>
    </Dropdown>;
}`,...(v=(N=l.parameters)==null?void 0:N.docs)==null?void 0:v.source}}};const A=["Default","Checkbox","Radio"],Y=Object.freeze(Object.defineProperty({__proto__:null,Checkbox:d,Default:h,Radio:l,__namedExportsOrder:A,default:O},Symbol.toStringTag,{value:"Module"}));export{d as C,h as D,l as R,Y as a};
