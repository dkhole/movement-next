import type { NextPage } from "next";
import { Landing } from "../components/Landing";
import Nav from "../components/Nav";
import ProfileA from "../components/ProfileA";
import ProfileB from "../components/ProfileB";
import Gallery from "../components/Gallery";
import Testimonials from "../components/Testimonials";
import Contacts from "../components/Contacts";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <>
      <Nav />
      <Landing />
      <ProfileA preview={true} />
      <ProfileB preview={true} />
      <Gallery />
      <Testimonials />
      <Contacts />
      <Footer />
    </>
  );
};

export default Home;
