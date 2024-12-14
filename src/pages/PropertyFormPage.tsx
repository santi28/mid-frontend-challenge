import Header from "@/components/Header";
import PropertyCreationFrom from "@/components/PropertyCreationForm/PropertyFrom";
import { useProperty } from "@/hooks/useProperty";
import { useParams } from "react-router-dom";

export default function PropertyCreation() {
  const { id } = useParams<{ id: string }>();

  const { data: propertyData, isLoading, isError, error } = useProperty(id);

  if (isLoading) return <p>Cargando datos de la propiedad...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div className="flex flex-col w-full h-dvh p-6 gap-4">
      <Header />
      <PropertyCreationFrom
        mode={id ? "edit" : "create"}
        property={propertyData}
      />
    </div>
  );
}