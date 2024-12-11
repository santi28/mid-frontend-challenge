import { useState } from "react";
import { useProperties } from "../hooks/useProperties";
import PropertyCard from "./PropertyCard";
import Pagination from "./Pagination";
import SortByButton from "./SortByButton";
import {
  MaterialSymbolsArrowCoolDownRounded,
  MaterialSymbolsArrowWarmUpRounded,
  MaterialSymbolsSortByAlphaRounded,
} from "./Icons";

export type SortOption = "relevance" | "highest" | "lowest";

export default function PropertiesList() {
  const [sortBy, setSortBy] = useState<SortOption>("relevance");
  const [page, setPage] = useState(1);
  const limit = 10; // Número de elementos por página

  const { data: properties, isLoading, error } = useProperties({ page, limit });

  const sortOptions: Record<
    SortOption,
    { label: string; icon: React.ReactNode }
  > = {
    relevance: {
      label: "Más relevante",
      icon: <MaterialSymbolsSortByAlphaRounded className="mr-2 h-4 w-4" />,
    },
    highest: {
      label: "Mayor precio",
      icon: <MaterialSymbolsArrowWarmUpRounded className="mr-2 h-4 w-4" />,
    },
    lowest: {
      label: "Menor precio",
      icon: <MaterialSymbolsArrowCoolDownRounded className="mr-2 h-4 w-4" />,
    },
  };

  const handleSort = () => {
    const options: SortOption[] = ["relevance", "highest", "lowest"];
    const currentIndex = options.indexOf(sortBy);
    const nextIndex = (currentIndex + 1) % options.length;
    setSortBy(options[nextIndex]);
  };

  const sortedProperties = properties?.slice().sort((a, b) => {
    if (sortBy === "highest") return b.price - a.price;
    if (sortBy === "lowest") return a.price - b.price;
    return 0; // Orden por relevancia (sin cambios)
  });

  if (isLoading) {
    return (
      <section className="bg-white/90 h-full p-6 rounded-xl shadow-md flex flex-col gap-6 md:w-[800px]">
        <div className="flex justify-center items-center">
          <span className="text-xl font-semibold">Loading...</span>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="bg-white/90 h-full p-6 rounded-xl shadow-md flex flex-col gap-6 md:w-[800px]">
        <div>
          Error: {error instanceof Error ? error.message : "Unknown error"}
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white/90 h-full p-6 rounded-xl shadow-md flex flex-col gap-6 md:w-[800px] overflow-y-auto">
      <header className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Anuncios</h2>
        <SortByButton
          sortBy={sortBy}
          onClick={handleSort}
          options={sortOptions}
        />
      </header>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
        {sortedProperties?.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
      <Pagination
        currentPage={page}
        totalPages={10} // Ajusta según la respuesta del backend
        onPageChange={setPage}
      />
    </section>
  );
}
