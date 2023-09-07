import ServicesSection from "@component/components/sections/ServicesSection";
import Hero from "../components/sections/Hero"
import ProposalSection from '@component/components/sections/ProposalSection'
import ContactSection from "@component/components/sections/ContactSection";
import Footer from "@component/components/Footer";
import Divider from "@component/components/Divider";
import Link from "next/link";

const Home = () => {
  return(
    <>
      <Hero/>
      <main className="background-gradient pb-20">  
        <Link href={'#proposal'}>
          <Divider/>
        </Link>
        <ProposalSection/>
        <Link href={'#services'}>
          <Divider/>
        </Link>
        <ServicesSection/>
        <Link href={'#contact'}>
          <Divider/>
        </Link>
        <ContactSection/>
      </main>
      <Footer/>
    </>
  )
}

export default Home;