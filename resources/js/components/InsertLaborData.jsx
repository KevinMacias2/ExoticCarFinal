import React, { useState } from 'react';
import { Form, Container, Row, Button } from 'react-bootstrap';
import axios from 'axios';
import Stack from 'react-bootstrap/Stack';
import toast, { Toaster } from 'react-hot-toast';

const InsertLaborData = () => {

    const [formValue, setformValue] = useState({
    
    nameJob: '',
    addressJob: '',
    phone: '',
    location: '',
  

  })


  const onChange = (e) => {
    e.persist();
    setformValue({ ...formValue, [e.target.name]: e.target.value });


  }

  const [validated, setValidated] = useState(false);
  const handleSubmit = (e) => {
   

    const form = e.currentTarget; 
    if (form.checkValidity() === false) {
   
      e.preventDefault();
      e.stopPropagation();


      toast.error('Failed Registration!', {
        position: "top-center", 
        style: { background: "#212121", color: "white", }

      })

    } else {

      toast.success('Successful Registration!', {
        position: "top-center",
        style: { background: "#212121", color: "white", }
      })

    }

    
    setValidated(true);

    if (e && e.preventDefault()) e.preventDefault();
    const formData = new FormData();
    formData.append("nameJob", formValue.nameJob)
    formData.append("addressJob", formValue.addressJob)
    formData.append("phone", formValue.phone)
    formData.append("location", formValue.location)

   
    axios.post("http://localhost/proyectCar/public/api/laborData",
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Accept': 'application/json'
        }
      }
    ).then(response => {
      console.log('response:');
      console.log(response);

    }).catch(error => {
      console.log(error);

    });
  };


  return (

    <div className='front'>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>

            <Stack>
                
                <Stack gap={1} className="col-md-4 mx-auto shadow-lg p-3 mb-5 mt-4 bg-dark text-white rounded">


                    <Stack className=" shadow rounded bg-success">
                    
                        <Form.Label className=" fs-5 text-uppercase mx-auto fw-bold p-3 mt-1 mb-1 text-white "> Add new Labor</Form.Label>
                    </Stack>
                   
                    <Form.Group className="mb-3">
                        <Form.Label>Job Name</Form.Label>
                       
                        <Form.Control type="text" placeholder="NameJob" required name="nameJob" value={formValue.nameJob} onChange={onChange} />
                        <Form.Text className="text-muted"></Form.Text>
                       
                        <Form.Control.Feedback>??Correct!</Form.Control.Feedback>
                      
                        <Form.Control.Feedback type="invalid">
                            Please add the name of the job
                        </Form.Control.Feedback>
                    </Form.Group> 

                    <Form.Group className="mb-3">
                        <Form.Label>Job Address</Form.Label>
                       
                        <Form.Control type="text" placeholder="AddressJob" required name="addressJob" value={formValue.addressJob} onChange={onChange} />
                        <Form.Text className="text-muted"></Form.Text>
                       
                        <Form.Control.Feedback>??Correct!</Form.Control.Feedback>
                      
                        <Form.Control.Feedback type="invalid">
                            Please add the address job
                        </Form.Control.Feedback>
                    </Form.Group> 

                    <Form.Group className="mb-3">
                        <Form.Label>Phone</Form.Label>
                       
                        <Form.Control type="number" placeholder="Phone" required name="phone" value={formValue.phone} onChange={onChange} />
                        <Form.Text className="text-muted"></Form.Text>
                       
                        <Form.Control.Feedback>??Correct!</Form.Control.Feedback>
                      
                        <Form.Control.Feedback type="invalid">
                            Please add the phone
                        </Form.Control.Feedback>
                    </Form.Group> 

                    <Form.Group className="mb-3">
                        <Form.Label>Location</Form.Label>
                       
                        <Form.Control type="text" placeholder="Location" required name="location" value={formValue.location} onChange={onChange} />
                        <Form.Text className="text-muted"></Form.Text>
                       
                        <Form.Control.Feedback>??Correct!</Form.Control.Feedback>
                      
                        <Form.Control.Feedback type="invalid">
                            Please add the location
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Check
                            required
                            label="The information is correct"
                            feedback="Indicates that the information is correct"
                            feedbackType="invalid"
                        />

                    </Form.Group>

                   
                    <Stack className=" mx-auto col-md-8">

                        <Button variant="success" type="submit">Register</Button>
                        <Toaster />
                    </Stack>
                </Stack >
            </Stack >
        </Form>
    </div>
  );
}
export default InsertLaborData;