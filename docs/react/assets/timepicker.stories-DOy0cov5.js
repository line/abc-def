import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{e as r}from"./index-MPVjHJeJ.js";import{E as d,F as T,l as L,m as H}from"./timepicker-BAlauJgr.js";const I={title:"TimePicker",component:void 0,decorators:e=>n.jsx(e,{})},l={render:()=>{const[e,i]=r.useState(new Date);return n.jsx(d,{picker:"hours",date:e,onDateChange:i,className:"w-12"})}},f={render:()=>{const[e,i]=r.useState(new Date),[o,c]=r.useState(e&&e.getHours()>=12?"PM":"AM"),u=a=>{i(a)};return n.jsx(T,{className:"w-fit",period:o,setPeriod:c,date:e,onDateChange:a=>{u(a),a&&a.getHours()>=12?c("PM"):c("AM")}})}},m={render:()=>{const[e,i]=r.useState(new Date),o=r.useRef(null),c=r.useRef(null),u=r.useRef(null),a=s=>{i(s)};return n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"flex items-center justify-center gap-2",children:[n.jsx("label",{htmlFor:"timepicker-hour",className:"flex cursor-pointer items-center",children:n.jsx(L,{name:"RiTimeLine",size:16})}),n.jsx(d,{picker:"hours",date:e,id:"timepicker-hour",onDateChange:a,ref:c,onRightFocus:()=>{var s;return(s=o.current)==null?void 0:s.focus()},className:"w-12"}),n.jsx(d,{picker:"minutes",date:e,onDateChange:a,ref:o,onLeftFocus:()=>{var s;return(s=c.current)==null?void 0:s.focus()},onRightFocus:()=>{var s;return(s=u.current)==null?void 0:s.focus()},className:"w-12"}),n.jsx(d,{picker:"seconds",date:e,onDateChange:a,ref:u,onLeftFocus:()=>{var s;return(s=o.current)==null?void 0:s.focus()},className:"w-12"})]}),n.jsxs(H,{variant:"subtle",children:["selected date: ",e==null?void 0:e.toLocaleString()]})]})}},p={render:()=>{const[e,i]=r.useState(new Date),o=r.useRef(null),c=r.useRef(null),u=r.useRef(null),a=r.useRef(null),[s,R]=r.useState(e&&e.getHours()>=12?"PM":"AM"),h=t=>{i(t)};return n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"flex items-center justify-center gap-2",children:[n.jsx("label",{htmlFor:"timepicker-hour",className:"flex cursor-pointer items-center",children:n.jsx(L,{name:"RiTimeLine",size:16})}),n.jsx(d,{picker:"12hours",date:e,id:"timepicker-hour",onDateChange:h,ref:c,period:s,onRightFocus:()=>{var t;return(t=o.current)==null?void 0:t.focus()},className:"w-12"}),n.jsx(d,{picker:"minutes",date:e,onDateChange:h,ref:o,onLeftFocus:()=>{var t;return(t=c.current)==null?void 0:t.focus()},onRightFocus:()=>{var t;return(t=u.current)==null?void 0:t.focus()},className:"w-12"}),n.jsx(d,{picker:"seconds",date:e,onDateChange:h,ref:u,onLeftFocus:()=>{var t;return(t=o.current)==null?void 0:t.focus()},onRightFocus:()=>{var t;return(t=a.current)==null?void 0:t.focus()},className:"w-12"}),n.jsx(T,{period:s,setPeriod:R,date:e,onDateChange:t=>{h(t),t&&t.getHours()>=12?R("PM"):R("AM")},ref:a,onLeftFocus:()=>{var t;return(t=u.current)==null?void 0:t.focus()},className:"w-fit"})]}),n.jsxs(H,{variant:"subtle",children:["selected date: ",e==null?void 0:e.toLocaleString()]})]})}};var g,D,C;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date());
    return <TimePickerInput picker="hours" date={date} onDateChange={setDate} className="w-12" />;
  }
} as Story`,...(C=(D=l.parameters)==null?void 0:D.docs)==null?void 0:C.source}}};var P,k,x;f.parameters={...f.parameters,docs:{...(P=f.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(x=(k=f.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var S,j,M;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
} as Story`,...(M=(j=m.parameters)==null?void 0:j.docs)==null?void 0:M.source}}};var F,w,N;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
} as Story`,...(N=(w=p.parameters)==null?void 0:w.docs)==null?void 0:N.source}}};const b=["Input","Select","HourCycle24","HourCycle12"],E=Object.freeze(Object.defineProperty({__proto__:null,HourCycle12:p,HourCycle24:m,Input:l,Select:f,__namedExportsOrder:b,default:I},Symbol.toStringTag,{value:"Module"}));export{m as H,l as I,f as S,E as T,p as a};
