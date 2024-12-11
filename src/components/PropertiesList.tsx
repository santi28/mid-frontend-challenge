import { useProperties } from "../hooks/useProperties";

export default function PropertiesList() {
  const { data: properties, isLoading, error } = useProperties();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <section className="bg-white/90 h-full p-6 rounded-xl shadow-md flex flex-col gap-2 md:w-[600px]">
      <h2 className="text-xl font-semibold">Propiedades</h2>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
        {properties?.map((property) => (
          <div key={property.id} className="flex items-center gap-2">
            <img src={property.images[0]} alt="Logo" className="h-6 w-auto" />
            <span className="text-base font-semibold">
              <a href="#" className="underline">
                {property.title}
              </a>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
