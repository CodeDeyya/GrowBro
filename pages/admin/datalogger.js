import React, { useState, useEffect } from 'react';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// layout for this page
import Admin from "layouts/Admin.js";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import axios from "axios";
import Status from "components/Data/Status.js";
import Button from "components/CustomButtons/Button.js";
import { Done } from '@material-ui/icons';
import * as api from '../../config/api.js'


const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0",
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF",
    },
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1",
    },
  },
};


function TableList() {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const [done,setdone] = useState([]);
  const [status,setStatus] = useState([]);
  const [state, setState] = useState();
  useEffect(() => {
    axios
      .get(api.getLogs)
      .then(response => {
        var data = [];
        var newState = response.data
        console.log(newState);
        newState.forEach(function(object){
          data.push([object._id.year, object._id.month, object._id.day,object._id.hour,object.avgAtemp,object.avgWtemp, object.avgWaterLevel, object.avgRhumidity]);
          console.log(data);
      });

      setdone(data);
				
				
      })
      .catch(err => {
        console.log("oppps", err);
      });

      axios
      .get(api.dataAPI)
      .then(response => {
      var stats = response.data[0]
      console.log(stats.Status);
      setState(stats.Status);
      
      if(stats.Status === 0){
        setStatus("Germination");
      }
      if(stats.Status === 1){
        setStatus("Early Veg")
      }
      if(stats.Status === 2){
        setStatus("Mid Veg")
      }
      if(stats.Status === 3){
        setStatus("Late Veg")
      }
      if(stats.Status === 4){
        setStatus("Transition")
      }
      if(stats.Status === 5){
        setStatus("Early Flower 1")
      }
      if(stats.Status === 6){
        setStatus("Early Flower 2")
      }
      if(stats.Status === 7){
        setStatus("Mid Flower 1")
      }
      if(stats.Status === 8){
        setStatus("Mid Flower 2")
      }
      if(stats.Status === 9){
        setStatus("Late Flower 1")
      }
      if(stats.Status === 10){
        setStatus("Late Flower 2")
      }
      if(stats.Status === 11){
        setStatus("Flush Week")
      }
      
      // setStatus(stats.Status);
				
				
      })
      .catch(err => {
        console.log("oppps", err);
      });


  }, [])
  
  const nextHandler = () => {
  console.log(state);
 if(state<11)   {
 setState(state+1)
 console.log("ammata")
 
var statusNew = (state+1);
var data = `{"Status": ${statusNew}}`

 var config = {
  method: 'put',
  url: api.putID,
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
});}


if(statusNew === 0){
  setStatus("Germination");
}
if(statusNew === 1){
  setStatus("Early Veg")
}
if(statusNew === 2){
  setStatus("Mid Veg")
}
if(statusNew === 3){
  setStatus("Late Veg")
}
if(statusNew === 4){
  setStatus("Transition")
}
if(statusNew === 5){
  setStatus("Early Flower 1")
}
if(statusNew === 6){
  setStatus("Early Flower 2")
}
if(statusNew === 7){
  setStatus("Mid Flower 1")
}
if(statusNew=== 8){
  setStatus("Mid Flower 2")
}
if(statusNew === 9){
  setStatus("Late Flower 1")
}
if(statusNew === 10){
  setStatus("Late Flower 2")
}
if(statusNew === 11){
  setStatus("Flush Week")
}

  }

 const prevHandler = () => {
  if(state>0){
  setState(state-1)
  
var statusNew = (state-1);
var data = `{"Status": ${statusNew}}`

 var config = {
  method: 'put',
  url: api.putID,
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
  }

if(statusNew === 0){
  setStatus("Germination");
}
if(statusNew === 1){
  setStatus("Early Veg")
}
if(statusNew === 2){
  setStatus("Mid Veg")
}
if(statusNew === 3){
  setStatus("Late Veg")
}
if(statusNew === 4){
  setStatus("Transition")
}
if(statusNew === 5){
  setStatus("Early Flower 1")
}
if(statusNew === 6){
  setStatus("Early Flower 2")
}
if(statusNew === 7){
  setStatus("Mid Flower 1")
}
if(statusNew=== 8){
  setStatus("Mid Flower 2")
}
if(statusNew === 9){
  setStatus("Late Flower 1")
}
if(statusNew === 10){
  setStatus("Late Flower 2")
}
if(statusNew === 11){
  setStatus("Flush Week")
}


  }
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card plain>
          <CardHeader plain color="primary">
            <h4 className={classes.cardTitleWhite}>
              Data Logger
            </h4>
            <p className={classes.cardCategoryWhite}>
              {status}
            </p>
            <Status></Status>
            <Button onClick ={prevHandler} color ="info" size = "sm" >Prev Week</Button>
            <Button onClick = {nextHandler} color ="warning" size = "sm" >Next Week</Button>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["Year", "Month", "Day", "Hour", "Ambient Temp", "Water Temp", "Water Level", "Humidity"]}
              tableData={done}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}

TableList.layout = Admin;

export default TableList;
