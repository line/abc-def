import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{e as b}from"./index-MPVjHJeJ.js";import{I as R,R as i,P as l,Q as s,a9 as p,aa as d,ab as I,S as u,ac as j}from"./timepicker-eymHVOXz.js";const t={InputLabel:{show:"↳ InputLabel: show",children:"↳ InputLabel: children"},TextInput:{placeholder:"↳ TextInput: placeholder",disabled:"↳ TextInput: disabled",error:"↳ TextInput: error"},InputIcon:{name:"↳ InputIcon: name"},InputCaption:{show:"↳ InputCaption: show",variant:"↳ InputCaption: variant",icon:"↳ InputCaption: icon",children:"↳ InputCaption: children"}},A={title:"Input",component:i,args:{[t.InputLabel.show]:!0,[t.InputLabel.children]:"Label",[t.InputIcon.name]:void 0,[t.TextInput.placeholder]:"Placeholder...",[t.TextInput.disabled]:!1,[t.TextInput.error]:!1,[t.InputCaption.show]:!0,[t.InputCaption.variant]:"default",[t.InputCaption.icon]:void 0,[t.InputCaption.children]:"Caption"},argTypes:{[t.InputLabel.show]:{description:"Set whether to show the InputLabel.",table:{category:"InputLabel",defaultValue:{summary:"true"}}},[t.InputLabel.children]:{description:"Set the children of the InputLabel.",table:{category:"InputLabel",type:{summary:"React.ReactNode"}},control:"text"},[t.InputIcon.name]:{description:"Set the name of the InputIcon.",table:{category:"InputIcon",type:{summary:"IconNameTypes"}},control:"select",options:R},[t.TextInput.placeholder]:{description:"Set the placeholder of the TextInput.",table:{category:"TextInput",type:{summary:"string"}},control:"text"},[t.TextInput.disabled]:{description:"Set whether the TextInput is in a disabled state.",table:{category:"TextInput",type:{summary:"false"}},control:"boolean"},[t.TextInput.error]:{description:"Set whether the TextInput is in an error state.",table:{category:"TextInput",type:{summary:"false"}},control:"boolean"},[t.InputCaption.show]:{description:"Set whether to show the InputCaption.",table:{category:"InputCaption",defaultValue:{summary:"true"}}},radius:{description:"Set the radius of the InputTextarea.",table:{category:"Textarea",type:{summary:"small | medium | large"},defaultValue:{summary:"small"}},control:"radio",options:["small","medium","large"]},[t.InputCaption.variant]:{description:"Set the variant of the InputCaption.",table:{category:"InputCaption",type:{summary:"default | success | info | error"},defaultValue:{summary:"default"}},control:"radio",options:["default","success","info","error"]},[t.InputCaption.icon]:{description:"Set the icon of the InputCaption.",table:{category:"InputCaption",type:{summary:"IconNameTypes"},defaultValue:{summary:"CAPTION_DEFAULT_ICON"}},control:"select",options:R},[t.InputCaption.children]:{description:"Set the children of the InputCaption.",table:{category:"InputCaption",type:{summary:"React.ReactNode"}},control:"text"},size:{table:{disable:!0}},type:{table:{disable:!0}},error:{table:{disable:!0}}},decorators:a=>e.jsx(a,{}),render:a=>{const n=b.useRef(null),o=()=>{n.current&&(n.current.value="",n.current.focus())};return e.jsxs(l,{children:[a[t.InputLabel.show]&&e.jsx(s,{children:a[t.InputLabel.children]}),e.jsxs(p,{children:[e.jsx(d,{name:a[t.InputIcon.name]??"RiUser3Fill"}),e.jsx(i,{radius:a.radius,ref:n,placeholder:a[t.TextInput.placeholder],disabled:a[t.TextInput.disabled],error:a[t.TextInput.error]}),e.jsx(I,{onClick:o,disabled:a[t.TextInput.disabled]})]}),a[t.InputCaption.show]&&e.jsx(u,{variant:a[t.InputCaption.variant],icon:a[t.InputCaption.icon],children:a[t.InputCaption.children]})]})}},m={},h=()=>{const n=Array.from({length:12},()=>b.createRef()),o=r=>{var c;(c=n[r])!=null&&c.current&&(n[r].current.value="",n[r].current.focus())};return e.jsxs("div",{className:"grid grid-cols-3 gap-2",children:[e.jsxs(l,{children:[e.jsx(s,{children:"Default"}),e.jsxs(p,{children:[e.jsx(i,{ref:n[0],type:"text",placeholder:"Placeholder..."}),e.jsx(I,{onClick:()=>o(0)})]}),e.jsx(u,{variant:"info",children:"Caption Info"})]}),e.jsxs(l,{children:[e.jsx(s,{children:"Disabled"}),e.jsxs(p,{children:[e.jsx(i,{ref:n[1],type:"text",placeholder:"Placeholder...",disabled:!0}),e.jsx(I,{onClick:()=>o(1)})]}),e.jsx(u,{variant:"success",children:"Caption Success"})]}),e.jsxs(l,{children:[e.jsx(s,{children:"Error"}),e.jsxs(p,{children:[e.jsx(i,{ref:n[2],type:"text",placeholder:"Placeholder...",error:!0}),e.jsx(I,{onClick:()=>o(2)})]}),e.jsx(u,{variant:"error",children:"Caption Error"})]})]})},x=()=>{const n=Array.from({length:12},()=>b.createRef()),o=r=>{var c;(c=n[r])!=null&&c.current&&(n[r].current.value="",n[r].current.focus())};return e.jsxs("div",{className:"grid grid-cols-3 gap-2",children:[e.jsxs(l,{children:[e.jsx(s,{children:"Default"}),e.jsxs(p,{children:[e.jsx(d,{name:"RiSearchLine"}),e.jsx(i,{ref:n[3],type:"search",placeholder:"Placeholder..."}),e.jsx(I,{onClick:()=>o(3)})]}),e.jsx(u,{variant:"info",children:"Caption Info"})]}),e.jsxs(l,{children:[e.jsx(s,{children:"Disabled"}),e.jsxs(p,{children:[e.jsx(d,{name:"RiSearchLine"}),e.jsx(i,{ref:n[4],type:"search",placeholder:"Placeholder...",disabled:!0}),e.jsx(I,{onClick:()=>o(4)})]}),e.jsx(u,{variant:"success",children:"Caption Success"})]}),e.jsxs(l,{children:[e.jsx(s,{children:"Error"}),e.jsxs(p,{children:[e.jsx(d,{name:"RiSearchLine"}),e.jsx(i,{ref:n[5],type:"search",placeholder:"Placeholder...",error:!0}),e.jsx(I,{onClick:()=>o(5)})]}),e.jsx(u,{variant:"error",children:"Caption Error"})]})]})},f=()=>{const n=Array.from({length:12},()=>b.createRef()),o=r=>{var c;(c=n[r])!=null&&c.current&&(n[r].current.value="",n[r].current.focus())};return e.jsxs("div",{className:"grid grid-cols-3 gap-2",children:[e.jsxs(l,{children:[e.jsx(s,{children:"Default"}),e.jsxs(p,{children:[e.jsx(d,{name:"RiUser3Fill"}),e.jsx(i,{ref:n[6],type:"text",placeholder:"Placeholder..."}),e.jsx(I,{onClick:()=>o(6)})]}),e.jsx(u,{variant:"info",children:"Caption Info"})]}),e.jsxs(l,{children:[e.jsx(s,{children:"Disabled"}),e.jsxs(p,{children:[e.jsx(d,{name:"RiUser3Fill"}),e.jsx(i,{ref:n[7],type:"text",placeholder:"Placeholder...",disabled:!0}),e.jsx(I,{onClick:()=>o(7)})]}),e.jsx(u,{variant:"success",children:"Caption Success"})]}),e.jsxs(l,{children:[e.jsx(s,{children:"Error"}),e.jsxs(p,{children:[e.jsx(d,{name:"RiUser3Fill"}),e.jsx(i,{ref:n[8],type:"text",placeholder:"Placeholder...",error:!0}),e.jsx(I,{onClick:()=>o(8)})]}),e.jsx(u,{variant:"error",children:"Caption Error"})]})]})},C=()=>{const n=Array.from({length:12},()=>b.createRef()),o=(r,c)=>{var y;(y=n[c])!=null&&y.current&&(n[c].current.type=r?"text":"password",n[c].current.focus())};return e.jsxs("div",{className:"grid grid-cols-3 gap-2",children:[e.jsxs(l,{children:[e.jsx(s,{children:"Default"}),e.jsxs(p,{children:[e.jsx(d,{name:"RiLockPasswordFill"}),e.jsx(i,{ref:n[9],type:"password",placeholder:"Placeholder..."}),e.jsx(j,{onChangeVisibility:r=>o(r,9)})]}),e.jsx(u,{variant:"info",children:"Caption Info"})]}),e.jsxs(l,{children:[e.jsx(s,{children:"Disabled"}),e.jsxs(p,{children:[e.jsx(d,{name:"RiLockPasswordFill"}),e.jsx(i,{ref:n[10],type:"password",placeholder:"Placeholder...",disabled:!0}),e.jsx(j,{disabled:!0,onChangeVisibility:r=>o(r,10)})]}),e.jsx(u,{variant:"success",children:"Caption Success"})]}),e.jsxs(l,{children:[e.jsx(s,{children:"Error"}),e.jsxs(p,{children:[e.jsx(d,{name:"RiLockPasswordFill"}),e.jsx(i,{ref:n[11],type:"password",placeholder:"Placeholder...",error:!0}),e.jsx(j,{onChangeVisibility:r=>o(r,11)})]}),e.jsx(u,{variant:"error",children:"Caption Error"})]})]})};h.__docgenInfo={description:"",methods:[],displayName:"TextField"};x.__docgenInfo={description:"",methods:[],displayName:"Search"};f.__docgenInfo={description:"",methods:[],displayName:"Id"};C.__docgenInfo={description:"",methods:[],displayName:"Password"};var v,g,L;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:"{}",...(L=(g=m.parameters)==null?void 0:g.docs)==null?void 0:L.source}}};var T,F,B;h.parameters={...h.parameters,docs:{...(T=h.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
  const count = 12;
  const inputRefs = Array.from({
    length: count
  }, () => React.createRef<HTMLInputElement>());
  const handleClear = (index: number) => {
    if (inputRefs[index]?.current) {
      inputRefs[index].current.value = "";
      inputRefs[index].current.focus();
    }
  };
  return <div className="grid grid-cols-3 gap-2">
      <InputField>
        <InputLabel>Default</InputLabel>
        <InputBox>
          <TextInput ref={inputRefs[0]} type="text" placeholder="Placeholder..." />
          <InputClearButton onClick={() => handleClear(0)} />
        </InputBox>
        <InputCaption variant="info">Caption Info</InputCaption>
      </InputField>
      <InputField>
        <InputLabel>Disabled</InputLabel>
        <InputBox>
          <TextInput ref={inputRefs[1]} type="text" placeholder="Placeholder..." disabled />
          <InputClearButton onClick={() => handleClear(1)} />
        </InputBox>
        <InputCaption variant="success">Caption Success</InputCaption>
      </InputField>
      <InputField>
        <InputLabel>Error</InputLabel>
        <InputBox>
          <TextInput ref={inputRefs[2]} type="text" placeholder="Placeholder..." error />
          <InputClearButton onClick={() => handleClear(2)} />
        </InputBox>
        <InputCaption variant="error">Caption Error</InputCaption>
      </InputField>
    </div>;
}`,...(B=(F=h.parameters)==null?void 0:F.docs)==null?void 0:B.source}}};var P,S,w;x.parameters={...x.parameters,docs:{...(P=x.parameters)==null?void 0:P.docs,source:{originalSource:`() => {
  const count = 12;
  const inputRefs = Array.from({
    length: count
  }, () => React.createRef<HTMLInputElement>());
  const handleClear = (index: number) => {
    if (inputRefs[index]?.current) {
      inputRefs[index].current.value = "";
      inputRefs[index].current.focus();
    }
  };
  return <div className="grid grid-cols-3 gap-2">
      <InputField>
        <InputLabel>Default</InputLabel>
        <InputBox>
          <InputIcon name="RiSearchLine" />
          <TextInput ref={inputRefs[3]} type="search" placeholder="Placeholder..." />
          <InputClearButton onClick={() => handleClear(3)} />
        </InputBox>
        <InputCaption variant="info">Caption Info</InputCaption>
      </InputField>
      <InputField>
        <InputLabel>Disabled</InputLabel>
        <InputBox>
          <InputIcon name="RiSearchLine" />
          <TextInput ref={inputRefs[4]} type="search" placeholder="Placeholder..." disabled />
          <InputClearButton onClick={() => handleClear(4)} />
        </InputBox>
        <InputCaption variant="success">Caption Success</InputCaption>
      </InputField>
      <InputField>
        <InputLabel>Error</InputLabel>
        <InputBox>
          <InputIcon name="RiSearchLine" />
          <TextInput ref={inputRefs[5]} type="search" placeholder="Placeholder..." error />
          <InputClearButton onClick={() => handleClear(5)} />
        </InputBox>
        <InputCaption variant="error">Caption Error</InputCaption>
      </InputField>
    </div>;
}`,...(w=(S=x.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var E,k,D;f.parameters={...f.parameters,docs:{...(E=f.parameters)==null?void 0:E.docs,source:{originalSource:`() => {
  const count = 12;
  const inputRefs = Array.from({
    length: count
  }, () => React.createRef<HTMLInputElement>());
  const handleClear = (index: number) => {
    if (inputRefs[index]?.current) {
      inputRefs[index].current.value = "";
      inputRefs[index].current.focus();
    }
  };
  return <div className="grid grid-cols-3 gap-2">
      <InputField>
        <InputLabel>Default</InputLabel>
        <InputBox>
          <InputIcon name="RiUser3Fill" />
          <TextInput ref={inputRefs[6]} type="text" placeholder="Placeholder..." />
          <InputClearButton onClick={() => handleClear(6)} />
        </InputBox>
        <InputCaption variant="info">Caption Info</InputCaption>
      </InputField>
      <InputField>
        <InputLabel>Disabled</InputLabel>
        <InputBox>
          <InputIcon name="RiUser3Fill" />
          <TextInput ref={inputRefs[7]} type="text" placeholder="Placeholder..." disabled />
          <InputClearButton onClick={() => handleClear(7)} />
        </InputBox>
        <InputCaption variant="success">Caption Success</InputCaption>
      </InputField>
      <InputField>
        <InputLabel>Error</InputLabel>
        <InputBox>
          <InputIcon name="RiUser3Fill" />
          <TextInput ref={inputRefs[8]} type="text" placeholder="Placeholder..." error />
          <InputClearButton onClick={() => handleClear(8)} />
        </InputBox>
        <InputCaption variant="error">Caption Error</InputCaption>
      </InputField>
    </div>;
}`,...(D=(k=f.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};var N,V,_;C.parameters={...C.parameters,docs:{...(N=C.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
  const count = 12;
  const inputRefs = Array.from({
    length: count
  }, () => React.createRef<HTMLInputElement>());
  const handleChangeVisibility = (visible: boolean, index: number) => {
    if (inputRefs[index]?.current) {
      inputRefs[index].current.type = visible ? "text" : "password";
      inputRefs[index].current.focus();
    }
  };
  return <div className="grid grid-cols-3 gap-2">
      <InputField>
        <InputLabel>Default</InputLabel>
        <InputBox>
          <InputIcon name="RiLockPasswordFill" />
          <TextInput ref={inputRefs[9]} type="password" placeholder="Placeholder..." />
          <InputEyeButton onChangeVisibility={visible => handleChangeVisibility(visible, 9)} />
        </InputBox>
        <InputCaption variant="info">Caption Info</InputCaption>
      </InputField>
      <InputField>
        <InputLabel>Disabled</InputLabel>
        <InputBox>
          <InputIcon name="RiLockPasswordFill" />
          <TextInput ref={inputRefs[10]} type="password" placeholder="Placeholder..." disabled />
          <InputEyeButton disabled onChangeVisibility={visible => handleChangeVisibility(visible, 10)} />
        </InputBox>
        <InputCaption variant="success">Caption Success</InputCaption>
      </InputField>
      <InputField>
        <InputLabel>Error</InputLabel>
        <InputBox>
          <InputIcon name="RiLockPasswordFill" />
          <TextInput ref={inputRefs[11]} type="password" placeholder="Placeholder..." error />
          <InputEyeButton onChangeVisibility={visible => handleChangeVisibility(visible, 11)} />
        </InputBox>
        <InputCaption variant="error">Caption Error</InputCaption>
      </InputField>
    </div>;
}`,...(_=(V=C.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};const U=["Default","TextField","Search","Id","Password"],z=Object.freeze(Object.defineProperty({__proto__:null,Default:m,Id:f,Password:C,Search:x,TextField:h,__namedExportsOrder:U,default:A},Symbol.toStringTag,{value:"Module"}));export{m as D,z as I,C as P,x as S,h as T,f as a};
