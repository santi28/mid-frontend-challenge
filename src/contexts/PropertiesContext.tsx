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
  isListVisible: boolean;
  toggleListVisibility: () => void;
  setPage: (page: number) => void;
  loadProperties: (params?: FetchPropertiesParams) => Promise<void>;
}

const PropertiesContext = createContext<PropertiesContextProps | undefined>(
  undefined
);

function PropertiesProvider({ children }: { children: React.ReactNode }) {
  const [properties, setProperties] = useState<Property[]>([]); // Contiene las propiedades cargadas

  const [isLoading, setIsLoading] = useState<boolean>(false); // Indica si se está cargando las propiedades
  const [error, setError] = useState<Error | null>(null); // Indica si hubo un error al cargar las propiedades
  
  const [page, setPage] = useState<number>(1); // Indica la página actual para la lista de propiedades
  const [totalPages, setTotalPages] = useState<number>(1); // Indica el numero total de páginas para la lista de propiedades
  
  const [isListVisible, setIsListVisible] = useState<boolean>(true); // Indica si el listado de propiedades está visible o no

  function toggleListVisibility() {
    setIsListVisible((prev) => !prev);
  }

  async function loadProperties(params?: FetchPropertiesParams) {
    setIsLoading(true);
    setError(null);
    try {
      const data = await propertiesService.fetchProperties({
        page: params?.page || page,
        limit: 10,
      });
      setProperties(data);
      setTotalPages(10); // Actualiza según los datos del backend
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
        isListVisible,
        toggleListVisibility,
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
