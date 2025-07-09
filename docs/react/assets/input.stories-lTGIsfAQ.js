import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{e as F}from"./index-MPVjHJeJ.js";import{a as g,o as A,e as E}from"./schemas-W2JqShKs.js";import{I as M,R as s,P as l,Q as h,a9 as i,aa as d,ab as p,S as f,ac as S,ad as R,ae as v,af as T,ag as B,ah as L,ai as P,aj as N,B as D,ak as w,t as k}from"./timepicker-6LgBjDoY.js";const a={TextInput:{placeholder:"↳ TextInput: placeholder",disabled:"↳ TextInput: disabled",radius:"↳ TextInput: radius"},InputIcon:{name:"↳ InputIcon: name"}},J={title:"Input",component:s,args:{[a.TextInput.placeholder]:"Placeholder...",[a.TextInput.radius]:void 0,[a.TextInput.disabled]:!1,[a.InputIcon.name]:void 0},argTypes:{[a.TextInput.placeholder]:{description:"Set the placeholder of the TextInput.",table:{category:"TextInput",type:{summary:"string"}},control:"text"},[a.TextInput.radius]:{description:"Set the radius of the TextInput.",table:{category:"TextInput",type:{summary:"small | medium | large"},defaultValue:{summary:"small"}},control:"radio",options:["small","medium","large",void 0]},[a.TextInput.disabled]:{description:"Set whether the TextInput is in a disabled state.",table:{category:"TextInput",type:{summary:"false"}},control:"boolean"},[a.InputIcon.name]:{description:"Set the name of the InputIcon.",table:{category:"InputIcon",type:{summary:"IconNameTypes"}},control:"select",options:M},radius:{table:{disable:!0}},size:{table:{disable:!0}},type:{table:{disable:!0}}},decorators:c=>e.jsx(c,{}),render:c=>{const t=F.useRef(null),o=()=>{t.current&&(t.current.value="",t.current.focus())};return e.jsxs(l,{children:[e.jsx(h,{children:"Label"}),e.jsxs(i,{children:[e.jsx(d,{name:c[a.InputIcon.name]??"RiUser3Fill"}),e.jsx(s,{radius:c[a.TextInput.radius],ref:t,placeholder:c[a.TextInput.placeholder],disabled:c[a.TextInput.disabled]}),e.jsx(p,{onClick:o,disabled:c[a.TextInput.disabled]})]}),e.jsx(f,{children:"Caption"})]})}},y={},x=()=>{const t=Array.from({length:12},()=>F.createRef()),o=n=>{t[n]?.current&&(t[n].current.value="",t[n].current.focus())},r=S({resolver:g(V)});function m(n){return k.success("Form submitted successfully",{description:JSON.stringify(n,null,2)})}return e.jsxs("div",{className:"grid grid-cols-3 gap-2",children:[e.jsxs(l,{children:[e.jsx(h,{children:"Default"}),e.jsxs(i,{children:[e.jsx(s,{ref:t[0],type:"text",placeholder:"Placeholder..."}),e.jsx(p,{onClick:()=>o(0)})]}),e.jsx(f,{variant:"info",children:"Caption Info"})]}),e.jsxs(l,{children:[e.jsx(h,{children:"Disabled"}),e.jsxs(i,{children:[e.jsx(s,{ref:t[1],type:"text",placeholder:"Placeholder...",disabled:!0}),e.jsx(p,{onClick:()=>o(1)})]}),e.jsx(f,{variant:"success",children:"Caption Success"})]}),e.jsx(R,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(m),children:[e.jsx(v,{control:r.control,name:"email",render:({field:n})=>e.jsx(T,{children:e.jsxs(l,{children:[e.jsx(B,{children:"Form"}),e.jsxs(i,{children:[e.jsx(L,{children:e.jsx(s,{ref:t[2],type:"text",placeholder:"Placeholder...",onChange:n.onChange,defaultValue:n.value})}),e.jsx(p,{onClick:()=>{o(2),n.onChange("")}})]}),e.jsx(P,{children:"Caption"}),e.jsx(N,{})]})})}),e.jsx(D,{type:"submit",className:"mt-6",children:"Submit"})]})})]})},I=()=>{const t=Array.from({length:12},()=>F.createRef()),o=n=>{t[n]?.current&&(t[n].current.value="",t[n].current.focus())},r=S({resolver:g(V)});function m(n){return k.success("Form submitted successfully",{description:JSON.stringify(n,null,2)})}return e.jsxs("div",{className:"grid grid-cols-3 gap-2",children:[e.jsxs(l,{children:[e.jsx(h,{children:"Default"}),e.jsxs(i,{children:[e.jsx(d,{name:"RiSearchLine"}),e.jsx(s,{ref:t[3],type:"search",placeholder:"Placeholder..."}),e.jsx(p,{onClick:()=>o(3)})]}),e.jsx(f,{variant:"info",children:"Caption Info"})]}),e.jsxs(l,{children:[e.jsx(h,{children:"Disabled"}),e.jsxs(i,{children:[e.jsx(d,{name:"RiSearchLine"}),e.jsx(s,{ref:t[4],type:"search",placeholder:"Placeholder...",disabled:!0}),e.jsx(p,{onClick:()=>o(4)})]}),e.jsx(f,{variant:"success",children:"Caption Success"})]}),e.jsx(R,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(m),children:[e.jsx(v,{control:r.control,name:"email",render:({field:n})=>e.jsx(T,{children:e.jsxs(l,{children:[e.jsx(B,{children:"Form"}),e.jsxs(i,{children:[e.jsx(d,{name:"RiSearchLine"}),e.jsx(L,{children:e.jsx(s,{ref:t[5],type:"search",placeholder:"Placeholder...",onChange:n.onChange,defaultValue:n.value})}),e.jsx(p,{onClick:()=>{o(5),n.onChange("")}})]}),e.jsx(P,{children:"Caption"}),e.jsx(N,{})]})})}),e.jsx(D,{type:"submit",className:"mt-6",children:"Submit"})]})})]})},b=()=>{const t=Array.from({length:12},()=>F.createRef()),o=n=>{t[n]?.current&&(t[n].current.value="",t[n].current.focus())},r=S({resolver:g(V)});function m(n){return k.success("Form submitted successfully",{description:JSON.stringify(n,null,2)})}return e.jsxs("div",{className:"grid grid-cols-3 gap-2",children:[e.jsxs(l,{children:[e.jsx(h,{children:"Default"}),e.jsxs(i,{children:[e.jsx(d,{name:"RiUser3Fill"}),e.jsx(s,{ref:t[6],type:"text",placeholder:"Placeholder..."}),e.jsx(p,{onClick:()=>o(6)})]}),e.jsx(f,{variant:"info",children:"Caption Info"})]}),e.jsxs(l,{children:[e.jsx(h,{children:"Disabled"}),e.jsxs(i,{children:[e.jsx(d,{name:"RiUser3Fill"}),e.jsx(s,{ref:t[7],type:"text",placeholder:"Placeholder...",disabled:!0}),e.jsx(p,{onClick:()=>o(7)})]}),e.jsx(f,{variant:"success",children:"Caption Success"})]}),e.jsx(R,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(m),children:[e.jsx(v,{control:r.control,name:"email",render:({field:n})=>e.jsx(T,{children:e.jsxs(l,{children:[e.jsx(B,{children:"Form"}),e.jsxs(i,{children:[e.jsx(d,{name:"RiUser3Fill"}),e.jsx(L,{children:e.jsx(s,{ref:t[8],type:"text",placeholder:"Placeholder...",onChange:n.onChange,defaultValue:n.value})}),e.jsx(p,{onClick:()=>{o(8),n.onChange("")}})]}),e.jsx(P,{children:"Caption"}),e.jsx(N,{})]})})}),e.jsx(D,{type:"submit",className:"mt-6",children:"Submit"})]})})]})},C=()=>{const[t,o]=F.useState(Array(12).fill("password")),r=Array.from({length:12},()=>F.createRef()),m=(u,j)=>{o(O=>{const z=[...O];return z[j]=u?"text":"password",z}),r[j]?.current&&r[j].current.focus()},n=S({resolver:g(V)});function _(u){return k.success("Form submitted successfully",{description:JSON.stringify(u,null,2)})}return e.jsxs("div",{className:"grid grid-cols-3 gap-2",children:[e.jsxs(l,{children:[e.jsx(h,{children:"Default"}),e.jsxs(i,{children:[e.jsx(d,{name:"RiLockPasswordFill"}),e.jsx(s,{ref:r[9],type:t[9],placeholder:"Placeholder..."}),e.jsx(w,{onChangeVisibility:u=>m(u,9)})]}),e.jsx(f,{variant:"info",children:"Caption Info"})]}),e.jsxs(l,{children:[e.jsx(h,{children:"Disabled"}),e.jsxs(i,{children:[e.jsx(d,{name:"RiLockPasswordFill"}),e.jsx(s,{ref:r[10],type:t[10],placeholder:"Placeholder...",disabled:!0}),e.jsx(w,{disabled:!0,onChangeVisibility:u=>m(u,10)})]}),e.jsx(f,{variant:"success",children:"Caption Success"})]}),e.jsx(R,{...n,children:e.jsxs("form",{onSubmit:n.handleSubmit(_),children:[e.jsx(v,{control:n.control,name:"email",render:({field:u})=>e.jsx(T,{children:e.jsxs(l,{children:[e.jsx(B,{children:"Form"}),e.jsxs(i,{children:[e.jsx(d,{name:"RiLockPasswordFill"}),e.jsx(L,{children:e.jsx(s,{ref:r[11],type:t[11],placeholder:"Placeholder...",onChange:u.onChange,defaultValue:u.value})}),e.jsx(w,{onChangeVisibility:j=>m(j,11)})]}),e.jsx(P,{children:"Caption"}),e.jsx(N,{})]})})}),e.jsx(D,{type:"submit",className:"mt-6",children:"Submit"})]})})]})},V=A({email:E({error:"Please type an email."})});x.__docgenInfo={description:"",methods:[],displayName:"TextField"};I.__docgenInfo={description:"",methods:[],displayName:"Search"};b.__docgenInfo={description:"",methods:[],displayName:"Id"};C.__docgenInfo={description:"",methods:[],displayName:"Password"};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:"{}",...y.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
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

  // 1. Define your form.
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema)
  });

  // 2. Define a submit handler.
  function onSubmit(data: z.infer<typeof FormSchema>) {
    return toast.success("Form submitted successfully", {
      description: JSON.stringify(data, null, 2)
    });
  }
  return <div className="grid grid-cols-3 gap-2">
      <InputField>
        <Label>Default</Label>
        <InputBox>
          <TextInput ref={inputRefs[0]} type="text" placeholder="Placeholder..." />
          <InputClearButton onClick={() => handleClear(0)} />
        </InputBox>
        <Caption variant="info">Caption Info</Caption>
      </InputField>
      <InputField>
        <Label>Disabled</Label>
        <InputBox>
          <TextInput ref={inputRefs[1]} type="text" placeholder="Placeholder..." disabled />
          <InputClearButton onClick={() => handleClear(1)} />
        </InputBox>
        <Caption variant="success">Caption Success</Caption>
      </InputField>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField control={form.control} name="email" render={({
          field
        }) => <FormItem>
                <InputField>
                  <FormLabel>Form</FormLabel>
                  <InputBox>
                    <FormControl>
                      <TextInput ref={inputRefs[2]} type="text" placeholder="Placeholder..." onChange={field.onChange} defaultValue={field.value} />
                    </FormControl>
                    <InputClearButton onClick={() => {
                handleClear(2);
                field.onChange("");
              }} />
                  </InputBox>
                  <FormCaption>Caption</FormCaption>
                  <FormMessage />
                </InputField>
              </FormItem>} />
          <Button type="submit" className="mt-6">
            Submit
          </Button>
        </form>
      </Form>
    </div>;
}`,...x.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => {
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

  // 1. Define your form.
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema)
  });

  // 2. Define a submit handler.
  function onSubmit(data: z.infer<typeof FormSchema>) {
    return toast.success("Form submitted successfully", {
      description: JSON.stringify(data, null, 2)
    });
  }
  return <div className="grid grid-cols-3 gap-2">
      <InputField>
        <Label>Default</Label>
        <InputBox>
          <InputIcon name="RiSearchLine" />
          <TextInput ref={inputRefs[3]} type="search" placeholder="Placeholder..." />
          <InputClearButton onClick={() => handleClear(3)} />
        </InputBox>
        <Caption variant="info">Caption Info</Caption>
      </InputField>
      <InputField>
        <Label>Disabled</Label>
        <InputBox>
          <InputIcon name="RiSearchLine" />
          <TextInput ref={inputRefs[4]} type="search" placeholder="Placeholder..." disabled />
          <InputClearButton onClick={() => handleClear(4)} />
        </InputBox>
        <Caption variant="success">Caption Success</Caption>
      </InputField>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField control={form.control} name="email" render={({
          field
        }) => <FormItem>
                <InputField>
                  <FormLabel>Form</FormLabel>
                  <InputBox>
                    <InputIcon name="RiSearchLine" />
                    <FormControl>
                      <TextInput ref={inputRefs[5]} type="search" placeholder="Placeholder..." onChange={field.onChange} defaultValue={field.value} />
                    </FormControl>
                    <InputClearButton onClick={() => {
                handleClear(5);
                field.onChange("");
              }} />
                  </InputBox>
                  <FormCaption>Caption</FormCaption>
                  <FormMessage />
                </InputField>
              </FormItem>} />
          <Button type="submit" className="mt-6">
            Submit
          </Button>
        </form>
      </Form>
    </div>;
}`,...I.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
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

  // 1. Define your form.
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema)
  });

  // 2. Define a submit handler.
  function onSubmit(data: z.infer<typeof FormSchema>) {
    return toast.success("Form submitted successfully", {
      description: JSON.stringify(data, null, 2)
    });
  }
  return <div className="grid grid-cols-3 gap-2">
      <InputField>
        <Label>Default</Label>
        <InputBox>
          <InputIcon name="RiUser3Fill" />
          <TextInput ref={inputRefs[6]} type="text" placeholder="Placeholder..." />
          <InputClearButton onClick={() => handleClear(6)} />
        </InputBox>
        <Caption variant="info">Caption Info</Caption>
      </InputField>
      <InputField>
        <Label>Disabled</Label>
        <InputBox>
          <InputIcon name="RiUser3Fill" />
          <TextInput ref={inputRefs[7]} type="text" placeholder="Placeholder..." disabled />
          <InputClearButton onClick={() => handleClear(7)} />
        </InputBox>
        <Caption variant="success">Caption Success</Caption>
      </InputField>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField control={form.control} name="email" render={({
          field
        }) => <FormItem>
                <InputField>
                  <FormLabel>Form</FormLabel>
                  <InputBox>
                    <InputIcon name="RiUser3Fill" />
                    <FormControl>
                      <TextInput ref={inputRefs[8]} type="text" placeholder="Placeholder..." onChange={field.onChange} defaultValue={field.value} />
                    </FormControl>
                    <InputClearButton onClick={() => {
                handleClear(8);
                field.onChange("");
              }} />
                  </InputBox>
                  <FormCaption>Caption</FormCaption>
                  <FormMessage />
                </InputField>
              </FormItem>} />
          <Button type="submit" className="mt-6">
            Submit
          </Button>
        </form>
      </Form>
    </div>;
}`,...b.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
  const count = 12;
  const [inputTypes, setInputTypes] = React.useState<("text" | "password")[]>(Array(count).fill("password"));
  const inputRefs = Array.from({
    length: count
  }, () => React.createRef<HTMLInputElement>());
  const handleChangeVisibility = (visible: boolean, index: number) => {
    setInputTypes(prev => {
      const next = [...prev];
      next[index] = visible ? "text" : "password";
      return next;
    });
    // 포커스 유지
    if (inputRefs[index]?.current) {
      inputRefs[index].current.focus();
    }
  };

  // 1. Define your form.
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema)
  });

  // 2. Define a submit handler.
  function onSubmit(data: z.infer<typeof FormSchema>) {
    return toast.success("Form submitted successfully", {
      description: JSON.stringify(data, null, 2)
    });
  }
  return <div className="grid grid-cols-3 gap-2">
      <InputField>
        <Label>Default</Label>
        <InputBox>
          <InputIcon name="RiLockPasswordFill" />
          <TextInput ref={inputRefs[9]} type={inputTypes[9]} placeholder="Placeholder..." />
          <InputEyeButton onChangeVisibility={visible => handleChangeVisibility(visible, 9)} />
        </InputBox>
        <Caption variant="info">Caption Info</Caption>
      </InputField>
      <InputField>
        <Label>Disabled</Label>
        <InputBox>
          <InputIcon name="RiLockPasswordFill" />
          <TextInput ref={inputRefs[10]} type={inputTypes[10]} placeholder="Placeholder..." disabled />
          <InputEyeButton disabled onChangeVisibility={visible => handleChangeVisibility(visible, 10)} />
        </InputBox>
        <Caption variant="success">Caption Success</Caption>
      </InputField>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField control={form.control} name="email" render={({
          field
        }) => <FormItem>
                <InputField>
                  <FormLabel>Form</FormLabel>
                  <InputBox>
                    <InputIcon name="RiLockPasswordFill" />
                    <FormControl>
                      <TextInput ref={inputRefs[11]} type={inputTypes[11]} placeholder="Placeholder..." onChange={field.onChange} defaultValue={field.value} />
                    </FormControl>
                    <InputEyeButton onChangeVisibility={visible => handleChangeVisibility(visible, 11)} />
                  </InputBox>
                  <FormCaption>Caption</FormCaption>
                  <FormMessage />
                </InputField>
              </FormItem>} />
          <Button type="submit" className="mt-6">
            Submit
          </Button>
        </form>
      </Form>
    </div>;
}`,...C.parameters?.docs?.source}}};const U=["Default","TextField","Search","Id","Password"],K=Object.freeze(Object.defineProperty({__proto__:null,Default:y,Id:b,Password:C,Search:I,TextField:x,__namedExportsOrder:U,default:J},Symbol.toStringTag,{value:"Module"}));export{y as D,K as I,C as P,I as S,x as T,b as a};
