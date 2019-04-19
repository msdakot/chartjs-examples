/* =====================
Leaflet Configuration
===================== */

var map = L.map('map', {
  center: [39.95, -75.16],
  zoom: 4
});

// Try some differnet basemaps:
basemapURL = "http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png";
// basemapURL = "http://tile.stamen.com/watercolor/{z}/{x}/{y}.jpg"
// basemapURL = "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"


var Stamen_TonerLite = L.tileLayer(basemapURL, {
// if you change the basemap, and publish it on the web, you should attribute accurately
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
}).addTo(map);

/**
 * So far, we've looked at tools for data manipulation, styling websites, and
 *  plotting data spatially. One difficulty with GIS applications is that they
 *  are rarely *just* about geography and they often are intended to display
 *  complicated relationships.
 * Lucky for us, many graphing and dataviz libraries in JS are easy to use and
 *  enable all the major styling options you might be familiar with from resources
 *  like Matplotlib or ggplot (actually, I think the plots from Chartjs (https://www.chartjs.org/)
 *  tend to look better "out of the box" and without a lot of tuning.
 *
 */


var context = $("#mychart")
var data = {
};

var myRadarChart = new Chart(context, {
  /** Put chart definitions here */
});
