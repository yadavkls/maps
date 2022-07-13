import * as React from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { Map } from "./Map";
import { Marker } from "./Marker";
import { Row, Col, Container } from "reactstrap";

import Polyline from "./Polyline";
const render = (status) => {
  return <h1>{status}</h1>;
};
export default function TrackingMap() {
  const [clicks, setClicks] = React.useState([
    {
      lat: 17.168052,
      lng: 78.468378,
    },
    {
      lat: 19.254965,
      lng: 73.031716,
    },
  ]);
  const [zoom, setZoom] = React.useState(5); // initial zoom
  const [center, setCenter] = React.useState({
    lat: 21.1458,
    lng: 79.0882,
  });

  const onClick = (e) => {
    // setClicks([...clicks, e.latLng]);
  };

  const onIdle = (m) => {
    setZoom(m.getZoom());
    setCenter(m.getCenter().toJSON());
  };

  return (
    <div className="tracking">
      <Container fluid>
        <Row>
          <Col xs={12} style={{ display: "contents" }}>
            <Wrapper
              apiKey={"AIzaSyCUQ0gKhCkZCjPZtXcO5cpYH_wY8GO-j_A"}
              render={render}
            >
              <Map
                center={center}
                onClick={onClick}
                onIdle={onIdle}
                zoom={zoom}
                style={{ display: "contents" }}
              >
                {/* <Polyline /> */}
                {clicks.map((latLng, i) => (
                  <Marker key={i} position={latLng} />
                ))}
              </Map>
            </Wrapper>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
