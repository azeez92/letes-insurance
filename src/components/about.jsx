import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import letes_about from '../assets/images/letes-about.jpg';
import ProgressBar from 'react-bootstrap/ProgressBar';




export default function AppAbout(){
    const now = 100;

    return(
        <main className='about'>
            <div className='section-title'>
        <h3>About Letes Insurance</h3>
<p>Your Trusted Partner in Comprehensive and Affordable Insurance Solutions </p>
            </div>

            <Container fluid>
          <Row>
            <Col md={12} lg={6}><img src={letes_about} className='about-img'/></Col>
            <Col md={12} lg={6}>

<p>Welcome to Letes Insurance, where your peace of mind is our top priority. With years of experience in the insurance industry, we are dedicated to providing comprehensive and affordable insurance solutions tailored to meet the unique needs of individuals, families, and businesses.</p>

<p>At Letes Insurance, we understand that life is unpredictable, and having the right insurance coverage is essential for safeguarding your future. Our mission is to offer a diverse range of insurance plans that ensure you are well-protected against life's uncertainties. From health and life insurance to property and casualty coverage, we have you covered.</p>

<p>What sets us apart is our unwavering commitment to customer satisfaction. We pride ourselves on our personalized approach, taking the time to understand your specific requirements and providing you with the best possible solutions. Our team of experienced insurance professionals is always ready to assist you, offering expert advice and support whenever you need it.</p>

<p>We believe that quality insurance should be accessible to everyone, which is why we offer competitive premiums without compromising on coverage. Our goal is to provide you with the best value for your money, ensuring that you receive comprehensive protection at an affordable price.</p>

<p>At Letes Insurance, we are more than just an insurance provider; we are your trusted partner in securing your future. Join us today and experience the peace of mind that comes from knowing you are fully covered by a reliable and caring insurance company.</p>

<div>
<p>Customer Satisfaction</p>
<ProgressBar now={now} label={`${now}%`} />
</div>

<div>
<p>Claims Processed</p>
<ProgressBar now={now} label={`${now}%`} />
</div>

<div>
<p>Coverage Plans Sold</p>
<ProgressBar now={now} label={`${now}%`} />
</div>
            </Col>
          </Row>
        </Container>

       
        </main>
    );
}