import React from 'react'
import Appbar from '../../components/Appbar'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import chatImg from '../../assets/online-chatting.webp'
import About from '../About/About';

export default function Home() {
  return (
    <div>
        <Appbar />

        <div>
      <Row className='bg-#f1eaf7'>
        <Col xs= {12} lg={6} md= {6}>
          <div className='home-heading'>
            <h1 className='fs-60'>The best way to</h1>
            <h1 className='fs-60'>Connect Our Friends</h1>
            <p className='heading-intro'>There is a platform to connect with friends, to share own experience, feelings, photos...</p>

            <p></p>
          </div>
        </Col>
        <Col xs= {12} lg={6} md= {6}>
          <div style={{height: "100%", width: "100%", textAlign: "center", paddingTop: '39px'}}>
            <img className='chat-image'
            src ={chatImg}
            href='#home'
            style={{width: '62%'}} />
          </div>
        </Col>
      </Row>
    </div>
    <About />
        
    </div>
  )
}
