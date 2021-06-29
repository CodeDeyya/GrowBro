import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Grid from "@material-ui/core/Grid";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import AddUser from "components/AddUser.js";
import Hidden from "@material-ui/core/Hidden";

import styles from "assets/jss/nextjs-material-kit/pages/landingPage.js";

// Sections for this page
import ProductSection from "pages-sections/LandingPage-Sections/ProductSection.js";
import TeamSection from "pages-sections/LandingPage-Sections/TeamSection.js";
import WorkSection from "pages-sections/LandingPage-Sections/WorkSection.js";
import Typography from "@material-ui/core/Typography";
import LoginButton from "components/LoginButton.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { EmailSharp } from "@material-ui/icons";

import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../store/userinfo/userAction";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Chilanka", "cursive"].join(","),
  },
});

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();

  const { ...rest } = props;
  const [showModal, setShowModal] = React.useState(false);
  const [deviceName, setDeviceName] = React.useState("");
  const [deviceId, setDeviceId] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const onHide = () => {
    setShowModal(false);
  };

  const handleDeviceNameChange = (e) => {
    setDeviceName(e.target.value);
  };
  const handleDeviceIdChange = (e) => {
    setDeviceId(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const onSubmit = async () => {
    console.log(deviceName, deviceId, email, password);
    try {
      await dispatch(
        addTask({
          DeviceName: deviceName,
          DeviceId: deviceId,
          Email: email,
          Passwrod: password,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        leftLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      <ThemeProvider theme={theme}>
        <Hidden smDown>
          <Parallax responsive image={require("assets/img/front.jpg")}>
            <div className={classes.container}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={12} md={6}>
                  <h4 className={classes.title}>
                    <Typography variant="h4" gutterBottom>
                      GrowBro is a Grow Box with plug and play system. Plug it
                      into your home socket and you're good to GROW!
                    </Typography>
                  </h4>
                  <br />

                  <AddUser>
                    <ToastContainer />
                  </AddUser>
                </Grid>
              </Grid>
            </div>
          </Parallax>
        </Hidden>

        <Hidden smUp>
          <Parallax responsive image={require("assets/img/landphone.png")}>
            <div className={classes.container}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={12} md={6}>
                  <LoginButton></LoginButton>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <AddUser>
                    <ToastContainer />
                  </AddUser>
                </Grid>
              </Grid>
            </div>
          </Parallax>
        </Hidden>
      </ThemeProvider>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ProductSection />
          <TeamSection />
          <WorkSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
