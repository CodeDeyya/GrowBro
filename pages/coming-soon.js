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
import Box from "@material-ui/core/Box";

import styles from "assets/jss/nextjs-material-kit/pages/landingPage.js";

// Sections for this page
import Features from "../components/Features.js";
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
import logo from "../public/logo.png"
import local from "../public/local.png"
import hero from "../public/hero.png"
import icons from "../public/icons.png"
import soon from "../public/soon.png"
import Image from 'next/image'

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Roboto", "cursive"].join(","),
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
    
      <div className={classes.main}>
      
         <Grid className={classes.center} container spacing={2}>
           <Grid sm={12} md={6} item >
           <Grid  container spacing={8}
  direction="column"
  alignItems="center"
  justify="center"
  style={{ minHeight: '100vh' }} >
            <Grid item sm={12} md={12} justify = "center"> 
            <Image  layout="intrinsic" width={486.72}
      height={72.69} src = {logo} ></Image>
            </Grid>
            <Grid item sm={12} md={12}> 
              <Image layout="intrinsic"  width={382}
      height={174} src={soon}></Image>
              </Grid>
              <Grid item sm={12} md={12}> 
             <Image ilayout="intrinsic" width={309.11}
      height={80.4} src = {icons} ></Image>
             </Grid>
             <Grid item sm={12} md={12}> 
             <Image  width={455}
      height={99} layout="intrinsic"  src = {local} ></Image>
             </Grid>
           </Grid>
</Grid>

           <Grid sm={12} md={6} item >
           <Grid container direction="column"
  alignItems="center"
  justify="center"
  style={{ minHeight: '100vh' }}>
             <Image width={886}
      height={886} layout="intrinsic" className = {classes.hero} src = {hero} ></Image>
           </Grid>
           </Grid>
         </Grid>
     
      </div>
   
   
  );
}
