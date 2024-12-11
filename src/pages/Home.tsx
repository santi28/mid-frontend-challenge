import Header from "../components/Header";
import Map from "../components/Map";

export default function Home() {
  return (
    <div className="relative h-dvh w-dvw">
      <Map />
      <div id="floating-elements" className="floating-elements">
        <Header />
      </div>
    </div>
  );
}
