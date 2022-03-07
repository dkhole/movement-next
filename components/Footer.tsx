/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Facebook from "../components/svgs/FacebookLogo";
import Instagram from "../components/svgs/InstagramLogo";

export const Footer = ({}) => {
  return (
    <footer
      css={{
        width: "100vw",
        overflowY: "hidden",
        backgroundColor: "black",
        color: "#B4B4B4",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: "20px",
        div: {
          margin: "45px 0 30px 0",
        },
        svg: {
          fill: "#B4B4B4",
          height: "30px",
          width: "30px",
          margin: "0 10px",
          cursor: "pointer",
        },
        span: {
          fontSize: "0.75rem",
          fontWeight: 100,
          textAlign: "center",
        },
        "& svg:hover": {
          fill: "#45457c",
        },
      }}
    >
      <div>
        <Facebook />
        <Instagram />
      </div>
      <span>© 2022 Movement Mechanics Pty Ltd</span>
    </footer>
  );
};

export default Footer;
