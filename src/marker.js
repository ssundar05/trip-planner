const mapbox = require("mapbox-gl");

const iconURLs = {
    hotel: "http://i.imgur.com/D9574Cu.png",
    restaurant: "http://i.imgur.com/cqR6pUI.png",
    activity: "http://i.imgur.com/WbMOfMl.png"
};

const buildMarker = (type, coords) => {
    var el = document.createElement('img')
    let icon = iconURLs.type
    el.src = icon
    return new mapbox.Marker(el)
   .setLngLat(coords)
};
module.exports = buildMarker