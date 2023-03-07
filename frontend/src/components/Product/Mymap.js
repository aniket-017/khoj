import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProduct } from "../../actions/productAction";
import "./Mymap.css";
import { Link } from 'react-router-dom'
import Product from "../Product";
import MetaData from "../layout/MetaData";


import "mapbox-gl/dist/mapbox-gl.css";
import Map, {
  Marker,
  NavigationControl,
  Popup,
  FullscreenControl,
  GeolocateControl,
} from "react-map-gl";
import {Room , Star, StarBorder}from '@material-ui/icons';
import axios from "axios";
// import Product from "../Product"

const Mymap = ({product}) => {
  const [myVariable, setMyVariable] = useState('');
  const [pins, setPins] = useState([]);
  const [currentPlaceId, setCurrentPlaceId] = useState(null);
  
  const [lng, setLng] = useState(75.23);
  const [lat, setLat] = useState(19.53);

  useEffect(() => {
    axios.get('/api/v1/my-variable')
      .then(response => setMyVariable(response.data.value))
      .catch(error => console.error(error));
  }, []);

  const [viewport, setViewport] = useState({
    latitude: 18.9881,
    longitude: 73.9635,
    zoom: 12,
  });



  const handleMarkerClick = (id) => {
    setCurrentPlaceId(id);

  };
  
  useEffect(() => {
    const getPins = async () => {
      try {
        const res = await axios.get("/api/v1/each/products");
        setPins(res.data.products);
        // console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getPins();
  }, []);




    



  return (
  
    <div className='mp'>
    <MetaData title="खोजो MAP" />
      <Map
      mapboxAccessToken="pk.eyJ1IjoiYW5pa2V0MTciLCJhIjoiY2xlZ3FwOW02MGJ0NTN4bWNhMXBqY25lcCJ9.qjfXDd_p2yjXQz3wa2w2UQ"
      // mapboxAccessToken = {myVariable}

      style={{
          width: "100%",
          height: "80vh",
          borderRadius: "15px",
          border: "2px solid red",
         
        }}
        
      initialViewState={{...viewport
          // longitude: lng,
          // latitude: lat,
          // zoom: 14
      }}
      onViewportChange={(nextviewport) => setViewport(nextviewport)}
        mapStyle="mapbox://styles/mapbox/satellite-streets-v12"
        
        
        >
        {pins.map(p => (
        <div key={p._id}>
        <Marker
              latitude={p.lat}
              longitude={p.long}
              offsetLeft={-3.5 * viewport.zoom}
              offsetTop={-7 * viewport.zoom}
            ><Room style={{fontSize:viewport.zoom*4, color:"slateblue"}}
            onClick={() => handleMarkerClick(p._id)}
            />
          </Marker>
             {p._id === currentPlaceId && (
              <Popup
                latitude={p.lat}
                longitude={p.long}
                anchor="left"
                closeButton={true}
                closeOnClick={false}
               
                
              > 
              <Product  product={p}  /></Popup>)}
             
        </div>
      ))}
           {/* <Marker
              latitude={lat}
              longitude={lng}
              // offsetLeft={-3.5 * viewport.zoom}
              // offsetTop={-7 * viewport.zoom}
            ><Room style={{fontSize:viewport.zoom*7, color:"slateblue"}}/>
              <Popup
          
                latitude={lat}
                longitude={lng}
                
                anchor="left"
              > 
              nice</Popup>
              </Marker> */}
              <NavigationControl position="bottom-right" />
        <FullscreenControl />
        <GeolocateControl />
        </Map>
    </div>
  )
}

export default Mymap;