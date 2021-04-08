import React, {useState} from 'react';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'

import 'bootstrap/dist/css/bootstrap.min.css';



const AddTask = () => {
  const[showModal,setShowModal] =useState(false);
  const[taskName,setTaskName] = useState('');
  const[taskStatus,setTaskStatus] = useState('pending');
  const handleTaskNameChange = (e) => {
    // console.log(e.target.value);
    setTaskName(e.target.value)
  }
  const handleRadioChange = (e) => {
    // console.log(e.target.value);
    setTaskStatus(e.target.value)
  }
  const onHide = () => {
    setShowModal(false)
  }
  const onSubmit = () =>{
    console.log(taskName,taskStatus);
  }
  return (
   <Container>
    <Row className="mt-5">
      <Col md={{ span: 2, offset: 10 }}>
      <Button variant="secondary" onClick={()=>setShowModal(true)}><i className="fas fa-plus-square"></i> Add Task  </Button>
      </Col>
    </Row>
    
      <Modal
        show={showModal}
        onHide={()=> onHide()}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form autoComplete ="off" noValidate>
        <Form.Group controlId="taskname">
          <Form.Label>Task Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Task Name" value = {taskName} onChange={handleTaskNameChange}/>
        </Form.Group>
        <fieldset>
    <Form.Group as={Row} onChange ={handleRadioChange}>
      <Form.Label as="legend" column sm={2}>
        Task Status
      </Form.Label>
      <Col sm={10}>
      <Form.Check
      type="radio"
      label="Pending"
      name="taskstatus"
      id="pending"
      value="pending"
      defaultChecked
    />
        <Form.Check
          type="radio"
          label="Completed"
          name="taskstatus"
          id="completed"
          value = "completed"
        />
        
        
      </Col>
    </Form.Group>
            </fieldset>

        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={()=>onHide()}>Cancel</Button>
          <Button variant ="secondary" onClick={()=>onSubmit()}>Submit</Button>
        </Modal.Footer>
      </Modal>
    
   </Container>
  );
}

export default AddTask;
