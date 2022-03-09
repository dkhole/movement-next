/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { NextPage } from "next/types";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import ProfileA from "../components/ProfileA";
import ProfileB from "../components/ProfileB";

const Staff: NextPage = () => {
  return (
    <main
      css={{
        backgroundColor: "#151515",
      }}
    >
      <Nav />
      <h1
        css={{
          paddingTop: "100px",
          paddingBottom: "20px",
          textAlign: "center",
          fontSize: "2.5rem",
          fontWeight: 600,
          "@media (min-width: 800px)": {
            paddingTop: "120px",
            paddingBottom: "40px",
          },
        }}
      >
        STAFF
      </h1>
      <ProfileA preview={false} />
      <ProfileB preview={false} />
      <Footer />
    </main>
  );
};

export default Staff;
