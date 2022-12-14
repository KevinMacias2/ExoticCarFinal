import React, { useEffect, useState } from 'react';
import { Form, Container, Row, Button } from 'react-bootstrap';
import axios from 'axios';
import { useParams } from "react-router";
import Stack from 'react-bootstrap/Stack';
import toast, { Toaster } from 'react-hot-toast';
import {Link} from 'react-router-dom';

const UpdateSale = (props) => {
  let { id } = useParams();
  console.log("id",id);

  const [ formValue, setformValue ] = useState({
      id: '',
      dateSales: '' ,
      carId: '',
      customerId: '',
      sellerId: '',
  } )

  const [cars, setCars] = useState([])
    useEffect(() => {
      const getData = async () => {
        const response = await axios.get("http://localhost/proyectCar/public/api/cars")
        setCars(response.data)
      }
      getData()
    },[])

    const [customers, setCustomers] = useState([])
    useEffect(() => {
      const getData = async () => {
        const response = await axios.get("http://localhost/proyectCar/public/api/customers")
        setCustomers(response.data)
      }
      getData()
    },[])

    const [sellers, setSellers] = useState([])
    useEffect(() => {
      const getData = async () => {
        const response = await axios.get("http://localhost/proyectCar/public/api/sellers")
        setSellers(response.data)
      }
      getData()
    },[])

  useEffect ( ()=> {
    console.log("userEfects")
    getAllsaleId()
  }, [])

  const getAllsaleId = async () => {
    const response = await axios.get(`../../api/sale/` + id)
    console.log("response",response.data)
    if(response.data){
        setformValue({ ...formValue, 
          id: response.data.id,
          dateSales: response.data.dateSales,
          carId: response.data.carId,
          customerId: response.data.customerId,
          sellerId: response.data.sellerId,
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
    formData.append("dateSales", formValue.dateSales)
    formData.append("carId", formValue.carId)
    formData.append("customerId", formValue.customerId)
    formData.append("sellerId", formValue.sellerId)

    axios.post("http://localhost/proyectCar/public/api/sale/"+id,
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
          <Form.Label className=" fs-5 text-uppercase mx-auto fw-bold p-3 mt-1 mb-1 text-white "> Labor Data update</Form.Label>
        </Stack>


        <Form.Group className="mb-3">
                       
                        <Form.Label>Date of sale</Form.Label>
                        {/*
                        Se coloca "type" para especificar el tipo de dato que recibirá el campo
                        Se coloca "placeholder" para poner texto en el espacio donde se colocará la información
                        Se coloca "required" para hacer que ese campo sea obligatorio
                        */ }
                        <Form.Control type="date" placeholder="DateSales" required name="dateSales" value={formValue.dateSales} onChange={onChange} />
                        <Form.Text className="text-muted"></Form.Text>
                        {/*Se coloca el "Form.Control.Feedback" para indicar cuál será la retroalimentación
                        en caso de que la información ingresada sea correcta*/}
                        <Form.Control.Feedback>¡Correct!</Form.Control.Feedback>
                        {/*Se coloca un "Form.Control.Feedback de tipo ""invalid" para 
                        que aparezca una señal cuando se haya ingresado incorrectamente 
                        la información*/}
                        <Form.Control.Feedback type="invalid">
                            Please add the date sale
                        </Form.Control.Feedback>
                    </Form.Group> 


            <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Label>Car ID</Form.Label>

                    <Form.Select type="number" name="carId" value={formValue.carId} onChange={onChange} required aria-label="Default select example">
                        <option select disable value="">Select car ID...</option>
                        {cars.map((car) => ( <option value={car.id} >{car.model}</option>))}
                    </Form.Select>

                    <Form.Control.Feedback>¡Correct!</Form.Control.Feedback>

                    <Form.Control.Feedback type="invalid">
                        Please select car ID
                    </Form.Control.Feedback>

            </Form.Group>


            <Form.Group className="mb-3" controlId="formBasicEmail">

                <Form.Label>Customer ID</Form.Label>

                <Form.Select type="number" name="customerId" value={formValue.customerId} onChange={onChange} required aria-label="Default select example">
                    <option select disable value="">Select customer ID...</option>
                    {customers.map((customer) => ( <option value={customer.id} >{customer.name}</option>))}
                </Form.Select>

                <Form.Control.Feedback>¡Correct!</Form.Control.Feedback>

                <Form.Control.Feedback type="invalid">
                    Please select customer ID
                </Form.Control.Feedback>

            </Form.Group>

            
            <Form.Group className="mb-3" controlId="formBasicEmail">

                <Form.Label>Seller ID</Form.Label>

                <Form.Select type="number" name="sellerId" value={formValue.sellerId} onChange={onChange} required aria-label="Default select example">
                    <option select disable value="">Select seller ID...</option>
                    {sellers.map((seller) => ( <option value={seller.id} >{seller.name}</option>))}
                </Form.Select>

                <Form.Control.Feedback>¡Correct!</Form.Control.Feedback>

                <Form.Control.Feedback type="invalid">
                    Please select seller ID
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
        <Link to={`/proyectCar/public/sales/`} className='btn btn-primary'>Return</Link>
          <Toaster />
        </Stack>
        </Stack>
      </Stack>
    </Form>
    </div>
  );
}
export default UpdateSale;