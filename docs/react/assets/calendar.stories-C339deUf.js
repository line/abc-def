import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{e as o}from"./index-MPVjHJeJ.js";import{C as r,m as n}from"./timepicker-6LgBjDoY.js";const v={title:"Calendar",component:r,args:{mode:"default",showToday:!0,showOutsideDays:!0},argTypes:{mode:{description:"Set the selection mode of the Calendar.",table:{category:"Calendar",type:{summary:"default | single | multiple | range"},defaultValue:{summary:"default"}},control:"radio",options:["default","single","multiple","range"]},showToday:{description:"Set whether to display today's date in the Calendar.",table:{category:"Calendar",defaultValue:{summary:"true"}},control:"boolean"},showOutsideDays:{description:"Set whether to display days outside the current month in the Calendar.",table:{category:"Calendar",defaultValue:{summary:"true"}},control:"boolean"}},decorators:t=>e.jsx(t,{}),render:({mode:t,showToday:a,showOutsideDays:s})=>{const[m,f]=o.useState(new Date),[D,p]=o.useState(void 0),[S,h]=o.useState(void 0);return t==="default"?e.jsx(r,{mode:t,showToday:a,showOutsideDays:s}):t==="single"?e.jsxs("div",{children:[e.jsx(r,{mode:t,showToday:a,showOutsideDays:s,selected:m,onSelect:f}),e.jsxs(n,{variant:"subtle",children:["Selected Date: ",m?.toDateString()]})]}):t==="multiple"?e.jsxs("div",{children:[e.jsx(r,{mode:t,showToday:a,selected:D,onSelect:p}),e.jsx(n,{variant:"subtle",children:"Selected Dates: "})," ",D?.map((x,j)=>e.jsxs(e.Fragment,{children:[j!==0&&", ",e.jsx(n,{variant:"subtle",children:x.toDateString()})]}))]}):t==="range"?e.jsxs("div",{children:[e.jsx(r,{mode:t,showToday:a,selected:S,onSelect:h}),e.jsxs(n,{variant:"subtle",children:["Selected Date (from): ",S?.from?.toDateString()]}),", ",e.jsxs(n,{variant:"subtle",children:["Selected Date (to): ",S?.to?.toDateString()]})]}):e.jsx(e.Fragment,{})}},g={},d=()=>e.jsx(r,{mode:"default"}),l=()=>{const[t,a]=o.useState(void 0);return e.jsxs(e.Fragment,{children:[e.jsx(r,{mode:"single",selected:t,onSelect:a}),e.jsxs(n,{variant:"subtle",children:["Selected Date: ",t?.toDateString()]})]})},i=()=>{const[t,a]=o.useState(void 0);return e.jsxs(e.Fragment,{children:[e.jsx(r,{mode:"multiple",selected:t,onSelect:a}),e.jsx(n,{variant:"subtle",children:"Selected Dates: "})," ",t?.map((s,m)=>e.jsxs(o.Fragment,{children:[m!==0&&", ",e.jsx(n,{variant:"subtle",children:s.toDateString()})]},m))]})},c=()=>{const[t,a]=o.useState(void 0);return e.jsxs(e.Fragment,{children:[e.jsx(r,{mode:"range",selected:t,onSelect:a}),e.jsxs(n,{variant:"subtle",children:["Selected Date (from): ",t?.from?.toDateString()]}),", ",e.jsxs(n,{variant:"subtle",children:["Selected Date (to): ",t?.to?.toDateString()]})]})},u=()=>{const[t,a]=o.useState(void 0);return e.jsxs(e.Fragment,{children:[e.jsx(r,{mode:"range",onSelect:s=>{s?.from!=null&&a({from:s.from,to:s.to})},selected:t,numberOfMonths:2,defaultMonth:new Date(new Date().setMonth(new Date().getMonth()-1))}),e.jsxs(n,{variant:"subtle",children:["Selected Date (from): ",t?.from?.toDateString()]}),", ",e.jsxs(n,{variant:"subtle",children:["Selected Date (to): ",t?.to?.toDateString()]})]})};d.__docgenInfo={description:"",methods:[],displayName:"Mode_Default"};l.__docgenInfo={description:"",methods:[],displayName:"Mode_Single"};i.__docgenInfo={description:"",methods:[],displayName:"Mode_Multiple"};c.__docgenInfo={description:"",methods:[],displayName:"Mode_Range"};u.__docgenInfo={description:"",methods:[],displayName:"Mode_Range2"};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:"{} as Story",...g.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:'() => <Calendar mode="default" />',...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
  const [singleDate, setSingleDate] = React.useState<Date | undefined>(undefined);
  return <>
      <Calendar mode="single" selected={singleDate} onSelect={setSingleDate} />
      <Badge variant="subtle">
        Selected Date: {singleDate?.toDateString()}
      </Badge>
    </>;
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
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
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
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
}`,...u.parameters?.docs?.source}}};const _=["Default","Mode_Default","Mode_Single","Mode_Multiple","Mode_Range","Mode_Range2"],R=Object.freeze(Object.defineProperty({__proto__:null,Default:g,Mode_Default:d,Mode_Multiple:i,Mode_Range:c,Mode_Range2:u,Mode_Single:l,__namedExportsOrder:_,default:v},Symbol.toStringTag,{value:"Module"}));export{R as C,g as D,d as M,l as a,i as b,c,u as d};
