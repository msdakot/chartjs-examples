/**
 * In different parts of the country, people tend to use different words to refer
 *  to the same things. A classic example of this is the disparity between people
 *  that refer to soft drinks as "pop" and those who refer to them as "soda".
 * Below, some (completely made up) data is associated with different parts of the
 *  country. The geojson for this association is then plotted.
 *
 * 1. Produce a pie/doughnut chart when one of these features is clicked. Render it
 *  in the canvas element with id "mychart"
 *
 * 2. Stretch goal: there's already a popup bound to each layer. Let's produce a graph
 *  that lives *inside* one of these popup elements. This is actually trickier than it
 *  sounds: you'll have to find a way to dynamically update content within the popup window.
 *  Luckily, that's exactly what is explored in this SO post:
 *  https://gis.stackexchange.com/questions/244499/dynamic-content-in-leaflet-popup-window
 *  and in the corresponding jsfiddle:
 *  https://jsfiddle.net/1k4ujv94/2/
 */
var popvsoda = {"type":"FeatureCollection","features":[{"type":"Feature","properties":{"pop":".9","soda":".1"},"geometry":{"type":"Polygon","coordinates":[[[-102.0849609375,36.77409249464195],[-94.482421875,36.77409249464195],[-94.482421875,39.9434364619742],[-102.0849609375,39.9434364619742],[-102.0849609375,36.77409249464195]]]}},{"type":"Feature","properties":{"pop":".1","soda":".9"},"geometry":{"type":"Polygon","coordinates":[[[-80.4638671875,34.016241889667015],[-74.02587890625,34.016241889667015],[-74.02587890625,42.16340342422401],[-80.4638671875,42.16340342422401],[-80.4638671875,34.016241889667015]]]}},{"type":"Feature","properties":{"pop":".5","soda":".5"},"geometry":{"type":"Polygon","coordinates":[[[-86.72607421875,36.12012758978146],[-80.52978515625,36.12012758978146],[-80.52978515625,42.17968819665961],[-86.72607421875,42.17968819665961],[-86.72607421875,36.12012758978146]]]}}]}

L.geoJson(popvsoda, {
  onEachFeature: (f, l) => { l.bindPopup(`POP: ${f.properties.pop * 100}% | SODA: ${f.properties.soda * 100}%`) }
}).addTo(map)
