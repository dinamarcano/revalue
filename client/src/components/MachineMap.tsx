import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";

import L from "leaflet";

const customIcon = new L.Icon({
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

interface Machine {
  address: string;
  position: [number, number];
}

interface MachineMapProps {
  machines: Machine[];
}

export default function MachineMap({
  machines,
}: MachineMapProps) {
  return (
    <div
      className="
        w-full
        h-[220px]
        md:h-[350px]
        rounded-[20px]
        overflow-hidden
        shadow-md
        mb-10
      "
    >

      <MapContainer
        center={[40.7128, -74.006]}
        zoom={12}
        scrollWheelZoom={false}
        className="w-full h-full"
      >

        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {machines.map((machine, index) => (
          <Marker
            key={index}
            position={machine.position}
            icon={customIcon}
          >

            <Popup>
              📍 {machine.address}
            </Popup>

          </Marker>
        ))}

      </MapContainer>

    </div>
  );
}