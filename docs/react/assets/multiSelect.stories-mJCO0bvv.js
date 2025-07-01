import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{I as w,ak as o,al as s,am as m,an as d,ao as S,ap as t,aq as M,l as i}from"./timepicker-BAlauJgr.js";const l={MultiSelectLabel:{children:"↳ MultiSelectLabel: children"},MultiSelectValue:{placeholder:"↳ MultiSelectValue: placeholder"},MultiSelectContent:{maxHeight:"↳ MultiSelectContent: maxHeight"},MultiSelectItem:{children:"↳ MultiSelectItem: children"},MultiSelectCaption:{icon:"↳ MultiSelectCaption: icon",variant:"↳ MultiSelectCaption: variant",children:"↳ MultiSelectCaption: children"}},k={title:"MultiSelect",component:o,decorators:a=>e.jsx(a,{}),render:a=>e.jsxs(o,{size:a.size,error:a.error,disabled:a.disabled,onValueChange:L=>console.log(L.join(", ")),children:[e.jsx(s,{children:a[l.MultiSelectLabel.children]}),e.jsx(m,{children:e.jsx(d,{placeholder:a[l.MultiSelectValue.placeholder]})}),e.jsxs(S,{maxHeight:a[l.MultiSelectContent.maxHeight],children:[e.jsx(t,{value:"txt",children:"text"}),e.jsx(t,{value:"kwd",children:"keyword"}),e.jsx(t,{value:"num",children:"number"}),e.jsx(t,{value:"dat",children:"date"}),e.jsx(t,{value:"sel",children:"select"}),e.jsx(t,{value:"mul",children:"multiSelect"}),e.jsx(t,{value:"img",children:a[l.MultiSelectItem.children]})]}),e.jsx(M,{icon:a[l.MultiSelectCaption.icon],variant:a[l.MultiSelectCaption.variant],children:a[l.MultiSelectCaption.children]})]}),args:{size:void 0,error:!1,disabled:!1,[l.MultiSelectLabel.children]:"Title",[l.MultiSelectValue.placeholder]:"Select a fruit...",[l.MultiSelectContent.maxHeight]:"auto",[l.MultiSelectItem.children]:"Custom",[l.MultiSelectCaption.icon]:void 0,[l.MultiSelectCaption.variant]:void 0,[l.MultiSelectCaption.children]:"Caption"},argTypes:{size:{description:"Set the size of the Select.",table:{category:"MultiSelect",type:{summary:"large | medium | small | undefined"},defaultValue:{summary:void 0}},control:"select",options:["large","medium","small",void 0]},error:{description:"Set whether the Select is in an error state.",table:{category:"MultiSelect",defaultValue:{summary:"false"}}},disabled:{description:"Set whether the Select is in an disabled state.",table:{category:"MultiSelect",defaultValue:{summary:"false"}}},[l.MultiSelectLabel.children]:{description:"Set the children of the SelectLabel.",table:{category:"MultiSelectLabel",type:{summary:"React.ReactNode"}},control:"text"},[l.MultiSelectValue.placeholder]:{description:"Set the placeholder of the SelectValue.",table:{category:"MultiSelectValue",type:{summary:"string"}},control:"text"},[l.MultiSelectContent.maxHeight]:{description:"Set the maximum height of the SelectContent.",table:{category:"MultiSelectContent",type:{summary:"string"}},control:"text"},[l.MultiSelectItem.children]:{description:"Set the children of the SelectItem.",table:{category:"MultiSelectItem",type:{summary:"React.ReactNode"}},control:"text"},[l.MultiSelectCaption.variant]:{description:"Set the variant of the SelectCaption.",table:{category:"MultiSelectCaption",type:{summary:"default | success | info | error | undefined"},defaultValue:{summary:void 0}},control:"radio",options:["default","success","info","error",void 0]},[l.MultiSelectCaption.icon]:{description:"Set the left icon of the SelectCaption.",table:{category:"MultiSelectCaption",type:{summary:"IconNameType"}},control:"select",options:w},[l.MultiSelectCaption.children]:{description:"Set the children of the SelectCaption.",table:{category:"MultiSelectCaption",type:{summary:"React.ReactNode"}},control:"text"},className:{table:{disable:!0}},value:{table:{disable:!0}},defaultValue:{table:{disable:!0}},onValueChange:{table:{disable:!0}},children:{table:{disable:!0}}}},r={},c=()=>e.jsxs(o,{defaultValue:["txt","kwd"],onValueChange:a=>console.log(a.join(", ")),children:[e.jsx(s,{children:"Label"}),e.jsx(m,{children:e.jsx(d,{placeholder:"Select a format"})}),e.jsxs(S,{children:[e.jsxs(t,{value:"txt",children:[e.jsx(i,{className:"mr-2",name:"RiMenu2Line",size:16}),"text"]}),e.jsxs(t,{value:"kwd",children:[e.jsx(i,{className:"mr-2",name:"RiFontSize",size:16}),"keyword"]}),e.jsxs(t,{value:"num",children:[e.jsx(i,{className:"mr-2",name:"RiHashtag",size:16}),"number"]}),e.jsxs(t,{value:"dat",children:[e.jsx(i,{className:"mr-2",name:"RiCalendar2Line",size:16}),"date"]}),e.jsxs(t,{value:"sel",children:[e.jsx(i,{className:"mr-2",name:"RiCheckboxCircleLine",size:16}),"select"]}),e.jsxs(t,{value:"mul",children:[e.jsx(i,{className:"mr-2",name:"RiListView",size:16}),"multiSelect"]}),e.jsxs(t,{value:"img",children:[e.jsx(i,{className:"mr-2",name:"RiImageLine",size:16}),"image"]})]}),e.jsx(M,{children:"Caption Info"})]}),n=()=>e.jsxs(o,{error:!0,defaultValue:["txt","kwd"],onValueChange:a=>console.log(a.join(", ")),children:[e.jsx(s,{children:"Label"}),e.jsx(m,{children:e.jsx(d,{placeholder:"Select a format"})}),e.jsxs(S,{children:[e.jsx(t,{value:"txt",children:"text"}),e.jsx(t,{value:"kwd",children:"keyword"}),e.jsx(t,{value:"num",children:"number"}),e.jsx(t,{value:"dat",children:"date"}),e.jsx(t,{value:"sel",children:"select"}),e.jsx(t,{value:"mul",children:"multiSelect"}),e.jsx(t,{value:"img",children:"image"})]}),e.jsx(M,{children:"Caption Info"})]}),u=()=>e.jsxs(o,{disabled:!0,defaultValue:["txt","kwd"],onValueChange:a=>console.log(a.join(", ")),children:[e.jsx(s,{children:"Label"}),e.jsx(m,{children:e.jsx(d,{placeholder:"Select a format"})}),e.jsxs(S,{children:[e.jsx(t,{value:"txt",children:"text"}),e.jsx(t,{value:"kwd",children:"keyword"}),e.jsx(t,{value:"num",children:"number"}),e.jsx(t,{value:"dat",children:"date"}),e.jsx(t,{value:"sel",children:"select"}),e.jsx(t,{value:"mul",children:"multiSelect"}),e.jsx(t,{value:"img",children:"image"})]}),e.jsx(M,{children:"Caption Info"})]});c.__docgenInfo={description:"",methods:[],displayName:"With_Icon"};n.__docgenInfo={description:"",methods:[],displayName:"Error"};u.__docgenInfo={description:"",methods:[],displayName:"Disabled"};var h,p,x;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(x=(p=r.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};var I,j,v;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`() => <MultiSelect defaultValue={["txt", "kwd"]} onValueChange={value => console.log(value.join(", "))}>
    <MultiSelectLabel>Label</MultiSelectLabel>
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
    <MultiSelectCaption>Caption Info</MultiSelectCaption>
  </MultiSelect>`,...(v=(j=c.parameters)==null?void 0:j.docs)==null?void 0:v.source}}};var g,b,C;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`() => <MultiSelect error defaultValue={["txt", "kwd"]} onValueChange={value => console.log(value.join(", "))}>
    <MultiSelectLabel>Label</MultiSelectLabel>
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
    <MultiSelectCaption>Caption Info</MultiSelectCaption>
  </MultiSelect>`,...(C=(b=n.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var f,y,V;u.parameters={...u.parameters,docs:{...(f=u.parameters)==null?void 0:f.docs,source:{originalSource:`() => <MultiSelect disabled defaultValue={["txt", "kwd"]} onValueChange={value => console.log(value.join(", "))}>
    <MultiSelectLabel>Label</MultiSelectLabel>
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
    <MultiSelectCaption>Caption Info</MultiSelectCaption>
  </MultiSelect>`,...(V=(y=u.parameters)==null?void 0:y.docs)==null?void 0:V.source}}};const N=["Default","With_Icon","Error","Disabled"],_=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Disabled:u,Error:n,With_Icon:c,__namedExportsOrder:N,default:k},Symbol.toStringTag,{value:"Module"}));export{r as D,n as E,_ as M,c as W,u as a};
