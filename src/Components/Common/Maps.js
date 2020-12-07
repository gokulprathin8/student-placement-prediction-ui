import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
const AnyReactComponent = ({ text }) => <div>{text}</div>



class Maps extends Component {
    static defaultProps = {
      center: {
        lat: 17.5509766,
        lng: 78.1640287
      },
      zoom: 18
    };
   
    render() {
      return (
        // Important! Always set the container height explicitly
        <div style={{ height: '100vh', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyD8BzzsjCU_Unr98c6h0-KrXzmxMiaubd4" }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            <AnyReactComponent
              lat={59.955413}
              lng={30.337844}
              text="My Marker"
            />
          </GoogleMapReact>
        </div>
      );
    }
  }
export default Maps;