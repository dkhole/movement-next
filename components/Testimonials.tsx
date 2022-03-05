/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const Testimonials = () => {
  return (
    <section
      css={{
        height: "550px",
        width: "100vw",
        background: "url(gallery2.jpg)",
        backgroundSize: "cover",
      }}
      id="testimonials"
    >
      <div
        css={{
          height: "100%",
          width: "100%",
          background: "rgba(20, 20, 20, 0.55)",
          backdropFilter: "saturate(1.2) blur(4px)",
          "& div": {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 30,
            width: "75vw",
            margin: "auto",
            color: "#C2C1FB",
          },
          "& h1": {
            padding: "75px 0",
            textAlign: "center",
            fontSize: "1.8rem",
            fontWeight: 700,
          },
          "& span": {
            textAlign: "left",
            fontSize: "1.1rem",
            fontStyle: "italic",
            fontWeight: 200,
            letterSpacing: 1,
            lineHeight: 1.25,
          },
        }}
      >
        <h1>PATIENT TESTIMONIALS</h1>
        <div>
          <span>
            I came across the yelp page and thought I should give him a try, and
            I&apos;m so glad I did. I was pleasantly surprised at how
            knowledgeable and professional he is. He was realistic with what he
            can do and honest about what I can expect.
          </span>
          <span>-- Friend</span>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
