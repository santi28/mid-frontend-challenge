import { useProperties } from "../hooks/useProperties";
import PropertyCard from "./PropertyCard";

export default function PropertiesList() {
  const { data: properties, isLoading } = useProperties();

  return (
    <section className="bg-white/90 h-full p-6 rounded-xl shadow-md flex flex-col gap-6 md:w-[800px] overflow-y-auto">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <h2 className="text-xl font-semibold">Anuncios</h2>
          <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
            {properties?.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
