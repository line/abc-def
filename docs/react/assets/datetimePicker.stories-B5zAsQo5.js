import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{e as a}from"./index-MPVjHJeJ.js";import{C as g,D as R,l as x,E as l,m as D,F as I}from"./timepicker-BAlauJgr.js";const H={title:"Combinations/DatetimePicker"},d=()=>{const[t,c]=a.useState(new Date),o=a.useRef(null),u=a.useRef(null),i=a.useRef(null),r=s=>{c(s)};return e.jsxs(e.Fragment,{children:[e.jsx(g,{mode:"single",selected:t,onSelect:c,footer:e.jsxs("div",{className:"border-neutral-transparent border-t-8",children:[e.jsx(R,{variant:"subtle"}),e.jsx("div",{className:"px-2 pt-2",children:e.jsxs("div",{className:"flex items-center justify-center gap-2",children:[e.jsx("label",{htmlFor:"timepicker-hour",className:"flex cursor-pointer items-center",children:e.jsx(x,{name:"RiTimeLine",size:16})}),e.jsx(l,{picker:"hours",date:t,id:"timepicker-hour",onDateChange:r,ref:u,onRightFocus:()=>{var s;return(s=o.current)==null?void 0:s.focus()},className:"w-12"}),e.jsx(l,{picker:"minutes",date:t,onDateChange:r,ref:o,onLeftFocus:()=>{var s;return(s=u.current)==null?void 0:s.focus()},onRightFocus:()=>{var s;return(s=i.current)==null?void 0:s.focus()},className:"w-12"}),e.jsx(l,{picker:"seconds",date:t,onDateChange:r,ref:i,onLeftFocus:()=>{var s;return(s=o.current)==null?void 0:s.focus()},className:"w-12"})]})})]})}),e.jsxs(D,{variant:"subtle",className:"mt-2",children:["Selected Date: ",t==null?void 0:t.toLocaleString()]})]})},m=()=>{const[t,c]=a.useState(new Date),o=a.useRef(null),u=i=>{c(i)};return e.jsxs(e.Fragment,{children:[e.jsx(g,{mode:"single",selected:t,onSelect:c,footer:e.jsxs("div",{className:"border-neutral-transparent border-t-8",children:[e.jsx(R,{variant:"subtle"}),e.jsx("div",{className:"px-2 pt-2",children:e.jsxs("div",{className:"flex items-center justify-center gap-2",children:[e.jsx("label",{htmlFor:"timepicker-hour",className:"flex cursor-pointer items-center",children:e.jsx(x,{name:"RiTimeLine",size:16})}),e.jsx(l,{picker:"hours",date:t,id:"timepicker-hour",onDateChange:u,ref:o,className:"w-12"})]})})]})}),e.jsxs(D,{variant:"subtle",className:"mt-2",children:["Selected Date: ",t==null?void 0:t.toLocaleString()]})]})},f=()=>{const[t,c]=a.useState(new Date),o=a.useRef(null),u=a.useRef(null),i=r=>{c(r)};return e.jsxs(e.Fragment,{children:[e.jsx(g,{mode:"single",selected:t,onSelect:c,footer:e.jsxs("div",{className:"border-neutral-transparent border-t-8",children:[e.jsx(R,{variant:"subtle"}),e.jsx("div",{className:"px-2 pt-2",children:e.jsxs("div",{className:"flex items-center justify-center gap-2",children:[e.jsx("label",{htmlFor:"timepicker-hour",className:"flex cursor-pointer items-center",children:e.jsx(x,{name:"RiTimeLine",size:16})}),e.jsx(l,{picker:"hours",date:t,id:"timepicker-hour",onDateChange:i,ref:o,onRightFocus:()=>{var r;return(r=u.current)==null?void 0:r.focus()},className:"w-12"}),e.jsx(l,{picker:"minutes",date:t,onDateChange:i,ref:u,onLeftFocus:()=>{var r;return(r=o.current)==null?void 0:r.focus()},className:"w-12"})]})})]})}),e.jsxs(D,{variant:"subtle",className:"mt-2",children:["Selected Date: ",t==null?void 0:t.toLocaleString()]})]})},p=()=>{const[t,c]=a.useState(new Date),o=a.useRef(null),u=a.useRef(null),i=a.useRef(null),r=a.useRef(null),[s,N]=a.useState(t&&t.getHours()>=12?"PM":"AM"),h=n=>{c(n)};return e.jsxs(e.Fragment,{children:[e.jsx(g,{mode:"single",selected:t,onSelect:c,footer:e.jsxs("div",{className:"border-neutral-transparent border-t-8",children:[e.jsx(R,{variant:"subtle"}),e.jsx("div",{className:"px-2 pt-2",children:e.jsxs("div",{className:"flex items-center justify-center gap-2",children:[e.jsx("label",{htmlFor:"timepicker-hour",className:"flex cursor-pointer items-center",children:e.jsx(x,{name:"RiTimeLine",size:16})}),e.jsx(l,{picker:"12hours",date:t,id:"timepicker-hour",onDateChange:h,ref:u,period:s,onRightFocus:()=>{var n;return(n=o.current)==null?void 0:n.focus()},className:"w-12"}),e.jsx(l,{picker:"minutes",date:t,onDateChange:h,ref:o,onLeftFocus:()=>{var n;return(n=u.current)==null?void 0:n.focus()},onRightFocus:()=>{var n;return(n=i.current)==null?void 0:n.focus()},className:"w-12"}),e.jsx(l,{picker:"seconds",date:t,onDateChange:h,ref:i,onLeftFocus:()=>{var n;return(n=o.current)==null?void 0:n.focus()},onRightFocus:()=>{var n;return(n=r.current)==null?void 0:n.focus()},className:"w-12"}),e.jsx(I,{period:s,setPeriod:N,date:t,onDateChange:n=>{h(n),n&&n.getHours()>=12?N("PM"):N("AM")},ref:r,onLeftFocus:()=>{var n;return(n=i.current)==null?void 0:n.focus()},className:"w-fit"})]})})]})}),e.jsxs(D,{variant:"subtle",className:"mt-2",children:["Selected Date: ",t==null?void 0:t.toLocaleString()]})]})};d.__docgenInfo={description:"",methods:[],displayName:"Default"};m.__docgenInfo={description:"",methods:[],displayName:"Hour"};f.__docgenInfo={description:"",methods:[],displayName:"Minute"};p.__docgenInfo={description:"",methods:[],displayName:"AM_PM"};var j,v,b;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
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
}`,...(b=(v=d.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var k,C,S;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
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
}`,...(S=(C=m.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var L,F,M;f.parameters={...f.parameters,docs:{...(L=f.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
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
}`,...(M=(F=f.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};var T,P,w;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
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
}`,...(w=(P=p.parameters)==null?void 0:P.docs)==null?void 0:w.source}}};const _=["Default","Hour","Minute","AM_PM"],z=Object.freeze(Object.defineProperty({__proto__:null,AM_PM:p,Default:d,Hour:m,Minute:f,__namedExportsOrder:_,default:H},Symbol.toStringTag,{value:"Module"}));export{p as A,z as D,m as H,f as M,d as a};
