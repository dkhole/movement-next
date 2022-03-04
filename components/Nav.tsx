/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import MovementLogo from "./svgs/MovementLogo";

export const Nav = () => {
  return (
    <nav
      css={{
        height: "80px",
        width: "100vw",
        position: "fixed",
        backgroundColor: "rgba(0, 0, 0, 0.39)",
        zIndex: 3,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "15px",
        "& a": {
          color: "white",
          textDecoration: "none",
          letterSpacing: "1.75px",
          fontSize: "0.6rem",
          fontWeight: 200,
        },
      }}
    >
      <div
        css={{
          position: "absolute",
          height: "80px",
          width: "55px",
          zIndex: -1,
          svg: {
            height: "100%",
            width: "100%",
          },
          "svg g": {
            fill: "#45457c",
          },
        }}
      >
        <MovementLogo />
      </div>

      <a href="/html/">HOME</a>
      <a href="/html/">ABOUT</a>
      <a href="/html/">GALLERY</a>
      <a href="/html/">TESTIMONIALS</a>
      <a href="/html/">CONTACT</a>
    </nav>
  );
};

export default Nav;
