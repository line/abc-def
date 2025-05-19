import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{e as d}from"./index-DubqEmGm.js";import{C as o,m as r}from"./timepicker-CDrXOmXz.js";const A={title:"Calendar",component:o,args:{mode:"default",showToday:!0,showOutsideDays:!0},argTypes:{mode:{description:"Set the selection mode of the Calendar.",table:{category:"Calendar",type:{summary:"default | single | multiple | range"},defaultValue:{summary:"default"}},control:"radio",options:["default","single","multiple","range"]},showToday:{description:"Set whether to display today's date in the Calendar.",table:{category:"Calendar",defaultValue:{summary:"true"}},control:"boolean"},showOutsideDays:{description:"Set whether to display days outside the current month in the Calendar.",table:{category:"Calendar",defaultValue:{summary:"true"}},control:"boolean"}},decorators:t=>e.jsx(t,{}),render:({mode:t,showToday:n,showOutsideDays:s})=>{var h,x;const[a,l]=d.useState(new Date),[f,P]=d.useState(void 0),[i,T]=d.useState(void 0);return t==="default"?e.jsx(o,{mode:t,showToday:n,showOutsideDays:s}):t==="single"?e.jsxs("div",{children:[e.jsx(o,{mode:t,showToday:n,showOutsideDays:s,selected:a,onSelect:l}),e.jsxs(r,{variant:"subtle",children:["Selected Date: ",a==null?void 0:a.toDateString()]})]}):t==="multiple"?e.jsxs("div",{children:[e.jsx(o,{mode:t,showToday:n,selected:f,onSelect:P}),e.jsx(r,{variant:"subtle",children:"Selected Dates: "})," ",f==null?void 0:f.map((p,q)=>e.jsxs(e.Fragment,{children:[q!==0&&", ",e.jsx(r,{variant:"subtle",children:p==null?void 0:p.toDateString()})]}))]}):t==="range"?e.jsxs("div",{children:[e.jsx(o,{mode:t,showToday:n,selected:i,onSelect:T}),e.jsxs(r,{variant:"subtle",children:["Selected Date (from): ",(h=i==null?void 0:i.from)==null?void 0:h.toDateString()]}),", ",e.jsxs(r,{variant:"subtle",children:["Selected Date (to): ",(x=i==null?void 0:i.to)==null?void 0:x.toDateString()]})]}):e.jsx(e.Fragment,{})}},D={},c=()=>e.jsx(o,{mode:"default"}),u=()=>{const[t,n]=d.useState(void 0);return e.jsxs(e.Fragment,{children:[e.jsx(o,{mode:"single",selected:t,onSelect:n}),e.jsxs(r,{variant:"subtle",children:["Selected Date: ",t==null?void 0:t.toDateString()]})]})},m=()=>{const[t,n]=d.useState(void 0);return e.jsxs(e.Fragment,{children:[e.jsx(o,{mode:"multiple",selected:t,onSelect:n}),e.jsx(r,{variant:"subtle",children:"Selected Dates: "})," ",t==null?void 0:t.map((s,a)=>e.jsxs(d.Fragment,{children:[a!==0&&", ",e.jsx(r,{variant:"subtle",children:s.toDateString()})]},a))]})},g=()=>{var s,a;const[t,n]=d.useState(void 0);return e.jsxs(e.Fragment,{children:[e.jsx(o,{mode:"range",selected:t,onSelect:n}),e.jsxs(r,{variant:"subtle",children:["Selected Date (from): ",(s=t==null?void 0:t.from)==null?void 0:s.toDateString()]}),", ",e.jsxs(r,{variant:"subtle",children:["Selected Date (to): ",(a=t==null?void 0:t.to)==null?void 0:a.toDateString()]})]})},S=()=>{var s,a;const[t,n]=d.useState(void 0);return e.jsxs(e.Fragment,{children:[e.jsx(o,{mode:"range",onSelect:l=>{(l==null?void 0:l.from)!=null&&n({from:l.from,to:l.to})},selected:t,numberOfMonths:2,defaultMonth:new Date(new Date().setMonth(new Date().getMonth()-1))}),e.jsxs(r,{variant:"subtle",children:["Selected Date (from): ",(s=t==null?void 0:t.from)==null?void 0:s.toDateString()]}),", ",e.jsxs(r,{variant:"subtle",children:["Selected Date (to): ",(a=t==null?void 0:t.to)==null?void 0:a.toDateString()]})]})};c.__docgenInfo={description:"",methods:[],displayName:"Mode_Default"};u.__docgenInfo={description:"",methods:[],displayName:"Mode_Single"};m.__docgenInfo={description:"",methods:[],displayName:"Mode_Multiple"};g.__docgenInfo={description:"",methods:[],displayName:"Mode_Range"};S.__docgenInfo={description:"",methods:[],displayName:"Mode_Range2"};var j,_,b;D.parameters={...D.parameters,docs:{...(j=D.parameters)==null?void 0:j.docs,source:{originalSource:"{} as Story",...(b=(_=D.parameters)==null?void 0:_.docs)==null?void 0:b.source}}};var M,v,y;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:'() => <Calendar mode="default" />',...(y=(v=c.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var C,B,R;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
  const [singleDate, setSingleDate] = React.useState<Date | undefined>(undefined);
  return <>
      <Calendar mode="single" selected={singleDate} onSelect={setSingleDate} />
      <Badge variant="subtle">
        Selected Date: {singleDate?.toDateString()}
      </Badge>
    </>;
}`,...(R=(B=u.parameters)==null?void 0:B.docs)==null?void 0:R.source}}};var w,F,O;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`() => {
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
}`,...(O=(F=m.parameters)==null?void 0:F.docs)==null?void 0:O.source}}};var I,N,V;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`() => {
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
}`,...(V=(N=g.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};var E,k,z;S.parameters={...S.parameters,docs:{...(E=S.parameters)==null?void 0:E.docs,source:{originalSource:`() => {
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
}`,...(z=(k=S.parameters)==null?void 0:k.docs)==null?void 0:z.source}}};const G=["Default","Mode_Default","Mode_Single","Mode_Multiple","Mode_Range","Mode_Range2"],L=Object.freeze(Object.defineProperty({__proto__:null,Default:D,Mode_Default:c,Mode_Multiple:m,Mode_Range:g,Mode_Range2:S,Mode_Single:u,__namedExportsOrder:G,default:A},Symbol.toStringTag,{value:"Module"}));export{L as C,D,c as M,u as a,m as b,g as c,S as d};
