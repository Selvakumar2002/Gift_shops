import React from 'react'

import DashBoard from './DashBoard';
import Addproducts from './Addproducts';
import Productslists from './Productslists';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Courtnkm from './Courtnkm';
const WoWpage = () => {
  return (
    <div>
        
          <DashBoard />
        <Courtnkm />
          <Row>
            <Col>
            
          <Addproducts />
            </Col>
            <Col>
            <Productslists />
            
            </Col>
          </Row>
            
    </div>
  )
}

export default WoWpage