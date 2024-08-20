import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

var faqsData = [
    {
        id: 1,
        question: "What types of insurance does Letes Insurance offer?",
        answer: "We offer a wide range of insurance plans, including health, life, property, auto, business, travel, disability, and retirement planning.",
    
    },

    {
        id: 2,
        question: "How do I choose the right insurance plan for my needs?",
        answer: "Our experienced agents are here to help. Contact us for a personalized consultation to understand your needs and recommend the best coverage options.",
    
    },

    {
        id: 3,
        question: "How can I get a quote for an insurance plan?",
        answer: "You can get a quote by visiting our website and using our online quote tool, or by calling our customer service team. We’ll provide a detailed quote based on your specific requirements.",
    
    },


    {
        id: 4,
        question: "What is the claims process like with Letes Insurance?",
        answer: "Filing a claim is straightforward. Contact our claims department via phone or our online portal. Our team will guide you through the process, from documentation to settlement.",
    
    },


    {
        id: 5,
        question: "Are there any discounts available on insurance plans?",
        answer: "Yes, we offer various discounts such as multi-policy discounts, safe driver discounts, and more. Speak with our agents to find out which discounts you qualify for.",
    
    },
]

var faqsData2 = [

    {
        id: 6,
        question: "How do I make changes to my current insurance policy?",
        answer: "You can make changes to your policy by contacting our customer service team. They will assist you in updating your coverage, adding or removing insured items, and making other necessary adjustments.",
    
    },


    {
        id: 7,
        question: "What should I do if I miss a premium payment?",
        answer: "If you miss a payment, contact us immediately. We can discuss payment options to ensure your coverage remains active and uninterrupted.",
    
    },


    {
        id: 8,
        question: "How often should I review my insurance policies?",
        answer: "We recommend reviewing your policies annually or whenever you experience a significant life event, such as buying a new home, getting married, or having a child, to ensure your coverage meets your current needs.",
    
    },


    {
        id: 9,
        question: "What is covered under homeowners insurance?",
        answer: "Homeowners insurance typically covers damage to your home and personal property due to events like fire, theft, and natural disasters, as well as liability protection for accidents that occur on your property.",
    
    },

    {
        id: 10,
        question: "Can I bundle multiple insurance policies with Letes Insurance?",
        answer: "Yes, bundling multiple policies can save you money and simplify your insurance management. Contact us to discuss bundling options that fit your needs.",
    
    },


]

export default function Appfaqs(){
    return(
<section className='faq'>
<div className='section-title'>
        <h3>Frequently Asked Questions</h3>
<p>Join our satisfied clients and experience the peace of mind that comes with Letes Insurance. Our commitment to quality service and comprehensive coverage ensures that you are protected against life’s uncertainties.</p>
            </div> 

<Container>

<Row>
        <Col md={6}>{faqsData.map(faq => {
            return(
                <Accordion  key={faq.id}>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>{faq.question}</Accordion.Header>
                  <Accordion.Body>
                    {faq.answer}
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>     
            
            
   )}


)
   
   
   }</Col>

        <Col md={6}>{faqsData2.map(faq2 => {
            return(
                <Accordion  key={faq2.id}>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>{faq2.question}</Accordion.Header>
                  <Accordion.Body>
                    {faq2.answer}
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>     
            
            
   )}


)
   
   
   }</Col>
      </Row>
   


</Container>
           

</section>


    )}