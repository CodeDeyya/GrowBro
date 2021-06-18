import React, { useState, useEffect } from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import OpacityIcon from "@material-ui/icons/Opacity";
import Warning from "@material-ui/icons/Warning";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import EcoIcon from "@material-ui/icons/Eco";
import Update from "@material-ui/icons/Update";
import LocalDrinkIcon from "@material-ui/icons/LocalDrink";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
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
import Light from "components/Light.js";

import { bugs, website, server } from "variables/general.js";
import axios from "axios";
import * as api from "../../config/api.js";
import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart,
} from "variables/charts.js";

import styles from "assets/jss/nextjs-material-dashboard/views/dashboardStyle.js";

function Dashboard() {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const [state, setState] = useState();
  const [status, setStatus] = useState();
  const [waterTemp, setWaterTemp] = useState();
  const [ambientTemp, setAmbientTemp] = useState();
  const [relativeHumidity, setRelativeHumidity] = useState();
  const [waterLevel, setWaterLevel] = useState();

  const [germination, setGermination] = useState(0);
  const [earlyveg, setEarlyVeg] = useState(0);
  const [midveg, setMidVeg] = useState(0);
  const [lateveg, setLateVeg] = useState(0);
  const [transition, setTransition] = useState(0);
  const [flower, setFlower] = useState(0);
  const [flushweek, setFlushWeek] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      //assign interval to a variable to clear it.
      axios
        .get(api.dataAPI)
        .then((response) => {
          var data = response.data;
          setState(data.Status);
          setWaterTemp(data.Wtemp);
          setAmbientTemp(data.Atemp);
          setRelativeHumidity(data.Rhumidity);
          setWaterLevel(data.WaterLevel);
          if (data.Status === 0) {
            setStatus("Germination");
          }
          if (data.Status === 1) {
            setStatus("Early Veg");
          }
          if (data.Status === 2) {
            setStatus("Mid Veg");
          }
          if (data.Status === 3) {
            setStatus("Late Veg");
          }
          if (data.Status === 4) {
            setStatus("Transition");
          }
          if (data.Status === 5) {
            setStatus("Early Flower 1");
          }
          if (data.Status === 6) {
            setStatus("Early Flower 2");
          }
          if (data.Status === 7) {
            setStatus("Mid Flower 1");
          }
          if (data.Status === 8) {
            setStatus("Mid Flower 2");
          }
          if (data.Status === 9) {
            setStatus("Late Flower 1");
          }
          if (data.Status === 10) {
            setStatus("Late Flower 2");
          }
          if (data.Status === 11) {
            setStatus("Flush Week");
          }
        })
        .catch((err) => {
          console.log("oppps", err);
        });

      axios
        .get(api.getStatus)
        .then((response) => {
          var data = [];
          var newState = response.data;

          newState.forEach(function (object) {
            if (object._id.Status === 0) {
              setGermination(object.Count);
            }
            if (object._id.Status === 1) {
              setEarlyVeg(object.Count);
            }
            if (object._id.Status === 2) {
              setMidVeg(object.Count);
            }
            if (object._id.Status === 3) {
              setLateVeg(object.Count);
            }
            if (object._id.Status === 4) {
              setTransition(object.Count);
            }
            if (object._id.Status === 5) {
              setFlower(object.Count);
            }
            if (object._id.Status === 6) {
              setFlushWeek(object.Count);
            }
          });
        })
        .catch((err) => {
          console.log("oppps", err);
        });
    }, 1000);

    return () => clearInterval(intervalId); //This is important
  }, []);

  if (status === "Germination") {
  }
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={6} md={12}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <EcoIcon />
              </CardIcon>
              <p className={classes.cardCategory}>Level</p>
              <h3 className={classes.cardTitle}>{status}</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />
                {germination}
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
                {waterTemp}
                <small>°C</small>
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
              <h3 className={classes.cardTitle}>
                {ambientTemp}
                <small>°C</small>
              </h3>
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
                <OpacityIcon />
              </CardIcon>
              <p className={classes.cardCategory}>Relative Humidity</p>
              <h3 className={classes.cardTitle}>{relativeHumidity}</h3>
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
              <h3 className={classes.cardTitle}>{waterLevel}</h3>
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
