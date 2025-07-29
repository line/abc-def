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

import {
  Alert,
  AlertButton,
  AlertContent,
  AlertDescription,
  AlertIcon,
  AlertIconButton,
  AlertTextContainer,
  AlertTitle,
  IconNames,
} from "@line/abc-def-react";

const Props = {
  AlertIcon: {
    name: "↳ AlertIcon: name",
    size: "↳ AlertIcon: size",
  },
  AlertButton: {
    show: "↳ AlertButton: show",
    variant: "↳ AlertButton: variant",
    size: "↳ AlertButton: size",
    children: "↳ AlertButton: children",
  },
  AlertIconButton: {
    show: "↳ AlertIconButton: show",
    variant: "↳ AlertIconButton: variant",
    size: "↳ AlertIconButton: size",
    icon: "↳ AlertIconButton: icon",
  },
  AlertTitle: {
    children: "↳ AlertTitle: children",
  },
  AlertDescription: {
    children: "↳ AlertDescription: children",
  },
} as const;

const meta: Meta<
  React.ComponentProps<typeof Alert> & {
    [Props.AlertIcon.name]?: React.ComponentPropsWithoutRef<
      typeof AlertIcon
    >["name"];
    [Props.AlertIcon.size]?: React.ComponentPropsWithoutRef<
      typeof AlertIcon
    >["size"];
    [Props.AlertButton.show]?: boolean;
    [Props.AlertButton.variant]?: React.ComponentPropsWithoutRef<
      typeof AlertButton
    >["variant"];
    [Props.AlertButton.size]?: React.ComponentPropsWithoutRef<
      typeof AlertButton
    >["size"];
    [Props.AlertButton.children]: React.ComponentPropsWithoutRef<
      typeof AlertButton
    >["children"];
    [Props.AlertIconButton.show]?: boolean;
    [Props.AlertIconButton.variant]?: React.ComponentPropsWithoutRef<
      typeof AlertIconButton
    >["variant"];
    [Props.AlertIconButton.size]?: React.ComponentPropsWithoutRef<
      typeof AlertIconButton
    >["size"];
    [Props.AlertIconButton.icon]?: React.ComponentPropsWithoutRef<
      typeof AlertIconButton
    >["icon"];
    [Props.AlertTitle.children]?: React.ComponentPropsWithoutRef<
      typeof AlertTitle
    >["children"];
    [Props.AlertDescription.children]?: React.ComponentPropsWithoutRef<
      typeof AlertDescription
    >["children"];
  }
