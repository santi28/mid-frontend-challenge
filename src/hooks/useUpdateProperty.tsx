import { useMutation } from "@tanstack/react-query";
import propertiesService from "../services/properties.service";
import { Property } from "@/types/Property";

export const useUpdateProperty = () => {
  return useMutation({
    mutationKey: ["update-property"],
    mutationFn: (property: Partial<Property>) =>
      propertiesService.updateProperty(property.id as string, property),
    onSuccess: (newProperty) => {
      console.log("Propiedad actualizada:", newProperty);
    },
    onError: (error) => {
      console.error("Error al crear la propiedad:", error);
    },
  });
};
