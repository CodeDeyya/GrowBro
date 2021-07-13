import { container, title } from "assets/jss/nextjs-material-kit.js";

const landingPageStyle = {
  container: {
    zIndex: "12",
    color: "#004553",
    ...container,
  },
  center:{
    display: "flex",
  },

  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    color: "#5AB9EA",
    textDecoration: "none",
  },
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "500px",
    margin: "10px auto 0",
  },
  main: {
    background: "#004553",
    position: "relative",
  },
  containerb:{
    marginTop: "69px"
  },
  image: {
    width: "486.72px",
height: "72.69px",
marginTop: "117px",
marginLeft:"77px"



  },
  hero: {
    width: "886px",
height: "886px",
marginTop: "69px"

  },
  local:{
    marginTop: "100px",
    marginLeft:"100px"
  },
  soon: {
    marginTop: "100px",
    marginLeft:"100px"
  },
  icons: {
    marginTop: "100px",
    marginLeft:"150px"
  },
  mainRaised: {
    margin: "10px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
  },
};

export default landingPageStyle;
