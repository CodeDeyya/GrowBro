import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'

import {addTask} from '../store/userinfo/userAction.js'


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const LoginButton = () => {

  const[showModal,setShowModal] =useState(false);
  const[showModalUser,setShowModalUser] =useState(false);
  const[deviceName,setDeviceName] =useState('');
  const[deviceId,setDeviceId] = useState('');
  const[email,setEmail] = useState('');
  const[password,setPassword] = useState('');
  const[user, setUser] = useState('');


  
  const onHide = () => {
    setShowModal(false)
  }
  
  const handleDeviceNameChange =(e) => {
    setDeviceName(e.target.value)
  }
  const handleDeviceIdChange = (e) => {
    setDeviceId(e.target.value)
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }
  
  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      
      setUser(loggedInUser);
    }
  }, []);
  
  
const onSubmit = async() =>{
    console.log(email, password);
    var axios = require('axios');
    var data = '';
    
    var config = {
      method: 'get',
      url: `http://localhost:8082/api/userverification/?q=${email}`,
      headers: { },
      data : data
    };
    
    await axios(config)
    .then(function (response) {
      
      var message = response.data[0];
      
      if(message.Password === password){
        toast.success('User Logged In Successfully', {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
          });
          setUser(message.Email);
          localStorage.setItem('user',message.Email);
          console.log(message.Email);
          setShowModal(false);
          setShowModalUser(true);
      }else{
        console.log("Wrong Username or Password");
        toast.error('Wrong Username or Password', {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
          })
      }
    })
    .catch(function (error) {
      console.log(error);
      toast.error('Wrong Username or Password', {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        });
    });
    
}


  return (
   
    <div>
      <Button  variant="info" onClick={()=>setShowModal(true)} round ={true}>
      <i class="fas fa-user"></i>Login</Button>

    <Modal
    show={showModal}
    onHide={()=> onHide()}
    size="sm"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
  <ToastContainer />
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
        Sign In
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <Form autoComplete ="off" noValidate>
    <Form.Group controlId="email">  
      <Form.Label>Email</Form.Label>
      <Form.Control type="text" placeholder="" value ={email} onChange ={handleEmailChange} />
    </Form.Group>  
    <Form.Group controlId="password">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="" value ={password} onChange ={handlePasswordChange} />
    </Form.Group>
    
    </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="danger" onClick={()=>onHide()}>Cancel</Button>
      <Button variant ="secondary" onClick={()=>onSubmit()}>Submit</Button>
    </Modal.Footer>
  </Modal>

  <Modal
    show={showModalUser}
    onHide={()=> onHide()}
    size="sm"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
  <ToastContainer />
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
        Welcome
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
    {user}
    </Modal.Body>
    <Modal.Footer>
      <Button variant ="info" href = '/admin/dashboard'>Dashboard</Button>
      <Button variant="info" href = '/admin/controller'>Controller</Button>
      </Modal.Footer>
  </Modal>

  </div>
   
  );
}

export default LoginButton;
