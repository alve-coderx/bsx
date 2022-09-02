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
    <Container fluid style={{backgroundColor:theme.mainbg}} className='pb-5 d-flex justify-content-center'>
        <Row className="col-12 d-flex justify-content-around">
        <div className="table-responsive col-lg-6">
          <table className="table">
          <thead>
          <tr style={{border:"none",color:theme.color}}>
            <div className="">Letast Block</div>    
          </tr>
          </thead>
          <tbody style={{borderColor : 'gray'}}>
            {[1,2,3,4,5,6].map((ind)=>(
              <tr style={{color:theme.color}}>
                <td className="d-flex"><button type="button" className="btn" style={{backgroundColor : theme.backgroundColor}}>Bk</button> <p className="ms-1"><span className="text-primary">20957198</span><br/> 11 sec ago</p></td>
                <td><p>Validated By <span className="text-primary">Validator: HashQuark</span> </p>97 txns in 3 secs</td>
                <td>0.07791 BNB</td>
              </tr>
            ))}
            </tbody>
          </table>
          <Button className='w-100 btn btn-outline-info'>View All Blocks</Button>
        
        </div>
        <div className="table-responsive col-lg-6">
          <table className="table">
          <thead>
          <tr style={{color:theme.color}}>
              <div>Letast Transactions</div>
            </tr>
          </thead>
          <tbody style={{borderColor : 'gray'}}>
            {[1,2,3,4,5,6].map((ind)=>(
              <tr style={{color:theme.color}}>
                <td className="d-flex"><button type="button" className="btn rounded-circle" style={{backgroundColor : theme.backgroundColor}}>TX</button> <p className="ms-1"><span className="text-primary">0x87f6a5a6ca28606c6f71f9d1a201a62a..</span><br/> 11 sec ago</p></td>
                <td><span className="fs-6">From <span className="text-primary">0x87f6a5a6ca28606c6f71f9d1a201a62..</span> </span><p>To <span className="text-primary">0x87f6a5a6ca28606c6f71f9d1a201a62..</span> </p> </td>
                <td>0.07791 BNB</td>
              </tr>
            ))}
            </tbody>
          </table>
          <Button className='w-100 btn btn-outline-info'>View All Transactions</Button>
        
        </div>
        
        </Row>
    </Container>
  );
}
