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
import React, { useEffect, useState } from "react";

import {
  Alert,
  AlertButton,
  AlertContent,
  AlertDescription,
  AlertIcon,
  AlertIconButton,
  AlertTextContainer,
  AlertTitle,
  Badge,
  Button,
  Checkbox,
  Icon,
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  TextInput,
  ToggleGroup,
  ToggleGroupItem,
} from "@abc-def/react";

const ChangeRoundedBase = () => {
  const [radius, setRadius] = useState(
    document.body.getAttribute("data-radius"),
  );

  useEffect(() => {
    // subscribe to attribute changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "data-radius"
        ) {
          const newRadius = document.body.getAttribute("data-radius");
          if (newRadius !== radius) {
            setRadius(newRadius);
          }
        }
      });
    });
    observer.observe(document.body, {
      attributes: true,
    });
    return () => {
      observer.disconnect();
    };
  }, []);
  useEffect(() => {
    return () => {
      document.body.removeAttribute("data-radius");
      document.documentElement.style.setProperty("--rounded-base", "0px");
    };
  }, []);

  return (
    <div>
      <div className="grid grid-cols-[repeat(2,max-content)] gap-8">
        <div>
          <strong className="text-base-strong text-neutral-primary w-full">
            Set Rounded Base
          </strong>
          <div className="flex items-center gap-2">
            <TextInput
              type="number"
              defaultValue={parseInt(
                document.documentElement.style.getPropertyValue(
                  "--rounded-base",
                ) || "0",
              )}
              onChange={(e) => {
                const number = Number(e.target.value);
                document.documentElement.style.setProperty(
                  "--rounded-base",
                  `${number}px`,
                );
              }}
              className="mt-1"
            />
            <span className="text-small-normal text-neutral-tertiary">px</span>
          </div>
        </div>
        <Select
          value={document.body.getAttribute("data-radius") ?? "medium"}
          onValueChange={(v) => {
            document.body.setAttribute("data-radius", v);
          }}
        >
          <Label>Radius</Label>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent maxHeight="auto" position="popper">
            <SelectItem value="small">Small</SelectItem>
            <SelectItem value="medium">Medium</SelectItem>
            <SelectItem value="large">Large</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="sb-unstyled div flex flex-wrap items-center gap-4 py-4">
        <strong className="text-base-normal text-neutral-tertiary w-full">
          Example
        </strong>
        <Checkbox>123</Checkbox>
        <Badge>Badge</Badge>
        <Button>Button</Button>
        <ToggleGroup type="single">
          <ToggleGroupItem value="item-1">
            <Icon name="RiFlashlightFill" size={20} />
            Item 1
          </ToggleGroupItem>
          <ToggleGroupItem value="item-2">
            <Icon name="RiFlashlightFill" size={20} />
            Item 2
          </ToggleGroupItem>
          <ToggleGroupItem value="item-3">
            <Icon name="RiFlashlightFill" size={20} />
            Item 3
          </ToggleGroupItem>
        </ToggleGroup>
        <Alert variant="default">
          <AlertContent>
            <AlertIcon size={20} />
            <AlertTextContainer>
              <AlertTitle>Title</AlertTitle>
              <AlertDescription>Description</AlertDescription>
            </AlertTextContainer>
          </AlertContent>
          <AlertButton size="medium" variant="outline">
            Button
          </AlertButton>
          <AlertIconButton size="medium" variant="ghost" />
        </Alert>
      </div>
    </div>
  );
};

export default ChangeRoundedBase;
