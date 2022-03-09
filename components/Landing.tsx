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
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export const Landing = () => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (element) {
      gsap.fromTo(
        (element as HTMLElement).querySelector("#landing-subtitle"),
        {
          opacity: 0,
          y: -30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 2,
          scrollTrigger: {
            trigger: (element as HTMLElement).querySelector(
              "#landing-subtitle"
            ),
            toggleActions: "restart none restart none",
          },
        }
      );
      gsap.fromTo(
        (element as HTMLElement).querySelector("#landing-title"),
        {
          opacity: 0,
          scale: 0.85,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 2,
          scrollTrigger: {
            trigger: (element as HTMLElement).querySelector("#landing-title"),
            toggleActions: "restart none restart none",
          },
        }
      );
      gsap.fromTo(
        (element as HTMLElement).querySelector("#landing-logo"),
        {
          opacity: 0,
          scale: 0.75,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 2,
          scrollTrigger: {
            trigger: (element as HTMLElement).querySelector("#landing-logo"),
            toggleActions: "restart none restart none",
          },
        }
      );
    }
  }, []);

  return (
    <div
      css={{
        position: "relative",
        height: "100vh",
        width: "100vw",
        textAlign: "center",
      }}
      id="landing"
      ref={ref}
    >
      <div
        id="landing-logo"
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
            fill: "#654fc978",
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
          backgroundColor: "rgba(12, 12, 12, 0.6);",
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
          id="landing-subtitle"
          css={{
            fontSize: "1rem",
            fontWeight: 200,
            zIndex: 2,
            "@media (min-width: 800px)": {
              fontSize: "1.2rem",
            },
          }}
        >
          Physiotherapy & Chiropractic Services
        </h1>
        <h1
          id="landing-title"
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
            height: "30px",
            width: "95px",
            background: "none",
            border: "2px solid white",
            borderRadius: "0 15px 0 15px",
            color: "white",
            fontFamily: "Prompt, sans-serif",
            fontSize: "0.8rem",
            lineHeight: "30px",
            fontWeight: 300,
            zIndex: 2,
            cursor: "pointer",
            textDecoration: "none",
            "&:hover": {
              backgroundColor: "white",
              color: "black",
            },
            "@media (min-width: 800px)": {
              height: "40px",
              width: "110px",
              fontSize: "1rem",
              lineHeight: "38px",
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
          placeholder="blur"
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
          <a aria-label="Link to our Instagram page">
            <Instagram height={30} width={30} />
          </a>
        </Link>
        <Link href={"https://www.facebook.com/movementmechanicshp/"} passHref>
          <a aria-label="Link to our Facebook page">
            <Facebook height={30} width={30} />
          </a>
        </Link>
        <Link
          href={
            "https://www.google.com/maps/place/Movement+Mechanics+Health+and+Performance/@-33.8437876,151.0493416,15z/data=!4m2!3m1!1s0x0:0xa3d457170d071d5e?sa=X&ved=2ahUKEwiq8LX-77X2AhWszTgGHeNUCdMQ_BJ6BAgwEAU"
          }
          passHref
        >
          <a aria-label="Click for google map location">
            <Location height={30} width={30} />
          </a>
        </Link>
        <Link href={"#contact"} passHref>
          <a aria-label="Click for contact details">
            <Phone height={30} width={30} />
          </a>
        </Link>
      </footer>
    </div>
  );
};

export default Landing;
