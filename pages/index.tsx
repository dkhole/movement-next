/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import type { NextPage } from "next";
import { Landing } from "../components/Landing";
import Nav from "../components/Nav";

const Home: NextPage = () => {
  return (
    <>
      <Nav />
      <Landing />
    </>
  );
};

export default Home;
