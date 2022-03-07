/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Image from "next/image";

export const Gallery = () => {
  return (
    <section
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
      <h1>GALLERY</h1>
      <section>
        <div>
          <Image
            src="/gallery1.webp"
            height={450}
            width={350}
            alt="Photo of clinic 1"
          />
        </div>
        <div>
          <Image
            src="/gallery2.jpg"
            height={450}
            width={350}
            alt="Photo of clinic 2"
          />
        </div>
        <div>
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
