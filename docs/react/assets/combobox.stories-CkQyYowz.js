import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{e as f}from"./index-MPVjHJeJ.js";import{o as u,p as h,q as C,l as t,r as g,s as j,u as v,v as b,w as a,x as S,y as i,z as k}from"./timepicker-B-KcMAi6.js";const o={ComboboxTrigger:{variant:"↳ ComboboxTrigger: variant"},ComboboxInput:{placeholder:"↳ ComboboxInput: placeholder"},ComboboxList:{maxHeight:"↳ ComboboxList: maxHeight"},ComboboxEmpty:{children:"↳ ComboboxEmpty: children"},ComboboxItem:{inset:"↳ ComboboxItem: inset",children:"↳ ComboboxItem: children"}},w={title:"Combobox",component:u,args:{[o.ComboboxTrigger.variant]:void 0,[o.ComboboxInput.placeholder]:"Placeholder...",[o.ComboboxList.maxHeight]:"300px",[o.ComboboxEmpty.children]:"No results found.",[o.ComboboxItem.inset]:!1,[o.ComboboxItem.children]:"Custom"},argTypes:{[o.ComboboxTrigger.variant]:{description:"Set the variant of the ComboboxTrigger.",table:{category:"ComboboxTrigger",defaultValue:{summary:"outline"},type:{summary:"primary | secondary | destructive | ghost | outline"}},control:"select",options:["primary","secondary","destructive","ghost","outline"]},[o.ComboboxInput.placeholder]:{description:"Set the placeholder of the ComboboxInput.",table:{category:"ComboboxInput",type:{summary:"string"}},control:"text"},[o.ComboboxList.maxHeight]:{description:"Set the maximum height of the ComboboxList.",table:{category:"ComboboxList",type:{summary:"string"}},control:"text"},[o.ComboboxEmpty.children]:{description:"Set the children of the ComboboxEmpty.",table:{category:"ComboboxEmpty",type:{summary:"React.ReactNode"}},control:"text"},[o.ComboboxItem.inset]:{description:"Set whether the ComboboxItem has an inset.",table:{category:"ComboboxItem",defaultValue:{summary:"false"}},control:"boolean"},[o.ComboboxItem.children]:{description:"Set the children of the ComboboxItem.",table:{category:"ComboboxItem",type:{summary:"React.ReactNode"}},control:"text"},maxHeight:{table:{disable:!0}}},decorators:n=>e.jsx(n,{}),render:n=>e.jsxs("div",{className:"grid h-28 grid-cols-[repeat(2,max-content)] items-center justify-center gap-2",children:[e.jsxs(h,{children:[e.jsxs(C,{variant:n[o.ComboboxTrigger.variant],children:["Trigger (Click)",e.jsx(t,{name:"RiExpandUpDownLine",size:16,className:"ml-auto"})]}),e.jsxs(g,{children:[e.jsx(j,{placeholder:n[o.ComboboxInput.placeholder]}),e.jsxs(u,{maxHeight:n[o.ComboboxList.maxHeight],children:[e.jsx(v,{children:n[o.ComboboxEmpty.children]}),e.jsxs(b,{children:[e.jsx(a,{children:"Item 1"}),e.jsx(a,{children:"Item 2"}),e.jsx(a,{inset:n[o.ComboboxItem.inset],onSelect:l=>alert(l),children:n[o.ComboboxItem.children]})]}),e.jsx(S,{}),e.jsxs(b,{children:[e.jsxs(a,{children:[e.jsx(t,{name:"RiUserLine",size:16,className:"mr-2"}),"Profile",e.jsx(i,{children:"⇧⌘P"})]}),e.jsxs(a,{children:[e.jsx(t,{name:"RiSettingsLine",size:16,className:"mr-2"}),"Billing",e.jsx(i,{children:"⌘B"})]}),e.jsxs(a,{children:[e.jsx(t,{name:"RiLogoutBoxRLine",size:16,className:"mr-2"}),"Log out",e.jsx(i,{children:"⇧⌘Q"})]})]})]})]})]}),e.jsxs(h,{children:[e.jsxs(C,{trigger:"hover",variant:n[o.ComboboxTrigger.variant],children:["Trigger (Hover)",e.jsx(t,{name:"RiExpandUpDownLine",size:16,className:"ml-auto"})]}),e.jsxs(g,{children:[e.jsx(j,{placeholder:n[o.ComboboxInput.placeholder]}),e.jsxs(u,{maxHeight:n[o.ComboboxList.maxHeight],children:[e.jsx(v,{children:n[o.ComboboxEmpty.children]}),e.jsxs(b,{children:[e.jsx(a,{children:"Item 1"}),e.jsx(a,{children:"Item 2"}),e.jsx(a,{inset:n[o.ComboboxItem.inset],onSelect:l=>alert(l),children:n[o.ComboboxItem.children]})]}),e.jsx(S,{}),e.jsxs(b,{children:[e.jsxs(a,{children:[e.jsx(t,{name:"RiUserLine",size:16,className:"mr-2"}),"Profile",e.jsx(i,{children:"⇧⌘P"})]}),e.jsxs(a,{children:[e.jsx(t,{name:"RiSettingsLine",size:16,className:"mr-2"}),"Billing",e.jsx(i,{children:"⌘B"})]}),e.jsxs(a,{children:[e.jsx(t,{name:"RiLogoutBoxRLine",size:16,className:"mr-2"}),"Log out",e.jsx(i,{children:"⇧⌘Q"})]})]})]})]})]})]})},p={},m=()=>{var y;const[n,l]=f.useState(!1),[s,x]=f.useState(""),d=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"blueberry",label:"Blueberry"},{value:"grapes",label:"Grapes"},{value:"pineapple",label:"Pineapple"}];return e.jsx("div",{className:"grid",children:e.jsxs(h,{open:n,onOpenChange:l,children:[e.jsxs(C,{children:[s?(y=d.find(r=>r.value===s))==null?void 0:y.label:"Select a fruit...",e.jsx(t,{name:"RiArrowDownSLine",size:16,className:"ml-auto"})]}),e.jsxs(g,{align:"start",children:[e.jsx(j,{placeholder:"Placeholder..."}),e.jsxs(u,{children:[e.jsx(v,{children:"No results found."}),e.jsx(b,{children:d.map(r=>e.jsx(k,{value:r.value,onSelect:I=>{x(I===s?"":I),l(!1)},checked:s===r.value,children:r.label},r.value))})]})]})]})})},c=()=>{const[n,l]=f.useState(!1),s=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"blueberry",label:"Blueberry"},{value:"grapes",label:"Grapes"},{value:"pineapple",label:"Pineapple"}];return e.jsx("div",{className:"grid",children:e.jsxs(h,{open:n,onOpenChange:l,children:[e.jsxs(C,{children:["Button",e.jsx(t,{name:"RiExpandUpDownLine",size:16,className:"ml-auto"})]}),e.jsxs(g,{align:"start",children:[e.jsx(j,{placeholder:"Placeholder..."}),e.jsxs(u,{children:[e.jsx(v,{children:"No results found."}),e.jsx(b,{children:s.map(x=>e.jsx(a,{value:x.value,onSelect:d=>{alert(`${d} clicked!`),l(!1)},children:x.label},x.value))})]})]})]})})};m.__docgenInfo={description:"",methods:[],displayName:"Select"};c.__docgenInfo={description:"",methods:[],displayName:"Click"};var L,N,R;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:"{}",...(R=(N=p.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var E,T,B;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`() => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const fruits = [{
    value: "apple",
    label: "Apple"
  }, {
    value: "banana",
    label: "Banana"
  }, {
    value: "blueberry",
    label: "Blueberry"
  }, {
    value: "grapes",
    label: "Grapes"
  }, {
    value: "pineapple",
    label: "Pineapple"
  }];
  return <div className="grid">
      <Combobox open={open} onOpenChange={setOpen}>
        <ComboboxTrigger>
          {value ? fruits.find(fruit => fruit.value === value)?.label : "Select a fruit..."}
          <Icon name="RiArrowDownSLine" size={16} className="ml-auto" />
        </ComboboxTrigger>
        <ComboboxContent align="start">
          <ComboboxInput placeholder="Placeholder..." />
          <ComboboxList>
            <ComboboxEmpty>No results found.</ComboboxEmpty>
            <ComboboxGroup>
              {fruits.map(fruit => <ComboboxSelectItem key={fruit.value} value={fruit.value} onSelect={currentValue => {
              setValue(currentValue === value ? "" : currentValue);
              setOpen(false);
            }} checked={value === fruit.value}>
                  {fruit.label}
                </ComboboxSelectItem>)}
            </ComboboxGroup>
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </div>;
}`,...(B=(T=m.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};var O,P,z;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`() => {
  const [open, setOpen] = React.useState(false);
  const fruits = [{
    value: "apple",
    label: "Apple"
  }, {
    value: "banana",
    label: "Banana"
  }, {
    value: "blueberry",
    label: "Blueberry"
  }, {
    value: "grapes",
    label: "Grapes"
  }, {
    value: "pineapple",
    label: "Pineapple"
  }];
  return <div className="grid">
      <Combobox open={open} onOpenChange={setOpen}>
        <ComboboxTrigger>
          Button
          <Icon name="RiExpandUpDownLine" size={16} className="ml-auto" />
        </ComboboxTrigger>
        <ComboboxContent align="start">
          <ComboboxInput placeholder="Placeholder..." />
          <ComboboxList>
            <ComboboxEmpty>No results found.</ComboboxEmpty>
            <ComboboxGroup>
              {fruits.map(fruit => <ComboboxItem key={fruit.value} value={fruit.value} onSelect={currentValue => {
              alert(\`\${currentValue} clicked!\`);
              setOpen(false);
            }}>
                  {fruit.label}
                </ComboboxItem>)}
            </ComboboxGroup>
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </div>;
}`,...(z=(P=c.parameters)==null?void 0:P.docs)==null?void 0:z.source}}};const H=["Default","Select","Click"],V=Object.freeze(Object.defineProperty({__proto__:null,Click:c,Default:p,Select:m,__namedExportsOrder:H,default:w},Symbol.toStringTag,{value:"Module"}));export{V as C,p as D,m as S,c as a};
