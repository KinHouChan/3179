d3.json("msia-state1.json").then(function(topoData) {
    // Convert TopoJSON to GeoJSON
    let geoData = topojson.feature(topoData, topoData.objects.gadm41_MYS_1);
    
    // Loop through each feature (polygon) to calculate centroids
    geoData.features.forEach(function(feature) {
        // Use d3.geoCentroid to calculate the centroid
        let centroid = d3.geoCentroid(feature);
        console.log("Region:", feature.properties.NAME_1);
        console.log("Centroid Coordinates:", centroid);  // Output as [longitude, latitude]
    });
});
