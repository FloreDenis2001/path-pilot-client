import React, { useState } from "react";
import {
  DirectionsService,
  DirectionsRenderer,
  GoogleMap,
  LoadScript,
} from "@react-google-maps/api";

const MapTest = () => {
  const [origin, setOrigin] = useState<string>("");
  const [destinations, setDestinations] = useState<string[]>([]);
  const [directions, setDirections] = useState<google.maps.DirectionsResult | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!origin || destinations.length === 0) {
      console.error("Origin and at least one destination are required");
      return;
    }

    const waypoints = destinations.map((dest) => ({
      location: dest,
      stopover: true,
    }));

    try {
      const directionsService = new google.maps.DirectionsService();
      directionsService.route(
        {
          origin: origin,
          destination: origin,
          waypoints: waypoints,
          optimizeWaypoints: true,
          travelMode: google.maps.TravelMode.DRIVING,
        },
        (result, status) => {
          if (status === google.maps.DirectionsStatus.OK) {
            setDirections(result);
            console.log("Directions fetched:", result);
          } else {
            console.error("Directions failed: " + status);
          }
        }
      );
    } catch (error) {
      console.error("Error fetching directions:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Origin:
          <input
            type="text"
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
          />
        </label>
        <label>
          Destinations (comma-separated):
          <input
            type="text"
            value={destinations.join(",")}
            onChange={(e) => setDestinations(e.target.value.split(","))}
          />

          
        </label>
        <button type="submit">Get Optimized Route</button>
      </form>

      <div style={{ height: "500px", width: "100%", position: "relative" }}>
        <LoadScript googleMapsApiKey="AIzaSyAbyUrZndq4ZPLjIvBO_HeFy4r3heapRg0">
          <GoogleMap
            mapContainerStyle={{ height: "100%", width: "100%" }}
            center={{ lat: 0, lng: 0 }}
            zoom={2}
          >
            {directions && <DirectionsRenderer directions={directions} />}
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
};

export default MapTest;
