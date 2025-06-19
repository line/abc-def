import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{e as d}from"./index-MPVjHJeJ.js";import{C as o,m as r}from"./timepicker-B-KcMAi6.js";const A={title:"Calendar",component:o,args:{mode:"default",showToday:!0,showOutsideDays:!0},argTypes:{mode:{description:"Set the selection mode of the Calendar.",table:{category:"Calendar",type:{summary:"default | single | multiple | range"},defaultValue:{summary:"default"}},control:"radio",options:["default","single","multiple","range"]},showToday:{description:"Set whether to display today's date in the Calendar.",table:{category:"Calendar",defaultValue:{summary:"true"}},control:"boolean"},showOutsideDays:{description:"Set whether to display days outside the current month in the Calendar.",table:{category:"Calendar",defaultValue:{summary:"true"}},control:"boolean"}},decorators:t=>e.jsx(t,{}),render:({mode:t,showToday:n,showOutsideDays:s})=>{var p,h;const[a,l]=d.useState(new Date),[f,z]=d.useState(void 0),[i,P]=d.useState(void 0);return t==="default"?e.jsx(o,{mode:t,showToday:n,showOutsideDays:s}):t==="single"?e.jsxs("div",{children:[e.jsx(o,{mode:t,showToday:n,showOutsideDays:s,selected:a,onSelect:l}),e.jsxs(r,{variant:"subtle",children:["Selected Date: ",a==null?void 0:a.toDateString()]})]}):t==="multiple"?e.jsxs("div",{children:[e.jsx(o,{mode:t,showToday:n,selected:f,onSelect:z}),e.jsx(r,{variant:"subtle",children:"Selected Dates: "})," ",f==null?void 0:f.map((T,q)=>e.jsxs(e.Fragment,{children:[q!==0&&", ",e.jsx(r,{variant:"subtle",children:T.toDateString()})]}))]}):t==="range"?e.jsxs("div",{children:[e.jsx(o,{mode:t,showToday:n,selected:i,onSelect:P}),e.jsxs(r,{variant:"subtle",children:["Selected Date (from): ",(p=i==null?void 0:i.from)==null?void 0:p.toDateString()]}),", ",e.jsxs(r,{variant:"subtle",children:["Selected Date (to): ",(h=i==null?void 0:i.to)==null?void 0:h.toDateString()]})]}):e.jsx(e.Fragment,{})}},D={},c=()=>e.jsx(o,{mode:"default"}),u=()=>{const[t,n]=d.useState(void 0);return e.jsxs(e.Fragment,{children:[e.jsx(o,{mode:"single",selected:t,onSelect:n}),e.jsxs(r,{variant:"subtle",children:["Selected Date: ",t==null?void 0:t.toDateString()]})]})},m=()=>{const[t,n]=d.useState(void 0);return e.jsxs(e.Fragment,{children:[e.jsx(o,{mode:"multiple",selected:t,onSelect:n}),e.jsx(r,{variant:"subtle",children:"Selected Dates: "})," ",t==null?void 0:t.map((s,a)=>e.jsxs(d.Fragment,{children:[a!==0&&", ",e.jsx(r,{variant:"subtle",children:s.toDateString()})]},a))]})},g=()=>{var s,a;const[t,n]=d.useState(void 0);return e.jsxs(e.Fragment,{children:[e.jsx(o,{mode:"range",selected:t,onSelect:n}),e.jsxs(r,{variant:"subtle",children:["Selected Date (from): ",(s=t==null?void 0:t.from)==null?void 0:s.toDateString()]}),", ",e.jsxs(r,{variant:"subtle",children:["Selected Date (to): ",(a=t==null?void 0:t.to)==null?void 0:a.toDateString()]})]})},S=()=>{var s,a;const[t,n]=d.useState(void 0);return e.jsxs(e.Fragment,{children:[e.jsx(o,{mode:"range",onSelect:l=>{(l==null?void 0:l.from)!=null&&n({from:l.from,to:l.to})},selected:t,numberOfMonths:2,defaultMonth:new Date(new Date().setMonth(new Date().getMonth()-1))}),e.jsxs(r,{variant:"subtle",children:["Selected Date (from): ",(s=t==null?void 0:t.from)==null?void 0:s.toDateString()]}),", ",e.jsxs(r,{variant:"subtle",children:["Selected Date (to): ",(a=t==null?void 0:t.to)==null?void 0:a.toDateString()]})]})};c.__docgenInfo={description:"",methods:[],displayName:"Mode_Default"};u.__docgenInfo={description:"",methods:[],displayName:"Mode_Single"};m.__docgenInfo={description:"",methods:[],displayName:"Mode_Multiple"};g.__docgenInfo={description:"",methods:[],displayName:"Mode_Range"};S.__docgenInfo={description:"",methods:[],displayName:"Mode_Range2"};var x,j,_;D.parameters={...D.parameters,docs:{...(x=D.parameters)==null?void 0:x.docs,source:{originalSource:"{} as Story",...(_=(j=D.parameters)==null?void 0:j.docs)==null?void 0:_.source}}};var b,M,v;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:'() => <Calendar mode="default" />',...(v=(M=c.parameters)==null?void 0:M.docs)==null?void 0:v.source}}};var y,C,B;u.parameters={...u.parameters,docs:{...(y=u.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
  const [singleDate, setSingleDate] = React.useState<Date | undefined>(undefined);
  return <>
      <Calendar mode="single" selected={singleDate} onSelect={setSingleDate} />
      <Badge variant="subtle">
        Selected Date: {singleDate?.toDateString()}
      </Badge>
    </>;
}`,...(B=(C=u.parameters)==null?void 0:C.docs)==null?void 0:B.source}}};var R,w,F;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
  const [dates, setDates] = React.useState<Date[] | undefined>(undefined);
  return <>
      <Calendar mode="multiple" selected={dates} onSelect={setDates} />
      <Badge variant="subtle">Selected Dates: </Badge>{" "}
      {dates?.map((date, index) => {
      return <React.Fragment key={index}>
            {index !== 0 && ", "}
            <Badge variant="subtle">{date.toDateString()}</Badge>
          </React.Fragment>;
    })}
    </>;
}`,...(F=(w=m.parameters)==null?void 0:w.docs)==null?void 0:F.source}}};var O,I,N;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`() => {
  const [date, setDate] = React.useState<DateRange | undefined>(undefined);
  return <>
      <Calendar mode="range" selected={date} onSelect={setDate} />
      <Badge variant="subtle">
        Selected Date (from): {date?.from?.toDateString()}
      </Badge>
      {", "}
      <Badge variant="subtle">
        Selected Date (to): {date?.to?.toDateString()}
      </Badge>
    </>;
}`,...(N=(I=g.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};var V,E,k;S.parameters={...S.parameters,docs:{...(V=S.parameters)==null?void 0:V.docs,source:{originalSource:`() => {
  const [date, setDate] = React.useState<DateRange | undefined>(undefined);
  return <>
      <Calendar mode="range" onSelect={(value: {
      from?: Date;
      to?: Date;
    } | undefined) => {
      if (value?.from != null) {
        setDate({
          from: value.from,
          to: value.to
        });
      }
    }} selected={date} numberOfMonths={2} defaultMonth={new Date(new Date().setMonth(new Date().getMonth() - 1))} />
      <Badge variant="subtle">
        Selected Date (from): {date?.from?.toDateString()}
      </Badge>
      {", "}
      <Badge variant="subtle">
        Selected Date (to): {date?.to?.toDateString()}
      </Badge>
    </>;
}`,...(k=(E=S.parameters)==null?void 0:E.docs)==null?void 0:k.source}}};const G=["Default","Mode_Default","Mode_Single","Mode_Multiple","Mode_Range","Mode_Range2"],L=Object.freeze(Object.defineProperty({__proto__:null,Default:D,Mode_Default:c,Mode_Multiple:m,Mode_Range:g,Mode_Range2:S,Mode_Single:u,__namedExportsOrder:G,default:A},Symbol.toStringTag,{value:"Module"}));export{L as C,D,c as M,u as a,m as b,g as c,S as d};
