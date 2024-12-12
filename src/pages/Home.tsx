import FilterWrapper from "../components/Filters/FilterWrapper";
import Header from "../components/Header";
import MapWrapper from "../components/MapWrapper/MapWrapper";
import PropertiesList from "../components/PropertiesList";

export default function Home() {
  return (
    <div className="relative h-dvh w-dvw">
      <MapWrapper />
      <div id="floating-elements" className="floating-elements">
        <Header />
        <aside className="flex-1 h-full w-full flex flex-col gap-6 overflow-hidden !pointer-events-none">
          <FilterWrapper />
          <PropertiesList />
        </aside>
      </div>
    </div>
  );
}
