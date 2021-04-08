import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import OpacityIcon from '@material-ui/icons/Opacity';
import Warning from "@material-ui/icons/Warning";
import AcUnitIcon from '@material-ui/icons/AcUnit';
import EcoIcon from '@material-ui/icons/Eco';;
import Update from "@material-ui/icons/Update";
import LocalDrinkIcon from '@material-ui/icons/LocalDrink';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// layout for this page
import Admin from "layouts/Admin.js";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Tasks from "components/Tasks/Tasks.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import { bugs, website, server } from "variables/general.js";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart,
} from "variables/charts.js";

import styles from "assets/jss/nextjs-material-dashboard/views/dashboardStyle.js";

function Dashboard() {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  return (
    <div>
      
      <GridContainer>
      <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <EcoIcon />
              </CardIcon>
              <p className={classes.cardCategory}>Plant Level</p>
              <h3 className={classes.cardTitle}>Germination</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />
                Okay
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <AcUnitIcon />
              </CardIcon>
              <p className={classes.cardCategory}>Water Temperature</p>
              <h3 className={classes.cardTitle}>
                10<small>°C</small>
              </h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Danger>
                  <Warning />
                </Danger>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  Check Water Cooler
                </a>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="rose" stats icon>
              <CardIcon color="rose">
                <WbSunnyIcon />
              </CardIcon>
              <p className={classes.cardCategory}>Ambient Temperature</p>
              <h3 className={classes.cardTitle}>30<small>°C</small></h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
              <Update />
                All is cool
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="danger" stats icon>
              <CardIcon color="danger">
                <OpacityIcon/>
              </CardIcon>
              <p className={classes.cardCategory}>Relative Humidity</p>
              <h3 className={classes.cardTitle}>75</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
              <Update />
                Perfect
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <LocalDrinkIcon />
              </CardIcon>
              <p className={classes.cardCategory}>Water Level</p>
              <h3 className={classes.cardTitle}>High</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />
                Okay
              </div>
            </CardFooter>
          </Card>
          </GridItem>
          
      </GridContainer>
      
    </div>
  );
}

Dashboard.layout = Admin;

export default Dashboard;
