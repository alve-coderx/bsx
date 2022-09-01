import React, { useContext, useState } from "react";
import { Col, Container, Row, Toast } from "react-bootstrap";
import { config } from "@fortawesome/fontawesome-svg-core";
import HoverToolTip from "./HoverToolTip";
import { ThemeContext } from "../Context/theme";

console.log(config.autoA11y); // true

export default function BscMain() {
  const [{theme}] = useContext(ThemeContext);
  const [showCirculatingCap, setShowCirculatingCap] = useState(false);

  const handleToggleCirculatingCap = () =>
    setShowCirculatingCap(!showCirculatingCap);

  return (
    <Container fluid style={{backgroundColor : theme.backgroundColor}}>
      <Row className="flex justify-content-center">
        <Col className="col-lg-4 col-md-12 mt-5" >
          <Toast style={{width:"460px",backgroundColor : theme.backgroundColor}}>
            <Toast.Body>
              <img src="https://bscscan.com/images/svg/brands/bnb-1.svg?v=1.3" className="rounded" style={{width : '20px'}} alt="" />
              <strong className="me-auto">
                BNB PRICE 
              </strong> <br/>
              <strong className="me-auto">
                $276.57 @ 0.013839 BTC (-3.98%)
              </strong>
            </Toast.Body>
            <hr/>
            <Toast.Body>
              <img src="https://bscscan.com/images/svg/icons/icon-8.svg" className="rounded" style={{width : '20px'}} alt="" />
              <strong>
                BNB MARKET CAP ON BSC
              </strong><br/>
              <strong>
                $6,227,162,973.00 (22,515,685 BNB)
              </strong>
            </Toast.Body>
          </Toast>
        </Col>
        <Col className="col-lg-4 col-md-12 mt-5" >
          <Toast style={{width:"460px",backgroundColor : theme.backgroundColor}}>
            <Toast.Body>
              <img src="https://bscscan.com/images/svg/brands/bnb-1.svg?v=1.3" className="rounded" style={{width : '20px'}} alt="" />
              <strong className="me-auto">
                BNB PRICE 
              </strong> <br/>
              <strong className="me-auto">
                $276.57 @ 0.013839 BTC (-3.98%)
              </strong>
            </Toast.Body>
            <hr/>
            <Toast.Body>
              <img src="https://bscscan.com/images/svg/icons/icon-8.svg" className="rounded" style={{width : '20px'}} alt="" />
              <strong>
                BNB MARKET CAP ON BSC
              </strong><br/>
              <strong>
                $6,227,162,973.00 (22,515,685 BNB)
              </strong>
            </Toast.Body>
          </Toast>
        </Col>
        <Col className="col-lg-4 col-md-12 mt-5" >
          <Toast style={{width:"460px",backgroundColor : theme.backgroundColor}}>
            <Toast.Body>
              <img src="https://bscscan.com/images/svg/brands/bnb-1.svg?v=1.3" className="rounded" style={{width : '20px'}} alt="" />
              <strong className="me-auto">
                BNB PRICE 
              </strong> <br/>
              <strong className="me-auto">
                $276.57 @ 0.013839 BTC (-3.98%)
              </strong>
            </Toast.Body>
            <hr/>
            <Toast.Body>
              <img src="https://bscscan.com/images/svg/icons/icon-8.svg" className="rounded" style={{width : '20px'}} alt="" />
              <strong>
                BNB MARKET CAP ON BSC
              </strong><br/>
              <strong>
                $6,227,162,973.00 (22,515,685 BNB)
              </strong>
            </Toast.Body>
          </Toast>
        </Col>
      </Row>
    </Container>
  );
}
