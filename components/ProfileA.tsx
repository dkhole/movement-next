/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export interface ProfileProps {
  preview: boolean;
}

export const ProfileA = ({ preview }: ProfileProps) => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (element) {
      gsap.fromTo(
        (element as HTMLElement).querySelector("#profilea-pic"),
        {
          opacity: 0,
          x: 200,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: (element as HTMLElement).querySelector(
            "#profilea-pic"
          ),
        }
      );
      gsap.fromTo(
        (element as HTMLElement).querySelector("#profilea-name"),
        {
          opacity: 0,
          x: 100,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: (element as HTMLElement).querySelector("#profilea-name"),
            toggleActions: "restart none restart none",
          },
        }
      );
      gsap.fromTo(
        (element as HTMLElement).querySelector("#profilea-title"),
        {
          opacity: 0,
          x: 100,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: (element as HTMLElement).querySelector("#profilea-title"),
            toggleActions: "restart none restart none",
          },
        }
      );
      gsap.fromTo(
        (element as HTMLElement).querySelector("#profilea-line"),
        {
          opacity: 0,
          x: 100,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: (element as HTMLElement).querySelector("#profilea-line"),
            toggleActions: "restart none restart none",
          },
        }
      );
      gsap.fromTo(
        (element as HTMLElement).querySelector("#profilea-desc"),
        {
          opacity: 0,
          x: 100,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1.25,
          scrollTrigger: {
            trigger: (element as HTMLElement).querySelector("#profilea-desc"),
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
          background: "url(gallery1.webp)",
          backgroundSize: "cover",
          backgroundPosition: "20% 60%",
        }}
        id="profile-a"
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
            id="profilea-pic"
            css={{
              height: "300px",
              width: "230px",
              borderRadius: "50%",
              backgroundColor: "grey",
              background: "url(paul.webp)",
              backgroundSize: "cover",
              backgroundPosition: "59% 20%",
              boxShadow: "0px 0px 0px 8px rgba(163, 163, 163, 0.36)",
              marginBottom: "40px",
            }}
          ></div>
          <h1 id="profilea-name">Paul Yu</h1>
          <span id="profilea-title">Physiotherapist</span>
          <hr id="profilea-line"></hr>
        </div>
      </section>
      <section
        id="profilea-desc"
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
          },
          "& a:hover": {
            color: "#45457c",
          },
          "@media (min-width: 800px)": {
            div: {
              height: "100%",
            },
          },
        }}
      >
        <span>
          {preview
            ? `Paul is a Physiotherapist who graduated from the University of Sydney with a Bachelor of Science (Exercise and Sports Science) and a Masters of Physiotherapy. Paul’s first experience with physiotherapy was through his own injuries having had serious injuries to his wrist, elbow, shoulder, and knees. He found the value of recovery, rehabilitation, exercises, and prevention through his own experiences.`
            : `Paul is a Physiotherapist who graduated from the University of Sydney with a Bachelor of Science (Exercise and Sports Science) and a Masters of Physiotherapy. Paul’s first experience with physiotherapy was through his own injuries having had serious injuries to his wrist, elbow, shoulder, and knees. He found the value of recovery, rehabilitation, exercises, and prevention through his own experiences.  Some his treatment methods include trigger point therapy, active release technique, mulligans, dry needling, joint mobilisations, taping techniques, DNS analysis and exercise prescription and post-surgical rehabilitation/programing. Paul has many sporting interests but has a particular interest in the NRL and NBA. His favourite teams are the Sydney Roosters and the Phoenix Suns. He regularly stays active with weight training, plyometric training and has played at various repetitive levels of Oztag.  Paul can modestly speak Korean and can provide services for those that require consultations in Korean.`}
        </span>
        {preview ? <Link href="/staff">Read more</Link> : ""}
      </section>
    </section>
  );
};

export default ProfileA;
