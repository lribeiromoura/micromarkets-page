import { useTranslation } from "react-i18next";

import type { Micromarket } from "@/types/Micromarkets";

type SidebarProps = {
  selectedId: string | null;
  micromarkets: Micromarket[];
  onSelect: (id: string) => void;
};

const Sidebar = ({ selectedId, onSelect, micromarkets }: SidebarProps) => {
  const { t } = useTranslation();
  return (
    <div className="flex h-full flex-col">
      <div className="border-b px-4 py-3 bg-(--color-main-gray)">
        <p className="text-body-sm font-medium uppercase tracking-wide text-(--color-gray-dark-3)">
          {t("sidebar.title")}
        </p>
        <p className="text-body-sm text-(--color-gray-dark-2)">
          {t("sidebar.count", { count: micromarkets.length })}
        </p>
      </div>

      <div className="flex-1 overflow-auto">
        {micromarkets.length === 0 && (
          <div className="px-4 py-4 text-body-sm text-(--color-gray-dark-3)">
            {t("sidebar.noResults")}
          </div>
        )}

        <ul className="space-y-1 px-2 py-3">
          {micromarkets.map((market) => {
            const isActive = market.id === selectedId;

            return (
              <li key={market.id}>
                <button
                  type="button"
                  onClick={() => onSelect(market.id)}
                  className={[
                    "flex w-full flex-col rounded-md px-3 py-2 text-left text-body-sm transition-all",
                    "border border-transparent",
                    "hover:bg-(--color-gray-mid-1)",
                    isActive
                      ? "border-l-4 border-l-(--color-main-yellow) bg-(--color-taxi-y-1)"
                      : "",
                  ].join(" ")}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-medium text-(--color-main-black)">
                      #{market.market}
                    </span>
                    <span
                      className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-medium ${
                        market.active
                          ? "bg-(--color-spring-1) text-(--color-gray-dark-3)"
                          : "bg-(--color-coral-1) text-(--color-gray-dark-3)"
                      }`}
                    >
                      {market.active
                        ? t("sidebar.active")
                        : t("sidebar.inactive")}
                    </span>
                  </div>

                  <p className="mt-1 text-body-sm text-(--color-gray-dark-3)">
                    {market.account}
                  </p>
                  <p className="text-body-sm text-(--color-gray-dark-4)">
                    {t("sidebar.provider")}: {market.provider}
                  </p>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
