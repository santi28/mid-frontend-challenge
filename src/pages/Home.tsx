import Header from "../components/Header";
import Map from "../components/Map";

export default function Home() {
  return (
    <div className="relative h-dvh w-dvw">
      <Map />
      <div id="floating-elements" className="floating-elements">
        <Header />
        <div className="flex flex-col gap-4 flex-1 justify-between md:flex-row !pointer-events-none">
          <aside className="bg-white/90 flex flex-col gap-1.5 p-4 rounded-xl shadow-md md:w-1/3 md:max-w-[300px]">
            <h2 className="text-xl font-semibold">Filtros</h2>
            <p className="text-sm">
              Filtrar por tipo de propiedad, estado, rango de precio y
              ubicación.
              <br />
              ¿Quieres ver más propiedades? ¡Haz clic en el mapa!
            </p>
          </aside>
          <section className="p-4 bg-white/60 backdrop-blur-md rounded-xl shadow-md transition-all duration-300 ease-in-out flex-1 xl:max-w-xl"></section>
        </div>
        <div className="bg-white/90 flex p-4 rounded-xl shadow-md">
          <span className="text-sm">Esta noticia fue publicada en Infobae</span>
        </div>
      </div>
    </div>
  );
}
