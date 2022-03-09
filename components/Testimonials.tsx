/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export const Testimonials = () => {
  const ref = useRef(null);
  useEffect(() => {
    const element = ref.current;
    if (element) {
      gsap.fromTo(
        (element as HTMLElement).querySelector("#testimonials-title"),
        {
          opacity: 0,
          y: -15,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.25,
          scrollTrigger: {
            trigger: (element as HTMLElement).querySelector(
              "#testimonials-title"
            ),
            toggleActions: "restart none restart none",
          },
        }
      );
      gsap.fromTo(
        (element as HTMLElement).querySelector("#testimonials-desc"),
        {
          opacity: 0,
          y: -15,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.25,
          scrollTrigger: {
            trigger: (element as HTMLElement).querySelector(
              "#testimonials-desc"
            ),
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
        width: "100vw",
        background: "url(gallery2.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "20%",
      }}
      id="testimonials"
    >
      <div
        css={{
          height: "100%",
          width: "100%",
          background: "rgba(20, 20, 20, 0.55)",
          backdropFilter: "saturate(1.2) blur(4px)",
          paddingBottom: "75px",
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
            padding: "70px 0 50px",
            textAlign: "center",
            fontSize: "1.8rem",
            fontWeight: 700,
          },
          "& span": {
            textAlign: "left",
            fontSize: "0.9rem",
            fontStyle: "italic",
            fontWeight: 200,
            letterSpacing: 1,
            lineHeight: 1.5,
          },
          "@media (min-width: 800px)": {
            "& h1": {
              fontSize: "2.3rem",
              fontWeight: 700,
            },
            "& div": {
              width: "800px",
            },
            "& span": {
              fontSize: "1.2rem",
              fontWeight: 200,
            },
          },
        }}
      >
        <h1 id="testimonials-title">PATIENT TESTIMONIALS</h1>
        <div id="testimonials-desc">
          <span>
            &quot;I’d absolutely recommend Movement Mechanics to anyone in need
            of rehab or treatment. I’ve seen other physios and chiros in the
            past, but nothing’s come close to the level of service and treatment
            I’ve received here. From diagnosis through to rehab exercises,
            Mintae is very thorough and meticulous in his approach. The
            treatments have always worked like magic. Do yourself a favour and
            see these guys if you’re sore or injured!&quot;
          </span>
          <span>- Olivia</span>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
