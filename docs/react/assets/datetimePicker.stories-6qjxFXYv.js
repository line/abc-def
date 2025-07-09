import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{e as n}from"./index-MPVjHJeJ.js";import{C as g,D as R,l as x,E as c,m as D,F as j}from"./timepicker-6LgBjDoY.js";const v={title:"Combinations/DatetimePicker"},u=()=>{const[t,a]=n.useState(new Date),s=n.useRef(null),o=n.useRef(null),r=n.useRef(null),i=p=>{a(p)};return e.jsxs(e.Fragment,{children:[e.jsx(g,{mode:"single",selected:t,onSelect:a,footer:e.jsxs("div",{className:"border-neutral-transparent border-t-8",children:[e.jsx(R,{variant:"subtle"}),e.jsx("div",{className:"px-2 pt-2",children:e.jsxs("div",{className:"flex items-center justify-center gap-2",children:[e.jsx("label",{htmlFor:"timepicker-hour",className:"flex cursor-pointer items-center",children:e.jsx(x,{name:"RiTimeLine",size:16})}),e.jsx(c,{picker:"hours",date:t,id:"timepicker-hour",onDateChange:i,ref:o,onRightFocus:()=>s.current?.focus(),className:"w-12"}),e.jsx(c,{picker:"minutes",date:t,onDateChange:i,ref:s,onLeftFocus:()=>o.current?.focus(),onRightFocus:()=>r.current?.focus(),className:"w-12"}),e.jsx(c,{picker:"seconds",date:t,onDateChange:i,ref:r,onLeftFocus:()=>s.current?.focus(),className:"w-12"})]})})]})}),e.jsxs(D,{variant:"subtle",className:"mt-2",children:["Selected Date: ",t?.toLocaleString()]})]})},l=()=>{const[t,a]=n.useState(new Date),s=n.useRef(null),o=r=>{a(r)};return e.jsxs(e.Fragment,{children:[e.jsx(g,{mode:"single",selected:t,onSelect:a,footer:e.jsxs("div",{className:"border-neutral-transparent border-t-8",children:[e.jsx(R,{variant:"subtle"}),e.jsx("div",{className:"px-2 pt-2",children:e.jsxs("div",{className:"flex items-center justify-center gap-2",children:[e.jsx("label",{htmlFor:"timepicker-hour",className:"flex cursor-pointer items-center",children:e.jsx(x,{name:"RiTimeLine",size:16})}),e.jsx(c,{picker:"hours",date:t,id:"timepicker-hour",onDateChange:o,ref:s,className:"w-12"})]})})]})}),e.jsxs(D,{variant:"subtle",className:"mt-2",children:["Selected Date: ",t?.toLocaleString()]})]})},d=()=>{const[t,a]=n.useState(new Date),s=n.useRef(null),o=n.useRef(null),r=i=>{a(i)};return e.jsxs(e.Fragment,{children:[e.jsx(g,{mode:"single",selected:t,onSelect:a,footer:e.jsxs("div",{className:"border-neutral-transparent border-t-8",children:[e.jsx(R,{variant:"subtle"}),e.jsx("div",{className:"px-2 pt-2",children:e.jsxs("div",{className:"flex items-center justify-center gap-2",children:[e.jsx("label",{htmlFor:"timepicker-hour",className:"flex cursor-pointer items-center",children:e.jsx(x,{name:"RiTimeLine",size:16})}),e.jsx(c,{picker:"hours",date:t,id:"timepicker-hour",onDateChange:r,ref:s,onRightFocus:()=>o.current?.focus(),className:"w-12"}),e.jsx(c,{picker:"minutes",date:t,onDateChange:r,ref:o,onLeftFocus:()=>s.current?.focus(),className:"w-12"})]})})]})}),e.jsxs(D,{variant:"subtle",className:"mt-2",children:["Selected Date: ",t?.toLocaleString()]})]})},m=()=>{const[t,a]=n.useState(new Date),s=n.useRef(null),o=n.useRef(null),r=n.useRef(null),i=n.useRef(null),[p,N]=n.useState(t&&t.getHours()>=12?"PM":"AM"),h=f=>{a(f)};return e.jsxs(e.Fragment,{children:[e.jsx(g,{mode:"single",selected:t,onSelect:a,footer:e.jsxs("div",{className:"border-neutral-transparent border-t-8",children:[e.jsx(R,{variant:"subtle"}),e.jsx("div",{className:"px-2 pt-2",children:e.jsxs("div",{className:"flex items-center justify-center gap-2",children:[e.jsx("label",{htmlFor:"timepicker-hour",className:"flex cursor-pointer items-center",children:e.jsx(x,{name:"RiTimeLine",size:16})}),e.jsx(c,{picker:"12hours",date:t,id:"timepicker-hour",onDateChange:h,ref:o,period:p,onRightFocus:()=>s.current?.focus(),className:"w-12"}),e.jsx(c,{picker:"minutes",date:t,onDateChange:h,ref:s,onLeftFocus:()=>o.current?.focus(),onRightFocus:()=>r.current?.focus(),className:"w-12"}),e.jsx(c,{picker:"seconds",date:t,onDateChange:h,ref:r,onLeftFocus:()=>s.current?.focus(),onRightFocus:()=>i.current?.focus(),className:"w-12"}),e.jsx(j,{period:p,setPeriod:N,date:t,onDateChange:f=>{h(f),f&&f.getHours()>=12?N("PM"):N("AM")},ref:i,onLeftFocus:()=>r.current?.focus(),className:"w-fit"})]})})]})}),e.jsxs(D,{variant:"subtle",className:"mt-2",children:["Selected Date: ",t?.toLocaleString()]})]})};u.__docgenInfo={description:"",methods:[],displayName:"Default"};l.__docgenInfo={description:"",methods:[],displayName:"Hour"};d.__docgenInfo={description:"",methods:[],displayName:"Minute"};m.__docgenInfo={description:"",methods:[],displayName:"AM_PM"};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const minuteRef = React.useRef<HTMLInputElement>(null);
  const hourRef = React.useRef<HTMLInputElement>(null);
  const secondRef = React.useRef<HTMLInputElement>(null);
  const onChange = (date: Date | undefined) => {
    setDate(date);
  };
  return <>
      <Calendar mode="single" selected={date} onSelect={setDate} footer={<div className="border-neutral-transparent border-t-8">
            <Divider variant="subtle" />
            <div className="px-2 pt-2">
              <div className="flex items-center justify-center gap-2">
                <label htmlFor="timepicker-hour" className="flex cursor-pointer items-center">
                  <Icon name="RiTimeLine" size={16} />
                </label>
                <TimePickerInput picker="hours" date={date} id="timepicker-hour" onDateChange={onChange} ref={hourRef} onRightFocus={() => minuteRef.current?.focus()} className="w-12" />
                <TimePickerInput picker="minutes" date={date} onDateChange={onChange} ref={minuteRef} onLeftFocus={() => hourRef.current?.focus()} onRightFocus={() => secondRef.current?.focus()} className="w-12" />
                <TimePickerInput picker="seconds" date={date} onDateChange={onChange} ref={secondRef} onLeftFocus={() => minuteRef.current?.focus()} className="w-12" />
              </div>
            </div>
          </div>} />
      <Badge variant="subtle" className="mt-2">
        Selected Date: {date?.toLocaleString()}
      </Badge>
    </>;
}`,...u.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const hourRef = React.useRef<HTMLInputElement>(null);
  const onChange = (date: Date | undefined) => {
    setDate(date);
  };
  return <>
      <Calendar mode="single" selected={date} onSelect={setDate} footer={<div className="border-neutral-transparent border-t-8">
            <Divider variant="subtle" />
            <div className="px-2 pt-2">
              <div className="flex items-center justify-center gap-2">
                <label htmlFor="timepicker-hour" className="flex cursor-pointer items-center">
                  <Icon name="RiTimeLine" size={16} />
                </label>
                <TimePickerInput picker="hours" date={date} id="timepicker-hour" onDateChange={onChange} ref={hourRef} className="w-12" />
              </div>
            </div>
          </div>} />
      <Badge variant="subtle" className="mt-2">
        Selected Date: {date?.toLocaleString()}
      </Badge>
    </>;
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const hourRef = React.useRef<HTMLInputElement>(null);
  const minuteRef = React.useRef<HTMLInputElement>(null);
  const onChange = (date: Date | undefined) => {
    setDate(date);
  };
  return <>
      <Calendar mode="single" selected={date} onSelect={setDate} footer={<div className="border-neutral-transparent border-t-8">
            <Divider variant="subtle" />
            <div className="px-2 pt-2">
              <div className="flex items-center justify-center gap-2">
                <label htmlFor="timepicker-hour" className="flex cursor-pointer items-center">
                  <Icon name="RiTimeLine" size={16} />
                </label>
                <TimePickerInput picker="hours" date={date} id="timepicker-hour" onDateChange={onChange} ref={hourRef} onRightFocus={() => minuteRef.current?.focus()} className="w-12" />
                <TimePickerInput picker="minutes" date={date} onDateChange={onChange} ref={minuteRef} onLeftFocus={() => hourRef.current?.focus()} className="w-12" />
              </div>
            </div>
          </div>} />
      <Badge variant="subtle" className="mt-2">
        Selected Date: {date?.toLocaleString()}
      </Badge>
    </>;
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
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
      <Calendar mode="single" selected={date} onSelect={setDate} footer={<div className="border-neutral-transparent border-t-8">
            <Divider variant="subtle" />
            <div className="px-2 pt-2">
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
            </div>
          </div>} />
      <Badge variant="subtle" className="mt-2">
        Selected Date: {date?.toLocaleString()}
      </Badge>
    </>;
}`,...m.parameters?.docs?.source}}};const b=["Default","Hour","Minute","AM_PM"],L=Object.freeze(Object.defineProperty({__proto__:null,AM_PM:m,Default:u,Hour:l,Minute:d,__namedExportsOrder:b,default:v},Symbol.toStringTag,{value:"Module"}));export{m as A,L as D,l as H,d as M,u as a};
