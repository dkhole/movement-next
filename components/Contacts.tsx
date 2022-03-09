/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";

export const Contacts = ({}) => {
  return (
    <section
      id="contact"
      css={{
        backgroundColor: "#242424",
        width: "100vw",
        overflowY: "hidden",
        margin: 0,
        padding: 0,
        paddingBottom: "80px",
        "& h1": {
          margin: "45px 0",
          padding: 0,
          fontSize: "2rem",
          textAlign: "center",
          fontWeight: 700,
        },
      }}
    >
      <h1>CONTACT</h1>
      <section
        css={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 50,
          marginTop: "75px",
          span: {
            fontWeight: 100,
            letterSpacing: "1.25px",
            lineHeight: "22.5px",
          },
          "@media (min-width: 800px)": {
            flexDirection: "row",
            gap: 150,
          },
        }}
      >
        <div>
          <iframe
            width="400"
            height="300"
            title="map of location"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=2%20Joyner%20Ave,%20Newington&t=&z=13&ie=UTF8&iwloc=&output=embed"
          ></iframe>
        </div>
        <div>
          <span>
            Located at <br />2 Joyner Ave <br />
            Newington, NSW, 2127
            <br />
          </span>
          <span
            css={{
              padding: "20px 0",
            }}
          >
            <br />
            P: 0421 81 81 81 <br />
            E: info@movementmechanicshp.com
          </span>
        </div>
      </section>
    </section>
  );
};
export default Contacts;
