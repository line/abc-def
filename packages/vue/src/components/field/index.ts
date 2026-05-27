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
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

export const fieldVariants = cva("field", {
  variants: {
    orientation: {
      vertical: "field-orientation-vertical",
      horizontal: "field-orientation-horizontal",
      responsive: "field-orientation-responsive",
    },
  },
  defaultVariants: {
    orientation: "vertical",
  },
});

export const fieldLegendVariants = cva("field-legend", {
  variants: {
    variant: {
      label: "field-legend-variant-label",
      legend: "field-legend-variant-legend",
    },
  },
  defaultVariants: {
    variant: "legend",
  },
});

export type FieldVariants = VariantProps<typeof fieldVariants>;
export type FieldLegendVariants = VariantProps<typeof fieldLegendVariants>;

export { default as Field } from "./Field.vue";
export { default as FieldContent } from "./FieldContent.vue";
export { default as FieldDescription } from "./FieldDescription.vue";
export { default as FieldError } from "./FieldError.vue";
export { default as FieldGroup } from "./FieldGroup.vue";
export { default as FieldLabel } from "./FieldLabel.vue";
export { default as FieldLegend } from "./FieldLegend.vue";
export { default as FieldSeparator } from "./FieldSeparator.vue";
export { default as FieldSet } from "./FieldSet.vue";
export { default as FieldTitle } from "./FieldTitle.vue";
