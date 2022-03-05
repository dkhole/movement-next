/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const ProfileB = () => {
  return (
    <>
      <section
        css={{
          background: "url(gallery3.webp)",
          backgroundSize: "cover",
          backgroundPosition: "59% 20%",
        }}
        id="profile-b"
      >
        <div
          css={{
            height: "100%",
            width: "100%",
            background: "rgba(20, 20, 20, 0.76)",
            backdropFilter: "blur(4px)",
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
            css={{
              height: "300px",
              width: "230px",
              borderRadius: "50%",
              backgroundColor: "grey",
              background: "url(mintae.webp)",
              backgroundSize: "cover",
              backgroundPosition: "90% 20%",
              outline: "8px solid rgba(163, 163, 163, 0.36)",
              marginBottom: "40px",
            }}
          >
            {" "}
          </div>
          <h1>Mintae Kim</h1>
          <span>Chiropractor</span>
          <hr></hr>
        </div>
      </section>
      <section
        css={{
          backgroundColor: "#252525",
          padding: "75px",
          "& span": {
            fontSize: "1rem",
            fontWeight: "100",
            lineHeight: "27.5px",
          },
        }}
      >
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          condimentum urna rutrum tempor condimentum. Nullam maximus luctus dui,
          in vulputate mauris sodales id. Cras ut enim ut nisi tempus molestie.
          Suspendisse eget molestie lorem. Suspendisse egestas ante vitae velit
          sollicitudin, quis volutpat sapien porttitor. Curabitur in tincidunt
          ipsum. Donec efficitur purus tincidunt elit egestas, vel feugiat
          tortor ornare. Maecenas.
        </span>
      </section>
    </>
  );
};

export default ProfileB;
