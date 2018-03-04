// No third party module required: https is part of the Node.js API
const https = require("https");
const url =
  "https://maps.googleapis.com/maps/api/geocode/json?address=Florence";

https.get(url, res => {
    res.setEncoding('utf-8');
    let body = '';
    res.on("data", chunks => {
        body += chunks;
    });;
    res.on("end", () => {
        body = JSON.parse(body);
        console.log(
            `City: ${body.results[0].formatted_address} -`,
            `Latitude: ${body.results[0].geometry.location.lat} -`,
            `Longitude: ${body.results[0].geometry.location.lng}`
        );
    });
});