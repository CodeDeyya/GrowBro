import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from "components/CustomButtons/Button.js";
import BasicTable from '../../components/TableCustom.js'
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs) {
  return { name, calories, fat, carbs };
}

const rows = [
  createData('Germination', 159, 6.0, 24 ),
  createData('Early Veg', 237, 9.0, 37),
  createData('Mid Veg', 262, 16.0, 24),
  createData('Late Veg', 305, 3.7, 67),
  createData('Transition', 356, 16.0, 49),
  createData('Early Flower 1', 356, 16.0, 49),
  createData('Early Flower 2', 356, 16.0, 49),
  createData('Mid Flower 1', 356, 16.0, 49),
  createData('Mid Flower 2', 356, 16.0, 49),
  createData('Late Flower 1', 356, 16.0, 49),
  createData('Late Flower 2', 356, 16.0, 49),
  createData('Flush Week', 356, 16.0, 49),
  
];

export default function NoteBook() {
  const classes = useStyles();
  console.log(rows);
  return (
    <div>
    <BasicTable></BasicTable>
    </div>
  );
}
