import type { Micromarket } from "@/types/Micromarkets";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

type Props = {
  form: Micromarket | null;
};

const MicromarketForm = ({ form }: Props) => {
  const { t } = useTranslation();

  return (
    <div className="rounded-lg border bg-(--color-main-white) mt-1 mb-4 px-4 py-3 text-body-sm">
      {form ? (
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Checkbox id="active" checked={form.active} disabled />
              <Label htmlFor="active" className="text-body-sm">
                {t("form.active")}
              </Label>
              <span className="ml-2 text-[11px] text-(--color-gray-dark-3)">
                {t("form.cannotChange")}
              </span>
            </div>

            <div className="grid gap-2">
              <Label className="text-body-sm">
                {t("form.marketNumber")}
              </Label>
              <Input
                value={form.market}
                disabled
                className="h-8 text-body-sm"
              />
            </div>

            <div className="grid gap-2">
              <Label className="text-body-sm">
                {t("form.mgmtNumber")}
              </Label>
              <Input
                value={form.mgmtNumber}
                disabled
                className="h-8 text-body-sm"
              />
            </div>

            <div className="grid gap-2">
              <Label className="text-body-sm">{t("form.account")}</Label>
              <Input
                value={form.account}
                disabled
                className="h-8 text-body-sm"
              />
            </div>

            <div className="grid gap-2">
              <Label className="text-body-sm">{t("form.location")}</Label>
              <Input
                value={form.location}
                disabled
                className="h-8 text-body-sm"
              />
            </div>

            <div className="grid gap-2">
              <Label className="text-body-sm">{t("form.provider")}</Label>
              <div className="flex">
                <Input
                  value={form.provider}
                  disabled
                  className="h-8 text-body-sm rounded-none rounded-r-md"
                />
              </div>
            </div>

            <div className="grid gap-2">
              <Label className="text-body-sm">
                {t("form.providerConfig")}
              </Label>
              <Textarea
                value={form.providerConfig}
                className="min-h-20 text-body-sm"
                disabled
              />
            </div>
          </div>

          <div className="space-y-3">
            <div className="grid grid-cols-[1fr_auto] gap-2 items-center">
              <Label className="text-body-sm">
                {t("form.creditCardFeeAmount")}
              </Label>
              <Input
                value={form.creditCardFeeAmount}
                className="h-8 text-body-sm w-24 text-right"
              />
            </div>

            <div className="grid grid-cols-[1fr_auto] gap-2 items-center">
              <Label className="text-body-sm">
                {t("form.creditCardFeePercent")}
              </Label>
              <Input
                value={form.creditCardFeePercent}
                className="h-8 text-body-sm w-24 text-right"
              />
            </div>

            <div className="flex items-center justify-between gap-4 mt-2">
              <div className="flex items-center gap-2">
                <Label className="text-body-sm">
                  {t("form.applyFeeToTopUps")}
                </Label>
                <Checkbox checked={form.applyFeeToTopUps} />
              </div>

              <div className="flex items-center gap-2">
                <Label className="text-body-sm">
                  {t("form.hasPriceTags")}
                </Label>
                <Checkbox checked={form.hasPriceTags} />
              </div>
            </div>

            <div className="grid gap-2 mt-4">
              <Label className="text-body-sm">
                {t("form.lastVdiMarketPush")}
              </Label>
              <Input
                value={form.lastVdiMarketPush}
                disabled
                className="h-8 text-body-sm"
              />
            </div>

            <div className="grid gap-2">
              <Label className="text-body-sm">
                {t("form.lastVdiProductPush")}
              </Label>
              <Input
                value={form.lastVdiProductPush}
                disabled
                className="h-8 text-body-sm"
              />
            </div>

            <div className="grid gap-2">
              <Label className="text-body-sm">
                {t("form.lastVdiSaleReceived")}
              </Label>
              <Input
                value={form.lastVdiSaleReceived}
                disabled
                className="h-8 text-body-sm"
              />
            </div>

            <div className="grid grid-cols-[1fr_auto] gap-2 items-center">
              <div className="grid gap-2">
                <Label className="text-body-sm">
                  {t("form.vdiProductsInQueue")}
                </Label>
                <Input
                  value={form.vdiProductsInQueue}
                  className="h-8 text-body-sm w-24"
                />
              </div>

              <Button
                type="button"
                variant="outline"
                className="mt-5 h-8 px-3"
              >
                {t("form.showQueue")}
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-body-sm text-(--color-gray-dark-3)">
          {t("form.noMicromarketSelected")}
        </p>
      )}
    </div>
  );
};

export default MicromarketForm;
