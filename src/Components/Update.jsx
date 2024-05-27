import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, useParams } from 'react-router-dom';

const Update = () => {
  const { id } = useParams();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/${id}`);
        const userData = response.data;
        setEmail(userData.email);
        setName(userData.name);
        setAge(userData.age);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }
    fetchData();
  }, [id]);

  const handleEdit = async (e) => {
    e.preventDefault();
    try {
      const userData = { email, name, age };
      await axios.patch(`http://localhost:3000/${id}`, userData);
      toast.success("User updated successfully");
      setTimeout(()=>{
        navigate("/all")
      },3000)

    } catch (error) {
      console.error("Error updating user:", error);
      toast.error("Failed to update user");
    }
    setEmail("");
    setName("");
    setAge("");
  };

  return (
    <div>
      <ToastContainer />
      <h1>Update User</h1>
      <Form onSubmit={handleEdit}>
        <Form.Group className="mb-3" >
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter Your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        </Form.Group>
        
        <Form.Group className="mb-3">
          <Form.Label>Age</Form.Label>
          <Form.Control type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Update;
