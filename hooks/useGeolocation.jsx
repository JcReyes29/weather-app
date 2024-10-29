import React, { useState } from 'react'

export default function useGeolocation() {
    const [geolocation, setGeolocation] = useState({ lat: 44.34, long: 10.99 })
    function success(position) {
        setGeolocation({ lat: position.coords.latitude, long: position.coords.longitude });
    }

    function error() {
        alert("Sorry, no position available.");
    }

    const options = {
        enableHighAccuracy: true,
        maximumAge: 30000,
        timeout: 27000,
    };

    function getGeo() {
        navigator.geolocation.watchPosition(success, error, options);
    }
    return {
        geolocation,
        getGeo
    }
}


