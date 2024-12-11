import Header from "../components/Header";
import MapWrapper from "../components/MapWrapper/MapWrapper";
import PropertiesList from "../components/PropertiesList";

export default function Home() {
  return (
    <div className="relative h-dvh w-dvw">
      <MapWrapper />
      <div id="floating-elements" className="floating-elements">
        <Header />
        <PropertiesList />
      </div>
    </div>
  );
}
