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
import type {
  EmblaCarouselType,
  EmblaOptionsType,
  EmblaPluginType,
} from "embla-carousel";
import type { EmblaCarouselVueType } from "embla-carousel-vue";
import type { HTMLAttributes, UnwrapRef } from "vue";

type CarouselApi = EmblaCarouselVueType[1];
type CarouselOptions = EmblaOptionsType;
type CarouselPlugin = EmblaPluginType[];

export type { EmblaCarouselType };
export type UnwrapRefCarouselApi = UnwrapRef<CarouselApi>;

export interface CarouselProps {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  orientation?: "horizontal" | "vertical";
}

export type CarouselEmits = (
  e: "init-api",
  payload: UnwrapRefCarouselApi,
) => void;

export interface WithClassAsProps {
  class?: HTMLAttributes["class"];
}
