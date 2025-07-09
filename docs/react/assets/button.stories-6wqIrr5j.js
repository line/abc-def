import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{B as e,l as t}from"./timepicker-6LgBjDoY.js";const c={title:"Button",component:e,args:{variant:"primary",size:void 0,radius:void 0,loading:!1,disabled:!1,children:"Button"},argTypes:{size:{description:"Set the size of the Button.",table:{category:"Button",type:{summary:"large | medium | small | undefined"},defaultValue:{summary:void 0}},control:"select",options:["large","medium","small",void 0]},radius:{description:"Set the radius of the Button.",table:{category:"Button",type:{summary:"large | medium | small | undefined"},defaultValue:{summary:void 0}},control:"select",options:["large","medium","small",void 0]},variant:{description:"Set the variant of the Button.",table:{category:"Button",defaultValue:{summary:"primary"},type:{summary:"primary | secondary | destructive | ghost | outline"}},control:"select",options:["primary","secondary","destructive","ghost","outline"]},children:{description:"Set the children of the Button.",table:{category:"Button",type:{summary:"React.ReactNode"}},control:"text"},loading:{description:"Set whether the Button is in a loading state.",table:{category:"Button",defaultValue:{summary:"false"}},control:"boolean"},disabled:{description:"Set whether the Button is in a disabled state.",table:{category:"Button",defaultValue:{summary:"false"}},control:"boolean"},asChild:{table:{disable:!0}},type:{table:{disable:!0}}}},d={},r=()=>a.jsxs("div",{className:"grid grid-cols-[repeat(3,max-content)] gap-2",children:[a.jsx(e,{size:"small",children:"Small"}),a.jsx(e,{size:"medium",children:"Medium"}),a.jsx(e,{size:"large",children:"Large"})]}),i=()=>a.jsxs("div",{className:"grid grid-cols-[repeat(5,max-content)] gap-2",children:[a.jsx(e,{size:"small",variant:"primary",children:"Primary"}),a.jsx(e,{size:"small",variant:"secondary",children:"Secondary"}),a.jsx(e,{size:"small",variant:"destructive",children:"Destructive"}),a.jsx(e,{size:"small",variant:"ghost",children:"Ghost"}),a.jsx(e,{size:"small",variant:"outline",children:"Outline"})]}),s=()=>a.jsxs("div",{className:"grid grid-cols-[repeat(3,max-content)] gap-2",children:[a.jsx(e,{size:"small",variant:"primary",children:"Primary"}),a.jsx(e,{size:"small",variant:"primary",loading:!0,children:"Primary"}),a.jsx(e,{size:"small",variant:"primary",disabled:!0,children:"Primary"})]}),n=()=>a.jsxs(e,{size:"small",variant:"primary",children:[a.jsx(t,{name:"RiFlashlightFill"}),"Primary"]}),o=()=>a.jsxs(e,{size:"small",variant:"primary",children:["Primary",a.jsx(t,{name:"RiFlashlightFill"})]}),l=()=>a.jsxs(e,{size:"small",variant:"primary",children:[a.jsx(t,{name:"RiFlashlightFill"}),"Primary",a.jsx(t,{name:"RiFlashlightFill"})]}),m=()=>a.jsxs("div",{className:"grid grid-cols-[repeat(3,max-content)] gap-2",children:[a.jsx(e,{size:"small",variant:"primary",children:a.jsx(t,{name:"RiFlashlightFill"})}),a.jsx(e,{size:"medium",variant:"primary",children:a.jsx(t,{name:"RiFlashlightFill"})}),a.jsx(e,{size:"large",variant:"primary",children:a.jsx(t,{name:"RiFlashlightFill"})})]});r.__docgenInfo={description:"",methods:[],displayName:"Size"};i.__docgenInfo={description:"",methods:[],displayName:"Variant"};s.__docgenInfo={description:"",methods:[],displayName:"State"};n.__docgenInfo={description:"",methods:[],displayName:"WithSlotL"};o.__docgenInfo={description:"",methods:[],displayName:"WithSlotR"};l.__docgenInfo={description:"",methods:[],displayName:"WithSlotLR"};m.__docgenInfo={description:"",methods:[],displayName:"OnlyIcon"};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{}",...d.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => <div className="grid grid-cols-[repeat(3,max-content)] gap-2">
    <Button size="small">Small</Button>
    <Button size="medium">Medium</Button>
    <Button size="large">Large</Button>
  </div>`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => <div className="grid grid-cols-[repeat(5,max-content)] gap-2">
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
  </div>`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => <div className="grid grid-cols-[repeat(3,max-content)] gap-2">
    <Button size="small" variant="primary">
      Primary
    </Button>
    <Button size="small" variant="primary" loading>
      Primary
    </Button>
    <Button size="small" variant="primary" disabled>
      Primary
    </Button>
  </div>`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => <Button size="small" variant="primary">
    <Icon name="RiFlashlightFill" />
    Primary
  </Button>`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => <Button size="small" variant="primary">
    Primary
    <Icon name="RiFlashlightFill" />
  </Button>`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => <Button size="small" variant="primary">
    <Icon name="RiFlashlightFill" />
    Primary
    <Icon name="RiFlashlightFill" />
  </Button>`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => <div className="grid grid-cols-[repeat(3,max-content)] gap-2">
    <Button size="small" variant="primary">
      <Icon name="RiFlashlightFill" />
    </Button>
    <Button size="medium" variant="primary">
      <Icon name="RiFlashlightFill" />
    </Button>
    <Button size="large" variant="primary">
      <Icon name="RiFlashlightFill" />
    </Button>
  </div>`,...m.parameters?.docs?.source}}};const u=["Default","Size","Variant","State","WithSlotL","WithSlotR","WithSlotLR","OnlyIcon"],g=Object.freeze(Object.defineProperty({__proto__:null,Default:d,OnlyIcon:m,Size:r,State:s,Variant:i,WithSlotL:n,WithSlotLR:l,WithSlotR:o,__namedExportsOrder:u,default:c},Symbol.toStringTag,{value:"Module"}));export{g as B,d as D,m as O,r as S,i as V,n as W,s as a,o as b,l as c};
