import React, { useContext, useState } from "react";
import BscHeading2 from "./BscHeading2";
import BscDataList from "./BscDataList";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { ThemeContext } from "../Context/theme";
import Blocks from './Blocks';
import Transactions from './Transactions'

export default function BscMain2() {
  const [{theme,isDark},toggleTheme] = useContext(ThemeContext)
  const [selected, setSelected] = useState("transfers");
  return (
    <Container fluid style={{backgroundColor:theme.backgroundColor}} className='d-flex justify-content-center'>
        <Row className="col-lg-12">
          <Blocks/>
          <Transactions/>        
        </Row>
    </Container>
  );
}
