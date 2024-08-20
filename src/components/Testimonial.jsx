import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';


var TestimonialData = [
    {
        id: 1,
        description: "Choosing Letes Insurance was one of the best decisions I've ever made. Their customer service is exceptional, and they made the entire process of selecting and purchasing insurance so easy. I feel secure knowing that my family is well-protected.",
        Name: "John D.",
        profession: 'Engineer'
    },

    {
        id: 2,
        description: "I've had my auto insurance with Letes Insurance for over five years now. Their rates are competitive, and they were incredibly helpful when I needed to file a claim after an accident. The entire process was smooth and hassle-free.",
        Name: "Sarah L.",
        profession: 'Graphic Designer',
    },

    {
        id: 3,
        description: "Letes Insurance provided me with a comprehensive health insurance plan that perfectly fits my needs. The coverage is excellent, and the customer support team is always available to answer my questions. I highly recommend them!",
        Name: "Michael T.",
        profession: 'Teacher',
    },


    {
        id: 4,
        description: "As a small business owner, finding the right insurance was crucial. Letes Insurance offered me the perfect business insurance package, covering all my needs from liability to property insurance. Their team is knowledgeable and very supportive.",
        Name: "Emma R.",
        profession: 'Small Business Owner',
    },


    {
        id: 5,
        description: "I switched to Letes Insurance for my homeowners insurance, and I couldn't be happier. They provided a detailed explanation of the coverage options, and I got a great deal. Their service is top-notch, and I feel confident that my home is in good hands.",
        Name: "David K.",
        profession: 'Architect',
    },


    {
        id: 6,
        description:"Letes Insurance has been fantastic in helping me navigate my health insurance options. They explained everything clearly and helped me choose a plan that fits my needs and budget. Their customer service is always responsive and friendly. I highly recommend them!",
        Name: "Linda M.",
        profession: 'Nurse',
    },

    

]


export default function AppTestimonial(){
    return(
        <section className='testimonial'>

<Container>
<div className='section-title'>
        <h3>Clients Testimonial</h3>
<p className='test'>Join our satisfied clients and experience the peace of mind that comes with Letes Insurance. Our commitment to quality service and comprehensive coverage ensures that you are protected against life’s uncertainties.</p>
            </div> 

            <Carousel controls={false}>
            {TestimonialData.map(testimony => {
            return(
<Carousel.Item key={testimony.id}>
        <blockquote>
        <p>{testimony.description}</p>

        <cite>
            <span>{testimony.Name}</span>
            <span>{testimony.profession}</span>

        </cite>

        </blockquote>
      </Carousel.Item>

            )
            
            
            })
            
            
            }

      
    </Carousel>
    </Container>


        </section>
    )}    