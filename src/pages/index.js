import GallerySection from "@component/components/sections/GallerySection";
import Hero from "../components/sections/Hero"
import ProposalSection from '@component/components/sections/ProposalSection'
import ContactSection from "@component/components/sections/ContactSection";
import Footer from "@component/components/Footer";

const Home = () => {
  return(
    <>
      <Hero/>
      <main className="background-gradient pb-20">
        <ProposalSection/>
        <GallerySection/>
        <ContactSection/>
      </main>
      <Footer/>
    </>
  )
}

export default Home;