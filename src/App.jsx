
import './App.css'
import AppTestimonial from './components/Testimonial'
import AppAbout from './components/about'
import AppContact from './components/contact-us'
import Appfaqs from './components/faqs'
import Appfooter from './components/footer'
import AppHeader from './components/header'
import AppInsurancePlan from './components/insurance-plan'
import AppServices from './components/services'
import AppSlider from './components/slider'


function App() {
 return(
<main>
<header>
  <AppHeader />
</header>
<section>
<AppSlider />
</section>

<section>
<AppAbout />
</section>


<section>
<AppServices />
</section>


<section>
<AppInsurancePlan />
</section>

<section>
<AppTestimonial />
</section>

<section>
<Appfaqs />
</section>

<section>
<AppContact />
</section>


<section>
<Appfooter />
</section>
</main>



 )
}

export default App
