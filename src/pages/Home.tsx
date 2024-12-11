import Header from "../components/Header";
import { MaterialSymbolsFilterListRounded } from "../components/Icons";
import Map from "../components/Map";

export default function Home() {
  return (
    <>
      <Header />
      <section className="absolute top-[70px] left-0 right-0 z-9 m-6 p-4 bg-white rounded-xl shadow-md">
        <h2 className="text-lg font-semibold mb-4">Filtros</h2>
        <form className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <label htmlFor="type" className="block text-sm font-medium mb-1">
              Tipo de Propiedad
            </label>
            <select
              id="type"
              name="type"
              className="w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm"
            >
              <option value="">Todos</option>
              <option value="house">Casa</option>
              <option value="apartment">Departamento</option>
            </select>
          </div>

          <div>
            <label htmlFor="status" className="block text-sm font-medium mb-1">
              Estado
            </label>
            <select
              id="status"
              name="status"
              className="w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm"
            >
              <option value="">Todos</option>
              <option value="sale">En Venta</option>
              <option value="rent">En Alquiler</option>
            </select>
          </div>

          <div>
            <label htmlFor="price" className="block text-sm font-medium mb-1">
              Rango de Precio
            </label>
            <input
              type="text"
              id="price"
              name="price"
              placeholder="Ej.: 50000 - 100000"
              className="w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm"
            />
          </div>
        </form>

        {/* Botones de acción */}
        <div className="flex justify-end mt-4 gap-2">
          <button
            type="button"
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Aplicar
          </button>
        </div>
      </section>
      <Map />
    </>
  );
}
