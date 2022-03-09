/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export const Gallery = () => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (element) {
      gsap.fromTo(
        (element as HTMLElement).querySelector("#gallery-title"),
        {
          opacity: 0,
          y: -15,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.25,
          scrollTrigger: {
            trigger: (element as HTMLElement).querySelector("#gallery-title"),
            toggleActions: "restart none restart none",
          },
        }
      );
      gsap.fromTo(
        (element as HTMLElement).querySelector("#gallery-pic1"),
        {
          opacity: 0,
          y: -15,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.25,
          scrollTrigger: {
            trigger: (element as HTMLElement).querySelector("#gallery-pic1"),
            toggleActions: "restart none restart none",
          },
        }
      );
      gsap.fromTo(
        (element as HTMLElement).querySelector("#gallery-pic2"),
        {
          opacity: 0,
          y: -15,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.25,
          scrollTrigger: {
            trigger: (element as HTMLElement).querySelector("#gallery-pic2"),
            toggleActions: "restart none restart none",
          },
        }
      );
      gsap.fromTo(
        (element as HTMLElement).querySelector("#gallery-pic3"),
        {
          opacity: 0,
          y: -15,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.25,
          scrollTrigger: {
            trigger: (element as HTMLElement).querySelector("#gallery-pic3"),
            toggleActions: "restart none restart none",
          },
        }
      );
    }
  }, []);
  return (
    <section
      ref={ref}
      css={{
        backgroundColor: "#242424",
        padding: "50px",
        "& h1": {
          fontSize: "2rem",
          fontWeight: 600,
          textAlign: "center",
          marginBottom: "50px",
        },
        "& section": {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 50,
        },

        "& section div img": {
          borderRadius: "0 20px 0 20px",
        },
        "@media (min-width: 800px)": {
          "& section": {
            justifyContent: "center",
            flexDirection: "row",
            gap: 100,
          },
        },
      }}
      id="gallery"
    >
      <h1 id="gallery-title">GALLERY</h1>
      <section>
        <div id="gallery-pic1">
          <Image
            src="/gallery1.webp"
            height={450}
            width={350}
            alt="Photo of clinic 1"
          />
        </div>
        <div id="gallery-pic2">
          <Image
            src="/gallery2.jpg"
            height={450}
            width={350}
            alt="Photo of clinic 2"
          />
        </div>
        <div id="gallery-pic3">
          <Image
            src="/gallery3.webp"
            height={450}
            width={350}
            alt="Photo of clinic 3"
          />
        </div>
      </section>
    </section>
  );
};

export default Gallery;
