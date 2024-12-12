import { useUIContext } from "../../contexts/UIContext";

export default function FilterWrapper() {
  const { isFilterOpen } = useUIContext();

  if (!isFilterOpen) return null;

  return (
    <section className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-md flex flex-col gap-2 max-w-[768px]">
      <h2 className="text-xl font-semibold text-gray-800 w-full">Filtros</h2>

      {/* Búsqueda por título o dirección */}
      <label className="block text-sm font-medium mb-1 w-full">
        <span className="opacity-70">Buscar por título o dirección</span>
        <input
          id="search"
          type="text"
          placeholder="Buscar por título o dirección"
          className="w-full md:flex-1 py-2 px-4 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-red-700"
        />
      </label>

      <div className="flex gap-4 w-full">
        {/* Filtros por tipo de propiedad */}
        <label className="block text-sm font-medium mb-1 flex-1">
          <span className="opacity-70">Tipo de Propiedad</span>
          <select
            id="type"
            name="type"
            className="w-full md:flex-1 py-2 px-4 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-red-700"
          >
            <option value="">Todos</option>
            <option value="house">Casa</option>
            <option value="apartment">Departamento</option>
            <option value="land">Terreno</option>
            <option value="office">Oficina</option>
          </select>
        </label>

        {/* Filtros por estado */}
        <label className="block text-sm font-medium mb-1 flex-1">
          <span className="opacity-70">Estado</span>
          <select
            id="status"
            name="status"
            className="w-full md:flex-1 py-2 px-4 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-red-700"
          >
            <option value="">Todos</option>
            <option value="sale">En Venta</option>
            <option value="rent">En Alquiler</option>
          </select>
        </label>
      </div>
    </section>
  );
}
