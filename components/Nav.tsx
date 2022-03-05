/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import MovementLogo from "./svgs/MovementLogo";

const navStyles = (scrollPosition: number) => css`
  height: 80px;
  width: 100vw;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.39);
  z-index: 4;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  transition: background-color 0.5s;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  & a {
    color: white;
    text-decoration: none;
    letter-spacing: 1.75px;
    font-size: 0.6rem;
    font-weight: 200;
  }
  ${scrollPosition > 200 &&
  `
    background-color: rgba(0, 0, 0, 0.89);
    color: white;
  `}
`;

export const Nav = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav css={navStyles(scrollPosition)}>
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

      <a href="#landing">HOME</a>
      <a href="#profile-a">ABOUT</a>
      <a href="#gallery">GALLERY</a>
      <a href="#testimonials">TESTIMONIALS</a>
      <a href="#contact">CONTACT</a>
    </nav>
  );
};

export default Nav;
