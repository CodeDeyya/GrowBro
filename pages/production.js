import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import TextField from "@material-ui/core/TextField";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import axios from "axios";
import * as api from "../config/api.js";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
    marginTop: "100px",
  },
  heading: {
    textAlign: "center",
  },
  button: {
    background: "linear-gradient(45deg, purple 30%, pink 98%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
    marginTop: "100px",
  },
});

export default function Hook() {
  const classes = useStyles();
  const [done, setdone] = useState([]);
  const [submit, setSubmit] = useState("");

  const onSubmit = () => {
    setSubmit("submit");
    var data = JSON.stringify({
      R1: "OFF",
      R2: "OFF",
      R3: "OFF",
      R4: "OFF",
      R5: "OFF",
      R6: "OFF",
      R7: "OFF",
      R8: "OFF",
      R9: "OFF",
      R10: "OFF",
      R11: "OFF",
      Em: 0,
      Status: 0,
      WC: 0,
    });

    var config = {
      method: "post",
      url: api.getRelayOnly,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        var id = response.data._id;
        var data = JSON.stringify({
          DeviceID: id,
          Status: 0,
        });

        var config = {
          method: "post",
          url: api.apiAddData,
          headers: {
            "Content-Type": "application/json",
          },
          data: data,
        };

        axios(config)
          .then(function (response) {
            var data = JSON.stringify({
              DeviceID: id,
              Type: 0,
            });

            var config = {
              method: "post",
              url: api.apiAddLight,
              headers: {
                "Content-Type": "application/json",
              },
              data: data,
            };

            axios(config)
              .then(function (response) {
                var data = JSON.stringify({
                  DeviceID: id,
                  Germination: 7,
                  EarlyVeg: 7,
                  MidVeg: 14,
                  LateVeg: 7,
                  Transition: 7,
                  Flower: 14,
                  Flush: 7,
                });

                var config = {
                  method: "post",
                  url: api.apiAddLogger,
                  headers: {
                    "Content-Type": "application/json",
                  },
                  data: data,
                };

                axios(config)
                  .then(function (response) {
                    var data = JSON.stringify({
                      DeviceID: id,
                    });

                    var config = {
                      method: "post",
                      url: api.apiAddWater,
                      headers: {
                        "Content-Type": "application/json",
                      },
                      data: data,
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
              })
              .catch(function (error) {
                console.log(error);
              });
          })
          .catch(function (error) {
            console.log(error);
          });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    axios
      .get(api.getRelayOnly)
      .then((response) => {
        var data = [];
        var newState = response.data;
        console.log(newState);
        newState.forEach(function (object) {
          data.push([
            object._id,
            object.DeviceName,
            object.Email,
            object.Password,
            object.updated_date,
          ]);
        });

        setdone(data);
      })
      .catch((err) => {
        console.log("oppps", err);
      });

    setSubmit("");
  }, [submit]);

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={10}>
          <Card plain>
            <CardHeader plain color="primary">
              <h4 className={classes.heading}>Registered Devices</h4>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="primary"
                tableHead={[
                  "Id",
                  "DeviceName",
                  "Email",
                  "Password",
                  "updated_date",
                ]}
                tableData={done}
              />
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <Button className={classes.button} fullWidth onClick={onSubmit}>
            Add New Device
          </Button>
        </GridItem>
      </GridContainer>
    </div>
  );
}
