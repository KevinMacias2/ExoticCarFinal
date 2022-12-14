import React, { useEffect, useState } from 'react';
import { Form, Container, Row, Button } from 'react-bootstrap';
import axios from 'axios';
import { useParams } from "react-router";
import Stack from 'react-bootstrap/Stack';
import toast, { Toaster } from 'react-hot-toast';
import {Link} from 'react-router-dom';

const UpdateCar = (props) => {
  let { id } = useParams();
  console.log("id",id);

  const [ formValue, setformValue ] = useState ({
      id: '',
      model:  '',
      type:  '',
      year: '',
      color: '',
      price: '',
      km: '',
      source: '',
      equipment: '',
      numSales: '',
      observation: '',
      brandId: '',

  } )

  const [brands, setBrands] = useState([])
    useEffect(() => {
      const getData = async () => {
        const response = await axios.get("http://localhost/proyectCar/public/api/brandss")
        setBrands(response.data)
      }
      getData()
    },[])

  useEffect ( ()=> {
    console.log("userEfects")
    getAllcarId()
  }, [])

  const getAllcarId = async () => {
    const response = await axios.get(`../../api/car/` + id)
    console.log("response",response.data)
    if(response.data){
        setformValue({ ...formValue, 
          id: response.data.id,
          model:response.data.model,
          type: response.data.type,
          year: response.data.year,
          color:response.data.color,
          price: response.data.price,
          km: response.data.km,
          source: response.data.source,
          equipment:response.data.equipment,
          numSales: response.data.numSales,
          observation: response.data.observation,
          brandId: response.data.brandId,
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
    formData.append("model", formValue.model)
    formData.append("type", formValue.type)
    formData.append("year", formValue.year)
    formData.append("color", formValue.color)
    formData.append("price", formValue.price)
    formData.append("km", formValue.km)
    formData.append("source", formValue.source)
    formData.append("equipment", formValue.equipment)
    formData.append("numSales", formValue.numSales)
    formData.append("observation", formValue.observation)
    formData.append("brandId", formValue.brandId)
   
    axios.post("http://localhost/proyectCar/public/api/car/"+id,
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
          <Form.Label className=" fs-5 text-uppercase mx-auto fw-bold p-3 mt-1 mb-1 text-white "> Car Update</Form.Label>
        </Stack>


                    <Form.Group className="mb-3">
                        <Form.Label>Model</Form.Label>
                        <Form.Control type="text" placeholder="Model" required  name="model" value={formValue.model} onChange={onChange} />
                        <Form.Text className="text-muted">

                        </Form.Text>

                        <Form.Control.Feedback>¡Correct!</Form.Control.Feedback>

                        <Form.Control.Feedback type="invalid">
                             Please add the model
                        </Form.Control.Feedback>

                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Type</Form.Label>
                        <Form.Control type="text" placeholder="Type" required name="type" value={formValue.type} onChange={onChange} />
                        <Form.Text className="text-muted">
                        </Form.Text>

                        <Form.Control.Feedback>¡Correct!</Form.Control.Feedback>

                        <Form.Control.Feedback type="invalid">
                              Please add the type
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Year</Form.Label>
                        <Form.Control type="text" placeholder="Year" required
                            name="year" value={formValue.year} onChange={onChange} />
                        <Form.Text className="text-muted">

                        </Form.Text>
                        <Form.Control.Feedback>¡Correct!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                              Please add the year
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Color</Form.Label>
                        {/*Se pone en "type" el tipo de dato "number" para que únicamente permita el ingreso 
                        de números*/}
                        <Form.Control type="text" placeholder="Color" required
                            name="color" value={formValue.color} onChange={onChange} />
                        <Form.Text className="text-muted">

                        </Form.Text>
                        <Form.Control.Feedback>¡Correct!</Form.Control.Feedback>

                        <Form.Control.Feedback type="invalid">
                              Please add the color
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="number" placeholder="Price" required
                            name="price" value={formValue.price} onChange={onChange} />
                        <Form.Text className="text-muted">

                        </Form.Text>
                        <Form.Control.Feedback>¡Correct!</Form.Control.Feedback>

                        <Form.Control.Feedback type="invalid">
                              Please add the price
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Km</Form.Label>
                        <Form.Control type="number" placeholder="Km" required
                            name="km" value={formValue.km} onChange={onChange} />
                        <Form.Text className="text-muted">

                        </Form.Text>
                        <Form.Control.Feedback>¡Correct!</Form.Control.Feedback>

                        <Form.Control.Feedback type="invalid">
                              Please add the km
                        </Form.Control.Feedback>
                    </Form.Group>

                    
                    <Form.Group className="mb-3">
                        <Form.Label>Source</Form.Label>
                        <Form.Control type="text" placeholder="Source" required
                            name="source" value={formValue.source} onChange={onChange} />
                        <Form.Text className="text-muted">

                        </Form.Text>
                        <Form.Control.Feedback>¡Correct!</Form.Control.Feedback>

                        <Form.Control.Feedback type="invalid">
                              Please add the source
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Equipment</Form.Label>
                        <Form.Control type="text" placeholder="Equipment" required
                            name="equipment" value={formValue.equipment} onChange={onChange} />
                        <Form.Text className="text-muted">

                        </Form.Text>
                        <Form.Control.Feedback>¡Correct!</Form.Control.Feedback>

                        <Form.Control.Feedback type="invalid">
                              Please add the equipment
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Number of Sales</Form.Label>
                        <Form.Control type="number" placeholder="NumSales" required
                            name="numSales" value={formValue.numSales} onChange={onChange} />
                        <Form.Text className="text-muted">

                        </Form.Text>
                        <Form.Control.Feedback>¡Correct!</Form.Control.Feedback>

                        <Form.Control.Feedback type="invalid">
                              Please add the number of sales
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>observation</Form.Label>
                        <Form.Control type="text" placeholder="Observation" required
                            name="observation" value={formValue.observation} onChange={onChange} />
                        <Form.Text className="text-muted">

                        </Form.Text>
                        <Form.Control.Feedback>¡Correct!</Form.Control.Feedback>

                        <Form.Control.Feedback type="invalid">
                              Please add the obsertavion
                        </Form.Control.Feedback>
                    </Form.Group>

        

            <Form.Group className="mb-3" controlId="formBasicEmail">

                <Form.Label>Brand ID</Form.Label>

                <Form.Select type="number" name="brandId" value={formValue.brandId} onChange={onChange} required aria-label="Default select example">
                    <option select disable value="">Select brand ID...</option>
                    {brands.map((brand) => ( <option value={brand.id} >{brand.name}</option>))}
                </Form.Select>

                <Form.Control.Feedback>¡Correct!</Form.Control.Feedback>

                <Form.Control.Feedback type="invalid">
                    Please select brand ID
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
         <Link to={`/proyectCar/public/cars/`} className='btn btn-primary'>return</Link>
          <Toaster />
        </Stack>
        </Stack>
      </Stack>
    </Form>
    </div>
  );
}
export default UpdateCar;