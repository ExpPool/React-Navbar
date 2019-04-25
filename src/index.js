import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Product from './Product';
import * as serviceWorker from './serviceWorker';

// const element = <h1>Hello world on Variable</h1>;
/*
function getMahasiswa(mahasiswa){
    return 'Nama : ' + mahasiswa.nama + ' NIM : ' + mahasiswa.nim;
}

function getStatus(mahasiswa){
    if(mahasiswa.angkatan < 2019){
        return 'mahasiswa baru';
    }else{
        return 'bukan mahasiswa baru';
    }
}

const mahasiswi = {
    nama : 'Lorem Ipsum',
    nim : '123456',
    angkatan : 2018
}

const element = <h1>Halo, {getMahasiswa(mahasiswi)} , anda adalah {getStatus(mahasiswi)}</h1>


function tick(){
    const element = (
        <div>
            <h1>Hello Lorem Ipsum</h1>
            <h2>It is {new Date().toLocaleTimeString()}</h2>
        </div>
    );

    ReactDOM.render(element, document.getElementById('root'));
};

setInterval(tick,1000);


*/
/**
 * Components & Props
 */
/*
function Product(props){
    return (<div><h1>{props.judul}</h1><h3>Harga : {props.harga}</h3></div>);
}

const element = <Product judul="Koleksi Avengers" harga="100.000"/>

ReactDOM.render(element,document.getElementById('root'));
// =====================================
*/
/*
class Product extends React.Component{
    render(){
        return (<div><h1>{this.props.judul}</h1><h3>Harga : {this.props.harga}</h3></div>);
    }
}

const element = <Product judul="Koleksi Avengers menggunakan Class Component" harga="100.000 menggunakan Class Component"/>

ReactDOM.render(element,document.getElementById('root'));
*/

// const element = <Product judul="Koleksi Avengers menggunakan Class Component dlm file sendiri" harga="100.000"/>
//
// const element = <GoogleMap
//     defaultZoom={8}
//     defaultCenter={{lat: -34.397, lng: 150.644}}
// >
// </GoogleMap>;


import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
} from "react-google-maps";

const MapWithAMarker = withScriptjs(withGoogleMap(props =>
    <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: -34.397, lng: 150.644 }}
    >
        <Marker
            position={{ lat: -34.397, lng: 150.644 }}
        />
    </GoogleMap>
));

var element = <MapWithAMarker
    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCCIWY8PfPidEitFLloWMSv20DPx-4Ayow&v=3.exp&libraries=geometry,drawing,places"
    loadingElement={<div style={{ height: `100%` }} />}
    containerElement={<div style={{ height: `400px` }} />}
    mapElement={<div style={{ height: `100%` }} />}
/>

ReactDOM.render(element,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
