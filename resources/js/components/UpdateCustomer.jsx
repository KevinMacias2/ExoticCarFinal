import React, { useEffect, useState } from 'react';
import { Form, Container, Row, Button } from 'react-bootstrap';
import axios from 'axios';
import { useParams } from "react-router";
import Stack from 'react-bootstrap/Stack';
import toast, { Toaster } from 'react-hot-toast';
import {Link} from 'react-router-dom';

const UpdateCustomer = (props) => {
  let { id } = useParams();
  console.log("id",id);

  const [ formValue, setformValue ] = useState({
      name: '' ,
      lastName: '',
      address: '',
      location: '',
      city: '',
      CP: '',
      phone: '',
      rolJob: '',
      salary: '',
      jobId: '',
  } )

  const [laborDatas, setLaborDatas] = useState([])
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("http://localhost/proyectCar/public/api/laborDatas")
      setLaborDatas(response.data)
    }
    getData()
  },[])

  useEffect ( ()=> {
    console.log("userEfects")
    getAllcustomerId()
  }, [])

  const getAllcustomerId = async () => {
    const response = await axios.get(`../../api/customer/` + id)
    console.log("response",response.data)
    if(response.data){
        setformValue({ ...formValue, 
          id: response.data.id,
          name: response.data.name,
          lastName: response.data.lastName,
          address: response.data.address,
          location: response.data.location,
          city: response.data.city,
          CP: response.data.CP,
          phone: response.data.phone,
          rolJob:response.data.rolJob,
          salary: response.data.salary,
          jobId: response.data.jobId,
         });
    }else{
      console.log("ID no encotrado")
    }
    
  }


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

    } else {
    

    }

    setValidated(true);

    if (e && e.preventDefault()) e.preventDefault();
    const formData = new FormData();
    formData.append("name", formValue.name)
    formData.append("lastName", formValue.lastName)
    formData.append("address", formValue.address)
    formData.append("location", formValue.location)
    formData.append("city", formValue.city)
    formData.append("CP", formValue.CP)
    formData.append("phone", formValue.phone)
    formData.append("rolJob", formValue.rolJob)
    formData.append("salary", formValue.salary)
    formData.append("jobId", formValue.jobId)


    axios.post("http://localhost/proyectCar/public/api/customer/"+id,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Accept': 'application/json'
        }
      }
    ).then(response => {
      toast.success('¡Successful Update!', {
        position: "top-center",
        style: { background: "#212121", color: "white", }
      })
     
    }).catch(error => {
      console.log(error);
      toast.error('Failed Upgrade!', {
        position: "top-center",
        style: { background: "#212121", color: "white", }

      })

    });
  };


  return (

<div className='back'>
 

    <Form noValidate validated={validated} onSubmit={handleSubmit}>

    <Stack>
      <Stack gap={1} className="col-md-4 mx-auto shadow-lg p-3 mb-5 mt-4 bg-dark text-white rounded">


        <Stack className=" shadow rounded bg-info">
          <Form.Label className=" fs-5 text-uppercase mx-auto fw-bold p-3 mt-1 mb-1 text-white "> Customer update</Form.Label>
        </Stack>


        <Form.Group className="mb-3">
                       
                       <Form.Label>Name of Customer</Form.Label>
                       <Form.Control type="text" placeholder="Name" required name="name" value={formValue.name} onChange={onChange} />
                       <Form.Text className="text-muted"></Form.Text>
                       <Form.Control.Feedback>¡Correct!</Form.Control.Feedback>

                       <Form.Control.Feedback type="invalid">
                           Please add the name
                       </Form.Control.Feedback>
                   </Form.Group> 

                   <Form.Group className="mb-3">
                       <Form.Label>Last name of Customer</Form.Label>
                       <Form.Control type="text" placeholder="Last name" required  name="lastName" value={formValue.lastName} onChange={onChange} />
                       <Form.Text className="text-muted">

                       </Form.Text>

                       <Form.Control.Feedback>¡Correct!</Form.Control.Feedback>

                       <Form.Control.Feedback type="invalid">
                            Please add the last name
                       </Form.Control.Feedback>

                   </Form.Group>

                   <Form.Group className="mb-3">
                       <Form.Label>Address</Form.Label>
                       <Form.Control type="text" placeholder="Address" required 
                       name="address" value={formValue.address} onChange={onChange} />
                       <Form.Text className="text-muted">
                       </Form.Text>

                       <Form.Control.Feedback>¡Correct!</Form.Control.Feedback>

                       <Form.Control.Feedback type="invalid">
                             Please add the address
                       </Form.Control.Feedback>
                   </Form.Group>

                   <Form.Group className="mb-3">
                       <Form.Label>Location</Form.Label>
                       <Form.Control type="text" placeholder="Location" required
                           name="location" value={formValue.location} onChange={onChange} />
                       <Form.Text className="text-muted">

                       </Form.Text>
                       <Form.Control.Feedback>¡Correct!</Form.Control.Feedback>
                       <Form.Control.Feedback type="invalid">
                             Please add the location
                       </Form.Control.Feedback>
                   </Form.Group>

                   <Form.Group className="mb-3">
                       <Form.Label>City</Form.Label>
                    
                       <Form.Control type="text" placeholder="City" required
                           name="city" value={formValue.city} onChange={onChange} />
                       <Form.Text className="text-muted">

                       </Form.Text>
                       <Form.Control.Feedback>¡Correct!</Form.Control.Feedback>

                       <Form.Control.Feedback type="invalid">
                             Please add the city
                       </Form.Control.Feedback>
                   </Form.Group>

                   <Form.Group className="mb-3">
                       <Form.Label>CP</Form.Label>
                       <Form.Control type="number" placeholder="CP" required
                           name="CP" value={formValue.CP} onChange={onChange} />
                       <Form.Text className="text-muted">

                       </Form.Text>
                       <Form.Control.Feedback>¡Correct!</Form.Control.Feedback>

                       <Form.Control.Feedback type="invalid">
                             Please add the CP
                       </Form.Control.Feedback>
                   </Form.Group>

                   <Form.Group className="mb-3">
                       <Form.Label>Phone</Form.Label>
                       <Form.Control type="number" placeholder="Phone" required
                           name="phone" value={formValue.phone} onChange={onChange} />
                       <Form.Text className="text-muted">

                       </Form.Text>
                       <Form.Control.Feedback>¡Correct!</Form.Control.Feedback>

                       <Form.Control.Feedback type="invalid">
                             Please add the phone
                       </Form.Control.Feedback>
                   </Form.Group>

                   
                   <Form.Group className="mb-3">
                       <Form.Label>Rol Job</Form.Label>
                       <Form.Control type="text" placeholder="RolJob" required
                           name="rolJob" value={formValue.rolJob} onChange={onChange} />
                       <Form.Text className="text-muted">

                       </Form.Text>
                       <Form.Control.Feedback>¡Correct!</Form.Control.Feedback>

                       <Form.Control.Feedback type="invalid">
                             Please add the rol job
                       </Form.Control.Feedback>
                   </Form.Group>

                   <Form.Group className="mb-3">
                       <Form.Label>Salary</Form.Label>
                       <Form.Control type="number" placeholder="Salary" required
                           name="salary" value={formValue.salary} onChange={onChange} />
                       <Form.Text className="text-muted">

                       </Form.Text>
                       <Form.Control.Feedback>¡Correct!</Form.Control.Feedback>

                       <Form.Control.Feedback type="invalid">
                             Please add the salary
                       </Form.Control.Feedback>
                   </Form.Group>


           <Form.Group className="mb-3" controlId="formBasicEmail">

               <Form.Label>Job ID</Form.Label>

               <Form.Select type="number" name="jobId" value={formValue.jobId} onChange={onChange}
                required aria-label="Default select example">
                   <option select disable value="">Select Job...</option>
                   {laborDatas.map((laborData) => (<option value={laborData.id} >{laborData.nameJob}
                   </option>))}
               </Form.Select>
               

               <Form.Control.Feedback>¡Correct!</Form.Control.Feedback>

               <Form.Control.Feedback type="invalid">
                   Please select job ID
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
          <Button variant="info" type="submit">Update</Button>
          <Toaster />
        </Stack>

        <Stack className=" mx-auto col-md-8">
        <Link to={`/proyectCar/public/customers/`} className='btn btn-primary'>Return</Link>
          <Toaster />
        </Stack>
        </Stack>
      </Stack>
    </Form>
    </div>
  );
}
export default UpdateCustomer;