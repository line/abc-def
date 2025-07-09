import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{a as M,o as g,b as j,e as I}from"./schemas-W2JqShKs.js";import{as as c,Q as x,at as u,au as d,av as S,aw as t,S as p,l as n,ac as b,ad as f,ae as v,af as C,ag as y,ah as F,ax as V,ai as z,aj as L,B as N,t as w}from"./timepicker-6LgBjDoY.js";const a={MultiSelectValue:{placeholder:"↳ MultiSelectValue: placeholder"},MultiSelectContent:{maxHeight:"↳ MultiSelectContent: maxHeight"},MultiSelectItem:{children:"↳ MultiSelectItem: children"}},R={title:"MultiSelect",component:c,decorators:l=>e.jsx(l,{}),render:l=>e.jsxs(c,{size:l.size,disabled:l.disabled,onValueChange:h=>console.log(h.join(", ")),children:[e.jsx(x,{children:"Label"}),e.jsx(u,{children:e.jsx(d,{placeholder:l[a.MultiSelectValue.placeholder]})}),e.jsxs(S,{maxHeight:l[a.MultiSelectContent.maxHeight],children:[e.jsx(t,{value:"txt",children:"text"}),e.jsx(t,{value:"kwd",children:"keyword"}),e.jsx(t,{value:"num",children:"number"}),e.jsx(t,{value:"dat",children:"date"}),e.jsx(t,{value:"sel",children:"select"}),e.jsx(t,{value:"mul",children:"multiSelect"}),e.jsx(t,{value:"img",children:l[a.MultiSelectItem.children]})]}),e.jsx(p,{children:"Caption"})]}),args:{size:void 0,disabled:!1,[a.MultiSelectValue.placeholder]:"Select a fruit...",[a.MultiSelectContent.maxHeight]:"auto",[a.MultiSelectItem.children]:"Custom"},argTypes:{size:{description:"Set the size of the Select.",table:{category:"MultiSelect",type:{summary:"large | medium | small | undefined"},defaultValue:{summary:void 0}},control:"select",options:["large","medium","small",void 0]},disabled:{description:"Set whether the Select is in an disabled state.",table:{category:"MultiSelect",defaultValue:{summary:"false"}}},[a.MultiSelectValue.placeholder]:{description:"Set the placeholder of the SelectValue.",table:{category:"MultiSelectValue",type:{summary:"string"}},control:"text"},[a.MultiSelectContent.maxHeight]:{description:"Set the maximum height of the SelectContent.",table:{category:"MultiSelectContent",type:{summary:"string"}},control:"text"},[a.MultiSelectItem.children]:{description:"Set the children of the SelectItem.",table:{category:"MultiSelectItem",type:{summary:"React.ReactNode"}},control:"text"},className:{table:{disable:!0}},value:{table:{disable:!0}},defaultValue:{table:{disable:!0}},onValueChange:{table:{disable:!0}},children:{table:{disable:!0}}}},o={},i=()=>e.jsxs(c,{defaultValue:["txt","kwd"],onValueChange:l=>console.log(l.join(", ")),children:[e.jsx(x,{children:"Label"}),e.jsx(u,{children:e.jsx(d,{placeholder:"Select a format"})}),e.jsxs(S,{children:[e.jsxs(t,{value:"txt",children:[e.jsx(n,{className:"mr-2",name:"RiMenu2Line",size:16}),"text"]}),e.jsxs(t,{value:"kwd",children:[e.jsx(n,{className:"mr-2",name:"RiFontSize",size:16}),"keyword"]}),e.jsxs(t,{value:"num",children:[e.jsx(n,{className:"mr-2",name:"RiHashtag",size:16}),"number"]}),e.jsxs(t,{value:"dat",children:[e.jsx(n,{className:"mr-2",name:"RiCalendar2Line",size:16}),"date"]}),e.jsxs(t,{value:"sel",children:[e.jsx(n,{className:"mr-2",name:"RiCheckboxCircleLine",size:16}),"select"]}),e.jsxs(t,{value:"mul",children:[e.jsx(n,{className:"mr-2",name:"RiListView",size:16}),"multiSelect"]}),e.jsxs(t,{value:"img",children:[e.jsx(n,{className:"mr-2",name:"RiImageLine",size:16}),"image"]})]}),e.jsx(p,{children:"Caption Info"})]}),s=()=>e.jsxs(c,{disabled:!0,defaultValue:["txt","kwd"],onValueChange:l=>console.log(l.join(", ")),children:[e.jsx(x,{children:"Label"}),e.jsx(u,{children:e.jsx(d,{placeholder:"Select a format"})}),e.jsxs(S,{children:[e.jsx(t,{value:"txt",children:"text"}),e.jsx(t,{value:"kwd",children:"keyword"}),e.jsx(t,{value:"num",children:"number"}),e.jsx(t,{value:"dat",children:"date"}),e.jsx(t,{value:"sel",children:"select"}),e.jsx(t,{value:"mul",children:"multiSelect"}),e.jsx(t,{value:"img",children:"image"})]}),e.jsx(p,{children:"Caption Info"})]}),_=g({email:j(I({error:"Please select an email to display."}),{error:"Please select an email to display."}).nonempty({error:"Please select at least one email."})}),r=()=>{const l=b({resolver:M(_)});function h(m){return w.success("Form submitted successfully",{description:JSON.stringify(m,null,2)})}return e.jsx(f,{...l,children:e.jsxs("form",{onSubmit:l.handleSubmit(h),children:[e.jsx(v,{control:l.control,name:"email",render:({field:m})=>e.jsx(C,{children:e.jsxs(c,{onValueChange:m.onChange,defaultValue:m.value,children:[e.jsx(y,{children:"Email"}),e.jsx(u,{asChild:!0,children:e.jsx(F,{children:e.jsx(V,{children:e.jsx(d,{placeholder:"Select a verified email to display"})})})}),e.jsxs(S,{children:[e.jsx(t,{value:"m@example.com",children:"m@example.com"}),e.jsx(t,{value:"m@google.com",children:"m@google.com"}),e.jsx(t,{value:"m@support.com",children:"m@support.com"})]}),e.jsx(z,{children:"You can manage email addresses in your email settings."}),e.jsx(L,{})]})})}),e.jsx(N,{type:"submit",className:"mt-6",children:"Submit"})]})})};i.__docgenInfo={description:"",methods:[],displayName:"With_Icon"};s.__docgenInfo={description:"",methods:[],displayName:"Disabled"};r.__docgenInfo={description:"",methods:[],displayName:"Error_Form"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => <MultiSelect defaultValue={["txt", "kwd"]} onValueChange={value => console.log(value.join(", "))}>
    <Label>Label</Label>
    <MultiSelectTrigger>
      <MultiSelectValue placeholder="Select a format" />
    </MultiSelectTrigger>
    <MultiSelectContent>
      <MultiSelectItem value="txt">
        <Icon className="mr-2" name="RiMenu2Line" size={16} />
        text
      </MultiSelectItem>
      <MultiSelectItem value="kwd">
        <Icon className="mr-2" name="RiFontSize" size={16} />
        keyword
      </MultiSelectItem>
      <MultiSelectItem value="num">
        <Icon className="mr-2" name="RiHashtag" size={16} />
        number
      </MultiSelectItem>
      <MultiSelectItem value="dat">
        <Icon className="mr-2" name="RiCalendar2Line" size={16} />
        date
      </MultiSelectItem>
      <MultiSelectItem value="sel">
        <Icon className="mr-2" name="RiCheckboxCircleLine" size={16} />
        select
      </MultiSelectItem>
      <MultiSelectItem value="mul">
        <Icon className="mr-2" name="RiListView" size={16} />
        multiSelect
      </MultiSelectItem>
      <MultiSelectItem value="img">
        <Icon className="mr-2" name="RiImageLine" size={16} />
        image
      </MultiSelectItem>
    </MultiSelectContent>
    <Caption>Caption Info</Caption>
  </MultiSelect>`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => <MultiSelect disabled defaultValue={["txt", "kwd"]} onValueChange={value => console.log(value.join(", "))}>
    <Label>Label</Label>
    <MultiSelectTrigger>
      <MultiSelectValue placeholder="Select a format" />
    </MultiSelectTrigger>
    <MultiSelectContent>
      <MultiSelectItem value="txt">text</MultiSelectItem>
      <MultiSelectItem value="kwd">keyword</MultiSelectItem>
      <MultiSelectItem value="num">number</MultiSelectItem>
      <MultiSelectItem value="dat">date</MultiSelectItem>
      <MultiSelectItem value="sel">select</MultiSelectItem>
      <MultiSelectItem value="mul">multiSelect</MultiSelectItem>
      <MultiSelectItem value="img">image</MultiSelectItem>
    </MultiSelectContent>
    <Caption>Caption Info</Caption>
  </MultiSelect>`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
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
              <MultiSelect onValueChange={field.onChange} defaultValue={field.value}>
                <FormLabel>Email</FormLabel>
                <MultiSelectTrigger asChild>
                  <FormControl>
                    <MultiSelectTriggerButton>
                      <MultiSelectValue placeholder="Select a verified email to display" />
                    </MultiSelectTriggerButton>
                  </FormControl>
                </MultiSelectTrigger>
                <MultiSelectContent>
                  <MultiSelectItem value="m@example.com">
                    m@example.com
                  </MultiSelectItem>
                  <MultiSelectItem value="m@google.com">
                    m@google.com
                  </MultiSelectItem>
                  <MultiSelectItem value="m@support.com">
                    m@support.com
                  </MultiSelectItem>
                </MultiSelectContent>
                <FormCaption>
                  You can manage email addresses in your email settings.
                </FormCaption>
                <FormMessage />
              </MultiSelect>
            </FormItem>} />
        <Button type="submit" className="mt-6">
          Submit
        </Button>
      </form>
    </Form>;
}`,...r.parameters?.docs?.source}}};const k=["Default","With_Icon","Disabled","Error_Form"],H=Object.freeze(Object.defineProperty({__proto__:null,Default:o,Disabled:s,Error_Form:r,With_Icon:i,__namedExportsOrder:k,default:R},Symbol.toStringTag,{value:"Module"}));export{o as D,r as E,H as M,i as W,s as a};
