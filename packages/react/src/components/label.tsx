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
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";

import { cn } from "../lib/utils";

interface LabelProps extends React.ComponentPropsWithoutRef<"p"> {
  asChild?: boolean;
}

function Label({ asChild, className, ...props }: LabelProps) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp data-slot="label" className={cn("label", className)} {...props} />
  );
}

export { Label };
