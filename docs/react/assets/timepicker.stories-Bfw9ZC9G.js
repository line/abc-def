import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{e as n}from"./index-MPVjHJeJ.js";import{E as u,F as g,l as D,m as C}from"./timepicker-6LgBjDoY.js";const P={title:"TimePicker",component:void 0,decorators:t=>e.jsx(t,{})},d={render:()=>{const[t,c]=n.useState(new Date);return e.jsx(u,{picker:"hours",date:t,onDateChange:c,className:"w-12"})}},l={render:()=>{const[t,c]=n.useState(new Date),[r,a]=n.useState(t&&t.getHours()>=12?"PM":"AM"),o=s=>{c(s)};return e.jsx(g,{className:"w-fit",period:r,setPeriod:a,date:t,onDateChange:s=>{o(s),s&&s.getHours()>=12?a("PM"):a("AM")}})}},f={render:()=>{const[t,c]=n.useState(new Date),r=n.useRef(null),a=n.useRef(null),o=n.useRef(null),s=p=>{c(p)};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex items-center justify-center gap-2",children:[e.jsx("label",{htmlFor:"timepicker-hour",className:"flex cursor-pointer items-center",children:e.jsx(D,{name:"RiTimeLine",size:16})}),e.jsx(u,{picker:"hours",date:t,id:"timepicker-hour",onDateChange:s,ref:a,onRightFocus:()=>r.current?.focus(),className:"w-12"}),e.jsx(u,{picker:"minutes",date:t,onDateChange:s,ref:r,onLeftFocus:()=>a.current?.focus(),onRightFocus:()=>o.current?.focus(),className:"w-12"}),e.jsx(u,{picker:"seconds",date:t,onDateChange:s,ref:o,onLeftFocus:()=>r.current?.focus(),className:"w-12"})]}),e.jsxs(C,{variant:"subtle",children:["selected date: ",t?.toLocaleString()]})]})}},m={render:()=>{const[t,c]=n.useState(new Date),r=n.useRef(null),a=n.useRef(null),o=n.useRef(null),s=n.useRef(null),[p,R]=n.useState(t&&t.getHours()>=12?"PM":"AM"),h=i=>{c(i)};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex items-center justify-center gap-2",children:[e.jsx("label",{htmlFor:"timepicker-hour",className:"flex cursor-pointer items-center",children:e.jsx(D,{name:"RiTimeLine",size:16})}),e.jsx(u,{picker:"12hours",date:t,id:"timepicker-hour",onDateChange:h,ref:a,period:p,onRightFocus:()=>r.current?.focus(),className:"w-12"}),e.jsx(u,{picker:"minutes",date:t,onDateChange:h,ref:r,onLeftFocus:()=>a.current?.focus(),onRightFocus:()=>o.current?.focus(),className:"w-12"}),e.jsx(u,{picker:"seconds",date:t,onDateChange:h,ref:o,onLeftFocus:()=>r.current?.focus(),onRightFocus:()=>s.current?.focus(),className:"w-12"}),e.jsx(g,{period:p,setPeriod:R,date:t,onDateChange:i=>{h(i),i&&i.getHours()>=12?R("PM"):R("AM")},ref:s,onLeftFocus:()=>o.current?.focus(),className:"w-fit"})]}),e.jsxs(C,{variant:"subtle",children:["selected date: ",t?.toLocaleString()]})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date());
    return <TimePickerInput picker="hours" date={date} onDateChange={setDate} className="w-12" />;
  }
} as Story`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date());
    const [period, setPeriod] = React.useState<"AM" | "PM">(date && date.getHours() >= 12 ? "PM" : "AM");
    const onChange = (date: Date | undefined) => {
      setDate(date);
    };
    return <TimePeriodSelect className="w-fit" period={period} setPeriod={setPeriod} date={date} onDateChange={date => {
      onChange(date);
      if (date && date.getHours() >= 12) {
        setPeriod("PM");
      } else {
        setPeriod("AM");
      }
    }} />;
  }
}`,...l.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date());
    const minuteRef = React.useRef<HTMLInputElement>(null);
    const hourRef = React.useRef<HTMLInputElement>(null);
    const secondRef = React.useRef<HTMLInputElement>(null);
    const onChange = (date: Date | undefined) => {
      setDate(date);
    };
    return <>
        <div className="flex items-center justify-center gap-2">
          <label htmlFor="timepicker-hour" className="flex cursor-pointer items-center">
            <Icon name="RiTimeLine" size={16} />
          </label>
          <TimePickerInput picker="hours" date={date} id="timepicker-hour" onDateChange={onChange} ref={hourRef} onRightFocus={() => minuteRef.current?.focus()} className="w-12" />
          <TimePickerInput picker="minutes" date={date} onDateChange={onChange} ref={minuteRef} onLeftFocus={() => hourRef.current?.focus()} onRightFocus={() => secondRef.current?.focus()} className="w-12" />
          <TimePickerInput picker="seconds" date={date} onDateChange={onChange} ref={secondRef} onLeftFocus={() => minuteRef.current?.focus()} className="w-12" />
        </div>
        <Badge variant="subtle">selected date: {date?.toLocaleString()}</Badge>
      </>;
  }
} as Story`,...f.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date());
    const minuteRef = React.useRef<HTMLInputElement>(null);
    const hourRef = React.useRef<HTMLInputElement>(null);
    const secondRef = React.useRef<HTMLInputElement>(null);
    const periodRef = React.useRef<HTMLButtonElement>(null);
    const [period, setPeriod] = React.useState<"AM" | "PM">(date && date.getHours() >= 12 ? "PM" : "AM");
    const onChange = (date: Date | undefined) => {
      setDate(date);
    };
    return <>
        <div className="flex items-center justify-center gap-2">
          <label htmlFor="timepicker-hour" className="flex cursor-pointer items-center">
            <Icon name="RiTimeLine" size={16} />
          </label>
          <TimePickerInput picker="12hours" date={date} id="timepicker-hour" onDateChange={onChange} ref={hourRef} period={period} onRightFocus={() => minuteRef.current?.focus()} className="w-12" />
          <TimePickerInput picker="minutes" date={date} onDateChange={onChange} ref={minuteRef} onLeftFocus={() => hourRef.current?.focus()} onRightFocus={() => secondRef.current?.focus()} className="w-12" />
          <TimePickerInput picker="seconds" date={date} onDateChange={onChange} ref={secondRef} onLeftFocus={() => minuteRef.current?.focus()} onRightFocus={() => periodRef.current?.focus()} className="w-12" />
          <TimePeriodSelect period={period} setPeriod={setPeriod} date={date} onDateChange={date => {
          onChange(date);
          if (date && date.getHours() >= 12) {
            setPeriod("PM");
          } else {
            setPeriod("AM");
          }
        }} ref={periodRef} onLeftFocus={() => secondRef.current?.focus()} className="w-fit" />
        </div>
        <Badge variant="subtle">selected date: {date?.toLocaleString()}</Badge>
      </>;
  }
} as Story`,...m.parameters?.docs?.source}}};const k=["Input","Select","HourCycle24","HourCycle12"],M=Object.freeze(Object.defineProperty({__proto__:null,HourCycle12:m,HourCycle24:f,Input:d,Select:l,__namedExportsOrder:k,default:P},Symbol.toStringTag,{value:"Module"}));export{f as H,d as I,l as S,M as T,m as a};
