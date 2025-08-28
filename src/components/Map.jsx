import { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  useMapEvents,
  Popup,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Atur ikon default (supaya marker tampil normal)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
});

const centerPosition = [-6.2, 106.816666]; // Jakarta

function LocationMarker({ onSelect }) {
  useMapEvents({
    click(e) {
      onSelect(e.latlng);
    },
  });

  return null;
}

const Map = () => {
  const [position, setPosition] = useState(null);
  const [placeName, setPlaceName] = useState("");

  const handleMapClick = async (latlng) => {
    setPosition(latlng);
    setPlaceName("Mencari lokasi...");

    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${latlng.lat}&lon=${latlng.lng}&format=json`
      );
      const data = await res.json();
      const name = data.display_name || "Lokasi tidak ditemukan";
      setPlaceName(name);
      console.log("Lokasi:", name);
    } catch (err) {
      console.error("Gagal fetch lokasi:", err);
      setPlaceName("Gagal mendapatkan lokasi");
    }
  };

  return (
    <MapContainer
      center={centerPosition}
      zoom={13}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <LocationMarker onSelect={handleMapClick} />

      {position && (
        <Marker position={position}>
          <Popup>{placeName}</Popup>
        </Marker>
      )}
    </MapContainer>
  );
};

export default Map;
