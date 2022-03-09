/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Link from "next/link";
import { ProfileProps } from "./ProfileA";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export const ProfileB = ({ preview }: ProfileProps) => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (element) {
      gsap.fromTo(
        (element as HTMLElement).querySelector("#profileb-pic"),
        {
          opacity: 0,
          x: -200,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: (element as HTMLElement).querySelector(
            "#profileb-pic"
          ),
        }
      );
      gsap.fromTo(
        (element as HTMLElement).querySelector("#profileb-name"),
        {
          opacity: 0,
          x: -100,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: (element as HTMLElement).querySelector("#profileb-name"),
            toggleActions: "restart none restart none",
          },
        }
      );
      gsap.fromTo(
        (element as HTMLElement).querySelector("#profileb-title"),
        {
          opacity: 0,
          x: -100,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: (element as HTMLElement).querySelector("#profileb-title"),
            toggleActions: "restart none restart none",
          },
        }
      );
      gsap.fromTo(
        (element as HTMLElement).querySelector("#profileb-line"),
        {
          opacity: 0,
          x: -100,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: (element as HTMLElement).querySelector("#profileb-line"),
            toggleActions: "restart none restart none",
          },
        }
      );
      gsap.fromTo(
        (element as HTMLElement).querySelector("#profileb-desc"),
        {
          opacity: 0,
          x: -100,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1.25,
          scrollTrigger: {
            trigger: (element as HTMLElement).querySelector("#profileb-desc"),
            toggleActions: "restart none restart none",
          },
        }
      );
    }
  }, []);

  return (
    <section
      css={{
        backgroundColor: "#151515",
        "@media (min-width: 800px)": {
          display: "flex",
          flexDirection: "row-reverse",
          alignItems: "center",
          justifyContent: "center",
          section: {
            width: "50vw",
          },
        },
      }}
      ref={ref}
    >
      <section
        css={{
          background: "url(gallery3.webp)",
          backgroundSize: "cover",
          backgroundPosition: "59% 50%",
        }}
        id="profile-b"
      >
        <div
          css={{
            height: "100%",
            width: "100%",
            background: "rgba(20, 20, 20, 0.76)",
            backdropFilter: "blur(2px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "50px 0",
            gap: "15px",
            "& h1": {
              fontSize: "1.8rem",
              fontWeight: "400",
            },
            "& span": {
              fontSize: "1.1rem",
              fontWeight: "100",
            },
            "& hr": {
              width: "250px",
            },
          }}
        >
          <div
            id="profileb-pic"
            css={{
              height: "300px",
              width: "230px",
              borderRadius: "50%",
              backgroundColor: "grey",
              background: "url(mintae.webp)",
              backgroundSize: "cover",
              backgroundPosition: "90% 20%",
              boxShadow: "0px 0px 0px 8px rgba(163, 163, 163, 0.36)",
              marginBottom: "40px",
            }}
          >
            {" "}
          </div>
          <h1 id="profileb-name">Mintae Kim</h1>
          <span id="profileb-title">Chiropractor</span>
          <hr id="profileb-line"></hr>
        </div>
      </section>
      <section
        id="profileb-desc"
        css={{
          backgroundColor: "#151515",
          padding: "50px",
          "& span": {
            fontSize: "1rem",
            fontWeight: "100",
            lineHeight: "27.5px",
          },
          "& a": {
            color: "white",
            display: "block",
            marginTop: "25px",
            fontSize: "0.7rem",
            fontWeight: 200,
          },
          "& a:hover": {
            color: "#45457c",
          },
        }}
      >
        <span>
          {preview
            ? `Mintae is Chiropractor who graduated from Macquarie University with a Bachelor in Chiropractic Science and a Masters in Chiropractic. Brief working History Mintae’s broad experience has spanned close to a decade in enabling the human body to move the way it was intended. Developing experience through numerous disciplines from sports chiropractic, rehabilitative to pain management has led to the culmination of Movement Mechanics as a pioneering multimodal and movement based approach.`
            : `Mintae is Chiropractor who graduated from Macquarie University with a Bachelor in Chiropractic Science and a Masters in Chiropractic.  Brief working History   Mintae’s broad experience has spanned close to a decade in enabling the human body to move the way it was intended. Developing experience through numerous disciplines from sports chiropractic, rehabilitative to pain management has led to the culmination of Movement Mechanics as a pioneering multimodal and movement based approach.  Work Interest Treatment approach    “Chasing the pain approach is a thing of the past.”   Mintae has a keen interest in understanding the way people move through the application of neuro-functional anatomy, biomechanics and myofascial anatomy. His treatment protocols include an integration of Functional Neuro-Orthopaedic Rehabilitation 1 & 2, Dry Needling, Myofascial Soft Tissue Release, Functional Neuromuscular Assessment, SMA Concussion Management, exercise and rehabilitation exercise prescription and post-surgical rehabilitation/programming.   Personal Interests and sports  “Do small things with great love,”   Mintae is passionate with the youth and loves offering his time to the community. This where he has learnt how to be patient, empathetic and compassionate when dealing with other people’s problems. Along with his extensive sporting background and his fair share of injuries, Mintae is familiar with sports including basketball, football, futsal, oztag, taekwondo, golf, volleyball and tennis competing at various levels from local competitions and representative.`}
        </span>
        {preview ? (
          <Link href="/staff/#profile-b">
            Click here to read more about Mintae
          </Link>
        ) : (
          ""
        )}
      </section>
    </section>
  );
};

export default ProfileB;
