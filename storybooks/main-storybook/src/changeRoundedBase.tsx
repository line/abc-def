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
  Select,
  SelectContent,
  SelectItem,
  SelectLabel,
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
          <strong className="w-full text-base-strong text-neutral-primary">Set Rounded Base</strong>
          <div className="flex gap-2 items-center">
            <TextInput
              type="number"
              defaultValue={parseInt(
                document.documentElement.style.getPropertyValue("--rounded-base") ||
                  "0",
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
          <SelectLabel>Radius</SelectLabel>
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
        <strong className="w-full text-base-normal text-neutral-tertiary">Example</strong>
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
          <ToggleGroupItem value="item-3" >
            <Icon name="RiFlashlightFill" size={20} />
            Item 3
          </ToggleGroupItem>
        </ToggleGroup>
        <Alert variant="default">
          <AlertContent>
            <AlertIcon size={20} />
            <AlertTextContainer>
              <AlertTitle>
                Title
              </AlertTitle>
              <AlertDescription>
                Description
              </AlertDescription>
            </AlertTextContainer>
          </AlertContent>
          <AlertButton onClick={() => {}} size="medium" variant="outline" >
            Button
          </AlertButton>
          <AlertIconButton onClick={() => {}} size="medium" variant="ghost" />
        </Alert>
      </div>
    </div>
  );
};

export default ChangeRoundedBase;
