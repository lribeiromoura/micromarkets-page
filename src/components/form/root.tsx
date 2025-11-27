import { lazy, Suspense } from "react";
import type { Micromarket } from "@/types/Micromarkets";
import { Skeleton } from "../ui/skeleton";
const MicromarketForm = lazy(() => import("@/components/form"));
const FormActions = lazy(() => import("@/components/form-actions")); 

type FormRootProps = {
  selectedId: string | null;
  filteredMicromarkets: Micromarket[];
};

export const FormRoot = ({
  selectedId,
  filteredMicromarkets,
}: FormRootProps) => {
  return (
    <>
      <Suspense
        fallback={<Skeleton className="h-full w-full mt-4 rounded-md" />}
      >
        <FormActions
          onSave={() => console.log("save")}
          onExport={() => console.log("export")}
        />
        <MicromarketForm
          form={filteredMicromarkets.find((m) => m.id === selectedId) || null}
        /> 
      </Suspense>
    </>
  );
};
