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
import {
  Combobox,
  ComboboxCaption,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxSeparator,
  ComboboxTrigger,
  Icon,
} from "@line/abc-def-react";

interface Props {}

const ComboboxDemo: React.FC<Props> = () => {
  return (
    <Combobox>
      <ComboboxTrigger>
        Combobox Trigger
        <Icon name="RiExpandUpDownLine" size={16} className="ml-auto" />
      </ComboboxTrigger>
      <ComboboxContent>
        <ComboboxInput />
        <ComboboxList>
          <ComboboxEmpty>Empty</ComboboxEmpty>
          <ComboboxGroup>
            <ComboboxItem>Item 1</ComboboxItem>
            <ComboboxItem>Item 2</ComboboxItem>
          </ComboboxGroup>
          <ComboboxSeparator />
          <ComboboxGroup>
            <ComboboxItem>
              <Icon name="RiUserLine" size={16} className="mr-2" />
              Profile
              <ComboboxCaption>⇧⌘P</ComboboxCaption>
            </ComboboxItem>
            <ComboboxItem>
              <Icon name="RiSettingsLine" size={16} className="mr-2" />
              Billing
              <ComboboxCaption>⌘B</ComboboxCaption>
            </ComboboxItem>
            <ComboboxItem>
              <Icon name="RiLogoutBoxRLine" size={16} className="mr-2" />
              Log out
              <ComboboxCaption>⇧⌘Q</ComboboxCaption>
            </ComboboxItem>
          </ComboboxGroup>
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
};

export default ComboboxDemo;
