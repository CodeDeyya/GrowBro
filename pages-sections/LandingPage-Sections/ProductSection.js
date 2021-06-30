import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import HttpsIcon from "@material-ui/icons/Https";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import Typography from "@material-ui/core/Typography";

import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";

const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: 500,
  },
  section: {
    padding: "70px 0",
    textAlign: "center",
  },
  title: {
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    color: "#5AB9EA",
  },
  description: {
    color: "#00754b",
  },
});

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={12}>
          <h3 className={classes.title}>Let's Grow</h3>
          <h5 className={classes.description}>
            GrowBro is inherently designed to fit novice gardeners or amateur
            horticulture enthusiasts or anyone who loves technology. However,
            clients who are more experienced in hydroponics can use GrowBro with
            much relative ease in comparison with alternatives in the market. So
            GrowBro is for both inexperienced and experienced growers alike.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Island Wide Delivery"
              description="Get your growbox delivered securely to your home. Overnight delivery by Growbro Team"
              icon={LocalShippingIcon}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="1-Year Warranty"
              description="We back all Grow Bro products with a 1 year warranty with technical support"
              icon={VerifiedUser}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Information Security"
              description="All your data is encrypted using standard SSL protocols"
              icon={HttpsIcon}
              iconColor="info"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
