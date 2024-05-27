import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';


const Create = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [error, setError] = useState("");
    console.log(name, email, age);

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        console.log(e.target.value)
        e.preventDefault();
        const adduser = { email, name, age };
        if (!name || !email || !age) {
            toast.error("All fields are required");
            return; 
        }
    
        try {
            const Response = await axios.post("http://localhost:3000/", adduser);
            console.log(Response.data, "Response");
            toast.success("User added successfully");
            setTimeout(() => {
                navigate('/all');
            }, 3000); // Delay navigation for 3 seconds
        } catch (err) {
            console.log("Error:", err);
            setError(err.message);
            toast.error("Failed to add user");
        }
        setEmail("");
        setName("");
        setAge("");
    };
    

    return (
        <div>
            <ToastContainer />
            <h1 className='text-center'>Enter a Data</h1>
            <Form onSubmit={handleSubmit}>
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

export default Create;
