import { MaterialSymbolsFilterListRounded } from "./Icons";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-10 m-6 flex items-center">
      <div className="w-full md:w-auto flex items-center justify-between py-2.5 px-2.5 bg-white/60 hover:bg-white/90 backdrop-blur-md rounded-xl shadow-md gap-2.5 transition-all duration-300 ease-in-out">
        <img src="/logo.png" alt="Logo" className="h-6 w-auto object-cover" />
        <button className="flex items-center gap-2 py-0.5 px-1.5 pr-2 rounded-lg select-none hover:bg-neutral-300/60">
          <MaterialSymbolsFilterListRounded className="h-4.5 w-4.5" />
          <span className="text-base font-semibold">Filtros</span>
        </button>
      </div>
    </header>
  );
}
