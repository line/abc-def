import type { ComponentProps, ComponentType } from "react";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@abc-def/react";

const ResizablePanelGroupWithDirection =
  ResizablePanelGroup as unknown as ComponentType<
    ComponentProps<typeof ResizablePanelGroup> & {
      direction: "horizontal" | "vertical";
    }
  >;

export function ResizableHorizontal() {
  return (
    <ResizablePanelGroupWithDirection
      direction="horizontal"
      className="min-h-48 max-w-3xl rounded-2xl border"
    >
      <ResizablePanel defaultSize={35}>
        <div className="flex h-full items-center justify-center p-6 text-sm">
          Layers
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={65}>
        <div className="flex h-full items-center justify-center p-6 text-sm">
          Preview canvas
        </div>
      </ResizablePanel>
    </ResizablePanelGroupWithDirection>
  );
}

export function ResizableVertical() {
  return (
    <ResizablePanelGroupWithDirection
      direction="vertical"
      className="min-h-72 max-w-xl rounded-2xl border"
    >
      <ResizablePanel defaultSize={55}>
        <div className="flex h-full items-center justify-center p-6 text-sm">
          Discussion
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={45}>
        <div className="flex h-full items-center justify-center p-6 text-sm">
          Activity log
        </div>
      </ResizablePanel>
    </ResizablePanelGroupWithDirection>
  );
}
