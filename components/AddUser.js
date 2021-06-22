import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

import { addTask } from "../store/userinfo/userAction.js";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddUser = () => {
  const [showModal, setShowModal] = useState(false);
  const [deviceName, setDeviceName] = useState("");
  const [deviceId, setDeviceId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onHide = () => {
    setShowModal(false);
  };

  const handleDeviceNameChange = (e) => {
    setDeviceName(e.target.value);
  };
  const handleDeviceIdChange = (e) => {
    setDeviceId(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const onSubmit = async () => {
    console.log(deviceName, deviceId, email, password);

    var message = {
      DeviceName: "",
      DeviceId: "",
      Email: "",
      Password: "",
    };
    message.DeviceId = deviceId;
    message.DeviceName = deviceName;
    message.Email = email.toLowerCase();
    message.Password = password;

    var axios = require("axios");

    var configget = {
      method: "get",
      url: `http://3.1.94.73:8082/api/relays/${deviceId}`,
      headers: {},
    };
    if (deviceId === "") {
      toast.warning("Enter Device ID", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
      });
    } else {
      axios(configget)
        .then(function (response) {
          console.log(response.data);
          console.log(response.data.DeviceName);
          if (typeof response.data.DeviceName === "undefined") {
            console.log("BADU NA");
            if (deviceName === "") {
              console.log("Ko device nama");
              toast.warning("Enter Device Name", {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
              });
            } else {
              if (email === "") {
                toast.warning("Enter Valid Email", {
                  position: "bottom-center",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: false,
                  progress: undefined,
                });
              } else {
                if (password === "") {
                  toast.warning("Enter Valid Password", {
                    position: "bottom-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: false,
                    progress: undefined,
                  });
                } else {
                  var config = {
                    method: "put",
                    url: `http://3.1.94.73:8082/api/relays/${deviceId}`,
                    headers: {
                      "Content-Type": "application/json",
                    },
                    data: message,
                  };

                  axios(config)
                    .then(function (response) {
                      console.log(JSON.stringify(response.data));
                      toast.success("Device Registered", {
                        position: "bottom-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: false,
                        progress: undefined,
                      });
                    })
                    .catch(function (error) {
                      console.log(error);
                    });
                }
              }
            }
          } else {
            console.log("HUKANAWA DALA");
            toast.error("Device Already Registered", {
              position: "bottom-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: false,
              progress: undefined,
            });
          }
        })
        .catch(function (error) {
          console.log(error);
          console.log("wadiyan error");
          toast.error("Enter Valid Device ID", {
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
  };

  return (
    <div>
      <Button variant="danger" onClick={() => setShowModal(true)} round={true}>
        <i class="fas fa-seedling"></i>Start Grow
      </Button>

      <Modal
        show={showModal}
        onHide={() => onHide()}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <ToastContainer />
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form autoComplete="off" noValidate>
            <Form.Group controlId="devicename">
              <Form.Label>Device Name</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                value={deviceName}
                onChange={handleDeviceNameChange}
              />
            </Form.Group>
            <Form.Group controlId="deviceId">
              <Form.Label>Device ID</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                value={deviceId}
                onChange={handleDeviceIdChange}
              />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                value={email}
                onChange={handleEmailChange}
              />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder=""
                value={password}
                onChange={handlePasswordChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={() => onHide()}>
            Cancel
          </Button>
          <Button variant="secondary" onClick={() => onSubmit()}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddUser;
