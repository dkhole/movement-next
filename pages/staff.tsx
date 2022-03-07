import { NextPage } from "next/types";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import ProfileA from "../components/ProfileA";
import ProfileB from "../components/ProfileB";

const Staff: NextPage = () => {
  return (
    <>
      <Nav />
      <ProfileA preview={false} />
      <ProfileB preview={false} />
      <Footer />
    </>
  );
};

export default Staff;
