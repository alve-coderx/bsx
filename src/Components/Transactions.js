import React, { useContext } from 'react'
import { Button, Col, Table } from 'react-bootstrap'
import { ThemeContext } from '../Context/theme'
const Transactions = () => {
  const [{theme}] = useContext(ThemeContext);

  return (
    <Col className='col-lg-6 col-md-12 col-sm-12 p-5 shadow '>
      <div>
        <strong>Latest Transactions</strong>
        <hr/>
      </div>
      <div style={{overflowY:'scroll'}}>
        {[1,2,3,4,5,6].map((ind)=>(
          <div>
            <div className='d-flex justify-content-between'>
              <div className='d-flex'>
                <img src="https://bscscan.com/images/svg/brands/bnb-1.svg?v=1.3" className="rounded" style={{width : '20px'}} alt="" />
                <p>20949591
                  <br/>13 secs ago</p>
              </div>
              <div className='d-flex'>
                <img src="https://bscscan.com/images/svg/brands/bnb-1.svg?v=1.3" className="rounded" style={{width : '20px'}} alt="" />
                <p>20949591
                  <br/>13 secs ago</p>
              </div>
              <div className='d-flex'>
                <img src="https://bscscan.com/images/svg/brands/bnb-1.svg?v=1.3" className="rounded" style={{width : '20px'}} alt="" />
                <p>20949591
                  <br/>13 secs ago</p>
              </div>
            </div>
            <hr/>
          </div>
        ))}
      </div>
      <Button className='w-100 btn btn-outline-info'>View All Transactions</Button>

    </Col>
  )
}

export default Transactions