import React from 'react';
import { GoogleMap, Marker, LoadScript, useLoadScript } from '@react-google-maps/api';

const mapContainerStyle = {
    width: '200px',
    height: '200px',
};

const center = {
    lat: 0,
    lng: 0,
};

const LocationSelector = (props) => {
    const { location, setLocation } = props
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    });

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
    if (loadError) return <div>Error loading maps</div>;
    if (!isLoaded) return <div>Loading...</div>;

    return (
        // <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
        <GoogleMap
            // mapContainerStyle={mapContainerStyle},
            mapContainerStyle={{ margin: "auto", height: "80vh", width: "100vw" }}
            center={location || center}
            zoom={10}
            onClick={handleMapClick}
        >
            {location && (
                <Marker
                    position={location}
                    draggable={true}
                    onDragEnd={handleMarkerDragEnd}
                />
            )}
        </GoogleMap>
        // </LoadScript>
    );
};

export default LocationSelector;
