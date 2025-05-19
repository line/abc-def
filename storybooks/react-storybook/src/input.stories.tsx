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
/* eslint-disable react-compiler/react-compiler */

import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import {
  IconNames,
  InputBox,
  InputCaption,
  InputClearButton,
  InputEyeButton,
  InputField,
  InputIcon,
  InputLabel,
  TextInput,
} from "@abc-def/react";

const Props = {
  InputLabel: {
    show: "↳ InputLabel: show",
    children: "↳ InputLabel: children",
  },
  TextInput: {
    placeholder: "↳ TextInput: placeholder",
    disabled: "↳ TextInput: disabled",
    error: "↳ TextInput: error",
  },
  InputIcon: {
    name: "↳ InputIcon: name",
  },
  InputCaption: {
    show: "↳ InputCaption: show",
    variant: "↳ InputCaption: variant",
    icon: "↳ InputCaption: icon",
    children: "↳ InputCaption: children",
  },
} as const;

const meta: Meta<
  React.ComponentProps<typeof TextInput> & {
    [Props.InputLabel.show]: boolean;
    [Props.InputLabel.children]: React.ComponentPropsWithoutRef<
      typeof InputLabel
    >["children"];
    [Props.TextInput.placeholder]: React.ComponentPropsWithoutRef<
      typeof TextInput
    >["placeholder"];
    [Props.TextInput.disabled]: React.ComponentPropsWithoutRef<
      typeof TextInput
    >["disabled"];
    [Props.TextInput.error]: React.ComponentPropsWithoutRef<
      typeof TextInput
    >["error"];
    [Props.InputIcon.name]: React.ComponentPropsWithoutRef<
      typeof InputIcon
    >["name"];
    [Props.InputCaption.show]: boolean;
    [Props.InputCaption.variant]: React.ComponentPropsWithoutRef<
      typeof InputCaption
    >["variant"];
    [Props.InputCaption.icon]: React.ComponentPropsWithoutRef<
      typeof InputCaption
    >["icon"];
    [Props.InputCaption.children]: React.ComponentPropsWithoutRef<
      typeof InputCaption
    >["children"];
  }
