import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{e as L}from"./index-MPVjHJeJ.js";import{o as d,p as g,q as v,l as r,r as j,s as y,u as f,v as m,w as l,x as N,y as c,z as w}from"./timepicker-6LgBjDoY.js";const o={ComboboxTrigger:{variant:"↳ ComboboxTrigger: variant"},ComboboxInput:{placeholder:"↳ ComboboxInput: placeholder"},ComboboxList:{maxHeight:"↳ ComboboxList: maxHeight"},ComboboxEmpty:{children:"↳ ComboboxEmpty: children"},ComboboxItem:{inset:"↳ ComboboxItem: inset",children:"↳ ComboboxItem: children"}},R={title:"Combobox",component:d,args:{[o.ComboboxTrigger.variant]:void 0,[o.ComboboxInput.placeholder]:"Placeholder...",[o.ComboboxList.maxHeight]:"300px",[o.ComboboxEmpty.children]:"No results found.",[o.ComboboxItem.inset]:!1,[o.ComboboxItem.children]:"Custom"},argTypes:{[o.ComboboxTrigger.variant]:{description:"Set the variant of the ComboboxTrigger.",table:{category:"ComboboxTrigger",defaultValue:{summary:"outline"},type:{summary:"primary | secondary | destructive | ghost | outline"}},control:"select",options:["primary","secondary","destructive","ghost","outline"]},[o.ComboboxInput.placeholder]:{description:"Set the placeholder of the ComboboxInput.",table:{category:"ComboboxInput",type:{summary:"string"}},control:"text"},[o.ComboboxList.maxHeight]:{description:"Set the maximum height of the ComboboxList.",table:{category:"ComboboxList",type:{summary:"string"}},control:"text"},[o.ComboboxEmpty.children]:{description:"Set the children of the ComboboxEmpty.",table:{category:"ComboboxEmpty",type:{summary:"React.ReactNode"}},control:"text"},[o.ComboboxItem.inset]:{description:"Set whether the ComboboxItem has an inset.",table:{category:"ComboboxItem",defaultValue:{summary:"false"}},control:"boolean"},[o.ComboboxItem.children]:{description:"Set the children of the ComboboxItem.",table:{category:"ComboboxItem",type:{summary:"React.ReactNode"}},control:"text"},maxHeight:{table:{disable:!0}}},decorators:n=>e.jsx(n,{}),render:n=>e.jsxs("div",{className:"grid h-28 grid-cols-[repeat(2,max-content)] items-center justify-center gap-2",children:[e.jsxs(g,{children:[e.jsxs(v,{variant:n[o.ComboboxTrigger.variant],children:["Trigger (Click)",e.jsx(r,{name:"RiExpandUpDownLine",size:16,className:"ml-auto"})]}),e.jsxs(j,{children:[e.jsx(y,{placeholder:n[o.ComboboxInput.placeholder]}),e.jsxs(d,{maxHeight:n[o.ComboboxList.maxHeight],children:[e.jsx(f,{children:n[o.ComboboxEmpty.children]}),e.jsxs(m,{children:[e.jsx(l,{children:"Item 1"}),e.jsx(l,{children:"Item 2"}),e.jsx(l,{inset:n[o.ComboboxItem.inset],onSelect:s=>alert(s),children:n[o.ComboboxItem.children]})]}),e.jsx(N,{}),e.jsxs(m,{children:[e.jsxs(l,{children:[e.jsx(r,{name:"RiUserLine",size:16,className:"mr-2"}),"Profile",e.jsx(c,{children:"⇧⌘P"})]}),e.jsxs(l,{children:[e.jsx(r,{name:"RiSettingsLine",size:16,className:"mr-2"}),"Billing",e.jsx(c,{children:"⌘B"})]}),e.jsxs(l,{children:[e.jsx(r,{name:"RiLogoutBoxRLine",size:16,className:"mr-2"}),"Log out",e.jsx(c,{children:"⇧⌘Q"})]})]})]})]})]}),e.jsxs(g,{children:[e.jsxs(v,{trigger:"hover",variant:n[o.ComboboxTrigger.variant],children:["Trigger (Hover)",e.jsx(r,{name:"RiExpandUpDownLine",size:16,className:"ml-auto"})]}),e.jsxs(j,{children:[e.jsx(y,{placeholder:n[o.ComboboxInput.placeholder]}),e.jsxs(d,{maxHeight:n[o.ComboboxList.maxHeight],children:[e.jsx(f,{children:n[o.ComboboxEmpty.children]}),e.jsxs(m,{children:[e.jsx(l,{children:"Item 1"}),e.jsx(l,{children:"Item 2"}),e.jsx(l,{inset:n[o.ComboboxItem.inset],onSelect:s=>alert(s),children:n[o.ComboboxItem.children]})]}),e.jsx(N,{}),e.jsxs(m,{children:[e.jsxs(l,{children:[e.jsx(r,{name:"RiUserLine",size:16,className:"mr-2"}),"Profile",e.jsx(c,{children:"⇧⌘P"})]}),e.jsxs(l,{children:[e.jsx(r,{name:"RiSettingsLine",size:16,className:"mr-2"}),"Billing",e.jsx(c,{children:"⌘B"})]}),e.jsxs(l,{children:[e.jsx(r,{name:"RiLogoutBoxRLine",size:16,className:"mr-2"}),"Log out",e.jsx(c,{children:"⇧⌘Q"})]})]})]})]})]})]})},C={},p=()=>{const[n,s]=L.useState(!1),[i,b]=L.useState(""),t=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"blueberry",label:"Blueberry"},{value:"grapes",label:"Grapes"},{value:"pineapple",label:"Pineapple"}];return e.jsx("div",{className:"grid",children:e.jsxs(g,{open:n,onOpenChange:s,children:[e.jsxs(v,{children:[i?t.find(a=>a.value===i)?.label:"Select a fruit...",e.jsx(r,{name:"RiArrowDownSLine",size:16,className:"ml-auto"})]}),e.jsxs(j,{children:[e.jsx(y,{placeholder:"Placeholder..."}),e.jsxs(d,{children:[e.jsx(f,{children:"No results found."}),e.jsx(m,{children:t.map(a=>e.jsx(w,{value:a.value,onSelect:I=>{b(I===i?"":I),s(!1)},checked:i===a.value,children:a.label},a.value))})]})]})]})})},u=()=>{const[n,s]=L.useState(!1),i=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"blueberry",label:"Blueberry"},{value:"grapes",label:"Grapes"},{value:"pineapple",label:"Pineapple"}];return e.jsx("div",{className:"grid",children:e.jsxs(g,{open:n,onOpenChange:s,children:[e.jsxs(v,{children:["Button",e.jsx(r,{name:"RiExpandUpDownLine",size:16,className:"ml-auto"})]}),e.jsxs(j,{children:[e.jsx(y,{placeholder:"Placeholder..."}),e.jsxs(d,{children:[e.jsx(f,{children:"No results found."}),e.jsx(m,{children:i.map(b=>e.jsx(l,{value:b.value,onSelect:t=>{alert(`${t} clicked!`),s(!1)},children:b.label},b.value))})]})]})]})})},x=()=>{const[n,s]=L.useState(!1),i=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"blueberry",label:"Blueberry"},{value:"grapes",label:"Grapes"},{value:"pineapple",label:"Pineapple"}],b=(t,a,I)=>{t=t.toLocaleLowerCase(),a=a.toLocaleLowerCase();const S=I?.map(h=>h.toLocaleLowerCase());return t.startsWith(a)||S?.some(h=>h.startsWith(a))?1:t.includes(a)||S?.some(h=>h.includes(a))?.5:0};return e.jsx("div",{className:"grid",children:e.jsxs(g,{open:n,onOpenChange:s,children:[e.jsxs(v,{children:["Button",e.jsx(r,{name:"RiExpandUpDownLine",size:16,className:"ml-auto"})]}),e.jsxs(j,{options:{filter:b},children:[e.jsx(y,{placeholder:"Placeholder..."}),e.jsxs(d,{children:[e.jsx(f,{children:"No results found."}),e.jsx(m,{children:i.map(t=>e.jsx(l,{value:t.value,onSelect:a=>{alert(`${a} clicked!`),s(!1)},children:t.label},t.value))})]})]})]})})};p.__docgenInfo={description:"",methods:[],displayName:"Select"};u.__docgenInfo={description:"",methods:[],displayName:"Click"};x.__docgenInfo={description:"",methods:[],displayName:"Filter"};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:"{}",...C.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
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
        <ComboboxContent>
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
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
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
        <ComboboxContent>
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
}`,...u.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
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
  const filter = (value: string, search: string, keywords?: string[]) => {
    value = value.toLocaleLowerCase();
    search = search.toLocaleLowerCase();
    const normalizedKeywords = keywords?.map(k => k.toLocaleLowerCase());
    return value.startsWith(search) || normalizedKeywords?.some(keyword => keyword.startsWith(search)) ? 1 : value.includes(search) || normalizedKeywords?.some(keyword => keyword.includes(search)) ? 0.5 : 0;
  };
  return <div className="grid">
      <Combobox open={open} onOpenChange={setOpen}>
        <ComboboxTrigger>
          Button
          <Icon name="RiExpandUpDownLine" size={16} className="ml-auto" />
        </ComboboxTrigger>
        <ComboboxContent options={{
        filter
      }}>
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
}`,...x.parameters?.docs?.source}}};const E=["Default","Select","Click","Filter"],z=Object.freeze(Object.defineProperty({__proto__:null,Click:u,Default:C,Filter:x,Select:p,__namedExportsOrder:E,default:R},Symbol.toStringTag,{value:"Module"}));export{z as C,C as D,x as F,p as S,u as a};
