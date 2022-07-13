const Polyline = () => {
  const map = new window.google.maps.Map(document.getElementById("map"), {
    zoom: 3,
    center: { lat: 0, lng: -180 },
    mapTypeId: "terrain",
  });

  const flightPlanCoordinates = [
    { lat: 80.772, lng: -80.214 },
    { lat: 40.291, lng: -160.821 },
    { lat: -80.142, lng: 300.431 },
    { lat: -27.467, lng: 153.027 },
  ];
  const flightPath = new window.google.maps.Polyline({
    path: flightPlanCoordinates,
    geodesic: true,
    strokeColor: "#FF0000",
    strokeOpacity: 1.0,
    strokeWeight: 2,
  });

  flightPath.setMap(map);
};

export default Polyline