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
  Caption,
  IconNames,
  InputBox,
  InputClearButton,
  InputEyeButton,
  InputField,
  InputIcon,
  Label,
  TextInput,
} from "@abc-def/react";

const Props = {
  TextInput: {
    placeholder: "↳ TextInput: placeholder",
    disabled: "↳ TextInput: disabled",
    error: "↳ TextInput: error",
    radius: "↳ TextInput: radius",
  },
  InputIcon: {
    name: "↳ InputIcon: name",
  },
} as const;

const meta: Meta<
  React.ComponentProps<typeof TextInput> & {
    [Props.TextInput.placeholder]: React.ComponentPropsWithoutRef<
      typeof TextInput
    >["placeholder"];
    [Props.TextInput.radius]: React.ComponentPropsWithoutRef<
      typeof TextInput
    >["radius"];
    [Props.TextInput.disabled]: React.ComponentPropsWithoutRef<
      typeof TextInput
    >["disabled"];
    [Props.TextInput.error]: React.ComponentPropsWithoutRef<
      typeof TextInput
    >["error"];
    [Props.InputIcon.name]: React.ComponentPropsWithoutRef<
      typeof InputIcon
    >["name"];
  }
> = {
  title: "Input",
  component: TextInput,
  args: {
    [Props.TextInput.placeholder]: "Placeholder...",
    [Props.TextInput.radius]: undefined,
    [Props.TextInput.disabled]: false,
    [Props.TextInput.error]: false,
    [Props.InputIcon.name]: undefined,
  },
  argTypes: {
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
    [Props.TextInput.radius]: {
      description: "Set the radius of the TextInput.",
      table: {
        category: "TextInput",
        type: {
          summary: "small | medium | large",
        },
        defaultValue: {
          summary: "small",
        },
      },
      control: "radio",
      options: ["small", "medium", "large", undefined],
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
    radius: {
      table: {
        disable: true,
      },
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
        <Label>Label</Label>
        <InputBox>
          <InputIcon name={args[Props.InputIcon.name] ?? "RiUser3Fill"} />
          <TextInput
            radius={args[Props.TextInput.radius]}
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
        <Caption>Caption</Caption>
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
        <Label>Default</Label>
        <InputBox>
          <TextInput
            ref={inputRefs[0]}
            type="text"
            placeholder="Placeholder..."
          />
          <InputClearButton onClick={() => handleClear(0)} />
        </InputBox>
        <Caption variant="info">Caption Info</Caption>
      </InputField>
      <InputField>
        <Label>Disabled</Label>
        <InputBox>
          <TextInput
            ref={inputRefs[1]}
            type="text"
            placeholder="Placeholder..."
            disabled
          />
          <InputClearButton onClick={() => handleClear(1)} />
        </InputBox>
        <Caption variant="success">Caption Success</Caption>
      </InputField>
      <InputField>
        <Label>Error</Label>
        <InputBox>
          <TextInput
            ref={inputRefs[2]}
            type="text"
            placeholder="Placeholder..."
            error
          />
          <InputClearButton onClick={() => handleClear(2)} />
        </InputBox>
        <Caption variant="error">Caption Error</Caption>
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
        <Label>Default</Label>
        <InputBox>
          <InputIcon name="RiSearchLine" />
          <TextInput
            ref={inputRefs[3]}
            type="search"
            placeholder="Placeholder..."
          />
          <InputClearButton onClick={() => handleClear(3)} />
        </InputBox>
        <Caption variant="info">Caption Info</Caption>
      </InputField>
      <InputField>
        <Label>Disabled</Label>
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
        <Caption variant="success">Caption Success</Caption>
      </InputField>
      <InputField>
        <Label>Error</Label>
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
        <Caption variant="error">Caption Error</Caption>
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
        <Label>Default</Label>
        <InputBox>
          <InputIcon name="RiUser3Fill" />
          <TextInput
            ref={inputRefs[6]}
            type="text"
            placeholder="Placeholder..."
          />
          <InputClearButton onClick={() => handleClear(6)} />
        </InputBox>
        <Caption variant="info">Caption Info</Caption>
      </InputField>
      <InputField>
        <Label>Disabled</Label>
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
        <Caption variant="success">Caption Success</Caption>
      </InputField>
      <InputField>
        <Label>Error</Label>
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
        <Caption variant="error">Caption Error</Caption>
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
        <Label>Default</Label>
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
        <Caption variant="info">Caption Info</Caption>
      </InputField>
      <InputField>
        <Label>Disabled</Label>
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
        <Caption variant="success">Caption Success</Caption>
      </InputField>
      <InputField>
        <Label>Error</Label>
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
        <Caption variant="error">Caption Error</Caption>
      </InputField>
    </div>
  );
};
