import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

export default function Map() {
  const mapContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log("Map loaded");
    mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;

    if (mapContainer.current) {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/outdoors-v12",
        center: [-66.664513, 18.200178],
        zoom: 9,
        minZoom: 9,
        maxZoom: 19,
      });

      // Add your custom markers and lines here

      // Clean up on unmount
      return () => map.remove();
    }
  }, []);

  return (
    <div
      ref={mapContainer}
      style={{
        position: "absolute",
        zIndex: -10,
        top: 0,
        bottom: 0,
        width: "100%",
        height: "100%",
      }}
    />
  );
}
