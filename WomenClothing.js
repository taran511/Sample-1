import React from 'react'
import { Grid,Container,Row,Col } from 'react-bootstrap'
import New from './Navi1';
import Link1 from './LinkWClothing';

function WomenClothing() {
    return (
        <div>
            <Container fluid>
  <Row>
    <Col xs={2}><New/></Col>
   
    <Col><Link1/></Col>
  
    </Row>
</Container>
        
        </div>
    )
}
export default WomenClothing;