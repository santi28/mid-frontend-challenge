import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { usePropertiesContext } from "../contexts/PropertiesContext";

export default function Map() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const { properties } = usePropertiesContext();

  useEffect(() => {
    console.log("Loading map");
    mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;

    if (mapContainer.current) {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/outdoors-v12",
        center: [-66.664513, 18.200178],
        zoom: 9,
        maxZoom: 19,
      });

      console.log("Map loaded");

      // Clean up on unmount
      return () => {
        console.log("Unmounting map");
        map.current?.remove();
      };
    }
  }, []);

  useEffect(() => {
    if (!map.current) return;

    const mapInstance = map.current;

    // Asegurarse de que el estilo del mapa esté cargado
    if (!mapInstance.isStyleLoaded()) {
      mapInstance.once("styledata", () => {
        addOrUpdateSourceAndLayers(mapInstance, properties);
      });
    } else {
      addOrUpdateSourceAndLayers(mapInstance, properties);
    }
  }, [properties]);

  function addOrUpdateSourceAndLayers(
    mapInstance: mapboxgl.Map,
    properties: any[]
  ) {
    const sourceId = "properties";

    if (mapInstance.getSource(sourceId)) {
      // Actualizar la fuente si ya existe
      const source = mapInstance.getSource(sourceId) as mapboxgl.GeoJSONSource;
      source.setData({
        type: "FeatureCollection",
        features: properties.map((property) => ({
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [property.location.lng, property.location.lat],
          },
          properties: {
            id: property.id,
            title: property.title,
            description: property.description,
            price: property.price,
          },
        })),
      });
    } else {
      // Agregar la fuente y las capas si no existen
      mapInstance.addSource(sourceId, {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: properties.map((property) => ({
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [property.location.lng, property.location.lat],
            },
            properties: {
              id: property.id,
              title: property.title,
              description: property.description,
              price: property.price,
            },
          })),
        },
        cluster: true,
        clusterMaxZoom: 14,
        clusterRadius: 50,
      });

      mapInstance.addLayer({
        id: "clusters",
        type: "circle",
        source: sourceId,
        filter: ["has", "point_count"],
        paint: {
          "circle-color": [
            "step",
            ["get", "point_count"],
            "#51bbd6",
            100,
            "#f1f075",
            750,
            "#f28cb1",
          ],
          "circle-radius": [
            "step",
            ["get", "point_count"],
            20,
            100,
            30,
            750,
            40,
          ],
        },
      });

      mapInstance.addLayer({
        id: "cluster-count",
        type: "symbol",
        source: sourceId,
        filter: ["has", "point_count"],
        layout: {
          "text-field": ["get", "point_count_abbreviated"],
          "text-font": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
          "text-size": 12,
        },
      });

      mapInstance.addLayer({
        id: "unclustered-point",
        type: "circle",
        source: sourceId,
        filter: ["!", ["has", "point_count"]],
        paint: {
          "circle-color": "#11b4da",
          "circle-radius": 6,
          "circle-stroke-width": 2,
          "circle-stroke-color": "#fff",
        },
      });
    }
  }

  return (
    <div
      ref={mapContainer}
      style={{
        position: "fixed",
        zIndex: 1,
        top: 0,
        bottom: 0,
        width: "100vw", // Cambié dvw a vw para asegurar compatibilidad
        height: "100vh",
      }}
    />
  );
}
