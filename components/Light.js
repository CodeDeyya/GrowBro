import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import * as API from "../config/api";
import axios from "axios";
import { forEach } from "lodash";

const ID = "6052e44860ab3d1d88673fb7";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect() {
  const classes = useStyles();
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
    var data = JSON.stringify({
      DeviceID: ID,
      Type: event.target.value,
    });
    var config = {
      method: "put",
      url: API.apiLight,
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
  };

  useEffect(() => {
    var config = {
      method: "get",
      url: API.apiLight,
      headers: {},
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
        var mes = response.data;
        mes.forEach((object) => {
          if (object.DeviceID === ID) {
            console.log("Type", object.Type);
            setAge(object.Type);
          }
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Plant Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value={0}>Photoperiod</MenuItem>
          <MenuItem value={1}>Non PhotoPeriod</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
