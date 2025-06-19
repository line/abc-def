import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{B as e,l as t}from"./timepicker-B-KcMAi6.js";const D={title:"Button",component:e,args:{variant:"primary",size:void 0,radius:void 0,loading:!1,disabled:!1,children:"Button"},argTypes:{size:{description:"Set the size of the Button.",table:{category:"Button",type:{summary:"large | medium | small | undefined"},defaultValue:{summary:void 0}},control:"select",options:["large","medium","small",void 0]},radius:{description:"Set the radius of the Button.",table:{category:"Button",type:{summary:"large | medium | small | undefined"},defaultValue:{summary:void 0}},control:"select",options:["large","medium","small",void 0]},variant:{description:"Set the variant of the Button.",table:{category:"Button",defaultValue:{summary:"primary"},type:{summary:"primary | secondary | destructive | ghost | outline"}},control:"select",options:["primary","secondary","destructive","ghost","outline"]},children:{description:"Set the children of the Button.",table:{category:"Button",type:{summary:"React.ReactNode"}},control:"text"},loading:{description:"Set whether the Button is in a loading state.",table:{category:"Button",defaultValue:{summary:"false"}},control:"boolean"},disabled:{description:"Set whether the Button is in a disabled state.",table:{category:"Button",defaultValue:{summary:"false"}},control:"boolean"},asChild:{table:{disable:!0}},type:{table:{disable:!0}}}},d={},r=()=>a.jsxs("div",{className:"grid grid-cols-[repeat(3,max-content)] gap-2",children:[a.jsx(e,{size:"small",children:"Small"}),a.jsx(e,{size:"medium",children:"Medium"}),a.jsx(e,{size:"large",children:"Large"})]}),i=()=>a.jsxs("div",{className:"grid grid-cols-[repeat(5,max-content)] gap-2",children:[a.jsx(e,{size:"small",variant:"primary",children:"Primary"}),a.jsx(e,{size:"small",variant:"secondary",children:"Secondary"}),a.jsx(e,{size:"small",variant:"destructive",children:"Destructive"}),a.jsx(e,{size:"small",variant:"ghost",children:"Ghost"}),a.jsx(e,{size:"small",variant:"outline",children:"Outline"})]}),s=()=>a.jsxs("div",{className:"grid grid-cols-[repeat(3,max-content)] gap-2",children:[a.jsx(e,{size:"small",variant:"primary",children:"Primary"}),a.jsx(e,{size:"small",variant:"primary",loading:!0,children:"Primary"}),a.jsx(e,{size:"small",variant:"primary",disabled:!0,children:"Primary"})]}),n=()=>a.jsxs(e,{size:"small",variant:"primary",children:[a.jsx(t,{name:"RiFlashlightFill"}),"Primary"]}),o=()=>a.jsxs(e,{size:"small",variant:"primary",children:["Primary",a.jsx(t,{name:"RiFlashlightFill"})]}),l=()=>a.jsxs(e,{size:"small",variant:"primary",children:[a.jsx(t,{name:"RiFlashlightFill"}),"Primary",a.jsx(t,{name:"RiFlashlightFill"})]}),m=()=>a.jsxs("div",{className:"grid grid-cols-[repeat(3,max-content)] gap-2",children:[a.jsx(e,{size:"small",variant:"primary",children:a.jsx(t,{name:"RiFlashlightFill"})}),a.jsx(e,{size:"medium",variant:"primary",children:a.jsx(t,{name:"RiFlashlightFill"})}),a.jsx(e,{size:"large",variant:"primary",children:a.jsx(t,{name:"RiFlashlightFill"})})]});r.__docgenInfo={description:"",methods:[],displayName:"Size"};i.__docgenInfo={description:"",methods:[],displayName:"Variant"};s.__docgenInfo={description:"",methods:[],displayName:"State"};n.__docgenInfo={description:"",methods:[],displayName:"WithSlotL"};o.__docgenInfo={description:"",methods:[],displayName:"WithSlotR"};l.__docgenInfo={description:"",methods:[],displayName:"WithSlotLR"};m.__docgenInfo={description:"",methods:[],displayName:"OnlyIcon"};var c,u,p;d.parameters={...d.parameters,docs:{...(c=d.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(p=(u=d.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var h,g,y;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`() => <div className="grid grid-cols-[repeat(3,max-content)] gap-2">
    <Button size="small">Small</Button>
    <Button size="medium">Medium</Button>
    <Button size="large">Large</Button>
  </div>`,...(y=(g=r.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var v,B,x;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`() => <div className="grid grid-cols-[repeat(5,max-content)] gap-2">
    <Button size="small" variant="primary">
      Primary
    </Button>
    <Button size="small" variant="secondary">
      Secondary
    </Button>
    <Button size="small" variant="destructive">
      Destructive
    </Button>
    <Button size="small" variant="ghost">
      Ghost
    </Button>
    <Button size="small" variant="outline">
      Outline
    </Button>
  </div>`,...(x=(B=i.parameters)==null?void 0:B.docs)==null?void 0:x.source}}};var z,S,j;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`() => <div className="grid grid-cols-[repeat(3,max-content)] gap-2">
    <Button size="small" variant="primary">
      Primary
    </Button>
    <Button size="small" variant="primary" loading>
      Primary
    </Button>
    <Button size="small" variant="primary" disabled>
      Primary
    </Button>
  </div>`,...(j=(S=s.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var f,F,R;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`() => <Button size="small" variant="primary">
    <Icon name="RiFlashlightFill" />
    Primary
  </Button>`,...(R=(F=n.parameters)==null?void 0:F.docs)==null?void 0:R.source}}};var b,_,I;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`() => <Button size="small" variant="primary">
    Primary
    <Icon name="RiFlashlightFill" />
  </Button>`,...(I=(_=o.parameters)==null?void 0:_.docs)==null?void 0:I.source}}};var N,P,W;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`() => <Button size="small" variant="primary">
    <Icon name="RiFlashlightFill" />
    Primary
    <Icon name="RiFlashlightFill" />
  </Button>`,...(W=(P=l.parameters)==null?void 0:P.docs)==null?void 0:W.source}}};var O,V,L;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`() => <div className="grid grid-cols-[repeat(3,max-content)] gap-2">
    <Button size="small" variant="primary">
      <Icon name="RiFlashlightFill" />
    </Button>
    <Button size="medium" variant="primary">
      <Icon name="RiFlashlightFill" />
    </Button>
    <Button size="large" variant="primary">
      <Icon name="RiFlashlightFill" />
    </Button>
  </div>`,...(L=(V=m.parameters)==null?void 0:V.docs)==null?void 0:L.source}}};const M=["Default","Size","Variant","State","WithSlotL","WithSlotR","WithSlotLR","OnlyIcon"],G=Object.freeze(Object.defineProperty({__proto__:null,Default:d,OnlyIcon:m,Size:r,State:s,Variant:i,WithSlotL:n,WithSlotLR:l,WithSlotR:o,__namedExportsOrder:M,default:D},Symbol.toStringTag,{value:"Module"}));export{G as B,d as D,m as O,r as S,i as V,n as W,s as a,o as b,l as c};
