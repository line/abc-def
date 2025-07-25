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
  Icon,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@abc-def/react";

interface Props {}

const SelectDemo: React.FC<Props> = () => {
  return (
    <Select defaultValue="txt">
      <SelectTrigger>
        <SelectValue placeholder="Select a format" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="txt">
            <Icon className="mr-2" name="RiMenu2Line" size={16} />
            text
          </SelectItem>
          <SelectItem value="kwd">
            <Icon className="mr-2" name="RiFontSize" size={16} />
            keyword
          </SelectItem>
          <SelectItem value="num">
            <Icon className="mr-2" name="RiHashtag" size={16} />
            number
          </SelectItem>
          <SelectItem value="dat">
            <Icon className="mr-2" name="RiCalendar2Line" size={16} />
            date
          </SelectItem>
          <SelectItem value="sel">
            <Icon className="mr-2" name="RiCheckboxCircleLine" size={16} />
            select
          </SelectItem>
          <SelectItem value="mul">
            <Icon className="mr-2" name="RiListView" size={16} />
            multiSelect
          </SelectItem>
          <SelectItem value="img">
            <Icon className="mr-2" name="RiImageLine" size={16} />
            image
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectDemo;
