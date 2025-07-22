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
import type { NextPage } from "next";

import { Button, Icon, toast, Toaster } from "@abc-def/react";

const ToastPage: NextPage = () => {
  return (
    <div className="grid min-h-[300px] grid-cols-3 grid-rows-[repeat(3,min-content)] gap-2">
      <Button
        variant="outline"
        onClick={() => {
          const promise = () =>
            new Promise((resolve) => setTimeout(() => resolve({}), 60_000));

          toast.promise(promise, {
            loading: "Loading",
            success: () => "Success",
            error: () => "Error",
          });
        }}
      >
        Toast promise (success)
      </Button>
      <Button
        variant="outline"
        onClick={() => {
          const promise = () =>
            new Promise((_, reject) => setTimeout(reject, 2000));

          toast.promise(promise, {
            loading: "Loading",
            description: "Description",
            success: () => "Success",
            error: () => "Error",
            action: {
              label: "Action",
              onClick: () => alert("clicked"),
            },
            cancel: {
              label: <Icon name="RiCloseFill" size={20} />,
              onClick: () => null,
            },
          });
        }}
      >
        Toast promise (error)
      </Button>
      <Toaster />
    </div>
  );
};

export default ToastPage;
