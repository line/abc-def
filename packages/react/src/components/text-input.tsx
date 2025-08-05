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
"use client";

import type { ButtonHTMLAttributes, HTMLInputTypeAttribute } from "react";
import React, { useRef } from "react";
import { cva } from "class-variance-authority";

import type { Radius, Size } from "../lib/types";
import { ICON_SIZE } from "../constants";
import { cn, composeRefs } from "../lib/utils";
import { Icon } from "./icon";
import useTheme from "./use-theme";

type TextInputType = (
  | "text"
  | "email"
  | "password"
  | "search"
  | "tel"
  | "number"
) &
  HTMLInputTypeAttribute;

const TextInputBox = React.forwardRef<
  HTMLInputElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return (
    <div ref={ref} className={cn("text-input-box", className)} {...props}>
      {children}
    </div>
  );
});
TextInputBox.displayName = "TextInputBox";

const inputVariants = cva("text-input", {
  variants: {
    size: {
      large: "text-input-large",
      medium: "text-input-medium",
      small: "text-input-small",
    },
    radius: {
      large: "text-input-radius-large",
      medium: "text-input-radius-medium",
      small: "text-input-radius-small",
    },
    defaultVariants: {
      size: undefined,
      radius: undefined,
    },
  },
});
interface TextInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  size?: Size;
  type?: TextInputType;
  radius?: Radius;
}

const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  (props, ref) => {
    const {
      size,
      type = "text",
      radius,
      disabled = false,
      onFocus,
      onBlur,
      className,
      ...rest
    } = props;

    const { themeRadius } = useTheme();
    const { themeSize } = useTheme();
    const inputRef = useRef<HTMLInputElement>(null);

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      e.stopPropagation();
      if (!e.currentTarget.contains(e.relatedTarget)) {
        onFocus?.(e);
      }
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      e.stopPropagation();
      if (!e.currentTarget.contains(e.relatedTarget)) {
        onBlur?.(e);
      }
    };
    return (
      <input
        {...rest}
        spellCheck="false"
        type={type}
        ref={composeRefs(inputRef, ref)}
        onFocus={handleFocus}
        onBlur={handleBlur}
        disabled={disabled}
        className={inputVariants({
          size: size ?? themeSize,
          radius: radius ?? themeRadius,
          className,
        })}
      />
    );
  },
);

TextInput.displayName = "TextInput";

const inputButtonVariants = cva("text-input-button", {
  variants: {
    size: {
      large: "text-input-button-large",
      medium: "text-input-button-medium",
      small: "text-input-button-small",
    },
    defaultVariants: {
      size: undefined,
    },
  },
});

interface TextInputClearButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: Size;
}

const TextInputClearButton = React.forwardRef<
  HTMLButtonElement,
  TextInputClearButtonProps
>(({ size, className, ...props }, ref) => {
  const { themeSize } = useTheme();
  return (
    <button
      ref={ref}
      type="button"
      className={inputButtonVariants({
        size: size ?? themeSize,
        className: cn("show-only-on-focus-and-has-value", className),
      })}
      aria-label="Reset input text"
      {...props}
    >
      <Icon name="RiCloseCircleFill" size={ICON_SIZE[size ?? themeSize]} />
    </button>
  );
});
TextInputClearButton.displayName = "TextInputClearButton";

interface TextInputEyeButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: Size;
  onChangeVisibility?: (visible: boolean) => void;
}
const TextInputEyeButton = React.forwardRef<
  HTMLButtonElement,
  TextInputEyeButtonProps
>(({ size, className, onClick, onChangeVisibility, ...props }, ref) => {
  const [visible, setVisible] = React.useState(false);
  const { themeSize } = useTheme();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setVisible((visible) => !visible);
    onClick?.(e);
  };

  React.useEffect(() => {
    onChangeVisibility?.(visible);
  }, [visible]);

  return (
    <button
      ref={ref}
      type="button"
      className={inputButtonVariants({ size: size ?? themeSize, className })}
      onClick={handleClick}
      aria-label={visible ? "hide password" : "show password"}
      {...props}
    >
      {visible ? (
        <Icon name="RiEyeCloseFill" size={ICON_SIZE[size ?? themeSize]} />
      ) : (
        <Icon name="RiEyeFill" size={ICON_SIZE[size ?? themeSize]} />
      )}
    </button>
  );
});
TextInputEyeButton.displayName = "TextInputEyeButton";

export {
  TextInputBox,
  TextInput,
  TextInputClearButton,
  TextInputEyeButton,
  type TextInputProps,
};
