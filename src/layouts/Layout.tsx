import Header from "@/components/Header";
import MapWrapper from "@/components/MapWrapper/MapWrapper";
import { useUIContext } from "@/contexts/UIContext";
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

export default function Layout() {
  const { hideAllPanes } = useUIContext();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.startsWith("/propiedad")) {
      hideAllPanes();
    }
  }, [location]);

  return (
    <div className="relative h-dvh w-dvw">
      <MapWrapper />
      <div className="floating-wrapper relative w-full h-full flex flex-col p-6 gap-4 pointer-events-none">
        <Header />
        <Outlet />
      </div>
    </div>
  );
}