> = {
  title: "Alert",
  component: Alert,
  decorators: [
    (Story) => (
      <div>
        <Story />
      </div>
    ),
  ],
  args: {
    variant: "default",
    [Props.AlertIcon.name]: undefined,
    [Props.AlertIcon.size]: 20,
    [Props.AlertButton.show]: true,
    [Props.AlertButton.variant]: "outline",
    [Props.AlertButton.size]: "medium",
    [Props.AlertButton.children]: "Button",
    [Props.AlertIconButton.show]: true,
    [Props.AlertIconButton.variant]: "ghost",
    [Props.AlertIconButton.size]: "medium",
    [Props.AlertIconButton.icon]: undefined,
    [Props.AlertTitle.children]: "Title",
    [Props.AlertDescription.children]: "Description",
  },
  argTypes: {
    variant: {
      description: "Set the variant of the Alert.",
      table: {
        category: "Alert",
        defaultValue: {
          summary: "default",
        },
        type: {
          summary: "default | warning | success | error | informative",
        },
      },
      control: "select",
      options: ["default", "warning", "success", "error", "informative"],
    },
    [Props.AlertIcon.name]: {
      description: "Set the name of the AlertIcon.",
      table: {
        category: "AlertIcon",
        defaultValue: {
          summary: "ALERT_DEFAULT_ICON",
        },
        type: {
          summary: "IconNameType",
        },
      },
      control: "select",
      options: IconNames,
    },
    [Props.AlertIcon.size]: {
      description: "Set the size of the AlertIcon.",
      table: {
        category: "AlertIcon",
        defaultValue: {
          summary: "20",
        },
        type: {
          summary: "number",
        },
      },
      control: "number",
    },
    [Props.AlertButton.show]: {
      table: {
        category: "AlertButton",
      },
    },
    [Props.AlertButton.variant]: {
      description: "Set the variant of the AlertButton.",
      table: {
        category: "AlertButton",
        defaultValue: {
          summary: "outline",
        },
        type: {
          summary: "primary | secondary | destructive | ghost | outline",
        },
      },
      control: "select",
      options: ["primary", "secondary", "destructive", "ghost", "outline"],
    },
    [Props.AlertButton.size]: {
      description: "Set the size of the AlertButton.",
      table: {
        category: "AlertButton",
        defaultValue: {
          summary: "medium",
        },
        type: {
          summary: "small | medium | large",
        },
      },
      control: "select",
      options: ["small", "medium", "large"],
    },
    [Props.AlertButton.children]: {
      description: "Set the children of an AlertButton.",
      table: {
        category: "AlertButton",
        type: {
          summary: "React.ReactNode",
        },
      },
      control: "text",
    },
    [Props.AlertIconButton.show]: {
      table: {
        category: "AlertIconButton",
      },
    },
    [Props.AlertIconButton.variant]: {
      description: "Set the variant of AlertIconButton.",
      table: {
        category: "AlertIconButton",
        defaultValue: {
          summary: "ghost",
        },
        type: {
          summary: "primary | secondary | destructive | ghost | outline",
        },
      },
      control: "select",
      options: ["primary", "secondary", "destructive", "ghost", "outline"],
    },
    [Props.AlertIconButton.size]: {
      description: "Set the size of the AlertIconButton.",
      table: {
        category: "AlertIconButton",
        defaultValue: {
          summary: "medium",
        },
        type: {
          summary: "small | medium | large",
        },
      },
      control: "select",
      options: ["small", "medium", "large"],
    },
    [Props.AlertIconButton.icon]: {
      description: "Set the icon of AlertIconButton.",
      table: {
        category: "AlertIconButton",
        type: {
          summary: "IconNameType",
        },
      },
      control: "select",
      options: IconNames,
    },
    [Props.AlertTitle.children]: {
      description: "Set the children of AlertTitle.",
      table: {
        category: "AlertTitle",
        type: {
          summary: "React.ReactNode",
        },
      },
      control: "text",
    },
    [Props.AlertDescription.children]: {
      description: "Set the children of AlertDescription.",
      table: {
        category: "AlertDescription",
        type: {
          summary: "React.ReactNode",
        },
      },
      control: "text",
    },
    radius: { table: { disable: true } },
  },
  render: (args) => (
    <Alert variant={args.variant} radius={args.radius}>
      <AlertContent>
        <AlertIcon
          name={args[Props.AlertIcon.name]}
          size={args[Props.AlertIcon.size]}
        />
        <AlertTextContainer>
          <AlertTitle>{args[Props.AlertTitle.children]}</AlertTitle>
          <AlertDescription>
            {args[Props.AlertDescription.children]}
          </AlertDescription>
        </AlertTextContainer>
      </AlertContent>
      {args[Props.AlertButton.show] && (
        <AlertButton
          variant={args[Props.AlertButton.variant]}
          size={args[Props.AlertButton.size]}
          onClick={() => alert("clicked")}
        >
          {args[Props.AlertButton.children]}
        </AlertButton>
      )}
      {args[Props.AlertIconButton.show] && (
        <AlertIconButton
          variant={args[Props.AlertIconButton.variant]}
          size={args[Props.AlertIconButton.size]}
          icon={args[Props.AlertIconButton.icon]}
          onClick={() => alert("clicked")}
        />
      )}
    </Alert>
  ),
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Types = () => (
  <div className="grid grid-cols-3 gap-2 [&>div]:!min-w-0">
    <Alert>
      <AlertContent>
        <AlertTextContainer>
          <AlertTitle>Title</AlertTitle>
        </AlertTextContainer>
      </AlertContent>
      <AlertIconButton onClick={() => alert("clicked")} />
    </Alert>
    <Alert>
      <AlertContent>
        <AlertTextContainer>
          <AlertTitle>Title</AlertTitle>
        </AlertTextContainer>
      </AlertContent>
      <AlertButton onClick={() => alert("clicked")}>Button</AlertButton>
    </Alert>
    <Alert>
      <AlertContent>
        <AlertTextContainer>
          <AlertTitle>Title</AlertTitle>
        </AlertTextContainer>
      </AlertContent>
    </Alert>

    <Alert>
      <AlertContent>
        <AlertTextContainer>
          <AlertTitle>Title</AlertTitle>
          <AlertDescription>Description</AlertDescription>
        </AlertTextContainer>
      </AlertContent>
      <AlertIconButton onClick={() => alert("clicked")} />
    </Alert>
    <Alert>
      <AlertContent>
        <AlertTextContainer>
          <AlertTitle>Title</AlertTitle>
          <AlertDescription>Description</AlertDescription>
        </AlertTextContainer>
      </AlertContent>
      <AlertButton onClick={() => alert("clicked")}>Button</AlertButton>
    </Alert>
    <Alert>
      <AlertContent>
        <AlertTextContainer>
          <AlertTitle>Title</AlertTitle>
          <AlertDescription>Description</AlertDescription>
        </AlertTextContainer>
      </AlertContent>
    </Alert>

    <Alert>
      <AlertContent>
        <AlertTextContainer>
          <AlertDescription>Description</AlertDescription>
        </AlertTextContainer>
      </AlertContent>
      <AlertIconButton onClick={() => alert("clicked")} />
    </Alert>
    <Alert>
      <AlertContent>
        <AlertTextContainer>
          <AlertDescription>Description</AlertDescription>
        </AlertTextContainer>
      </AlertContent>
      <AlertButton onClick={() => alert("clicked")}>Button</AlertButton>
    </Alert>
    <Alert>
      <AlertContent>
        <AlertTextContainer>
          <AlertDescription>Description</AlertDescription>
        </AlertTextContainer>
      </AlertContent>
    </Alert>

    <Alert>
      <AlertContent>
        <AlertIcon name="RiFlashlightFill" />
        <AlertTextContainer>
          <AlertTitle>Title</AlertTitle>
        </AlertTextContainer>
      </AlertContent>
      <AlertIconButton onClick={() => alert("clicked")} />
    </Alert>
    <Alert>
      <AlertContent>
        <AlertIcon name="RiFlashlightFill" />
        <AlertTextContainer>
          <AlertTitle>Title</AlertTitle>
        </AlertTextContainer>
      </AlertContent>
      <AlertButton onClick={() => alert("clicked")}>Button</AlertButton>
    </Alert>
    <Alert>
      <AlertContent>
        <AlertIcon name="RiFlashlightFill" />
        <AlertTextContainer>
          <AlertTitle>Title</AlertTitle>
        </AlertTextContainer>
      </AlertContent>
    </Alert>

    <Alert>
      <AlertContent>
        <AlertIcon name="RiFlashlightFill" />
        <AlertTextContainer>
          <AlertTitle>Title</AlertTitle>
          <AlertDescription>Description</AlertDescription>
        </AlertTextContainer>
      </AlertContent>
      <AlertIconButton onClick={() => alert("clicked")} />
    </Alert>
    <Alert>
      <AlertContent>
        <AlertIcon name="RiFlashlightFill" />
        <AlertTextContainer>
          <AlertTitle>Title</AlertTitle>
          <AlertDescription>Description</AlertDescription>
        </AlertTextContainer>
      </AlertContent>
      <AlertButton onClick={() => alert("clicked")}>Button</AlertButton>
    </Alert>
    <Alert>
      <AlertContent>
        <AlertIcon name="RiFlashlightFill" />
        <AlertTextContainer>
          <AlertTitle>Title</AlertTitle>
          <AlertDescription>Description</AlertDescription>
        </AlertTextContainer>
      </AlertContent>
    </Alert>

    <Alert>
      <AlertContent>
        <AlertIcon name="RiFlashlightFill" />
        <AlertTextContainer>
          <AlertDescription>Description</AlertDescription>
        </AlertTextContainer>
      </AlertContent>
      <AlertIconButton onClick={() => alert("clicked")} />
    </Alert>
    <Alert>
      <AlertContent>
        <AlertIcon name="RiFlashlightFill" />
        <AlertTextContainer>
          <AlertDescription>Description</AlertDescription>
        </AlertTextContainer>
      </AlertContent>
      <AlertButton onClick={() => alert("clicked")}>Button</AlertButton>
    </Alert>
    <Alert>
      <AlertContent>
        <AlertIcon name="RiFlashlightFill" />
        <AlertTextContainer>
          <AlertDescription>Description</AlertDescription>
        </AlertTextContainer>
      </AlertContent>
    </Alert>
  </div>
);

export const Variant = () => (
  <div className="grid grid-cols-3 gap-2 [&>div]:!min-w-0">
    <Alert variant="warning">
      <AlertContent>
        <AlertIcon />
        <AlertTextContainer>
          <AlertTitle>Title</AlertTitle>
          <AlertDescription>Description</AlertDescription>
        </AlertTextContainer>
      </AlertContent>
      <AlertIconButton onClick={() => alert("clicked")} />
    </Alert>
    <Alert variant="warning">
      <AlertContent>
        <AlertIcon />
        <AlertTextContainer>
          <AlertTitle>Title</AlertTitle>
          <AlertDescription>Description</AlertDescription>
        </AlertTextContainer>
      </AlertContent>
      <AlertButton onClick={() => alert("clicked")}>Button</AlertButton>
    </Alert>
    <Alert variant="warning">
      <AlertContent>
        <AlertIcon />
        <AlertTextContainer>
          <AlertTitle>Title</AlertTitle>
          <AlertDescription>Description</AlertDescription>
        </AlertTextContainer>
      </AlertContent>
    </Alert>

    <Alert variant="success">
      <AlertContent>
        <AlertIcon />
        <AlertTextContainer>
          <AlertTitle>Title</AlertTitle>
          <AlertDescription>Description</AlertDescription>
        </AlertTextContainer>
      </AlertContent>
      <AlertIconButton onClick={() => alert("clicked")} />
    </Alert>
    <Alert variant="success">
      <AlertContent>
        <AlertIcon />
        <AlertTextContainer>
          <AlertTitle>Title</AlertTitle>
          <AlertDescription>Description</AlertDescription>
        </AlertTextContainer>
      </AlertContent>
      <AlertButton onClick={() => alert("clicked")}>Button</AlertButton>
    </Alert>
    <Alert variant="success">
      <AlertContent>
        <AlertIcon />
        <AlertTextContainer>
          <AlertTitle>Title</AlertTitle>
          <AlertDescription>Description</AlertDescription>
        </AlertTextContainer>
      </AlertContent>
    </Alert>

    <Alert variant="error">
      <AlertContent>
        <AlertIcon />
        <AlertTextContainer>
          <AlertTitle>Title</AlertTitle>
          <AlertDescription>Description</AlertDescription>
        </AlertTextContainer>
      </AlertContent>
      <AlertIconButton onClick={() => alert("clicked")} />
    </Alert>
    <Alert variant="error">
      <AlertContent>
        <AlertIcon />
        <AlertTextContainer>
          <AlertTitle>Title</AlertTitle>
          <AlertDescription>Description</AlertDescription>
        </AlertTextContainer>
      </AlertContent>
      <AlertButton onClick={() => alert("clicked")}>Button</AlertButton>
    </Alert>
    <Alert variant="error">
      <AlertContent>
        <AlertIcon />
        <AlertTextContainer>
          <AlertTitle>Title</AlertTitle>
          <AlertDescription>Description</AlertDescription>
        </AlertTextContainer>
      </AlertContent>
    </Alert>

    <Alert variant="informative">
      <AlertContent>
        <AlertIcon />
        <AlertTextContainer>
          <AlertTitle>Title</AlertTitle>
          <AlertDescription>Description</AlertDescription>
        </AlertTextContainer>
      </AlertContent>
      <AlertIconButton onClick={() => alert("clicked")} />
    </Alert>
    <Alert variant="informative">
      <AlertContent>
        <AlertIcon />
        <AlertTextContainer>
          <AlertTitle>Title</AlertTitle>
          <AlertDescription>Description</AlertDescription>
        </AlertTextContainer>
      </AlertContent>
      <AlertButton onClick={() => alert("clicked")}>Button</AlertButton>
    </Alert>
    <Alert variant="informative">
      <AlertContent>
        <AlertIcon />
        <AlertTextContainer>
          <AlertTitle>Title</AlertTitle>
          <AlertDescription>Description</AlertDescription>
        </AlertTextContainer>
      </AlertContent>
    </Alert>
  </div>
);
