/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Link from "next/link";
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
    transition: font-size 0.5s;
  }
  & a:hover {
    font-size: 0.7rem;
    color: #c2c1fb;
  }
  ${scrollPosition > 200 &&
  `
    background-color: rgba(0, 0, 0, 0.89);
    color: white;
  `}
  @media (min-width: 800px) {
    gap: 20px;
    & a {
      font-size: 1rem;
    }
    & a:hover {
      font-size: 1.15rem;
    }
  }
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
          "@media (min-width: 800px)": {
            height: "150px",
            width: "100px",
          },
        }}
      >
        <MovementLogo />
      </div>

      <a href="./#landing">HOME</a>
      <Link href="/staff">STAFF</Link>
      <a href="./#gallery">GALLERY</a>
      <a href="./#testimonials">TESTIMONIALS</a>
      <a href="./#contact">CONTACT</a>
    </nav>
  );
};

export default Nav;
