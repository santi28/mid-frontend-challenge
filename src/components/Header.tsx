import {
  MaterialSymbolsFilterListRounded,
  MaterialSymbolsListRounded,
  MaterialSymbolsLoginRounded,
} from "./Icons";
import Button from "./ui/button";
import { useUIContext } from "../contexts/UIContext";

export default function Header() {
  const { toggleListVisibility, toggleFilterVisibility } = useUIContext();

  return (
    <>
      <header className="flex items-center bg-white/90 backdrop-blur-sm rounded-xl justify-between md:backdrop-blur-none md:bg-transparent md:!pointer-events-none md:w-full">
        <div className="md:bg-white/90 md:backdrop-blur-sm h-full px-6 md:rounded-xl md:shadow-md flex items-center gap-4">
          <img
            src="/logo.png"
            alt="Logo"
            className="h-6 my-4 md:my-3 w-auto object-cover"
          />
          <Button onClick={toggleFilterVisibility}>
            <MaterialSymbolsFilterListRounded className="h-8 w-8 md:h-6 md:w-6" />
            <span className="hidden md:block text-base font-semibold uppercase">
              Filtros
            </span>
          </Button>
        </div>

        <div className="md:bg-white/90 md:backdrop-blur-sm h-full px-6 md:rounded-xl md:shadow-md flex items-center gap-4">
          <Button onClick={toggleListVisibility}>
            <MaterialSymbolsListRounded className="h-8 w-8 md:h-6 md:w-6" />
            <span className="hidden md:block text-base font-semibold uppercase">
              Listado
            </span>
          </Button>
          <Button>
            <span className="hidden md:block text-base font-semibold uppercase">
              Ingresar
            </span>
            <MaterialSymbolsLoginRounded className="h-8 w-8 md:h-6 md:w-6" />
          </Button>
        </div>
      </header>
    </>
  );
}
