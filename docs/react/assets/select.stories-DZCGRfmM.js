import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{I as g,aj as i,aA as r,ak as s,al as o,am as S,an as n,aB as c,ao as t,aC as u,aD as I}from"./timepicker-BluA0Tv8.js";const l={SelectLabel:{children:"↳ SelectLabel: children"},SelectValue:{placeholder:"↳ SelectValue: placeholder"},SelectContent:{position:"↳ SelectContent: position",maxHeight:"↳ SelectContent: maxHeight"},SelectTrigger:{icon:"↳ SelectTrigger: icon"},SelectItem:{icon:"↳ SelectItem: icon",children:"↳ SelectItem: children"},SelectCaption:{icon:"↳ SelectCaption: icon",variant:"↳ SelectCaption: variant",children:"↳ SelectCaption: children"}},H={title:"Select",component:i,decorators:a=>e.jsx(a,{}),render:a=>e.jsxs(i,{type:a.type,error:a.error,children:[e.jsx(r,{children:a[l.SelectLabel.children]}),e.jsx(s,{icon:a[l.SelectTrigger.icon],children:e.jsx(o,{placeholder:a[l.SelectValue.placeholder]})}),e.jsx(S,{position:a[l.SelectContent.position],maxHeight:a[l.SelectContent.maxHeight],children:e.jsxs(n,{children:[e.jsx(c,{children:"Fruits"}),e.jsx(t,{value:"app",children:"Apple"}),e.jsx(t,{value:"ban",children:"Banana"}),e.jsx(t,{value:"blu",children:"Blueberry"}),e.jsx(t,{value:"gra",children:"Grapes"}),e.jsx(t,{value:"pin",icon:a[l.SelectItem.icon],children:a[l.SelectItem.children]})]})}),e.jsx(u,{icon:a[l.SelectCaption.icon],variant:a[l.SelectCaption.variant],children:a[l.SelectCaption.children]})]}),args:{type:"single",error:!1,[l.SelectLabel.children]:"Title",[l.SelectValue.placeholder]:"Select a fruit...",[l.SelectContent.position]:"popper",[l.SelectContent.maxHeight]:"auto",[l.SelectTrigger.icon]:void 0,[l.SelectItem.icon]:void 0,[l.SelectItem.children]:"Custom",[l.SelectCaption.icon]:void 0,[l.SelectCaption.variant]:"default",[l.SelectCaption.children]:"Caption"},argTypes:{type:{description:"Set whether the Select is single or multiple selection type.",table:{category:"Select",type:{summary:"single | multiple"},defaultValue:{summary:"single"}},control:"radio",options:["single","multiple"]},error:{description:"Set whether the Select is in an error state.",table:{category:"Select",defaultValue:{summary:"false"}}},[l.SelectLabel.children]:{description:"Set the children of the SelectLabel.",table:{category:"SelectLabel",type:{summary:"React.ReactNode"}},control:"text"},[l.SelectValue.placeholder]:{description:"Set the placeholder of the SelectValue.",table:{category:"SelectValue",type:{summary:"string"}},control:"text"},[l.SelectContent.position]:{description:"Set the position where the SelectContent appears.",table:{category:"SelectContent",defaultValue:{summary:"popper"},type:{summary:"item-aligned | popper"}},control:"radio",options:["item-aligned","popper"]},[l.SelectContent.maxHeight]:{description:"Set the maximum height of the SelectContent.",table:{category:"SelectContent",type:{summary:"string"}},control:"text"},[l.SelectTrigger.icon]:{description:"Set the left icon of the SelectTrigger.",table:{category:"SelectTrigger",type:{summary:"IconNameType"}},control:"select",options:g},[l.SelectItem.icon]:{description:"Set the left icon of the SelectItem.",table:{category:"SelectItem",type:{summary:"IconNameType"}},control:"select",options:g},[l.SelectItem.children]:{description:"Set the children of the SelectItem.",table:{category:"SelectItem",type:{summary:"React.ReactNode"}},control:"text"},[l.SelectCaption.variant]:{description:"Set the variant of the SelectCaption.",table:{category:"SelectCaption",type:{summary:"default | success | info | error"},defaultValue:{summary:"default"}},control:"radio",options:["default","success","info","error"]},[l.SelectCaption.icon]:{description:"Set the left icon of the SelectCaption.",table:{category:"SelectCaption",type:{summary:"IconNameType"}},control:"select",options:g},[l.SelectCaption.children]:{description:"Set the children of the SelectCaption.",table:{category:"SelectCaption",type:{summary:"React.ReactNode"}},control:"text"},size:{table:{disable:!0}},value:{table:{disable:!0}},onValuesChange:{table:{disable:!0}},values:{table:{disable:!0}}}},x={},d=()=>e.jsxs(i,{type:"single",onValueChange:a=>console.log("single select value: ",a),children:[e.jsx(r,{children:"Label"}),e.jsx(s,{children:e.jsx(o,{placeholder:"Select a format"})}),e.jsx(S,{maxHeight:"384px",children:e.jsxs(n,{children:[e.jsx(t,{value:"txt",children:"text"}),e.jsx(t,{value:"kwd",children:"keyword"}),e.jsx(t,{value:"num",children:"number"}),e.jsx(t,{value:"dat",children:"date"}),e.jsx(t,{value:"sel",children:"select"}),e.jsx(t,{value:"mul",children:"multiSelect"}),e.jsx(t,{value:"img",children:"image"})]})}),e.jsx(u,{variant:"default",children:"Caption Default"})]}),m=()=>e.jsxs(i,{type:"single",value:"txt",onValueChange:a=>console.log("single select value: ",a),children:[e.jsx(r,{children:"Label"}),e.jsx(s,{children:e.jsx(o,{placeholder:"Select a format"})}),e.jsx(S,{maxHeight:"384px",children:e.jsxs(n,{children:[e.jsx(t,{value:"txt",icon:"RiMenu2Line",children:"text"}),e.jsx(t,{value:"kwd",icon:"RiFontSize",children:"keyword"}),e.jsx(t,{value:"num",icon:"RiHashtag",children:"number"}),e.jsx(t,{value:"dat",icon:"RiCalendar2Line",children:"date"}),e.jsx(t,{value:"sel",icon:"RiCheckboxCircleLine",children:"select"}),e.jsx(t,{value:"mul",icon:"RiListView",children:"multiSelect"}),e.jsx(t,{value:"img",icon:"RiImageLine",children:"image"})]})}),e.jsx(u,{variant:"info",children:"Caption Info"})]}),p=()=>e.jsxs(i,{type:"multiple",values:[],onValuesChange:a=>console.log("multiple select values: ",a.join(", ")),children:[e.jsx(r,{children:"Label"}),e.jsx(s,{children:e.jsx(o,{placeholder:"Select a fruit"})}),e.jsx(S,{children:e.jsxs(n,{children:[e.jsx(c,{children:"Fruits"}),e.jsx(t,{value:"app",children:"Apple"}),e.jsx(t,{value:"ban",children:"Banana"}),e.jsx(t,{value:"blu",children:"Blueberry"}),e.jsx(t,{value:"gra",children:"Grapes"}),e.jsx(t,{value:"pin",children:"Pineapple"})]})}),e.jsx(u,{variant:"success",children:"Caption Success"})]}),h=()=>e.jsxs(i,{type:"multiple",values:["app","ban","blu"],onValuesChange:a=>console.log("multiple select values: ",a.join(", ")),children:[e.jsx(r,{children:"Label"}),e.jsx(s,{children:e.jsx(o,{placeholder:"Select a fruit"})}),e.jsx(S,{children:e.jsxs(n,{children:[e.jsx(c,{children:"Fruits"}),e.jsx(t,{value:"app",icon:"RiAppleLine",children:"Apple"}),e.jsx(t,{value:"ban",icon:"Ri4kLine",children:"Banana"}),e.jsx(t,{value:"blu",icon:"RiBlueskyLine",children:"Blueberry"}),e.jsx(t,{value:"gra",icon:"RiGraduationCapLine",children:"Grapes"}),e.jsx(t,{value:"pin",icon:"RiMapPinAddLine",children:"Pineapple"})]})}),e.jsx(u,{variant:"error",children:"Caption Error"})]}),v=()=>e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsxs(i,{type:"single",onValueChange:a=>console.log("single select value: ",a),children:[e.jsx(r,{children:"Label"}),e.jsx(s,{disabled:!0,children:e.jsx(o,{placeholder:"Select a timezone (Disabled)"})}),e.jsxs(S,{maxHeight:"384px",children:[e.jsxs(n,{children:[e.jsx(c,{children:"North America"}),e.jsx(t,{value:"est",children:"Eastern Standard Time (EST)"}),e.jsx(t,{value:"cst",children:"Central Standard Time (CST)"}),e.jsx(t,{value:"mst",children:"Mountain Standard Time (MST)"}),e.jsx(t,{value:"pst",children:"Pacific Standard Time (PST)"}),e.jsx(t,{value:"akst",children:"Alaska Standard Time (AKST)"}),e.jsx(t,{value:"hst",children:"Hawaii Standard Time (HST)"})]}),e.jsx(I,{}),e.jsxs(n,{children:[e.jsx(c,{children:"Europe & Africa"}),e.jsx(t,{value:"gmt",children:"Greenwich Mean Time (GMT)"}),e.jsx(t,{value:"cet",children:"Central European Time (CET)"}),e.jsx(t,{value:"eet",children:"Eastern European Time (EET)"}),e.jsx(t,{value:"west",children:"Western European Summer Time (WEST)"}),e.jsx(t,{value:"cat",children:"Central Africa Time (CAT)"}),e.jsx(t,{value:"eat",children:"East Africa Time (EAT)"})]}),e.jsx(I,{}),e.jsxs(n,{children:[e.jsx(c,{children:"Asia"}),e.jsx(t,{value:"msk",children:"Moscow Time (MSK)"}),e.jsx(t,{value:"ist",children:"India Standard Time (IST)"}),e.jsx(t,{value:"cst_china",children:"China Standard Time (CST)"}),e.jsx(t,{value:"jst",children:"Japan Standard Time (JST)"}),e.jsx(t,{value:"kst",children:"Korea Standard Time (KST)"}),e.jsx(t,{value:"ist_indonesia",children:"Indonesia Central Standard Time (WITA)"})]}),e.jsx(I,{}),e.jsxs(n,{children:[e.jsx(c,{children:"Australia & Pacific"}),e.jsx(t,{value:"awst",children:"Australian Western Standard Time (AWST)"}),e.jsx(t,{value:"acst",children:"Australian Central Standard Time (ACST)"}),e.jsx(t,{value:"aest",children:"Australian Eastern Standard Time (AEST)"}),e.jsx(t,{value:"nzst",children:"New Zealand Standard Time (NZST)"}),e.jsx(t,{value:"fjt",children:"Fiji Time (FJT)"})]}),e.jsx(I,{}),e.jsxs(n,{children:[e.jsx(c,{children:"South America"}),e.jsx(t,{value:"art",children:"Argentina Time (ART)"}),e.jsx(t,{value:"bot",children:"Bolivia Time (BOT)"}),e.jsx(t,{value:"brt",children:"Brasilia Time (BRT)"}),e.jsx(t,{value:"clt",children:"Chile Standard Time (CLT)"})]})]}),e.jsx(u,{variant:"info",children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit."})]}),e.jsxs(i,{type:"multiple",values:["app","ban","blu"],onValuesChange:a=>console.log("multiple select values: ",a.join(", ")),children:[e.jsx(r,{children:"Label"}),e.jsx(s,{disabled:!0,children:e.jsx(o,{placeholder:"Select a fruit (Disabled)"})}),e.jsx(S,{children:e.jsxs(n,{children:[e.jsx(c,{children:"Fruits"}),e.jsx(t,{value:"app",children:"Apple"}),e.jsx(t,{value:"ban",children:"Banana"}),e.jsx(t,{value:"blu",children:"Blueberry"}),e.jsx(t,{value:"gra",children:"Grapes"}),e.jsx(t,{value:"pin",children:"Pineapple"})]})}),e.jsx(u,{variant:"success",children:"Caption Success"})]})]});d.__docgenInfo={description:"",methods:[],displayName:"Single"};m.__docgenInfo={description:"",methods:[],displayName:"Single_With_Icon"};p.__docgenInfo={description:"",methods:[],displayName:"Multiple"};h.__docgenInfo={description:"",methods:[],displayName:"Multiple_With_Icon"};v.__docgenInfo={description:"",methods:[],displayName:"Disabled"};var j,T,b;x.parameters={...x.parameters,docs:{...(j=x.parameters)==null?void 0:j.docs,source:{originalSource:"{}",...(b=(T=x.parameters)==null?void 0:T.docs)==null?void 0:b.source}}};var C,y,L;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
  return <Select type="single" onValueChange={value => console.log("single select value: ", value)}>
      <SelectLabel>Label</SelectLabel>
      <SelectTrigger>
        <SelectValue placeholder="Select a format" />
      </SelectTrigger>
      <SelectContent maxHeight="384px">
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
}`,...(L=(y=d.parameters)==null?void 0:y.docs)==null?void 0:L.source}}};var f,A,G;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
  return <Select type="single" value="txt" onValueChange={value => console.log("single select value: ", value)}>
      <SelectLabel>Label</SelectLabel>
      <SelectTrigger>
        <SelectValue placeholder="Select a format" />
      </SelectTrigger>
      <SelectContent maxHeight="384px">
        <SelectGroup>
          <SelectItem value="txt" icon="RiMenu2Line">
            text
          </SelectItem>
          <SelectItem value="kwd" icon="RiFontSize">
            keyword
          </SelectItem>
          <SelectItem value="num" icon="RiHashtag">
            number
          </SelectItem>
          <SelectItem value="dat" icon="RiCalendar2Line">
            date
          </SelectItem>
          <SelectItem value="sel" icon="RiCheckboxCircleLine">
            select
          </SelectItem>
          <SelectItem value="mul" icon="RiListView">
            multiSelect
          </SelectItem>
          <SelectItem value="img" icon="RiImageLine">
            image
          </SelectItem>
        </SelectGroup>
      </SelectContent>
      <SelectCaption variant="info">Caption Info</SelectCaption>
    </Select>;
}`,...(G=(A=m.parameters)==null?void 0:A.docs)==null?void 0:G.source}}};var R,E,V;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
  return <Select type="multiple" values={[]} onValuesChange={values => console.log("multiple select values: ", values.join(", "))}>
      <SelectLabel>Label</SelectLabel>
      <SelectTrigger>
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectGroupLabel>Fruits</SelectGroupLabel>
          <SelectItem value="app">Apple</SelectItem>
          <SelectItem value="ban">Banana</SelectItem>
          <SelectItem value="blu">Blueberry</SelectItem>
          <SelectItem value="gra">Grapes</SelectItem>
          <SelectItem value="pin">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
      <SelectCaption variant="success">Caption Success</SelectCaption>
    </Select>;
}`,...(V=(E=p.parameters)==null?void 0:E.docs)==null?void 0:V.source}}};var _,w,B;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:`() => {
  return <Select type="multiple" values={["app", "ban", "blu"]} onValuesChange={values => console.log("multiple select values: ", values.join(", "))}>
      <SelectLabel>Label</SelectLabel>
      <SelectTrigger>
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectGroupLabel>Fruits</SelectGroupLabel>
          <SelectItem value="app" icon="RiAppleLine">
            Apple
          </SelectItem>
          <SelectItem value="ban" icon="Ri4kLine">
            Banana
          </SelectItem>
          <SelectItem value="blu" icon="RiBlueskyLine">
            Blueberry
          </SelectItem>
          <SelectItem value="gra" icon="RiGraduationCapLine">
            Grapes
          </SelectItem>
          <SelectItem value="pin" icon="RiMapPinAddLine">
            Pineapple
          </SelectItem>
        </SelectGroup>
      </SelectContent>
      <SelectCaption variant="error">Caption Error</SelectCaption>
    </Select>;
}`,...(B=(w=h.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};var M,k,N;v.parameters={...v.parameters,docs:{...(M=v.parameters)==null?void 0:M.docs,source:{originalSource:`() => {
  return <div className="grid grid-cols-2 gap-2">
      <Select type="single" onValueChange={value => console.log("single select value: ", value)}>
        <SelectLabel>Label</SelectLabel>
        <SelectTrigger disabled>
          <SelectValue placeholder="Select a timezone (Disabled)" />
        </SelectTrigger>
        <SelectContent maxHeight="384px">
          <SelectGroup>
            <SelectGroupLabel>North America</SelectGroupLabel>
            <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
            <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
            <SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
            <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
            <SelectItem value="akst">Alaska Standard Time (AKST)</SelectItem>
            <SelectItem value="hst">Hawaii Standard Time (HST)</SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectGroupLabel>Europe & Africa</SelectGroupLabel>
            <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
            <SelectItem value="cet">Central European Time (CET)</SelectItem>
            <SelectItem value="eet">Eastern European Time (EET)</SelectItem>
            <SelectItem value="west">
              Western European Summer Time (WEST)
            </SelectItem>
            <SelectItem value="cat">Central Africa Time (CAT)</SelectItem>
            <SelectItem value="eat">East Africa Time (EAT)</SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectGroupLabel>Asia</SelectGroupLabel>
            <SelectItem value="msk">Moscow Time (MSK)</SelectItem>
            <SelectItem value="ist">India Standard Time (IST)</SelectItem>
            <SelectItem value="cst_china">China Standard Time (CST)</SelectItem>
            <SelectItem value="jst">Japan Standard Time (JST)</SelectItem>
            <SelectItem value="kst">Korea Standard Time (KST)</SelectItem>
            <SelectItem value="ist_indonesia">
              Indonesia Central Standard Time (WITA)
            </SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectGroupLabel>Australia & Pacific</SelectGroupLabel>
            <SelectItem value="awst">
              Australian Western Standard Time (AWST)
            </SelectItem>
            <SelectItem value="acst">
              Australian Central Standard Time (ACST)
            </SelectItem>
            <SelectItem value="aest">
              Australian Eastern Standard Time (AEST)
            </SelectItem>
            <SelectItem value="nzst">
              New Zealand Standard Time (NZST)
            </SelectItem>
            <SelectItem value="fjt">Fiji Time (FJT)</SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectGroupLabel>South America</SelectGroupLabel>
            <SelectItem value="art">Argentina Time (ART)</SelectItem>
            <SelectItem value="bot">Bolivia Time (BOT)</SelectItem>
            <SelectItem value="brt">Brasilia Time (BRT)</SelectItem>
            <SelectItem value="clt">Chile Standard Time (CLT)</SelectItem>
          </SelectGroup>
        </SelectContent>
        <SelectCaption variant="info">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </SelectCaption>
      </Select>
      <Select type="multiple" values={["app", "ban", "blu"]} onValuesChange={values => console.log("multiple select values: ", values.join(", "))}>
        <SelectLabel>Label</SelectLabel>
        <SelectTrigger disabled>
          <SelectValue placeholder="Select a fruit (Disabled)" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectGroupLabel>Fruits</SelectGroupLabel>
            <SelectItem value="app">Apple</SelectItem>
            <SelectItem value="ban">Banana</SelectItem>
            <SelectItem value="blu">Blueberry</SelectItem>
            <SelectItem value="gra">Grapes</SelectItem>
            <SelectItem value="pin">Pineapple</SelectItem>
          </SelectGroup>
        </SelectContent>
        <SelectCaption variant="success">Caption Success</SelectCaption>
      </Select>
    </div>;
}`,...(N=(k=v.parameters)==null?void 0:k.docs)==null?void 0:N.source}}};const P=["Default","Single","Single_With_Icon","Multiple","Multiple_With_Icon","Disabled"],F=Object.freeze(Object.defineProperty({__proto__:null,Default:x,Disabled:v,Multiple:p,Multiple_With_Icon:h,Single:d,Single_With_Icon:m,__namedExportsOrder:P,default:H},Symbol.toStringTag,{value:"Module"}));export{x as D,p as M,F as S,d as a,m as b,h as c,v as d};
