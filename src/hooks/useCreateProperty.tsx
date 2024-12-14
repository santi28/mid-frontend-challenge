import { useMutation } from "@tanstack/react-query";
import propertiesService from "../services/properties.service";

export const useCreateProperty = () => {
  return useMutation({
    mutationKey: ["create-property"],
    mutationFn: propertiesService.createProperty,
    onSuccess: (newProperty) => {
      console.log("Propiedad creada:", newProperty);
      // Aquí puedes invalidar queries relacionadas, como "properties"
    },
    onError: (error) => {
      console.error("Error al crear la propiedad:", error);
    },
  });
};
