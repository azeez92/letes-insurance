import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';



export default function AppContact(){
    return(
<section id="contact-us">
<Container fluid className='overall' >
<div className='section-title'>
        <h3>Contact us</h3>
<p>Get Intouch and get insured</p>
            </div> 
            <Form>
      <Row className='contact-form'>
        <Col sm={12} md={6} lg={4}>
          <Form.Control  type='text' placeholder="Enter your full name"  required/>
        </Col>
        <Col  sm={12} md={6} lg={4}>
          <Form.Control type='email' placeholder="Enter your email address" required/>
        </Col>
        <Col sm={12} lg={4}>
          <Form.Control  type='tel' placeholder="Enter your contact number" required/>
        </Col>
      </Row>
<Row >
<Col sm={12}>

<Form.Control className='message' as='textarea' placeholder="Enter your message" required />
</Col>

</Row>

<Row>
<Col sm={12} className='button'>
<button type='submit'>Submit</button>

</Col>

</Row>

    </Form>


</Container>

<Container fluid>

<div className='google-map'><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.963268366564!2d3.332133874994053!3d6.651475093343254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b97a4ef27935d%3A0x981ed21351f05f48!2sAtibyan%20Tech%20Ng!5e0!3m2!1sen!2sng!4v1719147895251!5m2!1sen!2sng"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

</div>


</Container>


<Container fluid className='contact-info'>
<div>
<ul>
<li>
<i className="fa-solid fa-envelope"></i>
<p>info@letesinsurance.com</p>
</li>
<li>
<i class="fa-solid fa-location-dot"></i>
<p>7 Olayonu Lawal St, Ifako-Ijaiye, Lagos 100283, Lagos</p>

</li>
<li>


<i class="fa-solid fa-phone"></i>
<p>+234 818 888 6667</p>
</li>

</ul>
    
</div>

</Container>
</section>

    );


}