import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import { Grid } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import InfoArea from "components/InfoArea/InfoArea.js";
import Typography from "@material-ui/core/Typography";
import img from "../assets/img/box.png";
import Image from "next/image";

const useStyles = makeStyles({
  root: {
    marginTop: "100px",

    minHeight: "650px",
  },
  section: {
    padding: "70px 0",
    textAlign: "center",
  },
  title: {
    textDecoration: "none",
    color: "#5AB9EA",
  },
  description: {
    color: "#00754b",
  },
  img: {
    objectFit: "cover",
  },
  box: {
    verticalAlign: "middle",
  },
});

function Features() {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <h3 className={classes.title}>
            Your Grow Bro Comes With Fully Automated Systems
          </h3>
        </Grid>
        <Grid item xs={12} md={4}>
          <Image
            src={img}
            alt="Features"
            layout="responsive"
            width={450}
            height={700}
          />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Lights"
                height="400"
                image="/bg.jpg"
                title="Automated Lighting"
              />
              <CardContent>
                <Typography
                  className={classes.title}
                  gutterBottom
                  variant="h5"
                  component="h2"
                >
                  Automated Lighting
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Grow Bro knows the lighting requirement for your plant. Just
                  plug and play and let the system take care of your plants
                  needs.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Lights"
                height="400"
                image="/bg.jpg"
                title="Automated Lighting"
              />
              <CardContent>
                <Typography
                  className={classes.title}
                  gutterBottom
                  variant="h5"
                  component="h2"
                >
                  Monitoring Sensors
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Our system has water temperature, ambient temperature,
                  humidity and water level sensors to monitor your plants and
                  ensure safe growth. The sensors are used for automation
                  purposes by Grow Bro. The readings of the sensor will be
                  logged for advanced users to optimize grow techniques.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Lights"
                height="400"
                image="/bg.jpg"
                title="Automated Lighting"
              />
              <CardContent>
                <Typography
                  className={classes.title}
                  gutterBottom
                  variant="h5"
                  component="h2"
                >
                  Water Chiller
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  To prevent growth of unwanted microbes in the water dedicated
                  for your plant our unique water chillers maintain a standard
                  water temperature. This component is important for tropical
                  countries. The automated system maintains the required water
                  temperature.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Lights"
                height="400"
                image="/bg.jpg"
                title="Automated Lighting"
              />
              <CardContent>
                <Typography
                  className={classes.title}
                  gutterBottom
                  variant="h5"
                  component="h2"
                >
                  Dashboard
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  See all information on your plant real time from anywhere.
                  Control the growbox real time from anywhere. It is the IOT of
                  plants.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default Features;
