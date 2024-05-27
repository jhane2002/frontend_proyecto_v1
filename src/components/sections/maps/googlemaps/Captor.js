import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import googleMapStyles from "./MapStyles";

class Captor extends Component {
    render() {
        return (
            <div className="ms-panel">
                <div className="ms-panel-header">
                    <h6>Captor Theme Map</h6>
                </div>
                <div className="ms-panel-body">
                    <div className="map-container">
                        <div className="google-map">
                            <Map
                                google={this.props.google}
                                zoom={12}
                                style={this.props.captorStyle}
                                initialCenter={{ lat: 31.53912, lng: -89.29163 }}
                            >
                            </Map>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}
Captor.defaultProps = googleMapStyles;
export default GoogleApiWrapper({
    apiKey: "AIzaSyDnd9JwZvXty-1gHZihMoFhJtCXmHfeRQg",
})(Captor);