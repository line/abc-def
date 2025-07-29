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
  Dropdown,
  DropdownCaption,
  DropdownContent,
  DropdownGroup,
  DropdownItem,
  DropdownLabel,
  DropdownPortal,
  DropdownSeparator,
  DropdownSub,
  DropdownSubContent,
  DropdownSubTrigger,
  DropdownTrigger,
  Icon,
} from "@line/abc-def-react";

interface Props {}

const DropdownDemo: React.FC<Props> = () => {
  return (
    <Dropdown>
      <DropdownTrigger>Dropdown Trigger</DropdownTrigger>
      <DropdownContent className="min-w-56">
        <DropdownLabel>Label</DropdownLabel>
        <DropdownSeparator />
        <DropdownGroup>
          <DropdownItem>
            <Icon name="RiUserLine" size={16} className="mr-2" />
            Profile
            <DropdownCaption>⇧⌘P</DropdownCaption>
          </DropdownItem>
          <DropdownItem>
            <Icon name="RiSettingsLine" size={16} className="mr-2" />
            Billing
            <DropdownCaption>⌘B</DropdownCaption>
          </DropdownItem>
          <DropdownSub>
            <DropdownSubTrigger>
              <Icon name="Ri24HoursFill" size={16} className="mr-2" />
              Sub Trigger
              <Icon name="RiArrowRightSLine" size={16} className="ml-auto" />
            </DropdownSubTrigger>
            <DropdownPortal>
              <DropdownSubContent>
                <DropdownItem>User 1</DropdownItem>
                <DropdownItem>User 2</DropdownItem>
                <DropdownSeparator />
                <DropdownItem>More...</DropdownItem>
              </DropdownSubContent>
            </DropdownPortal>
          </DropdownSub>
        </DropdownGroup>
      </DropdownContent>
    </Dropdown>
  );
};

export default DropdownDemo;
