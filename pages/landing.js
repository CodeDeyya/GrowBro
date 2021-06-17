import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import AddUser from "components/AddUser.js"

import styles from "assets/jss/nextjs-material-kit/pages/landingPage.js";

// Sections for this page
import ProductSection from "pages-sections/LandingPage-Sections/ProductSection.js";
import TeamSection from "pages-sections/LandingPage-Sections/TeamSection.js";
import WorkSection from "pages-sections/LandingPage-Sections/WorkSection.js";


import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'
import { EmailSharp } from "@material-ui/icons";

import {useDispatch, useSelector} from 'react-redux'; 
import {addTask} from '../store/userinfo/userAction';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {

  
  const classes = useStyles();
  
  const { ...rest } = props;
  const[showModal,setShowModal] =React.useState(false);
  const[deviceName,setDeviceName] = React.useState('');
  const[deviceId,setDeviceId] = React.useState('');
  const[email,setEmail] = React.useState('');
  const[password,setPassword] = React.useState('');


  const onHide = () => {
    setShowModal(false)
  }
  
  const handleDeviceNameChange =(e) => {
    setDeviceName(e.target.value)
  }
  const handleDeviceIdChange = (e) => {
    setDeviceId(e.target.value)
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }
  
  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }


  const onSubmit = async() =>{
    console.log(deviceName, deviceId, email, password);
    try{
      await dispatch(addTask({
        DeviceName: deviceName,
        DeviceId: deviceId,
        Email: email,
        Passwrod: password
      }))
    }
    catch(error){
      console.log(error);
    }
    
   
  }

  
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Grow Bro"
        leftLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax responsive image={require("assets/img/LANDING.png")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>  </h1>
              <h4>
              GrowBro is a Grow Box with plug and play system. Plug it into your home socket and you're good to GROW!
              </h4>
              <br />
              <AddUser>
              <ToastContainer />
              </AddUser>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
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
