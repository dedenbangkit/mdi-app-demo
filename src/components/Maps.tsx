import React, { useEffect, useState } from "react";
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import "./Maps.css";

const geoUrl = "/json/mali-topo.json";

interface MapChartProjects {
  projects: any;
  setShowModal: any;
}

const MapChart: React.FC<MapChartProjects> = ({ projects, setShowModal }) => {
  const [markers, setMarkers] = useState<any[]>([]);
  useEffect(() => {
    if (markers.length === 0) {
      fetch("/json/example-points.json")
        .then((res) => res.json())
        .then((data) => setMarkers(data));
    }
  }, [markers]);
  return (
    <ComposableMap
      projectionConfig={{ scale: 800, projection: "geoEqualEarth" }}
      style={{
        height: "800",
      }}
    >
      <ZoomableGroup zoom={2.45} center={[1.54309, 17.5055]}>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo, i) => (
              <Geography
                key={i}
                geography={geo}
                style={{
                  default: {
                    fill: "#EAEAEC",
                    stroke: "#666",
                    strokeWidth: 0.1,
                    outline: "none",
                  },
                  hover: {
                    fill: "#EAEAEC",
                    stroke: "#666",
                    strokeWidth: 0.1,
                    outline: "none",
                  },
                }}
              />
            ))
          }
        </Geographies>
        {markers.map(({ id, coordinates }) =>
          projects[id] ? (
            <Marker
              key={id}
              coordinates={coordinates}
              onClick={(e) => setShowModal(projects[id].id)}
            >
              <circle
                r={2}
                stroke="#fff"
                strokeWidth={0.3}
                className="points"
              />
              <text
                y="-4"
                x="-4"
                fontSize={4}
                textAnchor="center"
                className="points"
              >
                {Math.floor(projects[id].funds / 1000)}
              </text>
            </Marker>
          ) : (
            ""
          )
        )}
      </ZoomableGroup>
    </ComposableMap>
  );
};

export default MapChart;
