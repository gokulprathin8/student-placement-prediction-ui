import logo from './logo.svg';
import './App.css';
import HeaderFooter from "./Components/Common";
import Slider from "react-slick";
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from "react-bootstrap/cjs/Row";
import Col from "react-bootstrap/cjs/Col";


function App() {
    var settings = {
        dots : true
    }

  return (
      <HeaderFooter>
          <div style={{ padding: "40px", background: "lightgray", margin: "auto" }}>
              <Slider {...settings}>
                  <div>
                      <img src="https://webmaileventscms.gitam.edu/assets/uploads/eventsforwebsites/2aa500954d1ed256c39ff72c6d34439e_eventsforwebsites.jpg"  width="100%" height="250px"/>
                  </div>
                  <div>
                      <img src="https://www.gitam.edu/campus_cms/assets/uploads/slider/1602241365_slider.jpg" width="100%" height="250px"/>
                  </div>
                  <div>
                      <img src="https://www.gitam.edu/campus_cms/assets/uploads/slider/1605935704_slider.jpg" width="100%" height="250px"/>
                  </div>
                  <div>
                      <img src="https://www.gitam.edu/campus_cms/assets/uploads/slider/1581662296_slider.jpg" width="100%" height="250px"/>
                  </div>
              </Slider>
          </div>

          <Row>
              <Col>
                  <div style={{ border: "1px solid black" }}>
                    <p>wrkgjb</p>
                  </div>
              </Col>
              <Col>
                  <div style={{ border: "1px solid black" }}>
                      <p>wrkgjb</p>
                  </div>
              </Col>
              <Col>
                  <div style={{ border: "1px solid black" }}>
                      <p>wrkgjb</p>
                  </div>
              </Col>
          </Row>
      </HeaderFooter>
  );
}

export default App;
