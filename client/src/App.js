import React, {useState} from 'react';
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Form, Button } from "react-bootstrap";
import axios from 'axios';

function App() {

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    date: ""
  });

  const {name, email, phone, date} = user;

  const handleChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value})
  }


  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const add = await axios.post('http://localhost:8800/appointment/add', {name, email, phone, date});
      console.log(add);
      if(add.data.status) {
        alert(add.data.message)
      }
      else {
        alert('Appointment could not be added')
      }
    } catch (error) {
      console.log(error);
      alert('Something went wrong')
    }
  }

  return (
    <Form className="card" style={{ backgroundColor: "violet" }}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Name" name="name" value={name} onChange={handleChange} required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="email" value={email} onChange={handleChange} required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPhone">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="phone" placeholder="Enter 10-digit phone no." name="phone" value={phone} onChange={handleChange} required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicDate">
        <Form.Label>Date</Form.Label>
        <Form.Control type="date" placeholder="Date" name="date" value={date} onChange={handleChange} required/>
      </Form.Group>

      <Button variant="primary" type="submit" onClick={handleClick}>
        Add new appointment
      </Button>
    </Form>
  );
}

export default App;
