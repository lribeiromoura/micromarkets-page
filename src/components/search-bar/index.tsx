import { useTranslation } from "react-i18next";

import { regions } from "@/data/regions";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import type { MicromarketFilters, StatusFilter } from "@/types/Micromarkets";
import { cn } from "@/lib/utils";

type Props = {
  filters: MicromarketFilters;
  onChangeFilters: (filters: MicromarketFilters) => void;
  onSubmit?: () => void;
};

const MicromarketSearchBar = ({
  filters,
  onChangeFilters,
  onSubmit,
}: Props) => {
  const { t } = useTranslation();

  const handleRegionChange = (value: string) => {
    onChangeFilters({ ...filters, region: value });
  };

  const handleStatusChange = (value: StatusFilter) => {
    onChangeFilters({ ...filters, status: value });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit?.();
  };

  return (
    <header className="w-full border-b bg-(--color-gray-dark-3) text-(--color-main-white) py-4 text-body-sm">
      <form
        onSubmit={handleSubmit}
        className="mx-4 my-3 grid gap-4 grid-cols-1 md:grid-cols-3"
      >
        <div className="flex flex-col gap-1 w-full">
          <Label htmlFor="region" className="text-body-sm">
            {t("search.region")}
          </Label>
          <Select value={filters.region} onValueChange={handleRegionChange}>
            <SelectTrigger
              id="region"
              className="h-8 w-full bg-(--color-main-white) text-(--color-main-black)"
            >
              <SelectValue placeholder="Region" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">{t("search.region")}</SelectItem>
              {regions.map((region) => (
                <SelectItem key={region.id} value={region.name}>
                  {region.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col gap-1 w-full">
          <Label htmlFor="status" className="text-body-sm">
            {t("search.status")}
          </Label>
          <Select
            value={filters.status}
            onValueChange={(value) => handleStatusChange(value as StatusFilter)}
          >
            <SelectTrigger
              id="status"
              className="h-8 w-full bg-(--color-main-white) text-(--color-main-black)"
            >
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">{t("search.status_all")}</SelectItem>
              <SelectItem value="active">
                {t("search.status_active")}
              </SelectItem>
              <SelectItem value="inactive">
                {t("search.status_inactive")}
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col justify-end w-full">
          <Button
            type="submit"
            variant="default"
            className={cn(
              "h-8 w-full rounded-none font-semibold",
            )}
          >
            {t("search.searchButton")}
          </Button>
        </div>
      </form>
    </header>
  );
};

export default MicromarketSearchBar;
