import { Button } from "@/components/ui/button";
import { FileDown, Save } from "lucide-react";
import { useTranslation } from "react-i18next";

type Props = {
  onSave?: () => void;
  onExport?: () => void;
};

const FormActions = ({ onSave, onExport }: Props) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-wrap items-center gap-2 py-3">
      <Button
        variant="outline"
        size="sm"
        onClick={onExport}
        className="text-xs gap-2"
      >
        <FileDown className="h-4 w-4" />
        {t("actions.export")}
      </Button>

      <Button
        size="sm"
        onClick={onSave}
        variant="outline"
        className="text-xs gap-2"
      >
        <Save className="h-4 w-4" />
        {t("actions.save")}
      </Button>
    </div>
  );
};

export default FormActions;
