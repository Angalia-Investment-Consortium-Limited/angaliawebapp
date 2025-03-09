import React from 'react'
import Layout from '../components/Layout'
import Banner from '../components/sections/Banner'
import Feature from '../components/sections/Feature'
import About from '../components/sections/About'
import Services from '../components/sections/Services'
import WhyChooseUs from '../components/sections/WhyChooseUs'
import Projects from '../components/sections/Projects'
import Testimonial from '../components/sections/Testimonial'
import Process from '../components/sections/Process'
import News from '../components/sections/News'
import Award from '../components/sections/Award'
import Contact from '../components/sections/Contact'
import Client from '../components/sections/Client'



const Home = () => {
  return (
    <Layout headerStyle={5} footerStyle={5} wrapperCls="home_5">
      <Banner/>
      {/* <Feature /> */}
      <About />
      {/* <Services /> */}
      <WhyChooseUs />
      {/* <Projects /> */}
      {/* <Services /> */}
      {/* <Testimonial/> */}
      {/* <Process /> */}
      {/* <News />
      <Award /> */}
      <Contact />
      {/* <Client /> */}

      


      </Layout>
  )
}

export default Home