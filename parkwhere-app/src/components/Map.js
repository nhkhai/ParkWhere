import React from "react";
import GoogleMapReact from "google-map-react";
import LocationHover from "./LocationHover";
import { useParams, Link } from "react-router-dom";
import proj4 from "proj4";

function Map() {
  const { id } = useParams();
  // Define SVY21 projection (EPSG:3414)
  // Make sure to verify and use the correct proj4 string for SVY21
  let svy21Proj =
    "+proj=tmerc +lat_0=1.366666666666667 +lon_0=103.8333333333333 +k=1 +x_0=28001.642 +y_0=38744.572 +ellps=WGS84 +units=m +no_defs";

  // WGS84 projection string (included in proj4js by default)
  let wgs84Proj = "EPSG:4326";

  // Your SVY21 coordinates
  let x_svy21 = +id.split(",")[0];
  let y_svy21 = +id.split(",")[1];

  // Convert from SVY21 to WGS84
  let [longitude, latitude] = proj4(svy21Proj, wgs84Proj, [x_svy21, y_svy21]);
  console.log(`Longitude: ${longitude}, Latitude: ${latitude}`);

  const mapData = {
    center: {
      lat: latitude,
      lng: longitude,
    },
    zoom: 19,
    greatPlaceCoords: { latitude, longitude },
  };

  return (
    <>
      {/* {console.log("id is: ", +id.split(",")[0], typeof +id.split(",")[0])} */}
      <div style={{ height: "100vh", width: "100%" }}>
        <Link to="/search">
          <button>Back</button>
        </Link>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GMAP_API_KEY }}
          defaultCenter={mapData.center}
          defaultZoom={mapData.zoom}
        >
          <LocationHover
            lat={mapData.center.lat}
            lng={mapData.center.lng}
            text={"📍    Carpark location"}
          />
        </GoogleMapReact>
      </div>
    </>
  );
}

export default Map;
