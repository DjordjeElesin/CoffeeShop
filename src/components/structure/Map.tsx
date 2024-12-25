import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LatLngExpression } from "leaflet";

//map component needs to be wrapped with a container and the container needs to have a height and width

type MapProps = {
  position: LatLngExpression;
  popupText: string,
  zoom?: number
};

const Map = ({ position, popupText, zoom=13}: MapProps) => {
  return (
      <MapContainer
        center={position}
        zoom={zoom}
        scrollWheelZoom={false}
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            {popupText}
          </Popup>
        </Marker>
      </MapContainer>
  );
};

export default Map;
