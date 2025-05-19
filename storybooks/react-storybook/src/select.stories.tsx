/**
 * Copyright 2025 LY Corporation
 *
 * LY Corporation licenses this file to you under the Apache License,
 * version 2.0 (the "License"); you may not use this file except in compliance
 * with the License. You may obtain a copy of the License at:
 *
 *   https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 */
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import {
  IconNames,
  Select,
  SelectCaption,
  SelectContent,
  SelectGroup,
  SelectGroupLabel,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@abc-def/react";

const Props = {
  SelectLabel: {
    children: "↳ SelectLabel: children",
  },
  SelectValue: {
    placeholder: "↳ SelectValue: placeholder",
  },
  SelectContent: {
    position: "↳ SelectContent: position",
    maxHeight: "↳ SelectContent: maxHeight",
  },
  SelectTrigger: {
    icon: "↳ SelectTrigger: icon",
  },
  SelectItem: {
    icon: "↳ SelectItem: icon",
    children: "↳ SelectItem: children",
  },
  SelectCaption: {
    icon: "↳ SelectCaption: icon",
    variant: "↳ SelectCaption: variant",
    children: "↳ SelectCaption: children",
  },
} as const;

const meta: Meta<
  React.ComponentProps<typeof Select> & {
    [Props.SelectLabel.children]: React.ComponentPropsWithoutRef<
      typeof SelectLabel
    >["children"];
    [Props.SelectValue.placeholder]: React.ComponentPropsWithoutRef<
      typeof SelectValue
    >["placeholder"];
    [Props.SelectContent.position]: React.ComponentPropsWithoutRef<
      typeof SelectContent
    >["position"];
    [Props.SelectContent.maxHeight]: React.ComponentPropsWithoutRef<
      typeof SelectContent
    >["maxHeight"];
    [Props.SelectTrigger.icon]: React.ComponentPropsWithoutRef<
      typeof SelectTrigger
    >["icon"];
    [Props.SelectItem.icon]: React.ComponentPropsWithoutRef<
      typeof SelectItem
    >["icon"];
    [Props.SelectItem.children]: React.ComponentPropsWithoutRef<
      typeof SelectItem
    >["children"];
    [Props.SelectCaption.icon]: React.ComponentPropsWithoutRef<
      typeof SelectCaption
    >["icon"];
    [Props.SelectCaption.variant]: React.ComponentPropsWithoutRef<
      typeof SelectCaption
    >["variant"];
    [Props.SelectCaption.children]: React.ComponentPropsWithoutRef<
      typeof SelectCaption
    >["children"];
  }
> = {
  title: "Select",
  component: Select,
  decorators: (Story) => <Story />,
  render: (args) => (
    <Select type={args.type} error={args.error}>
      <SelectLabel>{args[Props.SelectLabel.children]}</SelectLabel>
      <SelectTrigger icon={args[Props.SelectTrigger.icon]}>
        <SelectValue placeholder={args[Props.SelectValue.placeholder]} />
      </SelectTrigger>
      <SelectContent
        position={args[Props.SelectContent.position]}
        maxHeight={args[Props.SelectContent.maxHeight]}
      >
        <SelectGroup>
          <SelectGroupLabel>Fruits</SelectGroupLabel>
          <SelectItem value="app">Apple</SelectItem>
          <SelectItem value="ban">Banana</SelectItem>
          <SelectItem value="blu">Blueberry</SelectItem>
          <SelectItem value="gra">Grapes</SelectItem>
          <SelectItem value="pin" icon={args[Props.SelectItem.icon]}>
            {args[Props.SelectItem.children]}
          </SelectItem>
        </SelectGroup>
      </SelectContent>
      <SelectCaption
        icon={args[Props.SelectCaption.icon]}
        variant={args[Props.SelectCaption.variant]}
      >
        {args[Props.SelectCaption.children]}
      </SelectCaption>
    </Select>
  ),
  args: {
    type: "single",
    error: false,
    [Props.SelectLabel.children]: "Title",
    [Props.SelectValue.placeholder]: "Select a fruit...",
    [Props.SelectContent.position]: "popper",
    [Props.SelectContent.maxHeight]: "auto",
    [Props.SelectTrigger.icon]: undefined,
    [Props.SelectItem.icon]: undefined,
    [Props.SelectItem.children]: "Custom",
    [Props.SelectCaption.icon]: undefined,
    [Props.SelectCaption.variant]: "default",
    [Props.SelectCaption.children]: "Caption",
  },
  argTypes: {
    type: {
      description:
        "Set whether the Select is single or multiple selection type.",
      table: {
        category: "Select",
        type: {
          summary: "single | multiple",
        },
        defaultValue: {
          summary: "single",
        },
      },
      control: "radio",
      options: ["single", "multiple"],
    },
    error: {
      description: "Set whether the Select is in an error state.",
      table: {
        category: "Select",
        defaultValue: {
          summary: "false",
        },
      },
    },
    [Props.SelectLabel.children]: {
      description: "Set the children of the SelectLabel.",
      table: {
        category: "SelectLabel",
        type: {
          summary: "React.ReactNode",
        },
      },
      control: "text",
    },
    [Props.SelectValue.placeholder]: {
      description: "Set the placeholder of the SelectValue.",
      table: {
        category: "SelectValue",
        type: {
          summary: "string",
        },
      },
      control: "text",
    },
    [Props.SelectContent.position]: {
      description: "Set the position where the SelectContent appears.",
      table: {
        category: "SelectContent",
        defaultValue: {
          summary: "popper",
        },
        type: {
          summary: "item-aligned | popper",
        },
      },
      control: "radio",
      options: ["item-aligned", "popper"],
    },
    [Props.SelectContent.maxHeight]: {
      description: "Set the maximum height of the SelectContent.",
      table: {
        category: "SelectContent",
        type: {
          summary: "string",
        },
      },
      control: "text",
    },
    [Props.SelectTrigger.icon]: {
      description: "Set the left icon of the SelectTrigger.",
      table: {
        category: "SelectTrigger",
        type: {
          summary: "IconNameType",
        },
      },
      control: "select",
      options: IconNames,
    },
    [Props.SelectItem.icon]: {
      description: "Set the left icon of the SelectItem.",
      table: {
        category: "SelectItem",
        type: {
          summary: "IconNameType",
        },
      },
      control: "select",
      options: IconNames,
    },
    [Props.SelectItem.children]: {
      description: "Set the children of the SelectItem.",
      table: {
        category: "SelectItem",
        type: {
          summary: "React.ReactNode",
        },
      },
      control: "text",
    },
    [Props.SelectCaption.variant]: {
      description: "Set the variant of the SelectCaption.",
      table: {
        category: "SelectCaption",
        type: {
          summary: "default | success | info | error",
        },
        defaultValue: {
          summary: "default",
        },
      },
      control: "radio",
      options: ["default", "success", "info", "error"],
    },
    [Props.SelectCaption.icon]: {
      description: "Set the left icon of the SelectCaption.",
      table: {
        category: "SelectCaption",
        type: {
          summary: "IconNameType",
        },
      },
      control: "select",
      options: IconNames,
    },
    [Props.SelectCaption.children]: {
      description: "Set the children of the SelectCaption.",
      table: {
        category: "SelectCaption",
        type: {
          summary: "React.ReactNode",
        },
      },
      control: "text",
    },
    size: {
      table: {
        disable: true,
      },
    },
    value: {
      table: {
        disable: true,
      },
    },
    onValuesChange: {
      table: {
        disable: true,
      },
    },
    values: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Single = () => {
  return (
    <Select
      type="single"
      onValueChange={(value) => console.log("single select value: ", value)}
    >
      <SelectLabel>Label</SelectLabel>
      <SelectTrigger>
        <SelectValue placeholder="Select a format" />
      </SelectTrigger>
      <SelectContent maxHeight="384px">
        <SelectGroup>
          <SelectItem value="txt">text</SelectItem>
          <SelectItem value="kwd">keyword</SelectItem>
          <SelectItem value="num">number</SelectItem>
          <SelectItem value="dat">date</SelectItem>
          <SelectItem value="sel">select</SelectItem>
          <SelectItem value="mul">multiSelect</SelectItem>
          <SelectItem value="img">image</SelectItem>
        </SelectGroup>
      </SelectContent>
      <SelectCaption variant="default">Caption Default</SelectCaption>
    </Select>
  );
};

export const Single_With_Icon = () => {
  return (
    <Select
      type="single"
      value="txt"
      onValueChange={(value) => console.log("single select value: ", value)}
    >
      <SelectLabel>Label</SelectLabel>
      <SelectTrigger>
        <SelectValue placeholder="Select a format" />
      </SelectTrigger>
      <SelectContent maxHeight="384px">
        <SelectGroup>
          <SelectItem value="txt" icon="RiMenu2Line">
            text
          </SelectItem>
          <SelectItem value="kwd" icon="RiFontSize">
            keyword
          </SelectItem>
          <SelectItem value="num" icon="RiHashtag">
            number
          </SelectItem>
          <SelectItem value="dat" icon="RiCalendar2Line">
            date
          </SelectItem>
          <SelectItem value="sel" icon="RiCheckboxCircleLine">
            select
          </SelectItem>
          <SelectItem value="mul" icon="RiListView">
            multiSelect
          </SelectItem>
          <SelectItem value="img" icon="RiImageLine">
            image
          </SelectItem>
        </SelectGroup>
      </SelectContent>
      <SelectCaption variant="info">Caption Info</SelectCaption>
    </Select>
  );
};

export const Multiple = () => {
  return (
    <Select
      type="multiple"
      values={[]}
      onValuesChange={(values) =>
        console.log("multiple select values: ", values.join(", "))
      }
    >
      <SelectLabel>Label</SelectLabel>
      <SelectTrigger>
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectGroupLabel>Fruits</SelectGroupLabel>
          <SelectItem value="app">Apple</SelectItem>
          <SelectItem value="ban">Banana</SelectItem>
          <SelectItem value="blu">Blueberry</SelectItem>
          <SelectItem value="gra">Grapes</SelectItem>
          <SelectItem value="pin">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
      <SelectCaption variant="success">Caption Success</SelectCaption>
    </Select>
  );
};

export const Multiple_With_Icon = () => {
  return (
    <Select
      type="multiple"
      values={["app", "ban", "blu"]}
      onValuesChange={(values) =>
        console.log("multiple select values: ", values.join(", "))
      }
    >
      <SelectLabel>Label</SelectLabel>
      <SelectTrigger>
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectGroupLabel>Fruits</SelectGroupLabel>
          <SelectItem value="app" icon="RiAppleLine">
            Apple
          </SelectItem>
          <SelectItem value="ban" icon="Ri4kLine">
            Banana
          </SelectItem>
          <SelectItem value="blu" icon="RiBlueskyLine">
            Blueberry
          </SelectItem>
          <SelectItem value="gra" icon="RiGraduationCapLine">
            Grapes
          </SelectItem>
          <SelectItem value="pin" icon="RiMapPinAddLine">
            Pineapple
          </SelectItem>
        </SelectGroup>
      </SelectContent>
      <SelectCaption variant="error">Caption Error</SelectCaption>
    </Select>
  );
};

export const Disabled = () => {
  return (
    <div className="grid grid-cols-2 gap-2">
      <Select
        type="single"
        onValueChange={(value) => console.log("single select value: ", value)}
      >
        <SelectLabel>Label</SelectLabel>
        <SelectTrigger disabled>
          <SelectValue placeholder="Select a timezone (Disabled)" />
        </SelectTrigger>
        <SelectContent maxHeight="384px">
          <SelectGroup>
            <SelectGroupLabel>North America</SelectGroupLabel>
            <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
            <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
            <SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
            <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
            <SelectItem value="akst">Alaska Standard Time (AKST)</SelectItem>
            <SelectItem value="hst">Hawaii Standard Time (HST)</SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectGroupLabel>Europe & Africa</SelectGroupLabel>
            <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
            <SelectItem value="cet">Central European Time (CET)</SelectItem>
            <SelectItem value="eet">Eastern European Time (EET)</SelectItem>
            <SelectItem value="west">
              Western European Summer Time (WEST)
            </SelectItem>
            <SelectItem value="cat">Central Africa Time (CAT)</SelectItem>
            <SelectItem value="eat">East Africa Time (EAT)</SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectGroupLabel>Asia</SelectGroupLabel>
            <SelectItem value="msk">Moscow Time (MSK)</SelectItem>
            <SelectItem value="ist">India Standard Time (IST)</SelectItem>
            <SelectItem value="cst_china">China Standard Time (CST)</SelectItem>
            <SelectItem value="jst">Japan Standard Time (JST)</SelectItem>
            <SelectItem value="kst">Korea Standard Time (KST)</SelectItem>
            <SelectItem value="ist_indonesia">
              Indonesia Central Standard Time (WITA)
            </SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectGroupLabel>Australia & Pacific</SelectGroupLabel>
            <SelectItem value="awst">
              Australian Western Standard Time (AWST)
            </SelectItem>
            <SelectItem value="acst">
              Australian Central Standard Time (ACST)
            </SelectItem>
            <SelectItem value="aest">
              Australian Eastern Standard Time (AEST)
            </SelectItem>
            <SelectItem value="nzst">
              New Zealand Standard Time (NZST)
            </SelectItem>
            <SelectItem value="fjt">Fiji Time (FJT)</SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectGroupLabel>South America</SelectGroupLabel>
            <SelectItem value="art">Argentina Time (ART)</SelectItem>
            <SelectItem value="bot">Bolivia Time (BOT)</SelectItem>
            <SelectItem value="brt">Brasilia Time (BRT)</SelectItem>
            <SelectItem value="clt">Chile Standard Time (CLT)</SelectItem>
          </SelectGroup>
        </SelectContent>
        <SelectCaption variant="info">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </SelectCaption>
      </Select>
      <Select
        type="multiple"
        values={["app", "ban", "blu"]}
        onValuesChange={(values) =>
          console.log("multiple select values: ", values.join(", "))
        }
      >
        <SelectLabel>Label</SelectLabel>
        <SelectTrigger disabled>
          <SelectValue placeholder="Select a fruit (Disabled)" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectGroupLabel>Fruits</SelectGroupLabel>
            <SelectItem value="app">Apple</SelectItem>
            <SelectItem value="ban">Banana</SelectItem>
            <SelectItem value="blu">Blueberry</SelectItem>
            <SelectItem value="gra">Grapes</SelectItem>
            <SelectItem value="pin">Pineapple</SelectItem>
          </SelectGroup>
        </SelectContent>
        <SelectCaption variant="success">Caption Success</SelectCaption>
      </Select>
    </div>
  );
};
