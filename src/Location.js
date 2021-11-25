import React , {useState , useEffect}from 'react';
import {GoogleMap, LoadScript}  from '@react-google-maps/api';


function Location() {

    const [currentposition, setCurrentposition] = useState({});
    const success = position => {
       const currentposition = {
        lat:
        position.coords.latitude,
        lng:
        position.coords.longitude
    }

    setCurrentposition(currentposition); };

    useEffect(() => {
        
      navigator.geolocation.getCurrentPosition(success);
    }, [])

    const mapStyles = {
        height: "80vh",
        width: "100%"};

//    const defaultCenter = {
//        lat: 41.3851,
//        lng: 2.1734
//    }

    return (
        <div>

        <LoadScript
        googleMapsApiKey='AIzaSyD9IGZHk8y52cQoY67qnKSCgkeV988e1lw' >

            <GoogleMap mapContainerStyle={mapStyles}
             zoom={13}
             center = {currentposition}
            //  {defaultCenter}
             />

        </LoadScript>


        </div>
    )
}

export default Location;
