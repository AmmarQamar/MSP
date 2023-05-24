import { useEffect, useState } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import '../../../assests/css/map.css'
import { Box, Button } from "@mui/material";

function Currentlocation({ location, setLocation }) {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: "AIzaSyDt2aRdrd_41en1KKW2Gnxmk7cWGsgPnlk",
        // googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,


    });

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLocation({
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
    // }, [setLocation]);

    const handleMapClick = (event) => {
        const lat = event.latLng.lat();
        const lng = event.latLng.lng();
        setLocation({ lat, lng });
    };

    const handleMarkerDragEnd = (event) => {
        const lat = event.latLng.lat();
        const lng = event.latLng.lng();
        setLocation({ lat, lng });
    };

    const [marker, setMarker] = useState(null);

    useEffect(() => {
        if (isLoaded && location) {
            setMarker(<Marker
                position={location}
                draggable={true}
                onDragEnd={handleMarkerDragEnd}
            />);
        }
    }, [isLoaded, location, setMarker]);

    if (loadError) return <div>Error loading maps</div>;
    if (!isLoaded) return <div>Loading...</div>;

    return (
        <Box>
            <GoogleMap
                zoom={15}
                center={location}
                mapContainerStyle={{ height: "400px", width: "30vw" }}
                onClick={handleMapClick}
            >
                {marker}
            </GoogleMap>
        </Box>
    );
}
export default Currentlocation