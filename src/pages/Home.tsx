import Header from "../components/Header";
import Map from "../components/Map";
import PropertiesList from "../components/PropertiesList";

export default function Home() {
  return (
    <div className="relative h-dvh w-dvw">
      <Map />
      <div id="floating-elements" className="floating-elements">
        <Header />
        <PropertiesList />
      </div>
    </div>
  );
}
