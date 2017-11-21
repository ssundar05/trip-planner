const mapboxgl = require('mapbox-gl');
const buildMarker = require("./marker.js")

mapboxgl.accessToken = 'pk.eyJ1Ijoic3N1bmRhcjA1IiwiYSI6ImNqYTl0d29lajBidmcyd3FwYmVmbjB4Y28ifQ.BFxy6cLYOM-82S2xcUAVwQ';

const map = new mapboxgl.Map({
    container: "map",
    center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
    zoom: 12, // starting zoom
    style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});



const marker = buildMarker("activity", [-74.009151, 40.705086]);
marker.addTo(map);

const markerDomEl = document.createElement("div");
markerDomEl.style.width = "32px";
markerDomEl.style.height = "39px";
markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map);