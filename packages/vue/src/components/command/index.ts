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
import type { Ref } from "vue";
import { createContext } from "reka-ui";

export { default as Command } from "./Command.vue";
export { default as CommandDialog } from "./CommandDialog.vue";
export { default as CommandEmpty } from "./CommandEmpty.vue";
export { default as CommandGroup } from "./CommandGroup.vue";
export { default as CommandInput } from "./CommandInput.vue";
export { default as CommandItem } from "./CommandItem.vue";
export { default as CommandList } from "./CommandList.vue";
export { default as CommandSeparator } from "./CommandSeparator.vue";
export { default as CommandShortcut } from "./CommandShortcut.vue";

export const [useCommand, provideCommandContext] = createContext<{
  allItems: Ref<Map<string, string>>;
  allGroups: Ref<Map<string, Set<string>>>;
  filterState: {
    search: string;
    filtered: {
      count: number;
      items: Map<string, number>;
      groups: Set<string>;
    };
  };
}>("Command");

export const [useCommandGroup, provideCommandGroupContext] = createContext<{
  id?: string;
}>("CommandGroup");
