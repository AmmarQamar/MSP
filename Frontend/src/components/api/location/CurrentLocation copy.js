import { useEffect, useState } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import '../../../assests/css/map.css'
import { Box, Button } from "@mui/material";

function Currentlocation() {
    const [currentLocation, setCurrentLocation] = useState(null);
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    });

    useEffect(() => {

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setCurrentLocation({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    });
                },
                (error) => {
                    console.log("Error getting current location:", error);
                }
            );
        } else {
            console.log("Geolocation is not supported by this browser.");
        }
    }, []);

    if (loadError) return <div>Error loading maps</div>;
    if (!isLoaded) return <div>Loading...</div>;

    return (
        <Box>
            <GoogleMap
                zoom={10}
                center={currentLocation}
                mapContainerStyle={{ margin: "auto", height: "80vh", width: "100vw" }}
            >
                {currentLocation && <Marker position={currentLocation} />}
            </GoogleMap>
            <Box sx={{ margin: "auto", width: "40vw", marginTop: 4 }}>
                <Button variant="contained" sx={{ width: "40vw" }}>Save</Button>
            </Box>
        </Box>
    );
}
export default Currentlocation