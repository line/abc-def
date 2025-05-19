import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{e as o}from"./index-DubqEmGm.js";import{C as i,D as c,E as l,m}from"./timepicker-BluA0Tv8.js";const C={title:"Combinations/DatetimePicker"},s=()=>{const[t,a]=o.useState(new Date);return e.jsxs(e.Fragment,{children:[e.jsx(i,{mode:"single",selected:t,onSelect:a,footer:e.jsxs("div",{className:"border-neutral-transparent border-t-8",children:[e.jsx(c,{variant:"subtle"}),e.jsx("div",{className:"px-2 pt-2",children:e.jsx(l,{date:t,onChange:a})})]})}),e.jsxs(m,{variant:"subtle",className:"mt-2",children:["Selected Date: ",t==null?void 0:t.toLocaleString()]})]})},n=()=>{const[t,a]=o.useState(new Date);return e.jsxs(e.Fragment,{children:[e.jsx(i,{mode:"single",selected:t,onSelect:a,footer:e.jsxs("div",{className:"border-neutral-transparent border-t-8",children:[e.jsx(c,{variant:"subtle"}),e.jsx("div",{className:"px-2 pt-2",children:e.jsx(l,{date:t,onChange:a,granularity:"hour"})})]})}),e.jsxs(m,{variant:"subtle",className:"mt-2",children:["Selected Date: ",t==null?void 0:t.toLocaleString()]})]})},r=()=>{const[t,a]=o.useState(new Date);return e.jsxs(e.Fragment,{children:[e.jsx(i,{mode:"single",selected:t,onSelect:a,footer:e.jsxs("div",{className:"border-neutral-transparent border-t-8",children:[e.jsx(c,{variant:"subtle"}),e.jsx("div",{className:"px-2 pt-2",children:e.jsx(l,{date:t,onChange:a,granularity:"minute"})})]})}),e.jsxs(m,{variant:"subtle",className:"mt-2",children:["Selected Date: ",t==null?void 0:t.toLocaleString()]})]})},d=()=>{const[t,a]=o.useState(new Date);return e.jsxs(e.Fragment,{children:[e.jsx(i,{mode:"single",selected:t,onSelect:a,footer:e.jsxs("div",{className:"border-neutral-transparent border-t-8",children:[e.jsx(c,{variant:"subtle"}),e.jsx("div",{className:"px-2 pt-2",children:e.jsx(l,{date:t,onChange:a,hourCycle:12})})]})}),e.jsxs(m,{variant:"subtle",className:"mt-2",children:["Selected Date: ",t==null?void 0:t.toLocaleString()]})]})};s.__docgenInfo={description:"",methods:[],displayName:"Default"};n.__docgenInfo={description:"",methods:[],displayName:"Hour"};r.__docgenInfo={description:"",methods:[],displayName:"Minute"};d.__docgenInfo={description:"",methods:[],displayName:"AM_PM"};var u,p,g;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  return <>
      <Calendar mode="single" selected={date} onSelect={setDate} footer={<div className="border-neutral-transparent border-t-8">
            <Divider variant="subtle" />
            <div className="px-2 pt-2">
              <TimePicker date={date} onChange={setDate} />
            </div>
          </div>} />
      <Badge variant="subtle" className="mt-2">
        Selected Date: {date?.toLocaleString()}
      </Badge>
    </>;
}`,...(g=(p=s.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var D,v,x;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  return <>
      <Calendar mode="single" selected={date} onSelect={setDate} footer={<div className="border-neutral-transparent border-t-8">
            <Divider variant="subtle" />
            <div className="px-2 pt-2">
              <TimePicker date={date} onChange={setDate} granularity="hour" />
            </div>
          </div>} />
      <Badge variant="subtle" className="mt-2">
        Selected Date: {date?.toLocaleString()}
      </Badge>
    </>;
}`,...(x=(v=n.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var S,b,h;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  return <>
      <Calendar mode="single" selected={date} onSelect={setDate} footer={<div className="border-neutral-transparent border-t-8">
            <Divider variant="subtle" />
            <div className="px-2 pt-2">
              <TimePicker date={date} onChange={setDate} granularity="minute" />
            </div>
          </div>} />
      <Badge variant="subtle" className="mt-2">
        Selected Date: {date?.toLocaleString()}
      </Badge>
    </>;
}`,...(h=(b=r.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var j,N,f;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  return <>
      <Calendar mode="single" selected={date} onSelect={setDate} footer={<div className="border-neutral-transparent border-t-8">
            <Divider variant="subtle" />
            <div className="px-2 pt-2">
              <TimePicker date={date} onChange={setDate} hourCycle={12} />
            </div>
          </div>} />
      <Badge variant="subtle" className="mt-2">
        Selected Date: {date?.toLocaleString()}
      </Badge>
    </>;
}`,...(f=(N=d.parameters)==null?void 0:N.docs)==null?void 0:f.source}}};const _=["Default","Hour","Minute","AM_PM"],B=Object.freeze(Object.defineProperty({__proto__:null,AM_PM:d,Default:s,Hour:n,Minute:r,__namedExportsOrder:_,default:C},Symbol.toStringTag,{value:"Module"}));export{d as A,B as D,n as H,r as M,s as a};
