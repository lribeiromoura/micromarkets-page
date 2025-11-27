import { useTranslation } from "react-i18next";

import type { MicromarketAsset } from "@/types/Micromarkets";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { IgrGrid, IgrColumn } from "igniteui-react-grids";
import type { IgrCellTemplateContext } from "igniteui-react-grids";

type Props = {
  assets: MicromarketAsset[];
};

const MicromarketAssetsTable = ({ assets }: Props) => {
  const { t } = useTranslation();

  const activeTemplate = (props: IgrCellTemplateContext) => {
    const value = Boolean(props.cell?.value);
    return (
      <div className="flex justify-center">
        <Checkbox checked={value} />
      </div>
    );
  };

  const cashTemplate = (props: IgrCellTemplateContext) => {
    const value = Boolean(props.cell?.value);
    return (
      <div className="flex justify-center">
        <Checkbox checked={value} />
      </div>
    );
  };

  return (
    <div className="mt-6 rounded-lg border bg-(--color-main-white) p-3 text-body-sm">
      <p className="my-4 font-semibold text-(--color-main-black)">
        {t("assets.title")}
      </p>

      <div className="border">
        <IgrGrid
          data={assets}
          height="220px"
          rowHeight={26}
          rowSelection="none"
          className="bg-(--color-main-black) text-(--color-main-white)"
        >
          <IgrColumn
            field="assetNumber"
            header={t("assets.grid.assetNumber")}
          />
          <IgrColumn field="kioskId" header={t("assets.grid.kioskId")} />
          <IgrColumn
            field="serialNumber"
            header={t("assets.grid.serialNumber")}
          />
          <IgrColumn field="category" header={t("assets.grid.category")} />
          <IgrColumn field="model" header={t("assets.grid.model")} />
          <IgrColumn
            field="active"
            header={t("assets.grid.active")}
            bodyTemplate={activeTemplate}
          />
          <IgrColumn
            field="isCash"
            header={t("assets.grid.isCash")}
            bodyTemplate={cashTemplate}
          />
        </IgrGrid>
      </div>

      <div className="mt-2 flex items-center gap-2">
        <Select>
          <SelectTrigger className="h-7 w-full max-w-xs">
            <SelectValue
              placeholder={t("assets.select.placeholder")}
            />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="new">
              {t("assets.select.new")}
            </SelectItem>
          </SelectContent>
        </Select>

        <Button type="button" variant="outline" className="h-7 px-3">
          {t("assets.addButton")}
        </Button>
      </div>
    </div>
  );
};

export default MicromarketAssetsTable;
