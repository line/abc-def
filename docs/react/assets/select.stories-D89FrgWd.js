import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{I as q,ak as S,aB as i,al as x,am as g,an as v,ao as h,aC as j,ap as t,aD as Q,aE as I,l as n,aF as B,aG as P,aH as A,aI as J,aJ as c,aK as K}from"./timepicker-B-KcMAi6.js";const l={SelectLabel:{children:"↳ SelectLabel: children"},SelectTrigger:{error:"↳ SelectTrigger: error"},SelectValue:{placeholder:"↳ SelectValue: placeholder"},SelectContent:{position:"↳ SelectContent: position",maxHeight:"↳ SelectContent: maxHeight"},SelectItem:{children:"↳ SelectItem: children"},SelectCaption:{icon:"↳ SelectCaption: icon",variant:"↳ SelectCaption: variant",children:"↳ SelectCaption: children"}},U={title:"Select",component:S,decorators:a=>e.jsx(a,{}),render:a=>e.jsxs(S,{size:a.size,children:[e.jsx(i,{children:a[l.SelectLabel.children]}),e.jsx(x,{error:a[l.SelectTrigger.error],children:e.jsx(g,{placeholder:a[l.SelectValue.placeholder]})}),e.jsxs(v,{position:a[l.SelectContent.position],maxHeight:a[l.SelectContent.maxHeight],children:[e.jsxs(h,{children:[e.jsx(j,{children:"Fruits"}),e.jsx(t,{value:"app",children:"Apple"}),e.jsx(t,{value:"ban",children:"Banana"}),e.jsx(t,{value:"blu",children:"Blueberry"}),e.jsx(t,{value:"gra",children:"Grapes"}),e.jsx(t,{value:"pin",children:a[l.SelectItem.children]})]}),e.jsx(Q,{}),e.jsxs(h,{children:[e.jsx(j,{children:"Vegetables"}),e.jsx(t,{value:"tom",children:"Tomato"}),e.jsx(t,{value:"cab",children:"Cabbage"}),e.jsx(t,{value:"let",children:"Lettuce"}),e.jsx(t,{value:"car",children:"Carrot"}),e.jsx(t,{value:"oni",children:"Onion"})]})]}),e.jsx(I,{icon:a[l.SelectCaption.icon],variant:a[l.SelectCaption.variant],children:a[l.SelectCaption.children]})]}),args:{size:void 0,[l.SelectLabel.children]:"Title",[l.SelectTrigger.error]:!1,[l.SelectValue.placeholder]:"Select a fruit...",[l.SelectContent.position]:"popper",[l.SelectContent.maxHeight]:"auto",[l.SelectItem.children]:"Custom",[l.SelectCaption.icon]:void 0,[l.SelectCaption.variant]:"default",[l.SelectCaption.children]:"Caption"},argTypes:{size:{description:"Set the size of the Select.",table:{category:"Select",type:{summary:"large | medium | small | undefined"},defaultValue:{summary:void 0}},control:"select",options:["large","medium","small",void 0]},[l.SelectTrigger.error]:{description:"Set whether the SelectTrigger is in an error state.",table:{category:"SelectTrigger",defaultValue:{summary:"false"}}},[l.SelectLabel.children]:{description:"Set the children of the SelectLabel.",table:{category:"SelectLabel",type:{summary:"React.ReactNode"}},control:"text"},[l.SelectValue.placeholder]:{description:"Set the placeholder of the SelectValue.",table:{category:"SelectValue",type:{summary:"string"}},control:"text"},[l.SelectContent.position]:{description:"Set the position where the SelectContent appears.",table:{category:"SelectContent",defaultValue:{summary:"popper"},type:{summary:"item-aligned | popper"}},control:"radio",options:["item-aligned","popper"]},[l.SelectContent.maxHeight]:{description:"Set the maximum height of the SelectContent.",table:{category:"SelectContent",type:{summary:"string"}},control:"text"},[l.SelectItem.children]:{description:"Set the children of the SelectItem.",table:{category:"SelectItem",type:{summary:"React.ReactNode"}},control:"text"},[l.SelectCaption.variant]:{description:"Set the variant of the SelectCaption.",table:{category:"SelectCaption",type:{summary:"default | success | info | error"},defaultValue:{summary:"default"}},control:"radio",options:["default","success","info","error"]},[l.SelectCaption.icon]:{description:"Set the left icon of the SelectCaption.",table:{category:"SelectCaption",type:{summary:"IconNameType"}},control:"select",options:q},[l.SelectCaption.children]:{description:"Set the children of the SelectCaption.",table:{category:"SelectCaption",type:{summary:"React.ReactNode"}},control:"text"},className:{table:{disable:!0}},value:{table:{disable:!0}}}},p={},r=()=>e.jsxs(S,{onValueChange:a=>console.log("single select value: ",a),children:[e.jsx(i,{children:"Label"}),e.jsx(x,{children:e.jsx(g,{placeholder:"Select a format"})}),e.jsx(v,{children:e.jsxs(h,{children:[e.jsx(t,{value:"txt",children:"text"}),e.jsx(t,{value:"kwd",children:"keyword"}),e.jsx(t,{value:"num",children:"number"}),e.jsx(t,{value:"dat",children:"date"}),e.jsx(t,{value:"sel",children:"select"}),e.jsx(t,{value:"mul",children:"multiSelect"}),e.jsx(t,{value:"img",children:"image"})]})}),e.jsx(I,{variant:"default",children:"Caption Default"})]}),s=()=>e.jsxs(S,{defaultValue:"txt",onValueChange:a=>console.log("single select value: ",a),children:[e.jsx(i,{children:"Label"}),e.jsx(x,{children:e.jsx(g,{placeholder:"Select a format"})}),e.jsx(v,{children:e.jsxs(h,{children:[e.jsxs(t,{value:"txt",children:[e.jsx(n,{className:"mr-2",name:"RiMenu2Line",size:16}),"text"]}),e.jsxs(t,{value:"kwd",children:[e.jsx(n,{className:"mr-2",name:"RiFontSize",size:16}),"keyword"]}),e.jsxs(t,{value:"num",children:[e.jsx(n,{className:"mr-2",name:"RiHashtag",size:16}),"number"]}),e.jsxs(t,{value:"dat",children:[e.jsx(n,{className:"mr-2",name:"RiCalendar2Line",size:16}),"date"]}),e.jsxs(t,{value:"sel",children:[e.jsx(n,{className:"mr-2",name:"RiCheckboxCircleLine",size:16}),"select"]}),e.jsxs(t,{value:"mul",children:[e.jsx(n,{className:"mr-2",name:"RiListView",size:16}),"multiSelect"]}),e.jsxs(t,{value:"img",children:[e.jsx(n,{className:"mr-2",name:"RiImageLine",size:16}),"image"]})]})}),e.jsx(I,{variant:"success",children:"Caption Info"})]}),o=()=>e.jsxs(S,{onValueChange:a=>console.log("single select value: ",a),children:[e.jsx(i,{children:"Label"}),e.jsx(x,{error:!0,children:e.jsx(g,{placeholder:"Select a timezone (Disabled)"})}),e.jsx(v,{children:e.jsxs(h,{children:[e.jsx(t,{value:"txt",children:"text"}),e.jsx(t,{value:"kwd",children:"keyword"}),e.jsx(t,{value:"num",children:"number"}),e.jsx(t,{value:"dat",children:"date"}),e.jsx(t,{value:"sel",children:"select"}),e.jsx(t,{value:"mul",children:"multiSelect"}),e.jsx(t,{value:"img",children:"image"})]})}),e.jsx(I,{variant:"error",children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit."})]}),m=()=>e.jsxs(S,{onValueChange:a=>console.log("single select value: ",a),children:[e.jsx(i,{children:"Label"}),e.jsx(x,{disabled:!0,children:e.jsx(g,{placeholder:"Select a timezone (Disabled)"})}),e.jsx(v,{children:e.jsxs(h,{children:[e.jsx(t,{value:"txt",children:"text"}),e.jsx(t,{value:"kwd",children:"keyword"}),e.jsx(t,{value:"num",children:"number"}),e.jsx(t,{value:"dat",children:"date"}),e.jsx(t,{value:"sel",children:"select"}),e.jsx(t,{value:"mul",children:"multiSelect"}),e.jsx(t,{value:"img",children:"image"})]})}),e.jsx(I,{variant:"info",children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit."})]}),u=()=>e.jsxs(B,{onValueChange:a=>console.log(a.join(", ")),children:[e.jsx(i,{children:"Label"}),e.jsx(P,{children:e.jsx(A,{placeholder:"Select a format"})}),e.jsxs(J,{children:[e.jsx(c,{value:"txt",children:"text"}),e.jsx(c,{value:"kwd",children:"keyword"}),e.jsx(c,{value:"num",children:"number"}),e.jsx(c,{value:"dat",children:"date"}),e.jsx(c,{value:"sel",children:"select"}),e.jsx(c,{value:"mul",children:"multiSelect"}),e.jsx(c,{value:"img",children:"image"})]}),e.jsx(K,{children:"Caption Info"})]}),d=()=>e.jsxs(B,{defaultValue:["txt","kwd"],onValueChange:a=>console.log(a.join(", ")),children:[e.jsx(i,{children:"Label"}),e.jsx(P,{children:e.jsx(A,{placeholder:"Select a format"})}),e.jsxs(J,{children:[e.jsxs(c,{value:"txt",children:[e.jsx(n,{className:"mr-2",name:"RiMenu2Line",size:16}),"text"]}),e.jsxs(c,{value:"kwd",children:[e.jsx(n,{className:"mr-2",name:"RiFontSize",size:16}),"keyword"]}),e.jsxs(c,{value:"num",children:[e.jsx(n,{className:"mr-2",name:"RiHashtag",size:16}),"number"]}),e.jsxs(c,{value:"dat",children:[e.jsx(n,{className:"mr-2",name:"RiCalendar2Line",size:16}),"date"]}),e.jsxs(c,{value:"sel",children:[e.jsx(n,{className:"mr-2",name:"RiCheckboxCircleLine",size:16}),"select"]}),e.jsxs(c,{value:"mul",children:[e.jsx(n,{className:"mr-2",name:"RiListView",size:16}),"multiSelect"]}),e.jsxs(c,{value:"img",children:[e.jsx(n,{className:"mr-2",name:"RiImageLine",size:16}),"image"]})]}),e.jsx(K,{children:"Caption Info"})]});r.__docgenInfo={description:"",methods:[],displayName:"Single"};s.__docgenInfo={description:"",methods:[],displayName:"Single_With_Icon"};o.__docgenInfo={description:"",methods:[],displayName:"Error"};m.__docgenInfo={description:"",methods:[],displayName:"Disabled"};u.__docgenInfo={description:"",methods:[],displayName:"Multi"};d.__docgenInfo={description:"",methods:[],displayName:"Multi_With_Icon"};var C,b,M;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:"{}",...(M=(b=p.parameters)==null?void 0:b.docs)==null?void 0:M.source}}};var f,L,y;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
  return <Select onValueChange={value => console.log("single select value: ", value)}>
      <SelectLabel>Label</SelectLabel>
      <SelectTrigger>
        <SelectValue placeholder="Select a format" />
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
      <SelectCaption variant="default">Caption Default</SelectCaption>
    </Select>;
}`,...(y=(L=r.parameters)==null?void 0:L.docs)==null?void 0:y.source}}};var z,N,V;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`() => {
  return <Select defaultValue="txt" onValueChange={value => console.log("single select value: ", value)}>
      <SelectLabel>Label</SelectLabel>
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
      <SelectCaption variant="success">Caption Info</SelectCaption>
    </Select>;
}`,...(V=(N=s.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};var R,w,k;o.parameters={...o.parameters,docs:{...(R=o.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
  return <Select onValueChange={value => console.log("single select value: ", value)}>
      <SelectLabel>Label</SelectLabel>
      <SelectTrigger error>
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
      <SelectCaption variant="error">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      </SelectCaption>
    </Select>;
}`,...(k=(w=o.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var _,T,D;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`() => {
  return <Select onValueChange={value => console.log("single select value: ", value)}>
      <SelectLabel>Label</SelectLabel>
      <SelectTrigger disabled>
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
      <SelectCaption variant="info">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      </SelectCaption>
    </Select>;
}`,...(D=(T=m.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};var G,H,E;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`() => <MultiSelect onValueChange={value => console.log(value.join(", "))}>
    <SelectLabel>Label</SelectLabel>
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
  </MultiSelect>`,...(E=(H=u.parameters)==null?void 0:H.docs)==null?void 0:E.source}}};var F,W,O;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`() => <MultiSelect defaultValue={["txt", "kwd"]} onValueChange={value => console.log(value.join(", "))}>
    <SelectLabel>Label</SelectLabel>
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
  </MultiSelect>`,...(O=(W=d.parameters)==null?void 0:W.docs)==null?void 0:O.source}}};const X=["Default","Single","Single_With_Icon","Error","Disabled","Multi","Multi_With_Icon"],$=Object.freeze(Object.defineProperty({__proto__:null,Default:p,Disabled:m,Error:o,Multi:u,Multi_With_Icon:d,Single:r,Single_With_Icon:s,__namedExportsOrder:X,default:U},Symbol.toStringTag,{value:"Module"}));export{p as D,o as E,u as M,$ as S,r as a,s as b,m as c,d};
