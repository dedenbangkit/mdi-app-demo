import React, { useState } from "react";
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { scaleQuantile } from "d3-scale";
import "./Maps.css";

const geoUrl = "/json/mali-topo.json";

interface MapChartProjects {
  projects: any;
  setShowModal: any;
  markers: any;
}

const MapChart: React.FC<MapChartProjects> = ({
  projects,
  setShowModal,
  markers,
}) => {
  const [province, setProvince] = useState(null);
  const colorScale = scaleQuantile()
    .domain(projects.map((d) => d.funds))
    .range(["#ffedea", "#ffcec5", "#ffad9f"]);

  const colorScaleHover = scaleQuantile()
    .domain(projects.map((d) => d.funds))
    .range(["#ffcec5", "#ffad9f", "#ff8a75"]);

  const mk = markers
    .map((x, i) => {
      if (projects[i]) {
        return { ...projects[i], ...x, id: projects[i].id };
      }
      return false;
    })
    .filter((x) => x);
  console.log(province);
  return (
    <ComposableMap
      projectionConfig={{ scale: 800, projection: "geoEqualEarth" }}
      style={{
        height: "98%",
        width: "100%",
      }}
    >
      <ZoomableGroup zoom={4} center={[-4, 17.5]}>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo, i) => {
              const cs = mk.filter(
                (x) => x.GID_2 === geo.properties.GID_2 && x.funds
              );
              const cur = cs.reduce((x, i) => x + i.funds, 0);
              return (
                <Geography
                  key={i}
                  onClick={(e) =>
                    setProvince(
                      cur === 0 || province ? null : geo.properties.GID_2
                    )
                  }
                  geography={geo}
                  style={{
                    default: {
                      fill: cur !== 0 ? colorScale(cur) : "#EAEAEC",
                      stroke: "#666",
                      strokeWidth: 0.1,
                      outline: "none",
                    },
                    hover: {
                      fill: cur !== 0 ? colorScaleHover(cur) : "#EAEAEC",
                      stroke: "#666",
                      strokeWidth: 0.1,
                      outline: "none",
                    },
                  }}
                />
              );
            })
          }
        </Geographies>
        {mk
          .filter((x) => (province === null ? x : x.GID_2 === province))
          .map((props) => (
            <Marker
              key={props.id}
              coordinates={props.coordinates}
              onClick={(e) => setShowModal(props.id)}
            >
              <circle
                r={1.8}
                stroke="#fff"
                strokeWidth={0.3}
                className="points"
              />
              <text
                y="-4"
                x="-8"
                fontSize={4}
                textAnchor="center"
                className="points"
              >
                PDC {Math.floor(props.funds / 1000)}
              </text>
            </Marker>
          ))}
      </ZoomableGroup>
    </ComposableMap>
  );
};

export default MapChart;
