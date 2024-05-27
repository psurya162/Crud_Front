import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Read = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [notify, setNotify] = useState("Loading..."); // Initial state while fetching data

  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/");
      setData(response.data);
      if (response.data.length > 0) {
        setNotify("Data is available");
      } else {
        setNotify("No data available");
        
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setNotify("Error fetching data");
    }
  }

  useEffect(() => {
    getData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/${id}`);
      toast("Data Deleted Successfully")

      getData(); // Refresh data after deletion
      setTimeout(()=>{
        navigate("/")
      },2000)
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  }

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  }

  return (
    <>
      <ToastContainer />
      <h1>Read Section</h1>
      <h2>{notify}</h2>
      <div className='row'>
        {data.map((user) => (
          <div key={user._id} className='col-2'>
            <Card>
              <Card.Body>
                <Card.Title>{user.email}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{user.name}</Card.Subtitle>
                <Card.Text>{user.age}</Card.Text>
                <Button variant="danger" onClick={() => handleDelete(user._id)}>Delete</Button>
                <Button variant='success' onClick={() => handleEdit(user._id)}>Edit</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
}

export default Read;
