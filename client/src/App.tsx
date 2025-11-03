import "@arcgis/map-components/components/arcgis-map";
import "@arcgis/map-components/components/arcgis-zoom";

import Graphic from "@arcgis/core/Graphic"
import GeoJSONLayer from "@arcgis/core/layers/GeoJSONLayer"

import type { TargetedEvent } from "@arcgis/map-components";

export default function App() {
    const handleViewReady = async (event: TargetedEvent<HTMLArcgisMapElement>) => {
    const mapElement = event.target;

    const geoJSONLayer = new GeoJSONLayer({ url: "http://localhost:8000/features" });

    const featureSet = await geoJSONLayer.queryFeatures();

    for (const feature of featureSet.features) {
        const pointGraphic = new Graphic({
          geometry: feature.geometry,
          symbol: {
              type: "simple-marker",
              style: "triangle",
              size: 15,
              color: "red",
              outline: {
                color: "white",
                width: 2,
              },
            },
        });

        mapElement.graphics.add(pointGraphic);
    }
  };

  return (
    <arcgis-map item-id="6ccefd32f95c4808b8a52d1c26c81d4c" onarcgisViewReadyChange={handleViewReady}>
      <arcgis-zoom slot="top-left" />
    </arcgis-map>
  );
}
