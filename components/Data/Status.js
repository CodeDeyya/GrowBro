import React, { useState, useEffect } from 'react';
import axios from "axios";

export default function Status() {

  const [status,setStatus] = useState([])

  useEffect(() => {
    axios
      .get("http://192.168.8.133:8082/api/data")
      .then(response => {
        
        console.log(response.data.Status);
      setStatus(response.data.Status);
				
				
      })
      .catch(err => {
        console.log("oppps", err);
      });
  }, [])

  return (
    <div>
      <h1>{status}</h1>
    </div>
  )
}
