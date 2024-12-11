import React, { createContext, useContext, useState, useEffect } from "react";
import propertiesService, {
  FetchPropertiesParams,
} from "../services/properties.service";
import { Property } from "../types/Property";

interface PropertiesContextProps {
  properties: Property[];
  isLoading: boolean;
  error: Error | null;
  page: number;
  totalPages: number;
  setPage: (page: number) => void;
  loadProperties: (params?: FetchPropertiesParams) => Promise<void>;
}

const PropertiesContext = createContext<PropertiesContextProps | undefined>(
  undefined
);

function PropertiesProvider({ children }: { children: React.ReactNode }) {
  const [properties, setProperties] = useState<Property[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1000);

  async function loadProperties(params?: FetchPropertiesParams) {
    setIsLoading(true);
    setError(null);
    try {
      const data = await propertiesService.fetchProperties({
        page: params?.page || page,
        limit: 10,
      });
      setProperties(data);
      setTotalPages(1000); // Actualiza según los datos del backend
    } catch (err) {
      setError(err instanceof Error ? err : new Error("Error desconocido"));
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    loadProperties({ page });
  }, [page]);

  return (
    <PropertiesContext.Provider
      value={{
        properties,
        isLoading,
        error,
        page,
        totalPages,
        setPage,
        loadProperties,
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
