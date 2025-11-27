import type { Micromarket } from "@/types/Micromarkets";
import Sidebar from ".";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
} from "../ui/drawer";

type SidebarRootProps = {
  selectedId: string | null;
  setSelectedId: (id: string | null) => void;
  filteredMicromarkets: Micromarket[];
  openDrawer: boolean;
  setOpenDrawer: (open: boolean) => void;
};

export const SidebarRoot = ({
  selectedId,
  setSelectedId,
  filteredMicromarkets,
  openDrawer,
  setOpenDrawer,
}: SidebarRootProps) => {
  return (
    <>
      <aside className="hidden sm:block w-52 md:w-60 border-r bg-white">
        <Sidebar
          selectedId={selectedId}
          onSelect={setSelectedId}
          micromarkets={filteredMicromarkets}
        />
      </aside>

      <Drawer open={openDrawer} onOpenChange={setOpenDrawer}>
        <DrawerContent className="p-0" aria-describedby="Micromarkets drawer">
          <DrawerTitle className="border-b px-4 py-3 text-title-sm font-semibold">
            Micromarkets
          </DrawerTitle>
          <DrawerDescription className="sr-only">
            Micromarkets selection drawer
          </DrawerDescription>
          <Sidebar
            selectedId={selectedId}
            onSelect={(id) => {
              setSelectedId(id);
              setOpenDrawer(false);
            }}
            micromarkets={filteredMicromarkets}
          />
        </DrawerContent>
      </Drawer>
    </>
  );
};
