import { useState } from "react";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";

import { micromarketsData } from "@/data/micromarkets";

import { Button } from "@/components/ui/button";

import { SidebarRoot } from "@/components/sidebar/root";
import MicromarketSearchBar from "@/components/search-bar";
import type { MicromarketFilters } from "@/types/Micromarkets";

const MicromarketPage = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const [filteredMicromarkets, setFilteredMicromarkets] =
    useState(micromarketsData);

  const [selectedId, setSelectedId] = useState<string | null>(
    micromarketsData[0]?.id ?? null
  );

  const [filters, setFilters] = useState<MicromarketFilters>({
    region: "all",
    status: "all",
  });

  const handleFilter = () => {
    let filtered = micromarketsData;

    if (filters.region !== "all") {
      filtered = filtered.filter((m) => m.region === filters.region);
    }

    if (filters.status !== "all") {
      const isActive = filters.status === "active";
      filtered = filtered.filter((m) => m.active === isActive);
    }

    setFilteredMicromarkets(filtered);

    setSelectedId(filtered[0]?.id ?? null);
  };

  return (
    <div className="w-full flex flex-col overflow-hidden h-full">
      <MicromarketSearchBar
        filters={filters}
        onChangeFilters={setFilters}
        onSubmit={handleFilter}
      />
      <div className="flex flex-1 overflow-hidden">
        <SidebarRoot
          selectedId={selectedId}
          setSelectedId={setSelectedId}
          filteredMicromarkets={filteredMicromarkets}
          openDrawer={openDrawer}
          setOpenDrawer={setOpenDrawer}
        />

        <main className="flex-1 overflow-auto px-2 pb-10 lg:px-6 bg-gray-50"></main>

        <Button
          type="button"
          onClick={() => setOpenDrawer(true)}
          size="icon"
          className={cn("sm:hidden fixed bottom-4 right-4 z-50 rounded-full")}
        >
          <Menu />
        </Button>
      </div>
    </div>
  );
};

export default MicromarketPage;
