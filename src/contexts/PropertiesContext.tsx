import { createContext, useContext, useEffect, useState } from "react";

import { Property } from "../types/Property";
import { useProperties } from "../hooks/useProperties";
import { Filters } from "./FiltersContext";

export type Pagination = { page: number; limit: number };

interface PropertiesContextProps {
  allProperties: Property[];
  visibleProperties: Property[];

  pagination: Pagination;

  isLoading: boolean;
  error: Error | null;

  setFilters: (filters: Partial<Filters>) => void;
  setPagination: (pagination: Pagination) => void;
}

const initialState: PropertiesContextProps = {
  allProperties: [],
  visibleProperties: [],

  pagination: {
    page: 1,
    limit: 10,
  },

  isLoading: false,
  error: null,

  setFilters: () => {},
  setPagination: () => {},
};

const PropertiesContext = createContext<PropertiesContextProps>(initialState);

function PropertiesProvider({ children }: { children: React.ReactNode }) {
  const [filters, setFilters] = useState<Filters>({});
  const [pagination, setPagination] = useState<Pagination>({
    page: 1,
    limit: 10,
  });

  const { data, isLoading, error } = useProperties({
    page: pagination.page,
    limit: pagination.limit,
  });

  // Estas son las propiedades que finalmente se mostrarán en el mapa
  const [visibleProperties, setVisibleProperties] = useState<Property[]>([]);

  useEffect(() => {
    if (!data) return; // Si no hay datos, no hace nada

    setVisibleProperties(data);
    console.log(data);
  }, [data]);

  return (
    <PropertiesContext.Provider
      value={{
        allProperties: data || [],
        visibleProperties,
        pagination,
        isLoading,
        error,
        setPagination,
        setFilters,
      }}
    >
      {children}
    </PropertiesContext.Provider>
  );
}

function usePropertiesContext() {
  const context = useContext(PropertiesContext);

  if (!context) {
    throw new Error(
      "usePropertiesContext debe usarse dentro de PropertiesProvider"
    );
  }

  return context;
}

export { PropertiesProvider, usePropertiesContext };
