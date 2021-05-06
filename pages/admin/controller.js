import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// layout for this page
import Admin from "layouts/Admin.js";

//icons
import LocalPharmacyIcon from '@material-ui/icons/LocalPharmacy';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import FormatColorResetIcon from '@material-ui/icons/FormatColorReset';
import InvertColorsIcon from '@material-ui/icons/InvertColors';
import BlurOnIcon from '@material-ui/icons/BlurOn';
import WbIncandescentRoundedIcon from '@material-ui/icons/WbIncandescentRounded';

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardFooter from "components/Card/CardFooter.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import avatar from "assets/img/faces/marc.jpg";
import Relay1 from "components/api/Relay1.js";
import Relay22 from "components/api/Relay2.js";
import Relay3 from "components/api/Relay3.js";
import Chiller1 from "components/api/Relay4.js";
import Chiller2 from "components/api/Relay5.js";
import Air from "components/api/Relay6.js";
import Out from "components/api/Relay7.js";
import RelayD from "components/api/Relay8.js";
import RelayF from "components/api/Relay9.js";
import Aero from "components/api/Relay10.js";
import Light from "components/api/Relay11.js";


const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
  },
};

function UserProfile() {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  return (
    <div>
    <GridContainer> 
    <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
              <LocalPharmacyIcon />  
              </CardIcon>
            </CardHeader>
              <CardBody>
                <Relay1 />
              </CardBody>
             <CardFooter stats>
             <h3>Nuet1</h3>
             </CardFooter> 
          </Card>
    </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="rose" stats icon>
              <CardIcon color="rose">
              <LocalPharmacyIcon />  
              </CardIcon>
              </CardHeader>
              <CardBody>
              <Relay22 />
              </CardBody>
            <CardFooter stats>
              <h3>Nuet2</h3>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
              <LocalPharmacyIcon />  
              </CardIcon>
              </CardHeader>
              <CardBody>
              <Relay3 />
              </CardBody>
            
            <CardFooter stats>
              <h3>Nuet3</h3>
            </CardFooter>
          </Card>
        </GridItem>
    </GridContainer>

    <GridContainer> 
    <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
              <AcUnitIcon />  
              </CardIcon>
              </CardHeader>
              <CardBody>
              <Chiller1 />
              </CardBody>
            
            <CardFooter stats>
              <h3>Chiller1</h3>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="rose" stats icon>
              <CardIcon color="rose">
              <AcUnitIcon />  
              </CardIcon>
              </CardHeader>
              <CardBody>
              <Chiller2 />
              </CardBody>
            
            <CardFooter stats>
              <h3>Chiller2</h3>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>

      <GridContainer> 
    <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
              <RemoveIcon />  
              </CardIcon>
              </CardHeader>
              <CardBody>
              <Air/>
              </CardBody>
            
            <CardFooter stats>
              <h3>Exhaust</h3>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="rose" stats icon>
              <CardIcon color="rose">
              <AddIcon />  
              </CardIcon>
              </CardHeader>
              <CardBody>
              <Out />
              </CardBody>
            
            <CardFooter stats>
              <h3>Air In</h3>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>

      <GridContainer> 
    <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
              <FormatColorResetIcon />  
              </CardIcon>
              </CardHeader>
              <CardBody>
              <RelayD />
              </CardBody>
            
            <CardFooter stats>
              <h3>Drain</h3>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="rose" stats icon>
              <CardIcon color="rose">
              <InvertColorsIcon />  
              </CardIcon>
              </CardHeader>
              <CardBody>
              <RelayF />
              </CardBody>
            
            <CardFooter stats>
              <h3>Fill</h3>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>

      <GridContainer> 
    <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
              <BlurOnIcon />  
              </CardIcon>
              </CardHeader>
              <CardBody>
              <Aero />
              </CardBody>
            
            <CardFooter stats>
              <h3>Aerator</h3>
            </CardFooter>
          </Card>
        </GridItem>
        
      </GridContainer>

      <GridContainer> 
    <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
              <WbIncandescentRoundedIcon />  
              </CardIcon>
              </CardHeader>
              <CardBody>
              <Light />
              </CardBody>
            
            <CardFooter stats>
              <h3>Grow Light</h3>
            </CardFooter>
          </Card>
        </GridItem>
        
      </GridContainer>


    </div>
  );
}

UserProfile.layout = Admin;

export default UserProfile;
