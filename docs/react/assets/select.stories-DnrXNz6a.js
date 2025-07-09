import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{a as j,o as v,e as I}from"./schemas-W2JqShKs.js";import{ay as i,Q as p,az as d,aA as u,aB as S,aC as h,aD as t,S as x,l as n,ac as b,ad as f,ae as C,af as y,ag as F,ah as z,ai as V,aj as L,B as N,t as R}from"./timepicker-6LgBjDoY.js";const a={SelectValue:{placeholder:"↳ SelectValue: placeholder"},SelectContent:{position:"↳ SelectContent: position",maxHeight:"↳ SelectContent: maxHeight"},SelectItem:{children:"↳ SelectItem: children"}},_={title:"Select",component:i,decorators:l=>e.jsx(l,{}),render:l=>e.jsxs(i,{size:l.size,disabled:l.disabled,children:[e.jsx(p,{children:"Label"}),e.jsx(d,{children:e.jsx(u,{placeholder:l[a.SelectValue.placeholder]})}),e.jsx(S,{position:l[a.SelectContent.position],maxHeight:l[a.SelectContent.maxHeight],children:e.jsxs(h,{children:[e.jsx(t,{value:"txt",children:"text"}),e.jsx(t,{value:"kwd",children:"keyword"}),e.jsx(t,{value:"num",children:"number"}),e.jsx(t,{value:"dat",children:"date"}),e.jsx(t,{value:"sel",children:"select"}),e.jsx(t,{value:"mul",children:"multiSelect"}),e.jsx(t,{value:"img",children:l[a.SelectItem.children]})]})}),e.jsx(x,{children:"Caption"})]}),args:{size:void 0,disabled:!1,[a.SelectValue.placeholder]:"Select a fruit...",[a.SelectContent.position]:"popper",[a.SelectContent.maxHeight]:"auto",[a.SelectItem.children]:"Custom"},argTypes:{size:{description:"Set the size of the Select.",table:{category:"Select",type:{summary:"large | medium | small | undefined"},defaultValue:{summary:void 0}},control:"select",options:["large","medium","small",void 0]},disabled:{description:"Set whether the Select is in an disabled state.",table:{category:"Select",defaultValue:{summary:"false"}}},[a.SelectValue.placeholder]:{description:"Set the placeholder of the SelectValue.",table:{category:"SelectValue",type:{summary:"string"}},control:"text"},[a.SelectContent.position]:{description:"Set the position where the SelectContent appears.",table:{category:"SelectContent",defaultValue:{summary:"popper"},type:{summary:"item-aligned | popper"}},control:"radio",options:["item-aligned","popper"]},[a.SelectContent.maxHeight]:{description:"Set the maximum height of the SelectContent.",table:{category:"SelectContent",type:{summary:"string"}},control:"text"},[a.SelectItem.children]:{description:"Set the children of the SelectItem.",table:{category:"SelectItem",type:{summary:"React.ReactNode"}},control:"text"},className:{table:{disable:!0}},value:{table:{disable:!0}}}},c={},s=()=>e.jsxs(i,{defaultValue:"txt",onValueChange:l=>console.log("single select value: ",l),children:[e.jsx(p,{children:"Label"}),e.jsx(d,{children:e.jsx(u,{placeholder:"Select a format"})}),e.jsx(S,{children:e.jsxs(h,{children:[e.jsxs(t,{value:"txt",children:[e.jsx(n,{className:"mr-2",name:"RiMenu2Line",size:16}),"text"]}),e.jsxs(t,{value:"kwd",children:[e.jsx(n,{className:"mr-2",name:"RiFontSize",size:16}),"keyword"]}),e.jsxs(t,{value:"num",children:[e.jsx(n,{className:"mr-2",name:"RiHashtag",size:16}),"number"]}),e.jsxs(t,{value:"dat",children:[e.jsx(n,{className:"mr-2",name:"RiCalendar2Line",size:16}),"date"]}),e.jsxs(t,{value:"sel",children:[e.jsx(n,{className:"mr-2",name:"RiCheckboxCircleLine",size:16}),"select"]}),e.jsxs(t,{value:"mul",children:[e.jsx(n,{className:"mr-2",name:"RiListView",size:16}),"multiSelect"]}),e.jsxs(t,{value:"img",children:[e.jsx(n,{className:"mr-2",name:"RiImageLine",size:16}),"image"]})]})}),e.jsx(x,{variant:"success",children:"Caption Info"})]}),o=()=>e.jsxs(i,{disabled:!0,onValueChange:l=>console.log("single select value: ",l),children:[e.jsx(p,{children:"Label"}),e.jsx(d,{children:e.jsx(u,{placeholder:"Select a timezone (Disabled)"})}),e.jsx(S,{children:e.jsxs(h,{children:[e.jsx(t,{value:"txt",children:"text"}),e.jsx(t,{value:"kwd",children:"keyword"}),e.jsx(t,{value:"num",children:"number"}),e.jsx(t,{value:"dat",children:"date"}),e.jsx(t,{value:"sel",children:"select"}),e.jsx(t,{value:"mul",children:"multiSelect"}),e.jsx(t,{value:"img",children:"image"})]})}),e.jsx(x,{variant:"info",children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit."})]}),w=v({email:I({error:"Please select an email to display."})}),r=()=>{const l=b({resolver:j(w)});function g(m){return R.success("Form submitted successfully",{description:JSON.stringify(m,null,2)})}return e.jsx(f,{...l,children:e.jsxs("form",{onSubmit:l.handleSubmit(g),children:[e.jsx(C,{control:l.control,name:"email",render:({field:m})=>e.jsx(y,{children:e.jsxs(i,{onValueChange:m.onChange,defaultValue:m.value,children:[e.jsx(F,{children:"Email"}),e.jsx(z,{children:e.jsx(d,{children:e.jsx(u,{placeholder:"Select a verified email to display"})})}),e.jsxs(S,{children:[e.jsx(t,{value:"m@example.com",children:"m@example.com"}),e.jsx(t,{value:"m@google.com",children:"m@google.com"}),e.jsx(t,{value:"m@support.com",children:"m@support.com"})]}),e.jsx(V,{children:"You can manage email addresses in your email settings."}),e.jsx(L,{})]})})}),e.jsx(N,{type:"submit",className:"mt-6",children:"Submit"})]})})};s.__docgenInfo={description:"",methods:[],displayName:"With_Icon"};o.__docgenInfo={description:"",methods:[],displayName:"Disabled"};r.__docgenInfo={description:"",methods:[],displayName:"Error_Form"};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"{}",...c.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  return <Select defaultValue="txt" onValueChange={value => console.log("single select value: ", value)}>
      <Label>Label</Label>
      <SelectTrigger>
        <SelectValue placeholder="Select a format" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="txt">
            <Icon className="mr-2" name="RiMenu2Line" size={16} />
            text
          </SelectItem>
          <SelectItem value="kwd">
            <Icon className="mr-2" name="RiFontSize" size={16} />
            keyword
          </SelectItem>
          <SelectItem value="num">
            <Icon className="mr-2" name="RiHashtag" size={16} />
            number
          </SelectItem>
          <SelectItem value="dat">
            <Icon className="mr-2" name="RiCalendar2Line" size={16} />
            date
          </SelectItem>
          <SelectItem value="sel">
            <Icon className="mr-2" name="RiCheckboxCircleLine" size={16} />
            select
          </SelectItem>
          <SelectItem value="mul">
            <Icon className="mr-2" name="RiListView" size={16} />
            multiSelect
          </SelectItem>
          <SelectItem value="img">
            <Icon className="mr-2" name="RiImageLine" size={16} />
            image
          </SelectItem>
        </SelectGroup>
      </SelectContent>
      <Caption variant="success">Caption Info</Caption>
    </Select>;
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  return <Select disabled onValueChange={value => console.log("single select value: ", value)}>
      <Label>Label</Label>
      <SelectTrigger>
        <SelectValue placeholder="Select a timezone (Disabled)" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="txt">text</SelectItem>
          <SelectItem value="kwd">keyword</SelectItem>
          <SelectItem value="num">number</SelectItem>
          <SelectItem value="dat">date</SelectItem>
          <SelectItem value="sel">select</SelectItem>
          <SelectItem value="mul">multiSelect</SelectItem>
          <SelectItem value="img">image</SelectItem>
        </SelectGroup>
      </SelectContent>
      <Caption variant="info">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      </Caption>
    </Select>;
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
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
  return <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField control={form.control} name="email" render={({
        field
      }) => <FormItem>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a verified email to display" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="m@example.com">m@example.com</SelectItem>
                  <SelectItem value="m@google.com">m@google.com</SelectItem>
                  <SelectItem value="m@support.com">m@support.com</SelectItem>
                </SelectContent>
                <FormCaption>
                  You can manage email addresses in your email settings.
                </FormCaption>
                <FormMessage />
              </Select>
            </FormItem>} />
        <Button type="submit" className="mt-6">
          Submit
        </Button>
      </form>
    </Form>;
}`,...r.parameters?.docs?.source}}};const k=["Default","With_Icon","Disabled","Error_Form"],H=Object.freeze(Object.defineProperty({__proto__:null,Default:c,Disabled:o,Error_Form:r,With_Icon:s,__namedExportsOrder:k,default:_},Symbol.toStringTag,{value:"Module"}));export{c as D,r as E,H as S,s as W,o as a};
