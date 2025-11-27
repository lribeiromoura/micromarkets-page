import type { Micromarket } from "@/types/Micromarkets";

type MicromarketsNotFoundProps = {
  micromarkets: Micromarket[];
};

const MicromarketsNotFound = ({ micromarkets }: MicromarketsNotFoundProps) => {
  return (
    <div className="flex h-full flex-1 items-center justify-center text-(--color-gray-dark-3)">
      {micromarkets.length === 0
        ? "No micromarkets found with the selected filters."
        : "Select a micromarket from the sidebar to view details."}
    </div>
  );
};

export default MicromarketsNotFound;
