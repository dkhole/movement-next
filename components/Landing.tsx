/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Image from "next/image";
import landingPic from "../public/landing.jpg";
import MovementLogo from "./svgs/MovementLogo";
import Facebook from "./svgs/FacebookLogo";
import Instagram from "./svgs/InstagramLogo";
import Location from "./svgs/Location";
import Phone from "./svgs/Phone";
import Link from "next/link";

export const Landing = () => {
  return (
    <div
      css={{
        position: "relative",
        height: "100vh",
        width: "100vw",
        textAlign: "center",
      }}
      id="landing"
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
          "@media (min-width: 800px)": {
            height: "300px",
            width: "370px",
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
            "@media (min-width: 800px)": {
              fontSize: "1.2rem",
            },
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
            "@media (min-width: 800px)": {
              fontSize: "3.5rem",
            },
          }}
        >
          MOVEMENT MECHANICS
        </h1>
        <a
          href="https://movement-mechanics.au2.cliniko.com/bookings#service"
          css={{
            height: "35px",
            width: "100px",
            background: "none",
            border: "2px solid white",
            color: "white",
            fontFamily: "Prompt, sans-serif",
            lineHeight: "34px",
            fontWeight: 200,
            zIndex: 2,
            cursor: "pointer",
            textDecoration: "none",
            "&:hover": {
              backgroundColor: "white",
              color: "black",
            },
            "@media (min-width: 800px)": {
              height: "50px",
              width: "110px",
              fontSize: "1rem",
              lineHeight: "48px",
            },
          }}
        >
          Book Now
        </a>
      </main>
      <div
        css={{
          position: "absolute",
          height: "100%",
          width: "150%",
          right: 0,
          top: 0,
          zIndex: -1,
          "@media (min-width: 800px)": {
            width: "100%",
          },
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
            cursor: "pointer",
          },
          "& svg:hover": {
            fill: "#45457c",
          },
          "@media (min-width: 800px)": {
            height: "115px",
            gap: "45px",
            "& svg": {
              height: "40px",
              width: "40px",
            },
          },
        }}
      >
        <Link
          href={"https://www.instagram.com/movementmechanicshp/?hl=en"}
          passHref
        >
          <Instagram height={30} width={30} />
        </Link>
        <Link href={"https://www.facebook.com/movementmechanicshp/"} passHref>
          <Facebook height={30} width={30} />
        </Link>
        <Link
          href={
            "https://www.google.com/maps/place/Movement+Mechanics+Health+and+Performance/@-33.8437876,151.0493416,15z/data=!4m2!3m1!1s0x0:0xa3d457170d071d5e?sa=X&ved=2ahUKEwiq8LX-77X2AhWszTgGHeNUCdMQ_BJ6BAgwEAU"
          }
          passHref
        >
          <Location height={30} width={30} />
        </Link>
        <Link href={"#contact"} passHref>
          <Phone height={30} width={30} />
        </Link>
      </footer>
    </div>
  );
};

export default Landing;
