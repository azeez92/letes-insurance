import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

var servicesData = [
    {
        id: 1,
        icon: "fas fa-stethoscope",
        title: 'Health Insurance',
        description: "Protect your health and well-being with our comprehensive health insurance plans. We offer a variety of options to suit different needs and budgets, ensuring that you have access to quality healthcare when you need it most."
    },
    {
        id: 2,
        icon: "fas fa-heartbeat",
        title: 'Life Insurance',
        description: "Ensure the financial security of your loved ones with our life insurance policies. We provide various plans, including term life, whole life, and universal life insurance, to help you find the right coverage for your family's future."
    },
    {
        id: 3,
        icon: "fas fa-home",
        title: 'Property Insurance',
        description: "Safeguard your home and valuable assets with our property insurance. We offer coverage for homeowners, renters, and landlords to protect against damage, theft, and other unexpected events."
    },
    {
        id: 4,
        icon: "fas fa-car",
        title: 'Auto Insurance',
        description: "Stay protected on the road with our reliable auto insurance plans. We offer coverage for personal vehicles, commercial fleets, and specialty vehicles, ensuring that you are covered in the event of an accident or damage."
    },
    {
        id: 5,
        icon: "fas fa-briefcase",
        title: 'Business Insurance',
        description: "Protect your business with our tailored insurance solutions. From liability and property insurance to employee benefits and workers' compensation, we provide comprehensive coverage to keep your business running smoothly."
    },
    {
        id: 6,
        icon: "fas fa-plane",
        title: 'Travel Insurance',
        description: "Enjoy peace of mind on your travels with our travel insurance plans. We offer coverage for trip cancellations, medical emergencies, lost luggage, and more, so you can focus on enjoying your journey."
    },
    {
        id: 7,
        icon: "fas fa-user-md",
        title: 'Disability Insurance',
        description: "Secure your income and financial stability with our disability insurance. We offer short-term and long-term disability coverage to protect you in case of illness or injury that prevents you from working."
    },
    {
        id: 8,
        icon: "fas fa-calendar-alt",
        title: 'Retirement Planning',
        description: "Plan for a secure and comfortable retirement with our expert retirement planning services. We help you build a solid financial foundation for your future, offering advice and solutions tailored to your individual goals."
    },
];


export default function AppServices(){
return(

    <main className='services'>
<div className='section-title'>
        <h3>Services of Letes Insurance</h3>
<p>At Letes Insurance, we offer a wide range of insurance services designed to meet the diverse needs of our clients. Our goal is to provide comprehensive coverage options that offer peace of mind and protection against life’s uncertainties. Here’s a closer look at the services we provide:</p>
            </div>

<Container fluid>
      <Row >
       
        {servicesData.map(service => {
            return(
                <Col sm={6} lg={3} key={service.id}>
                <aside><i className={service.icon}></i></aside>
                <h4>{service.title}</h4>
                <p>{service.description}</p>
                </Col> 
            )
        }
        ) }
       
      </Row>
    </Container>



    </main>
)
}