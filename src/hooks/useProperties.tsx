import { useQuery } from "@tanstack/react-query";
import propertiesService from "../services/properties.service";

export const useProperties = () => {
  return useQuery({
    queryKey: ["properties"],
    queryFn: () => propertiesService.fetchProperties({}),
    staleTime: 1000 * 60 * 5, // Cache por 5 minutos
  });
};
