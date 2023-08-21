import React from 'react'
import fastCoImg from '../../../assets/CompanyLogo/fastco.png'
import todayShowImg from '../../../assets/CompanyLogo/todayshow.png'
import popsugarImg from '../../../assets/CompanyLogo/popsugar.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function CheckoutFooter() {
    return (
        <div className='checkoutFooter'>
    <Container>
      <Row>
        <Col>
       <div>
          <img src={fastCoImg} className='FastCo' />
          <h4 className='fs-28 fw-700 Quicksand fastcoPara' >"This teen wellness line gives puberty a chic makeover"</h4>
          </div>
          </Col>
        <Col>
        <div>
          <img src={todayShowImg} className='todayCoImg' />
          <h4 className='todayCoPara fw-700 fs-28 Quicksand '>"Blume provides everything a young women needs to embrace, not fear, her changing body."</h4>
          </div>
          </Col>
        <Col>
        <div>
          <img src={popsugarImg} className='popCoImg' />
          <h4 className='popCoPara fw-700 fs-28 Quicksand'>"The Blemish Oil That Let Me Skip Foundation For a Full Week"</h4>
          </div>
          </Col>
      </Row>
    </Container>
    </div>
    )
}

export default CheckoutFooter
