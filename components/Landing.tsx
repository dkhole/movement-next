/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Image from "next/image";
import landingPic from "../public/landing.jpg";
import MovementLogo from "./svgs/MovementLogo";
import Facebook from "./svgs/FacebookLogo";
import Instagram from "./svgs/InstagramLogo";
import Location from "./svgs/Location";
import Phone from "./svgs/Phone";

export const Landing = () => {
  return (
    <div
      css={{
        position: "relative",
        height: "100vh",
        width: "100vw",
        color: "white",
        textAlign: "center",
      }}
    >
      <div
        css={{
          position: "absolute",
          height: "150px",
          width: "250px",
          top: "-25px",
          bottom: 0,
          left: 0,
          right: 0,
          margin: "auto",
          zIndex: 1,
          "& svg": {
            height: "100%",
            width: "100%",
          },
          "& svg g": {
            fill: "rgba(152, 150, 221, 0.55)",
          },
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element*/}
        <MovementLogo />
      </div>
      <div
        css={{
          zIndex: 2,
          height: "100%",
          width: "100%",
          backgroundColor: "rgba(12, 12, 12, 0.3);",
          backdropFilter: " blur(2.5px)",
          color: "white",
        }}
      ></div>
      <main
        css={{
          position: "absolute",
          top: 0,
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1
          css={{
            fontSize: "1rem",
            fontWeight: 100,
            zIndex: 2,
          }}
        >
          Physiotherapy & Chiropractic Services
        </h1>
        <h1
          css={{
            margin: "15px 0",
            fontSize: "2.25rem",
            fontWeight: 600,

            zIndex: 2,
          }}
        >
          MOVEMENT MECHANICS
        </h1>
        <button
          css={{
            height: "35px",
            width: "100px",
            background: "none",
            border: "2px solid white",
            color: "white",
            fontFamily: "Prompt, sans-serif",
            fontWeight: 200,
            zIndex: 2,
            cursor: "pointer",
            "&:hover": {
              backgroundColor: "white",
              color: "black",
            },
          }}
        >
          Book Now
        </button>
      </main>
      <div
        css={{
          position: "absolute",
          height: "100%",
          width: "100%",
          top: 0,
          zIndex: -1,
        }}
      >
        <Image
          src={landingPic}
          alt="pic of Sydney Harbour Bridge"
          objectFit="cover"
          layout="fill"
          quality={100}
        ></Image>
      </div>
      <footer
        css={{
          position: "absolute",
          bottom: 0,
          height: "80px",
          width: "100vw",
          backgroundColor: "rgba(0, 0, 0, 0.39)",
          zIndex: 3,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "30px",
          "& svg": {
            fill: "white",
          },
        }}
      >
        <Instagram height={30} width={30} />
        <Facebook height={30} width={30} />
        <Location height={30} width={30} />
        <Phone height={30} width={30} />
      </footer>
    </div>
  );
};

export default Landing;
