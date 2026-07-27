/**
 * Copyright 2026 LY Corporation
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
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

export { default as Item } from "./Item.vue";
export { default as ItemActions } from "./ItemActions.vue";
export { default as ItemContent } from "./ItemContent.vue";
export { default as ItemDescription } from "./ItemDescription.vue";
export { default as ItemFooter } from "./ItemFooter.vue";
export { default as ItemGroup } from "./ItemGroup.vue";
export { default as ItemHeader } from "./ItemHeader.vue";
export { default as ItemMedia } from "./ItemMedia.vue";
export { default as ItemSeparator } from "./ItemSeparator.vue";
export { default as ItemTitle } from "./ItemTitle.vue";

export const itemVariants = cva("item", {
  variants: {
    variant: {
      default: "item-variant-default",
      outline: "item-variant-outline",
      muted: "item-variant-muted",
    },
    size: {
      default: "item-size-default",
      sm: "item-size-sm",
      xs: "item-size-xs",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export const itemMediaVariants = cva("item-media", {
  variants: {
    variant: {
      default: "item-media-variant-default",
      icon: "item-media-variant-icon",
      image: "item-media-variant-image",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export type ItemVariants = VariantProps<typeof itemVariants>;
export type ItemMediaVariants = VariantProps<typeof itemMediaVariants>;
