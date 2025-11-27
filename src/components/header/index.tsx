import { useState } from "react";
import { FileText, CalendarDays, Settings } from "lucide-react";
import { useTranslation } from "react-i18next";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import Logo from "@/assets/logo.png";

import { cn } from "@/lib/utils";

const navItems: NavItem[] = [
  { id: "reports", icon: <FileText className="h-5 w-5" /> },
  { id: "calendar", icon: <CalendarDays className="h-5 w-5" /> },
  { id: "settings", icon: <Settings className="h-5 w-5" /> },
];

const Header = () => {
  const [active, setActive] = useState<string>("reports");
  const { i18n, t } = useTranslation();

  return (
    <header className="h-20 w-full border-b bg-(--color-main-white)">
      <div className="flex h-full items-center justify-between px-4 lg:px-6 gap-4">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <img src={Logo} alt="Logo" className="h-5 w-auto" />
            <div className="hidden sm:flex flex-col leading-tight">
              <span className="text-sm font-bold text-(--color-main-black)">
                {t("header.title")}
              </span>
            </div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActive(item.id)}
              className={cn(
                "relative flex items-center justify-center text-(--color-gray-dark-2)",
                "transition-colors"
              )}
            >
              {item.icon}
              {active === item.id && (
                <span className="absolute -bottom-2 left-0 right-0 mx-auto h-0.5 w-2 bg-(--color-main-yellow)" />
              )}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4 text-xs">
          <Select
            value={i18n.language}
            onValueChange={(value) => i18n.changeLanguage(value)}
          >
            <SelectTrigger className="h-7 w-[90px] text-xs bg-white border">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">EN</SelectItem>
              <SelectItem value="es">ES</SelectItem>
            </SelectContent>
          </Select>

          <div className="hidden sm:flex items-center gap-2 text-xs">
            <span className="text-(--color-gray-dark-3)">
              {t("header.hello")}, User
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
