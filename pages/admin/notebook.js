import React, { useState, useEffect } from 'react';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// layout for this page
import Admin from "layouts/Admin.js";
// core components

import BasicTable from '../../components/TableCustom.js'




function TableList2() {
  return (
    <div>
    
    <BasicTable></BasicTable>
    </div>
  );
}

TableList2.layout = Admin;

export default TableList2;
