/*eslint-disable*/
import React, {useState, useEffect} from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
// layout for this page
import Admin from "layouts/Admin.js";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import CardIcon from "components/Card/CardIcon.js";
import axios from 'axios';
import styles from "assets/jss/nextjs-material-dashboard/views/iconsStyle.js";
import { useSelector } from "react-redux";
import * as api from '../../config/api.js'
import Button from "components/CustomButtons/Button.js";
import LocalPharmacyIcon from '@material-ui/icons/LocalPharmacy';
import Modal from 'react-bootstrap/Modal';

const IP = "3.1.94.73:8082"
const ID = "6052e44860ab3d1d88673fb7"

function WaterChange() {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const [lastchange, setlastchange] = useState('')
  const [delay, setDelay] = useState('')
  const [showModal, setShowModal] = useState(false)

  const onHide = () => {
    setShowModal(false)
  }

  const changeWater = () => {
    
    var data = {
      DeviceID : "",
      LastChange : ""
    } 
    
    data.DeviceID = ID;
    data.LastChange = Date.now()

    var config = {
      method: 'put',
      url: `http://${IP}/api/waterchange/${ID}`,
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      
  var data = JSON.stringify({"WC":1});

  var config = {
  method: 'put',
  url: `http://${IP}/api/relays/${ID}`,
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

    })
    .catch(function (error) {
      console.log(error);
    });
  }

  useEffect(() => {
    const intervalId = setInterval(() => {  //assign interval to a variable to clear it.
      axios
      .get(api.apiGetChange)
      .then(response => {
      var data = response.data.LastChange;
     
      
      var date = new Date(data.slice(0,10));
      var dateNow = Date.now();
      setlastchange(data.slice(0,10))
      var diffTime = Math.abs(date - dateNow);
      var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 

      var dif = (7-diffDays);
      setDelay(dif);
      
      axios.get(api.getRelay)
      .then(response => {

        console.log(response.data.WC)
        if(response.data.WC ===1){
          setShowModal(true)
        } else {
          setShowModal(false)
        }

      })
      .catch(err => {


      })
      
      })
      .catch(err => {
        console.log("oppps", err);
      });

    }, 1000)
  
    return () => clearInterval(intervalId); //This is important
   
  }, [])

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card plain>
          <CardHeader plain color="primary">
            <h4 className={classes.cardTitleWhite}>Water Change Condition</h4>
            <p className={classes.cardCategoryWhite}>
              Change Water Every Week
              
            </p>
          </CardHeader>
          <CardBody>
              <GridItem xs={12} sm={12} md={6}>
              <Card>
              <CardHeader plain color = "info">
              <h4>Next Water Change In </h4>
              </CardHeader>
              <CardBody>
              <h4>{delay} Days</h4>
              
              </CardBody>
              <CardFooter stats>
             
              </CardFooter>
              </Card>
              
              </GridItem>

              <GridItem xs={12} sm={12} md={6}>
              <Card>
              <CardHeader plain color = "info">
              <h4>Last Water Change On</h4> 
              </CardHeader>
              <CardBody>
              <h4>{lastchange}</h4>
              </CardBody>
              <CardFooter>
              
              </CardFooter>
              </Card>
              
              </GridItem>
              
              
          </CardBody>
        </Card>
        <Modal
    show={showModal}
    onHide={()=> onHide()}
    size="sm"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  > <Card>
  <CardHeader color="primary">
  <h4>Water is Changing</h4>
  </CardHeader>
  <CardBody>
  Please Wait While Your GrowBro Fills Up
  </CardBody>
  </Card></Modal>
      </GridItem>
      <Button size ='lg' onClick = {changeWater} color = "primary" block round> Change Water</Button>
    </GridContainer>
  );
}

WaterChange.layout = Admin;

export default WaterChange;
