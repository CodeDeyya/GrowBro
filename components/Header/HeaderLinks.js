/*eslint-disable*/
import React, {useState} from 'react';
import Link from "next/link";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import { Button } from 'react-bootstrap';
import AddUser from '../AddUser.js'
import LoginButton from '../LoginButton.js'

import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'

import styles from "assets/jss/nextjs-material-kit/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);


export default function HeaderLinks(props) {
  const classes = useStyles();
 
  return (
<Container fluid>
    <Row>
    <Col sm={8}>
    </Col>
    <Col sm={2}>
    <LoginButton>
    </LoginButton>
    </Col>
    <Col sm={2}>
    <AddUser>
    </AddUser>
    </Col>
    </Row>
</Container>    
    // <Row>
    // <Col> 
    // <AddUser></AddUser>
    // </Col>
    // <Col md={{ span: 15, offset: 7 }}> 
    // <AddUser></AddUser>
    // </Col>
    // </Row>
    
  );
}
