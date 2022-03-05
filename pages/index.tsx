/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Image from "next/image";
import type { NextPage } from "next";
import { Landing } from "../components/Landing";
import Nav from "../components/Nav";
import ProfileA from "../components/ProfileA";
import ProfileB from "../components/ProfileB";
import Gallery from "../components/Gallery";
import Testimonials from "../components/Testimonials";

const Home: NextPage = () => {
  return (
    <>
      <Nav />
      <Landing />
      <ProfileA />
      <ProfileB />
      <Gallery />
      <Testimonials />
    </>
  );
};

export default Home;
