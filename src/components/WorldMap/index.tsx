import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface Location {
  locationName: string;
  latitude: number;
  longitude: number;
}

interface WorldMapProps {
  location: Location;
}

const WorldMap: React.FC<WorldMapProps> = ({ location }) => {
  const locationIcon = L.icon({
    iconUrl: 'path/to/location-icon.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
  });

  const { latitude, longitude } = location;

  return (
    <div className="w-full h-full rounded-lg">
      <MapContainer
        center={[location.latitude, location.longitude]}
        zoom={6}
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={false}
        className="dark-map" // Apply custom CSS class for dark mode
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='Map data &copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors | Font: <a href="https://fonts.google.com/specimen/Open+Sans">Open Sans</a>'
        />

        <Marker position={[latitude, longitude]} icon={locationIcon}>
          <Popup>{location.locationName}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default WorldMap;
