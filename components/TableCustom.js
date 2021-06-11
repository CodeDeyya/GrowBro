import React , {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from "components/CustomButtons/Button.js";
import axios from "axios";
import * as api from '../config/api.js'
import { urlObjectKeys } from 'next/dist/next-server/lib/utils';
import { Container } from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs) {
  return { name, calories, fat, carbs };
}





export default function BasicTable() {
  const classes = useStyles();
  const [germination,setGermination] = useState(0);
  const [earlyveg,setEarlyVeg] = useState(0);
  const [midveg,setMidVeg] = useState(0);
  const [lateveg,setLateVeg] = useState(0);
  const [transition,setTransition] = useState(0);
  const [flower,setFlower] = useState(0);
  const [flushweek,setFlushWeek] = useState(0);

  const [germinationset,setGerminationSet] = useState(0);
  const [earlyvegset,setEarlyVegSet] = useState(0);
  const [midvegset,setMidVegSet] = useState(0);
  const [latevegset,setLateVegSet] = useState(0);
  const [transitionset,setTransitionSet] = useState(0);
  const [flowerset,setFlowerSet] = useState(0);
  const [flushweekset,setFlushWeekSet] = useState(0);

  const[weekNow, setWeekNow] = useState(0);

  const[germSelect, setGermSelect] = useState(false);
  const[earlyVegSelect, setEarlyVegSelect] = useState(false);
  const[midVegSelect, setMidVegSelect] = useState(false);
  const[lateVegSelect, setLateVegSelect] = useState(false);
  const[transitionSelect, setTransitionSelect] = useState(false);
  const[flowerSelect, setFlowerSelect] = useState(false);
  const[flushWeekSelect, setFlushWeekSelect] = useState(false);


  useEffect(() => {
    const intervalId = setInterval(() => {  //assign interval to a variable to clear it.
      axios
      .get(api.getStatus)
      .then(response => {
        var data = [];
        var newState = response.data
       
        newState.forEach(function(object){
          if(object._id.Status === 0){
          setGermination(object.Count);
          
          }
          if(object._id.Status === 1){
            setEarlyVeg(object.Count);
            }
            if(object._id.Status === 2){
              setMidVeg(object.Count);
              }
              if(object._id.Status === 3){
                setLateVeg(object.Count);
                }
                if(object._id.Status === 4){
                  setTransition(object.Count);
                  }
                  if(object._id.Status === 5){
                    setFlower(object.Count);
                    }
                    if(object._id.Status === 6){
                      setFlushWeek(object.Count);
                      }     
      });
        
      })
      .catch(err => {
        console.log("oppps", err);
      });

      axios
      .get(api.getLogger)
      .then(response => {
        var object = response.data
        setGerminationSet(object.Germination)
        setEarlyVegSet(object.EarlyVeg)
        setMidVegSet(object.MidVeg)
        setLateVegSet(object.LateVeg)
        setTransitionSet(object.Transition)
        setFlowerSet(object.Flower)
        setFlushWeekSet(object.Flush)
				
      })
      .catch(err => {
        console.log("oppps", err);
      });

      axios
      .get(api.dataAPI)
      .then(response => {
        var data = response.data
        console.log(data.Status)
        setWeekNow(data.Status)
        if(data.Status === 0){
          setGermSelect(true);
          setEarlyVegSelect(false);
          setMidVegSelect(false);
          setLateVegSelect(false);
          setTransitionSelect(false);
          setFlowerSelect(false);
          setFlushWeekSelect(false);
        }
        if(data.Status === 1){
          setGermSelect(false);
          setEarlyVegSelect(true);
          setMidVegSelect(false);
          setLateVegSelect(false);
          setTransitionSelect(false);
          setFlowerSelect(false);
          setFlushWeekSelect(false)
        }
        if(data.Status === 2){
          setGermSelect(false);
          setEarlyVegSelect(false);
          setMidVegSelect(true)
          setLateVegSelect(false)
          setTransitionSelect(false)
          setFlowerSelect(false)
          setFlushWeekSelect(false)
          
        }
        if(data.Status === 3){
          setGermSelect(false);
          setEarlyVegSelect(false);
          setMidVegSelect(false)
          setLateVegSelect(true)
          setTransitionSelect(false)
          setFlowerSelect(false)
          setFlushWeekSelect(false)
        }
        if(data.Status === 4){
          setGermSelect(false);
          setEarlyVegSelect(false);
          setMidVegSelect(false)
          setLateVegSelect(false)
          setTransitionSelect(true)
          setFlowerSelect(false)
          setFlushWeekSelect(false)
        }
        if(data.Status === 5){
          setGermSelect(false);
          setEarlyVegSelect(false);
          setMidVegSelect(false)
          setLateVegSelect(false)
          setTransitionSelect(false)
          setFlowerSelect(true)
          setFlushWeekSelect(false)
        }
        if(data.Status === 6){
          setGermSelect(false);
          setEarlyVegSelect(false);
          setMidVegSelect(false)
          setLateVegSelect(false)
          setTransitionSelect(false)
          setFlowerSelect(false)
          setFlushWeekSelect(true)
          console.log("ok")
        }
      })
      .catch(err => {
        console.log("oppps", err);
      });



    }, 1000)
  
    return () => clearInterval(intervalId); //This is important
   
  }, [])

  const resetHandler = () => {
    var data = JSON.stringify({"Germination":7,"EarlyVeg":7,"MidVeg":14,"LateVeg":7,"Transition":7,"Flower":14,"Flush":7});

var config = {
  method: 'put',
  url: 'http://localhost:8082/api/logger/6052e44860ab3d1d88673fb7',
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


  var dataq = `{"Status": 0}`
  
   var confi = {
    method: 'put',
    url: api.putID,
    headers: { 
      'Content-Type': 'application/json'
    },
    data : dataq
  };
  
  axios(confi)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });


  }



  const nextHandler = () => {
   if(weekNow<6)   {
   setWeekNow(weekNow+1)
   console.log("ammata")
   
  var statusNew = (weekNow+1);
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
  
    }
  
   const prevHandler = () => {
    if(weekNow>0)   {
      setWeekNow(weekNow-1)
      console.log("ammata")
      
     var statusNew = (weekNow-1);
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
   prevextendHandler();

    }


  const extendHandler = () => {

    if(germSelect){
      var count = germinationset+7
      console.log(count)
      
      var config = {
        method: 'put',
        url: 'http://localhost:8082/api/logger/6052e44860ab3d1d88673fb7',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : `{"Germination": ${count}}`
      };
      
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
      
    }

    if(earlyVegSelect){
      var count = earlyvegset+7
      console.log(count)
      
      var config = {
        method: 'put',
        url: 'http://localhost:8082/api/logger/6052e44860ab3d1d88673fb7',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : `{"EarlyVeg": ${count}}`
      };
      
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
      
    }

    if(midVegSelect){
      var count = midvegset+7
      console.log(count)
      
      var config = {
        method: 'put',
        url: 'http://localhost:8082/api/logger/6052e44860ab3d1d88673fb7',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : `{"MidVeg": ${count}}`
      };
      
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
      
    }

    if(lateVegSelect){
      var count = latevegset+7
      console.log(count)
      
      var config = {
        method: 'put',
        url: 'http://localhost:8082/api/logger/6052e44860ab3d1d88673fb7',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : `{"LateVeg": ${count}}`
      };
      
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
      
    }

    if(transitionSelect){
      var count = transitionset+7
      console.log(count)
      
      var config = {
        method: 'put',
        url: 'http://localhost:8082/api/logger/6052e44860ab3d1d88673fb7',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : `{"Transition": ${count}}`
      };
      
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
      
    }

    if(flowerSelect){
      var count = flowerset+7
      console.log(count)
      
      var config = {
        method: 'put',
        url: 'http://localhost:8082/api/logger/6052e44860ab3d1d88673fb7',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : `{"Flower": ${count}}`
      };
      
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
      
    }

    if(flushWeekSelect){
      var count = flushweekset+7
      console.log(count)
      console.log("ammata")
      var config = {
        method: 'put',
        url: 'http://localhost:8082/api/logger/6052e44860ab3d1d88673fb7',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : `{"Flush": ${count}}`
      };
      
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
      
    }

      
  }
 
  const prevextendHandler = () => {

    if(earlyVegSelect){
      var count = germinationset+7
      console.log(count)
      
      var config = {
        method: 'put',
        url: 'http://localhost:8082/api/logger/6052e44860ab3d1d88673fb7',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : `{"Germination": ${count}}`
      };
      
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
      
    }

    if(midVegSelect){
      var count = earlyvegset+7
      console.log(count)
      
      var config = {
        method: 'put',
        url: 'http://localhost:8082/api/logger/6052e44860ab3d1d88673fb7',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : `{"EarlyVeg": ${count}}`
      };
      
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
      
    }

    if(lateVegSelect){
      var count = midvegset+7
      console.log(count)
      
      var config = {
        method: 'put',
        url: 'http://localhost:8082/api/logger/6052e44860ab3d1d88673fb7',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : `{"MidVeg": ${count}}`
      };
      
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
      
    }

    if(transitionSelect){
      var count = latevegset+7
      console.log(count)
      
      var config = {
        method: 'put',
        url: 'http://localhost:8082/api/logger/6052e44860ab3d1d88673fb7',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : `{"LateVeg": ${count}}`
      };
      
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
      
    }

    if(flowerSelect){
      var count = transitionset+7
      console.log(count)
      
      var config = {
        method: 'put',
        url: 'http://localhost:8082/api/logger/6052e44860ab3d1d88673fb7',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : `{"Transition": ${count}}`
      };
      
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
      
    }

    if(flushWeekSelect){
      var count = flowerset+7
      console.log(count)
      
      var config = {
        method: 'put',
        url: 'http://localhost:8082/api/logger/6052e44860ab3d1d88673fb7',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : `{"Flower": ${count}}`
      };
      
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
      
    }

      
  }

  const nextextendHandler = () => {

    if(germSelect){
      var count = earlyvegset+7
      console.log(count)
      
      var config = {
        method: 'put',
        url: 'http://localhost:8082/api/logger/6052e44860ab3d1d88673fb7',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : `{"EarlyVeg": ${count}}`
      };
      
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
      
    }

    if(earlyVegSelect){
      var count = midvegset+7
      console.log(count)
      
      var config = {
        method: 'put',
        url: 'http://localhost:8082/api/logger/6052e44860ab3d1d88673fb7',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : `{"MidVeg": ${count}}`
      };
      
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
      
    }

    if(midVegSelect){
      var count = latevegset+7
      console.log(count)
      
      var config = {
        method: 'put',
        url: 'http://localhost:8082/api/logger/6052e44860ab3d1d88673fb7',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : `{"LateVeg": ${count}}`
      };
      
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
      
    }

    if(lateVegSelect){
      var count = transitionset+7
      console.log(count)
      
      var config = {
        method: 'put',
        url: 'http://localhost:8082/api/logger/6052e44860ab3d1d88673fb7',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : `{"Transition": ${count}}`
      };
      
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
      
    }

    if(transitionSelect){
      var count = flowerset+7
      console.log(count)
      
      var config = {
        method: 'put',
        url: 'http://localhost:8082/api/logger/6052e44860ab3d1d88673fb7',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : `{"Flower": ${count}}`
      };
      
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
      
    }

    if(flowerSelect){
      var count = flushweekset+7
      console.log(count)
      console.log("ammata")
      var config = {
        method: 'put',
        url: 'http://localhost:8082/api/logger/6052e44860ab3d1d88673fb7',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : `{"Flush": ${count}}`
      };
      
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
      
    }

      
  } 
  
  return (
    <div>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left"><h4>Grow Stage</h4></TableCell>
            <TableCell align="right"><h4>No of Days</h4></TableCell>
            <TableCell align="right"><h4>Total</h4></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
              <TableRow selected = {germSelect}>
              <TableCell component="th" scope="row">
                Germination
              </TableCell>
              <TableCell align="right">{germination}</TableCell>
              <TableCell align="right">{germinationset}</TableCell>
              <TableCell align="right"></TableCell>
              </TableRow>
              <TableRow selected = {earlyVegSelect}>
              <TableCell component="th" scope="row">
                Early Veg
              </TableCell>
              <TableCell align="right">{earlyveg}</TableCell>
              <TableCell align="right">{earlyvegset}</TableCell>
              <TableCell align="right"></TableCell>
              </TableRow>
              <TableRow selected = {midVegSelect}>
              <TableCell component="th" scope="row">
                Mid Veg
              </TableCell>
              <TableCell align="right">{midveg}</TableCell>
              <TableCell align="right">{midvegset}</TableCell>
              <TableCell align="right"></TableCell>
              </TableRow>
              <TableRow selected = {lateVegSelect}>
              <TableCell component="th" scope="row">
                Late Veg
              </TableCell>
              <TableCell align="right">{lateveg}</TableCell>
              <TableCell align="right">{latevegset}</TableCell>
              <TableCell align="right"></TableCell>
              </TableRow>

              <TableRow selected = {transitionSelect}>
              <TableCell component="th" scope="row">
                Transition
              </TableCell>
              <TableCell align="right">{transition}</TableCell>
              <TableCell align="right">{transitionset}</TableCell>
              <TableCell align="right"></TableCell>
              </TableRow>

              <TableRow selected = {flowerSelect}>
              <TableCell component="th" scope="row">
                Flower
              </TableCell>
              <TableCell align="right">{flower}</TableCell>
              <TableCell align="right">{flowerset}</TableCell>
              <TableCell align="right"></TableCell>
              </TableRow>

              <TableRow selected = {flushWeekSelect}>
              <TableCell component="th" scope="row">
                Flush Week
              </TableCell>
              <TableCell align="right">{flushweek}</TableCell>
              <TableCell align="right">{flushweekset}</TableCell>
              <TableCell align="right"></TableCell>
              </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    <div>
    <Button onClick = {prevHandler} color="primary" size= "lg">Prev</Button>
    <Button onClick = {extendHandler} color="info" size= "lg">Extend</Button>
    <Button onClick = {nextHandler} color="rose" size= "lg">Next</Button>
    <Button onClick = {resetHandler} color="warning" size= "lg">Reset</Button>
    
    </div>
    </div>
  );
}