> = {
  title: "Input",
  component: TextInput,
  args: {
    [Props.InputLabel.show]: true,
    [Props.InputLabel.children]: "Label",
    [Props.InputIcon.name]: undefined,
    [Props.TextInput.placeholder]: "Placeholder...",
    [Props.TextInput.disabled]: false,
    [Props.TextInput.error]: false,
    [Props.InputCaption.show]: true,
    [Props.InputCaption.variant]: "default",
    [Props.InputCaption.icon]: undefined,
    [Props.InputCaption.children]: "Caption",
  },
  argTypes: {
    [Props.InputLabel.show]: {
      description: "Set whether to show the InputLabel.",
      table: {
        category: "InputLabel",
        defaultValue: {
          summary: "true",
        },
      },
    },
    [Props.InputLabel.children]: {
      description: "Set the children of the InputLabel.",
      table: {
        category: "InputLabel",
        type: {
          summary: "React.ReactNode",
        },
      },
      control: "text",
    },
    [Props.InputIcon.name]: {
      description: "Set the name of the InputIcon.",
      table: {
        category: "InputIcon",
        type: {
          summary: "IconNameTypes",
        },
      },
      control: "select",
      options: IconNames,
    },
    [Props.TextInput.placeholder]: {
      description: "Set the placeholder of the TextInput.",
      table: {
        category: "TextInput",
        type: {
          summary: "string",
        },
      },
      control: "text",
    },
    [Props.TextInput.disabled]: {
      description: "Set whether the TextInput is in a disabled state.",
      table: {
        category: "TextInput",
        type: {
          summary: "false",
        },
      },
      control: "boolean",
    },
    [Props.TextInput.error]: {
      description: "Set whether the TextInput is in an error state.",
      table: {
        category: "TextInput",
        type: {
          summary: "false",
        },
      },
      control: "boolean",
    },
    [Props.InputCaption.show]: {
      description: "Set whether to show the InputCaption.",
      table: {
        category: "InputCaption",
        defaultValue: {
          summary: "true",
        },
      },
    },
    radius: {
      description: "Set the radius of the InputTextarea.",
      table: {
        category: "Textarea",
        type: {
          summary: "small | medium | large",
        },
        defaultValue: {
          summary: "small",
        },
      },
      control: "radio",
      options: ["small", "medium", "large"],
    },
    [Props.InputCaption.variant]: {
      description: "Set the variant of the InputCaption.",
      table: {
        category: "InputCaption",
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
    [Props.InputCaption.icon]: {
      description: "Set the icon of the InputCaption.",
      table: {
        category: "InputCaption",
        type: {
          summary: "IconNameTypes",
        },
        defaultValue: {
          summary: "CAPTION_DEFAULT_ICON",
        },
      },
      control: "select",
      options: IconNames,
    },
    [Props.InputCaption.children]: {
      description: "Set the children of the InputCaption.",
      table: {
        category: "InputCaption",
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
    type: {
      table: {
        disable: true,
      },
    },
    error: {
      table: {
        disable: true,
      },
    },
  },
  decorators: (Story) => <Story />,
  render: (args) => {
    const inputRef = React.useRef<HTMLInputElement>(null);

    const handleClear = () => {
      if (inputRef.current) {
        inputRef.current.value = "";
        inputRef.current.focus();
      }
    };

    return (
      <InputField>
        {args[Props.InputLabel.show] && (
          <InputLabel>{args[Props.InputLabel.children]}</InputLabel>
        )}
        <InputBox>
          <InputIcon name={args[Props.InputIcon.name] ?? "RiUser3Fill"} />
          <TextInput
            radius={args.radius}
            ref={inputRef}
            placeholder={args[Props.TextInput.placeholder]}
            disabled={args[Props.TextInput.disabled]}
            error={args[Props.TextInput.error]}
          />
          <InputClearButton
            onClick={handleClear}
            disabled={args[Props.TextInput.disabled]}
          />
        </InputBox>
        {args[Props.InputCaption.show] && (
          <InputCaption
            variant={args[Props.InputCaption.variant]}
            icon={args[Props.InputCaption.icon]}
          >
            {args[Props.InputCaption.children]}
          </InputCaption>
        )}
      </InputField>
    );
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const TextField = () => {
  const count = 12;
  const inputRefs = Array.from({ length: count }, () =>
    React.createRef<HTMLInputElement>(),
  );

  const handleClear = (index: number) => {
    if (inputRefs[index]?.current) {
      inputRefs[index].current.value = "";
      inputRefs[index].current.focus();
    }
  };

  return (
    <div className="grid grid-cols-3 gap-2">
      <InputField>
        <InputLabel>Default</InputLabel>
        <InputBox>
          <TextInput
            ref={inputRefs[0]}
            type="text"
            placeholder="Placeholder..."
          />
          <InputClearButton onClick={() => handleClear(0)} />
        </InputBox>
        <InputCaption variant="info">Caption Info</InputCaption>
      </InputField>
      <InputField>
        <InputLabel>Disabled</InputLabel>
        <InputBox>
          <TextInput
            ref={inputRefs[1]}
            type="text"
            placeholder="Placeholder..."
            disabled
          />
          <InputClearButton onClick={() => handleClear(1)} />
        </InputBox>
        <InputCaption variant="success">Caption Success</InputCaption>
      </InputField>
      <InputField>
        <InputLabel>Error</InputLabel>
        <InputBox>
          <TextInput
            ref={inputRefs[2]}
            type="text"
            placeholder="Placeholder..."
            error
          />
          <InputClearButton onClick={() => handleClear(2)} />
        </InputBox>
        <InputCaption variant="error">Caption Error</InputCaption>
      </InputField>
    </div>
  );
};

export const Search = () => {
  const count = 12;
  const inputRefs = Array.from({ length: count }, () =>
    React.createRef<HTMLInputElement>(),
  );

  const handleClear = (index: number) => {
    if (inputRefs[index]?.current) {
      inputRefs[index].current.value = "";
      inputRefs[index].current.focus();
    }
  };

  return (
    <div className="grid grid-cols-3 gap-2">
      <InputField>
        <InputLabel>Default</InputLabel>
        <InputBox>
          <InputIcon name="RiSearchLine" />
          <TextInput
            ref={inputRefs[3]}
            type="search"
            placeholder="Placeholder..."
          />
          <InputClearButton onClick={() => handleClear(3)} />
        </InputBox>
        <InputCaption variant="info">Caption Info</InputCaption>
      </InputField>
      <InputField>
        <InputLabel>Disabled</InputLabel>
        <InputBox>
          <InputIcon name="RiSearchLine" />
          <TextInput
            ref={inputRefs[4]}
            type="search"
            placeholder="Placeholder..."
            disabled
          />
          <InputClearButton onClick={() => handleClear(4)} />
        </InputBox>
        <InputCaption variant="success">Caption Success</InputCaption>
      </InputField>
      <InputField>
        <InputLabel>Error</InputLabel>
        <InputBox>
          <InputIcon name="RiSearchLine" />
          <TextInput
            ref={inputRefs[5]}
            type="search"
            placeholder="Placeholder..."
            error
          />
          <InputClearButton onClick={() => handleClear(5)} />
        </InputBox>
        <InputCaption variant="error">Caption Error</InputCaption>
      </InputField>
    </div>
  );
};

export const Id = () => {
  const count = 12;
  const inputRefs = Array.from({ length: count }, () =>
    React.createRef<HTMLInputElement>(),
  );

  const handleClear = (index: number) => {
    if (inputRefs[index]?.current) {
      inputRefs[index].current.value = "";
      inputRefs[index].current.focus();
    }
  };

  return (
    <div className="grid grid-cols-3 gap-2">
      <InputField>
        <InputLabel>Default</InputLabel>
        <InputBox>
          <InputIcon name="RiUser3Fill" />
          <TextInput
            ref={inputRefs[6]}
            type="text"
            placeholder="Placeholder..."
          />
          <InputClearButton onClick={() => handleClear(6)} />
        </InputBox>
        <InputCaption variant="info">Caption Info</InputCaption>
      </InputField>
      <InputField>
        <InputLabel>Disabled</InputLabel>
        <InputBox>
          <InputIcon name="RiUser3Fill" />
          <TextInput
            ref={inputRefs[7]}
            type="text"
            placeholder="Placeholder..."
            disabled
          />
          <InputClearButton onClick={() => handleClear(7)} />
        </InputBox>
        <InputCaption variant="success">Caption Success</InputCaption>
      </InputField>
      <InputField>
        <InputLabel>Error</InputLabel>
        <InputBox>
          <InputIcon name="RiUser3Fill" />
          <TextInput
            ref={inputRefs[8]}
            type="text"
            placeholder="Placeholder..."
            error
          />
          <InputClearButton onClick={() => handleClear(8)} />
        </InputBox>
        <InputCaption variant="error">Caption Error</InputCaption>
      </InputField>
    </div>
  );
};

export const Password = () => {
  const count = 12;
  const inputRefs = Array.from({ length: count }, () =>
    React.createRef<HTMLInputElement>(),
  );

  const handleChangeVisibility = (visible: boolean, index: number) => {
    if (inputRefs[index]?.current) {
      inputRefs[index].current.type = visible ? "text" : "password";
      inputRefs[index].current.focus();
    }
  };

  return (
    <div className="grid grid-cols-3 gap-2">
      <InputField>
        <InputLabel>Default</InputLabel>
        <InputBox>
          <InputIcon name="RiLockPasswordFill" />
          <TextInput
            ref={inputRefs[9]}
            type="password"
            placeholder="Placeholder..."
          />
          <InputEyeButton
            onChangeVisibility={(visible) => handleChangeVisibility(visible, 9)}
          />
        </InputBox>
        <InputCaption variant="info">Caption Info</InputCaption>
      </InputField>
      <InputField>
        <InputLabel>Disabled</InputLabel>
        <InputBox>
          <InputIcon name="RiLockPasswordFill" />
          <TextInput
            ref={inputRefs[10]}
            type="password"
            placeholder="Placeholder..."
            disabled
          />
          <InputEyeButton
            disabled
            onChangeVisibility={(visible) =>
              handleChangeVisibility(visible, 10)
            }
          />
        </InputBox>
        <InputCaption variant="success">Caption Success</InputCaption>
      </InputField>
      <InputField>
        <InputLabel>Error</InputLabel>
        <InputBox>
          <InputIcon name="RiLockPasswordFill" />
          <TextInput
            ref={inputRefs[11]}
            type="password"
            placeholder="Placeholder..."
            error
          />
          <InputEyeButton
            onChangeVisibility={(visible) =>
              handleChangeVisibility(visible, 11)
            }
          />
        </InputBox>
        <InputCaption variant="error">Caption Error</InputCaption>
      </InputField>
    </div>
  );
};
