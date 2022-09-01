import React from "react";
import token from "../Assests/token.png";
import {
  Container,
  Row,
  Col,
  Button,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import HoverToolTip from "./HoverToolTip";
import BsxSearch from './BsxSearchBar'

export default function BscHeading() {
  return (
    <div className="container2" style={{height:'25vh',backgroundColor:'black'}}>
      <Row className="align-items-center">
          <Col className="col-lg-7">
            <h2 className="text-warning">
              BNB Smart Chain Explorer
            </h2>
            <BsxSearch/>
            <p>Sponsored: <img style={{width:"20px"}} src="https://bscscan.com/images/gen/binance_20.png"/>  Binance - Join the world's largest crypto exchange. <span className="text-primary">Sign Up Now</span>.</p>
          </Col>
      </Row>
    </div>
  );
}
